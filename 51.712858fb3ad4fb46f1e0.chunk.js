webpackJsonp([51],{623:function(e,o,t){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var n=t(624),r=function(e){return e&&e.__esModule?e:{default:e}}(n);o.default=" \n    var  data="+JSON.stringify(r.default)+';\n    var inmap = new inMap.Map({\n        id: \'allmap\',\n        skin: "Blueness",\n        center: [105.403119, 38.028658],\n        zoom: {\n          value: 6,\n          show: true,\n          max: 18,\n          min: 5\n        }\n      });\n\n      var overlay = new inMap.PointOverlay({\n        tooltip: {\n            show: true,\n            formatter: "{count}"\n        },\n        legend: {\n            show: true,  \n            //legned 回调\n            formatter: function (val, index, item) {\n                return val + "万";\n            }\n        },\n        style: {\n            normal: {\n                backgroundColor: "rgba(200, 200, 50, 1)",\n                borderWidth: 1,\n                borderColor: "rgba(255,255,255,1)",\n                size: 3,\n                label: {\n                    show: true,\n                    color: "rgba(255,255,255,1)"\n                }\n            },\n            mouseOver: {\n                backgroundColor: "rgba(200, 200, 200, 1)",\n                borderColor: "rgba(255,255,255,1)",\n                borderWidth: 4\n            },\n            selected: {\n                backgroundColor: "rgba(184,0,0,1)",\n                borderColor: "rgba(255,255,255,1)"\n            },\n            splitList: [{\n                    //设置区间颜色\n                    start: 0,\n                    end: 2,\n                    size: 3\n                },\n                {\n                    start: 2,\n                    end: 5,\n                    size: 6\n                },\n                {\n                    start: 5,\n                    end: 7,\n                    size: 9\n                },\n                {\n                    start: 7,\n                    size: 12\n                }\n            ]\n        },\n        event: {\n            onMouseClick: function (item) {\n                //能获取当前点的信息\n            }\n        },\n        data: data\n    });\n      inmap.add(overlay);\n    '},624:function(e,o){e.exports=[{name:"海门",count:7,geometry:{type:"Point",coordinates:[121.15,31.89]}},{name:"鄂尔多斯",count:5,geometry:{type:"Point",coordinates:[109.781327,39.608266]}},{name:"招远",count:8,geometry:{type:"Point",coordinates:[120.38,37.35]}},{name:"舟山",count:3,geometry:{type:"Point",coordinates:[122.207216,29.985295]}},{name:"齐齐哈尔",count:3,geometry:{type:"Point",coordinates:[123.97,47.33]}},{name:"盐城",count:4,geometry:{type:"Point",coordinates:[120.13,33.38]}},{name:"赤峰",count:0,geometry:{type:"Point",coordinates:[118.87,42.28]}},{name:"青岛",count:6,geometry:{type:"Point",coordinates:[120.33,36.07]}},{name:"乳山",count:0,geometry:{type:"Point",coordinates:[121.52,36.89]}},{name:"金昌",count:3,geometry:{type:"Point",coordinates:[102.188043,38.520089]}},{name:"泉州",count:0,geometry:{type:"Point",coordinates:[118.58,24.93]}},{name:"莱西",count:8,geometry:{type:"Point",coordinates:[120.53,36.86]}},{name:"日照",count:7,geometry:{type:"Point",coordinates:[119.46,35.42]}},{name:"胶南",count:1,geometry:{type:"Point",coordinates:[119.97,35.88]}},{name:"南通",count:5,geometry:{type:"Point",coordinates:[121.05,32.08]}},{name:"拉萨",count:5,geometry:{type:"Point",coordinates:[91.11,29.97]}},{name:"云浮",count:8,geometry:{type:"Point",coordinates:[112.02,22.93]}},{name:"梅州",count:1,geometry:{type:"Point",coordinates:[116.1,24.55]}},{name:"文登",count:6,geometry:{type:"Point",coordinates:[122.05,37.2]}},{name:"上海",count:5,geometry:{type:"Point",coordinates:[121.48,31.22]}},{name:"攀枝花",count:3,geometry:{type:"Point",coordinates:[101.718637,26.582347]}},{name:"威海",count:7,geometry:{type:"Point",coordinates:[122.1,37.5]}},{name:"承德",count:3,geometry:{type:"Point",coordinates:[117.93,40.97]}},{name:"厦门",count:7,geometry:{type:"Point",coordinates:[118.1,24.46]}},{name:"汕尾",count:5,geometry:{type:"Point",coordinates:[115.375279,22.786211]}},{name:"潮州",count:0,geometry:{type:"Point",coordinates:[116.63,23.68]}},{name:"丹东",count:3,geometry:{type:"Point",coordinates:[124.37,40.13]}},{name:"太仓",count:9,geometry:{type:"Point",coordinates:[121.1,31.45]}},{name:"曲靖",count:4,geometry:{type:"Point",coordinates:[103.79,25.51]}},{name:"烟台",count:1,geometry:{type:"Point",coordinates:[121.39,37.52]}},{name:"福州",count:2,geometry:{type:"Point",coordinates:[119.3,26.08]}},{name:"瓦房店",count:3,geometry:{type:"Point",coordinates:[121.979603,39.627114]}},{name:"即墨",count:3,geometry:{type:"Point",coordinates:[120.45,36.38]}},{name:"抚顺",count:2,geometry:{type:"Point",coordinates:[123.97,41.97]}},{name:"玉溪",count:4,geometry:{type:"Point",coordinates:[102.52,24.35]}},{name:"张家口",count:3,geometry:{type:"Point",coordinates:[114.87,40.82]}},{name:"阳泉",count:2,geometry:{type:"Point",coordinates:[113.57,37.85]}},{name:"莱州",count:7,geometry:{type:"Point",coordinates:[119.942327,37.177017]}},{name:"湖州",count:9,geometry:{type:"Point",coordinates:[120.1,30.86]}},{name:"汕头",count:4,geometry:{type:"Point",coordinates:[116.69,23.39]}},{name:"昆山",count:5,geometry:{type:"Point",coordinates:[120.95,31.39]}},{name:"宁波",count:1,geometry:{type:"Point",coordinates:[121.56,29.86]}},{name:"湛江",count:6,geometry:{type:"Point",coordinates:[110.359377,21.270708]}},{name:"揭阳",count:5,geometry:{type:"Point",coordinates:[116.35,23.55]}},{name:"荣成",count:7,geometry:{type:"Point",coordinates:[122.41,37.16]}},{name:"连云港",count:0,geometry:{type:"Point",coordinates:[119.16,34.59]}},{name:"葫芦岛",count:1,geometry:{type:"Point",coordinates:[120.836932,40.711052]}},{name:"常熟",count:8,geometry:{type:"Point",coordinates:[120.74,31.64]}},{name:"东莞",count:9,geometry:{type:"Point",coordinates:[113.75,23.04]}},{name:"河源",count:1,geometry:{type:"Point",coordinates:[114.68,23.73]}},{name:"淮安",count:7,geometry:{type:"Point",coordinates:[119.15,33.5]}},{name:"泰州",count:0,geometry:{type:"Point",coordinates:[119.9,32.49]}},{name:"南宁",count:5,geometry:{type:"Point",coordinates:[108.33,22.84]}},{name:"营口",count:4,geometry:{type:"Point",coordinates:[122.18,40.65]}},{name:"惠州",count:0,geometry:{type:"Point",coordinates:[114.4,23.09]}},{name:"江阴",count:3,geometry:{type:"Point",coordinates:[120.26,31.91]}},{name:"蓬莱",count:8,geometry:{type:"Point",coordinates:[120.75,37.8]}},{name:"韶关",count:8,geometry:{type:"Point",coordinates:[113.62,24.84]}},{name:"嘉峪关",count:2,geometry:{type:"Point",coordinates:[98.289152,39.77313]}},{name:"广州",count:3,geometry:{type:"Point",coordinates:[113.23,23.16]}},{name:"延安",count:3,geometry:{type:"Point",coordinates:[109.47,36.6]}},{name:"太原",count:4,geometry:{type:"Point",coordinates:[112.53,37.87]}},{name:"清远",count:3,geometry:{type:"Point",coordinates:[113.01,23.7]}},{name:"中山",count:8,geometry:{type:"Point",coordinates:[113.38,22.52]}},{name:"昆明",count:4,geometry:{type:"Point",coordinates:[102.73,25.04]}},{name:"寿光",count:5,geometry:{type:"Point",coordinates:[118.73,36.86]}},{name:"盘锦",count:9,geometry:{type:"Point",coordinates:[122.070714,41.119997]}},{name:"长治",count:0,geometry:{type:"Point",coordinates:[113.08,36.18]}},{name:"深圳",count:5,geometry:{type:"Point",coordinates:[114.07,22.62]}},{name:"珠海",count:3,geometry:{type:"Point",coordinates:[113.52,22.3]}},{name:"宿迁",count:2,geometry:{type:"Point",coordinates:[118.3,33.96]}},{name:"咸阳",count:6,geometry:{type:"Point",coordinates:[108.72,34.36]}},{name:"铜川",count:0,geometry:{type:"Point",coordinates:[109.11,35.09]}},{name:"平度",count:9,geometry:{type:"Point",coordinates:[119.97,36.77]}},{name:"佛山",count:2,geometry:{type:"Point",coordinates:[113.11,23.05]}},{name:"海口",count:5,geometry:{type:"Point",coordinates:[110.35,20.02]}},{name:"江门",count:2,geometry:{type:"Point",coordinates:[113.06,22.61]}},{name:"章丘",count:0,geometry:{type:"Point",coordinates:[117.53,36.72]}},{name:"肇庆",count:4,geometry:{type:"Point",coordinates:[112.44,23.05]}},{name:"大连",count:6,geometry:{type:"Point",coordinates:[121.62,38.92]}},{name:"临汾",count:0,geometry:{type:"Point",coordinates:[111.5,36.08]}},{name:"吴江",count:0,geometry:{type:"Point",coordinates:[120.63,31.16]}},{name:"石嘴山",count:4,geometry:{type:"Point",coordinates:[106.39,39.04]}},{name:"沈阳",count:4,geometry:{type:"Point",coordinates:[123.38,41.8]}},{name:"苏州",count:9,geometry:{type:"Point",coordinates:[120.62,31.32]}},{name:"茂名",count:1,geometry:{type:"Point",coordinates:[110.88,21.68]}},{name:"嘉兴",count:6,geometry:{type:"Point",coordinates:[120.76,30.77]}},{name:"长春",count:3,geometry:{type:"Point",coordinates:[125.35,43.88]}},{name:"胶州",count:4,geometry:{type:"Point",coordinates:[120.03336,36.264622]}},{name:"银川",count:3,geometry:{type:"Point",coordinates:[106.27,38.47]}},{name:"张家港",count:4,geometry:{type:"Point",coordinates:[120.555821,31.875428]}},{name:"三门峡",count:1,geometry:{type:"Point",coordinates:[111.19,34.76]}},{name:"锦州",count:3,geometry:{type:"Point",coordinates:[121.15,41.13]}},{name:"南昌",count:7,geometry:{type:"Point",coordinates:[115.89,28.68]}},{name:"柳州",count:3,geometry:{type:"Point",coordinates:[109.4,24.33]}},{name:"三亚",count:5,geometry:{type:"Point",coordinates:[109.511909,18.252847]}},{name:"自贡",count:7,geometry:{type:"Point",coordinates:[104.778442,29.33903]}},{name:"吉林",count:2,geometry:{type:"Point",coordinates:[126.57,43.87]}},{name:"阳江",count:7,geometry:{type:"Point",coordinates:[111.95,21.85]}},{name:"泸州",count:1,geometry:{type:"Point",coordinates:[105.39,28.91]}},{name:"西宁",count:0,geometry:{type:"Point",coordinates:[101.74,36.56]}},{name:"宜宾",count:3,geometry:{type:"Point",coordinates:[104.56,29.77]}},{name:"呼和浩特",count:6,geometry:{type:"Point",coordinates:[111.65,40.82]}},{name:"成都",count:8,geometry:{type:"Point",coordinates:[104.06,30.67]}},{name:"大同",count:9,geometry:{type:"Point",coordinates:[113.3,40.12]}},{name:"镇江",count:6,geometry:{type:"Point",coordinates:[119.44,32.2]}},{name:"桂林",count:4,geometry:{type:"Point",coordinates:[110.28,25.29]}},{name:"张家界",count:7,geometry:{type:"Point",coordinates:[110.479191,29.117096]}},{name:"宜兴",count:4,geometry:{type:"Point",coordinates:[119.82,31.36]}},{name:"北海",count:3,geometry:{type:"Point",coordinates:[109.12,21.49]}},{name:"西安",count:2,geometry:{type:"Point",coordinates:[108.95,34.27]}},{name:"金坛",count:1,geometry:{type:"Point",coordinates:[119.56,31.74]}},{name:"东营",count:3,geometry:{type:"Point",coordinates:[118.49,37.46]}},{name:"牡丹江",count:0,geometry:{type:"Point",coordinates:[129.58,44.6]}},{name:"遵义",count:2,geometry:{type:"Point",coordinates:[106.9,27.7]}},{name:"绍兴",count:6,geometry:{type:"Point",coordinates:[120.58,30.01]}},{name:"扬州",count:9,geometry:{type:"Point",coordinates:[119.42,32.39]}},{name:"常州",count:3,geometry:{type:"Point",coordinates:[119.95,31.79]}},{name:"潍坊",count:8,geometry:{type:"Point",coordinates:[119.1,36.62]}},{name:"重庆",count:3,geometry:{type:"Point",coordinates:[106.54,29.59]}},{name:"台州",count:5,geometry:{type:"Point",coordinates:[121.420757,28.656386]}},{name:"南京",count:3,geometry:{type:"Point",coordinates:[118.78,32.04]}},{name:"滨州",count:8,geometry:{type:"Point",coordinates:[118.03,37.36]}},{name:"贵阳",count:3,geometry:{type:"Point",coordinates:[106.71,26.57]}},{name:"无锡",count:4,geometry:{type:"Point",coordinates:[120.29,31.59]}},{name:"本溪",count:1,geometry:{type:"Point",coordinates:[123.73,41.3]}},{name:"克拉玛依",count:4,geometry:{type:"Point",coordinates:[84.77,45.59]}},{name:"渭南",count:8,geometry:{type:"Point",coordinates:[109.5,34.52]}},{name:"马鞍山",count:9,geometry:{type:"Point",coordinates:[118.48,31.56]}},{name:"宝鸡",count:8,geometry:{type:"Point",coordinates:[107.15,34.38]}},{name:"焦作",count:2,geometry:{type:"Point",coordinates:[113.21,35.24]}},{name:"句容",count:7,geometry:{type:"Point",coordinates:[119.16,31.95]}},{name:"北京",count:3,geometry:{type:"Point",coordinates:[116.46,39.92]}},{name:"徐州",count:6,geometry:{type:"Point",coordinates:[117.2,34.26]}},{name:"衡水",count:5,geometry:{type:"Point",coordinates:[115.72,37.72]}},{name:"包头",count:0,geometry:{type:"Point",coordinates:[110,40.58]}},{name:"绵阳",count:1,geometry:{type:"Point",coordinates:[104.73,31.48]}},{name:"乌鲁木齐",count:7,geometry:{type:"Point",coordinates:[87.68,43.77]}},{name:"枣庄",count:1,geometry:{type:"Point",coordinates:[117.57,34.86]}},{name:"杭州",count:9,geometry:{type:"Point",coordinates:[120.19,30.26]}},{name:"淄博",count:8,geometry:{type:"Point",coordinates:[118.05,36.78]}},{name:"鞍山",count:7,geometry:{type:"Point",coordinates:[122.85,41.12]}},{name:"溧阳",count:9,geometry:{type:"Point",coordinates:[119.48,31.43]}},{name:"库尔勒",count:9,geometry:{type:"Point",coordinates:[86.06,41.68]}},{name:"安阳",count:4,geometry:{type:"Point",coordinates:[114.35,36.1]}},{name:"开封",count:5,geometry:{type:"Point",coordinates:[114.35,34.79]}},{name:"济南",count:3,geometry:{type:"Point",coordinates:[117,36.65]}},{name:"德阳",count:3,geometry:{type:"Point",coordinates:[104.37,31.13]}},{name:"温州",count:2,geometry:{type:"Point",coordinates:[120.65,28.01]}},{name:"九江",count:2,geometry:{type:"Point",coordinates:[115.97,29.71]}},{name:"邯郸",count:1,geometry:{type:"Point",coordinates:[114.47,36.6]}},{name:"临安",count:5,geometry:{type:"Point",coordinates:[119.72,30.23]}},{name:"兰州",count:7,geometry:{type:"Point",coordinates:[103.73,36.03]}},{name:"沧州",count:1,geometry:{type:"Point",coordinates:[116.83,38.33]}},{name:"临沂",count:1,geometry:{type:"Point",coordinates:[118.35,35.05]}},{name:"南充",count:3,geometry:{type:"Point",coordinates:[106.110698,30.837793]}},{name:"天津",count:8,geometry:{type:"Point",coordinates:[117.2,39.13]}},{name:"富阳",count:8,geometry:{type:"Point",coordinates:[119.95,30.07]}},{name:"泰安",count:9,geometry:{type:"Point",coordinates:[117.13,36.18]}},{name:"诸暨",count:2,geometry:{type:"Point",coordinates:[120.23,29.71]}},{name:"郑州",count:6,geometry:{type:"Point",coordinates:[113.65,34.76]}},{name:"哈尔滨",count:3,geometry:{type:"Point",coordinates:[126.63,45.75]}},{name:"聊城",count:0,geometry:{type:"Point",coordinates:[115.97,36.45]}},{name:"芜湖",count:6,geometry:{type:"Point",coordinates:[118.38,31.33]}},{name:"唐山",count:8,geometry:{type:"Point",coordinates:[118.02,39.63]}},{name:"平顶山",count:9,geometry:{type:"Point",coordinates:[113.29,33.75]}},{name:"邢台",count:7,geometry:{type:"Point",coordinates:[114.48,37.05]}},{name:"德州",count:4,geometry:{type:"Point",coordinates:[116.29,37.45]}},{name:"济宁",count:1,geometry:{type:"Point",coordinates:[116.59,35.38]}},{name:"荆州",count:2,geometry:{type:"Point",coordinates:[112.239741,30.335165]}},{name:"宜昌",count:2,geometry:{type:"Point",coordinates:[111.3,30.7]}},{name:"义乌",count:7,geometry:{type:"Point",coordinates:[120.06,29.32]}},{name:"丽水",count:5,geometry:{type:"Point",coordinates:[119.92,28.45]}},{name:"洛阳",count:4,geometry:{type:"Point",coordinates:[112.44,34.7]}},{name:"秦皇岛",count:4,geometry:{type:"Point",coordinates:[119.57,39.95]}},{name:"株洲",count:5,geometry:{type:"Point",coordinates:[113.16,27.83]}},{name:"石家庄",count:7,geometry:{type:"Point",coordinates:[114.48,38.03]}},{name:"莱芜",count:3,geometry:{type:"Point",coordinates:[117.67,36.19]}},{name:"常德",count:8,geometry:{type:"Point",coordinates:[111.69,29.05]}},{name:"保定",count:3,geometry:{type:"Point",coordinates:[115.48,38.85]}},{name:"湘潭",count:4,geometry:{type:"Point",coordinates:[112.91,27.87]}},{name:"金华",count:7,geometry:{type:"Point",coordinates:[119.64,29.12]}},{name:"岳阳",count:3,geometry:{type:"Point",coordinates:[113.09,29.37]}},{name:"长沙",count:8,geometry:{type:"Point",coordinates:[113,28.21]}},{name:"衢州",count:2,geometry:{type:"Point",coordinates:[118.88,28.97]}},{name:"廊坊",count:4,geometry:{type:"Point",coordinates:[116.7,39.53]}},{name:"菏泽",count:2,geometry:{type:"Point",coordinates:[115.480656,35.23375]}},{name:"合肥",count:7,geometry:{type:"Point",coordinates:[117.27,31.86]}},{name:"武汉",count:5,geometry:{type:"Point",coordinates:[114.31,30.52]}},{name:"大庆",count:6,geometry:{type:"Point",coordinates:[125.03,46.58]}}]}});