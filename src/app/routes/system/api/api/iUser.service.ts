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
import { HttpResultMessageIEnumerableStockUserDto } from '../model/httpResultMessageIEnumerableStockUserDto';
import { HttpResultMessageIEnumerableUserDto } from '../model/httpResultMessageIEnumerableUserDto';
import { HttpResultMessageIEnumerableUserRoleDto } from '../model/httpResultMessageIEnumerableUserRoleDto';
import { HttpResultMessageUserDto } from '../model/httpResultMessageUserDto';
import { Id7 } from '../model/id7';
import { Ids } from '../model/ids';
import { Request37 } from '../model/request37';
import { Request38 } from '../model/request38';
import { Request39 } from '../model/request39';
import { Request40 } from '../model/request40';
import { Request41 } from '../model/request41';
import { Request42 } from '../model/request42';
import { Request43 } from '../model/request43';
import { Request44 } from '../model/request44';
 


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
     * 分配角色
     * 
     * @param request 
* @param servicekey 
* @param authorization 
     */
    public allocaterole(request: Request37, servicekey?: any, authorization?: any, observe?: 'body'): Observable<any>;
    public allocaterole(request: Request37, servicekey?: any, authorization?: any, observe?: 'response'): Observable<HttpResponse<any>>;
    public allocaterole(request: Request37, servicekey?: any, authorization?: any, observe?: 'events'): Observable<HttpEvent<any>>;
    public allocaterole(request: Request37, servicekey?: any, authorization?: any, observe: any = 'body'): Observable<any> {

        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling allocaterole.');
        }


        const queryParameters:any = {};
  
        if (servicekey !== undefined && servicekey !== null) {
            queryParameters.servicekey = servicekey;
        }


        return this.http.post<any>(`/api/user/allocaterole`,
            request,
            
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
    public authentication(request: Request38, servicekey?: any, observe?: 'body'): Observable<HttpResultMessageUserDto>;
    public authentication(request: Request38, servicekey?: any, observe?: 'response'): Observable<HttpResponse<HttpResultMessageUserDto>>;
    public authentication(request: Request38, servicekey?: any, observe?: 'events'): Observable<HttpEvent<HttpResultMessageUserDto>>;
    public authentication(request: Request38, servicekey?: any, observe: any = 'body'): Observable<any> {

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
     * 改变状态
     * 
     * @param request 
* @param servicekey 
* @param authorization 
     */
    public changestatus(request: Request39, servicekey?: any, authorization?: any, observe?: 'body'): Observable<any>;
    public changestatus(request: Request39, servicekey?: any, authorization?: any, observe?: 'response'): Observable<HttpResponse<any>>;
    public changestatus(request: Request39, servicekey?: any, authorization?: any, observe?: 'events'): Observable<HttpEvent<any>>;
    public changestatus(request: Request39, servicekey?: any, authorization?: any, observe: any = 'body'): Observable<any> {

        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling changestatus.');
        }


        const queryParameters:any = {};
  
        if (servicekey !== undefined && servicekey !== null) {
            queryParameters.servicekey = servicekey;
        }


        return this.http.post<any>(`/api/user/changestatus`,
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
    public create(request: Request40, servicekey?: any, observe?: 'body'): Observable<HttpResultMessageUserDto>;
    public create(request: Request40, servicekey?: any, observe?: 'response'): Observable<HttpResponse<HttpResultMessageUserDto>>;
    public create(request: Request40, servicekey?: any, observe?: 'events'): Observable<HttpEvent<HttpResultMessageUserDto>>;
    public create(request: Request40, servicekey?: any, observe: any = 'body'): Observable<any> {

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
    public delete(request: Request41, servicekey?: any, authorization?: any, observe?: 'body'): Observable<HttpResultMessageUserDto>;
    public delete(request: Request41, servicekey?: any, authorization?: any, observe?: 'response'): Observable<HttpResponse<HttpResultMessageUserDto>>;
    public delete(request: Request41, servicekey?: any, authorization?: any, observe?: 'events'): Observable<HttpEvent<HttpResultMessageUserDto>>;
    public delete(request: Request41, servicekey?: any, authorization?: any, observe: any = 'body'): Observable<any> {

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
    public getbyid(id: Id7, servicekey?: any, authorization?: any, observe?: 'body'): Observable<HttpResultMessageUserDto>;
    public getbyid(id: Id7, servicekey?: any, authorization?: any, observe?: 'response'): Observable<HttpResponse<HttpResultMessageUserDto>>;
    public getbyid(id: Id7, servicekey?: any, authorization?: any, observe?: 'events'): Observable<HttpEvent<HttpResultMessageUserDto>>;
    public getbyid(id: Id7, servicekey?: any, authorization?: any, observe: any = 'body'): Observable<any> {

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
     * 
     * 
     * @param ids 
* @param servicekey 
* @param authorization 
     */
    public queryids(ids: Ids, servicekey?: any, authorization?: any, observe?: 'body'): Observable<HttpResultMessageIEnumerableStockUserDto>;
    public queryids(ids: Ids, servicekey?: any, authorization?: any, observe?: 'response'): Observable<HttpResponse<HttpResultMessageIEnumerableStockUserDto>>;
    public queryids(ids: Ids, servicekey?: any, authorization?: any, observe?: 'events'): Observable<HttpEvent<HttpResultMessageIEnumerableStockUserDto>>;
    public queryids(ids: Ids, servicekey?: any, authorization?: any, observe: any = 'body'): Observable<any> {

        if (ids === null || ids === undefined) {
            throw new Error('Required parameter ids was null or undefined when calling queryids.');
        }


        const queryParameters:any = {};
  
        if (servicekey !== undefined && servicekey !== null) {
            queryParameters.servicekey = servicekey;
        }


        return this.http.post<HttpResultMessageIEnumerableStockUserDto>(`/api/user/queryids`,
            ids,
            
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
    public query(request: Request42, servicekey?: any, authorization?: any, observe?: 'body'): Observable<HttpResultMessageIEnumerableUserDto>;
    public query(request: Request42, servicekey?: any, authorization?: any, observe?: 'response'): Observable<HttpResponse<HttpResultMessageIEnumerableUserDto>>;
    public query(request: Request42, servicekey?: any, authorization?: any, observe?: 'events'): Observable<HttpEvent<HttpResultMessageIEnumerableUserDto>>;
    public query(request: Request42, servicekey?: any, authorization?: any, observe: any = 'body'): Observable<any> {

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
     * 获取用户角色
     * 
     * @param request 
* @param servicekey 
* @param authorization 
     */
    public queryuserrole(request: Request43, servicekey?: any, authorization?: any, observe?: 'body'): Observable<HttpResultMessageIEnumerableUserRoleDto>;
    public queryuserrole(request: Request43, servicekey?: any, authorization?: any, observe?: 'response'): Observable<HttpResponse<HttpResultMessageIEnumerableUserRoleDto>>;
    public queryuserrole(request: Request43, servicekey?: any, authorization?: any, observe?: 'events'): Observable<HttpEvent<HttpResultMessageIEnumerableUserRoleDto>>;
    public queryuserrole(request: Request43, servicekey?: any, authorization?: any, observe: any = 'body'): Observable<any> {

        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling queryuserrole.');
        }


        const queryParameters:any = {};
  
        if (servicekey !== undefined && servicekey !== null) {
            queryParameters.servicekey = servicekey;
        }


        return this.http.post<HttpResultMessageIEnumerableUserRoleDto>(`/api/user/queryuserrole`,
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
    public update(request: Request44, servicekey?: any, authorization?: any, observe?: 'body'): Observable<HttpResultMessageUserDto>;
    public update(request: Request44, servicekey?: any, authorization?: any, observe?: 'response'): Observable<HttpResponse<HttpResultMessageUserDto>>;
    public update(request: Request44, servicekey?: any, authorization?: any, observe?: 'events'): Observable<HttpEvent<HttpResultMessageUserDto>>;
    public update(request: Request44, servicekey?: any, authorization?: any, observe: any = 'body'): Observable<any> {

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
