@echo off
cd /d C:\Users\dkoth\OneDrive\Desktop\Personal Portfolio
REM capture initial git status
git status --short > gitstatus2.txt 2>&1
REM stage all files
git add -A > gitadd.txt 2>&1
REM commit changes
git commit -m "Update portfolio app and README" > gitcommit.txt 2>&1
set COMMIT_EXIT=%ERRORLEVEL%
REM push to origin main
git push origin main > gitpush.txt 2>&1
set PUSH_EXIT=%ERRORLEVEL%
REM capture final git status
git status --short > gitstatus3.txt 2>&1
(echo COMMIT_EXIT=%COMMIT_EXIT%) > git_push_status.txt
(echo PUSH_EXIT=%PUSH_EXIT%) >> git_push_status.txt
