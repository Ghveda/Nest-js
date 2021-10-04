import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Posts} from "./posts.entity";
import {getManager, Repository} from "typeorm";

@Injectable()
export class PostsService {
    constructor(
        @InjectRepository(Posts) private postsEntity: Repository<Posts>
    ) {}

    async createPosts(data){
        const post = new Posts();
        const createPost = async ()=>{
            post.username = data.username;
            post.post = data.post;
            await getManager().save(post)
        }
        return createPost()
    }

    async getAll(){
        const data = await this.postsEntity.find();
        return data
    }

    async deletePost(id){
        await this.postsEntity.delete(id);
        return 'Deleted';
    }

    async updatePost(id, data){
        const post = await this.postsEntity.findOne(id);
        post.post = data;
        return await this.postsEntity.save(post)
    }

}
