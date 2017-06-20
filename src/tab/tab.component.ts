import { Component, Input } from '@angular/core';

@Component({
  selector: 'demo-tab',
  template: '<ng-content *ngIf="isVisible"></ng-content>',
})
export class TabComponent {
  @Input() tabId: number;
  @Input() title: string;
  @Input() isVisible = false;
}
