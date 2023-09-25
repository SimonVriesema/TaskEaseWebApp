<template>
  <div>
    <Doughnut
        :data="chartData"
        :options="chartOptions"
        :width="width"
        :height="height"
    />
  </div>
</template>

<script>
import {Doughnut} from 'vue-chartjs';
import {Chart as ChartJS, Tooltip, Legend, ArcElement} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

export default {
  name: 'DonutChart',
  components: {Doughnut},
  props: {
    data: {
      type: Array,
      required: true,
    },
    chartId: {
      type: String,
      default: 'donut-chart',
    },
    width: {
      type: Number,
      default: 120,
    },
    height: {
      type: Number,
      default: 120,
    },
  },
  data() {
    return {
      chartData: {
        labels: ['% Finished tasks', '% Unfinished tasks'],
        datasets: [
          {
            data: [60, 40],
            backgroundColor: ['#ffffff', '#2e4572'],
          },
        ],
      },
      chartOptions: {
        responsive: true,
        plugins: {
          legend: {
            display: false,
          },
        },
        elements: {
          arc: {
            borderWidth: 0, // Remove the border around the arcs
            borderRadius: 0, // Adjust the border radius to round the corners
          },
        },
      },
    };
  },
};
</script>

<style scoped>
div {
  position: relative;
  max-width: 100%; /* Ensure it doesn't exceed the parent container's width */
  max-height: 100%; /* Ensure it doesn't exceed the parent container's height */
}
</style>
