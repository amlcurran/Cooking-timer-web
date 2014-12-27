// TODO How the heck would you test this?
var addTimerButton = document.querySelector('#addTimer');
var nameInputField = document.querySelector('#nameField');
var messageText = document.querySelector('#message');
var noTimerLabel = document.querySelector('#noTimersLabel');
var timerListView = document.querySelector('#timerListView');
var timeInputField = document.querySelector('#timeField');

var timerFactory = new TimerFactory();
var notifier = new NotificationNotifier();
var timerList;
var scheduler = new NotificationScheduler(notifier, new NotificationSchedulerCallbacks(function(timer) {
    timerList.removeTimer(timer.name);
}));
timerList = new TimerList(scheduler);

window.addEventListener('load', function () {
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
    newTimerSpan.id = 'timerSpan' + addedTimer.name;
    newTimerSpan.onclick = function() {
        timerList.removeTimer(addedTimer.name);
    };
    newTimerSpan.appendChild(newTimerText);
    timerListView.appendChild(newTimerSpan);
}, function(removedTimer) {
    noTimerLabel.style.display = 'none';
    var span = timerListView.querySelector('#timerSpan' + removedTimer.name);
    span.remove();
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
