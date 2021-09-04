import { Input, Output, EventEmitter } from '@angular/core';
import { Component, DoCheck, OnInit } from '@angular/core';
import { QuizConstants } from 'src/app/common/quiz-constants';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit, DoCheck {
  @Input() quizFromParent: any;
  @Input() questionIndex: number;

  @Output() answers = new EventEmitter<{userAnswer: string, correctAnswer: string}>();
  @Output() totalQuestions = new EventEmitter<number>();
  @Output() isAnswered = new EventEmitter<boolean>();


  currentQuiz: any;
  questions: any[];
  currentQuestionId: string;
  currentQuestion: string;
  currentOptions: string[]
  userAnswer: string;
  correctAnswer: string;

  constructor() { }

  ngOnInit(): void {
    // this.questions = QuizConstants.quiz1Questions;
    if(this.quizFromParent) {
      this.currentQuiz = this.quizFromParent;
      this.totalQuestions.emit(this.questions.length);
    }
  }

  ngDoCheck(): void {
    if(this.quizFromParent) {
      this.currentQuiz = this.quizFromParent;
      this.questions = this.currentQuiz?.questions;
      this.totalQuestions.emit(this.questions.length);
      this.currentQuestionId = this.questions[this.questionIndex]?.id;
      this.currentQuestion = this.questions[this.questionIndex]?.question;
      this.currentOptions = this.questions[this.questionIndex]?.options;
    }
  }

  setAnswer(answer: string) {
    this.isAnswered.emit(true);
    this.userAnswer = answer;
    this.correctAnswer = this.questions[this.questionIndex].answer;
    this.answers.emit({userAnswer: this.userAnswer, correctAnswer: this.correctAnswer});
  }

  showQuestion(): boolean {
    let flag: boolean = false;
    if(this.questions) {
      flag = this.questionIndex < this.questions.length;
    }
    return flag;
  }
}
