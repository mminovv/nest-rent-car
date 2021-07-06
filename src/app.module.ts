import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarsModule } from './cars/cars.module';
import { Car } from './cars/entities/car.entity'


@Module({
    imports: [
    CarsModule,
    ConfigModule.forRoot({
      envFilePath: '.env'
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.TYPEORM_URL,
      ssl: {
        rejectUnauthorized: false,
      },
      entities: [Car],
      autoLoadEntities: true,
      synchronize: true,
    }),
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
