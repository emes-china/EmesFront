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
/* tslint:disable:no-unused-variable member-ordering */
import { Injectable } from '@angular/core';
import { _HttpClient } from '@delon/theme';
import { Observable } from 'rxjs';
import {
  HttpClient,
  HttpHeaders,
  HttpParams,
  HttpResponse,
  HttpEvent
} from "@angular/common/http";
import { CustomHttpUrlEncodingCodec } from "../encoder";

import { HttpResultMessageIEnumerableModuleDto } from '../model/httpResultMessageIEnumerableModuleDto';
import { HttpResultMessageIEnumerableModuleElementDto } from '../model/httpResultMessageIEnumerableModuleElementDto';
import { HttpResultMessageModuleDto } from '../model/httpResultMessageModuleDto';
import { HttpResultMessageModuleElementDto } from '../model/httpResultMessageModuleElementDto';
import { Id1 } from '../model/id1';
import { Id2 } from '../model/id2';
import { Request10 } from '../model/request10';
import { Request11 } from '../model/request11';
import { Request12 } from '../model/request12';
import { Request13 } from '../model/request13';
import { Request5 } from '../model/request5';
import { Request6 } from '../model/request6';
import { Request7 } from '../model/request7';
import { Request8 } from '../model/request8';
import { Request9 } from '../model/request9';
 


@Injectable({
  providedIn: 'root'
})
export class IModuleService {


    constructor(protected http:_HttpClient) {
    }


    /**
     * 创建模块元素
     * 
     * @param request 
* @param servicekey 
* @param authorization 
     */
    public createelement(request: Request6, servicekey?: any, authorization?: any, observe?: 'body'): Observable<HttpResultMessageModuleElementDto>;
    public createelement(request: Request6, servicekey?: any, authorization?: any, observe?: 'response'): Observable<HttpResponse<HttpResultMessageModuleElementDto>>;
    public createelement(request: Request6, servicekey?: any, authorization?: any, observe?: 'events'): Observable<HttpEvent<HttpResultMessageModuleElementDto>>;
    public createelement(request: Request6, servicekey?: any, authorization?: any, observe: any = 'body'): Observable<any> {

        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling createelement.');
        }


        const queryParameters:any = {};
  
        if (servicekey !== undefined && servicekey !== null) {
            queryParameters.servicekey = servicekey;
        }


        return this.http.post<HttpResultMessageModuleElementDto>(`/api/module/createelement`,
            request,
            
                 queryParameters,
    
            {
               
                observe,
            }
        );
    }

    /**
     * 创建模块
     * 
     * @param request 
* @param servicekey 
* @param authorization 
     */
    public create(request: Request5, servicekey?: any, authorization?: any, observe?: 'body'): Observable<HttpResultMessageModuleDto>;
    public create(request: Request5, servicekey?: any, authorization?: any, observe?: 'response'): Observable<HttpResponse<HttpResultMessageModuleDto>>;
    public create(request: Request5, servicekey?: any, authorization?: any, observe?: 'events'): Observable<HttpEvent<HttpResultMessageModuleDto>>;
    public create(request: Request5, servicekey?: any, authorization?: any, observe: any = 'body'): Observable<any> {

        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling create.');
        }


        const queryParameters:any = {};
  
        if (servicekey !== undefined && servicekey !== null) {
            queryParameters.servicekey = servicekey;
        }


        return this.http.post<HttpResultMessageModuleDto>(`/api/module/create`,
            request,
            
                 queryParameters,
    
            {
               
                observe,
            }
        );
    }

    /**
     * 删除模块元素
     * 
     * @param request 
* @param servicekey 
* @param authorization 
     */
    public deleteelement(request: Request8, servicekey?: any, authorization?: any, observe?: 'body'): Observable<HttpResultMessageModuleElementDto>;
    public deleteelement(request: Request8, servicekey?: any, authorization?: any, observe?: 'response'): Observable<HttpResponse<HttpResultMessageModuleElementDto>>;
    public deleteelement(request: Request8, servicekey?: any, authorization?: any, observe?: 'events'): Observable<HttpEvent<HttpResultMessageModuleElementDto>>;
    public deleteelement(request: Request8, servicekey?: any, authorization?: any, observe: any = 'body'): Observable<any> {

        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling deleteelement.');
        }


        const queryParameters:any = {};
  
        if (servicekey !== undefined && servicekey !== null) {
            queryParameters.servicekey = servicekey;
        }


        return this.http.post<HttpResultMessageModuleElementDto>(`/api/module/deleteelement`,
            request,
            
                 queryParameters,
    
            {
               
                observe,
            }
        );
    }

    /**
     * 删除模块
     * 
     * @param request 
* @param servicekey 
* @param authorization 
     */
    public delete(request: Request7, servicekey?: any, authorization?: any, observe?: 'body'): Observable<HttpResultMessageModuleDto>;
    public delete(request: Request7, servicekey?: any, authorization?: any, observe?: 'response'): Observable<HttpResponse<HttpResultMessageModuleDto>>;
    public delete(request: Request7, servicekey?: any, authorization?: any, observe?: 'events'): Observable<HttpEvent<HttpResultMessageModuleDto>>;
    public delete(request: Request7, servicekey?: any, authorization?: any, observe: any = 'body'): Observable<any> {

        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling delete.');
        }


        const queryParameters:any = {};
  
        if (servicekey !== undefined && servicekey !== null) {
            queryParameters.servicekey = servicekey;
        }


        return this.http.post<HttpResultMessageModuleDto>(`/api/module/delete`,
            request,
            
                 queryParameters,
    
            {
               
                observe,
            }
        );
    }

    /**
     * 根据Id获取模块
     * 
     * @param id 
* @param servicekey 
* @param authorization 
     */
    public getbyid(id: Id1, servicekey?: any, authorization?: any, observe?: 'body'): Observable<HttpResultMessageModuleDto>;
    public getbyid(id: Id1, servicekey?: any, authorization?: any, observe?: 'response'): Observable<HttpResponse<HttpResultMessageModuleDto>>;
    public getbyid(id: Id1, servicekey?: any, authorization?: any, observe?: 'events'): Observable<HttpEvent<HttpResultMessageModuleDto>>;
    public getbyid(id: Id1, servicekey?: any, authorization?: any, observe: any = 'body'): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getbyid.');
        }


        const queryParameters:any = {};
  
        if (servicekey !== undefined && servicekey !== null) {
            queryParameters.servicekey = servicekey;
        }


        return this.http.post<HttpResultMessageModuleDto>(`/api/module/getbyid`,
            id,
            
                 queryParameters,
    
            {
               
                observe,
            }
        );
    }

    /**
     * 根据Id获取模块元素
     * 
     * @param id 
* @param servicekey 
* @param authorization 
     */
    public getelementbyid(id: Id2, servicekey?: any, authorization?: any, observe?: 'body'): Observable<HttpResultMessageModuleElementDto>;
    public getelementbyid(id: Id2, servicekey?: any, authorization?: any, observe?: 'response'): Observable<HttpResponse<HttpResultMessageModuleElementDto>>;
    public getelementbyid(id: Id2, servicekey?: any, authorization?: any, observe?: 'events'): Observable<HttpEvent<HttpResultMessageModuleElementDto>>;
    public getelementbyid(id: Id2, servicekey?: any, authorization?: any, observe: any = 'body'): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getelementbyid.');
        }


        const queryParameters:any = {};
  
        if (servicekey !== undefined && servicekey !== null) {
            queryParameters.servicekey = servicekey;
        }


        return this.http.post<HttpResultMessageModuleElementDto>(`/api/module/getelementbyid`,
            id,
            
                 queryParameters,
    
            {
               
                observe,
            }
        );
    }

    /**
     * 根据Ids获取模块元素
     * 
     * @param request 
* @param servicekey 
     */
    public queryelementbymids(request: Request11, servicekey?: any, observe?: 'body'): Observable<HttpResultMessageIEnumerableModuleElementDto>;
    public queryelementbymids(request: Request11, servicekey?: any, observe?: 'response'): Observable<HttpResponse<HttpResultMessageIEnumerableModuleElementDto>>;
    public queryelementbymids(request: Request11, servicekey?: any, observe?: 'events'): Observable<HttpEvent<HttpResultMessageIEnumerableModuleElementDto>>;
    public queryelementbymids(request: Request11, servicekey?: any, observe: any = 'body'): Observable<any> {

        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling queryelementbymids.');
        }

        const queryParameters:any = {};
  
        if (servicekey !== undefined && servicekey !== null) {
            queryParameters.servicekey = servicekey;
        }


        return this.http.post<HttpResultMessageIEnumerableModuleElementDto>(`/api/module/queryelementbymids`,
            request,
            
                 queryParameters,
    
            {
               
                observe,
            }
        );
    }

    /**
     * 查询模块元素列表
     * 
     * @param request 
* @param servicekey 
* @param authorization 
     */
    public queryelement(request: Request10, servicekey?: any, authorization?: any, observe?: 'body'): Observable<HttpResultMessageIEnumerableModuleElementDto>;
    public queryelement(request: Request10, servicekey?: any, authorization?: any, observe?: 'response'): Observable<HttpResponse<HttpResultMessageIEnumerableModuleElementDto>>;
    public queryelement(request: Request10, servicekey?: any, authorization?: any, observe?: 'events'): Observable<HttpEvent<HttpResultMessageIEnumerableModuleElementDto>>;
    public queryelement(request: Request10, servicekey?: any, authorization?: any, observe: any = 'body'): Observable<any> {

        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling queryelement.');
        }


        const queryParameters:any = {};
  
        if (servicekey !== undefined && servicekey !== null) {
            queryParameters.servicekey = servicekey;
        }


        return this.http.post<HttpResultMessageIEnumerableModuleElementDto>(`/api/module/queryelement`,
            request,
            
                 queryParameters,
    
            {
               
                observe,
            }
        );
    }

    /**
     * 查询模块列表
     * 
     * @param request 
* @param servicekey 
* @param authorization 
     */
    public query(request: Request9, servicekey?: any, authorization?: any, observe?: 'body'): Observable<HttpResultMessageIEnumerableModuleDto>;
    public query(request: Request9, servicekey?: any, authorization?: any, observe?: 'response'): Observable<HttpResponse<HttpResultMessageIEnumerableModuleDto>>;
    public query(request: Request9, servicekey?: any, authorization?: any, observe?: 'events'): Observable<HttpEvent<HttpResultMessageIEnumerableModuleDto>>;
    public query(request: Request9, servicekey?: any, authorization?: any, observe: any = 'body'): Observable<any> {

        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling query.');
        }


        const queryParameters:any = {};
  
        if (servicekey !== undefined && servicekey !== null) {
            queryParameters.servicekey = servicekey;
        }


        return this.http.post<HttpResultMessageIEnumerableModuleDto>(`/api/module/query`,
            request,
            
                 queryParameters,
    
            {
               
                observe,
            }
        );
    }

    /**
     * 更新模块元素
     * 
     * @param request 
* @param servicekey 
* @param authorization 
     */
    public updateelement(request: Request13, servicekey?: any, authorization?: any, observe?: 'body'): Observable<HttpResultMessageModuleElementDto>;
    public updateelement(request: Request13, servicekey?: any, authorization?: any, observe?: 'response'): Observable<HttpResponse<HttpResultMessageModuleElementDto>>;
    public updateelement(request: Request13, servicekey?: any, authorization?: any, observe?: 'events'): Observable<HttpEvent<HttpResultMessageModuleElementDto>>;
    public updateelement(request: Request13, servicekey?: any, authorization?: any, observe: any = 'body'): Observable<any> {

        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling updateelement.');
        }


        const queryParameters:any = {};
  
        if (servicekey !== undefined && servicekey !== null) {
            queryParameters.servicekey = servicekey;
        }


        return this.http.post<HttpResultMessageModuleElementDto>(`/api/module/updateelement`,
            request,
            
                 queryParameters,
    
            {
               
                observe,
            }
        );
    }

    /**
     * 更新模块
     * 
     * @param request 
* @param servicekey 
* @param authorization 
     */
    public update(request: Request12, servicekey?: any, authorization?: any, observe?: 'body'): Observable<HttpResultMessageModuleDto>;
    public update(request: Request12, servicekey?: any, authorization?: any, observe?: 'response'): Observable<HttpResponse<HttpResultMessageModuleDto>>;
    public update(request: Request12, servicekey?: any, authorization?: any, observe?: 'events'): Observable<HttpEvent<HttpResultMessageModuleDto>>;
    public update(request: Request12, servicekey?: any, authorization?: any, observe: any = 'body'): Observable<any> {

        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling update.');
        }


        const queryParameters:any = {};
  
        if (servicekey !== undefined && servicekey !== null) {
            queryParameters.servicekey = servicekey;
        }


        return this.http.post<HttpResultMessageModuleDto>(`/api/module/update`,
            request,
            
                 queryParameters,
    
            {
               
                observe,
            }
        );
    }

}
