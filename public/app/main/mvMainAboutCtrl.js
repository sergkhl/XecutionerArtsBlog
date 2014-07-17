angular.module('app').controller('mvMainAboutCtrl', function ($scope, $interval) {
    var stop = $interval(function () {
        color_cycle();
    }, 3000);

    var color_cycle = function () {
        try {
            var e = document.getElementById("aboutMeIntro").getElementsByTagName("span");
            var bg = document.getElementById("aboutMeIntro");
            for (var n = e.length - 1; n >= 0; n--) {
                e[n].style.color = Please.make_color({saturation: .7, value: .7});
            }
            bg.style.backgroundColor = Please.make_color({saturation: .4, value: .4});
        } catch (error) {
//            console.log(error);
            if (angular.isDefined(stop)) {
                $interval.cancel(stop);
                stop = undefined;
            }
        }

    };
    color_cycle();


    //$scope.courses = mvCachedCourses.query();
});