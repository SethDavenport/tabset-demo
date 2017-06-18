import { Component, Input } from '@angular/core';
import { WithSubStore, select, select$, dispatch } from '@angular-redux/store';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';

import { ITabSetRecord, ITabRecord } from './model';
import {
  activateTab,
  tabsetReducer,
  toValueList,
  selectActiveTab,
} from './tabset.redux';

@Component({
  selector: 'demo-tabset',
  styleUrls: [ './tabset.component.css' ],
  templateUrl: './tabset.component.html',
})
@WithSubStore({
  basePathMethodName: 'getBasePath',
  localReducer: tabsetReducer,
})
export class TabSetComponent {
  @Input() parentPath: string[] = [];
  @Input() tabSetId: string;

  @select('title')              readonly title$: Observable<string>;
  @select$('tabs', toValueList) readonly tabData$: Observable<ITabRecord[]>;
  @select(selectActiveTab)      readonly activeTab$: Observable<string>;
  @select('activeTabId')        readonly activeTabId$: Observable<string>;

  getBasePath = () => [ ...this.parentPath, this.tabSetId ];

  getSubTabSetPath = (activeTabId) =>
    [...this.getBasePath(), 'tabs', activeTabId ];

  @dispatch() activateTab = activateTab;
}
