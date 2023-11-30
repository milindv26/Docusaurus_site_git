---
sidebar_position: 1
---

# Terminal commands

* Activate conda environment:
```
conda activate my_environment
```
* Remove conda environment:
```
conda env remove --name my_environment
```
* Git remote repository url:
```
git remote -v
```
* Yarn depoy to GitHub pages:
```
cmd /C "set GIT_USER=milindv26&& yarn deploy"
```
* Yarn start local server:
```
yarn start
```
* Git merge unrelated histories:
```
git pull --allow-unrelated-histories <repository_name> main
```
* Convert .ipynb to .md:
```
jupyter nbconvert --to markdown notebook.ipynb
```
* Justify command from .md to HTML through JDX:
```
<div style={{ textAlign: 'justify' }}>
```
* Update the changed repository name:
```
git remote set-url origin https://github.com/username/new-repository-name.git
```