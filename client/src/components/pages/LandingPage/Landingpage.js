import React from 'react';
import styled from 'styled-components';

import NavBar from '../../Navbar/Navbar';

const Landingpage = () => {
  return (
    <>
      <NavBar />
      <LandingCondtainer>
        <h2>Landingpage</h2>
      </LandingCondtainer>
    </>
  );
};

const LandingCondtainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Landingpage;
