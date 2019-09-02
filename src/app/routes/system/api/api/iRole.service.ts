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

import { HttpResultMessageIEnumerableRoleAclDto } from '../model/httpResultMessageIEnumerableRoleAclDto';
import { HttpResultMessageIEnumerableRoleDto } from '../model/httpResultMessageIEnumerableRoleDto';
import { HttpResultMessageRoleDto } from '../model/httpResultMessageRoleDto';
import { Id6 } from '../model/id6';
import { Request30 } from '../model/request30';
import { Request31 } from '../model/request31';
import { Request32 } from '../model/request32';
import { Request33 } from '../model/request33';
import { Request34 } from '../model/request34';
import { Request35 } from '../model/request35';
 


@Injectable({
  providedIn: 'root'
})
export class IRoleService {


    constructor(protected http:_HttpClient) {
    }


    /**
     * 分配acl
     * 
     * @param request 
* @param servicekey 
* @param authorization 
     */
    public allocateacl(request: Request30, servicekey?: any, authorization?: any, observe?: 'body'): Observable<any>;
    public allocateacl(request: Request30, servicekey?: any, authorization?: any, observe?: 'response'): Observable<HttpResponse<any>>;
    public allocateacl(request: Request30, servicekey?: any, authorization?: any, observe?: 'events'): Observable<HttpEvent<any>>;
    public allocateacl(request: Request30, servicekey?: any, authorization?: any, observe: any = 'body'): Observable<any> {

        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling allocateacl.');
        }


        const queryParameters:any = {};
  
        if (servicekey !== undefined && servicekey !== null) {
            queryParameters.servicekey = servicekey;
        }


        return this.http.post<any>(`/api/role/allocateacl`,
            request,
            
                 queryParameters,
    
            {
               
                observe,
            }
        );
    }

    /**
     * 创建角色
     * 
     * @param request 
* @param servicekey 
* @param authorization 
     */
    public create(request: Request31, servicekey?: any, authorization?: any, observe?: 'body'): Observable<HttpResultMessageRoleDto>;
    public create(request: Request31, servicekey?: any, authorization?: any, observe?: 'response'): Observable<HttpResponse<HttpResultMessageRoleDto>>;
    public create(request: Request31, servicekey?: any, authorization?: any, observe?: 'events'): Observable<HttpEvent<HttpResultMessageRoleDto>>;
    public create(request: Request31, servicekey?: any, authorization?: any, observe: any = 'body'): Observable<any> {

        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling create.');
        }


        const queryParameters:any = {};
  
        if (servicekey !== undefined && servicekey !== null) {
            queryParameters.servicekey = servicekey;
        }


        return this.http.post<HttpResultMessageRoleDto>(`/api/role/create`,
            request,
            
                 queryParameters,
    
            {
               
                observe,
            }
        );
    }

    /**
     * 删除角色
     * 
     * @param request 
* @param servicekey 
* @param authorization 
     */
    public delete(request: Request32, servicekey?: any, authorization?: any, observe?: 'body'): Observable<HttpResultMessageRoleDto>;
    public delete(request: Request32, servicekey?: any, authorization?: any, observe?: 'response'): Observable<HttpResponse<HttpResultMessageRoleDto>>;
    public delete(request: Request32, servicekey?: any, authorization?: any, observe?: 'events'): Observable<HttpEvent<HttpResultMessageRoleDto>>;
    public delete(request: Request32, servicekey?: any, authorization?: any, observe: any = 'body'): Observable<any> {

        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling delete.');
        }


        const queryParameters:any = {};
  
        if (servicekey !== undefined && servicekey !== null) {
            queryParameters.servicekey = servicekey;
        }


        return this.http.post<HttpResultMessageRoleDto>(`/api/role/delete`,
            request,
            
                 queryParameters,
    
            {
               
                observe,
            }
        );
    }

    /**
     * 根据Id获取角色
     * 
     * @param id 
* @param servicekey 
* @param authorization 
     */
    public getbyid(id: Id6, servicekey?: any, authorization?: any, observe?: 'body'): Observable<HttpResultMessageRoleDto>;
    public getbyid(id: Id6, servicekey?: any, authorization?: any, observe?: 'response'): Observable<HttpResponse<HttpResultMessageRoleDto>>;
    public getbyid(id: Id6, servicekey?: any, authorization?: any, observe?: 'events'): Observable<HttpEvent<HttpResultMessageRoleDto>>;
    public getbyid(id: Id6, servicekey?: any, authorization?: any, observe: any = 'body'): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getbyid.');
        }


        const queryParameters:any = {};
  
        if (servicekey !== undefined && servicekey !== null) {
            queryParameters.servicekey = servicekey;
        }


        return this.http.post<HttpResultMessageRoleDto>(`/api/role/getbyid`,
            id,
            
                 queryParameters,
    
            {
               
                observe,
            }
        );
    }

    /**
     * 根据Ids获取角色acl
     * 
     * @param request 
* @param servicekey 
* @param authorization 
     */
    public queryaclbyids(request: Request34, servicekey?: any, authorization?: any, observe?: 'body'): Observable<HttpResultMessageIEnumerableRoleAclDto>;
    public queryaclbyids(request: Request34, servicekey?: any, authorization?: any, observe?: 'response'): Observable<HttpResponse<HttpResultMessageIEnumerableRoleAclDto>>;
    public queryaclbyids(request: Request34, servicekey?: any, authorization?: any, observe?: 'events'): Observable<HttpEvent<HttpResultMessageIEnumerableRoleAclDto>>;
    public queryaclbyids(request: Request34, servicekey?: any, authorization?: any, observe: any = 'body'): Observable<any> {

        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling queryaclbyids.');
        }


        const queryParameters:any = {};
  
        if (servicekey !== undefined && servicekey !== null) {
            queryParameters.servicekey = servicekey;
        }


        return this.http.post<HttpResultMessageIEnumerableRoleAclDto>(`/api/role/queryaclbyids`,
            request,
            
                 queryParameters,
    
            {
               
                observe,
            }
        );
    }

    /**
     * 查询角色列表
     * 
     * @param request 
* @param servicekey 
* @param authorization 
     */
    public query(request: Request33, servicekey?: any, authorization?: any, observe?: 'body'): Observable<HttpResultMessageIEnumerableRoleDto>;
    public query(request: Request33, servicekey?: any, authorization?: any, observe?: 'response'): Observable<HttpResponse<HttpResultMessageIEnumerableRoleDto>>;
    public query(request: Request33, servicekey?: any, authorization?: any, observe?: 'events'): Observable<HttpEvent<HttpResultMessageIEnumerableRoleDto>>;
    public query(request: Request33, servicekey?: any, authorization?: any, observe: any = 'body'): Observable<any> {

        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling query.');
        }


        const queryParameters:any = {};
  
        if (servicekey !== undefined && servicekey !== null) {
            queryParameters.servicekey = servicekey;
        }


        return this.http.post<HttpResultMessageIEnumerableRoleDto>(`/api/role/query`,
            request,
            
                 queryParameters,
    
            {
               
                observe,
            }
        );
    }

    /**
     * 更新角色
     * 
     * @param request 
* @param servicekey 
* @param authorization 
     */
    public update(request: Request35, servicekey?: any, authorization?: any, observe?: 'body'): Observable<HttpResultMessageRoleDto>;
    public update(request: Request35, servicekey?: any, authorization?: any, observe?: 'response'): Observable<HttpResponse<HttpResultMessageRoleDto>>;
    public update(request: Request35, servicekey?: any, authorization?: any, observe?: 'events'): Observable<HttpEvent<HttpResultMessageRoleDto>>;
    public update(request: Request35, servicekey?: any, authorization?: any, observe: any = 'body'): Observable<any> {

        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling update.');
        }


        const queryParameters:any = {};
  
        if (servicekey !== undefined && servicekey !== null) {
            queryParameters.servicekey = servicekey;
        }


        return this.http.post<HttpResultMessageRoleDto>(`/api/role/update`,
            request,
            
                 queryParameters,
    
            {
               
                observe,
            }
        );
    }

}
