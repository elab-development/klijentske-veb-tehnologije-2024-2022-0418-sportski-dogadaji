export class SportType {
    private id: number;
    private name: string;
  
    constructor(id: number, name: string) {
      this.id = id;
      this.name = name;
    }
  
    getTypeDetails() {
      return `Sport Type Id: ${this.id}, Name: ${this.name}`;
    }
  }
  