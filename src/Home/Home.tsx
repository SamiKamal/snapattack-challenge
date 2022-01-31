import Meta from '../Meta';
import { getMeta } from '../service/meta';
import Counter from '../Counter';

export default function Home() {
  // I shouldn't be changed
  const store = [...getMeta()];
  return (
    <div className='Home'>
      <Counter />
      <Meta store={store} />
    </div>
  );
}
