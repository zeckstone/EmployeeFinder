$("#submit").click( function(){
    const q1 = ('.q1').value;
    const q2 = ('.q2').value;
    const q3 = ('.q3').value;
    const q4 = ('.q4').value;
    const q5 = ('.q5').value;
    const q6 = ('.q6').value;
    const q7 = ('.q7').value;
    const q8 = ('.q8').value;
    const q9 = ('.q9').value;
    const q10 = ('.q10').value;

    if (q1 === false  || q2 === false  || q3 === false || q4 === false || q5 === false || q6 === false || q7 ===false || q8 === false || q9 === false || q10 === false){
        alert("Please complete survey!");
    }
});