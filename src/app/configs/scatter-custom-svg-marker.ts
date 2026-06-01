import { ScatterChartOptions } from "@visuallyjs/browser-ui"

export default {
  title:{
    text:"Scatter chart with custom marker"
  },
  url:"https://static.visuallyjs.com/data/chart/sugar-fat-obesity.json",
  series:[
    {
      xAxisField:"sugar",
      yAxisField:"fat",
      marker:`<svg:svg width="18" height="18" viewBox="0 0 6 6">
  <svg:circle cx="3" cy="3" r="2.5" fill="yellow" stroke="black" stroke-width="0.2" />
  <svg:circle cx="2" cy="2.2" r="0.3" stroke="black" fill="yellow"/>
  <svg:circle cx="4" cy="2.2" r="0.3" stroke="black" fill="yellow" />
  <svg:path d="M 1.8 3.8 Q 3 5 4.2 3.8" fill="none" stroke="black" stroke-width="0.3" stroke-linecap="round" />
</svg:svg>`
    }
  ]
} as ScatterChartOptions
