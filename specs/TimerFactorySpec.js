describe('Validating a timer', function(){

  var succeeded = false;
  var failedMessage = null;
  var callbacks = new TimerFactoryCallback(function(timer) {
    succeeded = true;
  }, function(message) {
    failedMessage = message;
  });

  beforeEach(function() {
    succeeded = false;
    failedMessage = null;
  })

  it('should pass if there is a name supplied', function(){
    var factory = new TimerFactory();

    factory.create('null', callbacks);
    expect(succeeded).toBe(true);
  });

  it('should fail if there is no name supplied', function(){
    var factory = new TimerFactory();

    factory.create(null, callbacks);
    expect(succeeded).toBe(false);
    expect(failedMessage).toBe('No name supplied');
  });

});
