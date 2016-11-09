import {Pipe, PipeTransform} from "@angular/core";
@Pipe({
    name: 'url'
})
export class UrlPipe implements PipeTransform{
    transform(url: any, args?: any) {
        if(url) {
            var url = url.split('/')[2];
            return url ? url.replace('www.', '') : '';
        }
    }
}
