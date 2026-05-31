import type { Request, Response } from "express";
import { HttpError } from "../utils/httpError.js";
import { opexService } from "../services/opexService.js";

export const opexController = {
  async listCategories(_req: Request, res: Response) {
    const data = await opexService.listCategories();
    res.status(200).json({ data });
  },

  async createCategory(req: Request, res: Response) {
    const data = await opexService.createCategory(req.body.name);
    res.status(201).json({ data });
  },

  async deleteCategory(req: Request, res: Response) {
    const id = req.params.id;
    if (!id) throw new HttpError(400, "Missing category id");
    await opexService.deleteCategory(id);
    res.status(204).send();
  },

  async listExpenseHeads(_req: Request, res: Response) {
    const data = await opexService.listExpenseHeads();
    res.status(200).json({ data });
  },

  async createExpenseHead(req: Request, res: Response) {
    const data = await opexService.createExpenseHead(req.body);
    res.status(201).json({ data });
  },

  async deleteExpenseHead(req: Request, res: Response) {
    const id = req.params.id;
    if (!id) throw new HttpError(400, "Missing expense head id");
    await opexService.deleteExpenseHead(id);
    res.status(204).send();
  },

  async listOpexEntries(_req: Request, res: Response) {
    const data = await opexService.listOpexEntries();
    res.status(200).json({ data });
  },

  async createOpexEntry(req: Request, res: Response) {
    if (!req.auth) throw new HttpError(401, "Unauthorized");
    const data = await opexService.createOpexEntry({
      ...req.body,
      createdById: req.auth.sub
    });
    res.status(201).json({ data });
  },

  async updateOpexEntry(req: Request, res: Response) {
    const id = req.params.id;
    if (!id) throw new HttpError(400, "Missing opex entry id");
    const data = await opexService.updateOpexEntry({
      id,
      ...req.body
    });
    res.status(200).json({ data });
  },

  async deleteOpexEntry(req: Request, res: Response) {
    const id = req.params.id;
    if (!id) throw new HttpError(400, "Missing opex entry id");
    await opexService.deleteOpexEntry(id);
    res.status(204).send();
  }
};
