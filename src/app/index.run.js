(function () {
  'use strict';

  angular
    .module('vneto')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
