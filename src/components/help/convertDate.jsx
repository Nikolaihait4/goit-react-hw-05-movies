const namesOfMonth = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

export function convertDate(date) {
  const newDate = new Date(date);
  const day = newDate.getDate();
  const month = namesOfMonth[newDate.getMonth() + 1];
  const year = newDate.getFullYear();

  return `${month} ${day.toString().padStart(2, '0')}, ${year}`;
}
