(function(angular) {
  'use strict';
angular.module('myApp').component('navbarComp', {
  templateUrl: 'navbarComp/navbarComp.html',
  bindings: {
    userId: '=',
    userPrivel: '='
  }
});
})(window.angular);

/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/