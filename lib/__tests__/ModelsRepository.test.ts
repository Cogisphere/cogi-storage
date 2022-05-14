import ModelsRepository from "../ModelsRepository";

describe('ModelsRepository', () => {

    describe('.constructor()', () => {
        it('should construct the repository when there is a file', () => {

            const repository = new ModelsRepository(__dirname+"/fixtures/repository.json");
            expect(repository).toBeTruthy();
        });
        it('should fail when the file is missing', () => {

            expect(() => {
                new ModelsRepository(__dirname+'/fixtures/not-existing-repository.json');
            }).toThrow();

        });
    });

    describe('.pull()', () => {
        it('should pull repository from disk', () => {
            const repository = new ModelsRepository(__dirname+"/fixtures/repository.json");
        });
    });

    describe('.flush()', () => {

    });
});