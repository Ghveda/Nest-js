import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Posts} from "./posts.entity";
import {getManager, Repository} from "typeorm";

@Injectable()
export class PostsService {
    constructor(
        @InjectRepository(Posts) private postsData: Repository<Posts>
    ) {}

    async createPostsService(data){
        const post = new Posts();
        const createPost = async ()=>{
            post.username = data.username;
            post.post = data.post;
            await getManager().save(post)
        }
        return createPost()
    }

    async getAllData(){
        const data = await this.postsData.find();
        return data
    }

    async deleteSomeData(id){
        await this.postsData.delete(id);
        return 'Deleted';
    }

    async updateData(id, data){
        const getData = await this.postsData.findOne(id);
        await this.postsData.save({
            id: id,
            username: getData.username,
            post: data
        })
        // // getData.post = data
        // await this.postsData.update(getData.post, data)
        // // await getManager().save(getData)
        // // console.log(getData)
        // // console.log(data)
        // await this.postsData.save(getData)
        return 'updated'
    }

}
