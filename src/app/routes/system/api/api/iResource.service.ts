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

import { HttpResultMessageIEnumerableResourceDto } from '../model/httpResultMessageIEnumerableResourceDto';
import { HttpResultMessageIPagedListResourceDto } from '../model/httpResultMessageIPagedListResourceDto';
import { HttpResultMessageResourceDto } from '../model/httpResultMessageResourceDto';
import { Id5 } from '../model/id5';
import { Request24 } from '../model/request24';
import { Request25 } from '../model/request25';
import { Request26 } from '../model/request26';
import { Request27 } from '../model/request27';
import { Request28 } from '../model/request28';
import { Request29 } from '../model/request29';
 


@Injectable({
  providedIn: 'root'
})
export class IResourceService {


    constructor(protected http:_HttpClient) {
    }


    /**
     * 改变状态
     * 
     * @param request 
* @param servicekey 
* @param authorization 
     */
    public changestatus(request: Request24, servicekey?: any, authorization?: any, observe?: 'body'): Observable<any>;
    public changestatus(request: Request24, servicekey?: any, authorization?: any, observe?: 'response'): Observable<HttpResponse<any>>;
    public changestatus(request: Request24, servicekey?: any, authorization?: any, observe?: 'events'): Observable<HttpEvent<any>>;
    public changestatus(request: Request24, servicekey?: any, authorization?: any, observe: any = 'body'): Observable<any> {

        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling changestatus.');
        }


        const queryParameters:any = {};
  
        if (servicekey !== undefined && servicekey !== null) {
            queryParameters.servicekey = servicekey;
        }


        return this.http.post<any>(`/api/resource/changestatus`,
            request,
            
                 queryParameters,
    
            {
               
                observe,
            }
        );
    }

    /**
     * 创建资源
     * 
     * @param request 
* @param servicekey 
* @param authorization 
     */
    public create(request: Request25, servicekey?: any, authorization?: any, observe?: 'body'): Observable<HttpResultMessageResourceDto>;
    public create(request: Request25, servicekey?: any, authorization?: any, observe?: 'response'): Observable<HttpResponse<HttpResultMessageResourceDto>>;
    public create(request: Request25, servicekey?: any, authorization?: any, observe?: 'events'): Observable<HttpEvent<HttpResultMessageResourceDto>>;
    public create(request: Request25, servicekey?: any, authorization?: any, observe: any = 'body'): Observable<any> {

        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling create.');
        }


        const queryParameters:any = {};
  
        if (servicekey !== undefined && servicekey !== null) {
            queryParameters.servicekey = servicekey;
        }


        return this.http.post<HttpResultMessageResourceDto>(`/api/resource/create`,
            request,
            
                 queryParameters,
    
            {
               
                observe,
            }
        );
    }

    /**
     * 删除资源
     * 
     * @param request 
* @param servicekey 
* @param authorization 
     */
    public delete(request: Request26, servicekey?: any, authorization?: any, observe?: 'body'): Observable<HttpResultMessageResourceDto>;
    public delete(request: Request26, servicekey?: any, authorization?: any, observe?: 'response'): Observable<HttpResponse<HttpResultMessageResourceDto>>;
    public delete(request: Request26, servicekey?: any, authorization?: any, observe?: 'events'): Observable<HttpEvent<HttpResultMessageResourceDto>>;
    public delete(request: Request26, servicekey?: any, authorization?: any, observe: any = 'body'): Observable<any> {

        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling delete.');
        }


        const queryParameters:any = {};
  
        if (servicekey !== undefined && servicekey !== null) {
            queryParameters.servicekey = servicekey;
        }


        return this.http.post<HttpResultMessageResourceDto>(`/api/resource/delete`,
            request,
            
                 queryParameters,
    
            {
               
                observe,
            }
        );
    }

    /**
     * 根据Id获取资源
     * 
     * @param id 
* @param servicekey 
* @param authorization 
     */
    public getbyid(id: Id5, servicekey?: any, authorization?: any, observe?: 'body'): Observable<HttpResultMessageResourceDto>;
    public getbyid(id: Id5, servicekey?: any, authorization?: any, observe?: 'response'): Observable<HttpResponse<HttpResultMessageResourceDto>>;
    public getbyid(id: Id5, servicekey?: any, authorization?: any, observe?: 'events'): Observable<HttpEvent<HttpResultMessageResourceDto>>;
    public getbyid(id: Id5, servicekey?: any, authorization?: any, observe: any = 'body'): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getbyid.');
        }


        const queryParameters:any = {};
  
        if (servicekey !== undefined && servicekey !== null) {
            queryParameters.servicekey = servicekey;
        }


        return this.http.post<HttpResultMessageResourceDto>(`/api/resource/getbyid`,
            id,
            
                 queryParameters,
    
            {
               
                observe,
            }
        );
    }

    /**
     * 查询资源列表
     * 
     * @param request 
* @param servicekey 
* @param authorization 
     */
    public query(request: Request27, servicekey?: any, authorization?: any, observe?: 'body'): Observable<HttpResultMessageIEnumerableResourceDto>;
    public query(request: Request27, servicekey?: any, authorization?: any, observe?: 'response'): Observable<HttpResponse<HttpResultMessageIEnumerableResourceDto>>;
    public query(request: Request27, servicekey?: any, authorization?: any, observe?: 'events'): Observable<HttpEvent<HttpResultMessageIEnumerableResourceDto>>;
    public query(request: Request27, servicekey?: any, authorization?: any, observe: any = 'body'): Observable<any> {

        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling query.');
        }


        const queryParameters:any = {};
  
        if (servicekey !== undefined && servicekey !== null) {
            queryParameters.servicekey = servicekey;
        }


        return this.http.post<HttpResultMessageIEnumerableResourceDto>(`/api/resource/query`,
            request,
            
                 queryParameters,
    
            {
               
                observe,
            }
        );
    }

    /**
     * 子项
     * 
     * @param request 
* @param servicekey 
* @param authorization 
     */
    public subitem(request: Request28, servicekey?: any, authorization?: any, observe?: 'body'): Observable<HttpResultMessageIPagedListResourceDto>;
    public subitem(request: Request28, servicekey?: any, authorization?: any, observe?: 'response'): Observable<HttpResponse<HttpResultMessageIPagedListResourceDto>>;
    public subitem(request: Request28, servicekey?: any, authorization?: any, observe?: 'events'): Observable<HttpEvent<HttpResultMessageIPagedListResourceDto>>;
    public subitem(request: Request28, servicekey?: any, authorization?: any, observe: any = 'body'): Observable<any> {

        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling subitem.');
        }


        const queryParameters:any = {};
  
        if (servicekey !== undefined && servicekey !== null) {
            queryParameters.servicekey = servicekey;
        }


        return this.http.post<HttpResultMessageIPagedListResourceDto>(`/api/resource/subitem`,
            request,
            
                 queryParameters,
    
            {
               
                observe,
            }
        );
    }

    /**
     * 更新资源
     * 
     * @param request 
* @param servicekey 
* @param authorization 
     */
    public update(request: Request29, servicekey?: any, authorization?: any, observe?: 'body'): Observable<HttpResultMessageResourceDto>;
    public update(request: Request29, servicekey?: any, authorization?: any, observe?: 'response'): Observable<HttpResponse<HttpResultMessageResourceDto>>;
    public update(request: Request29, servicekey?: any, authorization?: any, observe?: 'events'): Observable<HttpEvent<HttpResultMessageResourceDto>>;
    public update(request: Request29, servicekey?: any, authorization?: any, observe: any = 'body'): Observable<any> {

        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling update.');
        }


        const queryParameters:any = {};
  
        if (servicekey !== undefined && servicekey !== null) {
            queryParameters.servicekey = servicekey;
        }


        return this.http.post<HttpResultMessageResourceDto>(`/api/resource/update`,
            request,
            
                 queryParameters,
    
            {
               
                observe,
            }
        );
    }

}
