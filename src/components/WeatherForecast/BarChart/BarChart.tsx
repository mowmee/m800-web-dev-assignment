import { useMemo } from 'react';
import styled from 'styled-components';

interface Props {
  labels: string[];
  data: number[];
  title: string;
  labelSuffix?: string;
  height?: number;
}

export default function BarChart(props: Props) {
  const { labels, data, title, height = 200, labelSuffix = '°C' } = props;

  const dataLevels = useMemo(() => {
    const distinctData = new Set(data);

    return [...distinctData]
      .sort((a, b) => a - b)
      .reduce((acc, cur, index) => {
        acc.set(cur, index);

        return acc;
      }, new Map());
  }, [data]);

  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <S.Box>
        {labels.map((label, index) => {
          const barHeight =
            (dataLevels.get(data[index]) + 1) * (height / dataLevels.size + 2);

          return (
            <S.Column key={label}>
              <S.Label>{`${data[index]}${labelSuffix}`}</S.Label>
              <S.Bar barHeight={barHeight} />
              <S.Label>{label}</S.Label>
            </S.Column>
          );
        })}
      </S.Box>
    </S.Container>
  );
}

const S = {
  Container: styled.div`
    border: 1px solid #88b;
    padding: 8px;
    display: flex;
    flex-direction: column;
  `,
  Title: styled.div`
    margin: auto;
    padding: 8px;
    font-size: 16px;
    font-weight: 600;
  `,
  Box: styled.div`
    margin: auto;
    padding: 8px;
    display: flex;
    flex-direction: row;
    gap: 16px;
  `,
  Column: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  `,
  Label: styled.div`
    padding: 4px;
    font-size: 12px;
    text-align: center;
  `,
  Bar: styled.div<{ barHeight: number }>`
    background-color: lightblue;
    height: ${({ barHeight }) => barHeight}px;
  `,
};
