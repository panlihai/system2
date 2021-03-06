import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { FCEVENT } from 'fccomponent2/fc';
import { ParentEditComponent } from 'fccomponent2/parentedit.component';
import SysdepartmentBusiness from '../../../business/sysdepartment.business';
 import { CommonService } from 'fccore2/common/common';
/* 单位管理-转移弹窗 */
@Component({
    selector: 'departmenttransferdialog',
    template: `
<fc-layoutpanel class="templatefastposition ">
    <fc-layoutrow fcSpan="30" fccontent>
            <fc-layoutpanel fccontent2>
                <form fccontent>
                    <fc-layoutpanel fccontent id="basic-information">
                        <fc-title fcLabel="变更信息" fcBorder="bottom" fcWidth="96%" fcheader></fc-title>
                        <fc-layoutcol fcSpans="1,1" fccontent>
                            <fc-date [fcLabel]="'生效日期'"  name="REVOKE_SBEGIN_DATE"  fccontent1></fc-date>
                            <fc-text [fcLabel]="'变更文号'"  name="textname" fccontent2></fc-text>                            
                        </fc-layoutcol>
                        <fc-layoutcol fcSpans="1,0" fccontent >
                            <fc-textarea [fcLabel]="'变更原因'"  name="textareaname" fcRow="2" fccontent1 class="line-col"></fc-textarea>                          
                        </fc-layoutcol>
                        <fc-layoutcol fcSpans="8,1" fccontent>
                            <fc-text [fcLabel]="'附件'" name="textname" fccontent1 class="attachment"></fc-text>  
                            <div class="sys-choose-icon-upload" fccontent2>
                                <fc-upload fcListType="icon" fcShowLabel="N" fccontent class="upload-content attachment-btn" (fcEvent)="event('fileEvent',$event)"
                                    [fcOption]="fcUploadOption">
                                </fc-upload>
                            </div>                          
                        </fc-layoutcol>
                    </fc-layoutpanel>
                    <fc-layoutpanel fccontent id="higher-unit">
                        <fc-title fcLabel="上级单位" fcBorder="bottom" fcheader fcWidth="96%"></fc-title>
                        <table border="1" fccontent class="fc-table">
                            <thead>
                                <tr>
                                    <th>上级</th>
                                    <th>生效日期</th>
                                    <th>失效日期</th>
                                </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>
                                    <span style="width: 191px;display: inline-block;margin-left: -49px;margin-right: 5px;">
                                        <fc-text style="display: none" [fcLabel]="" [fcShowLabel]="'N'" [(ngModel)]="parentDepObj.SDEPT_CODE" name="SPOST_CODE"></fc-text>
                                        <fc-text [fcLabel]="" [fcShowLabel]="'N'" [(ngModel)]="parentDepObj.SDEPT_NAME" name="SPOST_CODE"></fc-text>
                                    </span>
                                    <!-- 弹出部门模态框 -->
                                    <span style="display: inline-block;z-index：9999;">
                                        <button nz-button [nzType]="'primary'" (click)="showModal()"><span>打开部门</span></button> 
                                    </span>
                                    <!-- 弹出部门模态框结束 -->
                                </td>
                                <td>
                                    <fc-date [fcLabel]="" [fcShowLabel]="'N'" fcFormat="YYYYMMDD" [(ngModel)]="SBEGIN_DATE" fcPlaceHolder="请输入生效日期"
                                    name="SBEGIN_DATE"></fc-date>
                                </td>
                                <td>
                                    <fc-date [fcLabel]="" [fcShowLabel]="'N'" fcFormat="YYYYMMDD" [(ngModel)]="SEND_DATE" fcPlaceHolder="请输入失效日期" name="SEND_DATE"></fc-date>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </fc-layoutpanel>
                </form>
            </fc-layoutpanel>
    </fc-layoutrow>
</fc-layoutpanel>
<!-- 弹出部门模态框 -->
<fc-modalcard fcTitle="选择上级部门" [fcToken]="token1" [fcFooter]="null">
    <sysdepartmentSelectHigherdialog [fcToken]="token1" [depObj]="parentDepObj" fccontent></sysdepartmentSelectHigherdialog>
</fc-modalcard>
<!-- 弹出部门模态框结束 -->
<div class="customize-footer">
<fc-button  [fcType]="'primary'" fcLabel="确定" (click)="ok($event)">
</fc-button>
<fc-button [fcType]="'default'" fcLabel="取消"  (click)="cancel($event)">
</fc-button>
</div>
    `,
    styles: [`
    :host ::ng-deep ..ant-modal-wrap{
        z-index:9999 !important;
    }
    .customize-footer{
      padding: 4px 13px;
      text-align: right;
      position: absolute;
      bottom: 0;
      width: 100%;
      left: 0;
     }
     .customize-footer fc-button{
      margin-left:8px;
     }
  `]
})
export class DepartmenttransferdialogComponent extends ParentEditComponent {
    //弹窗唯一标识
    @Input()
    fcToken: string;
    @Input()
    comp_id: string;   
    
    // @ViewChild('tree')
    // tree: FctreeComponent;

    //选择上级部门弹窗标识符
    token1: string = CommonService.guid();
    parentDepObj: any;

    // //部门树的配置
    // departmentTreeOptions: any;
    // //树选中节点
    // selectedTreeObj: any;

    //隶属关系 生效日期  失效日期
    SBEGIN_DATE: any;
    SEND_DATE: any;
    //上级单位信息对象
    relationObj: any = {};
    //上传文件配置
    fcUploadOption: any = { FILETYPE: 'PIC', SOURCEID: 'dd90c093667947c4a4265e001602b9cd', SOURCEAID: 'SYSAPP', 'SOURCEFIELD': 'APPURL', 'RESTITLE': '' }

    constructor() {
        super('SYSTEM', 'SYSDEPARTMENT');
    }
    init(): void {
        this.
            parentDepObj = {
                SDEPT_NAME: "",
                SDEPT_CODE: ""
            };
        // //初始化树结构
        // this.departmentTreeOptions = SysdepartmentBusiness.departmentTreeOptions;
        //生效日期 
        this.SBEGIN_DATE = CommonService.getDateByTimetamp(CommonService.getTimestamp());
        //失效日期    
        this.SEND_DATE = CommonService.getDateByTimetamp(CommonService.getTimestampFromDate("2099-12-31"));
    }

    /**
   * 确定
   */
    ok() {
        CommonService.event(this.fcToken + '-close', {});
        this.mainObj.ID;// CommonService.guid();
        SysdepartmentBusiness.getDataByAppID_Col_Val("SYSDEPARTMENTRELATION", "SDEPT_CODE", this.comp_id).subscribe((result) => {
            if (result.CODE === '0') {
                this.relationObj = result.DATA[0];
                this.relationObj.SPARENT_CODE = this.parentDepObj.SDEPT_CODE;
                this.relationObj.SMODIFIER = SysdepartmentBusiness.userService.getUserInfo().USERCODE;//创建人
                this.relationObj.SMODFIY_TIME = CommonService.timestampFormat(CommonService.getTimestamp() * 1000, 'yyyyMMdd');//创建时间

                //TODO 
                /*
                1 保存时修改全路径
                2 修改该部门的所有下级部门的全路径
                */
                this.relationObj.SBEGIN_DATE = CommonService.dateFormat(this.SBEGIN_DATE, 'yyyyMMdd');
                this.relationObj.SEND_DATE = CommonService.dateFormat(this.SEND_DATE, 'yyyyMMdd');
                SysdepartmentBusiness.saveOrUpdateExtendDepartment("SYSDEPARTMENTRELATION", this.relationObj).subscribe(result => {
                    if (result[0].CODE === '0') {
                        SysdepartmentBusiness.msgService.message('保存成功');
                        CommonService.event(this.fcToken + '-close', {});
                    }
                });
            } else {
                SysdepartmentBusiness.msgService.error("保存失败," + result[0].MSG + ',' + result[1].MSG);
            }
        })
    }

    /**
     * 关闭转移部门窗口
     */
    cancel() {
        CommonService.event(this.fcToken + '-close', {});
    } 
    /*
    * 弹出上级部门选择框
    */
    showModal(): void {
        this.parentDepObj = {
            SDEPT_NAME: "",
            SDEPT_CODE: ""
        }
        CommonService.event(this.token1 + '-opened', {});
    }

    addNew(mainObj: any): boolean {
        return true;
    }
    event(eventName: string, param: any): void {
    }
    
    tlblistEvent(event: FCEVENT) {
    } 
}