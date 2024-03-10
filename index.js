class questions {
    constructor(questions, options, correctAnwer, userAnswer) {
        this.question=question;
        this.options=options;
        this.correctAnswer=correctAnwer;
        this.userAnswer=userAnswer; 
    }

isCorrectAnswer() {
    return this.userAnswer===this.correctAnswer;
   }
} 

class quiz {
    constructor(question) {
        this.questions=questions;
    }
    
    askQuestions() {
        this.questions.forEach((question)=>{
            console.log(question.question);
            const userAnswer=question.userAnswer;
            if (question.isCorrectAnswer()) {
                console.log("¡correcto!");
            }    else{
                    console.log('incorrecto.la respuesta correcta es ${question.correctAnswer}');
            }            
        });
    }
}

const questions=[
    new question("¿que marca de autos es japonesa?",["nissan","chevrolet","ford"],"nissan","nissan"),
    new question("¿que color es el chocolate?",["azul","negro","cafe"],"cafe","cafe"),
    new question("¿que se puede comer?",["manzana","pera","metal"],"manzana","pera"),
    new question("¿que usa aire?",["llanta","madera","piso"],"llanta","llanta"),
    new question("¿que objeto vuela?",["avion","carro","elicoptero"],"avion","elocoptero"),
];
const quiz=new quiz(questions);
quiz.askQuestions();