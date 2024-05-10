import { Controller, Get, Inject } from "@outwalk/firefly";

@Controller()
export class IndexController {

  @Get()
  getIndex(): string {
    return "Test Tittie";
  }

  @Get()
  getAppByName({ params: { name } }): string {
    return "Test";
  }
}
