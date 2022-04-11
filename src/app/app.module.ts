import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteBoxComponent } from './quote-box/quote-box.component';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';
import { QuoteDetailsComponent } from './quote-details/quote-details.component';
import { QuoteDatePipe } from './quote-date.pipe';

@NgModule({
  declarations: [
    AppComponent,
    QuoteBoxComponent,
    FormComponent,
    QuoteDetailsComponent,
    QuoteDatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
