export type Location = {
  street: {
    number: number;
    name: string;
  };
  city: string;
  state: string;
  country: string;
  postcode: number;
};

export type Status = 'pending' | 'rejected' | 'resolved';

export type Name = {
  title: string;
  first: string;
  last: string;
};

export type Person = {
  gender: string;
  name: Name;
  location: Location;
  email: string;
  dob: {
    date: string;
    age: number;
  };
  phone: string;
  picture: {
    thumbnail: string;
  };
};

export type Data = {
  value?: number;
  data?: Data;
};

export type Item = {
  name: string;
  data: Data;
};
