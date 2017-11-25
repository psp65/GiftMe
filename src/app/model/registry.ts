import { Item } from './item';
import { UserId } from './userId';

export class Registry {
    registryId: string;
    name: string;
    public: boolean;
    items: Item[];
    shared: UserId[];
}