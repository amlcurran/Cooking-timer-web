describe('Validating a timer', function(){

  var succeeded = false;
  var failed = false;
  var callbacks = new TimerFactoryCallback(function(timer) {
    succeeded = true;
  }, function() {
    failed = false;
  });

  it('should pass if there is a name supplied', function(){
    var factory = new TimerFactory();

    factory.create('null', callbacks);
    expect(succeeded).toBe(true);
  });

});
