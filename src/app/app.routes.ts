import { Routes } from '@angular/router';
import { PersonInsertComponent } from './page/person/insert/insert.component';
import { PersonGetAllComponent } from './page/person/get-all/get-all.component';

export const routes: Routes = [
    { path: 'person/insert', component: PersonInsertComponent },
    { path: 'person/get-all', component: PersonGetAllComponent }
];
