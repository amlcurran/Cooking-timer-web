describe('Inputting data into timerlist', function(){

  it('should take the inputted name', function(){
    var list = new TimerList();
    list.addTimer(new Timer('Turkey'));
    expect(list.getTimerName(0)).toBe('Turkey');
  });

  it('should take the inputted name', function(){
    var list = new TimerList();
    list.addTimer(new Timer('Beef'));
    expect(list.getTimerName(0)).toBe('Beef');
  });

});
