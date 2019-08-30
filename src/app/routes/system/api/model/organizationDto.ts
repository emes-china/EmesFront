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
 * 组织机构详情Dto  Desc:组织机构领域模型详情Dto
 */
export interface OrganizationDto { 
    /**
     * 上级机构  Desc:上级机构
     */
    parentId?: string;
    name?: string;
    /**
     * 当前状态
     */
    status?: number;
    /**
     * 排序号
     */
    sortNo?: number;
    id?: string;
}
