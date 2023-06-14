import { Body, Controller, Get, Post } from "@nestjs/common";
import { CriaProdutoDTO } from "./dto/CriaProduto.dto";
import { ProdutoRepository } from "./produto.repository";


@Controller('/produtos')
export class ProdutoController {
    
    constructor(private produtoRepository: ProdutoRepository) {

    }

    @Post() 
    async criaProduto(@Body() dadosProduto : CriaProdutoDTO) {
        this.produtoRepository.salvar(dadosProduto);
        return dadosProduto;
    }

    @Get()
    async listaProdutos() {
        return this.produtoRepository.listar();
    }

}