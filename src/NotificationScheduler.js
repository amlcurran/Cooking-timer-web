function NotificationScheduler(notifier) {

    this.notifier = notifier;

    this.schedule = function(timer) {
        window.setTimeout(function() {
            notifier.notify(timer);
        }, timer.time);
    }

    return this;

}
