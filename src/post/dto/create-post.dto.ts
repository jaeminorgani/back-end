import { PickType } from '@nestjs/swagger';
import { Post } from '../entities/post.entity';

export class CreatePostDto extends PickType(Post, [
  'title',
  'preview',
  'content',
  'price',
  'channelId',
  'visibility',
  'seriesId',
  'categoryId',
]) {}
