class MapManipulator {
    constructor() {
        this.VectorSource = new ol.source.Vector();
        this.Map = this.InitMap();

        // this.AddPoint(12.363360, 47.815700)
    }

    InitMap() {
        return new ol.Map({
            target: 'map',
            layers: [
                new ol.layer.Tile({
                    source: new ol.source.OSM()
                }),
                new ol.layer.Vector({
                    source: this.VectorSource
                })
            ],
            view: new ol.View({
                center: ol.proj.fromLonLat([12.363360, 47.815700]),
                zoom: 14
            })
        });
    }

    AddPoint(longitude, latitude) {
        let point = new ol.geom.Point(ol.proj.fromLonLat([longitude, latitude]));
        let feature = new ol.Feature(point);

        this.VectorSource.addFeature(feature);
    }
}