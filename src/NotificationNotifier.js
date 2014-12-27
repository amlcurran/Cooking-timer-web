function NotificationNotifier() {

    this.notify = function(timer) {
        window.setTimeout(function() {
            new Notification(timer.name + ' is ready!', { 'body' : 'Don\'t forget to take it out the oven!' });
        }, timer.time);
    }

    this.ensureNotification = function() {
        if (window.Notification && Notification.permission !== "granted") {
            Notification.requestPermission(function (status) {
                if (Notification.permission !== status) {
                    Notification.permission = status;
                }
            });
        }
        console.log('Notification permission: ' + Notification.permission);
    }

    return this;

}
