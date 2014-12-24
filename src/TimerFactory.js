function TimerFactory() {

  this.create = function(name, callbacks) {
    if (name == null) {
        callbacks.failure('No name supplied');
    } else {
        callbacks.success(new Timer('blergh'));
    }
  }

}

function TimerFactoryCallback(successFunction, failureFunction) {

  this.success = successFunction;
  this.failure = failureFunction;

}
