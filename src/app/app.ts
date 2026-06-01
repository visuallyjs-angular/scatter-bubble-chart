import { Component, signal } from '@angular/core';
import { VisuallyJsModule } from "@visuallyjs/browser-ui-angular";

import { charts } from "./examples";

@Component({
  selector: 'app-root',
  imports: [VisuallyJsModule],
  templateUrl: './app.html'
})
export class App {
  charts = charts;
}
