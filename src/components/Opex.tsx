import React, { useState } from 'react';
import { useDrillTrack, getTodayStr } from '../context/DrillTrackContext';
import { exportOpexToExcel } from '../utils/exportUtils';
import { 
  Plus, 
  Calendar, 
  Download, 
  Edit, 
  Trash, 
  Check, 
  X, 
  FolderPlus,
  PlusCircle,
  AlertTriangle
} from 'lucide-react';

export const Opex: React.FC = () => {
  const {
    activeSiteId,
    activeSite,
    categories,
    expenseHeads,
    opexEntries,
    addOpexEntry,
    editOpexEntry,
    deleteOpexEntry,
    addCategory,
    deleteCategory,
    addExpenseHead,
    deleteExpenseHead,
    drafts,
    updateDraft,
    addToast
  } = useDrillTrack();

  // Dialog controlling states
  const [showCatModal, setShowCatModal] = useState(false);
  const [showHeadModal, setShowHeadModal] = useState(false);
  
  // Taxonomies draft text holds
  const [newCatName, setNewCatName] = useState('');
  const [newHeadName, setNewHeadName] = useState('');

  // Row inline editing helpers
  const [editingOpexId, setEditingOpexId] = useState<string | null>(null);
  const [editAmountVal, setEditAmountVal] = useState('');
  const [editRemarksVal, setEditRemarksVal] = useState('');
  const [editCatIdVal, setEditCatIdVal] = useState('');
  const [editHeadIdVal, setEditHeadIdVal] = useState('');

  // Settle draft inputs for opex
  const opexDate = drafts.opex?.date || getTodayStr();
  const opexCatId = drafts.opex?.categoryId || '';
  const opexHeadId = drafts.opex?.headId || '';
  const opexAmount = drafts.opex?.amount || '';
  const opexRemarks = drafts.opex?.remarks || '';

  // Filter opex logs belonging to the active site
  const siteOpexEntries = opexEntries.filter(e => e.siteId === activeSiteId);
  const siteOpexTotal = siteOpexEntries.reduce((sum, e) => sum + e.amount, 0);

  // Heads list associated with current selected category
  const filteredCategoryHeads = expenseHeads.filter(h => h.categoryId === opexCatId);

  const handleOpexSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const amountNum = parseFloat(opexAmount);
    if (isNaN(amountNum) || amountNum <= 0) {
      addToast('Please enter a positive expense payment amount', 'error');
      return;
    }
    if (!opexCatId) {
      addToast('Please select a valid expense category', 'error');
      return;
    }
    if (!opexHeadId) {
      addToast('Please select a valid expense head', 'error');
      return;
    }

    addOpexEntry({
      id: '',
      siteId: activeSiteId,
      categoryId: opexCatId,
      expenseHeadId: opexHeadId,
      amount: amountNum,
      date: opexDate,
      remarks: opexRemarks.trim()
    });

    // Reset draft fields
    updateDraft('opex', 'amount', '');
    updateDraft('opex', 'remarks', '');
  };

  const handleCreateCategory = async (e: React.FormEvent) => {
    e.preventDefault();
    const cat = await addCategory(newCatName);
    if (cat) {
      updateDraft('opex', 'categoryId', cat.id);
      updateDraft('opex', 'headId', '');
      setNewCatName('');
      setShowCatModal(false);
    }
  };

  const handleCreateExpenseHead = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!opexCatId) {
      addToast('Category must be selected first to append expense head', 'error');
      return;
    }
    const head = await addExpenseHead(opexCatId, newHeadName);
    if (head) {
      updateDraft('opex', 'headId', head.id);
      setNewHeadName('');
      setShowHeadModal(false);
    }
  };

  const handleOpexExcelExport = () => {
    if (!activeSite) return;
    exportOpexToExcel(siteOpexEntries, categories, expenseHeads, activeSite.name);
    addToast('OPEX expense logsheet successfully compiled and downloaded.', 'success');
  };

  return (
    <div id="opex-page" className="space-y-6 md:space-y-8 animate-fade-in text-gray-900 dark:text-gray-100 font-sans">
      
      {/* Imprest Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-1.5 border-b border-gray-100 dark:border-slate-800">
        <div>
          <span className="text-[10px] uppercase font-bold tracking-wider text-blue-500 dark:text-blue-400 block mb-1">
            Operational Expenses (OPEX)
          </span>
          <h2 className="font-sans font-bold text-2xl tracking-tight text-gray-900 dark:text-white">
            {activeSite?.name || "Loading site..."}
          </h2>
        </div>
        <div className="flex items-center gap-2">
          <div className="bg-white dark:bg-slate-900 border border-gray-200/95 dark:border-slate-800 px-4 py-2.5 rounded-xl text-right shrink-0">
            <span className="text-[10px] text-gray-400 block font-semibold uppercase">
              Total OPEX ({activeSite?.name || "Site"})
            </span>
            <span className="font-sans font-bold text-lg text-gray-950 dark:text-white">
              ₹{siteOpexTotal.toLocaleString('en-IN')}
            </span>
          </div>
        </div>
      </div>

      {/* Forms & Table display Grid columns */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Daily OPEX Entry Card form */}
        <div className="lg:col-span-5 bg-white dark:bg-slate-900 border border-gray-200/90 dark:border-slate-800 rounded-[24px] p-6 shadow-xs">
          <h2 className="text-lg font-bold mb-4 flex items-center gap-2 text-gray-950 dark:text-white">
            <span className="w-1.5 h-6 bg-[#2563EB] rounded-full"></span>
            <span>Daily OPEX Entry</span>
          </h2>

          <form id="form-opex-entry" onSubmit={handleOpexSubmit} className="space-y-4">
            
            {/* 1. Date */}
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">
                Expense Date
              </label>
              <div className="relative group">
                <input
                  id="input-opex-date"
                  type="date"
                  required
                  value={opexDate}
                  onChange={(e) => updateDraft('opex', 'date', e.target.value)}
                  onClick={(e) => {
                    try { e.currentTarget.showPicker(); } catch {}
                  }}
                  className="w-full h-11 pl-11 pr-4 rounded-xl border border-gray-200 dark:border-slate-700 bg-transparent text-gray-950 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500/35 focus:border-blue-500 text-sm font-medium relative z-10 cursor-pointer hover:border-gray-300 dark:hover:border-slate-600 transition-all [color-scheme:light] dark:[color-scheme:dark]"
                />
                <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-400 z-0 transition-colors w-4 h-4" />
              </div>
            </div>

            {/* 2. Category selection */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                  Expense Category
                </label>
                <button
                  id="btn-trigger-add-category"
                  type="button"
                  disabled={!activeSite}
                  onClick={() => setShowCatModal(true)}
                  className="text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <PlusCircle className="w-3.5 h-3.5" />
                  <span>New Category</span>
                </button>
              </div>
              <select
                id="select-opex-category"
                required
                disabled={!activeSite}
                value={opexCatId}
                onChange={(e) => {
                  updateDraft('opex', 'categoryId', e.target.value);
                  updateDraft('opex', 'headId', '');
                }}
                className="w-full h-11 px-4 rounded-xl border border-gray-200 dark:border-slate-700 bg-transparent text-gray-950 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500/35 focus:border-blue-500 text-sm font-semibold cursor-pointer disabled:opacity-50"
              >
                <option value="" className="bg-white dark:bg-slate-900 text-gray-500 dark:text-gray-400 text-sm font-semibold">Choose Expense Category</option>
                {categories.map(cat => (
                  <option key={cat.id} className="bg-white dark:bg-slate-900 text-gray-900 dark:text-white text-sm font-semibold" value={cat.id}>
                    {cat.name}
                  </option>
                ))}
              </select>
            </div>

            {/* 3. Expense Head selection */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                  Expense Head Item
                </label>
                <button
                  id="btn-trigger-add-head"
                  type="button"
                  onClick={() => {
                    if (!opexCatId) {
                      addToast('Please select a Category first', 'error');
                      return;
                    }
                    setShowHeadModal(true);
                  }}
                  className="text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={!activeSite || !opexCatId}
                >
                  <PlusCircle className="w-3.5 h-3.5" />
                  <span>New Head</span>
                </button>
              </div>
              <select
                id="select-opex-head"
                required
                disabled={!activeSite || !opexCatId}
                value={opexHeadId}
                onChange={(e) => updateDraft('opex', 'headId', e.target.value)}
                className="w-full h-11 px-4 rounded-xl border border-gray-200 dark:border-slate-700 bg-transparent text-gray-950 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500/35 focus:border-blue-500 text-sm font-semibold cursor-pointer disabled:opacity-50"
              >
                <option value="" className="bg-white dark:bg-slate-900 text-gray-500 dark:text-gray-400 text-sm font-semibold">
                  {opexCatId ? "Choose Expense Head" : "Select Category first"}
                </option>
                {filteredCategoryHeads.map(head => (
                  <option key={head.id} className="bg-white dark:bg-slate-900 text-gray-900 dark:text-white text-sm font-semibold" value={head.id}>
                    {head.name}
                  </option>
                ))}
              </select>
            </div>

            {/* 4. Payment Amount */}
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">
                Payment Amount (₹)
              </label>
              <div className="relative">
                <input
                  id="input-opex-amount"
                  type="number"
                  required
                  min="1"
                  disabled={!activeSite}
                  placeholder={activeSite ? "Enter expense value (INR)" : "Please create a site first"}
                  value={opexAmount}
                  onChange={(e) => updateDraft('opex', 'amount', e.target.value)}
                  className="w-full h-11 px-4 rounded-xl border border-gray-200 dark:border-slate-700 bg-transparent text-gray-950 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500/35 focus:border-blue-500 text-sm font-semibold disabled:opacity-50"
                />
                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">
                  ₹
                </div>
              </div>
            </div>

            {/* 5. Remarks */}
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">
                Remarks
              </label>
              <textarea
                id="input-opex-remarks"
                rows={2}
                disabled={!activeSite}
                placeholder={activeSite ? "Details of expense, receipts, party payees..." : "Please create a site first"}
                value={opexRemarks}
                onChange={(e) => updateDraft('opex', 'remarks', e.target.value)}
                className="w-full p-4 rounded-xl border border-gray-200 dark:border-slate-700 bg-transparent text-gray-950 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500/35 focus:border-blue-500 text-xs font-semibold resize-none disabled:opacity-50"
              />
            </div>

            {/* Submitions */}
            <div className="flex gap-2.5 pt-2">
              <button
                id="btn-opex-submit"
                type="submit"
                disabled={!activeSite}
                className="flex-1 h-11 rounded-xl bg-gray-950 hover:bg-gray-805 dark:hover:bg-gray-100 dark:bg-white dark:text-gray-950 hover:scale-[1.01] active:scale-[0.99] text-white font-bold text-xs uppercase tracking-wider transition-all cursor-pointer flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Submit Expense
              </button>
              
              <button
                id="btn-opex-download"
                type="button"
                disabled={!activeSite || siteOpexEntries.length === 0}
                onClick={handleOpexExcelExport}
                className="w-11 h-11 rounded-xl border border-gray-200 dark:border-slate-700 hover:border-blue-500/50 hover:bg-blue-50/50 dark:hover:bg-blue-950/25 dark:hover:border-blue-500/30 hover:text-blue-600 dark:hover:text-blue-400 text-gray-700 dark:text-gray-200 bg-white dark:bg-slate-900 shadow-xs hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed shrink-0"
                title="Download OPEX Ledger"
              >
                <Download className="w-5 h-5" />
              </button>
            </div>

          </form>
        </div>

        {/* Dynamic Ledger sheet */}
        <div className="lg:col-span-12 lg:order-last xl:col-span-7 bg-white dark:bg-slate-900 border border-gray-200 /90 dark:border-slate-800 rounded-[24px] p-6 shadow-xs">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold flex items-center gap-2 text-gray-950 dark:text-white">
              <span className="w-1.5 h-6 bg-[#2563EB] rounded-full"></span>
              <span>Ledger of Payments (OPEX)</span>
            </h2>
            <span className="text-[10px] bg-slate-100 dark:bg-slate-800 text-slate-500 px-2 py-0.5 rounded font-mono font-bold uppercase tracking-wider">
              {siteOpexEntries.length} Items
            </span>
          </div>

          <div className="border border-gray-100 dark:border-slate-800 rounded-xl overflow-hidden">
            {/* Headers row */}
            <div className="grid grid-cols-[1.2fr_1.fr_1.2fr_1.1fr_1.5fr_100px] bg-gray-50/70 dark:bg-slate-800/60 p-3 text-[11px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider text-left border-b border-gray-150 dark:border-slate-800">
              <div>Date</div>
              <div>Category</div>
              <div>Expense Head</div>
              <div className="text-right">Amount</div>
              <div>Remarks</div>
              <div className="text-center">Actions</div>
            </div>

            {/* Scrollable list content */}
            <div className="divide-y divide-gray-150 dark:divide-slate-800 max-h-96 overflow-y-auto">
              {siteOpexEntries.length === 0 ? (
                <div className="p-8 text-center text-xs text-gray-400 dark:text-gray-500 font-semibold leading-relaxed">
                  No direct OPEX items logged for this site yet. Fill the entry sheet to register records.
                </div>
              ) : (
                [...siteOpexEntries]
                  .sort((a, b) => b.date.localeCompare(a.date))
                  .map((item, idx) => {
                    const formattedDate = item.date.split('-').reverse().join('/');
                    const catName = categories.find(c => c.id === item.categoryId)?.name || 'Unknown';
                    const headName = expenseHeads.find(eh => eh.id === item.expenseHeadId)?.name || 'Unknown';
                    const isEditing = editingOpexId === item.id;

                    return (
                      <div 
                        key={item.id}
                        className="grid grid-cols-[1.2fr_1.fr_1.2fr_1.1fr_1.5fr_100px] p-3 text-xs font-semibold text-gray-700 dark:text-gray-300 items-center hover:bg-gray-50/50 dark:hover:bg-slate-800/20 transition-colors"
                      >
                        <div>{formattedDate}</div>
                        
                        {isEditing ? (
                          <>
                            <div>
                              <select
                                value={editCatIdVal}
                                onChange={(e) => {
                                  setEditCatIdVal(e.target.value);
                                  setEditHeadIdVal('');
                                }}
                                className="w-full h-8 text-xs px-1.5 border border-gray-200 dark:border-slate-700 rounded bg-white dark:bg-slate-900 focus:outline-none"
                              >
                                {categories.map(c => (
                                  <option key={c.id} value={c.id}>{c.name}</option>
                                ))}
                              </select>
                            </div>
                            <div className="pl-1.5">
                              <select
                                value={editHeadIdVal}
                                onChange={(e) => setEditHeadIdVal(e.target.value)}
                                className="w-full h-8 text-xs px-1.5 border border-gray-200 dark:border-slate-700 rounded bg-white dark:bg-slate-900 focus:outline-none"
                                disabled={!editCatIdVal}
                              >
                                {expenseHeads.filter(eh => eh.categoryId === editCatIdVal).map(eh => (
                                  <option key={eh.id} value={eh.id}>{eh.name}</option>
                                ))}
                              </select>
                            </div>
                            <div className="pl-1.5">
                              <input
                                type="number"
                                value={editAmountVal}
                                onChange={(e) => setEditAmountVal(e.target.value)}
                                className="w-full h-8 text-right px-1.5 border border-gray-200 dark:border-slate-700 rounded bg-white dark:bg-slate-900 font-mono text-xs focus:outline-none"
                              />
                            </div>
                            <div className="pl-1.5">
                              <input
                                type="text"
                                value={editRemarksVal}
                                onChange={(e) => setEditRemarksVal(e.target.value)}
                                className="w-full h-8 px-1.5 border border-gray-200 dark:border-slate-700 rounded bg-white dark:bg-slate-900 text-xs focus:outline-none"
                              />
                            </div>
                          </>
                        ) : (
                          <>
                            <div className="truncate text-gray-500 dark:text-gray-400 pr-1.5">{catName}</div>
                            <div className="truncate text-gray-900 dark:text-white font-bold pr-1.5">{headName}</div>
                            <div className="text-right font-mono font-bold text-gray-950 dark:text-white pr-2">
                              ₹{item.amount.toLocaleString('en-IN')}
                            </div>
                            <div className="truncate text-gray-400 dark:text-gray-550 pr-1" title={item.remarks}>
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
                                  const amt = parseFloat(editAmountVal);
                                  if (isNaN(amt) || amt <= 0) {
                                    addToast('Amount must be positive', 'error');
                                    return;
                                  }
                                  if (!editCatIdVal || !editHeadIdVal) {
                                    addToast('Taxonomy error: select category & head', 'error');
                                    return;
                                  }
                                  editOpexEntry({
                                    ...item,
                                    categoryId: editCatIdVal,
                                    expenseHeadId: editHeadIdVal,
                                    amount: amt,
                                    remarks: editRemarksVal.trim()
                                  });
                                  setEditingOpexId(null);
                                }}
                                className="p-1 text-emerald-600 hover:text-emerald-500 hover:bg-emerald-50 dark:hover:bg-emerald-900/10 rounded transition-colors"
                              >
                                <Check className="w-4 h-4" />
                              </button>
                              <button
                                type="button"
                                onClick={() => setEditingOpexId(null)}
                                className="p-1 text-rose-500 hover:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/10 rounded transition-colors"
                              >
                                <X className="w-4 h-4" />
                              </button>
                            </>
                          ) : (
                            <>
                              <button
                                type="button"
                                onClick={() => {
                                  setEditingOpexId(item.id);
                                  setEditCatIdVal(item.categoryId);
                                  setEditHeadIdVal(item.expenseHeadId);
                                  setEditAmountVal(item.amount.toString());
                                  setEditRemarksVal(item.remarks);
                                }}
                                className="p-1 text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-slate-800 rounded transition-colors"
                              >
                                <Edit className="w-3.5 h-3.5" />
                              </button>
                              <button
                                type="button"
                                onClick={() => deleteOpexEntry(item.id)}
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

      {/* --- TAXONOMY INLINE POPUPS MODALS --- */}

      {/* 1. Add Category Modal */}
      {showCatModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-gray-950/50 backdrop-blur-xs" onClick={() => setShowCatModal(false)}></div>
          <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 p-6 rounded-[28px] w-full max-w-sm shadow-2xl relative z-10 animate-scale-up">
            <h3 className="text-base font-bold text-gray-950 dark:text-white mb-4">Create Expense Category</h3>
            <form onSubmit={handleCreateCategory} className="space-y-4">
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-450 dark:text-gray-500 mb-2">
                  Category Name
                </label>
                <input
                  type="text"
                  required
                  autoFocus
                  placeholder="e.g. Consumables"
                  value={newCatName}
                  onChange={(e) => setNewCatName(e.target.value)}
                  className="w-full h-11 px-4 rounded-xl border border-gray-200 dark:border-slate-700 bg-transparent text-gray-950 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500/35 focus:border-blue-500 text-sm font-semibold"
                />
              </div>
              <div className="flex items-center gap-2.5 pt-2">
                <button
                  type="button"
                  onClick={() => setShowCatModal(false)}
                  className="flex-1 h-11 border border-gray-200 dark:border-slate-700 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-slate-800 rounded-xl text-xs font-bold uppercase cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 h-11 bg-gray-950 font-bold dark:bg-white dark:text-gray-950 text-white hover:opacity-90 rounded-xl text-xs uppercase cursor-pointer"
                >
                  Save Category
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* 2. Add Expense Head Modal */}
      {showHeadModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-gray-950/50 backdrop-blur-xs" onClick={() => setShowHeadModal(false)}></div>
          <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 p-6 rounded-[28px] w-full max-w-sm shadow-2xl relative z-10 animate-scale-up">
            <h3 className="text-base font-bold text-gray-950 dark:text-white mb-4">Create Expense Head</h3>
            <form onSubmit={handleCreateExpenseHead} className="space-y-4">
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-450 dark:text-gray-500 mb-2">
                  Category Linked
                </label>
                <div className="w-full h-11 px-4 rounded-xl bg-gray-50 dark:bg-slate-800 flex items-center border border-transparent text-xs font-bold text-gray-500 dark:text-gray-400 select-none">
                  {categories.find(c => c.id === opexCatId)?.name || 'Default'}
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-450 dark:text-gray-500 mb-2">
                  Head Name / Detail
                </label>
                <input
                  type="text"
                  required
                  autoFocus
                  placeholder="e.g. High Speed Diesel (HSD)"
                  value={newHeadName}
                  onChange={(e) => setNewHeadName(e.target.value)}
                  className="w-full h-11 px-4 rounded-xl border border-gray-200 dark:border-slate-700 bg-transparent text-gray-950 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500/35 focus:border-blue-500 text-sm font-semibold"
                />
              </div>
              <div className="flex items-center gap-2.5 pt-2">
                <button
                  type="button"
                  onClick={() => setShowHeadModal(false)}
                  className="flex-1 h-11 border border-gray-200 dark:border-slate-700 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-slate-800 rounded-xl text-xs font-bold uppercase cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 h-11 bg-gray-950 font-bold dark:bg-white dark:text-gray-950 text-white hover:opacity-90 rounded-xl text-xs uppercase cursor-pointer"
                >
                  Save Head
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
