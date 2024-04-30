import { Injectable, Logger, NotFoundException, OnModuleInit } from '@nestjs/common';
import { CreateUserDto } from './dto/create-dato.dto';
import { UpdateUserDto } from './dto/update-dato.dto';
import { PrismaClient } from '@prisma/client';
import { PaginationDto } from 'src/common/dto/pagination.dto';

@Injectable()
export class UserService extends PrismaClient implements OnModuleInit {
  private readonly logger = new Logger('Database');

  onModuleInit() {
    this.$connect();
    this.logger.log('Postgres connected');
  }
  
  async create(createUserDto: CreateUserDto) {
    const user = await this.user.create({
      data: createUserDto,
    });

    return user;
  }

  async findAll(paginationDto: PaginationDto) {
    const { page, limit } = paginationDto;
    const data = await this.user.findMany({
      skip: (page - 1) * limit,
      take: limit,
      where: {available: true}
    });
    const total = await this.user.count();
    const lastPage = Math.ceil(total / limit);
    const users = {
      meta: { total, lastPage, page, limit },
      data: data,
    };
    return users;
  }

  async findOne(id: number) {
    const user = await this.user.findUnique({
      where: {id, available: true}
    });
    if(!user) {
      throw new NotFoundException(`User with ${id} not found`)
    }
    return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const { id: __, ...data } = updateUserDto;
    await this.findOne(id);
    const user = await this.user.update({
      where: { id },
      data,
    });
    return user;
  }

  async remove(id: number) {
    await this.findOne(id);
    const product = await this.user.update({
      where: { id },
      data: { available: false },
    });
    return product;
  }
}
