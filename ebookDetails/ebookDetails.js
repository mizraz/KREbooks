(function (angular) {
  'use strict';
  angular.module('myApp').component('ebookDetails', {
    templateUrl: 'ebookDetails/ebookDetails.html',
    bindings: {
      ebook: '='
    }
  });
})(window.angular);