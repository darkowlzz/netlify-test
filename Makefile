install-tools:
	pip install git+https://github.com/darkowlzz/peji.git

build: install-tools
	curl -Lo data.json https://github.com/darkowlzz/peji-data-example/releases/download/v0.0.3/data.json
	peji page generate-site-data data/config.json data.json
	peji page generate-site data/config.json
