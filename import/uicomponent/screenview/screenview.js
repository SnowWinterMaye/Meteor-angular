import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import "./screenview.html";
import {name as ImgView} from '../imageview/imageview';

class ScreenView {}

const name = 'screenview';

export default angular.module(name,[
    angularMeteor,
    uiRouter,
    ImgView
]).component(name,{
    templateUrl:'import/uicomponent/${name}/${name}.html',
    controllerAs:name,
    controller:ScreenView
});

