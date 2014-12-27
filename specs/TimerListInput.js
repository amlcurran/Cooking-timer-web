describe('Inputting data into timerlist', function(){

  it('should take the inputted name', function(){
    var list = new TimerList();
    list.addTimer(new Timer('Turkey', 0));
    expect(list.getTimerName(0)).toBe('Turkey');
  });

  it('should take the inputted name pt 2', function(){
    var list = new TimerList();
    list.addTimer(new Timer('Beef', 0));
    expect(list.getTimerName(0)).toBe('Beef');
  });

  it('should not overwrite previous items', function(){
    var list = new TimerList();
    list.addTimer(new Timer('Beef', 0));
    list.addTimer(new Timer('Grapes', 0));
    expect(list.getTimerName(0)).toBe('Beef');
  });

  it('should be able to delete an item', function(){
    var list = new TimerList();
    list.addTimer(new Timer('Beef', 0));
    list.addTimer(new Timer('Grapes', 0));
    list.removeTimer('Beef');
    expect(list.getTimerName(0)).toBe('Grapes');
  });
});
