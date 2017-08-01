import { Component, OnInit } from '@angular/core';
import { Http, Headers,RequestOptions } from '@angular/http';

@Component ({
    selector: 'init-app',
    template: `{{data}}!
    Name :: <input type="text" [(ngModel)]="username"/>
    Insert :: <button (click)="insertInTo()">insert</button>`
})

export class AppComponent implements OnInit {
    output = 'Hello World !!';
    username:String;
    data:any;
    headers:Headers;
    options:RequestOptions;
    constructor(public http: Http) {

    }

    ngOnInit() {
        this.http.get("//localhost/angularServer/get.php").subscribe(
            data => {
                //let dat = JSON.parse(data);
                console.log(data.json())},
            err => console.log(err.json().message)
        );
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