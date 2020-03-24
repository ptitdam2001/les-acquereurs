import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';

import * as config from 'config';

const mongoServer = `${config.get('db.host')}:${config.get(
  'db.port',
)}/${config.get('db.database')}`;
const mongoConfig = {
  useNewUrlParser: true,
  autoIndex: true, // process.env.NODE_ENV === 'test' ? true : false, // Don't build indexes
  reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
  reconnectInterval: 500, // Reconnect every 500ms
  poolSize: 10, // Maintain up to 10 socket connections
  // If not connected, return errors immediately rather than waiting for reconnect
  bufferMaxEntries: 0,
  connectTimeoutMS: 10000, // Give up initial connection after 10 seconds
  socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
  // family: 4, // Use IPv4, skip trying IPv6
  useUnifiedTopology: true,
};

@Module({
  imports: [MongooseModule.forRoot(mongoServer, mongoConfig)],
})
export class DatabaseModule {}
