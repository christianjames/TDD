describe("Serviço responsável pelos artigos:", function() {

	var servicoArtigos;
	beforeEach(function() {
		servidor = new ServidorStub();
		servicoArtigo = new ServicoArtigo(servidor);
	});

	it("Deve buscar todos os artigos.", function () {
		var sum = 3 + 4; 
		expect(sum).toEqual(7);
	});

	it("Título tem que ser FloripaJS Meetup", function () {
                var title = "FloripaJS Meetup";
                expect(title).toEqual("FloripaJS Meetup");
        });

	 it("Comparando objetos", function() {
      		var json = {title: 'FloripaJS'};
      		var json2 = {title: 'FloripaJS'};
      		expect(json).toEqual(json);
    	});

	it("Verificando se causa excessão", function() {
    		var foo = function() {
      			return 1 + 2;
    		};
    		var bar = function() {
      			return a + 1;
    		};

    		expect(foo).not.toThrow();
    		expect(bar).toThrow();
	});
});

describe("Teste HTML", function () {
	beforeEach(function () {
		loadFixtures('app.html');
	});

	it("Título da página tem que ser FloripaJS", function () {
		var title = $('#title').html();

		expect(title).toEqual("FloripaJS");
	});
});

