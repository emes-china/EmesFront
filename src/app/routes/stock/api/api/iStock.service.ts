/**
 * Emes.Erp.IStock
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

import { HttpResultMessageIEnumerableStockDto } from '../model/httpResultMessageIEnumerableStockDto';
import { Request } from '../model/request';
 


@Injectable({
  providedIn: 'root'
})
export class IStockService {


    constructor(protected http:_HttpClient) {
    }


    /**
     * 查询仓库列表
     * 
     * @param request 
* @param servicekey 
* @param authorization 
     */
    public query(request: Request, servicekey?: any, authorization?: any, observe?: 'body'): Observable<HttpResultMessageIEnumerableStockDto>;
    public query(request: Request, servicekey?: any, authorization?: any, observe?: 'response'): Observable<HttpResponse<HttpResultMessageIEnumerableStockDto>>;
    public query(request: Request, servicekey?: any, authorization?: any, observe?: 'events'): Observable<HttpEvent<HttpResultMessageIEnumerableStockDto>>;
    public query(request: Request, servicekey?: any, authorization?: any, observe: any = 'body'): Observable<any> {

        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling query.');
        }


        const queryParameters:any = {};
  
        if (servicekey !== undefined && servicekey !== null) {
            queryParameters.servicekey = servicekey;
        }


        return this.http.post<HttpResultMessageIEnumerableStockDto>(`/api/stock/query`,
            request,
            
                 queryParameters,
    
            {
               
                observe,
            }
        );
    }

}
