import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShortenPipe } from './pipes/shorten.pipe';
import { SearchFilterPipe } from './pipes/search-filter.pipe';
import { HighlightDirective } from './directive/highlight.directive';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ShortenPipe,
    SearchFilterPipe,
    HighlightDirective,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ShortenPipe,
    SearchFilterPipe,
    HighlightDirective
  ]
})
export class SharedModule { }
