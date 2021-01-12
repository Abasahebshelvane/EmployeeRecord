import {Component, OnInit} from '@angular/core';
import {EmployeeService} from '../Employee.Service';


import { FormsModule } from '@angular/forms';
//import {NgForm}    from 'angular2/common';

@Component({
    selector: 'employee-list',
	providers : [EmployeeService],
    templateUrl: 'app/EmployeeList/employee-list.component.html',
})

export class EmployeeList  implements OnInit {
    pageTitle : string = 'Employee List';
	//employees: Employee[];
	addEmployee: boolean = false;

	EmployeeId: Number;
	Name: string;
	Department: string;
	edit: boolean = false;
	GetEmployee(): void{
	this._employeeService.getEmployees().subscribe(employees => this.employees = employees);
	};

	constructor(private _employeeService : EmployeeService){
	}
	
	ngOnInit() : void{
	this.GetEmployee();
	}

	AddEmployee(): void{
	this.addEmployee = true;
	}

	SaveData(): void{
	this.newEmployee.EmployeeId = this.EmployeeId;
	this.newEmployee.Name = this.Name;
	
	this.addEmployee = false;
	console.log(this.newEmployee);
	this._employeeService.AddEmployee(this.newEmployee).subscribe(success => {
         // refresh the list
		 this.GetEmployee();
         return true;
       },
       error => {
         console.error("Error saving Employee!"+ error.Message);
       });
	
	}

	DeleteEmployee(employee):void {
    if (confirm("Are you sure you want to delete " + employee.Name + "?")) {
      this._employeeService.DeleteEmployee(employee.EmployeeId).subscribe(
         data => {
           // refresh the list
           this.GetEmployee();
           return true;
         },
         error => {
           console.error("Error deleting Employee!");
         }
      );
    }
  }

	Cancel():void{
	this.addEmployee = false;
	}

}