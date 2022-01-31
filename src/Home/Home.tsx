import Meta from '../Meta';
import { getMeta } from '../service/meta';
import Counter from '../Counter';
import useTitle from '../util/useTitle';

export default function Home() {
  useTitle('SnapAttack - Coding Challenge - Index');

  // I shouldn't be changed
  const store = [...getMeta()];
  return (
    <div className='Home'>
      <Counter />
      <Meta store={store} />
    </div>
  );
}
