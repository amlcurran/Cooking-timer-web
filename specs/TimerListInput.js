describe('Inputting data into timerlist', function(){

  it('should take the inputted name', function(){
    var list = new TimerList();
    list.addTimer(new Timer('Turkey'));
    expect(list.getTimerName(0)).toBe('Turkey');
  });

  it('should take the inputted name pt 2', function(){
    var list = new TimerList();
    list.addTimer(new Timer('Beef'));
    expect(list.getTimerName(0)).toBe('Beef');
  });

  it('should not overwrite previous items', function(){
    var list = new TimerList();
    list.addTimer(new Timer('Beef'));
    list.addTimer(new Timer('Grapes'));
    expect(list.getTimerName(0)).toBe('Beef');
  });

  it('should be able to delete an item', function(){
    var list = new TimerList();
    list.addTimer(new Timer('Beef'));
    list.addTimer(new Timer('Grapes'));
    list.removeTimer('Beef');
    expect(list.getTimerName(0)).toBe('Grapes');
  });
});
