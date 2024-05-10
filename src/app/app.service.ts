import { Injectable } from "@outwalk/firefly";
import { NotFound } from "@outwalk/firefly/errors";

@Injectable()
export class AppService {
  apps = ["ottegi", "outwalk", "exalt"];

  async getApps() {
    return this.apps;
  }

  async getAppByName(name) {
    const app = this.apps.find((app) => app == name);
    if (!app) throw new NotFound();

    return app;
  }
}