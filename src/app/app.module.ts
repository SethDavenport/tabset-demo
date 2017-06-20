import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgReduxModule, NgRedux, DevToolsExtension } from '@angular-redux/store';

import { AppComponent } from './app.component';
import { TabSetComponent } from '../tabset/tabset.component';
import { TabComponent } from '../tab/tab.component';
import { appReducer } from './app.reducer';
import { IAppState, INITIAL_STATE } from './app.model';

@NgModule({
  declarations: [ AppComponent, TabSetComponent, TabComponent ],
  imports: [ BrowserModule, NgReduxModule ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    store: NgRedux<IAppState>,
    devTools: DevToolsExtension) {
    store.configureStore(
      appReducer,
      INITIAL_STATE,
      [],
      devTools.isEnabled() ? [ devTools.enhancer() ] : []);
  }
}
