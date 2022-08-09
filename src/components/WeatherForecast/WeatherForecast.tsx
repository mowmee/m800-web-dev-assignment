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
      <BarChart
        title="Minimum temperature of the next four days"
        labels={dateList}
        data={tempMinList}
      />
      <BarChart
        title="Maximum temperature of the next four days"
        labels={dateList}
        data={tempMaxList}
      />
      <HumidityGraph
        title="Humidity percentage of the next four days"
        labels={dateList}
        data={humidityList}
      />
    </>
  );
}
