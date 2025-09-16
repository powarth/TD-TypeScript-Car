export class Car {
    model: string;
    brand: string;
    color: string;
    year: number;
    speed: number;
    started: boolean;
  
    constructor(model: string, brand: string, color: string, year: number) {
      this.model = model;
      this.brand = brand;
      this.color = color;
      this.year = year;
      this.speed = 0;
      this.started = false;
    }
  
    start(): void {
      if (!this.started) {
        this.started = true;
        this.speed = 0;
        console.log(`[${this.brand} ${this.model}] démarre.`);
      }
    }
  
    stop(): void {
      if (this.started) {
        this.speed = 0;
        this.started = false;
        console.log(`[${this.brand} ${this.model}] s'arrête.`);
      }
    }
  
    accelerate(delta: number): void {
      if (!this.started) {
        console.warn(`[${this.brand} ${this.model}] est à l'arrêt : impossible d'accélérer.`);
        return;
      }
      const next = this.speed + delta;
      this.speed = next < 0 ? 0 : next;
      console.log(`[${this.brand} ${this.model}] ${this.speed} km/h`);
    }
  
    describe(): string {
      return `${this.brand} ${this.model} (${this.year}, ${this.color}) — ` + (this.started ? `${this.speed} km/h` : "à l'arrêt");
    }
  }
  