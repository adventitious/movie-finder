import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class CarApiService {
  constructor() { }
}
