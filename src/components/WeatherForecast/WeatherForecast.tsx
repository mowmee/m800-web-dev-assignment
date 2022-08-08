import type { ForecastResponse } from '../../types/ForecastResponse';
import { useFormatData } from './hooks';
import BarChart from './BarChart';
import HumidityGraph from './HumidityGraph';

interface Props {
  data?: ForecastResponse;
}

export default function WeatherForecast(props: Props) {
  const formatData = useFormatData(props.data);

  if (!formatData) {
    // TODO: loading state
    return null;
  }

  const { dateList, humidityList, tempMinList, tempMaxList } = formatData;

  return (
    <>
      <BarChart labels={dateList} data={tempMinList} />
      <BarChart labels={dateList} data={tempMaxList} />
      <HumidityGraph labels={dateList} data={humidityList} />
    </>
  );
}
