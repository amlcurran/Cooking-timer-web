// TODO How the heck would you test this?
var addTimerButton = document.querySelector('#addTimer');
var nameInputField = document.querySelector('#nameField');
var messageText = document.querySelector('#message');
var timerFactory = TimerFactory();
var timerFactoryCallbacks = TimerFactoryCallbacks(function(timer) {

  updateText('Created a timer for ' + timer.name);

}, function(message) {

  updateText(message);

});

addTimerButton.onclick = function() {

  timerFactory.create(nameInputField.value, timerFactoryCallbacks);

}

this.updateText = function(text) {
  messageText.innerText = text;
}
