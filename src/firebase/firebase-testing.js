import {
    getDatabase,
    ref,
    remove,
    set,
    update,
    get,
    child,
    onValue,
    off,
    DataSnapshot,
    push,
    onChildRemoved,
    onChildChanged,
    onChildAdded
} from "firebase/database";

import appFirebaseDatabase from "./firebase";
import expenses from "../tests/fixtures/expenses";

// const database = getDatabase(appFirebaseDatabase);
// const databaseRef = ref(database, '/expenses');

// onChildRemoved(databaseRef, (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });
//
// onChildChanged(databaseRef, (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });
//
// onChildAdded(databaseRef, (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

//push(databaseRef, expenses[0]);
// push(databaseRef, expenses[1]);
// push(databaseRef, expenses[2]);
// push(databaseRef, {
//     amount: 1233,
//     createdAt: 11313131,
//     description: 'Debit Bet Card',
//     note: ''
// });


// onValue(databaseRef, (snapshot) => {
//     if(snapshot.exists()) {
//         const expenses = [];
//         snapshot.forEach((childExpense) => {
//             expenses.push({
//                 id: childExpense.key,
//                 ...childExpense.val()
//             });
//         });
//         console.log(expenses);
//     } else {
//         console.log('No Data Available');
//     }
// });


// get(child(ref(database), 'expenses/')).then((snapshot) => {
//     if(snapshot.exists()) {
//         const expenses = [];
//         snapshot.forEach((childExpense) => {
//             expenses.push({
//                 id: childExpense.key,
//                 ...childExpense.val()
//             });
//         });
//         console.log(expenses);
//     } else {
//         console.log('No Data Available');
//     }
// }).catch((error) => {
//     console.log('Error Error', error);
// });


// update(ref(database, 'notes/-Mv5h0ZZS49a5NJhFFS7'), {
//          title: 'Keyboard typer',
//          body: 'The Any Company'
// });

// push(ref(database, 'notes'), {
//     title: 'Give me some of that Tech',
//     body: 'Tech be good now, yeah'
// });
//
// set(ref(database, 'expenses'), null);

// get(child(ref(database), 'location/')).then((snapshot) => {
//     if(snapshot.exists()) {
//         console.log(snapshot.val());
//     } else {
//         console.log('No Data Available');
//     }
// }).catch((error) => {
//     console.log('Error Error', error);
// });

// onValue(databaseRef, (snapshot) => {
//     const data = snapshot.val();
//     console.log(`${data.name} works as ${data.job.title} at ${data.job.company}.`);
// });
//
// setTimeout(() => {
//     update(ref(database, '/'), {
//         'job/title': 'Keyboard typer',
//         'job/company': 'The Any Company'
//     });
// }, 3500);

// set(ref(database), {
//     name: 'Matthew Priebe',
//     age: 31,
//     job: {
//         title: 'Software',
//         company: 'Any Company'
//     },
//     stressLevel: 5,
//     isSingle: false,
//     location: {
//         city: 'Monroe',
//         country: 'USA'
//     }
// }).then(() => {
//     console.log('Data is saved');
// }).catch((error) => {
//     console.log('This failed, you idiot', error);
// });

// set(ref(database, 'age'),27);
// set(ref(database, 'location/city'),'Madison');

// set(ref(database, 'attribute'), {
//     height: '6\'1',
//     weight: 210
// }).then(() => {
//     console.log('Attributes Saved');
// }).catch((error) => {
//     console.log('Error Error', error);
// });

// remove(ref(database, 'isSingle')).then(() => {
//     console.log('Success Removal');
// }).catch((error) => {
//     console.log('Error Bear', error);
// }) ;
//
// set(ref(database, 'isSingle'), {
//     isSingle: null
// });

