## Interact intent: A plugin for Leaflet.

This plugin attempts to enable map interaction when a user wants to interacts
with a map. Page scrolling should work without unintentionaly zooming when a
map is reached on a page.

Want to see it in action? [Check out the demo](http://tristen.ca/leaflet-interact-intent/)

### Usage

``` js
var map = L.map('map'); 
new leafletInteractIntent().addTo(map)
```

### Building

    npm install && make

__ProTip__ You may want to install `watch` so you can run `watch make`
without needing to execute make on every change.
