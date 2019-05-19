install-tools:
	pip install git+https://github.com/darkowlzz/peji.git

build: install-tools
	peji site update-site-data public/config.js $(DATA_URL)
