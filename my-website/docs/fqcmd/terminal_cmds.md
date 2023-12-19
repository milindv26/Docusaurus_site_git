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
* Yarn start local server:
```
yarn start
```
* Yarn depoy to GitHub pages:
```
cmd /C "set GIT_USER=milindv26&& yarn deploy"
```
* Convert .ipynb to .md:
```
jupyter nbconvert --to markdown notebook.ipynb
```
* Justify command from .md to HTML through JDX:
```
<div style={{ textAlign: 'justify' }}>
```
* Justify center image in markdown
```
<div style={{ textAlign: 'center' }}>
    <img src={require('./assets/2r.png').default} alt="Fig. 2"/>
    <p style={{ marginTop: '1px' }}>Title</p>
</div>
```
* Git remote repository url:
```
git remote -v
```
* Git merge unrelated histories:
```
git pull --allow-unrelated-histories <repository_name> main
```
* Update the changed repository name:
```
git remote set-url origin https://github.com/username/new-repository-name.git
```