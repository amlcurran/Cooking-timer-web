function TimerList() {

  this.timers = [];

  this.addTimer = function(name) {
    this.timers[this.timers.length] = name;
  }

  this.getTimerName = function(index) {
    return this.timers[index].name;
  }

  this.removeTimer = function(name) {
    var index = this.findIndexByName(name);
    this.timers.splice(index, 1);
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

}
