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
    new Quote(1,"Paul","You fdkjgg dlkkkkflmk dfkdmlkf dfmkd dffmf fdmklf.","Mary",new Date(1999,5,7),15 ,1,),
    new Quote(2,"Rick","kdnfm", "Anonymous",new Date(2012,5,3),9 ,2),
    new Quote(3,"Darleen","The jfdnkvd dksmksf dfkfmdk dkmlkd dfmk dklkd","Abraham Lincon", new Date(2019,9,2), 20 , 0),
   
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
  
  downVoteQuote(index:  number){
    var down=this.quotes[index].downvote+1;
    this.quotes[index].downvote=down;
  }
  
  addNewQuote(quotes: Quote){
  let quoteLength = this.quotes.length;
  quotes.id = quoteLength+1;
  this.quotes.push(quotes)
  }
  arr:number[]=this.quotes.map(quotes=>quotes.upvote);
  highest =Math.max(...this.arr);
  constructor() {}
  ngOnInit(){}
 }