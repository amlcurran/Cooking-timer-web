describe('callbacks from timerlist', function(){

    var emptyCalled = false;
    var addedTimer = null;
    var emptyCallback = function() {
        emptyCalled = true;
    };
    var addedCallback = function(timer) {
        addedTimer = timer.name;
    };
    var removedCallback = function(timer) {
        removedTimer = timer.name;
    }
    var callback = new TimerListCallback(emptyCallback, addedCallback, removedCallback);

    beforeEach(function() {
        emptyCalled = false;
        addedTimer = null;
        removedTimer = null;
    });

    it('should callback empty on first attach', function() {
        var list = new TimerList();

        list.addCallback(callback);
        expect(emptyCalled).toBe(true);
    });

    it('should callback an addition when something is added', function() {
        var list = new TimerList();

        list.addCallback(callback);
        list.addTimer(new Timer('cornflakes', 0));

        expect(addedTimer).toBe('cornflakes');
    });

    it('should callback an removal when something is removed', function() {
        var list = new TimerList();

        list.addCallback(callback);
        list.addTimer(new Timer('cornflakes', 0));
        list.removeTimer('cornflakes');

        expect(removedTimer).toBe('cornflakes');
    });

});
