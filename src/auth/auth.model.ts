import { prop } from '@typegoose/typegoose';
import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';

export interface AuthModel extends Base {} // lifehack for AuthModel extends Base too
export class AuthModel extends TimeStamps {
    @prop({ unique: true }) // unique - поле должно быть уникальным
    email: string;

    @prop()
    passwordHash: string;
}
