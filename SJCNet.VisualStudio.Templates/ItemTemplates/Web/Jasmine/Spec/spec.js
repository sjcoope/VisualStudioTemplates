/// <reference path="../../../../scripts/jasmine.js" />
/// <reference path="../../../../scripts/sinon-1.7.3.js" />

(function () {

    describe('$safeitemname$', function () {

        var testContext = {
            $controller: null,
            appId: 'app',
            controllerId: 'TODO',
            stubs: [],
            mocks: [],
            spies: []
        };

        beforeEach(function () {
            module(testContext.appId);

            inject(function ($controller) {
                testContext.$controller = $controller;

                // Setup stubs, mocks and spies here and add to the testContext for restoration after the test.
            });
        });

        afterEach(function () {
            // Restore any stubs
            angular.forEach(testContext.stubs,
                function (stub) {
                    stub.restore();
                }
            );
        });

        it('Spec', inject(function ($rootScope, common, dataContext) {
            // Arrange

            // Act
            var controller = testContext.$controller(testContext.controllerId, { common: common, dataContext: dataContext });
            $rootScope.$apply(); // Needed to force async promises to resolve.

            // Assert
            expect(controller.levels).not.toBeNull();
            expect(controller.levels).toBe(levels);
        }))

    });

})();