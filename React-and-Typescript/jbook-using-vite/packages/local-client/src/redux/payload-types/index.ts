import { CellTypes } from "../../types/cell";

type MoveDirection = "up" | "down";

export interface MoveCell {
  cellId: string;
  direction: MoveDirection;
}

export interface DeleteCell {
  cellId: string;
}

export interface InsertCell {
  cellId: string | null;
  type: CellTypes;
}

export interface UpdateCellContent {
  cellId: string;
  content: string;
}

export interface BundlerInput {
  id: string;
  input: string;
}

export interface BundlerOutput {
  compiledCode: string;
  error: string;
}
