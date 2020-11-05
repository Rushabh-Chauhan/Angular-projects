import {
  Directive,
  Renderer2,
  ElementRef,
  OnInit,
  HostListener,
  HostBinding,
  Input,
} from "@angular/core";

@Directive({
  selector: "[appBetterHighlight]",
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaltColor: string = "transparent";
  @Input('appBetterHighlight') highlidhtColor: string = "blue";
  @HostBinding("style.backgroundColor") backgroundColor: string;
  constructor(private elref: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    // this.renderer.setStyle(
    //   this.elref.nativeElement,
    //   "background-color",
    //   "blue"
    // );
    this.backgroundColor = this.defaltColor; // to solve the bug created by not inilizing the value in the first plase
  }

  @HostListener("mouseenter") mouseover(eventData: Event) {
    // this.renderer.setStyle(
    //   this.elref.nativeElement,
    //   "background-color",
    //   "blue"
    // );
    this.backgroundColor = this.highlidhtColor;
  }

  @HostListener("mouseleave") mouseleave(eventData: Event) {
    // this.renderer.setStyle(
    //   this.elref.nativeElement,
    //   "background-color",
    //   "transparent"
    // );
    this.backgroundColor = this.defaltColor;
  }
}
