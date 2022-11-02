import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './users/user.module';
import { UserController } from './users/user.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { HeaderMiddleware } from 'common/middlewares/headers.middleware';
import { PermissionModule } from './permission/permission.module';
import { GroupPermissionModule } from './group-permission/group-permission.module';
import { VerificationModule } from './verification/verification.module';

import { ChatGateway } from './chat.gateway';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { AllExceptionsFilter } from 'common/filters/all-exception.filter';
import { TransformInterceptor } from 'common/interceptors/transform.interceptor';
import { Premission1Module } from './premission1/premission1.module';
import { ScheduleModule } from '@nestjs/schedule';
import { ProfilesModule } from './profiles/profiles.module';
import { CareersModule } from './careers/careers.module';
import { CareerDetailsModule } from './career-details/career-details.module';
import { RecruitersModule } from './recruiters/recruiters.module';
import { JobsModule } from './jobs/jobs.module';
import { ApplicationsModule } from './applications/applications.module';
import { SaveJobsModule } from './save-jobs/save-jobs.module';
import { ThreadsModule } from './threads/threads.module';
import { MessagesModule } from './messages/messages.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    ScheduleModule.forRoot(),
    MongooseModule.forRootAsync({
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGODB_URI'),
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }),
    }),
    AuthModule,
    VerificationModule,
    UserModule,
    PermissionModule,
    Premission1Module,
    GroupPermissionModule,
    ProfilesModule,
    CareersModule,
    CareerDetailsModule,
    RecruitersModule,
    JobsModule,
    ApplicationsModule,
    SaveJobsModule,
    ThreadsModule,
    MessagesModule,
  ],
  controllers: [AppController, UserController],
  providers: [
    AppService,
    ChatGateway,
    {
      provide: APP_FILTER,
      useClass: AllExceptionsFilter,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: TransformInterceptor,
    },
  ],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply()
      .forRoutes({ path: '*', method: RequestMethod.ALL })
      .apply(HeaderMiddleware)
      .exclude(
        { path: 'auth/login', method: RequestMethod.POST },
        { path: 'auth/signup', method: RequestMethod.POST },
        { path: 'auth/refresh', method: RequestMethod.POST },
      )
      .forRoutes(
        { path: 'user', method: RequestMethod.ALL },
        { path: 'permission', method: RequestMethod.ALL },
        { path: 'paypal', method: RequestMethod.ALL },
      );
  }
}
