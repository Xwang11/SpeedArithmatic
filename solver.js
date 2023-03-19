
function solve() {
    var answerElement = document.querySelector('.answer');
    var problemElement = document.querySelector('.problem');
    var enterEvent = new KeyboardEvent('keydown', {key:'Enter'});

    var problem = problemElement.innerHTML;
    var problem = problem.replace(/÷/g, "/");
    var problem = problem.replace(/–/g, "-");
    var problem = problem.replace(/×/g, "*");
    var result = eval(problem);

    answerElement.value = result;
    answerElement.dispatchEvent(enterEvent);
}

for(let i = 0; i<69420; i++) {
    setTimeout(() => {
        solve();
      }, 1000);
}

