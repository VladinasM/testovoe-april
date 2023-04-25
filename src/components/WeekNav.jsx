import React from 'react';
import styled from "styled-components";
import moment from "moment";

const StyledWeekScroll = styled.div`
  display: flex;
  justify-content: center;
  background-color: #eee;
`
const ScrollWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
`
const Tr = styled.tr`
  display: table-row;
  min-height: 60px;
`
const Td = styled.td`
  display: table-row;
  min-height: 60px;
`

const WeekNav = (props) => {
  const weekDays = ['M', 'T', 'W', 'T', 'F', 'S', 'S']
  const startOfWeek = moment(props.date).startOf('isoWeek')
  const endOfWeek = moment(props.date).endOf('isoWeek')


  return (
    <StyledWeekScroll>

    </StyledWeekScroll>
  );
};

export default WeekNav;