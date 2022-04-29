import {questions} from './data/questions.js'
import {Quiz} from './models/Quiz.js'
import {UI} from './models/UI.js'

/**
 * 
 * @param {Quiz} quiz 
 * @param {UI} ui 
 */


const renderPage = (quiz,ui)=>{
    if (quiz.isEnded()){
        ui.showScore(quiz.score,quiz.questions.length)
    }
    else{
        ui.showQuestion(quiz.getQuestionIndex().text)
        ui.showChoices(quiz.getQuestionIndex().choices,(currentchoice)=>{
            quiz.guess(currentchoice)
            renderPage(quiz,ui)
        })
        ui.showProgress(quiz.questionsIndex+1,quiz.questions.length)
    }
}

function main(){
    const quiz =  new Quiz(questions);
    const ui = new UI();
    renderPage(quiz,ui)
    ui.showTimer()
}

main()