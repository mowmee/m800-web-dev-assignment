import { useMemo, useState } from 'react';
import CountryInput from './components/CountryInput';
import WeatherForecast from './components/WeatherForecast';
import { useGeoData, useForecastData, useDebounce } from './hooks';
import styled from 'styled-components';

export default function App() {
  const [q, setQ] = useState('');
  const debouncedQ = useDebounce(q);

  const { data: geoData, isValidating: isGeoLoading } = useGeoData(debouncedQ);
  const selectedGeo = geoData?.[0];

  const { data: forecastData, isValidating: isForecastLoading } =
    useForecastData(selectedGeo);

  const resultCountryName = useMemo(() => {
    switch (true) {
      case !!selectedGeo:
        return selectedGeo!.name;
      case isGeoLoading || isForecastLoading:
        return 'loading';
      case !!debouncedQ:
        return 'No found';
      default:
        return '';
    }
  }, [selectedGeo, isGeoLoading, isForecastLoading, debouncedQ]);

  return (
    <S.Container>
      <S.Title>{'M800 Web Developer - Assignment'}</S.Title>
      <CountryInput value={q} onValueChanged={setQ} />
      <S.Description>{resultCountryName}</S.Description>
      <WeatherForecast data={forecastData} />
    </S.Container>
  );
}

const S = {
  Container: styled.div`
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 8px;
  `,
  Title: styled.h1`
    margin: auto;
  `,
  Description: styled.div`
    margin: auto;
    font-size: 16px;
  `,
};
