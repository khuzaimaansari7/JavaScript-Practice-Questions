function studentGrades(userInput){

    let score = Number(userInput);
    let grade;

    if(score >= 80 && score <= 100){
        grade = "A Grade";
    }
    else if(score >= 70 && score <= 79){
        grade = "B Grade";
    }
    else if(score >= 60 && score <= 69){
        grade = "C Grade";
    }
    else if(score >= 50 && score <= 59){
        grade = "D Grade";
    }
    else{
        grade = "F Grade";
    }

    return grade;
}

let userInput = prompt("Enter Your Score: ");
console.log(studentGrades(userInput));