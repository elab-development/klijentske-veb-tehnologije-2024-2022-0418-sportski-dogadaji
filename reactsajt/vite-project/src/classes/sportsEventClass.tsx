export class SportsEvent {
    private id: number;
    private sport: string;
    private date: Date;
  
    constructor(id: number, sport: string, date: Date) {
      this.id = id;
      this.sport = sport;
      this.date = date;
    }
  
    getEventDetails() {
      return `Event Id: ${this.id}, Sport: ${this.sport}, Date: ${this.date.toDateString()}`;
    }
  }