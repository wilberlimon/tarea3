import { Controller, Get, Post } from '@nestjs/common';

@Controller('computadoras')
export class ComputadorasController {
    constructor(){}

    @Get()
    listar() {
        return [];
    }
    @Post()
    Crear(){
        return[];
    }
}
