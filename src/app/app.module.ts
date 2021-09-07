import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { reducers } from './store';
import { CounterComponent } from './counter/counter.component';
import { CounterEffects } from './store/counter';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot(reducers, {
      runtimeChecks: {
        strictActionImmutability: true,
        strictActionSerializability: true,
        strictStateImmutability: true,
        strictStateSerializability: true
      }
    }),
    EffectsModule.forRoot([CounterEffects]),
    MaterialModule
  ],
  declarations: [AppComponent, CounterComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
