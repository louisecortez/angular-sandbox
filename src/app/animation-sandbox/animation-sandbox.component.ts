import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { AppInsightsService } from '@services/app-insights.service';

@Component({
  selector: 'animation-sandbox',
  templateUrl: './animation-sandbox.component.html',
  styleUrls: ['./animation-sandbox.component.scss'],
  animations: [
    trigger('openClose', [
      state('open', style({
        height: '200px',
        opacity: 1,
        backgroundColor: 'yellow'
      })),
      state('closed', style({
        height: '100px',
        opacity: 0.5,
        backgroundColor: 'green'
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ])
    ])
  ]
})
export class AnimationSandboxComponent implements OnInit {
  isOpen = true;

  constructor(private appInsightsService: AppInsightsService) { }

  ngOnInit(): void {
    this.appInsightsService.logPageView("View animation-sandbox component");
  }

  toggle() {
    this.isOpen = !this.isOpen;
    this.appInsightsService.logEvent("Toggle button clicked");
  }

}
