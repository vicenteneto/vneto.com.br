(function () {
  'use strict';

  angular
    .module('vneto')
    .controller('HomeController', HomeController);

  /* @ngInject */
  function HomeController(webDevTec) {

    var vm = this;

    vm.awesomeThings = [];

    getWebDevTec();

    function getWebDevTec() {
      vm.awesomeThings = webDevTec.getTec();

      angular.forEach(vm.awesomeThings, function (awesomeThing) {
        awesomeThing.rank = Math.random();
      });
    }
  }
})();
