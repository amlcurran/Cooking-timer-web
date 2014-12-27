function NotificationNotifier() {

    this.notify = function(timer) {
        window.setTimeout(function() {
            console.log('timer ticked! ' + timer.name);
        }, timer.time);
    }

    this.ensureNotification = function() {
        if (window.Notification && Notification.permission !== "granted") {
            Notification.requestPermission(function (status) {
                if (Notification.permission !== status) {
                    Notification.permission = status;
                }
            });
            console.log('Notification permission: ' + Notification.permission);
        }
    }

    return this;

}
