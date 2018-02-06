(function () {
    'use strict';

    angular
        .module('selectOneAndOnlyOnea', [])
        .directive('selectOneAndOnlyOne', selectOneAndOnlyOne);

    selectOneAndOnlyOne.$inject = [];

    function selectOneAndOnlyOne() {
        var directive = {
            link: link,
            restrict: 'A',
            require: "ngModel"
        };
        return directive;

        function link(scope, element, attrs, ctrl) {
            var attribute = attrs.selectAttribute || 'Selected';
            var watch = scope.$watch(attrs.selectOneAndOnlyOne, function (value) {
                var count = 0;
                for (var i = 0; i < value.length; i++) {
                    if (value[i][attribute]) {
                        count++;
                    }
                }
                ctrl.$setValidity('selectOneAndOnlyOne', count === 1);
            }, true);

            scope.$on('$destroy', function () {
                watch();
            });
        }
    }

})();