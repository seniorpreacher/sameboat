import { Controller, Get } from '@nestjs/common';
import { Photo } from './photo.entity';
import { PhotoService } from './photo.service';

@Controller('/photo')
export class PhotoController {
  constructor(private readonly photoService: PhotoService) {
  }

  @Get('/')
  findAll(): Promise<Photo[]> {
    return this.photoService.findAll();
  }

  @Get('/make-test')
  makeTest(): Promise<Photo> {
    return this.photoService.makeTest();
  }
}