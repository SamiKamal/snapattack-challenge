import React from 'react';
import { Typography } from '@mui/material';

function Counter() {
  const [count, setCount] = React.useState(0);
  const intervalRef = React.useRef<NodeJS.Timeout>();

  React.useEffect(() => {
    intervalRef.current = setInterval(() => setCount(c => c + 1), 500);
    return () => intervalRef.current && clearInterval(intervalRef.current);
  }, [setCount]);

  return <Typography color='secondary'>likes 👍 {count}</Typography>;
}

export default Counter;
