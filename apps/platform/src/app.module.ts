import { join } from 'path';

import { ConfigModule } from '@aiofc/config';
import { setupLoggerModule } from '@aiofc/pino-logger';
import { MiddlewareConsumer, Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { setupI18nModule } from './boostrap/i18n-setup';
import { GlobalMiddleware } from './common/middleware/global.middleware';
import { setupClsModule } from './infrastructure/cache/cls-setup';

@Module({
  imports: [
    ConfigModule.forRoot(join(__dirname, '')),
    setupClsModule(),
    setupLoggerModule(),
    setupI18nModule(),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    // 应用全局中间件到所有路由
    console.log('MainModule: 应用全局中间件到所有路由');
    consumer.apply(GlobalMiddleware).forRoutes('*');
  }
}
