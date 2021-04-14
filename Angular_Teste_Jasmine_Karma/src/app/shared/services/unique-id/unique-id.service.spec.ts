import { UniqueIdService } from "./unique-id.services";

describe(UniqueIdService.name, () => {

    let service: UniqueIdService = null;

    beforeEach(() => {
        service = new UniqueIdService();
    });

    it(`#${UniqueIdService.prototype.generatedUniqueIdWithPrefix.name}
     should generated id when called with prefix`, () => {
        const id = service.generatedUniqueIdWithPrefix('app');
        expect(id.startsWith('app-')).toBeTrue();

        //3 métodos para testar estados booleanos
        //expect(true).toBeTrue();//verificar tipos primitivos/literal
        //expect(true).toBe(true);//compara se um tipo é a mesma referencia
        //expect(true).toBeTruthy();//é o mais generico de todos
    });

    it(`#${UniqueIdService.prototype.generatedUniqueIdWithPrefix.name}
     should not generate duplicate IDs when called multiple time`, () => {
        const ids = new Set();
        for (let i = 0; i < 50; i++) {
            ids.add(service.generatedUniqueIdWithPrefix('app'));
        }
        expect(ids.size).toBe(50);
    });

    it(`#${UniqueIdService.prototype.generatedUniqueIdWithPrefix.name}
     should return the number of generatedIDs whr called`, () => {
        service.generatedUniqueIdWithPrefix('app');
        service.generatedUniqueIdWithPrefix('app');
        expect(service.getNumberGeneratedUniqueIds()).toBe(2);
    });

    it(`#${UniqueIdService.prototype.generatedUniqueIdWithPrefix.name}
    should throw when with empty`, () => {
        const emptyValues = [null, undefined, ''];
        emptyValues.forEach(emptyValues => {
            expect(() => service.generatedUniqueIdWithPrefix(emptyValues))
                .withContext(`Empty value : ${emptyValues}`)
                .toThrow();
        });
    });
});

//blablabla should blablabla when clablabla
//estrutura jasmine
//alguma deve fazer algo quando determinadas condições estiverem presentes