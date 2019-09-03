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

 


@Injectable({
  providedIn: 'root'
})
export class ISchemeService {


    constructor(protected http:_HttpClient) {
    }


    /**
     * 查询角色列表
     * 
     * @param servicekey 
* @param authorization 
     */
    public query(servicekey?: any, authorization?: any, observe?: 'body'): Observable<any>;
    public query(servicekey?: any, authorization?: any, observe?: 'response'): Observable<HttpResponse<any>>;
    public query(servicekey?: any, authorization?: any, observe?: 'events'): Observable<HttpEvent<any>>;
    public query(servicekey?: any, authorization?: any, observe: any = 'body'): Observable<any> {


        const queryParameters:any = {};
  
        if (servicekey !== undefined && servicekey !== null) {
            queryParameters.servicekey = servicekey;
        }


        return this.http.get<any>(`/api/scheme/query`,
            
                 queryParameters,
    
            {
               
                observe,
            }
        );
    }

}
