var hoverintent = require('hoverintent');

module.exports = window.L.Control.extend({
    options: {
        clicktoplay: false
    },

    onAdd: function(map) {
        var opts = {
            interval: 200
        };

        var container = L.DomUtil.create('div', 'interaction-intent-control');
        var mask = map._createPane('leaflet-mask', map._container);
        if (this.options.clicktoplay) L.DomUtil.addClass(mask, 'leaflet-playback');

        L.DomEvent.disableScrollPropagation(mask);

        hoverintent(map._container, function() {
            if (!L.DomUtil.hasClass(mask, 'leaflet-playback')) mask.style.display = 'none';
        }, function() {
            mask.style.display = 'block';
        }).options(opts);

        L.DomEvent.addListener(mask, 'click', function() {
            L.DomUtil.removeClass(mask, 'leaflet-playback');
            mask.style.display = 'none';
        });
        return container;
    }
});
