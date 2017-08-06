/**
 * @license
 * Copyright Omar Amrani. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license
 */
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MdDialog, MdSnackBar } from '@angular/material';

import { DialogRemoveComponent } from "./dialog-remove.component";

import { Panel } from "../models/panel.model";
import { Field } from "../models/field.model";
import { LOV } from "../models/lov.model";

import { Action } from "../utils/action.util";

/**
 * Component of DataTable 
 *
 * @stable
 */
@Component({
  selector: 'ngu-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent extends Action implements OnInit {      
  dataSet: any[];
  dataPage: any[];
  selectedDataRows: any[] = [];
  currentPage: number = 1;
  searchedFieldId: string;
  logicalOperators: LOV[] = [];
  logicalOperatorId: string;
  searchedValue: string;
  searchableFields: Field[];
  visibleFields: Field[];  
  sortFieldId: string;
  sortAsc: boolean = true;
  pageSize: number = 5;

  constructor(public dialog: MdDialog, public snackBar: MdSnackBar) { 
    super();     
  }

  ngOnInit() {
    this.searchedFieldId = this.defaultSearchedFieldId;
    this.sortFieldId = this.defaultSortFieldId;
    this.logicalOperators = [
      {
          key: 1,
          id: "equal",
          label: "Equal",
          group: "LOGICAL_OPERATOR"
      },
      {
          key: 2,
          id: "match",
          label: "Match",
          group: "LOGICAL_OPERATOR"
      },
      {
          key: 4,
          id: "greaterThan",
          label: "Greater Than",
          group: "LOGICAL_OPERATOR"
      },
      {
          key: 5,
          id: "lessThan",
          label: "Less Than",
          group: "LOGICAL_OPERATOR"
      }
    ] 
    this.logicalOperatorId = this.defaultLogicalOperatorId;
    this.sortAsc = this.defaultSortAsc;
    this.pageSize = this.defaultPageSize;

    this.onReload();
  }

  @Input()
  panel: Panel;

  @Input()
  data: any[];

  @Input()
  defaultPageSize: number;

  @Input()
  pageSizes: number[];

  @Input()
  defaultSearchedFieldId: string;

  @Input()
  defaultLogicalOperatorId: string;

  @Input()
  defaultSortFieldId: string;

  @Input()
  defaultSortAsc: boolean;

  @Output()
  add: EventEmitter<any> = new EventEmitter();

  @Output()
  edit: EventEmitter<any> = new EventEmitter();

  @Output()
  remove: EventEmitter<any[]> = new EventEmitter();

  get rowFrom(): number {
    return this.rowTo - this.pageSize;
  }

  get rowTo(): number {
    return this.currentPage * this.pageSize;
  }

  get limitPage(): number {
    if (!this.dataSet) return 1;
    if (this.dataSet.length == 0) return 1;
    return Math.ceil(this.dataSet.length / this.pageSize);
  }

  get isBOP(): boolean {
    return this.currentPage == 1;
  }

  get isEOP(): boolean {  
    return this.currentPage == this.limitPage;
  }

  private _refreshData() {    
    this.dataSet = this.search(this.data, this.searchedFieldId, this.searchedValue, this.logicalOperatorId);
    this.dataSet = this.sort(this.dataSet, this.sortFieldId, this.sortAsc);    
    this.dataPage = this.dataSet.slice(this.rowFrom, this.rowTo);    
  }

  private _refreshPanel() {
    this.searchableFields = this.panel.panelDetails.filter(pd => pd.isSearchable).map(pd => pd.field);
    this.visibleFields = this.sort(this.panel.panelDetails.filter(pd => pd.isVisible), "orderNo", true).map(pd => pd.field);
  }

  isRowHighlighted(dataRow: any): boolean {
    if (!this.selectedDataRows) return false;
    return this.selectedDataRows.find(dr => dr.key === dataRow.key);
  }

  onSelectAllRows() {      
    this.selectedDataRows = this.dataSet;
  }

  onDeselectAllRows() {
    this.selectedDataRows = [];
  }

  onSelectDataRow(dataRow: any, event: any) {
    if (!event.ctrlKey) this.selectedDataRows = [];     
    this.selectedDataRows = [...this.selectedDataRows, dataRow];            
  }  

  onSort(fieldId: string, toggleSort: boolean = true) {
    if (toggleSort) this.sortAsc = !this.sortAsc;   
    this.sortFieldId = fieldId;
    this._refreshData();
  }  

  onAdd() {
    this.add.emit({});
  }

  onEdit() {
    this.edit.emit(this.selectedDataRows);
  }

  onRemove() {
    this.openDialog(DialogRemoveComponent, "Remove", () => {
      this.remove.emit(this.selectedDataRows);
    });
  }

  onReset() {
    this.searchedValue = null;
    this._refreshData();
  }

  onSearch() {
    this.currentPage = 1;
    this.selectedDataRows = [];
    this._refreshData();
  }

  onReload() {
    this._refreshPanel();
    this._refreshData();
  }

  onRefresh() {
    this._refreshData();
  }
  
  onPagingPrevious() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this._refreshData();
    }
  }

  onPagingNext() {
    if (this.limitPage > this.currentPage) {
      this.currentPage++;
      this._refreshData();
    }
  }

  openDialog(T: any, doAction: string, callback) {    
    let dialogRef = this.dialog.open(T);
    dialogRef.afterClosed().subscribe(result => {
      if (result === doAction) {   
        callback();
      } 
    });
  }  

  openSnackBar(message: string) {
    this.snackBar.open(message, "Dismiss", {
      duration: 2000
    });
  }

}
