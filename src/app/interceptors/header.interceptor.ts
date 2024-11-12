import { HttpRequest,HttpInterceptor,HttpHandler } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class HeadersInterceptor implements HttpInterceptor{



    intercept(req: HttpRequest<any>, next: HttpHandler){

        let language = localStorage.getItem('language') as string;

        const authReq = req.clone({
            headers: req.headers
            .append('x-rapidapi-key', '45745a1083mshb0e1d7fd2ecd37fp164c57jsn1014584e0b0c')
            .append('x-rapidapi-host', 'one-piece-episodes.p.rapidapi.com'),
            params: req.params.append('language', language)
        });

        return next.handle(authReq);
    }





}