import { useCallback } from 'react';

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

  return <input value={value} onChange={handleChange} />;
}
