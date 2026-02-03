import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../http/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  private url="https://localhost:7139/api/Notes";

  constructor(private http: HttpService) { }

  createNotes(data: any) {
    return this.http.postMethod(
      `${this.url}/Create`,
      data,
      true
    );
  }

  displayNotes() {
    return this.http.getMethod(
      `${this.url}/Display`,
      true
    );
  }

  private refreshSource = new Subject<void>();
  refreshNotes$ = this.refreshSource.asObservable();

  refreshNotes() {
    this.refreshSource.next();
  }

  updateNotes(data: any) {
    return this.http.putMethod(
    
      `${this.url}/Update`,
      data,
      true
    );

  }

  deleteNote(id: string) {
    return this.http.deleteMethod(
      `${this.url}/${id}`,
      true
    );
  }
}