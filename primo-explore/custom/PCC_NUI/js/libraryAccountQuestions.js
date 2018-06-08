angular
// Name our module
    .module('libraryAccountQuestions', [])
    // .controller('libraryAccountQuestionsController', ['$scope', function( $scope ) {
    //     this.$onInit = () => {
    //         $scope.parentCtrl = this.parentCtrl;
    //     }
    // }])
    .component('prmMessagesAndBlocksOverviewAfter', {
        bindings: {
            parentCtrl: '<'
        },
        // controller: 'libraryAccountQuestionsController',
        template:
            `
            <div class="tiles-grid-tile">
                <div class="tile-content layout-column" layout="column">
                    <div class="tile-header layout-column" layout="column">
                        <div layout="row" layout-align="space-between" class="layout-align-space-between-stretch layout-row">
                            <h2 class="header-link light-text">
                                <span>More Questions?</span>                              
                            </h2>
                        </div>
                    </div>
                    <div layout="column" layout-align="center center" layout-padding="" layout-margin="" class="layout-margin layout-padding layout-align-center-center layout-column">
                        <div>
                            <a href="https://www.pcc.edu/library/services/borrowing/library-account-questions/"
                            class="md-button md-raised md-accent"
                            aria-label="Library Account Questions"
                          >
                          <span>Library Account Questions</span>
                          </a>
                        </div>
                    </div>
            
            <!---->
            <!---->
                </div>
            </div>
            `
    });

module.exports = 'libraryAccountQuestions'
