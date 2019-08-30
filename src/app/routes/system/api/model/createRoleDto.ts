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
 * 创建角色Dto  Desc:创建角色领域模型Dto
 */
export interface CreateRoleDto { 
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
}
