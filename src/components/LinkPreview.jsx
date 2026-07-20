import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";

const PREVIEW_WIDTH = 250;
const PREVIEW_HEIGHT = 190;
const SCREEN_PADDING = 10;

export const LinkPreview = ({ children, url, className = "" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [metadata, setMetadata] = useState(null);
  const [loading, setLoading] = useState(false);

  const triggerRef = useRef(null);

  const getDomain = (link) => {
    try {
      return new URL(link).hostname.replace(/^www\./, "");
    } catch {
      return link;
    }
  };

  const getFallbackImage = (link) => {
    const domain = getDomain(link).toLowerCase();

    if (domain.includes("github")) {
      return "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png";
    }

    if (domain.includes("youtube") || domain.includes("youtu.be")) {
      return "https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg";
    }

    if (
      domain.includes("twitter") ||
      domain.includes("x.com")
    ) {
      return "https://abs.twimg.com/favicons/twitter.3.ico";
    }

    if (domain.includes("linkedin")) {
      return "https://cdn-icons-png.flaticon.com/512/174/174857.png";
    }

    if (
      domain.includes("medium") ||
      domain.includes("dev.to") ||
      domain.includes("blog")
    ) {
      return "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=400&h=250&fit=crop";
    }

    return "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop";
  };

  const updatePosition = () => {
    if (!triggerRef.current) return;

    const rect = triggerRef.current.getBoundingClientRect();
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    let x = rect.left + rect.width / 2;
    let y = rect.bottom + 10;

    const minimumX = PREVIEW_WIDTH / 2 + SCREEN_PADDING;
    const maximumX =
      windowWidth - PREVIEW_WIDTH / 2 - SCREEN_PADDING;

    x = Math.max(minimumX, Math.min(x, maximumX));

    if (y + PREVIEW_HEIGHT > windowHeight - SCREEN_PADDING) {
      y = rect.top - PREVIEW_HEIGHT - 10;
    }

    y = Math.max(SCREEN_PADDING, y);

    setPosition({ x, y });
  };

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);

      if (mobile) {
        setIsOpen(false);
      }
    };

    checkMobile();

    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  useEffect(() => {
    setMetadata(null);
    setLoading(false);
  }, [url]);

  useEffect(() => {
    if (!isOpen) return undefined;

    updatePosition();

    window.addEventListener("scroll", updatePosition, true);
    window.addEventListener("resize", updatePosition);

    return () => {
      window.removeEventListener("scroll", updatePosition, true);
      window.removeEventListener("resize", updatePosition);
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen || metadata || loading || !url) {
      return undefined;
    }

    const controller = new AbortController();

    const fetchMetadata = async () => {
      setLoading(true);

      try {
        const response = await fetch(
          `https://api.microlink.io/?url=${encodeURIComponent(url)}`,
          {
            signal: controller.signal,
          }
        );

        if (!response.ok) {
          throw new Error("Unable to fetch metadata.");
        }

        const data = await response.json();

        if (data.status !== "success") {
          throw new Error("Metadata API returned an error.");
        }

        setMetadata({
          image:
            data.data.image?.url ||
            data.data.logo?.url ||
            getFallbackImage(url),
          title: data.data.title || getDomain(url),
          description:
            data.data.description || "Open this link",
        });
      } catch (error) {
        if (error.name !== "AbortError") {
          setMetadata({
            image: getFallbackImage(url),
            title: getDomain(url),
            description: "Open this link",
          });
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    };

    fetchMetadata();

    return () => {
      controller.abort();
    };
  }, [isOpen, metadata, loading, url]);

  const openPreview = () => {
    if (!isMobile) {
      setIsOpen(true);
    }
  };

  const closePreview = () => {
    setIsOpen(false);
  };

  const handleImageError = (event) => {
    const fallback = getFallbackImage(url);

    if (event.currentTarget.src !== fallback) {
      event.currentTarget.src = fallback;
    }
  };

  return (
    <>
      <span
        ref={triggerRef}
        className={className}
        style={{ display: "inline-block" }}
        onMouseEnter={openPreview}
        onMouseLeave={closePreview}
        onFocus={openPreview}
        onBlur={closePreview}
      >
        {children}
      </span>

      {typeof document !== "undefined" &&
        createPortal(
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{
                  opacity: 0,
                  y: -8,
                  scale: 0.96,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  y: -8,
                  scale: 0.96,
                }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 30,
                  mass: 0.8,
                }}
                style={{
                  position: "fixed",
                  left: position.x,
                  top: position.y,
                  transform: "translateX(-50%)",
                  zIndex: 9999,
                  pointerEvents: "none",
                }}
              >
                <div className="w-[250px] overflow-hidden rounded-xl border-2 border-teal-700 bg-gradient-to-br from-slate-800 to-slate-900 shadow-xl shadow-teal-700/40 backdrop-blur-md">
                  <div className="relative h-[100px] overflow-hidden">
                    {loading ? (
                      <div className="flex h-full w-full items-center justify-center bg-slate-800">
                        <div className="h-7 w-7 animate-spin rounded-full border-2 border-gray-500 border-t-teal-300" />
                      </div>
                    ) : (
                      <img
                        src={
                          metadata?.image ||
                          getFallbackImage(url)
                        }
                        alt={`${metadata?.title || getDomain(url)} preview`}
                        onError={handleImageError}
                        className="h-full w-full object-cover"
                      />
                    )}

                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
                  </div>

                  <div className="p-4">
                    <div className="mb-2 flex items-center gap-2">
                      <div className="h-2 w-2 animate-pulse rounded-full bg-gradient-to-r from-teal-200 to-teal-400" />

                      <p className="truncate text-xs font-medium text-gray-300">
                        {getDomain(url)}
                      </p>
                    </div>

                    <p className="line-clamp-2 text-sm font-semibold text-white">
                      {loading
                        ? "Loading preview..."
                        : metadata?.title || "Open link"}
                    </p>

                    {!loading && metadata?.description && (
                      <p className="mt-2 line-clamp-2 text-xs leading-5 text-gray-400">
                        {metadata.description}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </>
  );
};