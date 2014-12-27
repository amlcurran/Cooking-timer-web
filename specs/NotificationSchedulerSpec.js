// describe('Scheduling notifications', function(){
//
//     var notifiedName = null;
//     var notifier = function() {
//
//         this.notify = function(timer) {
//             notifiedName = timer.name;
//         }
//
//         return this;
//
//     }();
//
//     it('should schedule a timeout', function(){
//         jasmine.Clock.useMock();
//         var scheduler = new NotificationScheduler(notifier);
//
//         scheduler.schedule(new Timer('Turkey', 100));
//         jasmine.Clock.tick(104);
//
//         expect(notifiedName).toBe('Turkey');
//     });
//
//     it('should schedule a timeout fairly accurately', function(){
//         jasmine.clock().install();
//         var scheduler = new NotificationScheduler(notifier);
//
//         scheduler.schedule(new Timer('Turkey', 100));
//         jasmine.clock().tick(98);
//         expect(notifiedName).toBe(null);
//
//         jasmine.clock().tick(4);
//         expect(notifiedName).toBe('Turkey');
//
//     });
//
// });
