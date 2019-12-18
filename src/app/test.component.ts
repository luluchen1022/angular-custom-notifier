import { Component, ViewChild, TemplateRef } from "@angular/core";
import { CustomNotifyService } from "./notifier-custom.service";

@Component({
  selector: "test",
  template: `
<button class="button button--secondary" (click)="onClick( 'alert', 'test' ,'hello')">
	test componenet
</button>
  `
})
export class TestComponent {

  constructor(private notifier: CustomNotifyService) { }

  public onClick(type: string, message: string, id: string): void {
    this.notifier.notify({
      type: type,
      message: message,
      id: id,
    });
  }

}
