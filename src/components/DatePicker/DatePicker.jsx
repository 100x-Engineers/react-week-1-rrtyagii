import React from 'react'
import PropTypes from 'prop-types';

export const MONTHS = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];
  
const DAYS = Array.from({ length: 31 }, (_, index) => index + 1);
const currentYear = new Date().getFullYear();
const startYear = 1930;
const YEARS = Array.from(
{ length: currentYear - startYear + 1 },
(_, index) => startYear + index,
).reverse();

// grid w-full grid-cols-4 gap-3

export default function DatePicker() {
    return (
   <>
    <section className="flex w-full gap-2">
      <fieldset className="flex-grow focus-within:border-twitter-blue-default group rounded border border-neutral-500 p-3">

        <legend className="group-focus-within:text-twitter-blue-default text-xs font-medium text-neutral-500">

          <div className="px-2">Month</div>
        </legend>

        <select
          onChange={(e) => {
            handleInputChange('month', +e.target.value); //++ to convert string to +ve integer
          }}
          placeholder="Month"
          defaultValue={MONTHS.indexOf('January')}
          className="w-full bg-neutral-1000 text-neutral-50 placeholder:text-neutral-500 focus:outline-none"
        >
          {MONTHS.map((m, i) => {
            return (
              <option key={i} value={i}>
                {m}
              </option>
            );
          })}
        </select>

      </fieldset>

      <fieldset className="flex-grow focus-within:border-twitter-blue-default group rounded border border-neutral-500 p-3">
        <legend className="group-focus-within:text-twitter-blue-default text-xs font-medium text-neutral-500">
          <div className="px-1">Day</div>
        </legend>
        <select
          onChange={(e) => {
            handleInputChange('day', +e.target.value);
          }}
          className="w-full bg-neutral-1000 text-neutral-50  placeholder:text-neutral-500 focus:outline-none"
        >
          {DAYS.map((d, i) => {
            return <option key={i}>{d}</option>;
          })}
        </select>
      </fieldset>

      <fieldset className="flex-grow focus-within:border-twitter-blue-default group rounded border border-neutral-500 p-3">
        <legend className="group-focus-within:text-twitter-blue-default text-xs font-medium text-neutral-500">
          <div className="px-1">Year</div>
        </legend>
        <select
          onChange={(e) => {
            handleInputChange('year', +e.target.value);
          }}
          defaultValue={currentYear}
          className="w-full bg-neutral-1000 text-neutral-50 placeholder:text-neutral-500 focus:outline-none"
        >
          {YEARS.map((y, i) => {
            return (
              <option value={y} key={i}>
                {y}
              </option>
            );
          })}
        </select>
      </fieldset>
    </section>
   </>
  );
};

DatePicker.propTypes = {
  handleInputChange: PropTypes.func,
};
