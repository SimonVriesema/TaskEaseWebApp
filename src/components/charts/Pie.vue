<template>
  <div>
    <Pie
        :data="chartData"
        :options="chartOptions"
        :width="width"
        :height="height"
    />
  </div>
</template>

<script>
import { Pie } from 'vue-chartjs';
import { Chart as ChartJS, Tooltip, Legend, ArcElement } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

export default {
  name: 'PieChart',
  components: { Pie },
  props: {
    data: {
      type: Array,
      required: true,
    },
    chartId: {
      type: String,
      default: 'pie-chart',
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
    // Assume you have a list of tasks with software engineering-related tags
    const tasks = [
      { id: 1, tag: 'Bug Fixing' },
      { id: 2, tag: 'Feature Development' },
      { id: 3, tag: 'Code Review' },
      { id: 4, tag: 'Testing' },
      { id: 5, tag: 'Refactoring' },
      // ... more tasks
    ];

    // Calculate the distribution of tasks based on tags
    const tagDistribution = tasks.reduce((distribution, task) => {
      const tag = task.tag || 'Uncategorized';
      distribution[tag] = (distribution[tag] || 0) + 1;
      return distribution;
    }, {});

    // Convert the distribution into the format expected by Chart.js
    const labels = Object.keys(tagDistribution);
    const dataValues = Object.values(tagDistribution);

    return {
      chartData: {
        labels: labels,
        datasets: [
          {
            data: dataValues,
            backgroundColor: ['#E07A5F', '#9d5643', '#ffe2da', '#FFC5B6', '#FFFFFF'],
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
            borderWidth: 0,
            borderRadius: 0,
          },
        },
      },
    };
  },
};
</script>

<style scoped>
div {
  max-width: 100%;
  max-height: 100%;
}
</style>
