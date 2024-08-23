"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FriendsServiceImpl = void 0;
class FriendsServiceImpl {
    repository;
    constructor(repository) {
        this.repository = repository;
    }
    createFriend(friend) {
        return this.repository.create(friend);
    }
    deleteFriend(id) {
        return this.repository.delete(id);
    }
    getFriends() {
        return this.repository.getAll();
    }
    getAddressesByFriendId(id) {
        return this.repository.getAddressesByFriendId(id);
    }
}
exports.FriendsServiceImpl = FriendsServiceImpl;
//# sourceMappingURL=friends.service.impl.js.map