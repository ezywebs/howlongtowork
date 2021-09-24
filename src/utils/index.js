import { HOURS_IN_DAY, HOURS_IN_WEEK, HOURS_IN_MONTH, HOURS_IN_YEAR, ONE_MILLION } from './../constants';

export const calculatePeriods = (income, netWorth) => {
  netWorth *= ONE_MILLION;
  const timeFrames = [HOURS_IN_YEAR, HOURS_IN_MONTH, HOURS_IN_WEEK, HOURS_IN_DAY];
  const periods = [];
  let hours = netWorth / income;
  let i = 0;

  if (income <= 0) return [<>&#8734;</>];

  while (hours > 0) {
    periods.push(parseInt(hours / timeFrames[i]));
    hours %= timeFrames[i++];
  }
  return periods;
}

export const boolFromNum = num => Boolean(parseInt(num))

export const isEmptyObj = obj => obj && Object.keys(obj).length === 0 && obj.constructor === Object

// this function was borrowed from SO https://stackoverflow.com/a/2901298/9070617
export const styleNumberByThousands = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")