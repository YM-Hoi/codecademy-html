let raceNumber = Math.floor(Math.random() * 1000);
const registeredEarly = true;
const runnerAge = 18;
if (registeredEarly && runnerAge > 18) {
   raceNumber += 1000;
}
if (registeredEarly && runnerAge > 18) {
  console.log(`race at 9:30 am, your numer is: ${raceNumber}`);
} else if (!registeredEarly && runnerAge > 18) {
  console.log(`race at 11:00 am, your numer is: ${raceNumber}`);
} else if (runnerAge < 18) {
  console.log(`race at 12:30 pm, your number is: ${raceNumber}`);
} else {
  console.log('registration desk');
}