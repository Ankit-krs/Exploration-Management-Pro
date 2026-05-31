import type { Request, Response } from "express";
import { siteService } from "../services/siteService.js";
import { HttpError } from "../utils/httpError.js";

export const siteController = {
  async list(_req: Request, res: Response) {
    const sites = await siteService.listSites();
    res.status(200).json({ data: sites });
  },

  async create(req: Request, res: Response) {
    if (!req.auth) {
      throw new HttpError(401, "Unauthorized");
    }

    const site = await siteService.createSite({
      name: req.body.name,
      createdById: req.auth.sub
    });
    res.status(201).json({ data: site });
  },

  async update(req: Request, res: Response) {
    const siteId = req.params.id;
    if (!siteId) {
      throw new HttpError(400, "Missing site id");
    }
    const site = await siteService.updateSite({
      id: siteId,
      name: req.body.name
    });
    res.status(200).json({ data: site });
  },

  async remove(req: Request, res: Response) {
    const siteId = req.params.id;
    if (!siteId) {
      throw new HttpError(400, "Missing site id");
    }
    await siteService.deleteSite(siteId);
    res.status(204).send();
  }
};
