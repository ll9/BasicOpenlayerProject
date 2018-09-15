class MapManipulator {
    constructor() {
        this.map = this.InitMap();
        this.VectorLayer = this.InitVectorLayer();

        this.map.addLayer(this.VectorLayer);
    }

    InitVectorLayer() {
        let VectorSource = new ol.source.Vector();
        let point = new ol.geom.Point(ol.proj.fromLonLat([12.363360, 47.815700]));
        let feature = new ol.Feature(point);
        VectorSource.addFeature(feature);

        let VectorLayer = new ol.layer.Vector({
            source: VectorSource
        });
        return VectorLayer;
    }

    InitMap() {
        return new ol.Map({
            target: 'map',
            layers: [
                new ol.layer.Tile({
                    source: new ol.source.OSM()
                })
            ],
            view: new ol.View({
                center: ol.proj.fromLonLat([12.363360, 47.815700]),
                zoom: 14
            })
        });
    }
}





// const VecotrLayer = new ol.layer.Vector();
// const VectorSource = new ol.source.Vector();

// const point = new ol.geom.Point(ol.proj.fromLonLat([12.363360, 47.815700]));
// const feature = new ol.Feature(point);

// VectorSource.addFeature(feature);
// VecotrLayer.setSource(VectorSource);

// map.addLayer(VecotrLayer);

// function InitMap() {
//     return new ol.Map({
//         target: 'map',
//         layers: [
//             new ol.layer.Tile({
//                 source: new ol.source.OSM()
//             })
//         ],
//         view: new ol.View({
//             center: ol.proj.fromLonLat([12.363360, 47.815700]),
//             zoom: 14
//         })
//     });
// }
