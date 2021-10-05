import { Posts } from "./posts.entity";
import { Repository } from "typeorm";
export declare class PostsService {
    private postsEntity;
    constructor(postsEntity: Repository<Posts>);
    createPosts(data: any): Promise<void>;
    getAll(): Promise<Posts[]>;
    deletePost(id: any): Promise<string>;
    updatePost(id: any, data: any): Promise<Posts>;
}
