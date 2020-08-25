export interface Technique {
  id: number;
  name: string;
}

export interface Step {
  id?: number;
  text: string;
  order: number;
}
