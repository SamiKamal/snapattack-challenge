import { Card, CardMedia, CardContent, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Person, Status } from '../util/type';
import useTitle from '../util/useTitle';

export async function fetchData<T>(
  url: string,
  setData: React.Dispatch<React.SetStateAction<T>>,
  setStatus: React.Dispatch<React.SetStateAction<Status>>
) {
  await fetch(url)
    .then(result => result.json())
    .then(result => {
      setData(result.results[0]);
      setStatus('resolved');
    })
    .catch(err => {
      setData(null as unknown as T);
      setStatus('rejected');
      console.log(err);
    });
}

function PersonPage() {
  const [status, setStatus] = useState<Status>('pending');
  const [personData, setPersonData] = useState<Person>(null as unknown as Person);
  useTitle('Snap - Person');

  useEffect(() => {
    fetchData<Person>('https://randomuser.me/api/', setPersonData, setStatus);
  }, []);

  if (status === 'pending') {
    return <h1>Loading</h1>;
  } else if (status === 'resolved') {
    return (
      <Card style={{ display: 'flex', padding: '16px' }}>
        <CardMedia
          component='img'
          height='80'
          style={{ width: '80px', borderRadius: '50%', objectFit: 'cover', alignSelf: 'center' }}
          image={personData.picture.thumbnail}
          alt={`${personData.name.title} ${personData.name.first} ${personData.name.last} Picture`}
        />
        <CardContent style={{ display: 'block' }}>
          <Typography gutterBottom variant='h4' component='div'>
            {`${personData.name.title} ${personData.name.first} ${personData.name.last}`}
          </Typography>
          <Typography gutterBottom variant='subtitle1' component='div'>
            <Typography gutterBottom variant='subtitle1' component='p'>
              {`Street: ${personData.location.street.name} ${personData.location.street.number}`}
            </Typography>

            <Typography gutterBottom variant='subtitle1' component='p'>
              {`Location: ${personData.location.city} ${personData.location.state} ${personData.location.postcode}`}
            </Typography>
            <Typography gutterBottom variant='subtitle1' component='p'>
              {`${personData.email} - ${personData.phone}`}
            </Typography>
          </Typography>
        </CardContent>
      </Card>
    );
  } else if (status === 'rejected') {
    return (
      <>
        <h1>Error</h1>
        <h4>Check console for error's details</h4>
      </>
    );
  }

  return null;
}

export default PersonPage;
