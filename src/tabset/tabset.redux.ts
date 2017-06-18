import { Action } from 'redux';
import { Observable } from 'rxjs/Observable';

import { ITabSetRecord } from './model';

// Redux-specific stuff for this component - there isn't much so
// I stuck it all in one file.

// Component-specific action.
type TabAction = Action & { tabId: string };
const ACTIVATE_TAB = 'ACTIVATE_TAB';

export const activateTab = (tabId: string) => ({
  type: ACTIVATE_TAB,
  tabId,
});

// Component-specific reducer.
export const tabsetReducer = (state: ITabSetRecord, { type, tabId }: TabAction) =>
  type === ACTIVATE_TAB ?
    {
      ...state,
      activeTabId: tabId
    }:
    state;


// Selectors and transformers
export const toValueList = (obs$: Observable<object>) =>
  obs$.map(Object.values);

export const selectActiveTab = (state: ITabSetRecord) =>
  state && state.tabs ? state.tabs[state.activeTabId] : null;
