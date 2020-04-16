import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LazyService {
    constructor(public http: HttpClient) { }
}

@Injectable()
export class LazyData {
    id: number;
    title: string;
    content: string;
}