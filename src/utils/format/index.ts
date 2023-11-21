import dayjs from 'dayjs';

export const formatDate = (date: Date, format = 'DD/MM/YYYY') => {
  if (!date) {
    date = new Date();
  }
  return dayjs(date).format(format);
};

export const currencyFormat = (num: number) => {
  return num?.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') + 'đ';
};

export const numberFormat = (num: number) => {
  return num?.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
};

export const slugifyFormat = (...args: (string | number)[]): string => {
  const value = args.join(' ');

  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9 ]/g, '')
    .replace(/\s+/g, '-');
};
