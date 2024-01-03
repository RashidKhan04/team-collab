import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { EmployeesType } from '../../models/northwind/employees-type';
import { CustomersType } from '../../models/northwind/customers-type';
import { SuppliersType } from '../../models/northwind/suppliers-type';
import { OrdersType } from '../../models/northwind/orders-type';
import { NorthwindService } from '../../services/northwind.service';

@Component({
  selector: 'app-backlog',
  templateUrl: './backlog.component.html',
  styleUrls: ['./backlog.component.scss']
})
export class BacklogComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  public groupVisible: boolean = false;
  public northwindOrders: OrdersType[] = [];
  public northwindCustomers: CustomersType[] = [];
  public northwindEmployees: EmployeesType[] = [];
  public northwindSuppliers: SuppliersType[] = [];

  constructor(
    private northwindService: NorthwindService,
  ) {}

  ngOnInit() {
    this.northwindService.getData('OrdersType').pipe(takeUntil(this.destroy$)).subscribe({
      next: (data) => this.northwindOrders = data,
      error: (_err: any) => this.northwindOrders = []
    });
    this.northwindService.getData('CustomersType').pipe(takeUntil(this.destroy$)).subscribe({
      next: (data) => this.northwindCustomers = data,
      error: (_err: any) => this.northwindCustomers = []
    });
    this.northwindService.getData('EmployeesType').pipe(takeUntil(this.destroy$)).subscribe({
      next: (data) => this.northwindEmployees = data,
      error: (_err: any) => this.northwindEmployees = []
    });
    this.northwindService.getData('SuppliersType').pipe(takeUntil(this.destroy$)).subscribe({
      next: (data) => this.northwindSuppliers = data,
      error: (_err: any) => this.northwindSuppliers = []
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
