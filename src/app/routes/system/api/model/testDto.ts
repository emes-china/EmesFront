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
 * 测试Dto  Desc:测试Dto
 */
export interface TestDto { 
    /**
     * 字符串测试
     */
    strTest: string;
    /**
     * 邮箱测试
     */
    email?: string;
    /**
     * 邮箱2
     */
    email2?: string;
    /**
     * decimal测试
     */
    total: number;
    /**
     * 字符串长度
     */
    minMaxStc?: string;
    /**
     * 密码测试
     */
    password: string;
    /**
     * 只读测试
     */
    readOnly?: string;
    /**
     * 隐藏测试
     */
    hidden?: string;
    /**
     * 时间
     */
    dateTime?: Date;
    myProperty?: number;
    id?: string;
}
