import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { Request, Response } from 'express';

@Controller('items')
export class ItemsController {
  @Get()
  findAll(@Req() req: Request, @Res() res: Response): Response {
    return res.send('Hello World');
  }

  @Post()
  create(@Body() createItemDto: CreateItemDto): string {
    return `Name: ${createItemDto.name} Desc: ${createItemDto.description}`;
  }
}
