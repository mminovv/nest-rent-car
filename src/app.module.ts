import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarsModule } from './cars/cars.module';
import { HireModule } from './hire/hire.module';
import { Hire } from './hire/hire.entity';
import { Car } from './cars/car.entity';

@Module({
    imports: [
        CarsModule,
        HireModule,
        ConfigModule.forRoot({
            envFilePath: '.env',
        }),
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: process.env.POSTGRES_HOST,
            port: Number(process.env.POSTGRES_PORT),
            username: process.env.POSTGRES_USER,
            password: process.env.POSTGRES_PASSWORD,
            database: process.env.POSTGRES_DB,
            autoLoadEntities: true,
            synchronize: true,
            migrations: ['migration/*.js'],
            cli: {
                migrationsDir: 'migration',
            },
        }),
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
