import { Component, Input } from '@angular/core';
import { WithSubStore, select, select$, dispatch } from '@angular-redux/store';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';

import { ITabSetRecord, ITabRecord } from './model';
import { TabAction, SELECT_TAB, tabsetReducer } from './tabset.reducer';

export const toValueList = (obs$: Observable<object>) =>
  obs$.map(Object.values);
export const selectActiveTab = (state: ITabSetRecord) =>
  state && state.tabs ? state.tabs[state.activeTabId] : null;

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

  getBasePath = () => {
    return this.tabSetId ? [ ...this.parentPath, this.tabSetId ]: null;
  }

  getSubTabSetPath = (activeTabId) => {
    return [...this.getBasePath(), 'tabs', activeTabId ];
  }

  @dispatch() activateTab = (tabId: string): TabAction => ({
    type: SELECT_TAB,
    tabId,
  });
}
