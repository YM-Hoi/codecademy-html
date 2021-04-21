const getSleepHours = day => {
    if ('monday' === day) {
      return 8;
    } else if ('tuesday' === day) {
      return 7;
    } else if ('wednesday' === day) {
      return 6;
    } else if ('thursday' === day) {
      return 6;
    } else if ('friday' === day) {
      return 6;
    } else if ('saturday' === day) {
      return 8;
    } else if ('sunday' === day) {
      return 10;
    }
  }
  
  const getActualSleepHours = () => 8 + 7 + 6 + 6 + 6 + 8 + 10;
  
  const getIdealSleepHours = idealHours => idealHours * 7;
  
  const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours()
    const idealSleepHours = getIdealSleepHours(9)
    if (actualSleepHours === idealSleepHours) {
    console.log('good');
  } else if (actualSleepHours > idealSleepHours) {
    console.log('very good');
  } else {
    console.log('need more sleep time');
   }
   if (actualSleepHours < idealSleepHours) {
    console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hour(s) less sleep than you needed this week. Get some rest.');
   }
  }
  calculateSleepDebt();