import angular from 'angular';
import angularMeteor from 'angular-meteor';
import {Parties} from '../../../api/parties';

import './navigation.html'

const name = 'navigation';

export default angular.module(name,[
    angularMeteor
    ])
    .component(name,{
        templateUrl: `imports/ui/components/${name}/${name}.html`,
        controllerAs:name
});