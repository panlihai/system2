import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FccoreModule } from 'fccore2';
import { Routers } from './index.route';
import { FccomponentModule } from 'fccomponent2';
import { CompanyrelationdeletedialogComponent } from './dialog/companyrelationdeletedialog.component';
import { CompanyrelationtransferdialogComponent } from './dialog/companyrelationtransferdialog.component';
import { DepartmentcanceldialogComponent } from './dialog/departmentcanceldialog.component';
import { SysadjustdialogComponent } from './dialog/sysadjustdialog.component';
import { SyscompanyrelationtransferdialogComponent } from './dialog/syscompanyrelationtransferdialog.component';
import { DepartmenttransferdialogComponent } from './dialog/departmenttransferdialog.component';
import { SyscanceldialogComponent } from './dialog/syscanceldialog.component';
import { SyscompanycanceldialogComponent } from './dialog/syscompanycanceldialog.component';
import { SyscompanyrelationdeletedialogComponent } from './dialog/syscompanyrelationdeletedialog.component';
import { syscompanytransferdialogComponent } from './dialog/syscompanytransferdialog.component';
import { SysdepartmentSelectHigherdialogComponent } from './dialog/sysdepartmentSelectHigherdialog.component';
import { SyssetupdialogComponent } from './dialog/syssetupdialog.component';
import { SystransferdialogComponent } from './dialog/systransferdialog.component';
import { SyscompanychangeComponent } from './syscompanychange.component';
import { SyscompanyComponent } from './syscompany.component';
import { SyscompanyaddComponent } from './syscompanyadd.component';
import { SyscompanychangeauditComponent } from './syscompanychangeaudit.component';
import { SyscompanydetailComponent } from './syscompanydetail.component';
import { SyscompanyrelationComponent } from './syscompanyrelation.component';
import { SysdepartmentComponent } from './sysdepartment.component';
import { SysdepartmentaddComponent } from './sysdepartmentadd.component';
import { SysdepartmenteditComponent } from './sysdepartmentedit.component';
import { SyscompanyeditComponent } from './syscompanyedit.component';
import { SyscontactComponent } from './syscontact.component';
import { SysdepartmentDetailComponent } from './sysdepartmentdetail.component';
import { SysemployeeComponent } from './sysemployee.component';
import { SysemployeeeditComponent } from './sysemployeeedit.component';
import { SysorganizationdimensionComponent } from './sysorganizationdimension.component';
import { SysorganizationdimensioneditComponent } from './sysorganizationdimensionedit.component';
import { SysorgdimrelationeditComponent } from './sysorgdimrelationedit.component';
import { SysorgdimrelationComponent } from './sysorgdimrelation.component';
import { SysroleComponent } from './sysrole.component';
import { SyscompanySelectHigherdialogComponent } from './dialog/syscompanySelectHigherdialog.component';
import { SysroleeditdialogComponent } from './dialog/sysroleeditdialog.component';
 
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(Routers),
    FccoreModule,
    FccomponentModule
  ],
  declarations: [
    CompanyrelationdeletedialogComponent,
    CompanyrelationtransferdialogComponent,
    DepartmentcanceldialogComponent,
    DepartmenttransferdialogComponent,
    SysadjustdialogComponent,
    SyscanceldialogComponent,
    SyscompanycanceldialogComponent,
    SyscompanyrelationdeletedialogComponent,
    SyscompanyrelationtransferdialogComponent,
    syscompanytransferdialogComponent,
    SyscompanySelectHigherdialogComponent,
    SyscompanyrelationtransferdialogComponent,
    SysdepartmentSelectHigherdialogComponent,
    SyssetupdialogComponent,
    SystransferdialogComponent,
    SyscompanyComponent,
    SyscompanyaddComponent,
    SyscompanychangeComponent,
    SyscompanychangeauditComponent,
    SyscompanydetailComponent,
    SyscompanyeditComponent,
    SyscompanyrelationComponent,
    SyscontactComponent,
    SysdepartmentComponent,
    SysdepartmentaddComponent,
    SysdepartmenteditComponent,
    SysdepartmentDetailComponent,
    SysemployeeComponent,
    SysemployeeeditComponent,
    SysorganizationdimensionComponent,
    SysorganizationdimensioneditComponent,
    SysorgdimrelationeditComponent,
    SysorgdimrelationComponent,
    SysroleComponent,
    SysroleeditdialogComponent,
  ]
})
export class FcsystemorgModule {
}
