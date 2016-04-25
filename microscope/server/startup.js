import {Meteor} from 'meteor/meteor';
import {Parties} from '../imports/api/parties';

Meteor.startup(() => {
    if (Parties.find().count() === 0) {      
        parties.forEach((party)=>{
            Parties.insert(party)
        });
    }
});