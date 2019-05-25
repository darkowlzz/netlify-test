install-tools:
	pip install git+https://github.com/darkowlzz/peji.git

build: install-tools
	peji site generate-site-data data/config.json
