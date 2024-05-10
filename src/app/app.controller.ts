import { Controller, Get, Inject } from "@outwalk/firefly";
import { AppService } from "./app.service";

@Controller()
export class AppController {
  @Inject()
  appService: AppService;

  @Get()
  getApp(): Promise<string[]> {
    return this.appService.getApps();
  }

  @Get("/:name")
  getAppByName({ params: { name } }): Promise<string> {
    return this.appService.getAppByName(name);
  }
}