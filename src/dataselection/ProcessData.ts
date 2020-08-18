import axios from 'axios';

import parse from 'csv-parse/lib/sync';
import stringify from 'csv-stringify/lib/sync';

import { createAsyncThunk } from '@reduxjs/toolkit';

interface DataRow {
  Datetime: string;
  Ticker: string;
  Open: string;
  High: string;
  Low: string;
  Close: string;
  Volume: string;
}

export const processData = createAsyncThunk(
  'dataSelection/processData',
  async (
    payload: { tickers: string; startDate: string; endDate: string },
    thunkAPI,
  ) => {
    const {
      tickers: tickerStr,
      startDate: startDateStr,
      endDate: endDateStr,
    } = payload;

    const tickers = tickerStr.split(',');
    const startDate = new Date(startDateStr);
    const endDate = new Date(endDateStr);

    const resultArray: DataRow[] = [];

    for (let i = 0; i < tickers.length; i++) {
      for (
        let date = new Date(startDate);
        date < endDate;
        date.setDate(date.getDate() + 1)
      ) {
        const yearStr = date.getUTCFullYear().toString();
        const monthStr = (date.getUTCMonth() + 1).toString().padStart(2, '0');
        const dateStr = date.getUTCDate().toString().padStart(2, '0');

        const dataURL = `https://raw.githubusercontent.com/ZeptoZinc/democratizingdata-data-${yearStr}/master/${tickers[i]}/${monthStr}/${dateStr}.csv`;

        try {
          const response = await axios.get(dataURL);
          const parsed = parse(response.data, { columns: true });
          resultArray.push(...parsed);
        } catch (error) {}
      }
    }
    // Stringify resulting CSV
    const resultCSV = stringify(resultArray, {
      columns: [
        { key: 'Datetime' },
        { key: 'Ticker' },
        { key: 'Open' },
        { key: 'High' },
        { key: 'Low' },
        { key: 'Close' },
        { key: 'Volume' },
      ],
    });

    console.log('result CSV: ', resultCSV);

    // Compose file and download
    const element = document.createElement('a');
    const file = new Blob([resultCSV], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = 'DemocratizingData.csv';
    document.body.appendChild(element);
    element.click();
  },
);
