export class QuizConstants {
  public static helloWorld: string = "HelloWorld";
  public static quiz1Questions: any = [
    {
      question: 'What is your name?',
      options: ['Tom', 'Dick', 'Harry', 'Joe'],
      answer: 'Tom'
    },
    {
      question: 'Where do you Live?',
      options: ['India', 'Mexico', 'US', 'England'],
      answer: 'England'
    },
    {
      question: 'Who is best quarterback?',
      options: ['Brady', 'Manning', 'Montana', 'Favre'],
      answer: 'Montana'
    }
  ];

  public static allQuiz: any = [

    {
      quizId: 0,
      quizName: 'Quiz Zero',
      quizDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      keywords: '',
      questions: [
        {
          id: '1',
          question: 'What is your name?',
          options: ['Tom', 'Dick', 'Harry', 'Joe'],
          answer: 'Tom'
        },
        {
          id: '2',
          question: 'Where do you Live?',
          options: ['India', 'Mexico', 'US', 'England'],
          answer: 'England'
        },
        {
          id: '3',
          question: 'Who is best quarterback?',
          options: ['Brady', 'Manning', 'Montana', 'Favre'],
          answer: 'Montana'
        }
      ]
    },
    {
      quizId: 1,
      quizName: 'Quiz One',
      quizDescription: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. ',
      keywords: '',
      questions: [
        {
          id: '1',
          question: 'quiz1 question 1?',
          options: ['qz1ques1 - option 1', 'qz1ques1 - option 2', 'qz1ques1 - option 3', 'qz1ques1 - option 4'],
          answer: 'qz1ques1 - option 1'
        },
        {
          id: '2',
          question: 'quiz1 question 2?',
          options: ['qz1ques2 - option 1', 'qz1ques2 - option 2', 'qz1ques2 - option 3', 'qz1ques2 - option 4'],
          answer: 'qz1ques2 - option 2'
        },
        {
          id: '3',
          question: 'quiz1 question 3?',
          options: ['qz1ques3 - option 1', 'qz1ques3 - option 2', 'qz1ques3 - option 3', 'qz1ques3 - option 4'],
          answer: 'qz1ques3 - option 3'
        }
      ]
    }

  ];


}
