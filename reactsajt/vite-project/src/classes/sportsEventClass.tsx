export class SportsEvent {
    private id: number;
    private sport: string;
    private date: Date;
    private lokacija: string;
  
    constructor(id: number, sport: string, date: Date, lokacija: string) {
      this.id = id;
      this.sport = sport;
      this.date = date;
      this.lokacija=lokacija;
    }
  
    getEventDetails() {
      return `Event Id: ${this.id}, Sport: ${this.sport}, Date: ${this.date.toDateString()}, Lokacija: ${this.lokacija}`;
    }
  }