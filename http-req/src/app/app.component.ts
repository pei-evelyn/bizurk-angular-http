import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  constructor(private http: HttpClient) {}

  post;
  show;
  data;

  ngOnInit() {
    this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe(data => {
      this.data = data;
      this.show = true;
      console.log(this.data)
    })
  }

  getPostInfo(id) {
    this.http.get(`https://jsonplaceholder.typicode.com/posts/${id}`).subscribe(data => {
      console.log(data)
      this.show = false;
      this.post = data;
    })
  }
}
