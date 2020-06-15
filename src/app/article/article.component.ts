import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Article } from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.sass']
})
export class ArticleComponent implements OnInit {

  @HostBinding('attr.class') cssClass = 'row'; //when this component is created in the host it's gonna have a class 'row'
  @Input() article: Article;

  constructor() { }

  ngOnInit() {
  }

  upVote(): boolean {
    this.article.upVote();
    return false;
  }

  downVote(): boolean {
    this.article.downVote();
    return false;
  }


}
