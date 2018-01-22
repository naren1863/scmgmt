import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { BasePage } from '../base-page/base-page';
@Component({
  selector: 'app-invoice-detail',
  templateUrl: './invoice-detail.html',
  styleUrls: ['./invoice-detail.css']
})
export class InvoiceDetailComponent extends BasePage {

  invoiceId: string;
  constructor(private route: ActivatedRoute) { 
    super();
    route.queryParamMap.subscribe((params: ParamMap) => {
      const invoiceIdParam = params.get('invoiceId');
      this.invoiceId = invoiceIdParam;
    });
  }

  ngOnInit() {
  }

}
