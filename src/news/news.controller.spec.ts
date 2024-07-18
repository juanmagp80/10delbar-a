import { Body, Controller, Delete, Get, Param, Post, Put, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { News } from './news.entity';
import { NewsService } from './news.service';

@Controller('news')
export class NewsController {
  constructor(private readonly newsService: NewsService) { }

  @Get()
  findAll(): News[] {
    return this.newsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): News {
    return this.newsService.findOne(+id);
  }

  @Post()
  @UseInterceptors(FileInterceptor('image', {
    storage: diskStorage({
      destination: './uploads',
      filename: (req, file, callback) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        const ext = extname(file.originalname);
        callback(null, `${uniqueSuffix}${ext}`);
      },
    }),
  }))
  create(@Body() news: Omit<News, 'id' | 'image'>, @UploadedFile() file: Express.Multer.File): News {
    return this.newsService.create({ ...news, image: file.filename });
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() news: Omit<News, 'id'>): News {
    return this.newsService.update(+id, news);
  }

  @Delete(':id')
  delete(@Param('id') id: string): boolean {
    return this.newsService.delete(+id);
  }
}
