import { ModuleWithProviders } from '@angular/core';
import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HistoriaLaboralComponent } from './historiaLaboral.component';
import { CargoComponent } from '../+cargo/cargo.component';
import { EditCargoComponent } from '../+edit-cargo/cargo-edit.component';
import { EditCargoResolve } from '../+edit-cargo/cargo-edit-resolve.service';

export const historiaLaboralRoutes: Routes = [
    {
        path: '',
        component: HistoriaLaboralComponent
    },
    {
        path: 'editarCargo',
        component: EditCargoComponent

    }
];

export const historiaLaboralRouting: ModuleWithProviders = RouterModule.forChild(historiaLaboralRoutes);
//export const historiaLaboralRouting = RouterModule.forChild(historiaLaboralRoutes);