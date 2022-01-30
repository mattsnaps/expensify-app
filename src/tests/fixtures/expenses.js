import moment from "moment";

export default [{
    id: '1',
    description: 'Market',
    note: '',
    amount: 195,
    createdAt: 0
}, {
    id: '2',
    description: 'Rent',
    note: '',
    amount: 1095,
    createdAt: moment(0).subtract(4, 'day').valueOf()
}, {
    id: '3',
    description: 'Credit Card',
    note: '',
    amount: 4050,
    createdAt: moment(0).add(4, 'day').valueOf()
}];