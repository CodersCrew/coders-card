import dayjs from 'dayjs';

const dateFormatMonth = 'MMMM YYYY';
const dateFormatDay = 'DD MMMM YYYY';

type DateFormat = 'day' | 'month';

const isCurrentMonth = (date: string) => {
  const currentMonth = dayjs().format(dateFormatMonth);

  return dayjs(date).format(dateFormatMonth) === currentMonth;
};

const displayCurrentIfCurrentDate = (date: string, dateFormat: string) => {
  return isCurrentMonth(date) ? 'current' : dayjs(date).format(dateFormat);
};

export const formatDate = (date: string, format: DateFormat, withCurrent = false) => {
  if (format === 'day') {
    return withCurrent ? displayCurrentIfCurrentDate(date, dateFormatDay) : dayjs(date).format(dateFormatDay);
  }

  return withCurrent ? displayCurrentIfCurrentDate(date, dateFormatMonth) : dayjs(date).format(dateFormatMonth);
};
