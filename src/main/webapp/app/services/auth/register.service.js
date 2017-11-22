(function () {
    'use strict';

    angular
        .module('samaLadoumApp')
        .factory('Register', Register);

    Register.$inject = ['$resource'];

    function Register ($resource) {
        return $resource('api/register', {}, {});
    }
})();
