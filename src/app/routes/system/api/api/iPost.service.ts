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

import { HttpResultMessageIEnumerablePostDto } from '../model/httpResultMessageIEnumerablePostDto';
import { HttpResultMessagePostDto } from '../model/httpResultMessagePostDto';
import { Id2 } from '../model/id2';
import { Request10 } from '../model/request10';
import { Request11 } from '../model/request11';
import { Request8 } from '../model/request8';
import { Request9 } from '../model/request9';
 


@Injectable({
  providedIn: 'root'
})
export class IPostService {


    constructor(protected http:_HttpClient) {
    }


    /**
     * 创建岗位
     * 
     * @param request 
* @param servicekey 
* @param authorization 
     */
    public create(request: Request8, servicekey?: any, authorization?: any, observe?: 'body'): Observable<HttpResultMessagePostDto>;
    public create(request: Request8, servicekey?: any, authorization?: any, observe?: 'response'): Observable<HttpResponse<HttpResultMessagePostDto>>;
    public create(request: Request8, servicekey?: any, authorization?: any, observe?: 'events'): Observable<HttpEvent<HttpResultMessagePostDto>>;
    public create(request: Request8, servicekey?: any, authorization?: any, observe: any = 'body'): Observable<any> {

        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling create.');
        }


        const queryParameters:any = {};
  
        if (servicekey !== undefined && servicekey !== null) {
            queryParameters.servicekey = servicekey;
        }


        return this.http.post<HttpResultMessagePostDto>(`/api/post/create`,
            request,
            
                 queryParameters,
    
            {
               
                observe,
            }
        );
    }

    /**
     * 删除岗位
     * 
     * @param request 
* @param servicekey 
* @param authorization 
     */
    public delete(request: Request9, servicekey?: any, authorization?: any, observe?: 'body'): Observable<HttpResultMessagePostDto>;
    public delete(request: Request9, servicekey?: any, authorization?: any, observe?: 'response'): Observable<HttpResponse<HttpResultMessagePostDto>>;
    public delete(request: Request9, servicekey?: any, authorization?: any, observe?: 'events'): Observable<HttpEvent<HttpResultMessagePostDto>>;
    public delete(request: Request9, servicekey?: any, authorization?: any, observe: any = 'body'): Observable<any> {

        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling delete.');
        }


        const queryParameters:any = {};
  
        if (servicekey !== undefined && servicekey !== null) {
            queryParameters.servicekey = servicekey;
        }


        return this.http.post<HttpResultMessagePostDto>(`/api/post/delete`,
            request,
            
                 queryParameters,
    
            {
               
                observe,
            }
        );
    }

    /**
     * 根据Id获取岗位
     * 
     * @param id 
* @param servicekey 
* @param authorization 
     */
    public getbyid(id: Id2, servicekey?: any, authorization?: any, observe?: 'body'): Observable<HttpResultMessagePostDto>;
    public getbyid(id: Id2, servicekey?: any, authorization?: any, observe?: 'response'): Observable<HttpResponse<HttpResultMessagePostDto>>;
    public getbyid(id: Id2, servicekey?: any, authorization?: any, observe?: 'events'): Observable<HttpEvent<HttpResultMessagePostDto>>;
    public getbyid(id: Id2, servicekey?: any, authorization?: any, observe: any = 'body'): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getbyid.');
        }


        const queryParameters:any = {};
  
        if (servicekey !== undefined && servicekey !== null) {
            queryParameters.servicekey = servicekey;
        }


        return this.http.post<HttpResultMessagePostDto>(`/api/post/getbyid`,
            id,
            
                 queryParameters,
    
            {
               
                observe,
            }
        );
    }

    /**
     * 查询岗位列表
     * 
     * @param request 
* @param servicekey 
* @param authorization 
     */
    public query(request: Request10, servicekey?: any, authorization?: any, observe?: 'body'): Observable<HttpResultMessageIEnumerablePostDto>;
    public query(request: Request10, servicekey?: any, authorization?: any, observe?: 'response'): Observable<HttpResponse<HttpResultMessageIEnumerablePostDto>>;
    public query(request: Request10, servicekey?: any, authorization?: any, observe?: 'events'): Observable<HttpEvent<HttpResultMessageIEnumerablePostDto>>;
    public query(request: Request10, servicekey?: any, authorization?: any, observe: any = 'body'): Observable<any> {

        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling query.');
        }


        const queryParameters:any = {};
  
        if (servicekey !== undefined && servicekey !== null) {
            queryParameters.servicekey = servicekey;
        }


        return this.http.post<HttpResultMessageIEnumerablePostDto>(`/api/post/query`,
            request,
            
                 queryParameters,
    
            {
               
                observe,
            }
        );
    }

    /**
     * 更新岗位
     * 
     * @param request 
* @param servicekey 
* @param authorization 
     */
    public update(request: Request11, servicekey?: any, authorization?: any, observe?: 'body'): Observable<HttpResultMessagePostDto>;
    public update(request: Request11, servicekey?: any, authorization?: any, observe?: 'response'): Observable<HttpResponse<HttpResultMessagePostDto>>;
    public update(request: Request11, servicekey?: any, authorization?: any, observe?: 'events'): Observable<HttpEvent<HttpResultMessagePostDto>>;
    public update(request: Request11, servicekey?: any, authorization?: any, observe: any = 'body'): Observable<any> {

        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling update.');
        }


        const queryParameters:any = {};
  
        if (servicekey !== undefined && servicekey !== null) {
            queryParameters.servicekey = servicekey;
        }


        return this.http.post<HttpResultMessagePostDto>(`/api/post/update`,
            request,
            
                 queryParameters,
    
            {
               
                observe,
            }
        );
    }

}
