import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {UsersModule} from "./users/users.module";
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/users.entity';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PostsModule } from './posts/posts.module';


@Module({
  imports: [
      ConfigModule.forRoot({
          isGlobal: true,
      }),
      TypeOrmModule.forRoot({
          type: 'mysql',
          host: 'localhost',
          port: 3306,
          username: 'root',
          password: process.env.DATA_BASE_KEY,
          database: 'testapp',
          autoLoadEntities: true,
          synchronize: true,
          entities: [
            User
          ]
      }),
      JwtModule.register({
          secret: 'secret',
          signOptions: {expiresIn: '1d'}}),
      UsersModule,
      PostsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
