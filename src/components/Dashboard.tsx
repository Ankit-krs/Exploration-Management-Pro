import React, { useState } from 'react';
import { useDrillTrack, getTodayStr } from '../context/DrillTrackContext';
import { exportDrillingToExcel } from '../utils/exportUtils';
import { 
  Plus, 
  MapPin, 
  PenTool, 
  Trash2, 
  Calendar, 
  Download, 
  Edit, 
  Trash, 
  Check, 
  X, 
  Construction, 
  TrendingUp, 
  IndianRupee,
  AlertTriangle,
  FileSpreadsheet,
  Hash
} from 'lucide-react';

export const Dashboard: React.FC = () => {
  const {
    sites,
    activeSiteId,
    activeSite,
    drillingEntries,
    opexEntries,
    dceEntries,
    advanceEntries,
    getDceTotal,
    setActiveSiteId,
    addSite,
    editSite,
    deleteSite,
    addDrillingEntry,
    editDrillingEntry,
    deleteDrillingEntry,
    addToast,
    drafts,
    updateDraft
  } = useDrillTrack();

  // Dialog controller states
  const [showAddSite, setShowAddSite] = useState(false);
  const [showRenameSite, setShowRenameSite] = useState(false);
  const [showDeleteSite, setShowDeleteSite] = useState(false);
  
  // Drills in-place editing helper states
  const [editingDrillDate, setEditingDrillDate] = useState<string | null>(null);
  const [editMetersFieldValue, setEditMetersFieldValue] = useState('');

  // Draft text names holds
  const draftSiteName = drafts.newSiteName || '';
  const [renameValue, setRenameValue] = useState('');

  // Settle draft inputs for drilling entries
  const drillDate = drafts.drilling?.date || getTodayStr();
  const drillMeters = drafts.drilling?.meters || '';
  const boreholeNumber = drafts.drilling?.boreholeNumber || '';

  // Filter components relevant to the active site
  const siteDrillingLogs = drillingEntries.filter(e => e.siteId === activeSiteId);
  const totalMetersDrilled = siteDrillingLogs.reduce((sum, e) => sum + e.meters, 0);

  const siteOpexLogs = opexEntries.filter(e => e.siteId === activeSiteId);
  const totalDirectOpex = siteOpexLogs.reduce((sum, e) => sum + e.amount, 0);

  const siteDceLogs = dceEntries.filter(e => e.site_id === activeSiteId);
  const totalDceStanding = siteDceLogs.reduce((sum, e) => sum + getDceTotal(e), 0);

  // Total operational cost index = direct OPEX + Standing Cost Accumulative
  const totalOperationalCost = totalDirectOpex + totalDceStanding;

  // Average cost per meter (RPM)
  const ratePerMeter = totalMetersDrilled > 0 ? totalOperationalCost / totalMetersDrilled : 0;

  // Active standing burn rate accrual
  const activeDceItems = siteDceLogs.filter(e => e.status === 'Active');
  const activeStandingHoldCost = activeDceItems.reduce((sum, e) => sum + e.per_day_cost, 0);

  // Cash Advance balance = Total cash advances - Direct OPEX
  const totalSiteAdvances = advanceEntries
    .filter(e => e.siteId === activeSiteId)
    .reduce((sum, e) => sum + e.amount, 0);
  const availableAdvanceBalance = totalSiteAdvances - totalDirectOpex;

  const handleDrillSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const metersVal = parseFloat(drillMeters);
    if (isNaN(metersVal) || metersVal <= 0) {
      addToast('Please enter a positive drilling value in meters', 'error');
      return;
    }
    if (!drillDate) {
      addToast('Please select a valid date', 'error');
      return;
    }
    addDrillingEntry({ siteId: activeSiteId, date: drillDate, meters: metersVal, boreholeNumber });
    updateDraft('drilling', 'meters', '');
    updateDraft('drilling', 'boreholeNumber', '');
  };

  const handleSiteCreationSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const success = await addSite(draftSiteName);
    if (success) {
      updateDraft('newSiteName', '', '');
      setShowAddSite(false);
    }
  };

  const handleSiteRenameSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!activeSite) return;
    const success = await editSite(activeSite.id, renameValue);
    if (success) {
      setShowRenameSite(false);
    }
  };

  const handleConfirmDeleteSite = () => {
    if (activeSiteId) {
      deleteSite(activeSiteId);
      setShowDeleteSite(false);
    }
  };

  const handleExcelExport = () => {
    if (!activeSite) return;
    exportDrillingToExcel(siteDrillingLogs, activeSite.name);
    addToast('Drilling records successfully compiled and downloaded.', 'success');
  };

  return (
    <div id="dashboard-page" className="space-y-6 md:space-y-8 animate-fade-in text-gray-900 dark:text-gray-100 font-sans">
      
      {/* Site Selector and Toolbar Actions */}
      <div id="site-selector-panel" className="bg-white dark:bg-slate-900 border border-gray-200/90 dark:border-slate-800 rounded-[24px] p-5.5 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-gray-50 dark:bg-slate-800/80 border border-gray-100 dark:border-slate-700 rounded-2xl shadow-2xs">
            <Construction className="w-5 h-5 text-gray-700 dark:text-gray-300" />
          </div>
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 block mb-0.5">
              Current Drilling Site
            </span>
            <div className="flex items-center gap-2">
              <select
                id="site-dropdown"
                value={activeSiteId}
                disabled={sites.length === 0}
                onChange={(e) => {
                  setActiveSiteId(e.target.value);
                  const s = sites.find(item => item.id === e.target.value);
                  if (s) setRenameValue(s.name);
                }}
                className="font-sans font-bold text-lg text-gray-950 dark:text-white bg-transparent border-none p-0 pr-8 focus:outline-none focus:ring-0 cursor-pointer disabled:opacity-50"
              >
                {sites.length === 0 ? (
                  <option value="">No sites created yet</option>
                ) : (
                  sites.map(s => (
                    <option key={s.id} className="bg-white dark:bg-slate-900 text-sm font-semibold" value={s.id}>
                      {s.name}
                    </option>
                  ))
                )}
              </select>
              {sites.length > 0 && (
                <span className="bg-[#F0FDF4] dark:bg-emerald-950/30 text-[#16A34A] text-[10px] font-bold px-2 py-0.5 rounded-md uppercase tracking-wide">
                  Active
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Action button triggers */}
        <div id="site-actions" className="flex items-center flex-wrap gap-2.5">
          <button
            id="btn-edit-site"
            disabled={!activeSite}
            onClick={() => {
              if (activeSite) {
                setRenameValue(activeSite.name);
                setShowRenameSite(true);
              }
            }}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-gray-200 dark:border-slate-700 hover:border-gray-900 dark:hover:border-white text-gray-700 dark:text-gray-200 bg-white dark:bg-slate-900 font-medium text-xs shadow-xs transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <PenTool className="w-3.5 h-3.5 text-gray-400" />
            <span>Rename Site</span>
          </button>
          
          <button
            id="btn-delete-site"
            disabled={!activeSite}
            onClick={() => setShowDeleteSite(true)}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-rose-50 hover:bg-rose-100/90 dark:bg-rose-950/20 dark:hover:bg-rose-950/40 text-rose-600 dark:text-rose-400 border border-rose-100 dark:border-rose-900/45 font-medium text-xs transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Trash2 className="w-3.5 h-3.5" />
            <span>Delete Site</span>
          </button>

          <button
            id="btn-trigger-add-site"
            onClick={() => setShowAddSite(true)}
            className="px-4 py-2.5 rounded-xl bg-gray-950 text-white dark:bg-white dark:text-gray-950 hover:opacity-90 font-medium text-xs transition-all cursor-pointer flex items-center gap-1.5"
          >
            <Plus className="w-4 h-4" />
            <span>Add New Site</span>
          </button>
        </div>
      </div>

      {/* Grid Summary Cards Metrics Panel */}
      <div id="dashboard-summary-cards" className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Total Drilling Accumulation */}
        <div id="card-total-drilling" className="bg-white dark:bg-slate-900 border border-gray-200/90 dark:border-slate-800 rounded-[24px] p-6 flex flex-col items-center justify-center text-center h-32 transition-all hover:shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 p-3 opacity-[0.02]/80 dark:opacity-[0.04] pointer-events-none">
            <TrendingUp className="w-16 h-16" />
          </div>
          <span className="text-slate-900 dark:text-white font-extrabold text-sm md:text-base tracking-[0.06em] uppercase mb-1 relative z-10">
            Total Drilling
          </span>
          <div className="relative z-10 font-sans font-bold text-3xl text-gray-950 dark:text-white flex items-baseline justify-center gap-0.5">
            {totalMetersDrilled.toLocaleString('en-US', { minimumFractionDigits: 1, maximumFractionDigits: 2 })}
            <span className="text-sm md:text-base font-bold text-slate-700 dark:text-white ml-1">
              m
            </span>
          </div>
        </div>

        {/* Total Cumulative Expense */}
        <div id="card-total-expense" className="bg-white dark:bg-slate-900 border border-gray-200/90 dark:border-slate-800 rounded-[24px] p-6 flex flex-col items-center justify-center text-center h-32 transition-all hover:shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 p-3 opacity-[0.02]/85 dark:opacity-[0.04] pointer-events-none">
            <IndianRupee className="w-16 h-16" />
          </div>
          <span className="text-slate-900 dark:text-white font-extrabold text-sm md:text-base tracking-[0.06em] uppercase mb-1 relative z-10">
            Total Expense
          </span>
          <div className="relative z-10 font-sans font-bold text-3xl text-gray-950 dark:text-white mb-1">
            ₹{totalOperationalCost.toLocaleString('en-IN')}
          </div>
          <p className="text-[11px] relative z-10 mt-1 font-bold tracking-wide flex items-center justify-center gap-1.5 uppercase">
            <span className="text-emerald-600 dark:text-emerald-400">Operations: {totalOperationalCost > 0 ? (totalDirectOpex / totalOperationalCost * 100).toFixed(0) : 0}%</span>
            <span className="text-gray-300 dark:text-slate-800">•</span>
            <span className="text-sky-600 dark:text-sky-400">Standby: {totalOperationalCost > 0 ? (totalDceStanding / totalOperationalCost * 100).toFixed(0) : 0}%</span>
          </p>
        </div>

        {/* Rate Per Meter (RPM) Cost Analysis */}
        <div id="card-rpm" className="bg-slate-950 dark:bg-slate-900 border border-transparent dark:border-slate-800 rounded-[24px] p-6 flex flex-col items-center justify-center text-center h-32 transition-all hover:shadow-md relative overflow-hidden">
          <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-blue-600 rounded-full blur-[35px] opacity-20 pointer-events-none"></div>
          <span className="text-white font-extrabold text-sm md:text-base tracking-[0.06em] uppercase mb-1 relative z-10">
            UNIT DRILLING COST
          </span>
          <div className="relative z-10 font-sans font-bold text-3xl text-white flex items-baseline justify-center gap-0.5 mb-1">
            {totalMetersDrilled > 0 ? (
              <>
                ₹{ratePerMeter.toLocaleString('en-IN', { maximumFractionDigits: 1 })}
                <span className="text-sm md:text-base font-bold text-white ml-1">
                  /m
                </span>
              </>
            ) : "N/A"}
          </div>
        </div>

      </div>

      {/* Horizontal DCE Intelligent Insights Strip */}
      <div id="dce-subtle-insights-strip" className="grid grid-cols-3 gap-6 p-4.5 bg-white dark:bg-slate-900 border border-gray-200/90 dark:border-slate-800 rounded-[24px] text-center shadow-xs">
         
         <div className="border-r border-gray-100 dark:border-slate-800/80 last:border-0 pl-1 flex flex-col items-center justify-center">
          <span className="text-sm text-slate-900 dark:text-white font-extrabold uppercase tracking-[0.06em] block mb-0.5">
             Daily Holding Cost
           </span>
           <span className="text-sm font-sans font-bold text-emerald-600 dark:text-emerald-400">
             ₹{activeStandingHoldCost.toLocaleString('en-IN')}/day
           </span>
         </div>
 
         <div className="border-r border-gray-100 dark:border-slate-800/80 last:border-0">
          <span className="text-sm text-slate-900 dark:text-white font-extrabold uppercase tracking-[0.06em] block mb-0.5">
             Running Total
           </span>
           <span className="text-sm font-sans font-bold text-gray-900 dark:text-white">
             ₹{totalDirectOpex.toLocaleString('en-IN')}
           </span>
         </div>
 
         <div className="last:border-0 pr-1">
          <span className="text-sm text-slate-900 dark:text-white font-extrabold uppercase tracking-[0.06em] block mb-0.5">
             Balance
           </span>
           <span className={`text-sm font-sans font-bold ${availableAdvanceBalance < 0 ? 'text-rose-500 dark:text-rose-400' : 'text-emerald-600 dark:text-emerald-400'}`}>
            ₹{availableAdvanceBalance.toLocaleString('en-IN')}
          </span>
        </div>
      </div>

      {/* Main Core Form Entries and History List Logs Split */}
      <div id="drilling-form-container" className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Entry Log Form */}
        <div className="lg:col-span-5 bg-white dark:bg-slate-900 border border-gray-200/90 dark:border-slate-800 rounded-[24px] p-6 shadow-xs flex flex-col justify-between">
          <div>
            <h2 className="text-lg font-bold mb-4 flex items-center gap-2 text-gray-950 dark:text-white">
              <span className="w-1.5 h-6 bg-[#2563EB] rounded-full"></span>
              <span>Daily Drilling Entry</span>
            </h2>

            <form id="form-add-drilling" onSubmit={handleDrillSubmit} className="space-y-4">
              <div id="drill-form-date">
                <label className="block text-[11px] font-bold uppercase tracking-wide text-gray-450 dark:text-gray-500 mb-2">
                  Date
                </label>
                <div className="relative group">
                  <input
                    id="input-drill-date"
                    type="date"
                    required
                    value={drillDate}
                    onChange={(e) => updateDraft('drilling', 'date', e.target.value)}
                    onClick={(e) => {
                      try { e.currentTarget.showPicker(); } catch {}
                    }}
                    className="w-full h-12 pl-11 pr-4 rounded-xl border border-gray-200 dark:border-slate-700 bg-transparent text-gray-950 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#2563EB]/40 focus:border-transparent text-sm font-medium relative z-10 cursor-pointer hover:border-gray-300 dark:hover:border-slate-600 transition-all [color-scheme:light] dark:[color-scheme:dark]"
                  />
                  <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-400 z-0 transition-colors w-4 h-4" />
                </div>
              </div>

              <div id="drill-form-borehole">
                <label className="block text-[11px] font-bold uppercase tracking-wide text-gray-450 dark:text-gray-500 mb-2">
                  BoreHole Number
                </label>
                <div className="relative group">
                  <input
                    id="input-drill-borehole"
                    type="text"
                    disabled={!activeSite}
                    placeholder={activeSite ? "Enter BoreHole Number" : "Please create a site first"}
                    value={boreholeNumber}
                    onChange={(e) => updateDraft('drilling', 'boreholeNumber', e.target.value)}
                    className="w-full h-12 pl-4 pr-4 rounded-xl border border-gray-200 dark:border-slate-700 bg-transparent text-gray-950 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#2563EB]/40 focus:border-transparent text-sm font-medium relative z-10 hover:border-gray-300 dark:hover:border-slate-600 transition-all disabled:opacity-50"
                  />
                </div>
              </div>

              <div id="drill-form-meters">
                <label className="block text-[11px] font-bold uppercase tracking-wide text-gray-450 dark:text-gray-500 mb-2">
                  DRILLING (m)
                </label>
                <div className="relative">
                  <input
                    id="input-drill-meters"
                    type="number"
                    step="0.01"
                    min="0.01"
                    required
                    disabled={!activeSite}
                    placeholder={activeSite ? "0.00" : "Please create a site first"}
                    value={drillMeters}
                    onChange={(e) => updateDraft('drilling', 'meters', e.target.value)}
                    className="w-full h-12 px-4 rounded-xl border border-gray-200 dark:border-slate-700 bg-transparent text-gray-950 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#2563EB]/35 focus:border-transparent text-sm font-semibold disabled:opacity-50"
                  />
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-xs font-bold uppercase">
                    Mtrs
                  </div>
                </div>
              </div>

              <div className="flex gap-2.5 pt-2">
                <button
                  id="btn-drill-submit"
                  type="submit"
                  disabled={!activeSite}
                  className="flex-1 h-12 rounded-xl bg-gray-950 hover:bg-gray-805 dark:hover:bg-gray-100 dark:bg-white dark:text-gray-950 hover:scale-[1.01] active:scale-[0.99] text-white font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-xs cursor-pointer flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100"
                >
                  Submit Entry
                </button>
                
                <button
                  id="btn-drill-download"
                  type="button"
                  disabled={!activeSite || siteDrillingLogs.length === 0}
                  onClick={handleExcelExport}
                  className="w-12 h-12 rounded-xl border border-gray-200 dark:border-slate-700 hover:border-blue-500/50 hover:bg-blue-50/50 dark:hover:bg-blue-950/25 dark:hover:border-blue-500/30 hover:text-blue-600 dark:hover:text-blue-400 text-gray-700 dark:text-gray-200 bg-white dark:bg-slate-900 shadow-xs hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 flex items-center justify-center cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed shrink-0"
                  title="Download Drilling History"
                >
                  <Download className="w-5 h-5" />
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Drilling History Log List with Inline editing */}
        <div className="lg:col-span-7 bg-white dark:bg-slate-900 border border-gray-200/90 dark:border-slate-800 rounded-[24px] p-6 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold flex items-center gap-2 text-gray-950 dark:text-white">
                <span className="w-1.5 h-6 bg-[#2563EB] rounded-full"></span>
                <span>Recent Drilling Logs</span>
              </h2>
              <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 bg-gray-100 dark:bg-slate-800 rounded-lg text-gray-500 dark:text-gray-400">
                {activeSite?.name || 'Loading details...'}
              </span>
            </div>

            <div id="drilling-log-table" className="border border-gray-100 dark:border-slate-800 rounded-xl overflow-hidden">
              <div className="grid grid-cols-[1.5fr_1.2fr_90px] bg-gray-50/70 dark:bg-slate-800/60 p-3 text-[11px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider text-left border-b border-gray-150 dark:border-slate-800">
                <div>Drilling Date</div>
                <div className="text-right">Meters Drilled</div>
                <div className="text-center">Actions</div>
              </div>

              <div className="divide-y divide-gray-100 dark:divide-slate-800 max-h-64 overflow-y-auto">
                {siteDrillingLogs.length === 0 ? (
                  <div className="p-8 text-center text-xs text-gray-400 dark:text-gray-500 font-medium">
                    No drilling outputs reported yet for this site. Use the entry form to log first run.
                  </div>
                ) : (
                  [...siteDrillingLogs]
                    .sort((a, b) => b.date.localeCompare(a.date))
                    .map((item, index) => {
                      const dateObjRev = item.date.split('-').reverse().join('/');
                      const isEditingThisRow = editingDrillDate === item.date;

                      return (
                        <div 
                          key={item.date} 
                          id={`drilling-row-${index}`}
                          className="grid grid-cols-[1.5fr_1.2fr_90px] p-3 text-xs font-semibold text-gray-700 dark:text-gray-300 items-center hover:bg-gray-50/55 dark:hover:bg-slate-800/30 transition-colors"
                        >
                          <div className="flex items-center gap-1.5 text-gray-500 dark:text-gray-400 min-w-0 truncate">
                            <Calendar className="w-3.5 h-3.5 shrink-0" />
                            <span className="truncate">{dateObjRev}</span>
                            {item.boreholeNumber && (
                              <span className="text-[10px] text-gray-400 dark:text-gray-500 font-extrabold tracking-tight uppercase bg-gray-100 dark:bg-slate-800/60 px-1.5 py-0.5 rounded ml-1 shrink-0">
                                {item.boreholeNumber}
                              </span>
                            )}
                          </div>

                          {isEditingThisRow ? (
                            <div className="flex items-center justify-end pl-2">
                              <input
                                type="number"
                                step="0.01"
                                min="0.01"
                                value={editMetersFieldValue}
                                onChange={(e) => setEditMetersFieldValue(e.target.value)}
                                className="w-20 h-8 text-right px-2.5 rounded-lg border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-900 font-semibold text-xs text-gray-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-blue-500"
                                autoFocus
                              />
                            </div>
                          ) : (
                            <div className="text-right font-mono font-bold text-gray-900 dark:text-white pr-2.5">
                              {item.meters.toFixed(2)} m
                            </div>
                          )}

                          <div className="flex items-center justify-center gap-1.5">
                            {isEditingThisRow ? (
                              <>
                                <button
                                  type="button"
                                  onClick={() => {
                                    const parsedNum = parseFloat(editMetersFieldValue);
                                    if (isNaN(parsedNum) || parsedNum <= 0) {
                                      addToast('Please enter a valid non-negative number of meters', 'error');
                                      return;
                                    }
                                    editDrillingEntry(item.date, { siteId: activeSiteId, date: item.date, meters: parsedNum, boreholeNumber: item.boreholeNumber });
                                    setEditingDrillDate(null);
                                    setEditMetersFieldValue('');
                                  }}
                                  className="p-1 text-emerald-600 hover:text-emerald-500 hover:bg-emerald-50 dark:hover:bg-emerald-950/20 rounded transition-colors cursor-pointer"
                                  title="Save Changes"
                                >
                                  <Check className="w-4 h-4" />
                                </button>
                                <button
                                  type="button"
                                  onClick={() => {
                                    setEditingDrillDate(null);
                                    setEditMetersFieldValue('');
                                  }}
                                  className="p-1 text-rose-500 hover:text-rose-450 hover:bg-rose-50 dark:hover:bg-rose-950/25 rounded transition-colors cursor-pointer"
                                  title="Cancel Edit"
                                >
                                  <X className="w-4 h-4" />
                                </button>
                              </>
                            ) : (
                              <>
                                <button
                                  type="button"
                                  onClick={() => {
                                    setEditingDrillDate(item.date);
                                    setEditMetersFieldValue(item.meters.toString());
                                  }}
                                  className="p-1 text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-slate-800 rounded transition-colors cursor-pointer"
                                  title="Edit Entry"
                                >
                                  <Edit className="w-3.5 h-3.5" />
                                </button>
                                <button
                                  type="button"
                                  onClick={() => deleteDrillingEntry(item.date)}
                                  className="p-1 text-gray-400 hover:text-rose-600 dark:hover:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/20 rounded transition-colors cursor-pointer"
                                  title="Delete Record"
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

      {/* --- POPUP DIALOG DIALOG MODALS --- */}

      {/* 1. Add Site Popup Modal */}
      {showAddSite && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-gray-900/60 backdrop-blur-xs" onClick={() => setShowAddSite(false)}></div>
          <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 p-6 rounded-[28px] w-full max-w-sm shadow-2xl relative z-10 animate-scale-up">
            <h3 className="text-base font-bold text-gray-950 dark:text-white mb-4">Create Drilling Site</h3>
            <form onSubmit={handleSiteCreationSubmit} className="space-y-4">
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-2">
                  Site Title/Location
                </label>
                <input
                  id="input-create-site-name"
                  type="text"
                  required
                  autoFocus
                  placeholder="e.g. Korba East-Sector 4"
                  value={draftSiteName}
                  onChange={(e) => updateDraft('newSiteName', '', e.target.value)}
                  className="w-full h-11 px-4 rounded-xl border border-gray-200 dark:border-slate-700 bg-transparent text-gray-950 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500/35 focus:border-blue-500 text-sm font-semibold"
                />
              </div>
              <div className="flex items-center gap-2.5 pt-2">
                <button
                  type="button"
                  onClick={() => setShowAddSite(false)}
                  className="flex-1 h-11 border border-gray-200 dark:border-slate-700 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-slate-800 rounded-xl text-xs font-bold uppercase cursor-pointer transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 h-11 bg-gray-950 font-bold dark:bg-white dark:text-gray-950 text-white hover:opacity-90 rounded-xl text-xs uppercase cursor-pointer transition-colors"
                >
                  Create Site
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* 2. Rename Site Popup Modal */}
      {showRenameSite && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-gray-900/60 backdrop-blur-xs" onClick={() => setShowRenameSite(false)}></div>
          <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 p-6 rounded-[28px] w-full max-w-sm shadow-2xl relative z-10 animate-scale-up">
            <h3 className="text-base font-bold text-gray-950 dark:text-white mb-4">Rename Drilling Site</h3>
            <form onSubmit={handleSiteRenameSubmit} className="space-y-4">
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-2">
                  New Site Name
                </label>
                <input
                  type="text"
                  required
                  autoFocus
                  value={renameValue}
                  onChange={(e) => setRenameValue(e.target.value)}
                  className="w-full h-11 px-4 rounded-xl border border-gray-200 dark:border-slate-700 bg-transparent text-gray-950 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500/35 focus:border-blue-500 text-sm font-semibold"
                />
              </div>
              <div className="flex items-center gap-2.5 pt-2">
                <button
                  type="button"
                  onClick={() => setShowRenameSite(false)}
                  className="flex-1 h-11 border border-gray-200 dark:border-slate-700 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-slate-800 rounded-xl text-xs font-bold uppercase cursor-pointer transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 h-11 bg-gray-950 font-bold dark:bg-white dark:text-gray-950 text-white hover:opacity-90 rounded-xl text-xs uppercase cursor-pointer transition-colors"
                >
                  Rename
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* 3. Delete Site Conformation Alert Dialog */}
      {showDeleteSite && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-gray-900/60 backdrop-blur-xs" onClick={() => setShowDeleteSite(false)}></div>
          <div className="bg-white dark:bg-slate-900 border border-gray-250 dark:border-slate-850 p-6 rounded-[28px] w-full max-w-sm shadow-2xl relative z-10 animate-scale-up">
            <div className="flex items-center gap-3 mb-3 text-rose-500">
              <AlertTriangle className="w-6 h-6 shrink-0" />
              <h3 className="text-base font-bold text-gray-950 dark:text-white">Delete Operational Workspace?</h3>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-450 leading-relaxed mb-5">
              Warning: Deleting site <strong className="text-gray-900 dark:text-gray-200">"{activeSite?.name}"</strong> will permanently destroy all linked drilling records, direct OPEX ledgers, advances, and standing holding costs of this site. This process cannot be reversed.
            </p>
            <div className="flex items-center gap-2.5">
              <button
                type="button"
                onClick={() => setShowDeleteSite(false)}
                className="flex-1 h-11 border border-gray-200 dark:border-slate-700 text-gray-750 dark:text-gray-250 hover:bg-gray-50 dark:hover:bg-slate-800 rounded-xl text-xs font-bold uppercase cursor-pointer transition-colors"
              >
                No, Go Back
              </button>
              <button
                type="button"
                onClick={handleConfirmDeleteSite}
                className="flex-1 h-11 bg-rose-600 hover:bg-rose-550 text-white rounded-xl text-xs font-bold uppercase cursor-pointer shadow-md"
              >
                Confirm Delete
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
