import { useState } from 'react';
import CountryInput from './components/CountryInput';
import WeatherForecast from './components/WeatherForecast';
import { useGeoData, useForecastData } from './hooks';

export default function App() {
  const [q, setQ] = useState('');

  const { data: geoData } = useGeoData(q);
  const { data: forecastData } = useForecastData(geoData?.[0]);

  return (
    <div>
      <CountryInput value={q} onValueChanged={setQ} />
      <WeatherForecast data={forecastData} />
    </div>
  );
}
