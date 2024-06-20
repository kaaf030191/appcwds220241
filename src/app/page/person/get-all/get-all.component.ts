import { Component, TemplateRef } from '@angular/core';
import { PersonService } from '../../../api/person.service';
import { CommonModule } from '@angular/common';
import { BsModalService } from 'ngx-bootstrap/modal';
import { FormBuilder, FormsModule, ReactiveFormsModule, UntypedFormGroup } from '@angular/forms';

@Component({
	selector: 'person-get-all',
	standalone: true,
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule
	],
	templateUrl: './get-all.component.html',
	styleUrl: './get-all.component.scss'
})

export class PersonGetAllComponent {
	frmEditPerson: UntypedFormGroup;

	listPerson: any[] = [];

	get firstNameFb(){ return this.frmEditPerson.controls['firstName']; }
	get surNameFb(){ return this.frmEditPerson.controls['surName']; }
	get dniFb(){ return this.frmEditPerson.controls['dni']; }
	get genderFb(){ return this.frmEditPerson.controls['gender']; }
	get birthDateFb(){ return this.frmEditPerson.controls['birthDate']; }

	constructor(
		private formBuilder: FormBuilder,
		private personService: PersonService,
		private modalService: BsModalService
	) {
		this.frmEditPerson = this.formBuilder.group({
			firstName: [null, []],
			surName: [null, []],
			dni: [null, []],
			gender: [null, []],
			birthDate: [null, []]
		});
	}

	ngOnInit() {
		this.personService.getAll().subscribe({
			next: (response: any[]) => {
				this.listPerson = response;
			},
			error: (error: any) => {
				console.log(error);
			}
		});
	}

	delete(idPerson: string, index: number): void {
		this.personService.delete(idPerson).subscribe({
			next: (response: any) => {
				this.listPerson.splice(index, 1);
			},
			error: (error: any) => {
				console.log(error);
			}
		});
	}

	showModal(modalEditPerson: TemplateRef<any>, item: any): void {
		console.log(item.birthDate);
		this.firstNameFb.setValue(item.firstName);
		this.surNameFb.setValue(item.surName);
		this.dniFb.setValue(item.dni);
		this.genderFb.setValue(item.gender.toString());
		this.birthDateFb.setValue(item.birthDate.toString().substring(0, 10));

		this.modalService.show(modalEditPerson);
	}

	closeModal(): void {
		this.modalService.hide();
	}

	onClickSaveChanges(): void {

	}
}