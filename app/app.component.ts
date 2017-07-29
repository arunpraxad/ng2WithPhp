import { Component } from '@angular/core';
import { Http, Headers,RequestOptions } from '@angular/http';

@Component ({
    selector: 'init-app',
    template: `{{data}}!
    Name :: <input type="text" [(ngModel)]="username"/>
    Insert :: <button (click)="insertInTo()">insert</button>`
})

export class AppComponent {
    output = 'Hello World !!';
    username:String;
    data:any;
    headers:Headers;
    options:RequestOptions;
    constructor(public http: Http) {

    }

    insertInTo() {
        console.log('username :: ' , this.username);
        this.headers = new Headers({ 'Content-Type': 'text/html'});
        this.options = new RequestOptions({
            headers:this.headers
        });
        let a = {username:this.username};
        this.http.post("//localhost/angularServer/select.php",a,this.options).subscribe(
            data => console.log(data),
            err => console.log(err.json().message),
            () => console.log('Authentication Complete')
        );
        this.username = '';
    }
}