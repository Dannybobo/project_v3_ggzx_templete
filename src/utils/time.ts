export const getTimeMessage = () => {
  let message = '';
  const hours = new Date().getHours();
  if (hours <= 9) {
    message = 'Good morning';
  } else if (hours <= 12) {
    message = 'Good noon';
  } else if (hours <= 18) {
    message = 'Good after noon';
  } else {
    message = 'Goog evening';
  }
  return message;
};
