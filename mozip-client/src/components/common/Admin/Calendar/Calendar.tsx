import 'rc-calendar/assets/index.css';
import React, {useState, Fragment} from 'react';
import Calendar from 'rc-calendar';
import moment, {Moment} from 'moment';
import 'moment/locale/zh-cn';
import 'moment/locale/en-gb';

const format = 'YYYY-MM-DD HH:mm:ss';
const now = moment();
let flag;

function getFormat(time: boolean) {
  return time ? format : 'YYYY-MM-DD';
}

const defaultCalendarValue = now.clone();

type CalendarProps = {
  name: 'documentStartDate' | 'documentEndDate' | 'interviewStartDate' | 'interviewEndDate' | 'noticeEndDate'
  style: object
  defaultDate: Date
  onDate: (name: string, date: Moment | null) => void,
}

export default function CalendarComponent(props: CalendarProps) {
  const [state] = useState({
    showTime: true,
    showDateInput: true,
    disabled: false,
    open: false,
    value: props.defaultDate,
  });
  // const disabledTime = (date: Date) => {
  //
  // }
  const {name, style, onDate} = props;
  return (
    <Calendar
      style={style}
      onChange={date => onDate(name, date)}
      format={getFormat(state.showTime)}
      defaultValue={defaultCalendarValue}
    />
  );
}



