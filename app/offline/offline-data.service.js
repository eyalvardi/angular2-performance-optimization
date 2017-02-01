"use strict";
var _1000_users_1 = require("./1000-users");
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        return { users: _1000_users_1.usersData };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
/*
export const HTTP_IN_MEMORY = [
    { provide: XHRBackend, useClass: InMemoryBackendService }, // in-mem server
    { provide: SEED_DATA , useClass: InMemoryDataService    },
    { provide: InMemoryBackendConfig, useValue: { delay: 600 } }
];*/
//# sourceMappingURL=offline-data.service.js.map