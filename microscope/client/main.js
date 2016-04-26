import angular from 'angular';
import angularMeteor from 'angular-meteor';
import {Meteor} from 'meteor/meteor';


import { name as Socially } from '../imports/ui/components/socially/socially';
import { name as votepage } from '../imports/ui/project/votepage/votepage';

//手动启动
function onReady(){
    angular.bootstrap(document,[
        votepage
        //Socially
    ],{
        strictDi:true
    })
}



if(Meteor.isCordova){
    angular.element(document).on('deviceready',onReady);
}else{
    angular.element(document).ready(onReady);
}