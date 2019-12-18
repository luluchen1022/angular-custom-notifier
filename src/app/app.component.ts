import { Component, ViewChild, TemplateRef } from "@angular/core";
import { CustomNotifyService } from "./notifier-custom.service";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {

  constructor(private notifier: CustomNotifyService) { }

  public customNotification(type: string, message: string, id: string): void {
    this.notifier.notify({
      type: type,
      message: message,
      id: id,
    });
  }

}
