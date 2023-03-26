//calculation part
function calculateMarks() {
    var numQuestions = document.getElementById("numQuestions").value;
    var marksPerQuestion = document.getElementById("marksPerQuestion").value;
    var negativePoints = document.getElementById("negativePoints").value;
    var numQuestionsAttempted = document.getElementById("numQuestionsAttempted").value;
    var numWrongAnswers = document.getElementById("numWrongAnswers").value;
    var weightageMarks =  document.getElementById("weightageMarks").value;
    var totalMarks = (numQuestionsAttempted * marksPerQuestion) - (numWrongAnswers * negativePoints) - (numWrongAnswers * marksPerQuestion);
    var percentage = (totalMarks / (numQuestions*marksPerQuestion)) * (100);
    //var round = (Math.ceil(percentage*100)/100);
    
    var weight = (Math.ceil((percentage/100)*weightageMarks));
    if (totalMarks<0){
      totalMarks=0;
      weight=0;
      percentage=0;
    } 
	  document.getElementById("totalMarks").innerHTML = "Marks obtained:  " + totalMarks + "/" + (numQuestions*marksPerQuestion);
    document.getElementById("percentage").innerHTML = "Percentage:  " + Math.ceil(percentage) + "/100";
    document.getElementById("weight").innerHTML =     "Weightage:  " + weight+"/"+weightageMarks;
    
    document.getElementById("progress-text").innerHTML = weight+"/"+weightageMarks;  
    progressBar(weight,weightageMarks);

}	

//progress bar
function progressBar(progressVal,totalPercentageVal = 100) {
  var strokeVal = (4.64 * 100) /  totalPercentageVal;
var x = document.querySelector('.progress-circle-prog');
  x.style.strokeDasharray = progressVal * (strokeVal) + ' 999';
var el = document.querySelector('.progress-text'); 
var from = $('.progress-text').data('progress');
$('#progress-text').data('progress', progressVal);
var start = new Date().getTime();

setTimeout(function() {
    var now = (new Date().getTime()) - start;
    var progress = now / 700;
    el.innerHTML = progressVal / totalPercentageVal * 100 + '%';
    if (progress < 1) setTimeout(arguments.callee, 10);
}, 10);

}


