import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PupilsModule } from './pupils/pupils.module';
import {UsersModule} from "./users/users.module";
import { TypeOrmModule } from '@nestjs/typeorm';
import {User} from './users/users.entity';
import { ConfigModule } from '@nestjs/config';


@Module({
  imports: [
      ConfigModule.forRoot({
          isGlobal: true,
      }),
      PupilsModule,
      UsersModule,
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

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
