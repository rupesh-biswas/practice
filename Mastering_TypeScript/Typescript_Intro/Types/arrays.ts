const activeUsers: string[] = [];
activeUsers.push("Tony");
activeUsers.push(12);

const ageList: number[] = [45, 12, 22];
ageList[0] = 99;
ageList[0] = "asdas";

// const bools: Array<boolean> = [];
const bools: boolean[] = [];

type Point = {
  x: number;
  y: number;
};
const coords: Point[] = [];
coords.push({ x: 10, y: 10 });
coords.push({ y: 10 });
coords.push({ x: 11, y: "10" });

// Multidimentional
const board: String[][] = [
  ["X", "O", "X"],
  ["X", "O", "X"],
  ["X", "O", "X"],
];
