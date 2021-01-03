import moment from 'moment';
import _truncate from 'lodash/truncate';

export const dateFormatter = (date) => {
  return moment(date).format('LL');
};

export const truncate = (htmlText, length = 200) => {
  return _truncate(htmlText, { length: length });
};
