import moment from 'moment';
import {
  setStartDate,
  setEndDate,
  setTextFilter,
  sortByAmount,
  sortByDate
} from '../../actions/filters';

//setStartDate
test('should generate set start date action object', () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate: moment(0)
  });
});

//setEndDate
test('should generate set end date action object', () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate: moment(0)
  });
});

//sortByAmount
test('should generate sort by amount action object', () => {
  expect(sortByAmount()).toEqual({
    type: 'SORT_BY_AMOUNT'
  });
});

//sortByDate
test('should generate sort by date action object', () => {
  expect(sortByDate()).toEqual({
    type: 'SORT_BY_DATE'
  });
});

//setTextFilter
test('should generate set text filter by provided values', () => {
  const text = 'Something in';
  const action = setTextFilter(text);
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text
  });
});

//setTextFilter - default
test('should generate set text filter by default values', () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: ''
  });
});