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
 * 创建模块Dto  Desc:创建模块领域模型Dto
 */
export interface CreateModuleDto { 
    /**
     * 上级模块  Desc:上级机构
     */
    parentId?: string;
    name?: string;
    /**
     * 排序号
     */
    sortNo?: number;
    /**
     * 节点语义ID
     */
    cascadeId?: string;
    /**
     * 权限编码
     */
    aclCode?: number;
    /**
     * 模块标记
     */
    code?: string;
    /**
     * 地址
     */
    url?: string;
    /**
     * 图标
     */
    icon?: string;
    /**
     * 分组
     */
    group?: boolean;
}
