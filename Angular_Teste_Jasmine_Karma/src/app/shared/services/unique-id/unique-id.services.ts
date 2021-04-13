import { Injectable } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UniqueIdService {

    private numberOfGeneratedIds = 0;

    /**Serviço reponsável por gerar id's únicos e retorna a string concatenando com o id gerado.
     * passando um prefixo
     * retornando um prefixo com o id gerado
     * generatedUniqueIdWithPrefix
     */
    public generatedUniqueIdWithPrefix(prefix: string): string {
        if (!prefix) {
            throw Error('Prefix can not be empty');
        }
        const uniqueId = this.generatedUniqueId();
        this.numberOfGeneratedIds++;
        return `${prefix}-${uniqueId}`;
    };

    /** Retorna o valor numérico do Generated Id Unique gerado
     * getNumberGeneratedUniqueIds
     */
    public getNumberGeneratedUniqueIds(): number {
        return this.numberOfGeneratedIds;
    }

    /** Gera uma string a partir do uuid versão 4 um id único
     * generatedUniqueId()
     */
    private generatedUniqueId(): string {
        return uuidv4();
    }
}