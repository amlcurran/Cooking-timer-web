function TimerFactory() {

  this.create = function(name, callbacks) {
    if (name == null || name.length == 0) {
        callbacks.failure('No name supplied');
    } else {
        callbacks.success(new Timer('blergh'));
    }
  }

  return this;

}

function TimerFactoryCallbacks(successFunction, failureFunction) {

  this.success = successFunction;
  this.failure = failureFunction;

  return this;

}
