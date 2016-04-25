import angular from 'angular';
import angularMeteor from 'angular-meteor';
import { Parties } from '../../../api/parties';

import './partyRemove.html'

class partyRemove{
    remove(){
        if(this.party){
            Parties.remove(this.party._id);
        }
        console.log('remove party');
    }
}

const name = 'partyRemove';

export default angular.module(name,[
    angularMeteor
    ])
    .component(name,{
        templateUrl: `imports/ui/components/${name}/${name}.html`,
        bindings:{
            party:'<'
        },
        controllerAs:name,
        controller:partyRemove
});