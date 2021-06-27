export class Clock {  
  constructor(hours, minutes){
    const timeElements = this.convertElementsToNumObj(hours, minutes);

    this.time = (new Date()).setHours(timeElements.numHours, timeElements.numMinutes);
  }

  toString() {
    return this.sanitizeTimeString(this.getTimeAsDateObj().toTimeString());
  }

  plus(minutes) {
    const timeObj = this.getTimeAsDateObj(),
          currMin = timeObj.getMinutes();

    this.time = timeObj.setMinutes(currMin + minutes);
    return this.toString();
  }

  minus(minutes) {
    const negativeMin = minutes * (-1);
    return this.plus(negativeMin);
  }

  equals(secondClock) {
    return this.toString() === secondClock.toString();
  }

  convertElementsToNumObj(hours, minutes){
    return {
      numHours: parseInt(hours),
      numMinutes: minutes ? parseInt(minutes) : 0
    }
  }

  sanitizeTimeString(text){
    return text.slice(0, 5);
  }

  getTimeAsDateObj() {
    return new Date(this.time);
  }
}
