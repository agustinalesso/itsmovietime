//sliceText Pipe
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'sliceText'
})
export class SliceTextPipe implements PipeTransform {
    transform(value: string, args: string): any {
        let limit = args.length > 0 ? parseInt(args) : 10;
        let trail = '...';
        return value.length > limit ? value.substring(0, limit) + trail : value;
    }
}