var resultsub = document.getElementsByClassName("sub-answer");

document.calcsub.addEventListener("submit", function(e){
    e.preventDefault();
    var subnum1 = document.calcsub.firstnum.value;
    var subnum2 = document.calcsub.secondnum.value;

    resultsub[0].innerHTML=subnum1-subnum2;
});
var resultadd = document.getElementsByClassName("add-answer");

document.calcadd.addEventListener("submit", function(e){
    e.preventDefault();
    var addnum1 = document.calcadd.firstnum.value;
    var addnum2 = document.calcadd.secondnum.value;

    resultadd[0].innerHTML=parseFloat(addnum1)+parseFloat(addnum2);
});


var resultmul = document.getElementsByClassName("mul-answer");

document.calcmul.addEventListener("submit", function(e){
    e.preventDefault();
    var mulnum1 = document.calcmul.firstnum.value;
    var mulnum2 = document.calcmul.secondnum.value;

    resultmul[0].innerHTML=mulnum1*mulnum2;
});