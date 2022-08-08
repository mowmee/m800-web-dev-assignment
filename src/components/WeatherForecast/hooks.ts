import { useMemo } from 'react';
import type { ForecastResponse } from '../../types/ForecastResponse';

const MAXIMUM_DAYS = 4;

export const useFormatData = (fromData?: ForecastResponse) => {
  return useMemo(() => {
    if (!fromData) {
      return;
    }

    const dailyData = fromData.list.reduce((acc, cur) => {
      const date = cur.dt_txt.split(' ')[0];
      const existsData = acc.get(date);

      if (existsData) {
        existsData.humidity = (existsData.humidity + cur.main.humidity) / 2;
        existsData.tempMin = Math.min(existsData.tempMin, cur.main.temp_min);
        existsData.tempMax = Math.max(existsData.tempMax, cur.main.temp_max);
      } else {
        acc.set(date, {
          humidity: cur.main.humidity,
          tempMin: cur.main.temp_min,
          tempMax: cur.main.temp_max,
        });
      }

      return acc;
    }, new Map<string, { humidity: number; tempMin: number; tempMax: number }>());

    const limitedData = [...dailyData.entries()].slice(1, MAXIMUM_DAYS + 1);

    return limitedData.reduce(
      (acc, [key, value]) => {
        acc.dateList.push(key);
        acc.humidityList.push(value.humidity);
        acc.tempMinList.push(value.tempMin);
        acc.tempMaxList.push(value.tempMax);

        return acc;
      },
      {
        dateList: [] as string[],
        humidityList: [] as number[],
        tempMinList: [] as number[],
        tempMaxList: [] as number[],
      }
    );
  }, [fromData]);
};
