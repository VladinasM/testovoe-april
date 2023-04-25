import React from 'react';
import styled from "styled-components";
import plusIcon from '../assets/plusIcon.svg'
import {ImgBtn} from "./Calendar";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 25px 50px;
`
const HeaderText = styled.div`
  font-size: 24px;
  font-weight: 400;
`

const CalendarHeader = () => {
  return (
    <StyledHeader>
      <HeaderText>
        Interview Calendar
      </HeaderText>
      <ImgBtn img={plusIcon} />
    </StyledHeader>
  );
};

export default CalendarHeader;