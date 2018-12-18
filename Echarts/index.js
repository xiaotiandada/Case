// 饼图
let doughnutChart = echarts.init(document.getElementById("doughnutChart"));
let doughnutChart1 = echarts.init(document.getElementById("doughnutChart1"));
let doughnutChart2 = echarts.init(document.getElementById("doughnutChart2"));
let doughnutChart3 = echarts.init(document.getElementById("doughnutChart3"));
let doughnutChart4 = echarts.init(document.getElementById("doughnutChart4"));
let doughnutChartOption = {
  tooltip: {
    trigger: "item",
    formatter: "{a} <br/>{b}: {c} ({d}%)"
  },
  legend: {
    textStyle: {
      color: "#fff"
    },
    orient: "vertical",
    x: "left",
    icon: "circle",
    data: ["学习", "工作", "游戏"]
  },
  series: [{
    name: "时间",
    type: "pie",
    radius: ["30%", "60%"], // 'radius' 扇区圆心角展现数据的百分比，半径展现数据的大小。
    center: ["50%", "50%"], // 饼图的中心（圆心）坐标，数组的第一项是横坐标，第二项是纵坐标。
    avoidLabelOverlap: !1,
    label: {
      normal: {
        show: !1,
        position: "center"
      }
    },
    labelLine: {
      normal: {
        show: !1
      }
    },
    color: ["#1976D2", "#2196F3", "#03A9F4"], // 颜色
    data: [{
        value: 335,
        name: "学习"
      },
      {
        value: 310,
        name: "工作"
      },
      {
        value: 234,
        name: "游戏"
      }
    ]
  }]
};
let doughnutChartOption1 = {
  tooltip: {
    trigger: "item",
    formatter: "{a} <br/>{b}: {c} ({d}%)"
  },
  legend: {
    textStyle: {
      color: "#fff"
    },
    orient: "vertical",
    x: "left",
    icon: "circle",
    data: ["打针", "不打针"]
  },
  graphic: {
    type: "image",
    left: "center",
    top: "center",
    style: {
      image: "chartsGraphic.png",
      width: 100,
      height: 100
    }
  },
  series: [{
    name: "数量",
    type: "pie",
    radius: ["30%", "60%"], // 'radius' 扇区圆心角展现数据的百分比，半径展现数据的大小。
    center: ["50%", "50%"], // 饼图的中心（圆心）坐标，数组的第一项是横坐标，第二项是纵坐标。
    avoidLabelOverlap: !1,
    label: {
      normal: {
        show: !1,
        position: "center"
      }
    },
    labelLine: {
      normal: {
        show: !1
      }
    },
    color: ["#1976D2", "#2196F3", "#03A9F4"], // 颜色
    data: [{
        value: 335,
        name: "打针"
      },
      {
        value: 310,
        name: "不打针"
      }
    ]
  }]
};
let doughnutChartOption2 = {
  tooltip: {
    trigger: "item",
    formatter: "{a} <br/>{b}: {c} ({d}%)"
  },
  legend: [{
      textStyle: {
        color: "#fff"
      },
      orient: "vertical",
      x: "left",
      itemGap: 30,
      icon: "circle",
      data: []
    },
    {
      textStyle: {
        color: "#fff"
      },
      orient: "vertical",
      x: "right",
      itemGap: 30,
      icon: "circle",
      data: []
    }
  ],
  graphic: {
    type: "image",
    left: "center",
    top: "center",
    style: {
      image: "chartsGraphic.png",
      width: 100,
      height: 100
    }
  },
  series: [{
    name: "区域",
    type: "pie",
    radius: ["30%", "60%"], // 'radius' 扇区圆心角展现数据的百分比，半径展现数据的大小。
    center: ["50%", "50%"], // 饼图的中心（圆心）坐标，数组的第一项是横坐标，第二项是纵坐标。
    avoidLabelOverlap: !1,
    label: {
      normal: {
        show: !1,
        position: "center"
      }
    },
    labelLine: {
      normal: {
        show: !1
      }
    },
    color: [
      "#0a6fd6",
      "#156dc5",
      "#1664b3",
      "#1b5ea2",
      "#3081d3",
      "#1785f4",
      "#127ce8",
      "#0a6fd6",
      "#0a63bd",
      "#1771cb",
      "#167de4",
      "#2589ec",
      "#2385e8",
      "#1c74cb",
      "#1765b3",
      "#0683fe"
    ], // 颜色
    data: []
  }]
};
let doughnutChartOption3 = {
  tooltip: {
    trigger: 'item',
    formatter: "{a} <br/>{b} : {c} ({d}%)"
  },
  color: ["#1976D2", "#2196F3"], // 颜色
  legend: {
    orient: 'vertical',
    left: 'left',
    textStyle: {
      color: '#fff'
    },
    data: ['游戏', '追番']
  },
  series: [{
    name: '分类',
    type: 'pie',
    radius: '55%',
    center: ['50%', '50%'],
    data: [{
        value: 335,
        name: '游戏'
      },
      {
        value: 310,
        name: '追番'
      }
    ],
    label: {
      show: false // 是否显示标示文字
    },
    labelLine: {
      show: false // 是否显示视觉引导线
    },
    itemStyle: {
      emphasis: {
        shadowBlur: 10,
        shadowOffsetX: 0,
        shadowColor: 'rgba(0, 0, 0, 0.1)'
      }
    }
  }]
};
let doughnutChartOption4 = {
  color: ["#1976D2", "#2196F3", "#03A9F4"], // 颜色
  tooltip: {
    trigger: 'item',
    formatter: "{a} <br/>{b}: {c} ({d}%)"
  },
  legend: [{
      orient: 'vertical',
      x: 'left',
      textStyle: {
        color: '#fff'
      },
      data: ['白天', '晚上']
    },
    {
      orient: 'vertical',
      x: 'right',
      textStyle: {
        color: '#fff'
      },
      data: ['上班', '游戏', '休息']
    }
  ],
  series: [{
      name: '时间',
      type: 'pie',
      radius: [0, '36%'],
      center: ['50%', '50%'],
      label: {
        show: false
      },
      labelLine: {
        show: false
      },
      data: [{
          value: 12,
          name: '白天',
        },
        {
          value: 12,
          name: '晚上'
        }
      ]
    },
    {
      name: '分类',
      type: 'pie',
      radius: ['44%', '72%'],
      center: ['50%', '50%'],
      label: {
        show: false
      },
      labelLine: {
        show: false
      },
      data: [{
          value: 335,
          name: '上班'
        },
        {
          value: 310,
          name: '游戏'
        }, {
          value: 300,
          name: '休息'
        }
      ]
    }
  ]
};
let area = [
  "黄埔",
  "徐汇",
  "长宁",
  "静安",
  "普陀",
  "虹口",
  "杨浦",
  "浦东",
  "闵行",
  "宝山",
  "嘉定",
  "金山",
  "松江",
  "青浦",
  "奉贤",
  "崇明"
];

function setChartsAreaData(areaName, json) {
  let arr = [];
  areaName.map(item => {
    arr = [
      ...arr,
      {
        value: 123,
        name: item
      }
    ];
  });
  json.series[0].data = arr;
}

function setChartsAreaLength(areaName, json) {
  let arr1 = [],
    arr2 = [];
  areaName.map((item, index) => {
    index < 8 ? (arr1 = [...arr1, item]) : (arr2 = [...arr2, item]);
  });
  json.legend[0].data = arr1;
  json.legend[1].data = arr2;
}
setChartsAreaLength(area, doughnutChartOption2);
setChartsAreaData(area, doughnutChartOption2);
doughnutChart.setOption(doughnutChartOption, true);
doughnutChart1.setOption(doughnutChartOption1, true);
doughnutChart2.setOption(doughnutChartOption2, true);
doughnutChart3.setOption(doughnutChartOption3, true);
doughnutChart4.setOption(doughnutChartOption4, true);