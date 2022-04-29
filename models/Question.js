export class Question{
    /**
     * 
     * @param {string} text this is the text of the question
     * @param {string[]} choices this are the choises of the question
     * @param {*} answer this is the answer of the question
     */
    constructor(text,choices,answer){
        this.text = text,
        this.choices = choices,
        this.answer = answer
    }

    /**
     * 
     * @param {string} choice some text to guess
     * @returns {boolean} return true if the answer is correct
     */
    correctAnswer(choice) {
        return choice === this.answer    
    }
}







// const question1 = new Question('¿Pregunta?',["Respuesta1","Respuesta2"],"Respuesta1")
// console.log(question1.correctAnswer('Respuesta1'))