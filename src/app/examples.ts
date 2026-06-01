import BasicBubbleConfig from "./configs/basic-bubble"
import BasicScatterConfig from "./configs/basic-scatter"
import ScatterInvertedConfig from "./configs/scatter-inverted"
import ScatterMultipleConfig from "./configs/scatter-multiple"
import ScatterCustomMarker from "./configs/scatter-custom-svg-marker"
import BubbleResolveMarker from "./configs/bubble-resolve-marker"

import {ScatterChartOptions, BubbleChartOptions} from '@visuallyjs/browser-ui';

export interface ChartSpec {
  desc:string
  type:string
  options:ScatterChartOptions| BubbleChartOptions
  comments?:string
}

export const charts:Array<ChartSpec> = [
  {
    desc: "Basic scatter chart",
    type: "scatter",
    options: BasicScatterConfig
  },
    {
      desc: "Scatter chart, multiple series",
        type: "scatter",
        options: ScatterMultipleConfig
    },
    {
      desc: "Inverted scatter chart",
        type: "scatter",
        options: ScatterInvertedConfig
    },
    {
      desc: "Basic bubble chart",
      comments:"This chart plots sugar vs fat consumption for various countries, with the size of the bubble representing obesity.",
        type: "bubble",
        options: BasicBubbleConfig
    },
  {
    desc: "Scatter chart with custom SVG marker",
    type: "scatter",
    options: ScatterCustomMarker
  },
  {
    desc: "Bubble chart with custom markers",
    comments:"In this chart, we provide a custom marker per data point, showing the flag for the country the data point represents",
    type: "bubble",
    options: BubbleResolveMarker
  }

];
