function TimerFactory() {

  this.create = function(name, time, callbacks) {
    if (name == null || name.length == 0) {
        callbacks.failure('No name supplied');
    } else if (time < 0) {
        callbacks.failure('Time cannot be negative');
    } else {
        callbacks.success(new Timer(name, time));
    }
  }

  return this;

}

function TimerFactoryCallbacks(successFunction, failureFunction) {

  this.success = successFunction;
  this.failure = failureFunction;

  return this;

}
