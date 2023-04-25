import React from 'react';
import styled from "styled-components";

const CustomFooter = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
  max-width: 740px;
  height: 80px;
  z-index: 99;
  background-color: #eee;
`

const CalendarFooter = () => {
  return (
    <CustomFooter>

    </CustomFooter>
  );
};

export default CalendarFooter;