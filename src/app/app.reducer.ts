import { Reducer, Action } from 'redux';
import { IAppState } from './app.model';

export const appReducer: Reducer<IAppState>
  = (state: IAppState, action: Action) => state;
