/**
 * @license
 * Copyright Omar Amrani. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license
 */
import { Component, ChangeDetectionStrategy, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { MdDialog, MdSnackBar } from '@angular/material';

import { DialogBoxComponent } from "../../dialog-box/components";
import { Panel, Field, LOV } from "../../core/models";
import { ActionService, DialogService } from "../../core/services";
import { DialogButtonsEnum, DialogActionsEnum } from "../../core/enums";

/**
 * Component of DataTable 
 *
 * @stable
 */
@Component({
  selector: 'nui-data-table',
  templateUrl: './data-table.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit, OnChanges {      
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

  constructor(public dialog: MdDialog, public actionService: ActionService, public dialogService: DialogService) { 
       
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
  }

  ngOnChanges() {
    this._refreshPanel();
    this._refreshData();
  }

  @Input()
  panel: Panel;

  @Input()
  data: any = [];

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

  @Output()
  refresh: EventEmitter<any> = new EventEmitter();

  @Output()
  reload: EventEmitter<any> = new EventEmitter();

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
    if (this.data) {
      this.dataSet = this.actionService.search(this.data, this.searchedFieldId, this.searchedValue, this.logicalOperatorId);
      this.dataSet = this.actionService.sort(this.dataSet, this.sortFieldId, this.sortAsc);    
      this.dataPage = this.dataSet.slice(this.rowFrom, this.rowTo);
    }  
  }

  private _refreshPanel() {
    if (this.panel) {
      this.searchableFields = this.panel.panelDetails.filter(pd => pd.isSearchable).map(pd => pd.field);
      this.visibleFields = this.actionService.sort(this.panel.panelDetails.filter(pd => pd.isVisible), "orderNo", true).map(pd => pd.field);
    }
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
    let data = { data: { title: "DELETE", content: "Are you sure you want to delete these records?", dialogButton: DialogButtonsEnum.YesCancel, style: "warn" } };
    this.dialogService.openDialog(data)
      .subscribe(action => {
        if (action == DialogActionsEnum.Yes) {
          this.remove.emit(this.selectedDataRows);
          this.selectedDataRows = [];
        }
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
    this.reload.emit();
    this._refreshPanel();
    this._refreshData();
  }

  onRefresh() {
    this.refresh.emit({});
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
}
