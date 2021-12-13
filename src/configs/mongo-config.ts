import { TypegooseModuleOptions } from 'nestjs-typegoose';
import { ConfigService } from '@nestjs/config';

const getMongoUri = (configService: ConfigService) => {
    return (
        'mongodb://' +
        configService.get('MONGO_LOGIN') +
        ':' +
        configService.get('MONGO_PASSWORD') +
        '@' +
        configService.get('MONGO_HOST') +
        ':' +
        configService.get('MONGO_PORT') +
        '/' +
        configService.get('MONGO_AUTHDATABASES')
    );
};

const getMongoOptions = () => {
    return {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
    };
};

export const mongoConfig = async (
    configService: ConfigService,
): Promise<TypegooseModuleOptions> => {
    return {
        uri: getMongoUri(configService),
        ...getMongoOptions(),
    };
};
