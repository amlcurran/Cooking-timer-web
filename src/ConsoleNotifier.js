function ConsoleNotifier() {

    this.notify = function(timer) {
        window.setTimeout(function() {
            console.log('timer ticked! ' + timer.name);
        }, timer.time);
    }

}
