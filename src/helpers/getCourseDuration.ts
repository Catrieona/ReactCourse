export const getCourseDuration = (totalMinutes: number) => {
  let minutes = totalMinutes % 60;
  let hours = Math.floor(totalMinutes / 60);
  let label = 'hours';

  if (hours === 1 || hours === 0) {
    hours = '0' + hours;
    label = 'hour';
  }

  if (hours < 10 && hours > 1) {
    hours = '0' + hours;
    label = 'hours';
  }

  if (minutes < 10) {
    minutes = '0' + minutes;
  }

  return hours + ':' + minutes + ' ' + label;
};
