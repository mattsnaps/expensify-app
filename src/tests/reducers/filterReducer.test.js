import moment from "moment";
import filtersReducer from "../../reducers/filtersReducer";

test('filterReducer setup default filter values Success', () => {
    //@@INIT action dispatched on startup so every reducer returns their initial state.
    const state = filtersReducer(undefined, { type: '@@INIT' })
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('filterReducer set sortBy amount Success', () => {
    const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });
    expect(state.sortBy).toBe('amount');
});

test('filterReducer set sortBy date Success', () => {
    const currentState = {
        text: '',
        starDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    };
    const action = { type: 'SORT_BY_DATE' };
    const state = filtersReducer(currentState, action);
    expect(state.sortBy).toBe('date');
});

test('filterReducer set text filter Success', () => {
    const text = 'It should be this';
    const currentState = {
        text: 'This is only a test',
        startDate: undefined,
        endDate: undefined,
        sortBy: undefined
    };
    const action = {
        type: 'SET_TEXT_FILTER',
        text: text
    };
    const state = filtersReducer(currentState, action)
    expect(state.text).toEqual(text);
});

test('filterReducer set startDate filter Success', () => {
    const currentState = {
        text: undefined,
        startDate: moment(0),
        endDate: undefined,
        sortBy: undefined
    };
    const action = {
        type: 'SET_START_DATE',
        startDate: moment(5000)
    };
    const state = filtersReducer(currentState, action);
    expect(state.startDate).toEqual(moment(5000));
});

test('filterReducer set endDate filter Success', () => {
    const currentState = {
        text: undefined,
        startDate: undefined,
        endDate: moment(0),
        sortBy: undefined
    };
    const action = {
        type: 'SET_END_DATE',
        endDate: moment(1010101)
    };
    const state = filtersReducer(currentState, action);
    expect(state.endDate).toEqual(moment(1010101));
});

