import useSWR from 'swr';
import type { GeoResponse, Geo } from './types/GeoResponse';
import type { ForecastResponse } from './types/ForecastResponse';
import { geoUrl, forecastUrl, appid } from './constants';
import { useEffect, useState } from 'react';

const fetcher = <T>(url: URL, option: RequestInit) =>
  fetch(url, option).then((res) => res.json() as Promise<T>);

export const useForecastData = (geo?: Pick<Geo, 'lat' | 'lon'>) => {
  return useSWR<ForecastResponse>(
    !!geo
      ? `${forecastUrl}?lat=${geo.lat}&lon=${geo.lon}&appid=${appid}&units=metric`
      : null,
    fetcher
  );
};

export const useGeoData = (q: string) => {
  return useSWR<GeoResponse>(
    !!q ? `${geoUrl}?q=${q}&appid=${appid}` : null,
    fetcher
  );
};

export const useDebounce = <T>(value: T) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedValue(value);
    }, 300);

    return () => {
      clearTimeout(timeout);
    };
  }, [value]);

  return debouncedValue;
};
