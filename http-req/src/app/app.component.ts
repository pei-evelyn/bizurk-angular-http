import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  constructor(private http: HttpClient) {}

  data;
  post;

  ngOnInit() {
    this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe(data => {
      this.data = data;
      console.log(this.data)
    })
  }

  getPostInfo(id) {
    this.http.get(`https://jsonplaceholder.typicode.com/posts/${id}`).subscribe(data => {
      console.log(data)
      this.post = data;
    })
  }
}
