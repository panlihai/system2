import { Routes } from '@angular/router';
import { UserService } from 'fccore2';
import { SigninComponent } from './components/signin/signin.component';
import { ErrorComponent } from './components/error/error.component';
import { ForgotComponent } from './components/forgot/forgot.component';
import { LockscreenComponent } from './components/lockscreen/lockscreen.component';
import { LayoutComponent } from './components/layout/layout.component';
import { HomeComponent } from './components/home/home.component';
export const AppRoutes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        canActivate: [UserService],
        children: [
            {
                path: 'error',//错误
                component: ErrorComponent
            }, {
                path: 'home',//平台功能
                component: HomeComponent
            },
            {
                path: 'system',//平台功能
                loadChildren: '../feature/fcsystem/index.module#FcsystemModule'
            },
            {
                path: '',
                loadChildren: './modules/log/index.module#FclogModule'
            },
            {
                path: '',
                loadChildren: './modules/profile/index.module#FcprofileModule'
            }
        ]
    }
    , {
        path: 'signin',
        component: SigninComponent
    }, {
        path: 'forgot',//忘记密码
        component: ForgotComponent,
    }, {
        path: 'lockscreen',//锁屏
        component: LockscreenComponent
    }
];
