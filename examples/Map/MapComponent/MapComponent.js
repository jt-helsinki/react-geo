webpackJsonp([5],{24:function(e,o,t){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var i=t(0),r=t(25),a=function(e){var o,t=e||{};o=void 0!==t.attributions?t.attributions:[a.ATTRIBUTION];var i=void 0!==t.crossOrigin?t.crossOrigin:"anonymous",n=void 0!==t.url?t.url:"https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png";r.a.call(this,{attributions:o,cacheSize:t.cacheSize,crossOrigin:i,opaque:void 0===t.opaque||t.opaque,maxZoom:void 0!==t.maxZoom?t.maxZoom:19,reprojectionErrorThreshold:t.reprojectionErrorThreshold,tileLoadFunction:t.tileLoadFunction,url:n,wrapX:t.wrapX})};i.a.inherits(a,r.a),a.ATTRIBUTION='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors.',o.default=a},25:function(e,o,t){"use strict";var i=t(0),r=t(41),a=t(35),n=function(e){var o=e||{},t=void 0!==o.projection?o.projection:"EPSG:3857",i=void 0!==o.tileGrid?o.tileGrid:a.a.createXYZ({extent:a.a.extentFromProjection(t),maxZoom:o.maxZoom,minZoom:o.minZoom,tileSize:o.tileSize});r.a.call(this,{attributions:o.attributions,cacheSize:o.cacheSize,crossOrigin:o.crossOrigin,logo:o.logo,opaque:o.opaque,projection:t,reprojectionErrorThreshold:o.reprojectionErrorThreshold,tileGrid:i,tileLoadFunction:o.tileLoadFunction,tilePixelRatio:o.tilePixelRatio,tileUrlFunction:o.tileUrlFunction,url:o.url,urls:o.urls,wrapX:void 0===o.wrapX||o.wrapX,transition:o.transition})};i.a.inherits(n,r.a),o.a=n},963:function(e,o,t){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}var r=t(1),a=i(r),n=t(9),l=t(24),c=i(l),u=t(34),s=i(u),p=t(39),d=i(p),m=t(26),h=i(m),f=t(22),v=new Promise(function(e){var o=new s.default({source:new c.default});e(new h.default({view:new d.default({center:[135.1691495,34.6565482],projection:"EPSG:4326",zoom:16}),layers:[o]}))}),w=(0,f.mappify)(f.MapComponent),g=(0,f.mappify)(f.NominatimSearch);(0,n.render)(a.default.createElement(f.MapProvider,{map:v},"NominatimSearch: ",a.default.createElement(g,null),a.default.createElement(w,{style:{height:"512px"}})),document.getElementById("exampleContainer"))}},[963]);