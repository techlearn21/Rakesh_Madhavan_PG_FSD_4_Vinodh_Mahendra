import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  quizFromSelector: any;
  startFromSelector: boolean;
  currentQuiz: any;
  currentIndex = 0;
  answers: any;
  score = 0;
  totalQuestions: number = 0;
  startQuiz = false;
  quizOver = false;
  isAnswered = false;

  constructor() { }

  ngOnInit(): void {
    this.currentQuiz = this.quizFromSelector;
    this.startQuiz = this.startFromSelector;
   }

  goNext() {
    this.currentIndex++;
    this.updateScore();
    if(this.currentIndex === this.totalQuestions) {
      this.endQuiz();
    }
    this.setIsAnswered(false);
  }

  goPrevious() {
    if(this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  receiveAnswers(receivedAnswers) {
    this.answers = receivedAnswers;
  }

  updateScore() {
    if(this.answers.userAnswer === this.answers.correctAnswer) {
      this.score++;
    }
  }

  getTotalQuestions(totalQuestions: number) {
    this.totalQuestions = totalQuestions;
  }

  endQuiz() {
    this.quizOver = true;
  }

  restartQuiz() {
    this.quizOver = false;
    this.score = 0;
    this.currentIndex = 0;
  }

  setIsAnswered(isAnswered: boolean) {
    this.isAnswered = isAnswered;
  }

  receiveSelectedQuiz(selectedQuiz: any) {
    if(!(this.currentIndex > 0 && !this.quizOver)) {
      this.currentQuiz = selectedQuiz;
    }
  }

  receiveStart(startQuiz: boolean) {
    console.log("received start - " + startQuiz);
    this.startQuiz = startQuiz;
    this.quizOver = false;
    this.currentIndex = 0;
    this.score = 0;
  }

  canNextQuizStart(): boolean {
    let canStart: boolean = false;
    if(this.quizOver) {
      if(this.startQuiz) {
        canStart = true;
      }
    }
    return canStart;
  }

}
