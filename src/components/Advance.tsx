import React, { useState } from 'react';
import { useDrillTrack, getTodayStr } from '../context/DrillTrackContext';
import { exportAdvancesToExcel } from '../utils/exportUtils';
import { 
  Plus, 
  Calendar, 
  Download, 
  Check, 
  X, 
  Edit, 
  Trash, 
  TrendingUp,
  Info
} from 'lucide-react';

export const Advance: React.FC = () => {
  const {
    activeSiteId,
    activeSite,
    advanceEntries,
    addAdvanceEntry,
    editAdvanceEntry,
    deleteAdvanceEntry,
    drafts,
    updateDraft,
    addToast
  } = useDrillTrack();

  // inline row editing states
  const [editingAdvanceId, setEditingAdvanceId] = useState<string | null>(null);
  const [editAmountVal, setEditAmountVal] = useState('');
  const [editRemarksVal, setEditRemarksVal] = useState('');

  // Settle draft inputs
  const advanceDate = drafts.advance?.date || getTodayStr();
  const advanceAmount = drafts.advance?.amount || '';
  const advanceRemarks = drafts.advance?.remarks || '';

  // Filter site relevant cash advance documents
  const siteAdvances = advanceEntries.filter(e => e.siteId === activeSiteId);
  const totalAdvancesSum = siteAdvances.reduce((sum, e) => sum + e.amount, 0);

  const handleSubmitAdvance = (e: React.FormEvent) => {
    e.preventDefault();
    const amountNum = parseFloat(advanceAmount);
    if (isNaN(amountNum) || amountNum <= 0) {
      addToast('Amount must be a positive number', 'error');
      return;
    }
    addAdvanceEntry(advanceDate, amountNum, advanceRemarks);

    // reset fields
    updateDraft('advance', 'amount', '');
    updateDraft('advance', 'remarks', '');
  };

  const handleAdvanceExcelExport = () => {
    if (!activeSite) return;
    exportAdvancesToExcel(siteAdvances, activeSite.name);
    addToast('Site Advance register successfully bundled and downloaded.', 'success');
  };

  return (
    <div id="advance-page" className="space-y-6 md:space-y-8 animate-fade-in text-gray-900 dark:text-gray-100 font-sans">
      
      {/* Advance Title section */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-1.5 border-b border-gray-100 dark:border-slate-800">
        <div>
          <span className="text-[10px] uppercase font-bold tracking-wider text-blue-500 dark:text-blue-400 block mb-1">
            Advance Register
          </span>
          <h2 className="font-sans font-bold text-2xl tracking-tight text-gray-900 dark:text-white">
            {activeSite?.name || "Loading site..."}
          </h2>
        </div>
        <div className="flex items-center gap-2">
          <div className="bg-white dark:bg-slate-900 border border-gray-200/95 dark:border-slate-800 px-4 py-2.5 rounded-xl text-right shrink-0">
            <span className="text-[10px] text-gray-400 block font-semibold uppercase">
              Total Advance Recorded
            </span>
            <span className="font-sans font-bold text-lg text-emerald-605 dark:text-emerald-400">
              ₹{totalAdvancesSum.toLocaleString('en-IN')}
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Form add advances card */}
        <div className="lg:col-span-5 bg-white dark:bg-slate-900 border border-gray-200/90 dark:border-slate-800 rounded-[24px] p-6 shadow-xs">
          <h2 className="text-lg font-bold mb-4 flex items-center gap-2 text-gray-950 dark:text-white">
            <span className="w-1.5 h-6 bg-[#2563EB] rounded-full"></span>
            <span>Add Site Advance</span>
          </h2>

          <form id="form-advance-entry" onSubmit={handleSubmitAdvance} className="space-y-4">
            
            {/* Issue Date */}
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">
                Issue Date
              </label>
              <div className="relative group">
                <input
                  id="input-advance-date"
                  type="date"
                  required
                  disabled={!activeSite}
                  value={advanceDate}
                  onChange={(e) => updateDraft('advance', 'date', e.target.value)}
                  onClick={(e) => {
                    try { e.currentTarget.showPicker(); } catch {}
                  }}
                  className="w-full h-11 pl-11 pr-4 rounded-xl border border-gray-200 dark:border-slate-700 bg-transparent text-gray-950 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500/35 focus:border-blue-500 text-sm font-medium relative z-10 cursor-pointer hover:border-gray-300 dark:hover:border-slate-600 transition-all [color-scheme:light] dark:[color-scheme:dark] disabled:opacity-50"
                />
                <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-400 z-0 transition-colors w-4 h-4" />
              </div>
            </div>

            {/* Advance Amount */}
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">
                Advance Amount (₹)
              </label>
              <div className="relative">
                <input
                  id="input-advance-amount"
                  type="number"
                  required
                  disabled={!activeSite}
                  min="1"
                  placeholder={activeSite ? "Enter amount issued (INR)" : "Please create a site first"}
                  value={advanceAmount}
                  onChange={(e) => updateDraft('advance', 'amount', e.target.value)}
                  className="w-full h-11 px-4 rounded-xl border border-gray-200 dark:border-slate-700 bg-transparent text-gray-950 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500/35 focus:border-blue-500 text-sm font-semibold disabled:opacity-50"
                />
                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">
                  ₹
                </div>
              </div>
            </div>

            {/* Remarks */}
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">
                Remarks / Receipts
              </label>
              <textarea
                id="input-advance-remarks"
                rows={2}
                disabled={!activeSite}
                placeholder={activeSite ? "Purpose, Receiver Name" : "Please create a site first"}
                value={advanceRemarks}
                onChange={(e) => updateDraft('advance', 'remarks', e.target.value)}
                className="w-full p-4 rounded-xl border border-gray-200 dark:border-slate-700 bg-transparent text-gray-950 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500/35 focus:border-blue-500 text-xs font-semibold resize-none disabled:opacity-50"
              />
            </div>

            {/* Controllers */}
            <div className="flex gap-2.5 pt-2">
              <button
                type="submit"
                disabled={!activeSite}
                className="flex-1 h-11 rounded-xl bg-gray-950 hover:bg-gray-805 dark:hover:bg-gray-100 dark:bg-white dark:text-gray-950 hover:scale-[1.01] active:scale-[0.99] text-white font-bold text-xs uppercase tracking-wider transition-all cursor-pointer flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                SUBMIT ENTRY
              </button>
              
              <button
                type="button"
                disabled={!activeSite || siteAdvances.length === 0}
                onClick={handleAdvanceExcelExport}
                className="w-11 h-11 rounded-xl border border-gray-200 dark:border-slate-700 hover:border-blue-500/50 hover:bg-blue-50/50 dark:hover:bg-blue-950/25 dark:hover:border-blue-500/30 hover:text-blue-600 dark:hover:text-blue-400 text-gray-700 dark:text-gray-200 bg-white dark:bg-slate-900 shadow-xs hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed shrink-0"
                title="Download Advance Ledger"
              >
                <Download className="w-5 h-5" />
              </button>
            </div>

          </form>
        </div>

        {/* List of advances ledger */}
        <div className="lg:col-span-12 xl:col-span-7 bg-white dark:bg-slate-900 border border-gray-200/90 dark:border-slate-800 rounded-[24px] p-6 shadow-xs">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold flex items-center gap-2 text-gray-950 dark:text-white">
              <span className="w-1.5 h-6 bg-[#2563EB] rounded-full"></span>
              <span>Advance Log Register</span>
            </h2>
            <span className="text-[10px] bg-slate-100 dark:bg-slate-800 text-slate-500 px-2 py-0.5 rounded font-mono font-bold uppercase tracking-wider">
              {siteAdvances.length} Logs
            </span>
          </div>

          <div className="border border-gray-100 dark:border-slate-800 rounded-xl overflow-hidden">
            <div className="grid grid-cols-[1.3fr_1.4fr_2.5fr_100px] bg-gray-50/70 dark:bg-slate-800/60 p-3 text-[11px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider text-left border-b border-gray-150 dark:border-slate-800">
              <div>Issue Date</div>
              <div className="text-right">Issued Cash (₹)</div>
              <div>Allocation / Receipts details</div>
              <div className="text-center">Actions</div>
            </div>

            <div className="divide-y divide-gray-150 dark:divide-slate-800 max-h-96 overflow-y-auto">
              {siteAdvances.length === 0 ? (
                <div className="p-8 text-center text-xs text-gray-400 dark:text-gray-500 font-semibold leading-relaxed">
                  No advance issued to this workspace yet. Submit to document allocations.
                </div>
              ) : (
                [...siteAdvances]
                  .sort((a, b) => b.date.localeCompare(a.date))
                  .map((item, idx) => {
                    const revDate = item.date.split('-').reverse().join('/');
                    const isEditing = editingAdvanceId === item.id;

                    return (
                      <div 
                        key={item.id}
                        className="grid grid-cols-[1.3fr_1.4fr_2.5fr_100px] p-3 text-xs font-semibold text-gray-700 dark:text-gray-300 items-center hover:bg-gray-50/50 dark:hover:bg-slate-800/20 transition-colors"
                      >
                        <div>{revDate}</div>

                        {isEditing ? (
                          <>
                            <div className="px-1 text-right">
                              <input
                                type="number"
                                value={editAmountVal}
                                onChange={(e) => setEditAmountVal(e.target.value)}
                                className="w-full h-8 text-right px-1.5 border border-gray-250 dark:border-slate-700 rounded bg-white dark:bg-slate-900 font-mono text-xs focus:outline-none"
                              />
                            </div>
                            <div className="px-1">
                              <input
                                type="text"
                                value={editRemarksVal}
                                onChange={(e) => setEditRemarksVal(e.target.value)}
                                className="w-full h-8 px-1.5 border border-gray-250 dark:border-slate-700 rounded bg-white dark:bg-slate-900 text-xs focus:outline-none"
                              />
                            </div>
                          </>
                        ) : (
                          <>
                            <div className="text-right font-mono font-bold text-emerald-600 dark:text-emerald-400 pr-3">
                              ₹{item.amount.toLocaleString('en-IN')}
                            </div>
                            <div className="truncate text-gray-450 dark:text-gray-400 pr-1" title={item.remarks}>
                              {item.remarks || '-'}
                            </div>
                          </>
                        )}

                        <div className="flex items-center justify-center gap-1.5">
                          {isEditing ? (
                            <>
                              <button
                                type="button"
                                onClick={() => {
                                  const parsedVal = parseFloat(editAmountVal);
                                  if (isNaN(parsedVal) || parsedVal <= 0) {
                                    addToast('Amount must be a positive number', 'error');
                                    return;
                                  }
                                  editAdvanceEntry({
                                    ...item,
                                    amount: parsedVal,
                                    remarks: editRemarksVal.trim()
                                  });
                                  setEditingAdvanceId(null);
                                }}
                                className="p-1 text-emerald-600 hover:text-emerald-500 hover:bg-emerald-50 dark:hover:bg-emerald-950/20 rounded transition-colors"
                              >
                                <Check className="w-4 h-4" />
                              </button>
                              <button
                                type="button"
                                onClick={() => setEditingAdvanceId(null)}
                                className="p-1 text-rose-500 hover:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/25 rounded transition-colors"
                              >
                                <X className="w-4 h-4" />
                              </button>
                            </>
                          ) : (
                            <>
                              <button
                                type="button"
                                onClick={() => {
                                  setEditingAdvanceId(item.id);
                                  setEditAmountVal(item.amount.toString());
                                  setEditRemarksVal(item.remarks);
                                }}
                                className="p-1 text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-slate-800 rounded transition-colors cursor-pointer"
                              >
                                <Edit className="w-3.5 h-3.5" />
                              </button>
                              <button
                                type="button"
                                onClick={() => deleteAdvanceEntry(item.id)}
                                className="p-1 text-gray-400 hover:text-rose-600 dark:hover:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/20 rounded transition-colors"
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
