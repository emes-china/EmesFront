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
 * 角色详情Dto  Desc:角色领域模型详情Dto
 */
export interface RoleDto { 
    /**
     * 名称  Desc:名称
     */
    name: string;
    /**
     * 备注  Desc:岗位编备注号
     */
    notes?: string;
    /**
     * 系统角色  Desc:是否系统角色
     */
    isSystemRole: boolean;
    id?: string;
}
