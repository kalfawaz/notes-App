import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Note } from '../model/note';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  serviceURL : string 

  constructor(private http: HttpClient) {
    this.serviceURL = 'http://localhost:3000/notes'
  }

  addNote(note: Note): Observable<Note>{
    return this.http.post<Note>(this.serviceURL,note)
  }

  getAllNotes(): Observable<Note []>{
    return this.http.get<Note []>(this.serviceURL)
  }

  editNote(note: Note): Observable<Note>{
    return this.http.put<Note>(this.serviceURL+'/'+note.id,note)
  }
  
  delNote(note: Note): Observable<Note>{
    return this.http.delete<Note>(this.serviceURL+'/'+note.id)
  }
}
