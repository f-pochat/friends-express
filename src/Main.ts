import { PrismaClient } from '@prisma/client';
import { CreateFriendDTO } from '@modules/friends/dto';
import { CreateAddressDTO } from '@modules/address/dto';

const prisma = new PrismaClient();

async function createFriend(data: CreateFriendDTO) {
    return prisma.friend.create({
        data: {
            name: data.name,
            email: data.email,
            phone: data.phone,
            Address: {
                create: data.addresses?.map(address => ({
                    street: address.street,
                    city: address.city,
                    state: address.state
                }))
            }
        }
    });
}

async function createAddress(data: CreateAddressDTO) {
    return prisma.address.create({
        data: {
            street: data.street,
            city: data.city,
            state: data.state,
            friendId: data.friendId
        }
    });
}

async function main() {
    const friendData: CreateFriendDTO = {
        name: 'Ignacio Chevallier Boutell',
        email: 'ignacio.chevallier@example.com',
        phone: '1234567980',
        addresses: [
            {
                id: '1',
                street: 'Cabildo',
                city: 'Tigre',
                state: 'Buenos Aires'
            },
            {
                id: '2',
                street: 'Av. Corrientes',
                city: 'CABA',
                state: 'CABA'
            },
        ]
    };

    const friend = await createFriend(friendData);
    console.log('Created friend:', friend);

    const addressData: CreateAddressDTO = {
        street: 'Juramento',
        city: 'CABA',
        state: 'Buenos Aires',
        friendId: '15637e63-c48a-4a43-a971-5dc232763ffd'
    };

    //const address = await createAddress(addressData);
    //console.log('Created address:', address);
}

main()
    .catch(e => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });