let chartsStatus = echarts.init(document.getElementById("charts1"));
// chartsDistributed = echarts.init(document.getElementById("charts-distributed")),
// chartsType = echarts.init(document.getElementById("charts-type"));

let chartsStatusOption = {
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
    data: ["已接入", "接入中", "未接入"]
  },
  series: [{
    name: "甜甜圈",
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
      name: "已接入"
    }, {
      value: 310,
      name: "接入中"
    }, {
      value: 234,
      name: "未接入"
    }]
  }]
}
let chartsDistributedOption = {
  tooltip: {
    trigger: "item",
    formatter: "{a} <br/>{b}: {c} ({d}%)"
  },
  color: ["#ffa200", "#e49408", "#d18808", "#a66d09", "#835d19", "#e4401a", "#cb3613", "#9c272c", "#7b2a27", "#e45b18", "#f85404", "#c74a0d", "#943608", "#e45b18", "#e45b88", "#cf612b"],
  legend: [{
    textStyle: {
      color: "#fff"
    },
    orient: "vertical",
    top: "1%",
    left: "1%",
    bottom: "1%",
    itemGap: 26,
    icon: "circle",
    data: []
  }, {
    textStyle: {
      color: "#fff"
    },
    orient: "vertical",
    top: "1%",
    right: "1%",
    bottom: "1%",
    itemGap: 26,
    icon: "circle",
    data: []
  }],
  graphic: {
    type: "image",
    left: "158",
    top: "125",
    style: {
      image: "img/icon-distributed.png"
    }
  },
  series: [{
    name: "访问来源",
    type: "pie",
    radius: ["30%", "60%"],
    center: ["50%", "50%"],
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
    data: [{
      value: 335,
      name: "黄埔"
    }, {
      value: 310,
      name: "徐汇"
    }, {
      value: 310,
      name: "长宁"
    }, {
      value: 310,
      name: "静安"
    }, {
      value: 310,
      name: "普陀"
    }, {
      value: 310,
      name: "虹口"
    }, {
      value: 310,
      name: "杨浦"
    }, {
      value: 310,
      name: "浦东"
    }, {
      value: 310,
      name: "闵行"
    }, {
      value: 310,
      name: "宝山"
    }, {
      value: 310,
      name: "嘉定"
    }, {
      value: 310,
      name: "金山"
    }, {
      value: 310,
      name: "松江"
    }, {
      value: 310,
      name: "青浦"
    }, {
      value: 310,
      name: "奉贤"
    }, {
      value: 234,
      name: "崇明"
    }]
  }]
};

function setChartsDistributedLength(areaName) {
  let arr1 = [],
    arr2 = [];
  areaName.map(function (item, index) {
    index < 8 ? arr1 = [...arr1, item] : arr2 = [...arr2, item]
  })
  chartsDistributedOption.legend[0].data = arr1
  chartsDistributedOption.legend[1].data = arr2
}
setChartsDistributedLength(["黄埔", "徐汇", "长宁", "静安", "普陀", "虹口", "杨浦", "浦东", "闵行", "宝山", "嘉定", "金山", "松江", "青浦", "奉贤", "崇明"]);
var chartsTypeOption = {
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
    data: ["疫苗", "血液"]
  },
  graphic: {
    type: "image",
    left: "158",
    top: "125",
    style: {
      image: "img/icon-type.png"
    }
  },
  series: [{
    name: "访问来源",
    type: "pie",
    radius: ["30%", "60%"],
    center: ["50%", "50%"],
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
    color: ["#ffa200", "#e45b18"],
    data: [{
      value: 335,
      name: "疫苗"
    }, {
      value: 310,
      name: "血液"
    }]
  }]
};

chartsStatus.setOption(chartsStatusOption, true)
// chartsDistributed.setOption(chartsDistributedOption, true)
// chartsType.setOption(chartsTypeOption, true)