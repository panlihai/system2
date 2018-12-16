import { Component, OnInit } from '@angular/core';
import { ParentEditComponent } from 'fccomponent2';
import { FCEVENT } from 'fccomponent2/fc'; 
import SysemployeeBusiness from '../../business/sysemployee.business';
import { CommonService } from 'fccore2/common/common';
import { FCCONFIG } from 'fccore2';
@Component({
  selector: 'sysemployeeedit',
  template: `
  <fc-layoutpanel fccontent class="adduser">
  <fc-tlbform [fcAppid]="appId" (fcEvent)="tlbformEvent($event)" fctoolbar></fc-tlbform>
  <fc-title fcLabel="员工基本信息" fccontent fcBorder="bottom"></fc-title>
  <fc-layoutcol fccontent fcSpans="1,1">
      <fc-text fcLabel="姓名" fccontent1 [(ngModel)]="mainObj.SEMPLOYEE_NAME"></fc-text>   
      <fc-radio [fcLabel]="'性别'" [(ngModel)]="mainObj.SGENDER" [fcAppid]="appId" fccontent1 fcFieldCode="SGENDER" fcLabelCode="DICDESC" fcValueCode="DICVALUE"></fc-radio>
      <fc-text  fcLabel="所属单位" fccontent1 [(ngModel)]="mainObj.SCOMPANY_CODE" fcAddOnAfterIcon="icon iconfont fc-icon-bgsearch"(click)="modalMullist1.showModal()"  fcPlaceHolder="请选择所属单位">
      </fc-text>
      <fc-modallist #modalMullist1 fcTitle="请选择单位" [fcAppid]="'SYSCOMPANY'" [fcType]="'multiple'" (fcEvent)="companyEvent($event)">
      </fc-modallist>       
      <fc-date fccontent1 fcFormat="YYYY/MM/DD"  [fcLabel]="'出生日期'" [(ngModel)]="mainObj.SBIRTH_DATE" ></fc-date>         
      <fc-date fccontent1 [fcLabel]="'开始工作日期'" fcFormat="YYYY/MM/DD" [(ngModel)]="mainObj.SFIRST_WORK_DATE" ></fc-date>     
      <fc-text fcLabel="工号" fccontent2 [(ngModel)]="mainObj.SEMPLOYEE_CODE"></fc-text>
      <fc-text fcLabel="年龄" fccontent2 [(ngModel)]="mainObj.IAGE"></fc-text> 
      <fc-text  fcLabel="所属部门" fccontent2 [(ngModel)]="mainObj.SDEPT_CODE" fcAddOnAfterIcon="icon iconfont fc-icon-bgsearch" (click)="modalMullist2.showModal()"  fcPlaceHolder="请选择所属部门">
      </fc-text>
      <fc-modallist #modalMullist2 fcTitle="请选择部门" [fcAppid]="'SYSDEPARTMENT'" [fcType]="'multiple'" (fcEvent)="departmentEvent($event)">
      </fc-modallist>   
      <fc-text fcLabel="出生地" fccontent2 [(ngModel)]="mainObj.SBIRTH_PLACE"></fc-text>               
      <fc-text fcLabel="证件号码" fccontent2 [(ngModel)]="mainObj.SPERSONAL_ID"></fc-text> 
      <fc-radio [fcLabel]="'是否系统管理员'" [(ngModel)]="mainObj.SCRATOR" [fcAppid]="appId" fccontent1 fcFieldCode="SCRATOR" fcLabelCode="DICDESC" fcValueCode="DICVALUE"></fc-radio>    
  </fc-layoutcol>             
  <fc-layoutcol fccontent fcSpans="1,0" class="fristNoShow" [ngClass]="{'showRole':this.mainObj.SCRATOR==='Y'}" >
      <fc-title fcLabel="设置系统管理员角色" fccontent1 fcBorder="bottom"></fc-title>
      <fc-check [fcLabel]="'待选角色'" [fcAppid]="'SYSROLE'" fccontent1 [(ngModel)]="employeeroleValue" fcFieldCode="ROLEID" fcLabelCode="ROLENAME" fcValueCode="ROLEID" (ngModelChange)="checkeditrole($event)"></fc-check>        
  </fc-layoutcol>
  <fc-title fcLabel="管控单位" fccontent fcBorder="bottom"></fc-title>
  <fc-button fccontent fcLabel="选择单位" ></fc-button>
</fc-layoutpanel>
  `,
  styles: [`
  :host ::ng-deep .edituser>.fc-layoutpanel{
    height: 100%;
    overflow: auto;
    padding: 5px;
  }
  :host ::ng-deep .select-role,.selected-role{
    height:300px;
    border:1px solid #8C8C8C;
  }
  :host ::ng-deep .select-role{
    margin:0px 20px 0px 90px;
  }
  .select-roleheader{
    background-color:#ECF6FD;
    height: 25px;
    text-align: center;
    line-height: 25px;
    border-bottom: 1px solid #8C8C8C;
  }
  .selected-role {
    margin-right: 80px;
  }
  :host ::ng-deep .operat-buttons .fc-content{
    padding-top:70px;
    padding-left: 5px;
  }
  :host ::ng-deep .operat-buttons button {
    width: 60px;
    margin-bottom: 15px;
  }
  `]
})
export class SysemployeeeditComponent extends ParentEditComponent {
  //待选角色
  employeeroleValue: string = '';
  //修改之后的角色
  newroleArr: any[] = [];
  constructor() {
    super("SYSTEM", "SYSEMPLOYEE");
  }
  init(): void {
    //初始化员工的角色信息
    if (this.mainObj.SEMPLOYEE_CODE !== '') {
      this.getemployeeRole(this.mainObj.SEMPLOYEE_CODE);
    }
  }
  event(eventName: string, context: any): void {
  }
  addNew(mainObj: any): boolean {
    return true;
  }
  beforeSave(): boolean {
    //保存之前需要先把出生日期和开始工作的时间转化为字符串来进行存储
    if (typeof (this.mainObj.SBIRTH_DATE) === 'number') {
      //当不选择出生日期时
      this.mainObj.SBIRTH_DATE = CommonService.timestampFormat(this.mainObj.SBIRTH_DATE, 'yyyy/MM/dd');
    } else {
      //当重新选择出生日期时
      this.mainObj.SBIRTH_DATE = CommonService.dateFormat(this.mainObj.SBIRTH_DATE, 'yyyy/MM/dd');
    }
    if (typeof (this.mainObj.SFIRST_WORK_DATE) === 'number') {
      //当不选择开始工作日期时
      this.mainObj.SFIRST_WORK_DATE = CommonService.timestampFormat(this.mainObj.SFIRST_WORK_DATE, 'yyyy/MM/dd');
    } else {
      //当重新选开始工作日期时
      this.mainObj.SFIRST_WORK_DATE = CommonService.dateFormat(this.mainObj.SFIRST_WORK_DATE, 'yyyy/MM/dd');
    }
    return true;
  };
  afterSave() {
    if (this.mainObj.SCRATOR === 'Y') {
      //将用户的角色信息存储到数据库里面
      SysemployeeBusiness.addEmployeerole(this.employeeroleValue, this.mainObj);
    }
    if (this.newroleArr.length !== 0) {
      //获取该用户的角色信息，并且从数据库里面删除,
      SysemployeeBusiness.getemployeeRole(this.mainObj.SEMPLOYEE_CODE).subscribe(res => {
        if (res.CODE === '0') {
          res.DATA.forEach(element => {
            SysemployeeBusiness.alldelete(element.ID);
          })
        } else if (res.CODE === '1') {
          SysemployeeBusiness.msgService.error('获取该员工角色信息失败')
        }
        //将修改后的用户角色信息添加到数据库  
        this.newroleArr.forEach(element => {
          SysemployeeBusiness.editEmployeerole(element);
        })
      })
    }
  }
  /*
  * 选择单位，将选择的数据显示到文本框中
   */
  companyEvent(event: FCEVENT) {
    switch (event.eventName) {
      case 'success':
        this.mainObj.COMPANYNAME = event.param[0].SCOMPANY_NAME;
        this.mainObj.SCOMPANY_CODE = event.param[0].SCOMPANY_CODE;
        break;
      case 'cacle':
        break;
    }
  }
  /*
 * 选择部门，将选择的数据显示到文本框中
  */
  departmentEvent(event: FCEVENT) {
    switch (event.eventName) {
      case 'success':
        this.mainObj.DEPTNAME = event.param[0].SDEPT_NAME;
        this.mainObj.SDEPT_CODE = event.param[0].SDEPT_CODE;
        break;
      case 'cacle':
        break;
    }
  }
  /**
  * 关联该用户的角色 
  * @param uerid
  */
  getemployeeRole(uerid) {
    SysemployeeBusiness.getemployeeRole(uerid).subscribe(result => {
      if (result.CODE = '0') {
        result.DATA.forEach(element => {
          this.employeeroleValue += element.ROLEID;
        })
      }
    })
  }
  /**
   * 用户角色的修改
   * @param event
   */
  checkeditrole(event) {
    //获取修改用户的所有角色
    let newRole: any[] = [];
    if (event.indexOf(',') !== -1) {
      event.split(',').forEach(element => {
        newRole.push({
          PID: FCCONFIG.pid,
          ROLEID: element,
          USERID: this.mainObj.SEMPLOYEE_CODE,
          REMARK: '修改用户角色'
        });
      })
    } else if (event.indexOf(',') === -1 && event !== '') {
      newRole = [{
        PID: FCCONFIG.pid,
        ROLEID: event,
        USERID: this.mainObj.SEMPLOYEE_CODE,
        REMARK: '修改用户角色'
      }]
    }
    this.newroleArr = newRole;
  }
}