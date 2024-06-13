import { Component } from '@angular/core';
import { PersonService } from '../../../api/person.service';

@Component({
	selector: 'person-get-all',
	standalone: true,
	imports: [],
	templateUrl: './get-all.component.html',
	styleUrl: './get-all.component.scss'
})

export class PersonGetAllComponent {
	listPerson: any[] = [];

	constructor(
		private personService: PersonService
	) { }

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
}