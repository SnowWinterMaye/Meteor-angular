import {Meteor} from 'meteor/meteor';
import {Parties} from '../api/index';

Meteor.startup(() => {
    if (Parties.find().count() === 0) {      
        parties.forEach((party)=>{
            Parties.insert(party)
        });
    }
});