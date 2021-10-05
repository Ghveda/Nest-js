import { PostsService } from "./posts.service";
export declare class PostsController {
    private postService;
    constructor(postService: PostsService);
    createPost(username: string, post: string): Promise<void>;
    getData(): Promise<import("./posts.entity").Posts[]>;
    deleteData(id: number): Promise<string>;
    updateData(id: number, data: string): Promise<import("./posts.entity").Posts>;
}
