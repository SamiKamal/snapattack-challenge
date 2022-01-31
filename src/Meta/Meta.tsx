import { Box, Typography } from '@mui/material';
import React from 'react';
import { Item } from '../util/type';

type Props = {
  store: Item[];
};

const Meta = (props: Props) => {
  const store = React.useMemo(() => {
    console.log('Meta.tsx useMemo'); // 🧐 Why do I keep logging?
    return props.store.map(m => ({ name: m.name }));
  }, [props.store]);

  return (
    <Box
      sx={{
        display: 'flex',
        gap: 1
      }}
    >
      <Typography color='secondary'>metasyntactic:</Typography>
      {store.map((m, i) => (
        <Typography key={i} color='primary'>
          {m.name}
        </Typography>
      ))}
    </Box>
  );
};

export default Meta;
