<template>
  <div class="main">
    <div v-for="(item, index) in chartData" :key="index" class="chart_item">
      <div class="chart_part">
        <h3>{{ item.name }}</h3>
        <component
          :is="`JiuGe-${innerType}`"
          :data="item.data"
          :settings="item.settings"
        ></component>
      </div>
    </div>
  </div>
</template>

<script>
import CHART_DATA from '../data';

export default {
  data() {
    return {
      chartData: [],
      type: null,
      innerType: null,
    };
  },
  watch: {
    $route() {
      this.init();
    },
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      this.type = this.$route.params.type.slice(1);
      this.chartData = CHART_DATA[this.type].data;
      this.innerType = CHART_DATA[this.type].type;
    },
  },
};
</script>

<style lang="scss">
.main {
  h3,
  p {
    margin: 0;
  }
  .chart_item {
    display: flex;
    padding: 15px;
    .chart_part {
      flex: 1;
      height: 400px;
    }
  }
}
</style>
