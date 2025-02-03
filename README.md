# Cài Chocolatey 
https://chocolatey.org/install

Mở PowerShell (Run as Administrator) và chạy lệnh sau:

```bash
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
```

# Cài Git

```bash
choco install git.install
```

# Cài VSCode

```bash
choco install vscode
```

## Cài các extension sau cho VSCode
Ctrl+Shift+X để mở Extensions và cài các extension sau:

Tìm kiếm theo từ khóa và install: 

`funkyremi.vscode-google-translate`

Notes: File > Open Folder... > chọn thư mục chứa dự án để mở dự án

# Cài NodeJS

```bash
choco install nodejs.install
```

# Clone dự án về máy

Mở Git Bash và chạy lệnh sau:
```bash
git clone https://gitlab.com/tech-fusions/doc-automation.git
```


## Developing
```bash
$ npm install
$ npm run dev # dev server at http://localhost:8080
```
