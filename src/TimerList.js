function TimerList() {

  this.timers = [];
  this.callbacks = [];

  this.addTimer = function(timer) {
    this.timers[this.timers.length] = timer;
    for (var i = 0; i < this.callbacks.length; i++) {
        this.callbacks[i].timerAdded(timer);
    }
  }

  this.getTimerName = function(index) {
    return this.timers[index].name;
  }

  this.removeTimer = function(name) {
    var index = this.findIndexByName(name);
    var removedTimer = this.timers[index];
    this.timers.splice(index, 1);
    for (var i = 0; i < this.callbacks.length; i++) {
        this.callbacks[i].timerRemoved(removedTimer);
    }
  }

  this.findIndexByName = function(name) {
    var length = this.timers.length;
    for (var i = 0; i < length; i++) {
      if (this.timers[i].name == name) {
        return i;
      }
    }
    return -1;
  }

  this.addCallback = function(callback) {
      callback.listEmpty();
      this.callbacks[this.callbacks.length] = callback;
  }

}

function TimerListCallback(emptyCallback, addedCallback, removedCallback) {

    this.emptyCallback = emptyCallback;
    this.addedCallback = addedCallback;
    this.removedCallback = removedCallback;

    this.listEmpty = function() {
        this.emptyCallback();
    }

    this.timerAdded = function(addedTimer) {
        this.addedCallback(addedTimer);
    }

    this.timerRemoved = function(removedTimer) {
        this.removedCallback(removedTimer);
    }

    return this;

}
