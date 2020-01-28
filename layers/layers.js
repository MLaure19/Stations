var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_masqueIRIS_1 = new ol.format.GeoJSON();
var features_masqueIRIS_1 = format_masqueIRIS_1.readFeatures(json_masqueIRIS_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_masqueIRIS_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_masqueIRIS_1.addFeatures(features_masqueIRIS_1);
var lyr_masqueIRIS_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_masqueIRIS_1, 
                style: style_masqueIRIS_1,
                interactive: true,
                title: '<img src="styles/legend/masqueIRIS_1.png" /> masque IRIS'
            });
var format_StationsPM10ATMO_2 = new ol.format.GeoJSON();
var features_StationsPM10ATMO_2 = format_StationsPM10ATMO_2.readFeatures(json_StationsPM10ATMO_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StationsPM10ATMO_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StationsPM10ATMO_2.addFeatures(features_StationsPM10ATMO_2);
var lyr_StationsPM10ATMO_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_StationsPM10ATMO_2, 
                style: style_StationsPM10ATMO_2,
                interactive: true,
                title: '<img src="styles/legend/StationsPM10ATMO_2.png" /> Stations PM10 ATMO'
            });
var format_StationsPM25ATMO_3 = new ol.format.GeoJSON();
var features_StationsPM25ATMO_3 = format_StationsPM25ATMO_3.readFeatures(json_StationsPM25ATMO_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StationsPM25ATMO_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StationsPM25ATMO_3.addFeatures(features_StationsPM25ATMO_3);
var lyr_StationsPM25ATMO_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_StationsPM25ATMO_3, 
                style: style_StationsPM25ATMO_3,
                interactive: true,
                title: '<img src="styles/legend/StationsPM25ATMO_3.png" /> Stations PM2.5 ATMO'
            });
var format_PropositionpointsElichens_4 = new ol.format.GeoJSON();
var features_PropositionpointsElichens_4 = format_PropositionpointsElichens_4.readFeatures(json_PropositionpointsElichens_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PropositionpointsElichens_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PropositionpointsElichens_4.addFeatures(features_PropositionpointsElichens_4);
var lyr_PropositionpointsElichens_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PropositionpointsElichens_4, 
                style: style_PropositionpointsElichens_4,
                interactive: true,
                title: '<img src="styles/legend/PropositionpointsElichens_4.png" /> Proposition points Elichens'
            });

lyr_OSMStandard_0.setVisible(true);lyr_masqueIRIS_1.setVisible(true);lyr_StationsPM10ATMO_2.setVisible(true);lyr_StationsPM25ATMO_3.setVisible(true);lyr_PropositionpointsElichens_4.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_masqueIRIS_1,lyr_StationsPM10ATMO_2,lyr_StationsPM25ATMO_3,lyr_PropositionpointsElichens_4];
lyr_masqueIRIS_1.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'ogc_fid0': 'ogc_fid0', 'params:(0,0)': 'params:(0,0)', });
lyr_StationsPM10ATMO_2.set('fieldAliases', {'Numéro station': 'Numéro station', 'Station': 'Station', 'Polluant': 'Polluant', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_StationsPM25ATMO_3.set('fieldAliases', {'Numéro station': 'Numéro station', 'Station': 'Station', 'Polluant': 'Polluant', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_PropositionpointsElichens_4.set('fieldAliases', {'id': 'id', });
lyr_masqueIRIS_1.set('fieldImages', {'ogc_fid': 'TextEdit', 'ogc_fid0': 'TextEdit', 'params:(0,0)': 'TextEdit', });
lyr_StationsPM10ATMO_2.set('fieldImages', {'Numéro station': 'Range', 'Station': 'TextEdit', 'Polluant': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_StationsPM25ATMO_3.set('fieldImages', {'Numéro station': 'Range', 'Station': 'TextEdit', 'Polluant': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_PropositionpointsElichens_4.set('fieldImages', {'id': 'TextEdit', });
lyr_masqueIRIS_1.set('fieldLabels', {'ogc_fid': 'no label', 'ogc_fid0': 'no label', 'params:(0,0)': 'no label', });
lyr_StationsPM10ATMO_2.set('fieldLabels', {'Numéro station': 'no label', 'Station': 'inline label', 'Polluant': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', });
lyr_StationsPM25ATMO_3.set('fieldLabels', {'Numéro station': 'no label', 'Station': 'no label', 'Polluant': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', });
lyr_PropositionpointsElichens_4.set('fieldLabels', {'id': 'no label', });
lyr_PropositionpointsElichens_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});