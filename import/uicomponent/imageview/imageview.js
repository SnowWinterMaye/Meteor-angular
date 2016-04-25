import angular from 'angular';
import angularMeteor from 'angular-meteor';

import './imageview.html';

class ImageView {
    constructor($scope){
        this.hello = "Image View"
    }
}

const name = 'imageview';

export default angular.module(name,[
    angularMeteor
]).component(name,{
    templateUrl:'import/uicomponent/${name}/${name}.html',
    controllerAs:name,
    controller:ImageView
});