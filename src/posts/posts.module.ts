import { Module } from '@nestjs/common';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';
import { TypeOrmModule } from "@nestjs/typeorm";
import { Posts } from './posts.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Posts]),
  ],
  controllers: [PostsController],
  providers: [PostsService],
  exports: [
    TypeOrmModule
  ]
})
export class PostsModule{}
