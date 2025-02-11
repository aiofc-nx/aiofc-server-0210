import { Injectable, NestMiddleware } from '@nestjs/common';
import { FastifyRequest, FastifyReply } from 'fastify';

@Injectable()
export class GlobalMiddleware implements NestMiddleware {
  use(req: FastifyRequest, _res: FastifyReply, next: () => void) {
    console.log('GlobalMiddleware: 中间件被调用');
    console.log('GlobalMiddleware: 请求URL:', req.url);

    // 获取原始URL，确保req.originalUrl存在
    const rawUrl = req.originalUrl; // 使用req.originalUrl
    console.log('GlobalMiddleware: 原始请求URL:', rawUrl);

    // 检查请求是否在/api前缀下
    // if (rawUrl?.startsWith('/api')) {
    //   console.log(`GlobalMiddleware: 拦截到API请求 ${req.method} ${rawUrl}`);
    //   // 使用Fastify的API返回响应
    //   // res.code(403).send('API请求被拦截了！！！！').callNotFound(); // 使用Fastify的API
    //   return; // 确保不再调用next()
    // }
    // res.code(403).send('API请求被拦截了！！！！');
    next(); // 非API请求继续处理
  }
}
