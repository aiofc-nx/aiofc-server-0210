import path from 'path';

import {
  AcceptLanguageResolver,
  HeaderResolver,
  I18nJsonLoader,
  I18nModule,
  QueryResolver,
} from 'nestjs-i18n';

export const setupI18nModule = () => {
  return I18nModule.forRootAsync({
    useFactory: () => ({
      fallbackLanguage: 'zh',
      loaderOptions: {
        path: path.join(__dirname, 'i18n'),
        watch: true,
        includeSubfolders: true,
      },
      loaders: [I18nJsonLoader],
      typesOutputPath: path.join(
        __dirname,
        '../../../apps/platform/src/generated/i18n.generated.ts'
      ),
      logging: true,
      debug: true,
    }),
    resolvers: [
      { use: QueryResolver, options: ['lang'] },
      AcceptLanguageResolver,
      new HeaderResolver(['x-lang']),
    ],
  });
};
