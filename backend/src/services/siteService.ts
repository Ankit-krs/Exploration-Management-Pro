import { siteRepository } from "../repositories/siteRepository.js";

export const siteService = {
  listSites() {
    return siteRepository.list();
  },

  createSite(input: { name: string; createdById: string }) {
    return siteRepository.create({
      name: input.name.trim(),
      createdById: input.createdById
    });
  },

  updateSite(input: { id: string; name: string }) {
    return siteRepository.update({
      id: input.id,
      name: input.name.trim()
    });
  },

  deleteSite(id: string) {
    return siteRepository.remove(id);
  }
};
