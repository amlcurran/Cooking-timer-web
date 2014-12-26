describe('callbacks from timerlist', function(){

    var emptyCalled = false;
    var addedTimer = null;
    var emptyCallback = function() {
        emptyCalled = true;
    };
    var addedCallback = function(timer) {
        addedTimer = timer.name;
    }
    var callback = new TimerListCallback(emptyCallback, addedCallback);

    beforeEach(function() {
        emptyCalled = false;
        addedTimer = null;
    });

    it('should callback empty on first attach', function() {
        var list = new TimerList();

        list.addCallback(callback);
        expect(emptyCalled).toBe(true);
    });

    it('should callback an addition when something is added', function() {
        var list = new TimerList();

        list.addCallback(callback);
        list.addTimer(new Timer('cornflakes'));

        expect(addedTimer).toBe('cornflakes');
    });

});
