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
 * 表单详情Dto  Desc:表单领域模型详情Dto
 */
export interface FormDto { 
    /**
     * 标题
     */
    title?: string;
    /**
     * 表单名称
     */
    name?: string;
    desc?: string;
    /**
     * 表单类型，0：默认动态表单；1：Web自定义表单
     */
    frmType?: number;
    /**
     * 系统页面标识，当表单类型为用Web自定义的表单时，需要标识加载哪个页面
     */
    webId?: string;
    /**
     * 字段个数
     */
    fields?: number;
    /**
     * 表单中的控件属性描述
     */
    contentData?: string;
    /**
     * 表单控件位置模板
     */
    contentParse?: string;
    /**
     * 表单原html模板未经处理的
     */
    content?: string;
    /**
     * 排序码
     */
    sortCode?: number;
    /**
     * 当前状态
     */
    status?: number;
    id?: string;
}
