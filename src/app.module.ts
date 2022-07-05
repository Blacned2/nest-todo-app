import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './todo/todo.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { UserModule } from './mysql/user.module';
import { IndexPageModule } from './mysql/index-page.module';
import { IndexPageContent } from './mysql/model/index-page-content';

@Module({
  imports: [
    TodoModule,
    ConfigModule.forRoot(),
    MongooseModule.forRoot(`mongodb+srv://${process.env.DB_KEY}@mongocluster1.3slgp.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: Number(process.env.MYSQL_PORT),
      username: `${process.env.MYSQL_USER}`,
      password: `${process.env.MYSQL_PASSWORD}`,
      database: 'nestDb',
      entities: [IndexPageContent],
      autoLoadEntities:true,
      synchronize: false,
    }),
    UserModule,
    IndexPageModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  /**
   *
   */
  constructor(private dataSource:DataSource) {
  }
}
