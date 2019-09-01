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
 * 模块元素详情Dto  Desc:模块领域模型详情Dto
 */
export interface ModuleElementDto { 
    /**
     * 权限编码
     */
    aclCode?: string;
    /**
     * 名称
     */
    name?: string;
    /**
     * 元素调用脚本
     */
    script?: string;
    /**
     * 元素图标
     */
    icon?: string;
    /**
     * 排序字段
     */
    sort?: number;
    /**
     * 功能模块Id
     */
    moduleId?: string;
    id?: string;
}
