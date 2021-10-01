import {Body, Controller, Post} from '@nestjs/common';
import {PostsService} from "./posts.service";

@Controller('/posts')
export class PostsController {
    constructor(
        private postService: PostsService
    ) {}

    @Post('/create')
    async createPost(
        @Body('username')username: string,
        @Body('post')post: string
    ){
        const data = await this.postService.createPostsService(
            {username: username, post: post}
        )
    return data
    }

    @Post('/data')
    async getData(){
        return await this.postService.getAllData()
    }

    @Post('/delete')
    async deleteData(@Body('id')id: number){
        console.log(id);
        return await this.postService.deleteSomeData(id);
    }

    @Post('/update')
    async updateData(
        @Body('id')id: number,
        @Body('data')data: string
    ){
        return await this.postService.updateData(id,data);
    }


}
