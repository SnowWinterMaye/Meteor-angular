import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import {Parties} from '../../../api/parties';

import './partyDetails.html'

const name = 'partyDetails';

class partyDetails{
    constructor($stateParams,$scope,$reactive){
        'ngInject';
        $reactive(this).attach($scope);
        
        this.partyId = $stateParams.partyId;
        
        this.helpers({
            party(){
                return Parties.findone({
                    _id:$stateParams.partyId
                });
            }
        });
    }
}
function config($stateProvider){
    'ngInject';
    $stateProvider.state('partyDetails',{
        url:'/parties/:partyId',
        template:'<party-details></party-details>'
    });
}

export default angular.module(name,[
    angularMeteor,uiRouter
    ])
    .component(name,{
        templateUrl: `imports/ui/components/${name}/${name}.html`,
        controllerAs:name,
        controller:partyDetails
}).config(config);