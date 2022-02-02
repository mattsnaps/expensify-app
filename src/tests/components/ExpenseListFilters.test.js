import React from "react";
import { shallow } from "enzyme";
import { ExpenseListFilters } from "../../components/ExpenseListFilters";
import { filters, filtersTwo } from "../fixtures/filters";
import moment from "moment";

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
    setTextFilter = jest.fn();
    sortByDate = jest.fn();
    sortByAmount = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    wrapper = shallow(
        <ExpenseListFilters
            filters={filters}
            setTextFilter={setTextFilter}
            sortByDate={sortByDate}
            sortByAmount={sortByAmount}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
        />
    )
});

test('ExpenseListFilter render Success', () => {
    expect(wrapper).toMatchSnapshot();
});


test('ExpenseListFilter render with alternative data Success', () => {
    wrapper.setProps({filters : filtersTwo})
    expect(wrapper).toMatchSnapshot();
});

test('ExpenseListFilter change text Filter Success', () => {
    const value = 'rent'
    wrapper.find('input').at(0).simulate('change', {
        target: { value }
    })
    expect(setTextFilter).toHaveBeenLastCalledWith(value);
});

test('ExpenseListFilter change date Filter Success', () => {
    const value = 'date';
    wrapper.setProps({filters: filtersTwo});
    wrapper.find('select').at(0).simulate('change', {
        target: { value }
    });
    expect(sortByDate).toHaveBeenCalled();
});

test('ExpenseListFilter change amount Filter Success', () => {
    const value = 'amount';
    wrapper.setProps({filters: filters});
    wrapper.find('select').at(0).simulate('change', {
        target: { value }
    });
    expect(sortByAmount).toHaveBeenCalled();
});

test('ExpenseListFilter Date change Success', () => {
    const startDate = moment(0).add(4, 'years');
    const endDate = moment(0).add(8, 'years');
    wrapper.find('DateRangePicker').prop('onDatesChange')({ startDate, endDate });
    expect(setStartDate).toHaveBeenLastCalledWith(startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});

test('ExpenseListFilter Focus Change Success', () => {
    const calendarFocused = 'endDate';
    wrapper.find('DateRangePicker').prop('onFocusChange')(calendarFocused);
    expect(wrapper.state('calendarFocused')).toBe(calendarFocused);
});






