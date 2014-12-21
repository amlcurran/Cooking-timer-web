function TimerList() {

  this.timers = [];

  this.addTimer = function(name) {
    this.timers[this.timers.length] = name;
  }

  this.getTimerName = function(index) {
    return this.timers[index];
  }

}
