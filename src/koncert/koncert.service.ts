import { Injectable, BadRequestException  } from '@nestjs/common';
import { CreateKoncertDto } from './dto/create-koncert.dto';
import { UpdateKoncertDto } from './dto/update-koncert.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class KoncertService {
  constructor(private db : PrismaService){}

  create(createKoncertDto: CreateKoncertDto) {
    const currentDate = new Date();
    const koncertDateTime = new Date(createKoncertDto.kezdesiIdo);

    if( koncertDateTime < currentDate){
      throw new BadRequestException("nem lehet a múltban kezdési idő")
    }
    else
    {
      return this.db.koncert.create({
      
        data: {
          ...createKoncertDto
        }
      });
    }


   
  }

  findAll() {
    return this.db.koncert.findMany();
  }

  findOne(id: number) {
    return this.db.koncert.findUnique({
      where: {
        id: id
      }
    });
  }

  update(id: number, updateKoncertDto: UpdateKoncertDto) {
   
    return this.db.koncert.update({
      where: {
        id: id
      },
      data: {
        ...updateKoncertDto
      }
    })
    
  }

  remove(id: number) {
    return this.db.koncert.delete({
      where: { 
        id: id
      }
      });
  }
}
