import { Controller, Get } from "@outwalk/firefly";

@Controller()
export class TaskController {

    @Get()
    getHelloWorld(): string {
        return "Hello Straight World!";
    }
}