/* 	元数据 */
import { Observable } from 'rxjs';
import ParentBusiness from 'fccore2/classes/parent.business';
import SystemBusiness from 'fccore2/classes/system.business';
import { CommonService } from 'fccore2/common/common';
export class SysmenuBusiness extends ParentBusiness {

	/**
	* 获取所有菜单
	* @param {page:1,size:20,...}
	* @description 查詢
	*/
	static getMenu(pid?: string): Observable<any> {
		let url = CommonService.getUrlBy("ajax/" + pid, "TOP", "SYSMENU/showMenus");
		return this.daoService.getFromSystem(url, { P_MENUID: pid });
	}

	  
	/**
    * 两个对象交换排序
    * @param menu1 对象1
    * @param menu2 对象2
    * @param index 索引
    * @param menus 导航
    */
	static changeSort(menu1, menu2, index, menus): Observable<any> {
		let temp = menus[index];
		menus[index] = menus[index - 1];
		menus[index - 1] = temp;
		let sort = menu1.SORT;
		menu1.SORT = menu2.SORT;
		//交换两者的排序
		menu2.SORT = sort;
		menu1.WHERE = "{ID:{eq:'" + menu1.ID + "'}}";
		menu2.WHERE = "{ID:{eq:'" + menu2.ID + "'}}";
		return SystemBusiness.appService.updateObject('SYSMENU', [menu1, menu2]);
	} 
}

