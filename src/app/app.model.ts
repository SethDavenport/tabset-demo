import { ITabSetRecord } from '../tabset/tabset.model';

export interface IAppState {
  tabset1: ITabSetRecord;
  tabset2: ITabSetRecord;
  tabset3: ITabSetRecord;
}

export const INITIAL_STATE: IAppState = {
  tabset1: {},
  tabset2: {},
  tabset3: {},
};
