describe('Validating a timer', function(){

  it('should pass if there is a name supplied', function(){
    var succeeded = false;
    var failed = false;
    var factory = new TimerFactory();
    var callbacks = new TimerFactoryCallback(function(timer) {
      succeeded = true;
    }, function() {
      failed = false;
    });
    factory.create('null', callbacks);
    expect(succeeded).toBe(true);
  });

});
