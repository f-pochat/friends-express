export interface BaseRepository<T, U> {
    create(friend: T): Promise<U>;
    getAll(): Promise<U[]>;
    delete(id: string): Promise<void>;
}