import { Component, OnInit } from '@angular/core';

import { Message } from 'primeng/primeng';
import { SelectItem } from 'primeng/primeng';
import { Router } from '@angular/router';


@Component({
  selector: 'app-welcome-invoice',
  templateUrl: './welcome-invoice.html',
  styleUrls: ['./welcome-invoice.css']
})
export class WelcomeInvoiceComponent implements OnInit {

  totalCost: number = 100;
  totalCostSpinner: number = 300;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  onValueChanged(event) {
    console.log(event);
  }

  onLogin(){
    this.router.navigate(["invoice-create"]);
  }
}
