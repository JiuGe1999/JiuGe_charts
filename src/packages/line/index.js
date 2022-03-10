import 'echarts/lib/chart/line';
import Core from '../../core';
import line from './main';

export default {
  ...Core,
  name: 'JiuGeLine',
  data() {
    this.handlerTag = line;
    return {};
  },
};
