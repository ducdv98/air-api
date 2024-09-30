import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { Client, ClientProxy, Transport } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Client({ transport: Transport.TCP, options: { port: 3002 } })
  private demoClient: ClientProxy;

  @Get('demo/:id')
  getUser(@Param('id') id: string) {
    return this.demoClient.send({ cmd: 'hello_demo' }, parseInt(id));
  }
}
