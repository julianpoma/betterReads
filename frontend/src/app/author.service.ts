import { Component, Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthorService {

  private firstPartUrl = "http://localhost:3000/api/";
  private data: any = {};


  constructor(private http: Http) {

  }

  getData(url) {
    return this.http.get(url)
                    .map((res: Response) => res.json())
  }

  getAuthors() {
    let url = this.firstPartUrl + "author";
    return this.getData(url);
  }

  getAuthorById(id: string) {
    let url = this.firstPartUrl + "author/" + id;
    return this.getData(url);
  }

  postQuote(authorId: any, user: string, quote: string){
    let url = this.firstPartUrl + "author/" + authorId + "/quote";
    
    return this.http.post(
      url,
      { quote: quote, user: user },
      { headers: new Headers({ 'Authorization': 'Bearer ' + localStorage.getItem('token') }) }
    )
    .map(
      response => {
        return response.json();
      })
  }

  postReview(authorId: any, user: string, comment: string, stars: number){
    let url = this.firstPartUrl + "author/" + authorId + "/review";
    
    return this.http.post(
      url,
      { user: user, comment: comment, stars: stars },
      { headers: new Headers({ 'Authorization': 'Bearer ' + localStorage.getItem('token') }) }
    )
    .map(
      response => {
        return response.json();
      })
  }

  editAuthor(id, form) {
    return this.http.patch(
      this.firstPartUrl + 'author/' + id,
      form,
      { headers: new Headers({ 'Authorization': 'Bearer ' + localStorage.getItem('token') }) }
    )
      .map(
      response => response.json()
      )
  }

  addBookToLibrary(authorId: string, bookId: string) {
    let url = "http://localhost:3000/api/author/" + authorId + "/add/" + bookId;

    return this.http.post(
      url,
      {},
      { headers: new Headers({ 'Authorization': 'Bearer ' + localStorage.getItem('token') }) }
    )
      .map(
      response => {
        response.json();
      }
      );
  }

  deleteBookFromLibrary(authorId: string, bookId: string) {
    let url = "http://localhost:3000/api/author/" + authorId + "/remove/" + bookId;

    return this.http.post(
      url,
      {},
      { headers: new Headers({ 'Authorization': 'Bearer ' + localStorage.getItem('token') }) }
    )
    .map(
      response => {
        response.json();
      }
    );
  }

  likeAuthor(authorId: string, likes: number) {
    let url = this.firstPartUrl + "author/like/" + authorId;

    return this.http.patch(
      url,
      { likes: likes },
      { headers: new Headers({ 'Authorization': 'Bearer ' + localStorage.getItem('token') }) }
    )
    .map(
      response => {
        return response.json();
      })
  }

  getPopularAuthors() {
    let url = this.firstPartUrl + "author/popular";
    return this.getData(url);
  }

  addAuthor(
    name: string,
    surname: string,
    dateOfBirth: string,
    dateOfDeath: string,
    gender: string,
    nationality: string,
    language: string,
    ocupation: string,
    photo: string
  ) {
    let url = this.firstPartUrl + "author/new";
    
    return this.http.post(
      url,
      {
        name: name,
        surname: surname,
        dateOfBirth: dateOfBirth,
        dateOfDeath: dateOfDeath,
        gender: gender,
        nationality: nationality,
        language: language,
        ocupation: ocupation,
        photo: photo      
      },
      { headers: new Headers({ 'Authorization': 'Bearer ' + localStorage.getItem('token') }) }
    )
    .map(
      response => {
        return response.json();
      })
  }

  deleteAuthor(id: string) {
    let url = this.firstPartUrl + "author/" + id;

    return this.http.delete(
      url,
      { headers: new Headers({ 'Authorization': 'Bearer ' + localStorage.getItem('token') }) }
    )
    .map(
      response => {
        return response.json();
      }
    )
  }

}
