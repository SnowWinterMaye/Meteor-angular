import angular from 'angular';
import angularMeteor from 'angular-meteor';
import {Parties} from '../../../api/parties';

import './partyAdd.html'

class partyAdd{
    constructor(){
        this.party = {};
    }
    
    submit(){
        console.log('submit',this.party);
        Parties.insert(this.party);
        this.reset();
    }
    reset(){
        this.party = {};
    }
}

const name = 'partyAdd';

export default angular.module(name,[
    angularMeteor
    ])
    .component(name,{
        templateUrl: `imports/ui/components/${name}/${name}.html`,
        controllerAs:name,
        controller:partyAdd
});