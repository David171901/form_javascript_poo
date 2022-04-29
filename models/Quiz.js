import { Question } from "./Question.js";

export class Quiz{
    
    questionsIndex = 0
    score = 0

    /**
     * 
     * @param {Question[]} questions 
     */
    
    constructor(questions){
        this.questions = questions
    }

    /**
     * 
     * @returns {Question}
     */

    getQuestionIndex(){
        return this.questions[this.questionsIndex];
    }
    
    guess(answer){
        if (this.getQuestionIndex().correctAnswer(answer)){
            this.score++;
        }

        this.questionsIndex++;
    }

    isEnded(){
        return this.questions.length === this.questionsIndex
    }
}