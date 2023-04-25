import React, {useState} from 'react';
import styled from "styled-components";
import moment from "moment";
import CalendarHeader from "./CalendarHeader";
import WeekNav from "./WeekNav";
import CalendarGrid from "./CalendarGrid";
import CalendarFooter from "./CalendarFooter";

const StyledCalendar = styled.div`
  width: 100%;
  max-width: 740px;
  background-color: #fff;
  margin: 0 auto;
`

export const ImgBtn = styled.button`
  width: ${props => props.width || '24px'};
  height: ${props => props.height || '24px'};
  background-image: url(${props => props.img});
  background-size: contain;
  cursor: pointer;
  border: none;
  background-color: transparent;
`

const Calendar = () => {
  const currentDate = moment()

  const [date, setDate] = useState(currentDate);
  const [dateWithEvent, setDateWithEvent] = useState([]);
  const [activeDate, setActiveDate] = useState(false);

  const nextWeek = () => {
    // setDate()
  }

  return (
    <StyledCalendar>
      <CalendarHeader/>
      {/*<WeekNav date={date}/>*/}
      <CalendarGrid/>
      <CalendarFooter/>
    </StyledCalendar>
  );
};

export default Calendar;