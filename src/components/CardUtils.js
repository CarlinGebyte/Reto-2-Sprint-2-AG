import dayjs from "dayjs";

function GetsRemainingTimestamp(timestamp) {
  const timestampDayjs = dayjs(timestamp);
  const nowDayjs = dayjs();

  if (timestampDayjs.isBefore(nowDayjs)) {
    return {
      seconds: "00",
      minutes: "00",
      hours: "00",
      days: "00",
    };
  }
  return {
    seconds: getRemainSeconds(nowDayjs, timestampDayjs),
    minutes: getRemainMinutes(nowDayjs, timestampDayjs),
    hours: getRemainHours(nowDayjs, timestampDayjs),
    days: getRemainDays(nowDayjs, timestampDayjs),
  };
}

function getRemainSeconds(nowDayjs, timestampDayjs) {
  const seconds = timestampDayjs.diff(nowDayjs, "seconds") % 60;
  return addZeros(seconds, 2);
}
function getRemainMinutes(nowDayjs, timestampDayjs) {
  const minutes = timestampDayjs.diff(nowDayjs, "minutes") % 60;
  return addZeros(minutes, 2);
}
function getRemainHours(nowDayjs, timestampDayjs) {
  const hours = timestampDayjs.diff(nowDayjs, "hours") % 24;
  return addZeros(hours, 2);
}
function getRemainDays(nowDayjs, timestampDayjs) {
  const days = timestampDayjs.diff(nowDayjs, "days");
  return days.toString();
}
function addZeros(number, minLength) {
  const numberToString = number.toString();
  if (numberToString.length >= minLength) {
    return numberToString;
  } else {
    return "0".repeat(minLength - numberToString.length) + numberToString;
  }
}
export default GetsRemainingTimestamp;
