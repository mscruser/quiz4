var students = ["Joe", "Jack", "Jane", "Jill"];
var gradeMean = [90, 68, 92, 88];

//Using the data above write a JavaScript that is linked to an html page that determines who has the lowest score.
//Write the answer in sentence form that includes both the name of the student and the score they have.
//Write the answer to both the console and the html page using the document write or other command.


var tempLowestScore = gradeMean[0];
var tempLowestStudent = students[0];

for (var i=1; i<students.length; i++){
  if (gradeMean[i] < tempLowestScore){
    tempLowestScore=gradeMean[i];
    tempLowestStudent=students[i];
  }
}
console.log(tempLowestStudent + " has the lowest score of " + tempLowestScore + ".");
document.getElementById("info").innerHTML= tempLowestStudent + " has the lowest score of " + tempLowestScore + ".";
