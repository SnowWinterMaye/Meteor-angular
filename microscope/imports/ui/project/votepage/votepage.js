import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import'./votepage.html';

class Votepage{}

const name = 'votepage';

function config($locationProvider,$urlRouterProvider){
    'ngInject';
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/votepage')
}

function run($rootScope,$state){
    'ngInject';
    $rootScope.$on('$stateChangeError',
    (event,toState,toParams,fromState,fromParams,error)=>{
        if(error === 'AUTH_REQUIRED'){
            $state.go('votepage');
        }
    })
}

export default angular.module(name,[
    angularMeteor,
    uiRouter,
    'accounts.ui'
    ]).component(name,{
        templateUrl: `imports/ui/project/${name}/${name}.html`,
        controllerAs:name,
        controller:Votepage
    }).config(config).run(run);