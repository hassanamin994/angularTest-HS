import { Routes } from '@angular/router';
import { View1Component } from './components/view1/view1.component';
import { View2Component } from './components/view2/view2.component';

export const APP_ROUTES: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: '/view1'
            },
            {
                path: 'view1',
                component: View1Component
            },
            {
                path: 'view2',
                component: View2Component
            }
        ]        
    }
]