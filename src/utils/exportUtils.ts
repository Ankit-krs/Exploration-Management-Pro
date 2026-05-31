import * as XLSX from 'xlsx';
import { DrillingEntry, OpexEntry, DceEntry, AdvanceEntry, Category, ExpenseHead } from '../types';

// Export drilling records of current site
export const exportDrillingToExcel = (entries: DrillingEntry[], siteName: string) => {
  const sorted = [...entries].sort((a, b) => b.date.localeCompare(a.date));
  const data = sorted.map(e => ({
    'Drilling Date': e.date.split('-').reverse().join('/'),
    'BoreHole Number': e.boreholeNumber || '',
    'Meters Drilled (m)': parseFloat(e.meters.toFixed(2))
  }));

  const ws = XLSX.utils.json_to_sheet(data);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, 'Drilling History');
  XLSX.writeFile(wb, `${siteName.replace(/\s+/g, '_')}_Drilling_History.xlsx`);
};

// Export OPEX records
export const exportOpexToExcel = (
  entries: OpexEntry[], 
  categories: Category[], 
  expenseHeads: ExpenseHead[], 
  siteName: string
) => {
  const sorted = [...entries].sort((a, b) => b.date.localeCompare(a.date));
  const data = sorted.map(e => {
    const cat = categories.find(c => c.id === e.categoryId)?.name || 'Unknown';
    const head = expenseHeads.find(h => h.id === e.expenseHeadId)?.name || 'Unknown';
    return {
      'Expense Date': e.date.split('-').reverse().join('/'),
      'Category': cat,
      'Expense Head': head,
      'Payment Amount (INR)': e.amount,
      'Remarks / Party details': e.remarks
    };
  });

  const ws = XLSX.utils.json_to_sheet(data);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, 'OPEX Logsheet');
  XLSX.writeFile(wb, `${siteName.replace(/\s+/g, '_')}_OPEX_Report.xlsx`);
};

// Export DCA (Daily Standing Cost)
export const exportDceToExcel = (
  entries: DceEntry[], 
  siteName: string,
  getDceActiveDays: (e: DceEntry) => number,
  getDceTotal: (e: DceEntry) => number
) => {
  const sorted = [...entries].sort((a, b) => b.start_date.localeCompare(a.start_date));
  const data = sorted.map(e => ({
    'Start Date': e.start_date.split('-').reverse().join('/'),
    'Standing Cost Head': e.cost_head,
    'Per Day Cost (INR)': e.per_day_cost,
    'Operation status': e.status,
    'Active Accrued Days': getDceActiveDays(e),
    'Total Standing Cost (INR)': getDceTotal(e),
    'Remarks / Maintenance details': e.remarks
  }));

  const ws = XLSX.utils.json_to_sheet(data);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, 'DCA standing cost');
  XLSX.writeFile(wb, `${siteName.replace(/\s+/g, '_')}_Standing_Cost_DCA.xlsx`);
};

// Export system Cash Advances
export const exportAdvancesToExcel = (entries: AdvanceEntry[], siteName: string) => {
  const sorted = [...entries].sort((a, b) => b.date.localeCompare(a.date));
  const data = sorted.map(e => ({
    'Issue Date': e.date.split('-').reverse().join('/'),
    'Advance Amount (INR)': e.amount,
    'Remarks / Receipts details': e.remarks
  }));

  const ws = XLSX.utils.json_to_sheet(data);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, 'Advances Register');
  XLSX.writeFile(wb, `${siteName.replace(/\s+/g, '_')}_Advances_Register.xlsx`);
};
