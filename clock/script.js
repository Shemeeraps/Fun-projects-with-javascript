//my clock
class myDigitalClock {
  constructor(element) {
    this.element = element;
  }
  start() {
    this.getTime();
    setInterval(() => {
      this.getTime();
    }, 500);
  }
  getTime() {
    const parts = this.getTimeParts();
    const minutesFormatted = parts.minutes.toString().padStart(2, 0);
    const secondsFormatted = parts.second.toString().padStart(2, 0);
    const ampm = parts.isAm ? 'AM' : 'PM';
    const time = `${parts.hours}:${minutesFormatted}:${secondsFormatted}`;
    this.element.querySelector('.clock-time').textContent = time;
    this.element.querySelector('.clock-ampm').textContent = ampm;
  }
  getTimeParts() {
    const now = new Date();
    return {
      hours: now.getHours() % 12 || 12,
      minutes: now.getMinutes(),
      second: now.getSeconds(),
      isAm: now.getHours() < 12,
    };
  }
}
const clockElement = document.querySelector('.clock');
const clockObject = new myDigitalClock(clockElement);
clockObject.start();
