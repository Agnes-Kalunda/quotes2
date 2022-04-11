import { Component, Input } from "@angular/core";
import { Quote } from "../quote";

@Component({
  selector: "app-quote-box",
  templateUrl: "./quote-box.component.html",
  styleUrls: ["./quote-box.component.scss"],
})
export class QuoteBoxComponent {
  // quote: Quote[]= [
  //   new Quote ()
  // ]
  // @Input() author!: string;
  // @Input() quote!: string;
  // @Input() tweetURL!: string;
  // @Input() getNewQuote!: () => void;
  quotes: Quote[]=[
    new Quote(1,"Paul","You can have it all.Just not all at once.","Oprah Winfrey",new Date(1999,5,7),15 ,1,),
    new Quote(2,"Rick","Beause paper has more patience than people.", "Anonymous",new Date(2012,5,3),9 , 2),
    new Quote(3,"Darleen","The best way to predict the future is to create it.","Abraham Lincon", new Date(2019,9,2), 20 , 0),
    new Quote(4,"Milly","Take every chance drop every fear.", "Martin Luther",new Date(2021,2,2) ,33, 5),
    new Quote(5,"Dolly","There can be miracles when you believe.", "Whitney Houston",new Date(2007,2,2) ,60, 1),
    new Quote(6,"Pam","Magic is believing in yourself.","Anonymous",new Date(2021,2,2) ,40, 2),
  ];
  // delete button
  quoteDelete(isComplete: boolean, index:number ){
    if (isComplete){
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].quote}?`);
      if (toDelete){
        this.quotes.splice(index,1);
      }
  
    }
  }
  //display quote details
  toggleDetails(index:number){
    this.quotes[index].showDetails =!this.quotes[index].showDetails;
  }
  //upvote logic
  upVoteQuote(index: number){
    var up=this.quotes[index].upvote+1;
    this.quotes[index].upvote=up;
  }
  //downvote logic
  downVoteQuote(index:  number){
    var down=this.quotes[index].downvote+1;
    this.quotes[index].downvote=down;
  }
  //nw quote logic
  addNewQuote(quotes: Quote){
  let quoteLength = this.quotes.length;
  quotes.id = quoteLength+1;
  this.quotes.push(quotes)
  }
  //quote with highest upvotes
  arr:number[]=this.quotes.map(quotes=>quotes.upvote);
  highest =Math.max(...this.arr);
  constructor() {}
  ngOnInit(){}
 }