import {PrismaClient} from "@prisma/client";
import {BaseRepository} from "@modules/shared/repository/base.repository";

export class BaseRepositoryImpl<T, U> implements BaseRepository<T, U> {
    constructor(private readonly db: PrismaClient, private readonly model: keyof PrismaClient) {
    }

    async create(data: T): Promise<U> {
        return await (this.db[this.model] as any).create({
            data
        }) as U;
    }

    async getAll(): Promise<U[]> {
        return await (this.db[this.model] as any).findMany() as U[];
    }

    async delete (id: string): Promise<void> {
        await (this.db[this.model] as any).delete({
            where: {
                id
            }
        })
    }
}
