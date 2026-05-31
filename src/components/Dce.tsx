import React, { useState } from 'react';
import { useDrillTrack, getTodayStr } from '../context/DrillTrackContext';
import { exportDceToExcel } from '../utils/exportUtils';
import { 
  Plus, 
  Calendar, 
  Download, 
  Check, 
  X, 
  Edit, 
  Trash, 
  Play, 
  Pause, 
  Square,
  Info
} from 'lucide-react';

const DCA_COST_HEAD_OPTIONS = [
  'Rig Depreciation',
  'Operator Salary',
  'Labour Salary',
  'Night Guard Salary',
  'Geologist Salary',
  'Adhoc Manpower',
  'Accessories Depriciation',
  'Other'
] as const;

export const Dce: React.FC = () => {
  const {
    activeSiteId,
    activeSite,
    dceEntries,
    addDceEntry,
    editDceEntry,
    deleteDceEntry,
    toggleDceStatus,
    getDceActiveDays,
    getDceTotal,
    drafts,
    updateDraft,
    addToast
  } = useDrillTrack();

  // Dialog edit states
  const [editingDceId, setEditingDceId] = useState<string | null>(null);
  const [editHeadValue, setEditHeadValue] = useState('');
  const [editPerDayValue, setEditPerDayValue] = useState('');
  const [editStartDateVal, setEditStartDateVal] = useState('');
  const [editRemarksValue, setEditRemarksValue] = useState('');

  // Draft inputs controllers
  const dceStartDate = drafts.dce?.startDate || getTodayStr();
  const dceCostHead = drafts.dce?.costHead || 'Rig Depreciation';
  const dceCustomHead = drafts.dce?.customCostHead || '';
  const dcePerDayCost = drafts.dce?.perDayCost || '';
  const dceStatus = drafts.dce?.status || 'Active';
  const dceRemarks = drafts.dce?.remarks || '';

  // Filter site specific standing cost logs
  const siteDceEntries = dceEntries.filter(e => e.site_id === activeSiteId);
  const totalAccruedDceCost = siteDceEntries.reduce((sum, e) => sum + getDceTotal(e), 0);
  const activeDceItems = siteDceEntries.filter(e => e.status === 'Active');
  const activeStandingHoldCost = activeDceItems.reduce((sum, e) => sum + e.per_day_cost, 0);

  const handleSubmitDce = (e: React.FormEvent) => {
    e.preventDefault();
    const costHeadName = dceCostHead === 'Other' ? dceCustomHead.trim() : dceCostHead;
    if (!costHeadName) {
      addToast('Please enter a description for the Daily Cost Head', 'error');
      return;
    }
    const perDayAmt = parseFloat(dcePerDayCost);
    if (isNaN(perDayAmt) || perDayAmt <= 0) {
      addToast('Per day cost must be a positive number', 'error');
      return;
    }

    addDceEntry({
      cost_head: costHeadName,
      per_day_cost: perDayAmt,
      start_date: dceStartDate,
      status: dceStatus,
      remarks: dceRemarks.trim()
    });

    // Reset draft fields
    updateDraft('dce', 'startDate', getTodayStr());
    updateDraft('dce', 'costHead', 'Rig Depreciation');
    updateDraft('dce', 'customCostHead', '');
    updateDraft('dce', 'perDayCost', '');
    updateDraft('dce', 'status', 'Active');
    updateDraft('dce', 'remarks', '');
  };

  const handleDceExcelExport = () => {
    if (!activeSite) return;
    exportDceToExcel(siteDceEntries, activeSite.name, getDceActiveDays, getDceTotal);
    addToast('DCA standing cost records exported successfully', 'success');
  };

  return (
    <div id="dce-page" className="space-y-6 md:space-y-8 animate-fade-in text-gray-900 dark:text-gray-100 font-sans">
      
      {/* DCA Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-1.5 border-b border-gray-100 dark:border-slate-800">
        <div>
          <span className="text-[10px] uppercase font-bold tracking-wider text-blue-500 dark:text-blue-400 block mb-1">
            Standing Cost intelligence (DCA)
          </span>
          <h2 className="font-sans font-bold text-2xl tracking-tight text-gray-900 dark:text-white">
            {activeSite?.name || "Loading site..."}
          </h2>
        </div>
        <div className="flex items-center gap-3 flex-wrap">
          <div className="bg-white dark:bg-slate-900 border border-gray-200/95 dark:border-slate-800 px-4 py-2.5 rounded-xl text-right shrink-0">
            <span className="text-[10px] text-gray-400 block font-semibold uppercase mb-0.5">
              Current Daily Holding Cost
            </span>
            <span className="font-sans font-bold text-lg text-emerald-600 dark:text-emerald-400 block">
              ₹{activeStandingHoldCost.toLocaleString('en-IN')}/day
            </span>
          </div>
          <div className="bg-white dark:bg-slate-900 border border-gray-200/95 dark:border-slate-800 px-4 py-2 rounded-xl text-right shrink-0">
            <span className="text-[10px] text-gray-400 block font-semibold uppercase mb-0.5">
              Total Standing Cost Accrued
            </span>
            <span className="font-sans font-bold text-lg text-gray-950 dark:text-white block">
              ₹{totalAccruedDceCost.toLocaleString('en-IN')}
            </span>
            <span className="text-[9px] text-gray-400 font-medium block">
              Accrued over all days
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* DCA Entry Card Container */}
        <div className="lg:col-span-5 bg-white dark:bg-slate-900 border border-gray-200/90 dark:border-slate-800 rounded-[24px] p-6 shadow-xs">
          <h2 className="text-lg font-bold mb-4 flex items-center gap-2 text-gray-950 dark:text-white">
            <span className="w-1.5 h-6 bg-blue-500 rounded-full"></span>
            <span>DCA Entry</span>
          </h2>

          <form id="form-dce-entry" onSubmit={handleSubmitDce} className="space-y-4">
            
            {/* Start Date */}
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-1.5">
                Start Date
              </label>
              <div className="relative group">
                <input
                  id="input-dce-start-date"
                  type="date"
                  required
                  disabled={!activeSite}
                  value={dceStartDate}
                  onChange={(e) => updateDraft('dce', 'startDate', e.target.value)}
                  onClick={(e) => {
                    try { e.currentTarget.showPicker(); } catch {}
                  }}
                  className="w-full h-11 pl-11 pr-4 rounded-xl border border-gray-200 dark:border-slate-700 bg-transparent text-gray-950 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500/35 focus:border-blue-500 text-sm font-medium relative z-10 cursor-pointer hover:border-gray-300 dark:hover:border-slate-600 transition-all [color-scheme:light] dark:[color-scheme:dark]"
                />
                <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-400 z-0 transition-colors w-4 h-4" />
              </div>
            </div>

            {/* Cost head category selector */}
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-1.5">
                Daily Cost Head
              </label>
              <select
                required
                disabled={!activeSite}
                value={dceCostHead}
                onChange={(e) => {
                  updateDraft('dce', 'costHead', e.target.value);
                  if (e.target.value !== 'Other') {
                    updateDraft('dce', 'customCostHead', '');
                  }
                }}
                className="w-full h-11 px-4 rounded-xl border border-gray-200 dark:border-slate-700 bg-transparent text-gray-950 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500/35 focus:border-blue-500 text-sm font-semibold cursor-pointer disabled:opacity-50"
              >
                {DCA_COST_HEAD_OPTIONS.map((option) => (
                  <option key={option} value={option} className="bg-white dark:bg-slate-900 text-sm font-semibold">
                    {option === 'Other' ? 'Other Description (Custom)' : option}
                  </option>
                ))}
              </select>
            </div>

            {/* Custom Description (Only shown when Other chosen) */}
            {dceCostHead === 'Other' && (
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-1.5">
                  Describe Standing Cost
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Generators fuels running cost"
                  value={dceCustomHead}
                  onChange={(e) => updateDraft('dce', 'customCostHead', e.target.value)}
                  className="w-full h-11 px-4 rounded-xl border border-gray-200 dark:border-slate-700 bg-transparent text-gray-950 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500/35 focus:border-blue-500 text-sm font-semibold"
                />
              </div>
            )}

            {/* Per Day Cost Price */}
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-1.5">
                Per Day Cost (₹/day)
              </label>
              <div className="relative">
                <input
                  id="input-dce-per-day"
                  type="number"
                  required
                  min="1"
                  disabled={!activeSite}
                  placeholder={activeSite ? "e.g. 1500" : "Please create a site first"}
                  value={dcePerDayCost}
                  onChange={(e) => updateDraft('dce', 'perDayCost', e.target.value)}
                  className="w-full h-11 px-4 rounded-xl border border-gray-200 dark:border-slate-700 bg-transparent text-gray-950 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500/35 focus:border-blue-500 text-sm font-semibold disabled:opacity-50"
                />
                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">
                  ₹
                </div>
              </div>
            </div>

            {/* Optional Remarks */}
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">
                Remarks / Invoices
              </label>
              <textarea
                id="input-dce-remarks"
                rows={2}
                disabled={!activeSite}
                placeholder={activeSite ? "Maintenance dates, lease agreements, operators info details..." : "Please create a site first"}
                value={dceRemarks}
                onChange={(e) => updateDraft('dce', 'remarks', e.target.value)}
                className="w-full p-4 rounded-xl border border-gray-200 dark:border-slate-700 bg-transparent text-gray-950 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500/35 focus:border-blue-500 text-xs font-semibold resize-none disabled:opacity-50"
              />
            </div>

            {/* Controllers */}
            <div className="flex gap-2.5 pt-2">
              <button
                type="submit"
                disabled={!activeSite}
                className="flex-1 h-11 rounded-xl bg-gray-950 hover:bg-gray-805 dark:hover:bg-gray-100 dark:bg-white dark:text-gray-950 hover:scale-[1.01] active:scale-[0.99] text-white font-bold text-xs uppercase tracking-wider transition-all cursor-pointer flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Submit
              </button>
              
              <button
                type="button"
                disabled={!activeSite || siteDceEntries.length === 0}
                onClick={handleDceExcelExport}
                className="w-11 h-11 rounded-xl border border-gray-200 dark:border-slate-700 hover:border-blue-500/50 hover:bg-blue-50/50 dark:hover:bg-blue-950/25 dark:hover:border-blue-500/30 hover:text-blue-600 dark:hover:text-blue-400 text-gray-700 dark:text-gray-200 bg-white dark:bg-slate-900 shadow-xs hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed shrink-0"
                title="Download DCA Ledger"
              >
                <Download className="w-5 h-5" />
              </button>
            </div>

          </form>
        </div>

        {/* List ledger of registered Daily Cost of Equipment elements */}
        <div className="lg:col-span-12 xl:col-span-7 bg-white dark:bg-slate-900 border border-gray-200/90 dark:border-slate-800 rounded-[24px] p-6 shadow-xs">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold flex items-center gap-2 text-gray-950 dark:text-white">
              <span className="w-1.5 h-6 bg-blue-500 rounded-full"></span>
              <span>Rig Holding Cost Ledger</span>
            </h2>
            <span className="text-[10px] bg-slate-100 dark:bg-slate-800 text-slate-500 px-2 py-0.5 rounded font-mono font-bold uppercase tracking-wider">
              {siteDceEntries.length} Cost Groups
            </span>
          </div>

          <div className="border border-gray-100 dark:border-slate-800 rounded-xl overflow-hidden">
            <div className="grid grid-cols-[1.1fr_1.4fr_1.1fr_1fr_1.1fr_1.2fr_135px] bg-gray-50/70 dark:bg-slate-800/60 p-3 text-[11px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider text-left border-b border-gray-150 dark:border-slate-800">
              <div>Start Date</div>
              <div>Standing Head</div>
              <div className="text-right">Rate/Day</div>
              <div>Status</div>
              <div className="text-right">Active Days</div>
              <div className="text-right">Accrued (₹)</div>
              <div className="text-center">Control Actions</div>
            </div>

            <div className="divide-y divide-gray-150 dark:divide-slate-800 max-h-[460px] overflow-y-auto">
              {siteDceEntries.length === 0 ? (
                <div className="p-8 text-center text-xs text-gray-400 dark:text-gray-500 font-bold leading-relaxed">
                  No standing cost elements attached to this rig yet.
                </div>
              ) : (
                [...siteDceEntries]
                  .sort((a, b) => b.start_date.localeCompare(a.start_date))
                  .map((item, idx) => {
                    const revDate = item.start_date.split('-').reverse().join('/');
                    const activeDays = getDceActiveDays(item);
                    const totalCost = getDceTotal(item);
                    const isEditing = editingDceId === item.id;

                    return (
                      <div 
                        key={item.id}
                        className="grid grid-cols-[1.1fr_1.4fr_1.1fr_1fr_1.1fr_1.2fr_135px] p-2.5 text-xs font-semibold text-gray-700 dark:text-gray-300 items-center hover:bg-gray-50/45 dark:hover:bg-slate-800/15 transition-colors"
                      >
                        <div>{revDate}</div>

                        {isEditing ? (
                          <>
                            <div className="pr-1">
                              <input
                                type="text"
                                value={editHeadValue}
                                onChange={(e) => setEditHeadValue(e.target.value)}
                                className="w-full h-8 px-1.5 text-xs border border-gray-200 dark:border-slate-700 rounded bg-white dark:bg-slate-900 focus:outline-none"
                              />
                            </div>
                            <div className="px-1">
                              <input
                                type="number"
                                value={editPerDayValue}
                                onChange={(e) => setEditPerDayValue(e.target.value)}
                                className="w-full h-8 text-right px-1.5 text-xs border border-gray-200 dark:border-slate-700 rounded bg-white dark:bg-slate-900 focus:outline-none"
                              />
                            </div>
                            <div></div>
                            <div></div>
                            <div></div>
                          </>
                        ) : (
                          <>
                            <div className="font-bold text-gray-900 dark:text-white truncate pr-1.5" title={item.cost_head}>
                              {item.cost_head}
                            </div>
                            <div className="text-right font-mono text-gray-500 pr-2">
                              ₹{item.per_day_cost}/d
                            </div>
                            <div>
                              {item.status === 'Active' && (
                                <span className="bg-[#ECFDF5] dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 text-[9px] px-2 py-0.5 rounded-full uppercase tracking-wider font-bold">
                                  ● Active
                                </span>
                              )}
                              {item.status === 'Paused' && (
                                <span className="bg-[#FFFBEB] dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 text-[9px] px-2 py-0.5 rounded-full uppercase tracking-wider font-bold">
                                  ● Paused
                                </span>
                              )}
                              {item.status === 'Stopped' && (
                                <span className="bg-[#FEF2F2] dark:bg-rose-950/45 text-rose-605 dark:text-rose-400 text-[9px] px-2 py-0.5 rounded-full uppercase tracking-wider font-bold">
                                  ● Stopped
                                </span>
                              )}
                            </div>
                            <div className="text-right font-mono pr-2">{activeDays} days</div>
                            <div className="text-right font-mono font-bold pr-2 text-gray-900 dark:text-white">
                              ₹{totalCost.toLocaleString('en-IN')}
                            </div>
                          </>
                        )}

                        {/* Status controllers pause / resume / stop and inline edits */}
                        <div className="flex items-center justify-center gap-1">
                          {isEditing ? (
                            <>
                              <button
                                type="button"
                                onClick={() => {
                                  const rate = parseFloat(editPerDayValue);
                                  if (isNaN(rate) || rate <= 0) {
                                    addToast('Daily cost rate must be positive', 'error');
                                    return;
                                  }
                                  if (!editHeadValue.trim()) {
                                    addToast('Standing head cannot be empty', 'error');
                                    return;
                                  }
                                  editDceEntry({
                                    ...item,
                                    cost_head: editHeadValue.trim(),
                                    per_day_cost: rate
                                  });
                                  setEditingDceId(null);
                                }}
                                className="p-1 text-emerald-600 hover:text-emerald-500 hover:bg-emerald-50 dark:hover:bg-emerald-950/20 rounded transition-colors"
                              >
                                <Check className="w-4 h-4" />
                              </button>
                              <button
                                type="button"
                                onClick={() => setEditingDceId(null)}
                                className="p-1 text-rose-500 hover:text-rose-450 hover:bg-rose-50 dark:hover:bg-rose-950/20 rounded transition-colors"
                              >
                                <X className="w-4 h-4" />
                              </button>
                            </>
                          ) : (
                            <>
                              {item.status === 'Active' && (
                                <button
                                  type="button"
                                  onClick={() => toggleDceStatus(item.id, 'pause')}
                                  className="p-1 text-amber-500 hover:text-amber-400 hover:bg-amber-50 dark:hover:bg-amber-950/20 rounded transition-colors cursor-pointer"
                                  title="Pause Standing Cost Accounting"
                                >
                                  <Pause className="w-3.5 h-3.5" />
                                </button>
                              )}
                              {item.status === 'Paused' && (
                                <button
                                  type="button"
                                  onClick={() => toggleDceStatus(item.id, 'resume')}
                                  className="p-1 text-emerald-605 hover:text-emerald-500 hover:bg-emerald-50 dark:hover:bg-emerald-950/20 rounded transition-colors cursor-pointer"
                                  title="Unpause & Resume active accounting"
                                >
                                  <Play className="w-3.5 h-3.5" />
                                </button>
                              )}
                              {item.status !== 'Stopped' && (
                                <button
                                  type="button"
                                  onClick={() => toggleDceStatus(item.id, 'stop')}
                                  className="p-1 text-rose-500 hover:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/20 rounded transition-colors cursor-pointer"
                                  title="Stop, freeze operations and lock cost details"
                                >
                                  <Square className="w-3.5 h-3.5" />
                                </button>
                              )}
                              <button
                                type="button"
                                disabled={item.status === 'Stopped'}
                                onClick={() => {
                                  setEditingDceId(item.id);
                                  setEditHeadValue(item.cost_head);
                                  setEditPerDayValue(item.per_day_cost.toString());
                                }}
                                className="p-1 text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-slate-800 rounded transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                                title="Edit Head"
                              >
                                <Edit className="w-3.5 h-3.5" />
                              </button>
                              <button
                                type="button"
                                onClick={() => deleteDceEntry(item.id)}
                                className="p-1 text-gray-400 hover:text-rose-600 dark:hover:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-905/20 rounded transition-colors"
                                title="Delete Block"
                              >
                                <Trash className="w-3.5 h-3.5" />
                              </button>
                            </>
                          )}
                        </div>

                      </div>
                    );
                  })
              )}
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};
