import { drillingRepository } from "../repositories/drillingRepository.js";

export const drillingService = {
  listEntries() {
    return drillingRepository.list();
  },

  createEntry(input: {
    siteId: string;
    date: string;
    meters: number;
    boreholeNumber?: string;
    createdById: string;
  }) {
    const payload = {
      siteId: input.siteId,
      date: new Date(input.date),
      meters: input.meters,
      createdById: input.createdById
    } as {
      siteId: string;
      date: Date;
      meters: number;
      createdById: string;
      boreholeNumber?: string;
    };

    if (input.boreholeNumber !== undefined) {
      payload.boreholeNumber = input.boreholeNumber;
    }

    return drillingRepository.create({
      ...payload
    });
  },

  updateEntry(input: {
    id: string;
    date: string;
    meters: number;
    boreholeNumber?: string;
  }) {
    const payload = {
      id: input.id,
      date: new Date(input.date),
      meters: input.meters
    } as {
      id: string;
      date: Date;
      meters: number;
      boreholeNumber?: string;
    };

    if (input.boreholeNumber !== undefined) {
      payload.boreholeNumber = input.boreholeNumber;
    }

    return drillingRepository.update(payload);
  },

  deleteEntry(id: string) {
    return drillingRepository.remove(id);
  }
};
