require("dotenv").config({ path: `.${process.env.NODE_ENV || 'development'}.env` });
import { Module } from '@nestjs/common';
import * as Controllers from './controllers';
import * as Services from './services'
import { MongooseModule } from '@nestjs/mongoose';
import { mapping } from './providers/mapping'

@Module({
  imports: [MongooseModule.forRoot(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })],
  controllers: [...Object.values(Controllers)],
  providers: [...Object.values(Services), ...mapping],
})

export class AppModule { }
