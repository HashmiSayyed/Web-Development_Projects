## Git

### Basic
* git init
* git add file.txt
* git add . (to add all files in working directory)
* git status
* git commit -m "some message"
* git log

### Remove files from staging area
* git rm --cached file.txt
* git rm --cached -r . (to remove all files from staging area)

### Undo changes
* git diff file.txt
* git checkout file.txt

### Branch
* git branch branchName
* git branch
* git checkout branchName
* merging branch to master branch
    1. (go to master branch)
    2. git merge branchName

### GitHub & Other remote repository
* git remote add origin url
* git push -u origin master

### Clone remote repository
* git clone url

### Configure E-mail & User-name
* (if ask for identity)
* git config --global user.email "you@example.com"
* git config --global user.name "Your Name"