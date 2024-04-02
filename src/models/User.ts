import { ApiSync } from './ApiSync';
import { Model } from './Model';
import { Attributes } from './Attributes';
import { Eventing } from './Eventing';
import { Collection } from './Collection';

export interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

const url = 'http://localhost:3000/users';

export class User extends Model<UserProps> {
  static buildUser(attrs: UserProps) {
    return new User(
      new Attributes<UserProps>(attrs),
      new ApiSync<UserProps>(url),
      new Eventing()
    );
  }

  static buildCollection(): Collection<User, UserProps> {
    return new Collection<User, UserProps>(
      'localhost:3000/users',
      (json: UserProps) => User.buildUser(json)
    );
  }

  isAdminUser(): boolean {
    return this.get('id') === 1;
  }

  setRandomAge(): void {
    const age = Math.round(Math.random() * 100);
    this.set({ age });
  }
}
