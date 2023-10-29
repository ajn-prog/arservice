import { useTenders } from '../api';

export const Tenders: React.FC = () => {
  const { data } = useTenders();

  console.log(data);

  return <main></main>;
};
