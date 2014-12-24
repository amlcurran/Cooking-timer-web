function TimerFactory() {

  this.create = function(name, callbacks) {
      callbacks.success(new Timer('blergh'));
  }

}

function TimerFactoryCallback(successFunction, failureFunction) {

  this.success = successFunction;
  this.failure = failureFunction;

}
