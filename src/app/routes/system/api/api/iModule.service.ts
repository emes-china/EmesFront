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
import { HttpResultMessageModuleDto } from '../model/httpResultMessageModuleDto';
import { Id } from '../model/id';
import { Request } from '../model/request';
import { Request1 } from '../model/request1';
import { Request2 } from '../model/request2';
import { Request3 } from '../model/request3';
 


@Injectable({
  providedIn: 'root'
})
export class IModuleService {


    constructor(protected http:_HttpClient) {
    }


    /**
     * 创建模块
     * 
     * @param request 
* @param servicekey 
* @param authorization 
     */
    public create(request: Request, servicekey?: any, authorization?: any, observe?: 'body'): Observable<HttpResultMessageModuleDto>;
    public create(request: Request, servicekey?: any, authorization?: any, observe?: 'response'): Observable<HttpResponse<HttpResultMessageModuleDto>>;
    public create(request: Request, servicekey?: any, authorization?: any, observe?: 'events'): Observable<HttpEvent<HttpResultMessageModuleDto>>;
    public create(request: Request, servicekey?: any, authorization?: any, observe: any = 'body'): Observable<any> {

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
     * 删除模块
     * 
     * @param request 
* @param servicekey 
* @param authorization 
     */
    public delete(request: Request1, servicekey?: any, authorization?: any, observe?: 'body'): Observable<HttpResultMessageModuleDto>;
    public delete(request: Request1, servicekey?: any, authorization?: any, observe?: 'response'): Observable<HttpResponse<HttpResultMessageModuleDto>>;
    public delete(request: Request1, servicekey?: any, authorization?: any, observe?: 'events'): Observable<HttpEvent<HttpResultMessageModuleDto>>;
    public delete(request: Request1, servicekey?: any, authorization?: any, observe: any = 'body'): Observable<any> {

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
    public getbyid(id: Id, servicekey?: any, authorization?: any, observe?: 'body'): Observable<HttpResultMessageModuleDto>;
    public getbyid(id: Id, servicekey?: any, authorization?: any, observe?: 'response'): Observable<HttpResponse<HttpResultMessageModuleDto>>;
    public getbyid(id: Id, servicekey?: any, authorization?: any, observe?: 'events'): Observable<HttpEvent<HttpResultMessageModuleDto>>;
    public getbyid(id: Id, servicekey?: any, authorization?: any, observe: any = 'body'): Observable<any> {

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
     * 查询模块列表
     * 
     * @param request 
* @param servicekey 
* @param authorization 
     */
    public query(request: Request2, servicekey?: any, authorization?: any, observe?: 'body'): Observable<HttpResultMessageIEnumerableModuleDto>;
    public query(request: Request2, servicekey?: any, authorization?: any, observe?: 'response'): Observable<HttpResponse<HttpResultMessageIEnumerableModuleDto>>;
    public query(request: Request2, servicekey?: any, authorization?: any, observe?: 'events'): Observable<HttpEvent<HttpResultMessageIEnumerableModuleDto>>;
    public query(request: Request2, servicekey?: any, authorization?: any, observe: any = 'body'): Observable<any> {

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
     * 更新模块
     * 
     * @param request 
* @param servicekey 
* @param authorization 
     */
    public update(request: Request3, servicekey?: any, authorization?: any, observe?: 'body'): Observable<HttpResultMessageModuleDto>;
    public update(request: Request3, servicekey?: any, authorization?: any, observe?: 'response'): Observable<HttpResponse<HttpResultMessageModuleDto>>;
    public update(request: Request3, servicekey?: any, authorization?: any, observe?: 'events'): Observable<HttpEvent<HttpResultMessageModuleDto>>;
    public update(request: Request3, servicekey?: any, authorization?: any, observe: any = 'body'): Observable<any> {

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
