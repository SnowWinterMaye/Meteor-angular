import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import {Parties} from '../../../api/index';
import {Meteor} from 'meteor/meteor';

import './partyDetails.html'

const name = 'partyDetails';

class partyDetails{
    constructor($stateParams,$scope,$reactive){
        'ngInject';
        $reactive(this).attach($scope);
        
        this.partyId = $stateParams.partyId;
        
        this.helpers({
            party(){
                return Parties.findOne({
                    _id:$stateParams.partyId
                });
            }
        });
    }
    save(){
        Parties.update({
            _id:this.party._id
            },{
                $set:{
                name:this.party.name,
                description:this.party.description
            }
        });
    }
}



function config($stateProvider){
    'ngInject';
    $stateProvider.state('partyDetails',{
        url:'/parties/:partyId',
        template:'<party-details></party-details>',
        resolve:{
            currentUser($q){
                if(Meteor.userId()===null){
                    return $q.reject('AUTH_REQUIRED');
                }else{
                    return $q.resolve();
                }
            }
        }
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