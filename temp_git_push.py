import subprocess, os, json
root = r'C:\Users\dkoth\OneDrive\Desktop\Personal Portfolio'
os.chdir(root)
report = {
    'cwd': os.getcwd(),
    'git_version': None,
    'status': None,
    'branch': None,
    'head': None,
    'origin_head': None,
    'log': None,
    'actions': {},
}

def run(cmd):
    try:
        output = subprocess.check_output(cmd, stderr=subprocess.STDOUT, shell=True, text=True)
        return {'success': True, 'output': output.strip()}
    except subprocess.CalledProcessError as e:
        return {'success': False, 'output': e.output.strip() if e.output else '', 'returncode': e.returncode}

report['git_version'] = run('git --version')
report['status'] = run('git status --short')
report['branch'] = run('git branch --show-current')
report['head'] = run('git rev-parse HEAD')
report['origin_head'] = run('git rev-parse origin/main')
report['log'] = run('git log -1 --oneline')

if report['status']['success'] and report['status']['output'].strip():
    report['actions']['add'] = run('git add -A')
    report['actions']['commit'] = run('git commit -m "Update portfolio app and README"')
    report['actions']['push'] = run('git push origin main')
else:
    report['actions']['note'] = 'no pending changes to commit'

with open(os.path.join(root, 'git_push_report.json'), 'w', encoding='utf-8') as f:
    json.dump(report, f, indent=2)
print('done')
