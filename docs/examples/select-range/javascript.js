angular
  .module('mwl.calendar.docs')
  .controller('SelectRangeCtrl', function(moment, calendarConfig) {

    var vm = this;

    vm.events = [];
    vm.calendarView = 'day';
    vm.viewDate = moment().startOf('month').toDate();
    calendarConfig.showTimesOnWeekView = true;

    vm.rangeSelected = function(startDate, endDate) {
      vm.firstDateClicked = startDate;
      vm.lastDateClicked = endDate;
        var start = moment(startDate);
        var end = moment(endDate);
        addCalendarEvent(start, end);
    };

    function addCalendarEvent(start, end) {

        var event = {
            title: '',
            startsAt: start.toDate(),
            endsAt: end.toDate(),
            color: calendarConfig.colorTypes.success,
            resizable: true
        };
        vm.events.forEach(function(each, index) {
            var startDate = moment(each.startsAt);
            if(start.weekday() == startDate.weekday())
            {
                vm.events.splice(index, 1);
            }
        });
        vm.events.push(event);
    }

  });
