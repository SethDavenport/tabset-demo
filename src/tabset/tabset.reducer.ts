import { Action } from 'redux';
import { ITabSetRecord } from './model';

export type TabAction = Action & { tabId: string };
export const SELECT_TAB = 'SELECT_TAB';

export const tabsetReducer = (state: ITabSetRecord, { type, tabId }: TabAction) =>
  type === SELECT_TAB ?
    {
      ...state,
      activeTabId: tabId
    }:
    state;

