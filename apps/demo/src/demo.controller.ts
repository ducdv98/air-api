import { Controller } from '@nestjs/common';
import { DemoService } from './demo.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class DemoController {
  constructor(private readonly demoService: DemoService) {}

  @MessagePattern({ cmd: 'hello_demo' })
  helloDemo(id: number) {
    return { id, name: 'John Doe', email: 'john@example.com' };
  }
}
