function NotificationScheduler(notifier, callbacks) {

    this.notifier = notifier;
    this.callbacks = callbacks;
    this.timeoutHandles = {};

    this.schedule = function(timer) {
        var handle = window.setTimeout(function() {
            notifier.notify(timer);
            callbacks.firedTimerCallback(timer);
        }, timer.time);
        this.timeoutHandles[timer.name] = handle;
    }

    this.unschedule = function(timer) {
        window.clearTimeout(this.timeoutHandles[timer.name]);
        this.timeoutHandles[timer.name] = null;
    }

    return this;

}

function NotificationSchedulerCallbacks(firedTimerCallback) {

    this.firedTimerCallback = firedTimerCallback;

}
