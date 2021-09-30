import { Posts } from "./posts.entity";
import { Repository } from "typeorm";
export declare class PostsService {
    private postsData;
    constructor(postsData: Repository<Posts>);
    createPostsService(data: any): Promise<void>;
    getAllData(): Promise<Posts[]>;
}