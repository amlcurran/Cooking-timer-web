function NotificationNotifier() {

    this.notifyImmediate = function(timer) {
        if (this.canSendNotifications()) {
            new Notification(timer.name + ' is ready!', { 'body' : 'Don\'t forget to take it out the oven!' });
        } else {
            console.log(timer.name + ' is ready, but notifications are disabled');
        }
    }

    this.notify = function(timer) {
        window.setTimeout(this.notifyImmediate(timer), timer.time);
    }

    this.ensureNotification = function() {
        if (this.canSendNotifications()) {
            Notification.requestPermission(function (status) {
                if (Notification.permission !== status) {
                    Notification.permission = status;
                }
            });
        }
        console.log('Notification permission: ' + Notification.permission);
    }

    this.canSendNotifications = function() {
        return window.Notification && Notification.permission === "granted";
    }

    return this;

}
