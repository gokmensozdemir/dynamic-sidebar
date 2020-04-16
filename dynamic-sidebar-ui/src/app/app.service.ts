import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AppService {
    constructor(public http: HttpClient) { }

    getMenuList(){
        return this.http.get('http://localhost:8000/api/menu');
    }
}