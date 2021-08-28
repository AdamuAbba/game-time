export class Structure {
  constructor(title, userSelections) {
    this.title = title;
    this.userSelections = userSelections;
  }
}

export const shapeOptions = [
  { shape: "Rectangle", id: "A" },
  { shape: "Square", id: "B" },
  { shape: "Circle", id: "C" },
  { shape: "Triangle", id: "D" },
];

export const colorOptions = [
  { shape: "Blue", id: "A" },
  { shape: "Green", id: "B" },
  { shape: "Red", id: "C" },
  { shape: "Yellow", id: "D" },
];
