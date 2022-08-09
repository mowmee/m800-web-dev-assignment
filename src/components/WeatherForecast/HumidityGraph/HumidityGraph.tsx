import styled from 'styled-components';

interface Props {
  labels: string[];
  data: number[];
  title: string;
  labelSuffix?: string;
}

export default function HumidityGraph(props: Props) {
  const { labels, data, title, labelSuffix = '%' } = props;

  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <S.Box>
        {labels.map((label, index) => {
          return (
            <S.Column key={label}>
              <S.Label>{`${data[index].toFixed(2)}${labelSuffix}`}</S.Label>
              <S.Pie percentage={data[index]} />
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
  Pie: styled.div<{ percentage: number }>`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: linear-gradient(to right, lightblue 50%, white 0);

    &:before {
      content: '';
      display: block;
      margin-left: 50%;
      height: 100%;
      border-radius: 0 100% 100% 0 / 50%;
      background-color: ${({ percentage }) =>
        percentage > 50 ? 'lightblue' : 'white'};
      transform-origin: left;
      transform: rotate(
        ${({ percentage }) => {
          if (percentage > 50) {
            return (100 - percentage) / 100;
          }

          return (50 - percentage) / 100;
        }}turn
      );
    }
  `,
};

// 50 0.5 100 0
// 50 0.5 60 0.4 70 0.3 80 0.2 90 0.1 100 0
// 0 0.5 10 0.4 20 0.3 30 0.2 4 0.1 50 0
