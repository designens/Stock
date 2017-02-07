# 카카오증권
-----------------------------------------------------------------------
## 1. Gitlab Setting

### 1) Git global setup
* * *
	git config --global user.name "cristina"
	git config --global user.email "inyoung@dunamu.com"

### 2) Create a new repository
* * *
	git clone git@gitlab.dev.dunamu.com:publishing/stock.git
	cd stock
	touch README.md
	git add README.md
	git commit -m "add README"
	git push -u origin master

### 3) Existing folder or Git repository
* * *
	cd existing_folder
	git init
	git remote add origin git@gitlab.dev.dunamu.com:publishing/stock.git
	git add .
	git commits
	git push -u origin masterß