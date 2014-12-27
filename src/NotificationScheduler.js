function NotificationScheduler() {

    this.schedule = function(timer) {
        console.log('Scheduled ' + timer.name);
    }

    return this;

}
