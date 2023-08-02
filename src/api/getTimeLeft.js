export const getTimeLeft = (targetDate) => {
  const now = new Date();
  const difference = targetDate - now;

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;

  const days = Math.floor(difference / oneDay);
  const hours = Math.floor((difference % oneDay) / oneHour - 3);
  const minutes = Math.floor((difference % oneHour) / oneMinute);
  const seconds = Math.floor((difference % oneMinute) / 1000);

  return { days, hours, minutes, seconds };
};
