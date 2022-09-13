function dayOfProgrammer(year) {
  let jan = 31;
  let march = 31;
  let april = 30;
  let may = 31;
  let june = 30;
  let july = 31;
  let aug = 31;
  let feb = 29;
  let sum = 0;
  let day;
  let date;
  if (year % 4 === 0) {
    feb = 28;
    sum = jan + march + april + may + june + july + aug + feb;
    day = 256 - sum;
    date = `${day}.09.${year}`;
  } else {
    sum = jan + march + april + may + june + july + aug + feb;
    day = 256 - sum;
    date = `${day}.09.${year}`;
  }

  return date;
}
