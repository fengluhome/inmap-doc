webpackJsonp([94],{641:function(n,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=[{name:"线路一",geometry:{type:"LineString",coordinates:[[115.661434,38.61384],[116.395645,39.929986]]},count:1},{name:"线路二",geometry:{type:"LineString",coordinates:[[117.210813,39.14393],[116.395645,39.929986]]},count:2},{name:"线路三",geometry:{type:"LineString",coordinates:[[118.527663,36.09929],[116.395645,39.929986]]},count:3},{name:"线路四",geometry:{type:"LineString",coordinates:[[112.515496,37.866566],[116.395645,39.929986]]},count:4},{name:"线路五",geometry:{type:"LineString",coordinates:[[122.753592,41.6216],[116.395645,39.929986]]},count:5},{name:"线路六",geometry:{type:"LineString",coordinates:[[113.486804,34.157184],[116.395645,39.929986]]},count:6},{name:"线路七",geometry:{type:"LineString",coordinates:[[119.368489,33.013797],[116.395645,39.929986]]},count:2},{name:"线路八",geometry:{type:"LineString",coordinates:[[121.487899,31.249162],[116.395645,39.929986]]},count:1},{name:"线路九",geometry:{type:"LineString",coordinates:[[113.394818,23.408004],[116.395645,39.929986]]},count:5}];e.default=" \nlet data = "+JSON.stringify(o)+"\nvar inmap = new inMap.Map({\n    id: 'allmap',\n    skin: \"Blueness\",\n    center: [109.403119, 38.028658],\n    zoom: {\n        value: 6,\n        show: true,\n        max: 18,\n        min: 5\n    },\n});\n\nvar overlay = new inMap.LineStringOverlay({\n    tooltip: {\n        show: true,\n        formatter: '{name}',\n    },\n    style: {\n        normal: {\n            borderColor: 'rgba(200, 200, 50, 1)',\n            borderWidth: 1,\n            shadowColor: 'rgba(255, 250, 50, 1)',\n            shadowBlur: 20,\n            lineOrCurve: 'line', //curve or line\n        },\n        mouseOver: {\n            borderColor: 'rgba(255, 255, 255, 1)'\n        },\n        selected: {\n            borderColor: 'rgba(184,0,0,1)',\n        },\n        splitList: [{\n                start: 0,\n                end: 1,\n                borderWidth: 1,\n                borderColor: 'rgba(156,200,249,1)'\n            },\n            {\n                start: 1,\n                end: 2,\n                borderWidth: 2,\n                borderColor: 'rgba(93,158,247,1)'\n            },\n            {\n                start: 3,\n                end: 4,\n                borderWidth: 3,\n                borderColor: 'rgba(134,207,55,1)'\n            },\n            {\n                start: 5,\n                borderWidth: 4,\n                borderColor: \"rgba(252,198,10,1)\"\n            }\n        ]\n    },\n    data: data,\n\n});\ninmap.add(overlay);\n"}});