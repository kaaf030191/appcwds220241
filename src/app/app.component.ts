import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GeneralService } from './api/general.service';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [RouterOutlet],
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss'
})

export class AppComponent {
	title = 'appcwds220241';

	constructor(
		private generalService: GeneralService
	) {

	}

	ngOnInit(): void {
		this.generalService.indexGet().subscribe({
			next: (response: any) => {
				console.log(response);
			},
			error: (error: any) => {
				console.log(error);
			}
		});
	}
}