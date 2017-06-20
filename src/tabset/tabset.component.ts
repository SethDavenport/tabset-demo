import { Component, Input, ContentChildren, QueryList, AfterContentInit, OnDestroy } from '@angular/core';
import { WithSubStore, select, select$, dispatch } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Action } from 'redux';
import { ITabSetRecord } from './tabset.model';
import { TabComponent } from '../tab/tab.component';

type TabAction = Action & { tabId: number };
const ACTIVATE_TAB = 'ACTIVATE_TAB';

export function tabsetReducer(
  state: ITabSetRecord,
  { type, tabId }: TabAction) {
  return type === ACTIVATE_TAB ?
    { ...state, activeTabId: tabId } :
    state;
}

@Component({
  selector: 'demo-tabset',
  styleUrls: [ './tabset.component.css' ],
  templateUrl: './tabset.component.html',
})
@WithSubStore({
  basePathMethodName: 'getBasePath',
  localReducer: tabsetReducer,
})
export class TabSetComponent implements AfterContentInit, OnDestroy {
  @Input() basePath: string[];
  @Input() title;
  @ContentChildren(TabComponent) tabs: QueryList<TabComponent>;
  @select() readonly activeTabId$: Observable<number>;

  @dispatch() activateTab(tabId: number) {
    return { type: ACTIVATE_TAB, tabId };
  }

  isActive(tab: TabComponent, activeTabId: number = 0) {
    return tab.tabId === activeTabId;
  }

  ngAfterContentInit() {
    this.tabs.forEach((tab: TabComponent, idx: number) => tab.tabId = idx);
    this.subscription = this.activeTabId$.subscribe(
      (activeTabId: number) => this.updateChildVisibility(activeTabId));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  private getBasePath() {
    return this.basePath;
  }

  private updateChildVisibility = (activeTabId: number = 0): void => {
    this.tabs.forEach((tab: TabComponent) =>
      tab.isVisible = (tab.tabId === activeTabId));
  }

  private subscription: Subscription;
}
