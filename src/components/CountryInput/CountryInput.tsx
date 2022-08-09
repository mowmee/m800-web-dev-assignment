import { useCallback } from 'react';
import styled from 'styled-components';

interface Props {
  value: string;
  onValueChanged: (q: string) => void;
}

export default function CountryInput(props: Props) {
  const { value, onValueChanged } = props;

  const handleChange = useCallback(
    (e) => {
      return onValueChanged(e.target.value);
    },
    [onValueChanged]
  );

  return (
    <S.Container>
      <S.Box>
        <S.Title>{'Search a country:'}</S.Title>
        <S.Input value={value} onChange={handleChange} />
      </S.Box>
    </S.Container>
  );
}

const S = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    padding: 8px;
    align-items: center;
  `,
  Box: styled.div`
    display: flex;
    flex-direction: row;
    gap: 16px;
  `,
  Title: styled.h1`
    font-size: 14px;
  `,
  Input: styled.input`
    font-size: 14px;
    border-radius: 12px;
    padding: 4px;
  `,
};
