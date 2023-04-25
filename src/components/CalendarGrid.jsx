import React from 'react';
import styled from "styled-components";

const StyledCalendarGrid = styled.div`
  background-color: #e6e6e6;
  display: flex;
  flex-direction: column;
`
const TimeOfDay = styled.div`
  position: relative;
  background-color: #fff;
  color: black;
  font-size: 20px;
  display: inline-block;
  width: 12.5%;
`
const TimeOfDayText = styled.div`
  position: absolute;
  bottom: -12px;
  right: 10px;
  z-index: 1;
  color: #c0c0c0;
  font-size: 18px;
`
const GridRow = styled.div`
  display: flex;
`
const GridCell = styled.div`
  background-color: #fff;
  width: 12.5%;
  height: 60px;
  position: relative;
  margin-right: 2px;
  margin-bottom: 2px;
  &:last-child {
    margin-right: 0;
  }
`

const CalendarGrid = () => {
  const startHour = 8;
  const endHour = 21;

  const timeOfDay = []
  for (let i = startHour + 1; i <= endHour; i++) {
    let row = []
    row.push(
      <TimeOfDay>
        <TimeOfDayText>
          {i.toString().padStart(2, '0') + ':00'}
        </TimeOfDayText>
      </TimeOfDay>
    )
    for (let j = 1; j <= 7; j++) {
      row.push(
        <GridCell/>
      )
    }
    timeOfDay.push(row)
  }

  return (
    <StyledCalendarGrid>
      {
        timeOfDay.map(item => <GridRow>{item}</GridRow>)
      }
    </StyledCalendarGrid>
  );
};

export default CalendarGrid;