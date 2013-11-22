# See the README for installation instructions.
UGLIFY = node_modules/.bin/uglifyjs
BROWSERIFY = node_modules/.bin/browserify

all: \
	$(shell npm install && mkdir -p dist) \
	dist/leaflet-interact-intent.js \
	dist/leaflet-interact-intent.min.js

clean:
	rm -f dist/*

dist/leaflet-interact-intent.js: index.js 
	$(BROWSERIFY) -s leafletInteractIntent index.js > dist/leaflet-interact-intent.js

dist/leaflet-interact-intent.min.js: dist/leaflet-interact-intent.js
	$(UGLIFY) dist/leaflet-interact-intent.js > dist/leaflet-interact-intent.min.js

.PHONY: clean
