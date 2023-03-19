while(true) {
var answerElement = document.querySelector('.answer');
var problemElement = document.querySelector('.problem');
var enterEvent = new KeyboardEvent('keydown', {key:'Enter'});

var problem = problemElement.innerHTML;
var result = eval(problem);

answerElement.value = result;
answerElement.dispatchEvent(enterEvent);
}

