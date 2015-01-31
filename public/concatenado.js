(function () {
	'use strict';

	angular.module('blogmv', [
		'ngRoute',
		'blogmv.modulos'
	]);

})();
(function () {
	'use strict';

	angular.module('blogmv.modulos', [
		'modulo.artigo'
	]);

})();
var ServicoArtigo = (function () {
	'use strict';

	function ServicoArtigo (servidor) {

		function buscarTodos () {
			return servidor.buscarTodosArtigos().then(
				function () {
					// body...
				}
			);
		}

	};
	
	return ServicoArtigo;
	

})();
var Servidor = (function () {
	'use strict';

	function Servidor ($http) {
		var _urlBaseArtigos = 'http://blogmv-api.appspot.com/api/articles';
		var _urlBaseComentarios = _urlBaseArtigos + '/{id}/comments';

		function buscarTodosArtigos () {
			return $http.get(_urlBaseArtigos);
		};

		function buscarArtigo (idArtigo) {
			return $http.get(_urlBaseArtigos + idArtigo);
		};

		function buscarComentariosArtigo (idArtigo) {
			return $http.get(_urlBaseComentarios.replace('{id}', idArtigo));
		};

		return {
			buscarTodosArtigos: buscarTodosArtigos,
			buscarArtigo: buscarArtigo,
			buscarComentariosArtigo: buscarComentariosArtigo
		};
	};
	
	return Servidor;	

})();
(function () {
	'use strict';

	angular.module('modulo.artigo', []);

})();