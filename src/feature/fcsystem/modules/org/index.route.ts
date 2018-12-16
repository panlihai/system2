import { Routes } from '@angular/router';
import { SysroleComponent } from './sysrole.component';
import { SyscompanyComponent } from './syscompany.component';
import { SysdepartmentComponent } from './sysdepartment.component';
import { SysdepartmentDetailComponent } from './sysdepartmentdetail.component';
import { SysdepartmentaddComponent } from './sysdepartmentadd.component';
import { SysdepartmenteditComponent } from './sysdepartmentedit.component';
import { SysemployeeComponent } from './sysemployee.component';
import { SysemployeeeditComponent } from './sysemployeeedit.component';
import { SyscompanyaddComponent } from './syscompanyadd.component';
import { SyscompanyeditComponent } from './syscompanyedit.component';
import { SyscompanydetailComponent } from './syscompanydetail.component';
import { SysorgdimrelationComponent } from './sysorgdimrelation.component';
import { SysorgdimrelationeditComponent } from './sysorgdimrelationedit.component';
import { SyscompanyrelationComponent } from './syscompanyrelation.component';
import { SyscontactComponent } from './syscontact.component';

export const Routers: Routes = [ 
   
    {
        path: 'sysroleList',//系统参数
        component: SysroleComponent
    }
   
    , {
        path: 'syscompanyList',//单位
        component: SyscompanyComponent
    }
    , {
        path: 'sysdepartmentList',//部门
        component: SysdepartmentComponent
    }
    , {
        path: 'sysdepartmentView',//部门查看
        component: SysdepartmentDetailComponent
    }
    , {
        path: 'sysdepartmentAdd',//部门新增
        component: SysdepartmentaddComponent
    }
    , {
        path: 'sysdepartmentEdit',//部门修改
        component: SysdepartmenteditComponent
    }
    , {
        path: 'sysemployeeList',//员工管理
        component: SysemployeeComponent
    }, {
        path: 'sysemployeeEdit',//员工编辑
        component: SysemployeeeditComponent
    }
    
    , {
        path: 'syscompanyAdd',//单位设立
        component: SyscompanyaddComponent
    }
    , {
        path: 'syscompanyEdit',//单位调整
        component: SyscompanyeditComponent
    }
    , {
        path: 'syscompanyDetail',//单位查看
        component: SyscompanydetailComponent
    }
    , {
        path: 'sysorgdimList',//组织维度
        component: SysorgdimrelationComponent,
    }, {
        path: 'syscompanydimEdit',//组织维度编辑
        component: SysorgdimrelationeditComponent,
    }
    , {
        path: 'syscompanyrelationList',
        component: SyscompanyrelationComponent,
    },  {
        path: 'syscontactList',
        component: SyscontactComponent,
    },{
        path:'sysdepartmentdimList',
        component:SysorgdimrelationComponent
    }
];
