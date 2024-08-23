"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FriendsRepositoryImpl = void 0;
const dto_1 = require("../../../modules/friends/dto");
class FriendsRepositoryImpl {
    db;
    constructor(db) {
        this.db = db;
    }
    async create(data) {
        const { addresses, ...friendData } = data;
        const friend = await this.db.friend.create({
            data: {
                ...friendData,
                addresses: {
                    create: addresses || [],
                },
            },
            include: {
                addresses: true,
            },
        });
        return new dto_1.FriendDTO(friend);
    }
    async getAll() {
        const friends = await this.db.friend.findMany();
        return friends.map(friend => new dto_1.FriendDTO(friend));
    }
    async delete(id) {
        await this.db.address.deleteMany({
            where: {
                friendId: id,
            },
        });
        await this.db.friend.delete({
            where: {
                id
            }
        });
    }
    async getAddressesByFriendId(id) {
        const friend = await this.db.friend.findUnique({
            where: { id },
            include: { addresses: true }
        });
        return friend?.addresses || [];
    }
}
exports.FriendsRepositoryImpl = FriendsRepositoryImpl;
//# sourceMappingURL=friends.repository.impl.js.map