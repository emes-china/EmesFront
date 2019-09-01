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

import { HttpResultMessageIEnumerableOrganizationDto } from '../model/httpResultMessageIEnumerableOrganizationDto';
import { HttpResultMessageIPagedListOrganizationDto } from '../model/httpResultMessageIPagedListOrganizationDto';
import { HttpResultMessageOrganizationDto } from '../model/httpResultMessageOrganizationDto';
import { Id3 } from '../model/id3';
import { Request13 } from '../model/request13';
import { Request14 } from '../model/request14';
import { Request15 } from '../model/request15';
import { Request16 } from '../model/request16';
import { Request17 } from '../model/request17';
import { Request18 } from '../model/request18';
 


@Injectable({
  providedIn: 'root'
})
export class IOrganizationService {


    constructor(protected http:_HttpClient) {
    }


    /**
     * 改变状态
     * 
     * @param request 
* @param servicekey 
* @param authorization 
     */
    public changestatus(request: Request13, servicekey?: any, authorization?: any, observe?: 'body'): Observable<any>;
    public changestatus(request: Request13, servicekey?: any, authorization?: any, observe?: 'response'): Observable<HttpResponse<any>>;
    public changestatus(request: Request13, servicekey?: any, authorization?: any, observe?: 'events'): Observable<HttpEvent<any>>;
    public changestatus(request: Request13, servicekey?: any, authorization?: any, observe: any = 'body'): Observable<any> {

        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling changestatus.');
        }


        const queryParameters:any = {};
  
        if (servicekey !== undefined && servicekey !== null) {
            queryParameters.servicekey = servicekey;
        }


        return this.http.post<any>(`/api/organization/changestatus`,
            request,
            
                 queryParameters,
    
            {
               
                observe,
            }
        );
    }

    /**
     * 创建组织机构
     * 
     * @param request 
* @param servicekey 
* @param authorization 
     */
    public create(request: Request14, servicekey?: any, authorization?: any, observe?: 'body'): Observable<HttpResultMessageOrganizationDto>;
    public create(request: Request14, servicekey?: any, authorization?: any, observe?: 'response'): Observable<HttpResponse<HttpResultMessageOrganizationDto>>;
    public create(request: Request14, servicekey?: any, authorization?: any, observe?: 'events'): Observable<HttpEvent<HttpResultMessageOrganizationDto>>;
    public create(request: Request14, servicekey?: any, authorization?: any, observe: any = 'body'): Observable<any> {

        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling create.');
        }


        const queryParameters:any = {};
  
        if (servicekey !== undefined && servicekey !== null) {
            queryParameters.servicekey = servicekey;
        }


        return this.http.post<HttpResultMessageOrganizationDto>(`/api/organization/create`,
            request,
            
                 queryParameters,
    
            {
               
                observe,
            }
        );
    }

    /**
     * 删除组织机构
     * 
     * @param request 
* @param servicekey 
* @param authorization 
     */
    public delete(request: Request15, servicekey?: any, authorization?: any, observe?: 'body'): Observable<HttpResultMessageOrganizationDto>;
    public delete(request: Request15, servicekey?: any, authorization?: any, observe?: 'response'): Observable<HttpResponse<HttpResultMessageOrganizationDto>>;
    public delete(request: Request15, servicekey?: any, authorization?: any, observe?: 'events'): Observable<HttpEvent<HttpResultMessageOrganizationDto>>;
    public delete(request: Request15, servicekey?: any, authorization?: any, observe: any = 'body'): Observable<any> {

        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling delete.');
        }


        const queryParameters:any = {};
  
        if (servicekey !== undefined && servicekey !== null) {
            queryParameters.servicekey = servicekey;
        }


        return this.http.post<HttpResultMessageOrganizationDto>(`/api/organization/delete`,
            request,
            
                 queryParameters,
    
            {
               
                observe,
            }
        );
    }

    /**
     * 根据Id获取组织机构
     * 
     * @param id 
* @param servicekey 
* @param authorization 
     */
    public getbyid(id: Id3, servicekey?: any, authorization?: any, observe?: 'body'): Observable<HttpResultMessageOrganizationDto>;
    public getbyid(id: Id3, servicekey?: any, authorization?: any, observe?: 'response'): Observable<HttpResponse<HttpResultMessageOrganizationDto>>;
    public getbyid(id: Id3, servicekey?: any, authorization?: any, observe?: 'events'): Observable<HttpEvent<HttpResultMessageOrganizationDto>>;
    public getbyid(id: Id3, servicekey?: any, authorization?: any, observe: any = 'body'): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getbyid.');
        }


        const queryParameters:any = {};
  
        if (servicekey !== undefined && servicekey !== null) {
            queryParameters.servicekey = servicekey;
        }


        return this.http.post<HttpResultMessageOrganizationDto>(`/api/organization/getbyid`,
            id,
            
                 queryParameters,
    
            {
               
                observe,
            }
        );
    }

    /**
     * 查询组织机构列表
     * 
     * @param request 
* @param servicekey 
* @param authorization 
     */
    public query(request: Request16, servicekey?: any, authorization?: any, observe?: 'body'): Observable<HttpResultMessageIEnumerableOrganizationDto>;
    public query(request: Request16, servicekey?: any, authorization?: any, observe?: 'response'): Observable<HttpResponse<HttpResultMessageIEnumerableOrganizationDto>>;
    public query(request: Request16, servicekey?: any, authorization?: any, observe?: 'events'): Observable<HttpEvent<HttpResultMessageIEnumerableOrganizationDto>>;
    public query(request: Request16, servicekey?: any, authorization?: any, observe: any = 'body'): Observable<any> {

        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling query.');
        }


        const queryParameters:any = {};
  
        if (servicekey !== undefined && servicekey !== null) {
            queryParameters.servicekey = servicekey;
        }


        return this.http.post<HttpResultMessageIEnumerableOrganizationDto>(`/api/organization/query`,
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
    public subitem(request: Request17, servicekey?: any, authorization?: any, observe?: 'body'): Observable<HttpResultMessageIPagedListOrganizationDto>;
    public subitem(request: Request17, servicekey?: any, authorization?: any, observe?: 'response'): Observable<HttpResponse<HttpResultMessageIPagedListOrganizationDto>>;
    public subitem(request: Request17, servicekey?: any, authorization?: any, observe?: 'events'): Observable<HttpEvent<HttpResultMessageIPagedListOrganizationDto>>;
    public subitem(request: Request17, servicekey?: any, authorization?: any, observe: any = 'body'): Observable<any> {

        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling subitem.');
        }


        const queryParameters:any = {};
  
        if (servicekey !== undefined && servicekey !== null) {
            queryParameters.servicekey = servicekey;
        }


        return this.http.post<HttpResultMessageIPagedListOrganizationDto>(`/api/organization/subitem`,
            request,
            
                 queryParameters,
    
            {
               
                observe,
            }
        );
    }

    /**
     * 更新组织机构
     * 
     * @param request 
* @param servicekey 
* @param authorization 
     */
    public update(request: Request18, servicekey?: any, authorization?: any, observe?: 'body'): Observable<HttpResultMessageOrganizationDto>;
    public update(request: Request18, servicekey?: any, authorization?: any, observe?: 'response'): Observable<HttpResponse<HttpResultMessageOrganizationDto>>;
    public update(request: Request18, servicekey?: any, authorization?: any, observe?: 'events'): Observable<HttpEvent<HttpResultMessageOrganizationDto>>;
    public update(request: Request18, servicekey?: any, authorization?: any, observe: any = 'body'): Observable<any> {

        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling update.');
        }


        const queryParameters:any = {};
  
        if (servicekey !== undefined && servicekey !== null) {
            queryParameters.servicekey = servicekey;
        }


        return this.http.post<HttpResultMessageOrganizationDto>(`/api/organization/update`,
            request,
            
                 queryParameters,
    
            {
               
                observe,
            }
        );
    }

}
