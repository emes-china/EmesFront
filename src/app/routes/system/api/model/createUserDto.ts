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
 * 创建用户Dto  Desc:创建用户领域模型Dto
 */
export interface CreateUserDto { 
    /**
     * 用户登录帐号
     */
    account?: string;
    /**
     * 密码
     */
    password?: string;
    /**
     * 用户姓名
     */
    name?: string;
    /**
     * 性别
     */
    sex?: number;
    /**
     * 用户状态
     */
    status?: number;
    orgId?: string;
}
