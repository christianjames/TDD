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