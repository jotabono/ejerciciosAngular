
angular.module('jugadorEquipoApp')
    .controller('namesCtrl', function($scope) {
    $scope.players = [
        {name:'Javi Bono',fecha:'26/08/1992',numcanastas:'541', numrebotes:'234', numasistencias:'23'},
        {name:'Eduardo Benavides',fecha:'24/10/1992',numcanastas:'123', numrebotes:'52', numasistencias:'42'},
        {name:'Carlos Menendez',fecha:'17/08/1994',numcanastas:'344', numrebotes:'22', numasistencias:'122'},
        {name:'Xavi Pandis',fecha:'10/02/1994',numcanastas:'422', numrebotes:'12', numasistencias:'81'}
    ];
});
