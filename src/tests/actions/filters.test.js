import moment from "moment";
import { setTextFilter, setEndDate, setStartDate, sortByAmount, sortByDate} from "../../actions/filters";

test('setStartDate Action Object Success', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    });
});

test('setEndDate Action Object Success', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    });
});

test('sortByAmount Action Object Success', () => {
    const action = sortByAmount();
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT'
    });
});

test('sortByDate Action Object Success', () => {
    const action = sortByDate();
    expect(action).toEqual({
        type: 'SORT_BY_DATE'
    });
});

test('setTextFilter Action Object Provided Values Success', () => {
    const text = 'Bill';
    const action = setTextFilter(text);
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: text
    });
});

test('setTextFilter Action Object Default Values Success', () => {
   const action = setTextFilter();
   expect(action).toEqual({
       type: 'SET_TEXT_FILTER',
       text: ''
   });
});