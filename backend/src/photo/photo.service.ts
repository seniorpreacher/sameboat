import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {Photo} from './photo.entity';

@Injectable()
export class PhotoService {
    constructor(
        @InjectRepository(Photo)
        private readonly photoRepository: Repository<Photo>,
    ) {
    }

    findAll(): Promise<Photo[]> {
        return this.photoRepository.find();
    }

    async makeTest(): Promise<Photo> {
        const photo = new Photo();
        photo.name = 'test';
        photo.description = 'test';
        photo.filename = 'test';
        photo.isPublished = false;
        photo.views = 0;
        await this.photoRepository.insert(photo);
        return photo;
    }
}
