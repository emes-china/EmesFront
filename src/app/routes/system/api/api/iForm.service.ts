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

import { HttpResultMessageFormDto } from '../model/httpResultMessageFormDto';
import { HttpResultMessageIEnumerableFormDto } from '../model/httpResultMessageIEnumerableFormDto';
import { Id } from '../model/id';
import { Request } from '../model/request';
import { Request1 } from '../model/request1';
import { Request2 } from '../model/request2';
import { Request3 } from '../model/request3';
import { Request4 } from '../model/request4';
 


@Injectable({
  providedIn: 'root'
})
export class IFormService {


    constructor(protected http:_HttpClient) {
    }


    /**
     * 改变状态
     * 
     * @param request 
* @param servicekey 
* @param authorization 
     */
    public changestatus(request: Request, servicekey?: any, authorization?: any, observe?: 'body'): Observable<any>;
    public changestatus(request: Request, servicekey?: any, authorization?: any, observe?: 'response'): Observable<HttpResponse<any>>;
    public changestatus(request: Request, servicekey?: any, authorization?: any, observe?: 'events'): Observable<HttpEvent<any>>;
    public changestatus(request: Request, servicekey?: any, authorization?: any, observe: any = 'body'): Observable<any> {

        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling changestatus.');
        }


        const queryParameters:any = {};
  
        if (servicekey !== undefined && servicekey !== null) {
            queryParameters.servicekey = servicekey;
        }


        return this.http.post<any>(`/api/form/changestatus`,
            request,
            
                 queryParameters,
    
            {
               
                observe,
            }
        );
    }

    /**
     * 创建表单设计
     * 
     * @param request 
* @param servicekey 
* @param authorization 
     */
    public create(request: Request1, servicekey?: any, authorization?: any, observe?: 'body'): Observable<HttpResultMessageFormDto>;
    public create(request: Request1, servicekey?: any, authorization?: any, observe?: 'response'): Observable<HttpResponse<HttpResultMessageFormDto>>;
    public create(request: Request1, servicekey?: any, authorization?: any, observe?: 'events'): Observable<HttpEvent<HttpResultMessageFormDto>>;
    public create(request: Request1, servicekey?: any, authorization?: any, observe: any = 'body'): Observable<any> {

        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling create.');
        }


        const queryParameters:any = {};
  
        if (servicekey !== undefined && servicekey !== null) {
            queryParameters.servicekey = servicekey;
        }


        return this.http.post<HttpResultMessageFormDto>(`/api/form/create`,
            request,
            
                 queryParameters,
    
            {
               
                observe,
            }
        );
    }

    /**
     * 删除表单设计
     * 
     * @param request 
* @param servicekey 
* @param authorization 
     */
    public delete(request: Request2, servicekey?: any, authorization?: any, observe?: 'body'): Observable<HttpResultMessageFormDto>;
    public delete(request: Request2, servicekey?: any, authorization?: any, observe?: 'response'): Observable<HttpResponse<HttpResultMessageFormDto>>;
    public delete(request: Request2, servicekey?: any, authorization?: any, observe?: 'events'): Observable<HttpEvent<HttpResultMessageFormDto>>;
    public delete(request: Request2, servicekey?: any, authorization?: any, observe: any = 'body'): Observable<any> {

        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling delete.');
        }


        const queryParameters:any = {};
  
        if (servicekey !== undefined && servicekey !== null) {
            queryParameters.servicekey = servicekey;
        }


        return this.http.post<HttpResultMessageFormDto>(`/api/form/delete`,
            request,
            
                 queryParameters,
    
            {
               
                observe,
            }
        );
    }

    /**
     * 根据Id获取表单设计
     * 
     * @param id 
* @param servicekey 
* @param authorization 
     */
    public getbyid(id: Id, servicekey?: any, authorization?: any, observe?: 'body'): Observable<HttpResultMessageFormDto>;
    public getbyid(id: Id, servicekey?: any, authorization?: any, observe?: 'response'): Observable<HttpResponse<HttpResultMessageFormDto>>;
    public getbyid(id: Id, servicekey?: any, authorization?: any, observe?: 'events'): Observable<HttpEvent<HttpResultMessageFormDto>>;
    public getbyid(id: Id, servicekey?: any, authorization?: any, observe: any = 'body'): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getbyid.');
        }


        const queryParameters:any = {};
  
        if (servicekey !== undefined && servicekey !== null) {
            queryParameters.servicekey = servicekey;
        }


        return this.http.post<HttpResultMessageFormDto>(`/api/form/getbyid`,
            id,
            
                 queryParameters,
    
            {
               
                observe,
            }
        );
    }

    /**
     * 查询表单设计列表
     * 
     * @param request 
* @param servicekey 
* @param authorization 
     */
    public query(request: Request3, servicekey?: any, authorization?: any, observe?: 'body'): Observable<HttpResultMessageIEnumerableFormDto>;
    public query(request: Request3, servicekey?: any, authorization?: any, observe?: 'response'): Observable<HttpResponse<HttpResultMessageIEnumerableFormDto>>;
    public query(request: Request3, servicekey?: any, authorization?: any, observe?: 'events'): Observable<HttpEvent<HttpResultMessageIEnumerableFormDto>>;
    public query(request: Request3, servicekey?: any, authorization?: any, observe: any = 'body'): Observable<any> {

        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling query.');
        }


        const queryParameters:any = {};
  
        if (servicekey !== undefined && servicekey !== null) {
            queryParameters.servicekey = servicekey;
        }


        return this.http.post<HttpResultMessageIEnumerableFormDto>(`/api/form/query`,
            request,
            
                 queryParameters,
    
            {
               
                observe,
            }
        );
    }

    /**
     * 更新表单设计
     * 
     * @param request 
* @param servicekey 
* @param authorization 
     */
    public update(request: Request4, servicekey?: any, authorization?: any, observe?: 'body'): Observable<HttpResultMessageFormDto>;
    public update(request: Request4, servicekey?: any, authorization?: any, observe?: 'response'): Observable<HttpResponse<HttpResultMessageFormDto>>;
    public update(request: Request4, servicekey?: any, authorization?: any, observe?: 'events'): Observable<HttpEvent<HttpResultMessageFormDto>>;
    public update(request: Request4, servicekey?: any, authorization?: any, observe: any = 'body'): Observable<any> {

        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling update.');
        }


        const queryParameters:any = {};
  
        if (servicekey !== undefined && servicekey !== null) {
            queryParameters.servicekey = servicekey;
        }


        return this.http.post<HttpResultMessageFormDto>(`/api/form/update`,
            request,
            
                 queryParameters,
    
            {
               
                observe,
            }
        );
    }

}
