import express, { Request, Response } from "express";
import fs from "fs";
import path from "path";
import { Cell } from "../types";
import { fileWriter } from "../fileWriter";

interface LocalApiError {
  code: string;
}

function isLocalApiError(err: any): err is LocalApiError {
  return typeof err.code === "string";
}

export const createCellsRouter = (filename: string, dir: string) => {
  const router = express.Router();
  router.use(express.json());

  const dbPath = path.join(dir, filename + "-db.json");
  const notebookPath = path.join(dir, filename + ".js");

  router.get("/cells", (req: Request, res: Response) => {
    // Read the file
    let data;
    try {
      const result = fs.readFileSync(dbPath, { encoding: "utf-8" });
      data = JSON.parse(result);
    } catch (err) {
      if (isLocalApiError(err)) {
        if (err.code === "ENOENT") {
          fs.writeFileSync(dbPath, "[]", "utf-8");
          data = [];
        }
      } else {
        if (err instanceof Error) res.status(500).send({ error: err.message });
        throw err;
      }
    }
    res.send(data);
  });

  router.post("/cells", (req: Request, res: Response) => {
    // Take the list of cells from the request obj
    // serialize them
    const { cells }: { cells: Cell[] } = req.body;

    try {
      // write the cells into the file
      fs.writeFileSync(dbPath, JSON.stringify(cells), "utf-8");

      fileWriter(notebookPath, cells);

      res.send({ status: "ok" });
    } catch (err) {
      if (err instanceof Error) res.status(500).send({ error: err.message });
      throw err;
    }
  });

  return router;
};
