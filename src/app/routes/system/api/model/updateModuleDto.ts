/**
 * Emes.Erp.ISystem
 *
 * OpenAPI spec version: 1.0.0.0
 * 
 *
 * NOTE: 当前文件是由工具自动生成，请不要修改.
 * Copyright (c) 2019-present anber<shuangyan_m@hotmail.com>
 * Do not edit the class manually.
 */


/**
 * 更新模块Dto  Desc:更新模块领域模型Dto
 */
export interface UpdateModuleDto { 
    /**
     * 上级模块  Desc:上级机构
     */
    parentId?: string;
    name?: string;
    domId?: string;
    /**
     * 样式
     */
    style?: string;
    /**
     * 图标
     */
    icon?: string;
    /**
     * 排序号
     */
    sortNo?: number;
    /**
     * 备注
     */
    remark?: string;
    id?: string;
}
