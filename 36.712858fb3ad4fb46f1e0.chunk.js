webpackJsonp([36],{501:function(e,o,n){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var t=n(620),a=function(e){return e&&e.__esModule?e:{default:e}}(t);o.default="\nvar data = "+JSON.stringify(a.default)+";\nvar inmap = new inMap.Map({\n    id: 'allmap',\n    skin: \"Blueness\",\n    center: [110.77513, 30.333503],\n    zoom: {\n        value: 6,\n        show: true,\n        max: 17,\n        min: 5\n    },\n});\n\nvar overlay = new inMap.LabelOverlay({\n    tooltip: {\n        show: true,\n        formatter: \"'打分：'+{count}\",\n        offsets: {\n            top: 5,\n            left: 12,\n        }\n    },\n    style: {\n        normal: {\n            font: '18px Arial',\n            color: 'rgba(255, 250, 50, 1)',\n            shadowColor: 'rgba(255, 250, 50, 1)',\n            shadowBlur: 10\n        },\n        mouseOver: {\n            color: 'rgba(255, 250, 255, 1)',\n        },\n        selected: {\n            color: 'rgba(184,0,0,1)'\n        },\n    },\n    data: data,\n    event: {\n        onMouseClick: function (item, event) {\n            console.log(item);\n            //能获取当前点的信息\n        }\n    }\n});\ninmap.add(overlay);\n"},620:function(e,o){e.exports=[{count:"9.99",geometry:{type:"Point",coordinates:["116.395645","39.929986"]},name:"￥9.99"},{count:"0.36",geometry:{type:"Point",coordinates:["121.487899","31.249162"]},name:"￥0.36"},{count:"6.08",geometry:{type:"Point",coordinates:["117.210813","39.14393"]},name:"￥6.08"},{count:"3.20",geometry:{type:"Point",coordinates:["106.530635","29.544606"]},name:"￥3.20"},{count:"3.52",geometry:{type:"Point",coordinates:["117.216005","31.859252"]},name:"￥3.52"},{count:"8.37",geometry:{type:"Point",coordinates:["117.984943","26.050118"]},name:"￥8.37"},{count:"2.69",geometry:{type:"Point",coordinates:["102.457625","38.103267"]},name:"￥2.69"},{count:"8.72",geometry:{type:"Point",coordinates:["113.394818","23.408004"]},name:"￥8.72"},{count:"0.74",geometry:{type:"Point",coordinates:["108.924274","23.552255"]},name:"￥0.74"},{count:"6.77",geometry:{type:"Point",coordinates:["106.734996","26.902826"]},name:"￥6.77"},{count:"6.89",geometry:{type:"Point",coordinates:["109.733755","19.180501"]},name:"￥6.89"},{count:"8.77",geometry:{type:"Point",coordinates:["115.661434","38.61384"]},name:"￥8.77"},{count:"8.87",geometry:{type:"Point",coordinates:["113.486804","34.157184"]},name:"￥8.87"},{count:"6.23",geometry:{type:"Point",coordinates:["128.047414","47.356592"]},name:"￥6.23"},{count:"3.78",geometry:{type:"Point",coordinates:["112.410562","31.209316"]},name:"￥3.78"},{count:"2.60",geometry:{type:"Point",coordinates:["111.720664","27.695864"]},name:"￥2.60"},{count:"9.19",geometry:{type:"Point",coordinates:["119.368489","33.013797"]},name:"￥9.19"},{count:"7.47",geometry:{type:"Point",coordinates:["115.676082","27.757258"]},name:"￥7.47"},{count:"3.10",geometry:{type:"Point",coordinates:["126.262876","43.678846"]},name:"￥3.10"},{count:"5.21",geometry:{type:"Point",coordinates:["122.753592","41.6216"]},name:"￥5.21"},{count:"1.61",geometry:{type:"Point",coordinates:["114.415868","43.468238"]},name:"￥1.61"},{count:"9.30",geometry:{type:"Point",coordinates:["106.155481","37.321323"]},name:"￥9.30"},{count:"3.24",geometry:{type:"Point",coordinates:["96.202544","35.499761"]},name:"￥3.24"},{count:"2.03",geometry:{type:"Point",coordinates:["118.527663","36.09929"]},name:"￥2.03"},{count:"6.03",geometry:{type:"Point",coordinates:["112.515496","37.866566"]},name:"￥6.03"},{count:"1.86",geometry:{type:"Point",coordinates:["109.503789","35.860026"]},name:"￥1.86"},{count:"7.47",geometry:{type:"Point",coordinates:["102.89916","30.367481"]},name:"￥7.47"},{count:"3.35",geometry:{type:"Point",coordinates:["89.137982","31.367315"]},name:"￥3.35"},{count:"6.48",geometry:{type:"Point",coordinates:["85.614899","42.127001"]},name:"￥6.48"},{count:"6.89",geometry:{type:"Point",coordinates:["101.592952","24.864213"]},name:"￥6.89"},{count:"2.97",geometry:{type:"Point",coordinates:["119.957202","29.159494"]},name:"￥2.97"},{count:"8.78",geometry:{type:"Point",coordinates:["114.186124","22.293586"]},name:"￥8.78"},{count:"3.68",geometry:{type:"Point",coordinates:["113.557519","22.204118"]},name:"￥3.68"},{count:"2.21",geometry:{type:"Point",coordinates:["120.961454","23.80406"]},name:"￥2.21"},{count:"6.61",geometry:{type:"Point",coordinates:["117.282699","31.866942"]},name:"￥6.61"},{count:"5.13",geometry:{type:"Point",coordinates:["117.058739","30.537898"]},name:"￥5.13"},{count:"8.79",geometry:{type:"Point",coordinates:["117.35708","32.929499"]},name:"￥8.79"},{count:"1.31",geometry:{type:"Point",coordinates:["115.787928","33.871211"]},name:"￥1.31"},{count:"6.91",geometry:{type:"Point",coordinates:["117.88049","31.608733"]},name:"￥6.91"},{count:"6.19",geometry:{type:"Point",coordinates:["117.494477","30.660019"]},name:"￥6.19"}]}});