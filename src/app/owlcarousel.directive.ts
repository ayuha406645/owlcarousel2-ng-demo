import { Directive, ElementRef, Input } from '@angular/core';
declare var $: any;

@Directive({
  selector: '[appOwlcarousel]'
})
export class OwlcarouselDirective {
  $el: JQuery;
  @Input() owlOptions: Object;

  private _items: any[];

  constructor(el: ElementRef) {
    this.$el = $(el.nativeElement);
  }

  ngAfterViewChecked() {
    this.initOwl();
  }

  ngOnDestroy() {
    this.destroyOwl();
  }

  initOwl() {
    if (
        this.$el.find('.item').length &&
        typeof $.fn.owlCarousel === 'function' &&
        !this.$el.hasClass('owl-loaded')
      ) {
      setTimeout(() => {
        this.$el.owlCarousel(this.owlOptions);
      }, 0);
    }
  }

  destroyOwl() {
    if (this.$el) {
      this.$el.trigger('destroy.owl.carousel')
          .removeClass('owl-loaded owl-hidden')
          .find('.owl-stage:empty, .owl-item:empty')
          .remove();
    }
  }
  reInitOwl() {
    this.destroyOwl();
    this.initOwl();
  }
}
