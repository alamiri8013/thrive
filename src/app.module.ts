import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [],
  providers: [],
})
export class AppModule {
  onModuleInit() {
    console.log('AppModule has been initialized.');
  }
}
