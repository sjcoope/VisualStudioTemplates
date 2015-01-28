(function () {
    'use strict';

    var controllerId = '$safeitemname$';
    angular.module('app').controller(controllerId, [
        '$scope',
        function ($scope) {

            //#region ViewModel Definition

            var vm = this;
            vm.title  = '$safeitemname$';

            //#endregion

            //#region Controller Activation

            activate();

            function activate() {
                // Add activation code here.
            }

            //#endregion

            //#region Internal Members

            //#endregion

            //#region Exposed Members

            //#endregion
        }
    ]);
})();