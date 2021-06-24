// Function for quiz 1 //

function submitAnswers() {
    // Setting variables //
    var Questions = 3;
    var score = 0;

    var answers = ['b', 'a', 'a']; // Answers for quiz 1 //

    var q1 = document.forms['form']['q1'].value; // Finds inputted value for question 1 //
    var q2 = document.forms['form']['q2'].value; // Finds inputted value for question 2 //
    var q3 = document.forms['form']['q3'].value; // Finds inputted value for question 3 //
    
    // Loops through all the answers
    for (var i = 1; i < Questions+1; i++) { // If not all questions have been answered 
      if (eval('q'+i) == null || eval('q'+i) == '') { // Finds question that has not been answered
        alert('You must answer question ' + i + ' to submit'); // Prints message
        return false;
      } else { // If all questions have been answered 
        if (eval('q'+i) === answers[i-1]) { // Cycles through inputted values to find a match with answer
          score += 1; // Adds 1 to the score if an answer is correct
        };
      };
    };
    
    // Prints score 
    alert('Good job! You got ' + score + ' out of ' + Questions + ' correct!');
  };

// Function for quiz 2 //

function submitAnswers2() {
    var Questions = 3;
    var score = 0;
    
    var answers = ['c', 'a', 'c']; // Answers for quiz 2 //
    
    var q1 = document.forms['form2']['q1'].value;
    var q2 = document.forms['form2']['q1'].value;
    var q3 = document.forms['form2']['q3'].value;
  
    for (var i = 1; i < Questions+1; i++) {
      if (eval('q'+i) == null || eval('q'+i) == '') {
        alert('You must answer question ' + i + ' to submit');
        return false;
      } else {
        if (eval('q'+i) === answers[i-1]) {
          score += 1;
        };
      };
    };

    alert('Good job! You got ' + score + ' out of ' + Questions + ' correct!');
  };

// Function for quiz 3 //

function submitAnswers3() {
    var Questions = 3;
    
    var score = 0;
    
    var answers = ['a', 'a', 'a']; // Answers for quiz 3 // 
    
    var q1 = document.forms['form3']['q1'].value;
    var q2 = document.forms['form3']['q2'].value;
    var q3 = document.forms['form3']['q3'].value;
    
    for (var i = 1; i < Questions+1; i++) {
      if (eval('q'+i) == null || eval('q'+i) == '') {
        alert('You must answer question ' + i + ' to submit');
        return false;
      } else {
        if (eval('q'+i) === answers[i-1]) {
          score += 1;
        };
      };
    };
    
    alert('You got ' + score + ' out of ' + Questions + ' correct!');
  };
