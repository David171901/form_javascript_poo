export class UI{
    constructor(){

    }

    /**
     * 
     * @param {string} text question to render  
     */

    showQuestion(text){
        const questionTitle = document.getElementById('question')
        questionTitle.innerText = text
    }

    /**
     * 
     * @param {string[]} choices 
     */

    showChoices(choices, callback){
        const choicesContainer = document.getElementById('choices')
        choicesContainer.innerHTML = ''
        for (let i = 0;i<choices.length;i++){
            const button = document.createElement("button");
            button.innerText = choices[i];
            button.className = 'button'
            button.addEventListener('click',()=> callback(choices[i]))

            choicesContainer.append(button)
        }
    }

    showScore(score,total){
        const quizEndHTML = `
        <div class="results">
            <h2>Result</h2>
            <h3>Your Score ${score} of ${total}</h3>
        </div>
        `;
        const element = document.getElementById("quiz");
        element.innerHTML = quizEndHTML;
        for (var i = 1; i < 99999; i++)
        window.clearInterval(i);
    }

    showProgress(currentIndex,total){
        const showProgressContainer = document.getElementById('progress')
        showProgressContainer.innerHTML = `
            Question ${currentIndex} of ${total}
        `
    }

    showTimer(){
        // Set the date we're counting down to
        var countDownDate = new Date().getTime()+ 2*60000;

        // Update the count down every 1 second
        var x = setInterval(function() {
        
            // Get today's date and time
            var now = new Date().getTime();
        
            // Find the distance between now and the count down date
            var distance = countDownDate - now;
        
            // Time calculations for days, hours, minutes and seconds
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
            // Display the result in the element with id="demo"
            document.getElementById("demo").innerHTML = minutes + "m " + seconds + "s ";
        
            // If the count down is finished, write some text
            if (distance < 0) {
            clearInterval(x);
                document.getElementById("demo").innerHTML = "EXPIRED";
                const quizEndHTML = `
                <div class="results">
                    <h2>TIME EXPIRED</h2>
                </div>
                `;
                const element = document.getElementById("quiz");
                element.innerHTML = quizEndHTML;
            }
        }, 1000);
    }
}