import { advanceRepository } from "../repositories/advanceRepository.js";

export const advanceService = {
  listEntries() {
    return advanceRepository.list();
  },

  createEntry(input: {
    siteId: string;
    date: string;
    amount: number;
    remarks?: string;
    createdById: string;
  }) {
    const payload = {
      siteId: input.siteId,
      date: new Date(input.date),
      amount: input.amount,
      createdById: input.createdById
    } as {
      siteId: string;
      date: Date;
      amount: number;
      remarks?: string;
      createdById: string;
    };
    if (input.remarks !== undefined) payload.remarks = input.remarks;
    return advanceRepository.create(payload);
  },

  updateEntry(input: {
    id: string;
    date: string;
    amount: number;
    remarks?: string;
  }) {
    const payload = {
      id: input.id,
      date: new Date(input.date),
      amount: input.amount
    } as {
      id: string;
      date: Date;
      amount: number;
      remarks?: string;
    };
    if (input.remarks !== undefined) payload.remarks = input.remarks;
    return advanceRepository.update(payload);
  },

  deleteEntry(id: string) {
    return advanceRepository.remove(id);
  }
};
