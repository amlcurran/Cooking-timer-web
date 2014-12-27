// TODO How the heck would you test this?
var addTimerButton = document.querySelector('#addTimer');
var nameInputField = document.querySelector('#nameField');
var messageText = document.querySelector('#message');
var noTimerLabel = document.querySelector('#noTimersLabel');
var timerListView = document.querySelector('#timerListView');
var timeInputField = document.querySelector('#timeField');

var timerFactory = new TimerFactory();
var notifier = new NotificationNotifier();
var timerList = new TimerList(new NotificationScheduler(notifier));

window.addEventListener('load', function () {
    // At first, let's check if we have permission for notification
    // If not, let's ask for it
    notifier.ensureNotification();
});

var timerFactoryCallbacks = TimerFactoryCallbacks(function(timer) {
  updateText('Created a timer for ' + timer.name);
  timerList.addTimer(timer);
}, function(message) {
  updateText(message);
});

var timerListCallback = TimerListCallback(function() {
    noTimerLabel.style.display = 'inline-block';
}, function(addedTimer) {
    noTimerLabel.style.display = 'none';
    var newTimerSpan = document.createElement('span');
    var newTimerText = document.createTextNode(addedTimer.name);
    formatTimer(newTimerSpan);
    newTimerSpan.appendChild(newTimerText);
    timerListView.appendChild(newTimerSpan);
}, function(removedTimer) {
    noTimerLabel.style.display = 'none';
});
timerList.addCallback(timerListCallback);

addTimerButton.onclick = function() {
    var valueInMins = timeInputField.value;
    timerFactory.create(nameInputField.value, valueInMins * 60 * 1000, timerFactoryCallbacks);
}

this.updateText = function(text) {
    messageText.innerText = text;
}

this.formatTimer = function(timerSpan) {
    timerSpan.style.display = 'block';
}
