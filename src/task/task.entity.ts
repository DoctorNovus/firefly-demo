import { Entity, Prop } from "@outwalk/firefly/mongoose";
import { Model } from "mongoose";

@Entity()
export class Task extends Model {

    @Prop(String) name;

    @Prop(Boolean) isDone;
}