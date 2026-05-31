import type { Request, Response } from "express";
import { HttpError } from "../utils/httpError.js";
import { advanceService } from "../services/advanceService.js";

export const advanceController = {
  async list(_req: Request, res: Response) {
    const data = await advanceService.listEntries();
    res.status(200).json({ data });
  },

  async create(req: Request, res: Response) {
    if (!req.auth) throw new HttpError(401, "Unauthorized");
    const data = await advanceService.createEntry({
      ...req.body,
      createdById: req.auth.sub
    });
    res.status(201).json({ data });
  },

  async update(req: Request, res: Response) {
    const id = req.params.id;
    if (!id) throw new HttpError(400, "Missing advance entry id");
    const data = await advanceService.updateEntry({
      id,
      ...req.body
    });
    res.status(200).json({ data });
  },

  async remove(req: Request, res: Response) {
    const id = req.params.id;
    if (!id) throw new HttpError(400, "Missing advance entry id");
    await advanceService.deleteEntry(id);
    res.status(204).send();
  }
};
