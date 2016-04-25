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

export default angular.module(name,[
    angularMeteor,
    PartiesList,
    uiRouter,
    navigation,
    partyDetails
    ]).component(name,{
        templateUrl: `imports/ui/components/${name}/${name}.html`,
        controllerAs:name,
        controller:Socially
    }).config(config);