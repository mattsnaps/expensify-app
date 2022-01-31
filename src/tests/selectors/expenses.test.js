import getVisibleExpenses from "../../selectors/expenses";
import moment from "moment";
import expenses from "../fixtures/expenses";

test('getVisibleExpenses Filter by text value Success', () => {
    const filters = {
        text: 'Card',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    };
    const result = getVisibleExpenses(expenses, filters);
    expect(result).toEqual([ expenses[2], expenses[1] ]);
});

test ('getVisibleExpenses Filter by start date Success', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: moment(0),
        endDate: undefined
    };
    const result = getVisibleExpenses(expenses, filters);
    expect(result).toEqual([expenses[2], expenses[0]]);
});

test ('getVisibleExpenses Filter by end date Success', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: moment(0)
    };
    const result = getVisibleExpenses(expenses, filters);
    expect(result).toEqual([expenses[0], expenses[1]]);
});

test ('sortByDate Filter by date Success', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    };
    const result = getVisibleExpenses(expenses, filters);
    expect(result).toEqual([expenses[2], expenses[0], expenses[1]]);
});

test ('sortByAmount Filter by amount Success', () => {
    const filters = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    };
    const result = getVisibleExpenses(expenses, filters);
    expect(result).toEqual([expenses[2], expenses[1], expenses[0]]);
});