import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import'./socially.html';
import{ name as PartiesList} from '../partiesList/partiesList';
import{ name as navigation} from '../navigation/navigation';
import{ name as partyDetails} from '../partyDetails/partyDetails';

class Socially{}

const name = 'socially';

function config($locationProvider,$urlRouterProvider){
    'ngInject';
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/parties')
}

function run($rootScope,$state){
    'ngInject';
    $rootScope.$on('$stateChangeError',
    (event,toState,toParams,fromState,fromParams,error)=>{
        if(error === 'AUTH_REQUIRED'){
            $state.go('parties');
        }
    })
}

export default angular.module(name,[
    angularMeteor,
    PartiesList,
    uiRouter,
    navigation,
    partyDetails,
    'accounts.ui'
    ]).component(name,{
        templateUrl: `imports/ui/components/${name}/${name}.html`,
        controllerAs:name,
        controller:Socially
    }).config(config).run(run);