import React, { useEffect } from 'react';
import axios from 'axios';

const Landingpage = () => {
  useEffect(() => {
    axios.get('/api/hello').then((res) => console.log(res.data.message));
  }, []);

  return <div>Landingpage</div>;
};

export default Landingpage;
