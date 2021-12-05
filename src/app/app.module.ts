import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './views/layouts/footer/footer.component';
import { HeaderComponent } from './views/layouts/header/header.component';
import { NotFoundComponent } from './views/pages/not-found/not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { AuthGuard } from './guards/auth.guard';
import { NoAuthGuard } from './guards/noauth.guard';
import { NgxSummernoteModule } from 'ngx-summernote';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng2SmartTableModule } from 'ng2-smart-table';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    NotFoundComponent,
  ],
  imports: [
    Ng2SmartTableModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      closeButton: true,
      timeOut: 3000, // 2 seconds
      progressBar: true,
    }),
    HttpClientModule,
    ReactiveFormsModule,
    NgxSummernoteModule,
    NgxDropzoneModule,
    NgbModule,
  ],
  providers: [AuthGuard, NoAuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
