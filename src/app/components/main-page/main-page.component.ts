import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Note } from 'src/app/model/note';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit{

  noteObj= new Note()
  noteArray: Note[] = []
  addNoteValue= ''
  editNoteValue= ''


  constructor(private noteService: ServiceService){
//reactive forms
  }

  ngOnInit(): void {
  }

  initialize(){
    this.noteObj = new Note()
    this.editNoteValue = ''
    this.addNoteValue = ''
    this.noteArray = []
    this.getAllNotes()
  }

  getAllNotes(){
    this.noteService.getAllNotes().subscribe(res =>{
      console.log(res)
      this.noteArray = res
    }, err =>{
      alert(err.message)
    })
  }

  addNote(){
    this.noteObj.note_massage = this.addNoteValue
    this.noteService.addNote(this.noteObj).subscribe(res =>{
        this.initialize()
    }, err => {
      alert(err.message)
    })
  }

  editNote(){
    this.noteObj.note_massage = this.editNoteValue
    this.noteService.editNote(this.noteObj).subscribe(res => {
      this.initialize()
    }, err =>{
      alert(err.message)
    })
  }

  delNote(note : Note){
    this.noteService.delNote(note).subscribe(res=>{
      this.initialize()
    }, err =>{
      alert(err.message)
    })
  }

  call(note : Note){
    this.noteObj = note
    this.editNoteValue = note.note_massage
  }
  
}
