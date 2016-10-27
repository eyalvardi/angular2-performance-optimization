import {usersData} from './1000-users';

export class InMemoryDataService {
    createDb() {
        return { users : usersData };
    }
}

/*
export const HTTP_IN_MEMORY = [
    { provide: XHRBackend, useClass: InMemoryBackendService }, // in-mem server
    { provide: SEED_DATA , useClass: InMemoryDataService    },
    { provide: InMemoryBackendConfig, useValue: { delay: 600 } }
];*/
