import { Component, Input } from "@angular/core";
import { Quote } from "../quote";

@Component({
  selector: "app-quote-box",
  templateUrl: "./quote-box.component.html",
  styleUrls: ["./quote-box.component.scss"],
})
export class QuoteBoxComponent {
  quote: Quote[]= [
    new Quote ()
  ]
  // @Input() author!: string;
  // @Input() quote!: string;
  // @Input() tweetURL!: string;
  // @Input() getNewQuote!: () => void;

  constructor() {}
 }