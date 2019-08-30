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

import { HttpResultMessageAclDto } from '../model/httpResultMessageAclDto';
import { HttpResultMessageIEnumerableUserDto } from '../model/httpResultMessageIEnumerableUserDto';
import { HttpResultMessageUserDto } from '../model/httpResultMessageUserDto';
import { Id5 } from '../model/id5';
import { Request25 } from '../model/request25';
import { Request26 } from '../model/request26';
import { Request27 } from '../model/request27';
import { Request28 } from '../model/request28';
import { Request29 } from '../model/request29';
 


@Injectable({
  providedIn: 'root'
})
export class IUserService {


    constructor(protected http:_HttpClient) {
    }


    /**
     * 认证用户
     * 
     * @param servicekey 
     */
    public acl(servicekey?: any, observe?: 'body'): Observable<HttpResultMessageAclDto>;
    public acl(servicekey?: any, observe?: 'response'): Observable<HttpResponse<HttpResultMessageAclDto>>;
    public acl(servicekey?: any, observe?: 'events'): Observable<HttpEvent<HttpResultMessageAclDto>>;
    public acl(servicekey?: any, observe: any = 'body'): Observable<any> {

        const queryParameters:any = {};
  
        if (servicekey !== undefined && servicekey !== null) {
            queryParameters.servicekey = servicekey;
        }


        return this.http.get<HttpResultMessageAclDto>(`/api/user/acl`,
            
                 queryParameters,
    
            {
               
                observe,
            }
        );
    }

    /**
     * 认证用户
     * 
     * @param request 
* @param servicekey 
     */
    public authentication(request: Request25, servicekey?: any, observe?: 'body'): Observable<HttpResultMessageUserDto>;
    public authentication(request: Request25, servicekey?: any, observe?: 'response'): Observable<HttpResponse<HttpResultMessageUserDto>>;
    public authentication(request: Request25, servicekey?: any, observe?: 'events'): Observable<HttpEvent<HttpResultMessageUserDto>>;
    public authentication(request: Request25, servicekey?: any, observe: any = 'body'): Observable<any> {

        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling authentication.');
        }

        const queryParameters:any = {};
  
        if (servicekey !== undefined && servicekey !== null) {
            queryParameters.servicekey = servicekey;
        }


        return this.http.post<HttpResultMessageUserDto>(`/api/user/authentication`,
            request,
            
                 queryParameters,
    
            {
               
                observe,
            }
        );
    }

    /**
     * 创建用户
     * 
     * @param request 
* @param servicekey 
     */
    public create(request: Request26, servicekey?: any, observe?: 'body'): Observable<HttpResultMessageUserDto>;
    public create(request: Request26, servicekey?: any, observe?: 'response'): Observable<HttpResponse<HttpResultMessageUserDto>>;
    public create(request: Request26, servicekey?: any, observe?: 'events'): Observable<HttpEvent<HttpResultMessageUserDto>>;
    public create(request: Request26, servicekey?: any, observe: any = 'body'): Observable<any> {

        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling create.');
        }

        const queryParameters:any = {};
  
        if (servicekey !== undefined && servicekey !== null) {
            queryParameters.servicekey = servicekey;
        }


        return this.http.post<HttpResultMessageUserDto>(`/api/user/create`,
            request,
            
                 queryParameters,
    
            {
               
                observe,
            }
        );
    }

    /**
     * 删除用户
     * 
     * @param request 
* @param servicekey 
* @param authorization 
     */
    public delete(request: Request27, servicekey?: any, authorization?: any, observe?: 'body'): Observable<HttpResultMessageUserDto>;
    public delete(request: Request27, servicekey?: any, authorization?: any, observe?: 'response'): Observable<HttpResponse<HttpResultMessageUserDto>>;
    public delete(request: Request27, servicekey?: any, authorization?: any, observe?: 'events'): Observable<HttpEvent<HttpResultMessageUserDto>>;
    public delete(request: Request27, servicekey?: any, authorization?: any, observe: any = 'body'): Observable<any> {

        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling delete.');
        }


        const queryParameters:any = {};
  
        if (servicekey !== undefined && servicekey !== null) {
            queryParameters.servicekey = servicekey;
        }


        return this.http.post<HttpResultMessageUserDto>(`/api/user/delete`,
            request,
            
                 queryParameters,
    
            {
               
                observe,
            }
        );
    }

    /**
     * 根据Id获取用户
     * 
     * @param id 
* @param servicekey 
* @param authorization 
     */
    public getbyid(id: Id5, servicekey?: any, authorization?: any, observe?: 'body'): Observable<HttpResultMessageUserDto>;
    public getbyid(id: Id5, servicekey?: any, authorization?: any, observe?: 'response'): Observable<HttpResponse<HttpResultMessageUserDto>>;
    public getbyid(id: Id5, servicekey?: any, authorization?: any, observe?: 'events'): Observable<HttpEvent<HttpResultMessageUserDto>>;
    public getbyid(id: Id5, servicekey?: any, authorization?: any, observe: any = 'body'): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getbyid.');
        }


        const queryParameters:any = {};
  
        if (servicekey !== undefined && servicekey !== null) {
            queryParameters.servicekey = servicekey;
        }


        return this.http.post<HttpResultMessageUserDto>(`/api/user/getbyid`,
            id,
            
                 queryParameters,
    
            {
               
                observe,
            }
        );
    }

    /**
     * 查询用户列表
     * 
     * @param request 
* @param servicekey 
* @param authorization 
     */
    public query(request: Request28, servicekey?: any, authorization?: any, observe?: 'body'): Observable<HttpResultMessageIEnumerableUserDto>;
    public query(request: Request28, servicekey?: any, authorization?: any, observe?: 'response'): Observable<HttpResponse<HttpResultMessageIEnumerableUserDto>>;
    public query(request: Request28, servicekey?: any, authorization?: any, observe?: 'events'): Observable<HttpEvent<HttpResultMessageIEnumerableUserDto>>;
    public query(request: Request28, servicekey?: any, authorization?: any, observe: any = 'body'): Observable<any> {

        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling query.');
        }


        const queryParameters:any = {};
  
        if (servicekey !== undefined && servicekey !== null) {
            queryParameters.servicekey = servicekey;
        }


        return this.http.post<HttpResultMessageIEnumerableUserDto>(`/api/user/query`,
            request,
            
                 queryParameters,
    
            {
               
                observe,
            }
        );
    }

    /**
     * 更新用户
     * 
     * @param request 
* @param servicekey 
* @param authorization 
     */
    public update(request: Request29, servicekey?: any, authorization?: any, observe?: 'body'): Observable<HttpResultMessageUserDto>;
    public update(request: Request29, servicekey?: any, authorization?: any, observe?: 'response'): Observable<HttpResponse<HttpResultMessageUserDto>>;
    public update(request: Request29, servicekey?: any, authorization?: any, observe?: 'events'): Observable<HttpEvent<HttpResultMessageUserDto>>;
    public update(request: Request29, servicekey?: any, authorization?: any, observe: any = 'body'): Observable<any> {

        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling update.');
        }


        const queryParameters:any = {};
  
        if (servicekey !== undefined && servicekey !== null) {
            queryParameters.servicekey = servicekey;
        }


        return this.http.post<HttpResultMessageUserDto>(`/api/user/update`,
            request,
            
                 queryParameters,
    
            {
               
                observe,
            }
        );
    }

}
