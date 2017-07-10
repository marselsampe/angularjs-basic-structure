var myApp = angular.module( "MyApplication", [] );

myApp.factory( 'serviceClientManager', ['$http', serviceClientManager] );
myApp.factory( 'securityService', ['$q', 'serviceClientManager', securityService] );
myApp.factory( 'module1Service', ['$q', 'serviceClientManager', module1Service] );
myApp.factory( 'module2Service', ['$q', 'serviceClientManager', module2Service] );
myApp.factory( 'module3Service', ['$q', 'serviceClientManager', module3Service] );

myApp.factory( '$exceptionHandler', errorHandler );

myApp.directive( 'dummyDirective', [dummyDirective] );

shellCtrl.$inject = ['$scope', '$rootScope'];
mainCtrl.$inject = ['$scope', '$rootScope'];
menuCtrl.$inject = ['$scope', '$rootScope', '$location'];
loginCtrl.$inject = ['$scope', '$rootScope', 'securityService'];
logoutCtrl.$inject = ['$scope', '$rootScope', 'securityService'];
module1Ctrl.$inject = ['$scope', '$rootScope', 'module1Service'];
module2Ctrl.$inject = ['$scope', '$rootScope', 'module2Service'];
module3Ctrl.$inject = ['$scope', '$rootScope', 'module3Service'];

myApp.controller( 'shellCtrl', shellCtrl );
myApp.controller( 'mainCtrl', mainCtrl );
myApp.controller( 'menuCtrl', menuCtrl );
myApp.controller( 'loginCtrl', loginCtrl );
myApp.controller( 'logoutCtrl', logoutCtrl );
myApp.controller( 'module1Ctrl', module1Ctrl );
myApp.controller( 'module2Ctrl', module2Ctrl );
myApp.controller( 'module3Ctrl', module3Ctrl );

myApp.run( ['$rootScope', constant] );