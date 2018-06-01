angular
// Name our module
    .module('linksInProfile', [])
    .controller('linksInProfileController', ['$scope', function( $scope ) {
        this.$onInit = () => {
            $scope.parentCtrl = this.parentCtrl;
        }
    }])
    .component('prmFinesAfter', {
        bindings: {
            parentCtrl: '<'
        },
        controller: 'linksInProfileController',
        template: `
              
              <div class="layout-row"><a
                href="https://secure.touchnet.net/C21249_ustores/web/store_main.jsp?STOREID=24&SINGLESTORE=true"
                class="md-button md-raised md-accent"
                aria-label="Pay fines online"
              ><span>Pay fines online</span>
              </a></div>
              
              <div class="layout-row"><a href="https://www.pcc.edu/library/services/borrowing/library-fines/">See other ways to deal with your fines.</a></div>
              
              `
    });

module.exports = 'linksInProfile'
