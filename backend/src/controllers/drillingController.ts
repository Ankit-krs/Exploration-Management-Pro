import type { Request, Response } from "express";
import { drillingService } from "../services/drillingService.js";
import { HttpError } from "../utils/httpError.js";

export const drillingController = {
  async list(_req: Request, res: Response) {
    const entries = await drillingService.listEntries();
    res.status(200).json({ data: entries });
  },

  async create(req: Request, res: Response) {
    if (!req.auth) {
      throw new HttpError(401, "Unauthorized");
    }

    const entry = await drillingService.createEntry({
      siteId: req.body.siteId,
      date: req.body.date,
      meters: req.body.meters,
      boreholeNumber: req.body.boreholeNumber,
      createdById: req.auth.sub
    });
    res.status(201).json({ data: entry });
  },

  async update(req: Request, res: Response) {
    const entryId = req.params.id;
    if (!entryId) {
      throw new HttpError(400, "Missing drilling entry id");
    }

    const entry = await drillingService.updateEntry({
      id: entryId,
      date: req.body.date,
      meters: req.body.meters,
      boreholeNumber: req.body.boreholeNumber
    });
    res.status(200).json({ data: entry });
  },

  async remove(req: Request, res: Response) {
    const entryId = req.params.id;
    if (!entryId) {
      throw new HttpError(400, "Missing drilling entry id");
    }
    await drillingService.deleteEntry(entryId);
    res.status(204).send();
  }
};
