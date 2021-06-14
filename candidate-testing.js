const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first woman in space?";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";
let questions;
let correctAnswers;
let candidateAnswers;


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  candidateName = input.question("What's your name?\n")
  console.log("Hey, "+candidateName)
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  answer = input.question(question)
  return answer

}

function gradeQuiz(candidateAnswer) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 

 let grade;
 console.log(candidateAnswer)
 console.log(correctAnswer)

  if (candidateAnswer.toUpperCase() == correctAnswer.toUpperCase())
  {
    grade = "Correct";
  }
  else
  {
    grade = "Incorrect";
  }
  


  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  
  candidateAnswer = askQuestion();
  console.log(candidateAnswer)
  console.log(gradeQuiz(candidateAnswer));
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};