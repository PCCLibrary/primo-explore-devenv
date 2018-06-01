angular
// Name our module
    .module('libraryAccountQuestions', [])
    .controller('libraryAccountQuestionsController', ['$scope', function( $scope ) {
        this.$onInit = () => {
            $scope.parentCtrl = this.parentCtrl;
        }
    }])
    .component('prmMessagesAndBlocksOverviewAfter', {
        bindings: {
            parentCtrl: '<'
        },
        controller: 'libraryAccountQuestionsController',
        template: `
              <div class="layout-row"><a
                href="https://www.pcc.edu/library/services/borrowing/library-account-questions/"
                class="md-button md-raised md-accent"
                aria-label="Library Account Questions"
              ><span>Library Account Questions</span>
              </a></div>
              `
    });

module.exports = 'libraryAccountQuestions'
