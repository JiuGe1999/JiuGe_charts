import {
  DEFAULT_AXIS_COLOR,
  DEFAULT_FONT_COLOR,
  DEFAULT_FONT_FAMILY,
  DEFAULT_FONT_SIZE,
  DEFAULT_FONT_WEIGHT,
  DEFAULT_LINE_HEIGHT,
} from '../../constants';
import { valueMap } from '../../utils';

function getYAxis({ axisVisible, axisLabelVisible, yAxisName, axisType }) {
  return [
    {
      type: axisType[1],
      name: yAxisName[0] || '',
      show: axisVisible[1],
      nameGap: 24,
      nameTextStyle: {
        fontSize: DEFAULT_FONT_SIZE,
        fontFamilay: DEFAULT_FONT_FAMILY,
        fontWeight: DEFAULT_FONT_WEIGHT,
        lineHeight: DEFAULT_LINE_HEIGHT,
        align: 'center',
        padding: [0, 20, 0, 0],
      },
      // 留白
      boundaryGap: [0, 0.1],
      axisLabel: {
        show: axisLabelVisible[1],
        margin: 10,
        fontSize: DEFAULT_FONT_SIZE,
        fontFamily: DEFAULT_FONT_FAMILY,
        fontWeight: DEFAULT_FONT_WEIGHT,
        lineHeight: DEFAULT_LINE_HEIGHT,
      },
      axisLine: { show: false },
      axisTick: { show: false },
      splitLine: {
        show: true,
        lineStyle: {
          width: 1,
          type: 'solid',
          color: '#C9D4E9',
        },
      },
      splitNumber: 5,
    },
  ];
}

function getXAxis({
  dimension,
  valuesT,
  axisVisible,
  axisLabelVisible,
  axisType,
  xAxisName,
}) {
  return dimension.map((item, index) => ({
    type: axisType[0],
    nameLocation: 'middle',
    nameGap: 22,
    name: xAxisName[index] || '',
    data: valuesT.map((row) => row[item]),
    show: axisVisible[0],
    axisLabel: {
      show: axisLabelVisible[0],
      margin: 10,
      color: DEFAULT_FONT_COLOR,
      fontSize: DEFAULT_FONT_SIZE,
      fontFamily: DEFAULT_FONT_FAMILY,
      fontWeight: DEFAULT_FONT_WEIGHT,
      lineHeight: DEFAULT_LINE_HEIGHT,
    },
    axisLine: {
      show: true,
      lineStyle: {
        width: 1,
        type: 'solid',
        color: DEFAULT_AXIS_COLOR,
      },
    },
    axisTick: {
      show: true,
      alignWithLabel: true,
      inside: true,
      length: 6,
      lineStyle: {
        width: 1,
        type: 'solid',
      },
    },
    splitLine: {
      show: false,
    },
    axisPointer: {
      show: true,
      type: 'line',
      label: { show: false },
      lineStyle: {
        width: 1,
        type: 'dashed',
        color: DEFAULT_FONT_COLOR,
        opacity: 0.6,
      },
    },
  }));
}

function getSeries({ dimension, valuesT, metrics }) {
  const series = [];
  const dataTemp = valueMap(valuesT, metrics, dimension);
  metrics.forEach((item) => {
    const seriesItem = {
      name: '',
      type: 'line',
      data: dataTemp[item],
      smooth: true,
      showSymbol: false,
      symbol: 'emptyCircle',
      symbolSize: 4,
    };
    series.push(seriesItem);
  });
  return series;
}

const line = (keys, values, settings) => {
  const keysT = Array.isArray(keys) ? keys : [];
  const valuesT = Array.isArray(values) ? values : [];

  const tempData = keysT.slice(1).map((item) => {
    return item;
  });
  // 自定义单位
  //   const units = {};

  const {
    // 对比维度 keys[0]
    dimension = [keysT[0]],
    // 数据项
    metrics = tempData,
    // 是否展示坐标轴
    axisVisible = [true, true],
    // 是否展示坐标轴刻度
    axisLabelVisible = [true, true],
    // x轴
    xAxisName = [],
    // y轴
    yAxisName = [],
    // 坐标轴类型
    axisType = ['category', 'value'],
    // 图像位置
    // grid,
    // legend 名称字典
    // legendMap = {},
    // label 名称字典
    // labelMap = {},
  } = settings;

  const yAxis = getYAxis({
    axisVisible,
    axisLabelVisible,
    yAxisName,
    axisType,
  });
  const xAxis = getXAxis({
    dimension,
    valuesT,
    axisVisible,
    axisLabelVisible,
    axisType,
    xAxisName,
  });
  const series = getSeries({
    dimension,
    valuesT,
    metrics,
  });
  const options = {
    yAxis,
    xAxis,
    series,
  };
  return options;
};

export default line;
