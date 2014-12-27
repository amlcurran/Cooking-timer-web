describe('Validating a timer', function(){

  var succeeded = false;
  var failedMessage = null;
  var callbacks = new TimerFactoryCallbacks(function(timer) {
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

    factory.create('null', 0, callbacks);
    expect(succeeded).toBe(true);
  });

  it('should fail if there is no name supplied', function(){
    var factory = new TimerFactory();

    factory.create(null, 0, callbacks);
    expect(succeeded).toBe(false);
    expect(failedMessage).toBe('No name supplied');
  });

  it('should fail if there is an empty name supplied', function(){
    var factory = new TimerFactory();

    factory.create('', 0, callbacks);
    expect(succeeded).toBe(false);
    expect(failedMessage).toBe('No name supplied');
  });

  it('should fail if there is a negative time supplied', function(){
      var factory = new TimerFactory();

      factory.create('name', -100, callbacks);
      expect(succeeded).toBe(false);
      expect(failedMessage).toBe('Time cannot be negative');
  });

  it('should fail if there is no time supplied', function(){
      var factory = new TimerFactory();

      factory.create('name', null, callbacks);
      expect(succeeded).toBe(false);
      expect(failedMessage).toBe('Time cannot be empty');
  });

  it('should fail if there an empty time is supplied', function(){
      var factory = new TimerFactory();

      factory.create('name', '', callbacks);
      expect(succeeded).toBe(false);
      expect(failedMessage).toBe('Time cannot be empty');
  });

});
