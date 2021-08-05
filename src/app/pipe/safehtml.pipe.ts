import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'safehtml'
})
export class SafehtmlPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  transform(value) {
    return this.sanitizer.bypassSecurityTrustHtml(value);
  }
}
