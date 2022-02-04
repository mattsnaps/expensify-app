import {getDatabase, ref, remove, set, update} from "firebase/database";
import appFirebaseDatabase from "./firebase";

const database = getDatabase(appFirebaseDatabase);

set(ref(database), {
    name: 'Matthew Priebe',
    age: 31,
    job: {
        title: 'Software',
        company: 'Any Company'
    },
    stressLevel: 5,
    isSingle: false,
    location: {
        city: 'Monroe',
        country: 'USA'
    }
}).then(() => {
    console.log('Data is saved');
}).catch((error) => {
    console.log('This failed, you idiot', error);
});

// set(ref(database, 'age'),27);
// set(ref(database, 'location/city'),'Madison');

set(ref(database, 'attribute'), {
    height: '6\'1',
    weight: 210
}).then(() => {
    console.log('Attributes Saved');
}).catch((error) => {
    console.log('Error Error', error);
});

// remove(ref(database, 'isSingle')).then(() => {
//     console.log('Success Removal');
// }).catch((error) => {
//     console.log('Error Bear', error);
// }) ;
//
// set(ref(database, 'isSingle'), {
//     isSingle: null
// });

update(ref(database), {
    'job/company': 'Burrito Company',
    stressLevel: 9,
    'location/city': 'St. Paul'
});