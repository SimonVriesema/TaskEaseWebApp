<template>
  <div>
    <Line
        id="my-chart-id"
        :options="chartOptions"
        :data="chartData"
        :width="width"
        :height="height"
    />
  </div>
</template>

<script>
import {Line} from 'vue-chartjs';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, PointElement, LineElement, CategoryScale, LinearScale);

export default {
  name: 'LineChart',
  components: {Line},
  props: {
    data: {
      type: Array,
      required: true,
    },
    chartId: {
      type: String,
      default: 'line-chart',
    },
    datasetIdKey: {
      type: String,
      default: 'label',
    },
    width: {
      type: Number,
      default: 400,
    },
    height: {
      type: Number,
      default: 120, // Adjust the default height as needed
    },
    cssClasses: {
      default: '',
      type: String,
    },
    styles: {
      default: '',
      type: String,
    },
  },
  data() {
    return {
      chartData: {
        labels: this.data.labels,
        datasets: [
          {
            data: this.data.datasets[0].data,
            borderColor: '#E07A5F',
            tension: 0.3,
          }
        ],
      },
      chartOptions: {
        responsive: true,
        scales: {
          x: {
            grid: {
              display: false, // Hide the x-axis grid lines
            },
          },
          y: {
            beginAtZero: true, // Start the y-axis at zero
            grid: {
              display: false, // Hide the x-axis grid lines
            },
          },
        },
        plugins: {
          legend: {
            display: false, // Show the legend
          },
        },
      },
    };
  },
};
</script>

<style scoped>
/* Style the chart container */
div {
  max-width: 100%; /* Ensure it doesn't exceed the parent container's width */
  max-height: 100%; /* Ensure it doesn't exceed the parent container's height */
}
</style>