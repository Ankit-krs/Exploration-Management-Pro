import type { Request, Response } from "express";
import { dceService } from "../services/dceService.js";
import { HttpError } from "../utils/httpError.js";

export const dceController = {
  async list(_req: Request, res: Response) {
    const data = await dceService.listEntries();
    res.status(200).json({ data });
  },

  async create(req: Request, res: Response) {
    if (!req.auth) throw new HttpError(401, "Unauthorized");
    const data = await dceService.createEntry({
      ...req.body,
      createdById: req.auth.sub
    });
    res.status(201).json({ data });
  },

  async update(req: Request, res: Response) {
    const id = req.params.id;
    if (!id) throw new HttpError(400, "Missing DCE id");
    const data = await dceService.updateEntry({
      id,
      ...req.body
    });
    res.status(200).json({ data });
  },

  async action(req: Request, res: Response) {
    const id = req.params.id;
    if (!id) throw new HttpError(400, "Missing DCE id");
    const data = await dceService.applyAction(id, req.body.action);
    res.status(200).json({ data });
  },

  async remove(req: Request, res: Response) {
    const id = req.params.id;
    if (!id) throw new HttpError(400, "Missing DCE id");
    await dceService.deleteEntry(id);
    res.status(204).send();
  }
};
