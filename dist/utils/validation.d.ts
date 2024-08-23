import { NextFunction, Request, Response } from 'express';
type ClassType<T> = new (...args: any[]) => T;
export declare function BodyValidation<T>(target: ClassType<T>): (req: Request, res: Response, next: NextFunction) => Promise<void>;
export {};
