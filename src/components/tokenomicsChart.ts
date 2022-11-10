import { defineComponent, h, PropType } from "vue"
import ChartDataLabels from "chartjs-plugin-datalabels"
import { Doughnut } from "vue-chartjs"
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
} from "chart.js"

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale)

export default defineComponent({
  name: "DoughnutChart",
  components: {
    Doughnut,
  },
  props: {
    chartId: {
      type: String,
      default: "doughnut-chart",
    },
    width: {
      type: Number,
      default: 1000,
    },
    height: {
      type: Number,
      default: 1000,
    },
    cssClasses: {
      default: "",
      type: String,
    },
    styles: {
      type: Object as PropType<Partial<CSSStyleDeclaration>>,
      default: () => {},
    },
    plugins: {
      default: () => [ChartDataLabels],
    },
  },
  setup(props) {
    const percentages = [39, 36, 20, 4.5, 0.5]
    const chartData = {
      labels: [
        "Ecosystem ",
        "Staking and DeFi",
        "Presales",
        "Initial development",
        "Airdrop and early investors",
      ],
      datasets: [
        {
          backgroundColor: ["#2d5e42"],
          data: [30, 30, 20, 10, 3],
          hoverOffset: 2,
          datalabels: {
            color: "#FFFFFF",
            formatter: function (value, context) {
              return percentages[context.dataIndex] + "%"
            },
          },
          hoverBackgroundColor: "#34915c",
        },
      ],
    }
    const chartOptions = {
      responsive: true,
      maintainAspectRatio: false,
      showTooltips: false,
      plugins: {
        tooltip: {
          enabled: true,
          callbacks: {
            label: (tooltipItem) => {
              return tooltipItem.label
            },
          },
        },
        legend: {
          position: "right",
          labels: {
            font: {
              size: 16,
            },
          },
        },
      },
    }

    return () =>
      h(Doughnut, {
        chartData,
        chartOptions,
        chartId: props.chartId,
        width: props.width,
        height: props.height,
        cssClasses: props.cssClasses,
        styles: props.styles,
        plugins: props.plugins,
      })
  },
})
