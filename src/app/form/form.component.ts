import { Component, OnInit , EventEmitter, Output } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  writer!:string;
  quote!:string;
  author!:string;
  FormQuote!: Quote;

  @Output() addQuote= new EventEmitter<Quote>()
  submitQuote(){
    this.FormQuote = new Quote(0,this.writer,this.quote,this.author,new Date(),0,0)
    this.addQuote.emit(this.FormQuote)
  }



  
  constructor() { }

  ngOnInit(): void {
  }

}