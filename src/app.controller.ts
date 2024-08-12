import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';

@ApiTags('app')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOperation({ summary: 'Retrieve a hello message' })
  @ApiResponse({
    status: 200,
    description: 'Returns a hello message',
    schema: {
      example: {
        message: 'Hello World!',
      },
    },
  })
  getHello(): string {
    return this.appService.getHello();
  }
}
