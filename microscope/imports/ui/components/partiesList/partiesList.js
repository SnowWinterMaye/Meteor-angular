import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import {Parties} from '../../../api/parties';
import{ name as partyAdd} from '../partyAdd/partyAdd';
import{ name as partyRemove} from '../partyRemove/partyRemove';

import './partiesList.html'

class PartiesList{
    constructor($scope,$reactive){
            'ngInject';
            $reactive(this).attach($scope);
            
            this.helpers({
                parties(){
                    return Parties.find({});
                }
            });
    }
}

const name = 'partiesList';

function config($stateProvider){
    'ngInject';
    $stateProvider.state('parties',{
        url:'/parties',
        template:'<parties-list></parties-list>'
    });
}

export default angular.module(name,[
    angularMeteor,
    partyAdd,
    partyRemove,
    uiRouter
    ])
    .component(name,{
        templateUrl: `imports/ui/components/${name}/${name}.html`,
        controllerAs:name,
        controller:PartiesList
}).config(config);