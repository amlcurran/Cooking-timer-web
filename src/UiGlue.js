// TODO How the heck would you test this?
var addTimerButton = document.querySelector('#addTimer');
var nameInputField = document.querySelector('#nameField');
var messageText = document.querySelector('#message');
var noTimerLabel = document.querySelector('#noTimersLabel');
var timerListView = document.querySelector('#timerListView');
var timerFactory = TimerFactory();
var timerList = TimerList();

var timerFactoryCallbacks = TimerFactoryCallbacks(function(timer) {
  updateText('Created a timer for ' + timer.name);
  timerList.addTimer(timer);
}, function(message) {
  updateText(message);
});

var timerListCallback = TimerListCallback(function() {
    noTimerLabel.style.display = 'inline-block';
    console.log('no timers!');
}, function(addedTimer) {
    noTimerLabel.style.display = 'none';
    var newTimerSpan = document.createElement('span');
    var newTimerText = document.createTextNode(addedTimer.name);
    newTimerSpan.appendChild(newTimerText);
    timerListView.appendChild(newTimerSpan);
    console.log('added timer!');
}, function(removedTimer) {
    noTimerLabel.style.display = 'none';
    console.log('removed timer!');
});
timerList.addCallback(timerListCallback);

addTimerButton.onclick = function() {
  timerFactory.create(nameInputField.value, timerFactoryCallbacks);
}

this.updateText = function(text) {
  messageText.innerText = text;
}
