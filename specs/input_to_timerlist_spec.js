describe('Inputting data into timerlist', function(){

  it('should take the inputted name', function(){
    var list = new TimerList();
    list.addTimer('Turkey');
    expect(list.getTimerName(0)).toBe('Turkey');
  });

  it('should take the inputted name', function(){
    var list = new TimerList();
    list.addTimer('Beef')
    expect(list.getTimerName(0)).toBe('Beef');
  });

});
