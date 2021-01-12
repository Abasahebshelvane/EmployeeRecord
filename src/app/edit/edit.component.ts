import {Component, OnInit} from '@angular/core';

import {EmployeeService} from '../Employee.Service';
//import { Observable } from 'rxjs/Observable';
import { FormsModule } from '@angular/forms';
//import {NgForm}     from 'angular2/common';

@Component({
	selector: 'employee-Edit',
	templateUrl: 'app/EmployeeList/edit.component.html',
	providers: [EmployeeService],
    
})

export class EditComponent implements OnInit{

  private sub:any;
  //employee: Employee;
  success: boolean = false;
  constructor(private employeeService: EmployeeService) {
  }

ngOnInit() {
	
  }

SaveEdit():void{
	employeeService.SaveEmployee(this.employee).subscribe(success => {
         // refresh the list
		 this.success = true;
       });this
}
}