webpackJsonp([103],{537:function(n,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default='\nlet data={"geometry":{"type":"Polygon","coordinates":[[89.066319,42.015565],[91.494763,35.573006],[94.291152,30.683971],[101.355714,31.759106],[108.861811,34.848232],[106.874903,39.212162],[102.901087,42.398553],[95.542168,43.853853]]}};\nvar inmap = new inMap.Map({\n    id: "allmap",\n    // skin: "WhiteLover",\n    center: [105.403119, 38.028658],\n    zoom: {\n        value: 5,\n        show: true,\n        max: 18,\n        min: 5\n    }\n});\ninmap.getMap().disableScrollWheelZoom();\nlet overlay = new inMap.PolygonEditorOverlay({\n    style: {\n        strokeColor: \'rgba(24,144,255,1)\',\n        fillColor: \'rgba(24,144,255,0.4)\',\n        strokeWeight: 2,\n        strokeOpacity: 1,\n        enableEditing: true\n    },\n    data: data\n});\ninmap.add(overlay);\n'}});