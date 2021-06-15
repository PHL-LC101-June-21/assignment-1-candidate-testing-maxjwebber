const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first woman in space?";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";
let questions = ['Who was the first woman in space?','True or false: 5 kilometer == 5000 meters?','(5 + 3)/2 * 10 = ?',"Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2?",'What is the minimum crew size for the ISS?'];
let correctAnswers = ['Sally Ride','true','40','Trajectory','3'];
let candidateAnswers = [];


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  candidateName = input.question("What's your name?\n")
  console.log("Hey, "+candidateName+". Let's start the quiz!")
}

function askQuestion(nextQuestion) {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  answer = input.question(nextQuestion)
  return answer

}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  let maxGrade = questions.length;
  let grade = 0;
  for (i = 0; i<questions.length; i++)
  {
    if (candidateAnswers[i].toUpperCase() == correctAnswers[i].toUpperCase())
      {
        grade +=1;
      }
  }
  return "Final score:"+(grade/maxGrade*100)+"%";
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  
  for (i = 0; i<questions.length; i++)
  {
    candidateAnswers.push(askQuestion(questions[i]));
  }
  
  console.log(gradeQuiz(candidateAnswers));
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