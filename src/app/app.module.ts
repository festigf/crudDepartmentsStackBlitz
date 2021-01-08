import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HelloComponent } from './hello.component';
import { DataService } from './services/data.service';
import { MaterialModule } from './shared/material.module';

@NgModule({
  declarations: [AppComponent,HelloComponent],
  imports: [BrowserModule, BrowserAnimationsModule,FormsModule,
    ReactiveFormsModule,MaterialModule,HttpClientModule],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
