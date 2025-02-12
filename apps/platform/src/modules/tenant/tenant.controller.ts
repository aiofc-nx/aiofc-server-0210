import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';

import { ZodValidationPipe } from '../../common/pipes/zod.validation.pipe';
import { Tenant } from '../../infrastructure/persistence/tenant/tenant.schema';

import {
  CreateTenantDto,
  UpdateTenantDto,
  createTenantSchema,
  updateTenantSchema,
} from './dto/tenant.dto';
import { TenantService } from './tenant.service';

@Controller('tenants')
export class TenantController {
  constructor(private tenantService: TenantService) {}

  @Post()
  async create(
    @Body(new ZodValidationPipe(createTenantSchema))
    data: CreateTenantDto
  ): Promise<Tenant> {
    return this.tenantService.create(data);
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<Tenant | null> {
    return this.tenantService.findById(id);
  }

  @Get()
  async findAll(): Promise<Tenant[]> {
    return this.tenantService.findAll();
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body(new ZodValidationPipe(updateTenantSchema))
    data: UpdateTenantDto
  ): Promise<Tenant | null> {
    return this.tenantService.update(id, data);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<boolean> {
    return this.tenantService.delete(id);
  }
}
