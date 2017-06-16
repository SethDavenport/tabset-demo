import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgReduxModule, NgRedux, DevToolsExtension } from '@angular-redux/store';

import { AppComponent } from './app.component';
import { TabSetComponent } from '../tabset/tabset.component';

import { INITIAL_STATE } from './model';
import { appReducer } from './app.reducer';

@NgModule({
  declarations: [ AppComponent, TabSetComponent ],
  imports: [ BrowserModule, NgReduxModule ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    store: NgRedux<any>,
    devTools: DevToolsExtension) {
    store.configureStore(
      appReducer,
      INITIAL_STATE,
      [],
      devTools.isEnabled() ? [ devTools.enhancer() ] : []);
  }
}
