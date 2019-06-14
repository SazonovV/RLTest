import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const users = [
      { id: 0, name: 'user1' },
      { id: 1, name: 'user2' },
      { id: 2, name: 'user3' },
      { id: 3, name: 'user4' },
    ];
    const firstButton = [
      { context: 'firstButton'}
    ];
    const secondButton = [
      { context: 'secondButton'}
    ];
    return { users, firstButton, secondButton };
  }
}
