import dayjs from 'dayjs';

export const dateFormatMonth = 'MMMM YYYY';
export const dateFormatDay = 'DD MMMM YYYY';

type DateFormat = 'day' | 'month';

const isCurrentMonth = (date: string) => {
  const currentMonth = dayjs().format(dateFormatMonth);

  return dayjs(date).format(dateFormatMonth) === currentMonth;
};

export const formatDate = (date: string, format: DateFormat) => {
  return format === 'day' ? dayjs(date).format(dateFormatDay) : dayjs(date).format(dateFormatMonth);
};

export const displayCurrentIfCurrentDate = (date: string, format: DateFormat) => {
  if (format === 'day') {
    return isCurrentMonth(date) ? 'current' : dayjs(date).format(dateFormatDay);
  }

  return isCurrentMonth(date) ? 'current' : dayjs(date).format(dateFormatMonth);
};
