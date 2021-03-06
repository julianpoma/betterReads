import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AuthorsComponent } from './authors/authors.component';
import { AuthorListComponent } from './authors/author-list/author-list.component';
import { AuthorDetailComponent } from './authors/author-detail/author-detail.component';
import { AppRoutingModule } from './/app-routing.module';
import { BooksComponent } from './books/books.component';
import { BookListComponent } from './books/book-list/book-list.component';
import { BookDetailComponent } from './books/book-detail/book-detail.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthService } from './auth.service';
import { FeedComponent } from './feed/feed.component';
import { QuoteFormComponent } from './quote-form/quote-form.component';
import { ReviewFormComponent } from './review-form/review-form.component';
import { UserService } from './user.service';
import { LibraryComponent } from './library/library.component';
import { EditBookComponent } from './books/edit-book/edit-book.component';
import { EditAuthorComponent } from './authors/edit-author/edit-author.component';
import { AccountManagementComponent } from './auth/account-management/account-management.component';
import { NotfoundComponent } from './auth/notfound/notfound.component';
import { AddAuthorComponent } from './authors/add-author/add-author.component';
import { FileUploadModule } from 'ng2-file-upload';
import { AddBookComponent } from './books/add-book/add-book.component';
import { DeleteAuthorComponent } from './authors/delete-author/delete-author.component';
import { DeleteBookComponent } from './books/delete-book/delete-book.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AuthorsComponent,
    AuthorListComponent,
    AuthorDetailComponent,
    BooksComponent,
    BookListComponent,
    BookDetailComponent,
    LoginComponent,
    FeedComponent,
    QuoteFormComponent,
    ReviewFormComponent,
    LibraryComponent,
    EditBookComponent,
    EditAuthorComponent,
    AccountManagementComponent,
    NotfoundComponent,
    AddAuthorComponent,
    AddBookComponent,
    DeleteAuthorComponent,
    DeleteBookComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    BrowserModule,
    HttpModule,
    HttpClientModule,
    FlexLayoutModule,
    AppRoutingModule,
    FileUploadModule
  ],
  providers: [AuthService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
