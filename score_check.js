let teacher = prompt("Enter Teacher Name");
let passWord = prompt("Enter Password");
if (passWord.length < 4){
    alert("Password is too short!");
}
else if (passWord.length > 4){
    alert("Welcome " + teacher);
    let learnerName = prompt("Enter Learner Name");
    let score = Math.random();
    percentageScore = Math.floor(score) * 100;
    if (percentageScore > 50 && percentageScore < 70){
        alert(learnerName + " passed with " + percentageScore + "%, an average student.");
    }
    else if (percentageScore > 70 && percentageScore < 100){
        alert(learnerName + " passed with " + percentageScore + "%, an A+ student.");
    }
    else if (percentageScore < 50 && percentageScore > 20){
        alert(learnerName + " failed with " + percentageScore + "%, needs extra classes!");
    }
    else if (percentageScore === 0 || percentageScore < 20){
        alert(learnerName + " failed with " + percentageScore + "%, should go to previous grade!");
    }
}