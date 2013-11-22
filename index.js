var hoverintent = require('hoverintent');

module.exports = window.L.Control.extend({
    onAdd: function(map) {
        var opts = {
            interval: 200
        };

        var container = L.DomUtil.create('div', 'interaction-intent-control');
        var mask = map._createPane('leaflet-mask', map._container);

        L.DomEvent.disableScrollPropagation(mask);
        mask.style.cssText = 'position:absolute;z-index:1000;width:100%;height:100%;';

        hoverintent(map._container, function() {
            mask.style.display = 'none';
        }, function() {
            mask.style.display = 'block';
        }).options(opts);

        return container;
    }
});
