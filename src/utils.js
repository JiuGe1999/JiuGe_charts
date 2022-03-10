const valueMap = (values, metrics, dimension) => {
  const dataTemp = {};
  values.forEach((item) => {
    metrics.forEach((value) => {
      if (!dataTemp[value]) dataTemp[value] = [];
      dataTemp[value].push({
        name: item[dimension[0]],
        value: item[value],
      });
    });
  });
  return dataTemp;
};

const getTooltip = ({ triggerType = 'axis' }) => ({
  show: true,
  confine: true,
  transitionDuration: 0.1,
  backgroundColor: '#FFFFFF',
  padding: [4, 10, 10],
  borderColor: 'rgba(29, 49, 82, 0.05)',
  axisPointer: {
    type: 'none',
  },
  extraCssText:
    'box-shadow: 1px 1px 8px 0 rgba(29,49,82,0.28);border-radius: 2px;',
  trigger: triggerType,
});

export { valueMap, getTooltip };
