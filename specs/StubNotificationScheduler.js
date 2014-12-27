function StubNotificationScheduler() {

    this.schedule = function(timer) {
        scheduledTimerName = timer.name;
    }

    return this;

}
