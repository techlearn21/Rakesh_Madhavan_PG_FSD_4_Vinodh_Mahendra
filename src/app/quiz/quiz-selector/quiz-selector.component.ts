import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { QuizConstants } from '../../common/quiz-constants';

@Component({
  selector: 'app-quiz-selector',
  templateUrl: './quiz-selector.component.html',
  styleUrls: ['./quiz-selector.component.css']
})
export class QuizSelectorComponent implements OnInit {

  @Output() startFromSelector = new EventEmitter<boolean>();
  @Output() quizFromSelector = new EventEmitter<any>();
  quizInSelector: any;

  allQuiz: any[];
  selectedQuiz: string;
  selectedQuizId = -1;
  isSelected=true;

  constructor() { }

  ngOnInit(): void {
    this.allQuiz = QuizConstants.allQuiz;
  }

  getQuiz(num: number): any {
    let  tempQ: null;
    if(num > -1) {
      tempQ = this.allQuiz[num];
    }
    return tempQ;
  }

  setStartQuiz() {
    const tempQuiz = this.getQuiz(this.selectedQuizId);
    this.quizFromSelector.emit(tempQuiz);
    this.startFromSelector.emit(true);
  }

}
