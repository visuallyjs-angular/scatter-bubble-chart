### Scatter and Bubble Chart Demo

This demo showcases Scatter and Bubble charts using VisuallyJS in an Angular application.

#### How it works

The application imports `VisuallyJsModule` and uses the `vjs-scatter-chart` and `vjs-bubble-chart` components. It renders examples based on configurations that define data points in a 2D (scatter) or 3D (bubble, where size is the third dimension) space.

#### Components Used

- `vjs-scatter-chart`: Used to display scatter plots.
- `vjs-bubble-chart`: Used to display bubble charts.

#### Component Options

The components accept `options` of type `ScatterChartOptions` or `BubbleChartOptions`. Key options include:
- X and Y axis scales and labels.
- Data series configuration.
- For bubble charts, the mapping of data values to bubble size.

#### Stylesheets

For the VisuallyJS components to render correctly, the following stylesheets must be included in the project (usually in `styles.css`):

```css
@import "@visuallyjs/browser-ui/css/visuallyjs.css";
@import "@visuallyjs/browser-ui-angular/css/visuallyjs-angular.css";
```
