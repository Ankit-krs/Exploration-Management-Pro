import { dceRepository } from "../repositories/dceRepository.js";
import { HttpError } from "../utils/httpError.js";
import { daysDiff } from "../utils/dceMath.js";

export const dceService = {
  listEntries() {
    return dceRepository.list();
  },

  createEntry(input: {
    siteId: string;
    costHead: string;
    perDayCost: number;
    startDate: string;
    status?: "ACTIVE" | "PAUSED" | "STOPPED";
    remarks?: string;
    createdById: string;
  }) {
    const today = new Date().toISOString().slice(0, 10);
    const status = input.status ?? "ACTIVE";
    const payload = {
      siteId: input.siteId,
      costHead: input.costHead.trim(),
      perDayCost: input.perDayCost,
      startDate: new Date(input.startDate),
      status,
      pausedAt: status === "PAUSED" ? new Date(today) : null,
      stoppedAt: status === "STOPPED" ? new Date(today) : null,
      totalPausedDays: 0,
      createdById: input.createdById
    } as {
      siteId: string;
      costHead: string;
      perDayCost: number;
      startDate: Date;
      status: "ACTIVE" | "PAUSED" | "STOPPED";
      remarks?: string;
      pausedAt?: Date | null;
      stoppedAt?: Date | null;
      totalPausedDays: number;
      createdById: string;
    };
    if (input.remarks !== undefined) payload.remarks = input.remarks;
    return dceRepository.create(payload);
  },

  updateEntry(input: {
    id: string;
    costHead: string;
    perDayCost: number;
    startDate: string;
    remarks?: string;
  }) {
    const payload = {
      id: input.id,
      costHead: input.costHead.trim(),
      perDayCost: input.perDayCost,
      startDate: new Date(input.startDate)
    } as {
      id: string;
      costHead: string;
      perDayCost: number;
      startDate: Date;
      remarks?: string;
    };
    if (input.remarks !== undefined) payload.remarks = input.remarks;
    return dceRepository.update(payload);
  },

  async applyAction(id: string, action: "pause" | "resume" | "stop") {
    const entry = await dceRepository.findById(id);
    if (!entry) {
      throw new HttpError(404, "DCE entry not found");
    }

    const today = new Date().toISOString().slice(0, 10);

    if (action === "pause") {
      if (entry.status !== "ACTIVE") return entry;
      return dceRepository.updateStatus({
        id,
        status: "PAUSED",
        pausedAt: new Date(today),
        stoppedAt: null,
        totalPausedDays: entry.totalPausedDays
      });
    }

    if (action === "resume") {
      if (entry.status !== "PAUSED") return entry;
      const pausedDays = entry.pausedAt ? daysDiff(entry.pausedAt.toISOString().slice(0, 10), today) : 0;
      return dceRepository.updateStatus({
        id,
        status: "ACTIVE",
        pausedAt: null,
        stoppedAt: null,
        totalPausedDays: entry.totalPausedDays + pausedDays
      });
    }

    if (entry.status === "STOPPED") return entry;
    const finalPaused =
      entry.status === "PAUSED" && entry.pausedAt
        ? entry.totalPausedDays + daysDiff(entry.pausedAt.toISOString().slice(0, 10), today)
        : entry.totalPausedDays;

    return dceRepository.updateStatus({
      id,
      status: "STOPPED",
      pausedAt: null,
      stoppedAt: new Date(today),
      totalPausedDays: finalPaused
    });
  },

  deleteEntry(id: string) {
    return dceRepository.remove(id);
  }
};
