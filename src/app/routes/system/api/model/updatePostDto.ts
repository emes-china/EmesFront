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
 * 更新岗位Dto  Desc:更新岗位领域模型Dto
 */
export interface UpdatePostDto { 
    /**
     * 部门  部门
     */
    orgId: string;
    /**
     * 岗位编号  岗位编号
     */
    no: string;
    /**
     * 岗位名称  岗位名称
     */
    name: string;
    /**
     * 助记码  助记码
     */
    mnemonicCode: string;
    /**
     * 关键岗位  是否关键岗位
     */
    isKey: boolean;
    /**
     * 所属类型  所属类型
     */
    type: number;
    /**
     * 岗位职责  岗位职责
     */
    responsibility?: string;
    /**
     * 岗位描述  岗位描述
     */
    desc?: string;
    id?: string;
}
