import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as dotenv from 'dotenv';

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    logger:
      process.env.NODE_ENV === 'production'
        ? ['error', 'warn']
        : ['debug', 'error', 'log', 'verbose', 'warn'],
  });
  const config = new DocumentBuilder()
    .setTitle('Job finder backend')
    .setDescription('The kmatch API ')
    .setVersion('1.0')
    .addTag('auth')
    .addTag('verification')
    .addTag('user')
    .addTag('permission')
    .addTag('group-permission')
    .addTag('profiles')
    .addTag('careers')
    .addTag('career-details')
    .addTag('recruiters')
    .addTag('jobs')
    .addTag('applications')
    .addTag('save-jobs')

    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  const port = process.env.PORT;
  await app.listen(port);
}
bootstrap();
