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
 * 创建岗位Dto  Desc:创建岗位领域模型Dto
 */
export interface CreatePostDto { 
    /**
     * 部门  Desc:部门
     */
    orgId: string;
    /**
     * 岗位编号  Desc:岗位编号
     */
    no: string;
    /**
     * 岗位名称  Desc:岗位名称
     */
    name: string;
    /**
     * 助记码  Desc:助记码
     */
    mnemonicCode: string;
    /**
     * 关键岗位  Desc:是否关键岗位
     */
    isKey: boolean;
    /**
     * 所属类型  Desc:所属类型
     */
    type: number;
    /**
     * 岗位职责  Desc:岗位职责
     */
    responsibility?: string;
    /**
     * 岗位描述  Desc:岗位描述
     */
    desc?: string;
}
