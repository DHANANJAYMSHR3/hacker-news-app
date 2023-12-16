import { NgModule} from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent} from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NewsModule } from './components/SearchNews/news.module';
import { FormsModule } from '@angular/forms';









@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [HttpClientModule,
    BrowserModule,
    AppRoutingModule,NewsModule,FormsModule
   
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
