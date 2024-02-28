webpackJsonp([40],{502:function(n,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default="\nvar inmap = new inMap.Map({\n    id: 'allmap',\n    skin: \"Blueness\",\n    center: [105.403119, 38.028658],\n    zoom: {\n        value: 5,\n        show: true,\n        max: 18,\n        min: 5\n    },\n})\nlet data = [{\n        name: '北京',\n        geometry: {\n            type: 'Point',\n            coordinates: ['116.3', '39.9']\n        },\n        style: { \n            color: 'rgba(200, 200, 50, 0.7)',\n            speed: 0.5,\n        }\n    },\n    {\n        name: '上海',\n        geometry: {\n            type: 'Point',\n            coordinates: ['121.29', '31.11']\n        },\n        style: {\n            color: '#6EE7FF',\n            speed: 1,\n            size: 40,\n        }\n    },\n    {\n        name: '福建',\n        geometry: {\n            type: 'Point',\n            coordinates: ['117.984943', '26.050118']\n        },\n        style: {\n            color: '#90EE90',\n            speed: 0.45,\n        }\n    },\n    {\n        name: '广东',\n        geometry: {\n            type: 'Point',\n            coordinates: ['113.394818', '23.408004']\n        },\n        style: {\n            color: '#f8983a',\n            speed: 0.9,\n        }\n    },\n    {\n        name: '广西',\n        geometry: {\n            type: 'Point',\n            coordinates: ['108.924274', '23.552255']\n        },\n        style: {\n            color: '#FAFA32',\n            speed: 0.8,\n            size: 50,\n        }\n    }\n\n]\nvar overlay = new inMap.PointAnimationOverlay({\n    style: {\n        fps: 90, //动画帧数\n        color: \"#FAFA32\",\n        size: 20,\n        speed: 0.15\n    },\n    data: data\n});\ninmap.add(overlay);\n"}});