(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
'use strict';

angular
// Name our module
.module('linksInProfile', [])
// .controller('linksInProfileController', ['$scope', function( $scope ) {
//     this.$onInit = () => {
//         $scope.parentCtrl = this.parentCtrl;
//     }
// }])
.component('prmFinesAfter', {
    bindings: {
        parentCtrl: '<'
    },
    // controller: 'linksInProfileController',
    template: '\n              \n              <div class="layout-row"><a\n                href="https://secure.touchnet.net/C21249_ustores/web/store_main.jsp?STOREID=24&SINGLESTORE=true"\n                class="md-button"\n                aria-label="Pay fines online"\n              ><span>Pay fines online</span>\n              </a> <a class="md-button md-secondary" href="https://www.pcc.edu/library/services/borrowing/library-fines/">See other ways to deal with your fines.</a></div>\n              \n              '
});

module.exports = 'linksInProfile';

},{}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var clickableLogoLinkConfig = exports.clickableLogoLinkConfig = {
  name: 'clickableLogoLinkConfig',
  config: {
    url: 'https://www.pcc.edu/library',
    altText: 'PCC Library'
  }
};

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var customActionsConfig = exports.customActionsConfig = {
    name: 'customActions',
    config: [{
        name: "Report Issue",
        description: "Report an issue or problem",
        type: 'template',
        icon: {
            set: 'communication',
            name: 'ic_comment_24px'
        },
        action: "https://www.pcc.edu/library/about/people/contact/report-issues/"
    }]
};

},{}],4:[function(require,module,exports){
'use strict';

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
    template: '\n            <div class="tiles-grid-tile">\n                <div class="tile-content layout-column" layout="column">\n                    <div class="tile-header layout-column" layout="column">\n                        <div layout="row" layout-align="space-between" class="layout-align-space-between-stretch layout-row">\n                            <h2 class="header-link light-text">\n                                <span>More Questions?</span>                              \n                            </h2>\n                        </div>\n                    </div>\n                    <div layout="column" layout-align="center center" layout-padding="" layout-margin="" class="layout-margin layout-padding layout-align-center-center layout-column">\n                        <div>\n                            <a href="https://www.pcc.edu/library/services/borrowing/library-account-questions/"\n                            class="md-button md-raised md-accent"\n                            aria-label="Library Account Questions"\n                          >\n                          <span>Library Account Questions</span>\n                          </a>\n                        </div>\n                    </div>\n            \n            <!---->\n            <!---->\n                </div>\n            </div>\n            '
});

module.exports = 'libraryAccountQuestions';

},{}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var libraryh3lpWidgetConfig = exports.libraryh3lpWidgetConfig = {
  name: 'libraryh3lpWidgetConfig',
  config: {
    url: 'https://www.pcc.edu/library/scripts/chat-api/widget.php',
    prompt: 'Chat',
    icon: {
      set: 'communication',
      icon: 'ic_forum_24px'
    }
  }
};

},{}],6:[function(require,module,exports){
'use strict';

require('primo-explore-clickable-logo-to-any-link');

require('primo-explore-libraryh3lp-widget');

require('primo-explore-search-bar-sub-menu');

require('primo-explore-toggle-institutions');

require('primo-explore-custom-actions');

require('primo-explore-custom-no-search-results');

require('primo-explore-external-search');

var _viewName = require('./viewName');

var _clickableLogoToAnyLink = require('./clickableLogoToAnyLink');

var _libraryh3lpWidget = require('./libraryh3lpWidget');

var _searchBarSubMenu = require('./searchBarSubMenu');

var _customActions = require('./customActions');

var _LinksInProfile = require('./LinksInProfile');

var _libraryAccountQuestions = require('./libraryAccountQuestions');

var app = angular.module('viewCustom', ['clickableLogoToAnyLink', 'libraryh3lpWidget', 'searchBarSubMenu', 'toggleInstitutions', 'customActions', 'customNoSearchResults', 'linksInProfile', 'libraryAccountQuestions', 'externalSearch']);

app.constant(_customActions.customActionsConfig.name, _customActions.customActionsConfig.config).constant(_clickableLogoToAnyLink.clickableLogoLinkConfig.name, _clickableLogoToAnyLink.clickableLogoLinkConfig.config).constant(_libraryh3lpWidget.libraryh3lpWidgetConfig.name, _libraryh3lpWidget.libraryh3lpWidgetConfig.config).constant(_searchBarSubMenu.searchBarSubMenuItemsConfig.name, _searchBarSubMenu.searchBarSubMenuItemsConfig.config).value('customNoSearchResultsTemplateUrl', 'custom/' + _viewName.viewName + '/html/noSearchResults.html').component('prmSearchBarAfter', {
    template: '<search-bar-sub-menu></search-bar-sub-menu>'
}).component('prmAlmaMoreInstAfter', { template: '<toggle-institutions />' }).value('searchTargets', [{
    "name": "Worldcat",
    "url": "https://pcc.on.worldcat.org/search?",
    "img": "https://www.pcc.edu/library/primo/images/worldcat-logo.png",
    mapping: function mapping(queries, filters) {
        var query_mappings = {
            'any': 'kw',
            'title': 'ti',
            'creator': 'au',
            'subject': 'su',
            'isbn': 'bn',
            'issn': 'n2'
        };
        try {
            return 'queryString=' + queries.map(function (part) {
                var terms = part.split(',');
                var type = query_mappings[terms[0]] || 'kw';
                var string = terms[2] || '';
                var join = terms[3] || '';
                return type + ':' + string + ' ' + join + ' ';
            }).join('');
        } catch (e) {
            return '';
        }
    }
}, {
    "name": "Google Scholar",
    "url": "https://scholar.google.com/scholar?q=",
    "img": "https://www.pcc.edu/library/primo/images/google_logo.png",
    mapping: function mapping(queries, filters) {
        try {
            return queries.map(function (part) {
                return part.split(",")[2] || "";
            }).join(' ');
        } catch (e) {
            return '';
        }
    }
}, {
    "name": "EBSCO Search",
    "url": "https://libproxy.pcc.edu/login?url=http://search.ebscohost.com/login.aspx?direct=true&site=ehost-live&scope=site&type=1&db=aph&db=f5h&mode=bool&lang=en&cli0=FT&clv0=Y&bquery=",
    "img": "https://www.pcc.edu/library/primo/images/ebsco-search.png",
    mapping: function mapping(queries, filters) {
        try {
            return queries.map(function (part) {
                return part.split(",")[2] || "";
            }).join(' ');
        } catch (e) {
            return '';
        }
    }
}]);

},{"./LinksInProfile":1,"./clickableLogoToAnyLink":2,"./customActions":3,"./libraryAccountQuestions":4,"./libraryh3lpWidget":5,"./searchBarSubMenu":7,"./viewName":8,"primo-explore-clickable-logo-to-any-link":9,"primo-explore-custom-actions":11,"primo-explore-custom-no-search-results":13,"primo-explore-external-search":15,"primo-explore-libraryh3lp-widget":17,"primo-explore-search-bar-sub-menu":19,"primo-explore-toggle-institutions":22}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var searchBarSubMenuItemsConfig = exports.searchBarSubMenuItemsConfig = {
  name: 'searchBarSubMenuItems',
  config: [{
    name: "Report Issue",
    description: "Report an issue or problem",
    action: "https://www.pcc.edu/library/about/people/contact/report-issues/",
    icon: {
      set: 'communication',
      icon: 'ic_comment_24px'
    }
  }]
};

},{}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// vid
var viewName = exports.viewName = "PCC";

},{}],9:[function(require,module,exports){
require('./js/clickable-logo-to-any-link.module.js')
module.exports = 'clickableLogoToAnyLink'

},{"./js/clickable-logo-to-any-link.module.js":10}],10:[function(require,module,exports){
angular
  .module('clickableLogoToAnyLink', [])
  .controller('clickableLogoToAnyLinkController', ['clickableLogoLinkConfig', '$scope', '$filter', function(clickableLogoLinkConfig, $scope, $filter) {
    $scope.clickableLogoLink = clickableLogoLinkConfig.url;
    $scope.clickableLogoAlt = clickableLogoLinkConfig.altText;
    $scope.iconLink = this.parentCtrl.iconLink
    $scope.translate = (original) => {
      return original.replace(/\{(.+)\}/g, (match, p1) => $filter('translate')(p1));
    }
  }])
  .component('prmLogoAfter', {
    bindings: {
      parentCtrl: '<'
    },
    controller: 'clickableLogoToAnyLinkController',
    template: '<div class="product-logo product-logo-local" layout="row" layout-align="start center" layout-fill id="banner" tabindex="0" role="banner">'+
                '<a ng-href="{{ translate(clickableLogoLink) }}"><img class="logo-image" ng-alt="{{ translate(clickableLogoAlt) }}" ng-src="{{ iconLink }}"/></a>'+
              '</div>'

  });

},{}],11:[function(require,module,exports){
require('./js/custom-actions.module.js')
module.exports = 'customActions'

},{"./js/custom-actions.module.js":12}],12:[function(require,module,exports){
angular
  .module('customActions', [])
  .component('prmActionContainerAfter', {
    require: { prmActionCtrl: '^prmActionList' },
    controller: ['customActionsService', 'customActions', function (customActionsService, customActions) {
      this.$onInit = function () {
        customActionsService.setController(this.prmActionCtrl)
        customActions.map(action => customActionsService.addAction(action))
      }
    }]
  })
  .factory('customActionsService', function () {
    return {
      setController: function (controller) {
        this.prmActionCtrl = controller
      },
      processAction: function (action) {
        action.iconname = action.name.replace(/\s+/g, ''),
        action.slug = action.name.replace(/\s+/g, '').toLowerCase(),
        action.index = Object.keys(this.prmActionCtrl.actionListService.actionsToIndex).length - 1
        this.prmActionCtrl.actionLabelNamesMap[action.slug] = action.name
        this.prmActionCtrl.actionIconNamesMap[action.slug] = action.iconname
        this.prmActionCtrl.actionIcons[action.iconname] = {
          icon: action.icon.name,
          iconSet: action.icon.set,
          type: "svg"
        }
        return action
      },
      addAction: function (action) {
        action = this.processAction(action)
        if (!this.prmActionCtrl.actionListService.actionsToIndex[action.slug]) {
          this.prmActionCtrl.actionListService.requiredActionsList[action.index] = action.slug
          this.prmActionCtrl.actionListService.actionsToDisplay.unshift(action.slug)
          this.prmActionCtrl.actionListService.actionsToIndex[action.slug] = action.index
        }
        if (action.type === 'template') {
            // process { } in templateVars
            if (action.hasOwnProperty('templateVar')) {
                action.action = action.action.replace(/{\d}/g, (r) => action.templateVar[r.replace(/[^\d]/g, '')])
            }
            // replace a recordId occurence
            action.action = action.action.replace(/{recordId}/g, (r) => this.prmActionCtrl.item.pnx.search.recordid[0])
            // replace a pnx.xxx.xxx[0] pattern ex. pnx.search.recordid[0]
            let pnxProperties = action.action.match(/\{(pnx\..*?)\}/g) || []
            pnxProperties.forEach((p) => {
                let valueForP = p.replace(/[{}]/g, '').split('.').reduce((o, i) => {
                    try {
                        let h = /(.*)(\[\d\])/.exec(i)
                        if (h instanceof Array) { return o[h[1]][h[2].replace(/[^\d]/g, '')] }
                        return o[i]
                    } catch (e) {
                        return ''
                    }
                }, this.prmActionCtrl.item)
                action.action = action.action.replace(p, valueForP)
            })
        }
        this.prmActionCtrl.actionListService.onToggle[action.slug] = () => window.open(action.action, '_blank')
      }
    }
  })

},{}],13:[function(require,module,exports){
require('./js/custom-no-search-results.module.js')
module.exports = 'customNoSearchResults'

},{"./js/custom-no-search-results.module.js":14}],14:[function(require,module,exports){
angular
  .module('customNoSearchResults', [])
  .component('prmNoSearchResultAfter', {
    bindings: {
      parentCtrl: '<'
    },
    templateUrl: ['customNoSearchResultsTemplateUrl', function (customNoSearchResultsTemplateUrl) {
      return customNoSearchResultsTemplateUrl;
    }]
  });

},{}],15:[function(require,module,exports){
require('./js/external-search.module.js')
module.exports = 'externalSearch'

},{"./js/external-search.module.js":16}],16:[function(require,module,exports){
angular
  .module('externalSearch', [])
  .value('searchTargets', [])
  .component('prmFacetAfter', {
      bindings: { parentCtrl: '<' },
      controller: ['externalSearchService', function (externalSearchService) {
        externalSearchService.controller = this.parentCtrl
        externalSearchService.addExtSearch()
      }]
  })
  .component('prmPageNavMenuAfter', {
    controller: ['externalSearchService', function (externalSearchService) {
      if (externalSearchService.controller) externalSearchService.addExtSearch()
    }]
  })
  .component('prmFacetExactAfter', {
      bindings: { parentCtrl: '<' },
      template: `
      <div ng-if="name === 'External Search'">
          <div ng-hide="$ctrl.parentCtrl.facetGroup.facetGroupCollapsed">
              <div class="section-content animate-max-height-variable">
                  <div class="md-chips md-chips-wrap">
                      <div ng-repeat="target in targets" aria-live="polite" class="md-chip animate-opacity-and-scale facet-element-marker-local4">
                          <div class="md-chip-content layout-row" role="button" tabindex="0">
                              <strong dir="auto" title="{{ target.name }}">
                                  <a ng-href="{{ target.url + target.mapping(queries, filters) }}" target="_blank">
                                      <img ng-src="{{ target.img }}" width="22" height="22" style="vertical-align:middle;"> {{ target.name }}
                                  </a>
                              </strong>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>`,
      controller: ['$scope', '$location', 'searchTargets', function ($scope, $location, searchTargets) {
        $scope.name = this.parentCtrl.facetGroup.name
        $scope.targets = searchTargets
        let query = $location.search().query
        let filter = $location.search().pfilter
        $scope.queries = Array.isArray(query) ? query : query ? [query] : false
        $scope.filters = Array.isArray(filter) ? filter : filter ? [filter] : false
      }]
  })
  .factory('externalSearchService', function () {
    return {
      get controller() {
        return this.prmFacetCtrl || false
      },
      set controller(controller) {
        this.prmFacetCtrl = controller
      },
      addExtSearch: function () {
        if (this.prmFacetCtrl.facetService.results[this.prmFacetCtrl.facetService.results.length - 1].name !== 'External Search') {
          this.prmFacetCtrl.facetService.results.push({
            name: 'External Search',
            displayedType: 'exact',
            limitCount: 0,
            facetGroupCollapsed: false,
            values: undefined
          })
        }
      }
    }
  })

},{}],17:[function(require,module,exports){
require('./js/libraryh3lp-widget.module.js')
module.exports = 'libraryh3lpWidget'

},{"./js/libraryh3lp-widget.module.js":18}],18:[function(require,module,exports){
angular
  // Name our module
  .module('libraryh3lpWidget', [])
  // Add the libraryh3lp url to trusted url sources
  // so angular doesn't block it from an iframe
  .filter('trustUrl', ['$sce', function ($sce) {
    return function(url) {
      if (/^http(s)?:\/\/(.+\.)?pcc\.edu.+$/.test(url)) {
        return $sce.trustAsResourceUrl(url);
      }
    };
  }])
  // Controller for the component below
  .controller('libraryh3lpWidgetController', ['libraryh3lpWidgetConfig', '$scope', function(libraryh3lpWidgetConfig, $scope) {
    const ctrl = this;
    this.$onInit = () => {
      $scope.config = libraryh3lpWidgetConfig;
      // Do facets exist?
      $scope.facetsExist = (() => {
        try {
          return (ctrl.parentCtrl.searchService.facetService.results.length > 0);
        } catch (e) {
          return false;
        }
      })();
      // Add the bottom padding class if there are facets
      $scope.bottomPadding = { ["chat-bottom-padding"]: $scope.facetsExist };
    };
  }])
  .component('prmExploreMainAfter', {
    bindings: {
      parentCtrl: '<'
    },
    controller: 'libraryh3lpWidgetController',
    template: `
              <button class="button chat-tab ss-chat js-toggle-chat" ng-class="bottomPadding" ng-init="showChatWidget = false" ng-click="showChatWidget = !showChatWidget">
                <prm-icon style="z-index:1" icon-type="svg" svg-icon-set="{{config.icon.set}}" icon-definition="{{config.icon.icon}}"></prm-icon>
                {{config.prompt}}
              </button>
              <div class="chat-frame-wrap" ng-class="bottomPadding" ng-show="showChatWidget">
                <button class="chat-close ss-icon js-toggle-chat" title="Close chat window" ng-click="showChatWidget = !showChatWidget">&times;</button>
                <iframe class="chat-frame" ng-src="{{config.url | trustUrl}}" frameborder="0"></iframe>
              </div>
              `
  });

},{}],19:[function(require,module,exports){
require('./js/search-bar-sub-menu.module.js')
module.exports = 'searchBarSubMenu'

},{"./js/search-bar-sub-menu.module.js":20}],20:[function(require,module,exports){
angular
  .module('searchBarSubMenu', [])
  .controller('searchBarSubMenuController', ['searchBarSubMenuItems', '$scope', '$filter', function(items, $scope, $filter) {
    this.$onInit = () => {
      $scope.items = items;
    }
    $scope.translate = (original) => {
      return original.replace(/\{(.+)\}/g, (match, p1) => $filter('translate')(p1));
    }
    $scope.goToUrl = (url) => {
      window.open(url, '_blank');
    }
  }])
  .component('searchBarSubMenu', {
    controller: 'searchBarSubMenuController',
    template: `<div class="layout-align-end-center layout-row flex search-bar-sub-menu">
                <ul>
                  <li ng-repeat="item in items">
                  <button data-href="{{ translate(item.action) }}" aria-label="{{ translate(item.description) }}" ng-click="goToUrl(translate(item.action))" class="button-with-icon zero-margin md-button md-small {{item.cssClasses}}" type="button">
                    <md-tooltip md-direction="bottom" md-delay="500">{{ translate(item.description) }}</md-tooltip><prm-icon style="z-index:1" icon-type="svg" svg-icon-set="{{item.icon.set}}" icon-definition="{{item.icon.icon}}"></prm-icon>
                    <span class="search-bar-sub-menu-item" ng-class="(item.show_xs) ? '' : 'hide-xs'">{{ translate(item.name) }}</span>
                  </button>
                  </li>
                </ul>
              </div>`

  });

},{}],21:[function(require,module,exports){
'use strict';

angular.module('toggleInstitutions', []);

angular.module('toggleInstitutions').component('toggleInstitutions', {
  bindings: {
    startHidden: '<'
  },
  template: '\n    <md-button class="md-raised" ng-click="$ctrl.toggleLibs()" id="summitButton" aria-controls="summitLinks" aria-expanded=false aria-label="Show/Hide Summit Libraries">\n        {{$ctrl.showLibs ? \'Hide Summit Libraries\' : \'Show Summit Libraries\'}}\n      <span aria-hidden=true>{{$ctrl.showLibs ? \'&laquo;\' : \'&raquo;\'}}</span>\n    </md-button>',
  controller: function controller() {
    this.$onInit = function () {
      this.showLibs = this.startHidden === false ? true : false;
      this.button = angular.element(document.querySelector('prm-alma-more-inst-after button'));
      this.tabs = angular.element(document.querySelector('prm-alma-more-inst md-tabs'));
      this.tabs.attr('id', 'summitLinks');
      this.button.parent().after(this.tabs);
      if (!this.showLibs) this.tabs.addClass('hide');
    };
    this.toggleLibs = function () {
      this.showLibs = !this.showLibs;
      this.tabs.hasClass('hide') ? this.tabs.removeClass('hide') && this.button.attr('aria-expanded', true) : this.tabs.addClass('hide') && this.button.attr('aria-expanded', false);
    };
  }
});
},{}],22:[function(require,module,exports){
require('./dist/module.js')
module.exports = 'toggleInstitutions'

},{"./dist/module.js":21}]},{},[6])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJwcmltby1leHBsb3JlL2N1c3RvbS9QQ0MvanMvTGlua3NJblByb2ZpbGUuanMiLCJwcmltby1leHBsb3JlL2N1c3RvbS9QQ0MvanMvY2xpY2thYmxlTG9nb1RvQW55TGluay5qcyIsInByaW1vLWV4cGxvcmUvY3VzdG9tL1BDQy9qcy9jdXN0b21BY3Rpb25zLmpzIiwicHJpbW8tZXhwbG9yZS9jdXN0b20vUENDL2pzL2xpYnJhcnlBY2NvdW50UXVlc3Rpb25zLmpzIiwicHJpbW8tZXhwbG9yZS9jdXN0b20vUENDL2pzL2xpYnJhcnloM2xwV2lkZ2V0LmpzIiwicHJpbW8tZXhwbG9yZS9jdXN0b20vUENDL2pzL21haW4uanMiLCJwcmltby1leHBsb3JlL2N1c3RvbS9QQ0MvanMvc2VhcmNoQmFyU3ViTWVudS5qcyIsInByaW1vLWV4cGxvcmUvY3VzdG9tL1BDQy9qcy92aWV3TmFtZS5qcyIsInByaW1vLWV4cGxvcmUvY3VzdG9tL1BDQy9ub2RlX21vZHVsZXMvcHJpbW8tZXhwbG9yZS1jbGlja2FibGUtbG9nby10by1hbnktbGluay9pbmRleC5qcyIsInByaW1vLWV4cGxvcmUvY3VzdG9tL1BDQy9ub2RlX21vZHVsZXMvcHJpbW8tZXhwbG9yZS1jbGlja2FibGUtbG9nby10by1hbnktbGluay9qcy9jbGlja2FibGUtbG9nby10by1hbnktbGluay5tb2R1bGUuanMiLCJwcmltby1leHBsb3JlL2N1c3RvbS9QQ0Mvbm9kZV9tb2R1bGVzL3ByaW1vLWV4cGxvcmUtY3VzdG9tLWFjdGlvbnMvaW5kZXguanMiLCJwcmltby1leHBsb3JlL2N1c3RvbS9QQ0Mvbm9kZV9tb2R1bGVzL3ByaW1vLWV4cGxvcmUtY3VzdG9tLWFjdGlvbnMvanMvY3VzdG9tLWFjdGlvbnMubW9kdWxlLmpzIiwicHJpbW8tZXhwbG9yZS9jdXN0b20vUENDL25vZGVfbW9kdWxlcy9wcmltby1leHBsb3JlLWN1c3RvbS1uby1zZWFyY2gtcmVzdWx0cy9pbmRleC5qcyIsInByaW1vLWV4cGxvcmUvY3VzdG9tL1BDQy9ub2RlX21vZHVsZXMvcHJpbW8tZXhwbG9yZS1jdXN0b20tbm8tc2VhcmNoLXJlc3VsdHMvanMvY3VzdG9tLW5vLXNlYXJjaC1yZXN1bHRzLm1vZHVsZS5qcyIsInByaW1vLWV4cGxvcmUvY3VzdG9tL1BDQy9ub2RlX21vZHVsZXMvcHJpbW8tZXhwbG9yZS1leHRlcm5hbC1zZWFyY2gvaW5kZXguanMiLCJwcmltby1leHBsb3JlL2N1c3RvbS9QQ0Mvbm9kZV9tb2R1bGVzL3ByaW1vLWV4cGxvcmUtZXh0ZXJuYWwtc2VhcmNoL2pzL2V4dGVybmFsLXNlYXJjaC5tb2R1bGUuanMiLCJwcmltby1leHBsb3JlL2N1c3RvbS9QQ0Mvbm9kZV9tb2R1bGVzL3ByaW1vLWV4cGxvcmUtbGlicmFyeWgzbHAtd2lkZ2V0L2luZGV4LmpzIiwicHJpbW8tZXhwbG9yZS9jdXN0b20vUENDL25vZGVfbW9kdWxlcy9wcmltby1leHBsb3JlLWxpYnJhcnloM2xwLXdpZGdldC9qcy9saWJyYXJ5aDNscC13aWRnZXQubW9kdWxlLmpzIiwicHJpbW8tZXhwbG9yZS9jdXN0b20vUENDL25vZGVfbW9kdWxlcy9wcmltby1leHBsb3JlLXNlYXJjaC1iYXItc3ViLW1lbnUvaW5kZXguanMiLCJwcmltby1leHBsb3JlL2N1c3RvbS9QQ0Mvbm9kZV9tb2R1bGVzL3ByaW1vLWV4cGxvcmUtc2VhcmNoLWJhci1zdWItbWVudS9qcy9zZWFyY2gtYmFyLXN1Yi1tZW51Lm1vZHVsZS5qcyIsInByaW1vLWV4cGxvcmUvY3VzdG9tL1BDQy9ub2RlX21vZHVsZXMvcHJpbW8tZXhwbG9yZS10b2dnbGUtaW5zdGl0dXRpb25zL2Rpc3QvbW9kdWxlLmpzIiwicHJpbW8tZXhwbG9yZS9jdXN0b20vUENDL25vZGVfbW9kdWxlcy9wcmltby1leHBsb3JlLXRvZ2dsZS1pbnN0aXR1dGlvbnMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7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RSxZQUFRLGlFQUhWO0FBSUUsVUFBTTtBQUNKLFdBQUssZUFERDtBQUVKLFlBQU07QUFGRjtBQUpSLEdBRE07QUFGK0IsQ0FBbEM7Ozs7Ozs7O0FDQVA7QUFDTyxJQUFJLDhCQUFXLEtBQWY7OztBQ0RQO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEJBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOURBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1ZBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakVBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3Q0E7QUFDQTtBQUNBOztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkJBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9cmV0dXJuIGV9KSgpIiwiYW5ndWxhclxuLy8gTmFtZSBvdXIgbW9kdWxlXG4gICAgLm1vZHVsZSgnbGlua3NJblByb2ZpbGUnLCBbXSlcbiAgICAvLyAuY29udHJvbGxlcignbGlua3NJblByb2ZpbGVDb250cm9sbGVyJywgWyckc2NvcGUnLCBmdW5jdGlvbiggJHNjb3BlICkge1xuICAgIC8vICAgICB0aGlzLiRvbkluaXQgPSAoKSA9PiB7XG4gICAgLy8gICAgICAgICAkc2NvcGUucGFyZW50Q3RybCA9IHRoaXMucGFyZW50Q3RybDtcbiAgICAvLyAgICAgfVxuICAgIC8vIH1dKVxuICAgIC5jb21wb25lbnQoJ3BybUZpbmVzQWZ0ZXInLCB7XG4gICAgICAgIGJpbmRpbmdzOiB7XG4gICAgICAgICAgICBwYXJlbnRDdHJsOiAnPCdcbiAgICAgICAgfSxcbiAgICAgICAgLy8gY29udHJvbGxlcjogJ2xpbmtzSW5Qcm9maWxlQ29udHJvbGxlcicsXG4gICAgICAgIHRlbXBsYXRlOiBgXG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGF5b3V0LXJvd1wiPjxhXG4gICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vc2VjdXJlLnRvdWNobmV0Lm5ldC9DMjEyNDlfdXN0b3Jlcy93ZWIvc3RvcmVfbWFpbi5qc3A/U1RPUkVJRD0yNCZTSU5HTEVTVE9SRT10cnVlXCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cIm1kLWJ1dHRvblwiXG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIlBheSBmaW5lcyBvbmxpbmVcIlxuICAgICAgICAgICAgICA+PHNwYW4+UGF5IGZpbmVzIG9ubGluZTwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9hPiA8YSBjbGFzcz1cIm1kLWJ1dHRvbiBtZC1zZWNvbmRhcnlcIiBocmVmPVwiaHR0cHM6Ly93d3cucGNjLmVkdS9saWJyYXJ5L3NlcnZpY2VzL2JvcnJvd2luZy9saWJyYXJ5LWZpbmVzL1wiPlNlZSBvdGhlciB3YXlzIHRvIGRlYWwgd2l0aCB5b3VyIGZpbmVzLjwvYT48L2Rpdj5cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIGBcbiAgICB9KTtcblxubW9kdWxlLmV4cG9ydHMgPSAnbGlua3NJblByb2ZpbGUnXG4iLCJleHBvcnQgbGV0IGNsaWNrYWJsZUxvZ29MaW5rQ29uZmlnID0ge1xuICBuYW1lOiAnY2xpY2thYmxlTG9nb0xpbmtDb25maWcnLFxuICBjb25maWc6IHtcbiAgICB1cmw6ICdodHRwczovL3d3dy5wY2MuZWR1L2xpYnJhcnknLFxuICAgIGFsdFRleHQ6ICdQQ0MgTGlicmFyeSdcbiAgfVxufTtcbiIsImV4cG9ydCBsZXQgY3VzdG9tQWN0aW9uc0NvbmZpZyA9IHtcbiAgICBuYW1lOiAnY3VzdG9tQWN0aW9ucycsXG4gICAgY29uZmlnOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6IFwiUmVwb3J0IElzc3VlXCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJSZXBvcnQgYW4gaXNzdWUgb3IgcHJvYmxlbVwiLFxuICAgICAgICAgICAgdHlwZTogJ3RlbXBsYXRlJyxcbiAgICAgICAgICAgIGljb246IHtcbiAgICAgICAgICAgICAgICBzZXQ6ICdjb21tdW5pY2F0aW9uJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnaWNfY29tbWVudF8yNHB4J1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGFjdGlvbjogXCJodHRwczovL3d3dy5wY2MuZWR1L2xpYnJhcnkvYWJvdXQvcGVvcGxlL2NvbnRhY3QvcmVwb3J0LWlzc3Vlcy9cIlxuICAgICAgICB9XG4gICAgXVxufTtcbiIsImFuZ3VsYXJcbi8vIE5hbWUgb3VyIG1vZHVsZVxuICAgIC5tb2R1bGUoJ2xpYnJhcnlBY2NvdW50UXVlc3Rpb25zJywgW10pXG4gICAgLy8gLmNvbnRyb2xsZXIoJ2xpYnJhcnlBY2NvdW50UXVlc3Rpb25zQ29udHJvbGxlcicsIFsnJHNjb3BlJywgZnVuY3Rpb24oICRzY29wZSApIHtcbiAgICAvLyAgICAgdGhpcy4kb25Jbml0ID0gKCkgPT4ge1xuICAgIC8vICAgICAgICAgJHNjb3BlLnBhcmVudEN0cmwgPSB0aGlzLnBhcmVudEN0cmw7XG4gICAgLy8gICAgIH1cbiAgICAvLyB9XSlcbiAgICAuY29tcG9uZW50KCdwcm1NZXNzYWdlc0FuZEJsb2Nrc092ZXJ2aWV3QWZ0ZXInLCB7XG4gICAgICAgIGJpbmRpbmdzOiB7XG4gICAgICAgICAgICBwYXJlbnRDdHJsOiAnPCdcbiAgICAgICAgfSxcbiAgICAgICAgLy8gY29udHJvbGxlcjogJ2xpYnJhcnlBY2NvdW50UXVlc3Rpb25zQ29udHJvbGxlcicsXG4gICAgICAgIHRlbXBsYXRlOlxuICAgICAgICAgICAgYFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRpbGVzLWdyaWQtdGlsZVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aWxlLWNvbnRlbnQgbGF5b3V0LWNvbHVtblwiIGxheW91dD1cImNvbHVtblwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGlsZS1oZWFkZXIgbGF5b3V0LWNvbHVtblwiIGxheW91dD1cImNvbHVtblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBsYXlvdXQ9XCJyb3dcIiBsYXlvdXQtYWxpZ249XCJzcGFjZS1iZXR3ZWVuXCIgY2xhc3M9XCJsYXlvdXQtYWxpZ24tc3BhY2UtYmV0d2Vlbi1zdHJldGNoIGxheW91dC1yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJoZWFkZXItbGluayBsaWdodC10ZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPk1vcmUgUXVlc3Rpb25zPzwvc3Bhbj4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGxheW91dD1cImNvbHVtblwiIGxheW91dC1hbGlnbj1cImNlbnRlciBjZW50ZXJcIiBsYXlvdXQtcGFkZGluZz1cIlwiIGxheW91dC1tYXJnaW49XCJcIiBjbGFzcz1cImxheW91dC1tYXJnaW4gbGF5b3V0LXBhZGRpbmcgbGF5b3V0LWFsaWduLWNlbnRlci1jZW50ZXIgbGF5b3V0LWNvbHVtblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cucGNjLmVkdS9saWJyYXJ5L3NlcnZpY2VzL2JvcnJvd2luZy9saWJyYXJ5LWFjY291bnQtcXVlc3Rpb25zL1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJtZC1idXR0b24gbWQtcmFpc2VkIG1kLWFjY2VudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkxpYnJhcnkgQWNjb3VudCBRdWVzdGlvbnNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkxpYnJhcnkgQWNjb3VudCBRdWVzdGlvbnM8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPCEtLS0tPlxuICAgICAgICAgICAgPCEtLS0tPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBgXG4gICAgfSk7XG5cbm1vZHVsZS5leHBvcnRzID0gJ2xpYnJhcnlBY2NvdW50UXVlc3Rpb25zJ1xuIiwiZXhwb3J0IGxldCBsaWJyYXJ5aDNscFdpZGdldENvbmZpZyA9IHtcbiAgbmFtZTogJ2xpYnJhcnloM2xwV2lkZ2V0Q29uZmlnJyxcbiAgY29uZmlnOiB7XG4gICAgdXJsOiAnaHR0cHM6Ly93d3cucGNjLmVkdS9saWJyYXJ5L3NjcmlwdHMvY2hhdC1hcGkvd2lkZ2V0LnBocCcsXG4gICAgcHJvbXB0OiAnQ2hhdCcsXG4gICAgaWNvbjoge1xuICAgICAgc2V0OiAnY29tbXVuaWNhdGlvbicsXG4gICAgICBpY29uOiAnaWNfZm9ydW1fMjRweCdcbiAgICB9XG4gIH1cbn07IiwiaW1wb3J0ICdwcmltby1leHBsb3JlLWNsaWNrYWJsZS1sb2dvLXRvLWFueS1saW5rJztcbmltcG9ydCAncHJpbW8tZXhwbG9yZS1saWJyYXJ5aDNscC13aWRnZXQnO1xuaW1wb3J0ICdwcmltby1leHBsb3JlLXNlYXJjaC1iYXItc3ViLW1lbnUnO1xuaW1wb3J0ICdwcmltby1leHBsb3JlLXRvZ2dsZS1pbnN0aXR1dGlvbnMnO1xuaW1wb3J0ICdwcmltby1leHBsb3JlLWN1c3RvbS1hY3Rpb25zJztcbmltcG9ydCAncHJpbW8tZXhwbG9yZS1jdXN0b20tbm8tc2VhcmNoLXJlc3VsdHMnO1xuaW1wb3J0ICdwcmltby1leHBsb3JlLWV4dGVybmFsLXNlYXJjaCc7XG5cblxuaW1wb3J0IHsgdmlld05hbWUgfSBmcm9tICcuL3ZpZXdOYW1lJztcbmltcG9ydCB7IGNsaWNrYWJsZUxvZ29MaW5rQ29uZmlnIH0gZnJvbSAnLi9jbGlja2FibGVMb2dvVG9BbnlMaW5rJztcbmltcG9ydCB7IGxpYnJhcnloM2xwV2lkZ2V0Q29uZmlnIH0gZnJvbSAnLi9saWJyYXJ5aDNscFdpZGdldCc7XG5pbXBvcnQgeyBzZWFyY2hCYXJTdWJNZW51SXRlbXNDb25maWcgfSBmcm9tICcuL3NlYXJjaEJhclN1Yk1lbnUnO1xuaW1wb3J0IHsgY3VzdG9tQWN0aW9uc0NvbmZpZyB9IGZyb20gJy4vY3VzdG9tQWN0aW9ucyc7XG5pbXBvcnQgeyBsaW5rc0luUHJvZmlsZSB9IGZyb20gXCIuL0xpbmtzSW5Qcm9maWxlXCI7XG5pbXBvcnQgeyBsaWJyYXJ5QWNjb3VudFF1ZXN0aW9ucyB9IGZyb20gJy4vbGlicmFyeUFjY291bnRRdWVzdGlvbnMnXG5cblxubGV0IGFwcCA9IGFuZ3VsYXIubW9kdWxlKCd2aWV3Q3VzdG9tJywgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjbGlja2FibGVMb2dvVG9BbnlMaW5rJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnbGlicmFyeWgzbHBXaWRnZXQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdzZWFyY2hCYXJTdWJNZW51JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndG9nZ2xlSW5zdGl0dXRpb25zJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY3VzdG9tQWN0aW9ucycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2N1c3RvbU5vU2VhcmNoUmVzdWx0cycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2xpbmtzSW5Qcm9maWxlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnbGlicmFyeUFjY291bnRRdWVzdGlvbnMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdleHRlcm5hbFNlYXJjaCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSk7XG5cbmFwcFxuICAuY29uc3RhbnQoY3VzdG9tQWN0aW9uc0NvbmZpZy5uYW1lLCBjdXN0b21BY3Rpb25zQ29uZmlnLmNvbmZpZylcbiAgLmNvbnN0YW50KGNsaWNrYWJsZUxvZ29MaW5rQ29uZmlnLm5hbWUsIGNsaWNrYWJsZUxvZ29MaW5rQ29uZmlnLmNvbmZpZylcbiAgLmNvbnN0YW50KGxpYnJhcnloM2xwV2lkZ2V0Q29uZmlnLm5hbWUsIGxpYnJhcnloM2xwV2lkZ2V0Q29uZmlnLmNvbmZpZylcbiAgLmNvbnN0YW50KHNlYXJjaEJhclN1Yk1lbnVJdGVtc0NvbmZpZy5uYW1lLCBzZWFyY2hCYXJTdWJNZW51SXRlbXNDb25maWcuY29uZmlnKVxuICAudmFsdWUoJ2N1c3RvbU5vU2VhcmNoUmVzdWx0c1RlbXBsYXRlVXJsJywgJ2N1c3RvbS8nK3ZpZXdOYW1lKycvaHRtbC9ub1NlYXJjaFJlc3VsdHMuaHRtbCcpXG4gIC5jb21wb25lbnQoJ3BybVNlYXJjaEJhckFmdGVyJywge1xuICAgIHRlbXBsYXRlOiAnPHNlYXJjaC1iYXItc3ViLW1lbnU+PC9zZWFyY2gtYmFyLXN1Yi1tZW51PidcbiAgfSlcbiAgLmNvbXBvbmVudCgncHJtQWxtYU1vcmVJbnN0QWZ0ZXInLCB7dGVtcGxhdGU6ICc8dG9nZ2xlLWluc3RpdHV0aW9ucyAvPid9KVxuICAgIC52YWx1ZSgnc2VhcmNoVGFyZ2V0cycsIFtcbiAgICAgICAge1xuICAgICAgICBcIm5hbWVcIjogXCJXb3JsZGNhdFwiLFxuICAgICAgICBcInVybFwiOiBcImh0dHBzOi8vcGNjLm9uLndvcmxkY2F0Lm9yZy9zZWFyY2g/XCIsXG4gICAgICAgIFwiaW1nXCI6IFwiaHR0cHM6Ly93d3cucGNjLmVkdS9saWJyYXJ5L3ByaW1vL2ltYWdlcy93b3JsZGNhdC1sb2dvLnBuZ1wiLFxuICAgICAgICAgICAgbWFwcGluZzogZnVuY3Rpb24gKHF1ZXJpZXMsIGZpbHRlcnMpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBxdWVyeV9tYXBwaW5ncyA9IHtcbiAgICAgICAgICAgICAgICAgICAgJ2FueSc6ICdrdycsXG4gICAgICAgICAgICAgICAgICAgICd0aXRsZSc6ICd0aScsXG4gICAgICAgICAgICAgICAgICAgICdjcmVhdG9yJzogJ2F1JyxcbiAgICAgICAgICAgICAgICAgICAgJ3N1YmplY3QnOiAnc3UnLFxuICAgICAgICAgICAgICAgICAgICAnaXNibic6ICdibicsXG4gICAgICAgICAgICAgICAgICAgICdpc3NuJzogJ24yJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ3F1ZXJ5U3RyaW5nPScgKyBxdWVyaWVzLm1hcChwYXJ0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0ZXJtcyA9IHBhcnQuc3BsaXQoJywnKVxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHR5cGUgPSBxdWVyeV9tYXBwaW5nc1t0ZXJtc1swXV0gfHwgJ2t3J1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHN0cmluZyA9IHRlcm1zWzJdIHx8ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgam9pbiA9IHRlcm1zWzNdIHx8ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHlwZSArICc6JyArIHN0cmluZyArICcgJyArIGpvaW4gKyAnICdcbiAgICAgICAgICAgICAgICAgICAgfSkuam9pbignJylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICcnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcIm5hbWVcIjogXCJHb29nbGUgU2Nob2xhclwiLFxuICAgICAgICAgICAgXCJ1cmxcIjogXCJodHRwczovL3NjaG9sYXIuZ29vZ2xlLmNvbS9zY2hvbGFyP3E9XCIsXG4gICAgICAgICAgICBcImltZ1wiOiBcImh0dHBzOi8vd3d3LnBjYy5lZHUvbGlicmFyeS9wcmltby9pbWFnZXMvZ29vZ2xlX2xvZ28ucG5nXCIsXG4gICAgICAgICAgICBtYXBwaW5nOiBmdW5jdGlvbiAocXVlcmllcywgZmlsdGVycykge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBxdWVyaWVzLm1hcChwYXJ0ID0+IHBhcnQuc3BsaXQoXCIsXCIpWzJdIHx8IFwiXCIpLmpvaW4oJyAnKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJydcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIkVCU0NPIFNlYXJjaFwiLFxuICAgICAgICAgICAgXCJ1cmxcIjogXCJodHRwczovL2xpYnByb3h5LnBjYy5lZHUvbG9naW4/dXJsPWh0dHA6Ly9zZWFyY2guZWJzY29ob3N0LmNvbS9sb2dpbi5hc3B4P2RpcmVjdD10cnVlJnNpdGU9ZWhvc3QtbGl2ZSZzY29wZT1zaXRlJnR5cGU9MSZkYj1hcGgmZGI9ZjVoJm1vZGU9Ym9vbCZsYW5nPWVuJmNsaTA9RlQmY2x2MD1ZJmJxdWVyeT1cIixcbiAgICAgICAgICAgIFwiaW1nXCI6IFwiaHR0cHM6Ly93d3cucGNjLmVkdS9saWJyYXJ5L3ByaW1vL2ltYWdlcy9lYnNjby1zZWFyY2gucG5nXCIsXG4gICAgICAgICAgICBtYXBwaW5nOiBmdW5jdGlvbiAocXVlcmllcywgZmlsdGVycykge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBxdWVyaWVzLm1hcChwYXJ0ID0+IHBhcnQuc3BsaXQoXCIsXCIpWzJdIHx8IFwiXCIpLmpvaW4oJyAnKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJydcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICBdKVxuXG5cblxuXG5cbiIsImV4cG9ydCBsZXQgc2VhcmNoQmFyU3ViTWVudUl0ZW1zQ29uZmlnID0ge1xuICBuYW1lOiAnc2VhcmNoQmFyU3ViTWVudUl0ZW1zJyxcbiAgY29uZmlnOiBbXG4gICAge1xuICAgICAgbmFtZTogXCJSZXBvcnQgSXNzdWVcIixcbiAgICAgIGRlc2NyaXB0aW9uOiBcIlJlcG9ydCBhbiBpc3N1ZSBvciBwcm9ibGVtXCIsXG4gICAgICBhY3Rpb246IFwiaHR0cHM6Ly93d3cucGNjLmVkdS9saWJyYXJ5L2Fib3V0L3Blb3BsZS9jb250YWN0L3JlcG9ydC1pc3N1ZXMvXCIsXG4gICAgICBpY29uOiB7XG4gICAgICAgIHNldDogJ2NvbW11bmljYXRpb24nLFxuICAgICAgICBpY29uOiAnaWNfY29tbWVudF8yNHB4J1xuICAgICAgfVxuICAgIH1cbiAgXVxufTtcbiIsIi8vIHZpZFxuZXhwb3J0IGxldCB2aWV3TmFtZSA9IFwiUENDXCI7XG4iLCJyZXF1aXJlKCcuL2pzL2NsaWNrYWJsZS1sb2dvLXRvLWFueS1saW5rLm1vZHVsZS5qcycpXG5tb2R1bGUuZXhwb3J0cyA9ICdjbGlja2FibGVMb2dvVG9BbnlMaW5rJ1xuIiwiYW5ndWxhclxuICAubW9kdWxlKCdjbGlja2FibGVMb2dvVG9BbnlMaW5rJywgW10pXG4gIC5jb250cm9sbGVyKCdjbGlja2FibGVMb2dvVG9BbnlMaW5rQ29udHJvbGxlcicsIFsnY2xpY2thYmxlTG9nb0xpbmtDb25maWcnLCAnJHNjb3BlJywgJyRmaWx0ZXInLCBmdW5jdGlvbihjbGlja2FibGVMb2dvTGlua0NvbmZpZywgJHNjb3BlLCAkZmlsdGVyKSB7XG4gICAgJHNjb3BlLmNsaWNrYWJsZUxvZ29MaW5rID0gY2xpY2thYmxlTG9nb0xpbmtDb25maWcudXJsO1xuICAgICRzY29wZS5jbGlja2FibGVMb2dvQWx0ID0gY2xpY2thYmxlTG9nb0xpbmtDb25maWcuYWx0VGV4dDtcbiAgICAkc2NvcGUuaWNvbkxpbmsgPSB0aGlzLnBhcmVudEN0cmwuaWNvbkxpbmtcbiAgICAkc2NvcGUudHJhbnNsYXRlID0gKG9yaWdpbmFsKSA9PiB7XG4gICAgICByZXR1cm4gb3JpZ2luYWwucmVwbGFjZSgvXFx7KC4rKVxcfS9nLCAobWF0Y2gsIHAxKSA9PiAkZmlsdGVyKCd0cmFuc2xhdGUnKShwMSkpO1xuICAgIH1cbiAgfV0pXG4gIC5jb21wb25lbnQoJ3BybUxvZ29BZnRlcicsIHtcbiAgICBiaW5kaW5nczoge1xuICAgICAgcGFyZW50Q3RybDogJzwnXG4gICAgfSxcbiAgICBjb250cm9sbGVyOiAnY2xpY2thYmxlTG9nb1RvQW55TGlua0NvbnRyb2xsZXInLFxuICAgIHRlbXBsYXRlOiAnPGRpdiBjbGFzcz1cInByb2R1Y3QtbG9nbyBwcm9kdWN0LWxvZ28tbG9jYWxcIiBsYXlvdXQ9XCJyb3dcIiBsYXlvdXQtYWxpZ249XCJzdGFydCBjZW50ZXJcIiBsYXlvdXQtZmlsbCBpZD1cImJhbm5lclwiIHRhYmluZGV4PVwiMFwiIHJvbGU9XCJiYW5uZXJcIj4nK1xuICAgICAgICAgICAgICAgICc8YSBuZy1ocmVmPVwie3sgdHJhbnNsYXRlKGNsaWNrYWJsZUxvZ29MaW5rKSB9fVwiPjxpbWcgY2xhc3M9XCJsb2dvLWltYWdlXCIgbmctYWx0PVwie3sgdHJhbnNsYXRlKGNsaWNrYWJsZUxvZ29BbHQpIH19XCIgbmctc3JjPVwie3sgaWNvbkxpbmsgfX1cIi8+PC9hPicrXG4gICAgICAgICAgICAgICc8L2Rpdj4nXG5cbiAgfSk7XG4iLCJyZXF1aXJlKCcuL2pzL2N1c3RvbS1hY3Rpb25zLm1vZHVsZS5qcycpXG5tb2R1bGUuZXhwb3J0cyA9ICdjdXN0b21BY3Rpb25zJ1xuIiwiYW5ndWxhclxuICAubW9kdWxlKCdjdXN0b21BY3Rpb25zJywgW10pXG4gIC5jb21wb25lbnQoJ3BybUFjdGlvbkNvbnRhaW5lckFmdGVyJywge1xuICAgIHJlcXVpcmU6IHsgcHJtQWN0aW9uQ3RybDogJ15wcm1BY3Rpb25MaXN0JyB9LFxuICAgIGNvbnRyb2xsZXI6IFsnY3VzdG9tQWN0aW9uc1NlcnZpY2UnLCAnY3VzdG9tQWN0aW9ucycsIGZ1bmN0aW9uIChjdXN0b21BY3Rpb25zU2VydmljZSwgY3VzdG9tQWN0aW9ucykge1xuICAgICAgdGhpcy4kb25Jbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBjdXN0b21BY3Rpb25zU2VydmljZS5zZXRDb250cm9sbGVyKHRoaXMucHJtQWN0aW9uQ3RybClcbiAgICAgICAgY3VzdG9tQWN0aW9ucy5tYXAoYWN0aW9uID0+IGN1c3RvbUFjdGlvbnNTZXJ2aWNlLmFkZEFjdGlvbihhY3Rpb24pKVxuICAgICAgfVxuICAgIH1dXG4gIH0pXG4gIC5mYWN0b3J5KCdjdXN0b21BY3Rpb25zU2VydmljZScsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc2V0Q29udHJvbGxlcjogZnVuY3Rpb24gKGNvbnRyb2xsZXIpIHtcbiAgICAgICAgdGhpcy5wcm1BY3Rpb25DdHJsID0gY29udHJvbGxlclxuICAgICAgfSxcbiAgICAgIHByb2Nlc3NBY3Rpb246IGZ1bmN0aW9uIChhY3Rpb24pIHtcbiAgICAgICAgYWN0aW9uLmljb25uYW1lID0gYWN0aW9uLm5hbWUucmVwbGFjZSgvXFxzKy9nLCAnJyksXG4gICAgICAgIGFjdGlvbi5zbHVnID0gYWN0aW9uLm5hbWUucmVwbGFjZSgvXFxzKy9nLCAnJykudG9Mb3dlckNhc2UoKSxcbiAgICAgICAgYWN0aW9uLmluZGV4ID0gT2JqZWN0LmtleXModGhpcy5wcm1BY3Rpb25DdHJsLmFjdGlvbkxpc3RTZXJ2aWNlLmFjdGlvbnNUb0luZGV4KS5sZW5ndGggLSAxXG4gICAgICAgIHRoaXMucHJtQWN0aW9uQ3RybC5hY3Rpb25MYWJlbE5hbWVzTWFwW2FjdGlvbi5zbHVnXSA9IGFjdGlvbi5uYW1lXG4gICAgICAgIHRoaXMucHJtQWN0aW9uQ3RybC5hY3Rpb25JY29uTmFtZXNNYXBbYWN0aW9uLnNsdWddID0gYWN0aW9uLmljb25uYW1lXG4gICAgICAgIHRoaXMucHJtQWN0aW9uQ3RybC5hY3Rpb25JY29uc1thY3Rpb24uaWNvbm5hbWVdID0ge1xuICAgICAgICAgIGljb246IGFjdGlvbi5pY29uLm5hbWUsXG4gICAgICAgICAgaWNvblNldDogYWN0aW9uLmljb24uc2V0LFxuICAgICAgICAgIHR5cGU6IFwic3ZnXCJcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYWN0aW9uXG4gICAgICB9LFxuICAgICAgYWRkQWN0aW9uOiBmdW5jdGlvbiAoYWN0aW9uKSB7XG4gICAgICAgIGFjdGlvbiA9IHRoaXMucHJvY2Vzc0FjdGlvbihhY3Rpb24pXG4gICAgICAgIGlmICghdGhpcy5wcm1BY3Rpb25DdHJsLmFjdGlvbkxpc3RTZXJ2aWNlLmFjdGlvbnNUb0luZGV4W2FjdGlvbi5zbHVnXSkge1xuICAgICAgICAgIHRoaXMucHJtQWN0aW9uQ3RybC5hY3Rpb25MaXN0U2VydmljZS5yZXF1aXJlZEFjdGlvbnNMaXN0W2FjdGlvbi5pbmRleF0gPSBhY3Rpb24uc2x1Z1xuICAgICAgICAgIHRoaXMucHJtQWN0aW9uQ3RybC5hY3Rpb25MaXN0U2VydmljZS5hY3Rpb25zVG9EaXNwbGF5LnVuc2hpZnQoYWN0aW9uLnNsdWcpXG4gICAgICAgICAgdGhpcy5wcm1BY3Rpb25DdHJsLmFjdGlvbkxpc3RTZXJ2aWNlLmFjdGlvbnNUb0luZGV4W2FjdGlvbi5zbHVnXSA9IGFjdGlvbi5pbmRleFxuICAgICAgICB9XG4gICAgICAgIGlmIChhY3Rpb24udHlwZSA9PT0gJ3RlbXBsYXRlJykge1xuICAgICAgICAgICAgLy8gcHJvY2VzcyB7IH0gaW4gdGVtcGxhdGVWYXJzXG4gICAgICAgICAgICBpZiAoYWN0aW9uLmhhc093blByb3BlcnR5KCd0ZW1wbGF0ZVZhcicpKSB7XG4gICAgICAgICAgICAgICAgYWN0aW9uLmFjdGlvbiA9IGFjdGlvbi5hY3Rpb24ucmVwbGFjZSgve1xcZH0vZywgKHIpID0+IGFjdGlvbi50ZW1wbGF0ZVZhcltyLnJlcGxhY2UoL1teXFxkXS9nLCAnJyldKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gcmVwbGFjZSBhIHJlY29yZElkIG9jY3VyZW5jZVxuICAgICAgICAgICAgYWN0aW9uLmFjdGlvbiA9IGFjdGlvbi5hY3Rpb24ucmVwbGFjZSgve3JlY29yZElkfS9nLCAocikgPT4gdGhpcy5wcm1BY3Rpb25DdHJsLml0ZW0ucG54LnNlYXJjaC5yZWNvcmRpZFswXSlcbiAgICAgICAgICAgIC8vIHJlcGxhY2UgYSBwbngueHh4Lnh4eFswXSBwYXR0ZXJuIGV4LiBwbnguc2VhcmNoLnJlY29yZGlkWzBdXG4gICAgICAgICAgICBsZXQgcG54UHJvcGVydGllcyA9IGFjdGlvbi5hY3Rpb24ubWF0Y2goL1xceyhwbnhcXC4uKj8pXFx9L2cpIHx8IFtdXG4gICAgICAgICAgICBwbnhQcm9wZXJ0aWVzLmZvckVhY2goKHApID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgdmFsdWVGb3JQID0gcC5yZXBsYWNlKC9be31dL2csICcnKS5zcGxpdCgnLicpLnJlZHVjZSgobywgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGggPSAvKC4qKShcXFtcXGRcXF0pLy5leGVjKGkpXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaCBpbnN0YW5jZW9mIEFycmF5KSB7IHJldHVybiBvW2hbMV1dW2hbMl0ucmVwbGFjZSgvW15cXGRdL2csICcnKV0gfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9baV1cbiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICcnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCB0aGlzLnBybUFjdGlvbkN0cmwuaXRlbSlcbiAgICAgICAgICAgICAgICBhY3Rpb24uYWN0aW9uID0gYWN0aW9uLmFjdGlvbi5yZXBsYWNlKHAsIHZhbHVlRm9yUClcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wcm1BY3Rpb25DdHJsLmFjdGlvbkxpc3RTZXJ2aWNlLm9uVG9nZ2xlW2FjdGlvbi5zbHVnXSA9ICgpID0+IHdpbmRvdy5vcGVuKGFjdGlvbi5hY3Rpb24sICdfYmxhbmsnKVxuICAgICAgfVxuICAgIH1cbiAgfSlcbiIsInJlcXVpcmUoJy4vanMvY3VzdG9tLW5vLXNlYXJjaC1yZXN1bHRzLm1vZHVsZS5qcycpXG5tb2R1bGUuZXhwb3J0cyA9ICdjdXN0b21Ob1NlYXJjaFJlc3VsdHMnXG4iLCJhbmd1bGFyXG4gIC5tb2R1bGUoJ2N1c3RvbU5vU2VhcmNoUmVzdWx0cycsIFtdKVxuICAuY29tcG9uZW50KCdwcm1Ob1NlYXJjaFJlc3VsdEFmdGVyJywge1xuICAgIGJpbmRpbmdzOiB7XG4gICAgICBwYXJlbnRDdHJsOiAnPCdcbiAgICB9LFxuICAgIHRlbXBsYXRlVXJsOiBbJ2N1c3RvbU5vU2VhcmNoUmVzdWx0c1RlbXBsYXRlVXJsJywgZnVuY3Rpb24gKGN1c3RvbU5vU2VhcmNoUmVzdWx0c1RlbXBsYXRlVXJsKSB7XG4gICAgICByZXR1cm4gY3VzdG9tTm9TZWFyY2hSZXN1bHRzVGVtcGxhdGVVcmw7XG4gICAgfV1cbiAgfSk7XG4iLCJyZXF1aXJlKCcuL2pzL2V4dGVybmFsLXNlYXJjaC5tb2R1bGUuanMnKVxubW9kdWxlLmV4cG9ydHMgPSAnZXh0ZXJuYWxTZWFyY2gnXG4iLCJhbmd1bGFyXG4gIC5tb2R1bGUoJ2V4dGVybmFsU2VhcmNoJywgW10pXG4gIC52YWx1ZSgnc2VhcmNoVGFyZ2V0cycsIFtdKVxuICAuY29tcG9uZW50KCdwcm1GYWNldEFmdGVyJywge1xuICAgICAgYmluZGluZ3M6IHsgcGFyZW50Q3RybDogJzwnIH0sXG4gICAgICBjb250cm9sbGVyOiBbJ2V4dGVybmFsU2VhcmNoU2VydmljZScsIGZ1bmN0aW9uIChleHRlcm5hbFNlYXJjaFNlcnZpY2UpIHtcbiAgICAgICAgZXh0ZXJuYWxTZWFyY2hTZXJ2aWNlLmNvbnRyb2xsZXIgPSB0aGlzLnBhcmVudEN0cmxcbiAgICAgICAgZXh0ZXJuYWxTZWFyY2hTZXJ2aWNlLmFkZEV4dFNlYXJjaCgpXG4gICAgICB9XVxuICB9KVxuICAuY29tcG9uZW50KCdwcm1QYWdlTmF2TWVudUFmdGVyJywge1xuICAgIGNvbnRyb2xsZXI6IFsnZXh0ZXJuYWxTZWFyY2hTZXJ2aWNlJywgZnVuY3Rpb24gKGV4dGVybmFsU2VhcmNoU2VydmljZSkge1xuICAgICAgaWYgKGV4dGVybmFsU2VhcmNoU2VydmljZS5jb250cm9sbGVyKSBleHRlcm5hbFNlYXJjaFNlcnZpY2UuYWRkRXh0U2VhcmNoKClcbiAgICB9XVxuICB9KVxuICAuY29tcG9uZW50KCdwcm1GYWNldEV4YWN0QWZ0ZXInLCB7XG4gICAgICBiaW5kaW5nczogeyBwYXJlbnRDdHJsOiAnPCcgfSxcbiAgICAgIHRlbXBsYXRlOiBgXG4gICAgICA8ZGl2IG5nLWlmPVwibmFtZSA9PT0gJ0V4dGVybmFsIFNlYXJjaCdcIj5cbiAgICAgICAgICA8ZGl2IG5nLWhpZGU9XCIkY3RybC5wYXJlbnRDdHJsLmZhY2V0R3JvdXAuZmFjZXRHcm91cENvbGxhcHNlZFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VjdGlvbi1jb250ZW50IGFuaW1hdGUtbWF4LWhlaWdodC12YXJpYWJsZVwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1kLWNoaXBzIG1kLWNoaXBzLXdyYXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IG5nLXJlcGVhdD1cInRhcmdldCBpbiB0YXJnZXRzXCIgYXJpYS1saXZlPVwicG9saXRlXCIgY2xhc3M9XCJtZC1jaGlwIGFuaW1hdGUtb3BhY2l0eS1hbmQtc2NhbGUgZmFjZXQtZWxlbWVudC1tYXJrZXItbG9jYWw0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZC1jaGlwLWNvbnRlbnQgbGF5b3V0LXJvd1wiIHJvbGU9XCJidXR0b25cIiB0YWJpbmRleD1cIjBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmcgZGlyPVwiYXV0b1wiIHRpdGxlPVwie3sgdGFyZ2V0Lm5hbWUgfX1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBuZy1ocmVmPVwie3sgdGFyZ2V0LnVybCArIHRhcmdldC5tYXBwaW5nKHF1ZXJpZXMsIGZpbHRlcnMpIH19XCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgbmctc3JjPVwie3sgdGFyZ2V0LmltZyB9fVwiIHdpZHRoPVwiMjJcIiBoZWlnaHQ9XCIyMlwiIHN0eWxlPVwidmVydGljYWwtYWxpZ246bWlkZGxlO1wiPiB7eyB0YXJnZXQubmFtZSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Ryb25nPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PmAsXG4gICAgICBjb250cm9sbGVyOiBbJyRzY29wZScsICckbG9jYXRpb24nLCAnc2VhcmNoVGFyZ2V0cycsIGZ1bmN0aW9uICgkc2NvcGUsICRsb2NhdGlvbiwgc2VhcmNoVGFyZ2V0cykge1xuICAgICAgICAkc2NvcGUubmFtZSA9IHRoaXMucGFyZW50Q3RybC5mYWNldEdyb3VwLm5hbWVcbiAgICAgICAgJHNjb3BlLnRhcmdldHMgPSBzZWFyY2hUYXJnZXRzXG4gICAgICAgIGxldCBxdWVyeSA9ICRsb2NhdGlvbi5zZWFyY2goKS5xdWVyeVxuICAgICAgICBsZXQgZmlsdGVyID0gJGxvY2F0aW9uLnNlYXJjaCgpLnBmaWx0ZXJcbiAgICAgICAgJHNjb3BlLnF1ZXJpZXMgPSBBcnJheS5pc0FycmF5KHF1ZXJ5KSA/IHF1ZXJ5IDogcXVlcnkgPyBbcXVlcnldIDogZmFsc2VcbiAgICAgICAgJHNjb3BlLmZpbHRlcnMgPSBBcnJheS5pc0FycmF5KGZpbHRlcikgPyBmaWx0ZXIgOiBmaWx0ZXIgPyBbZmlsdGVyXSA6IGZhbHNlXG4gICAgICB9XVxuICB9KVxuICAuZmFjdG9yeSgnZXh0ZXJuYWxTZWFyY2hTZXJ2aWNlJywgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB7XG4gICAgICBnZXQgY29udHJvbGxlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJtRmFjZXRDdHJsIHx8IGZhbHNlXG4gICAgICB9LFxuICAgICAgc2V0IGNvbnRyb2xsZXIoY29udHJvbGxlcikge1xuICAgICAgICB0aGlzLnBybUZhY2V0Q3RybCA9IGNvbnRyb2xsZXJcbiAgICAgIH0sXG4gICAgICBhZGRFeHRTZWFyY2g6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMucHJtRmFjZXRDdHJsLmZhY2V0U2VydmljZS5yZXN1bHRzW3RoaXMucHJtRmFjZXRDdHJsLmZhY2V0U2VydmljZS5yZXN1bHRzLmxlbmd0aCAtIDFdLm5hbWUgIT09ICdFeHRlcm5hbCBTZWFyY2gnKSB7XG4gICAgICAgICAgdGhpcy5wcm1GYWNldEN0cmwuZmFjZXRTZXJ2aWNlLnJlc3VsdHMucHVzaCh7XG4gICAgICAgICAgICBuYW1lOiAnRXh0ZXJuYWwgU2VhcmNoJyxcbiAgICAgICAgICAgIGRpc3BsYXllZFR5cGU6ICdleGFjdCcsXG4gICAgICAgICAgICBsaW1pdENvdW50OiAwLFxuICAgICAgICAgICAgZmFjZXRHcm91cENvbGxhcHNlZDogZmFsc2UsXG4gICAgICAgICAgICB2YWx1ZXM6IHVuZGVmaW5lZFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0pXG4iLCJyZXF1aXJlKCcuL2pzL2xpYnJhcnloM2xwLXdpZGdldC5tb2R1bGUuanMnKVxubW9kdWxlLmV4cG9ydHMgPSAnbGlicmFyeWgzbHBXaWRnZXQnXG4iLCJhbmd1bGFyXG4gIC8vIE5hbWUgb3VyIG1vZHVsZVxuICAubW9kdWxlKCdsaWJyYXJ5aDNscFdpZGdldCcsIFtdKVxuICAvLyBBZGQgdGhlIGxpYnJhcnloM2xwIHVybCB0byB0cnVzdGVkIHVybCBzb3VyY2VzXG4gIC8vIHNvIGFuZ3VsYXIgZG9lc24ndCBibG9jayBpdCBmcm9tIGFuIGlmcmFtZVxuICAuZmlsdGVyKCd0cnVzdFVybCcsIFsnJHNjZScsIGZ1bmN0aW9uICgkc2NlKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKHVybCkge1xuICAgICAgaWYgKC9eaHR0cChzKT86XFwvXFwvKC4rXFwuKT9wY2NcXC5lZHUuKyQvLnRlc3QodXJsKSkge1xuICAgICAgICByZXR1cm4gJHNjZS50cnVzdEFzUmVzb3VyY2VVcmwodXJsKTtcbiAgICAgIH1cbiAgICB9O1xuICB9XSlcbiAgLy8gQ29udHJvbGxlciBmb3IgdGhlIGNvbXBvbmVudCBiZWxvd1xuICAuY29udHJvbGxlcignbGlicmFyeWgzbHBXaWRnZXRDb250cm9sbGVyJywgWydsaWJyYXJ5aDNscFdpZGdldENvbmZpZycsICckc2NvcGUnLCBmdW5jdGlvbihsaWJyYXJ5aDNscFdpZGdldENvbmZpZywgJHNjb3BlKSB7XG4gICAgY29uc3QgY3RybCA9IHRoaXM7XG4gICAgdGhpcy4kb25Jbml0ID0gKCkgPT4ge1xuICAgICAgJHNjb3BlLmNvbmZpZyA9IGxpYnJhcnloM2xwV2lkZ2V0Q29uZmlnO1xuICAgICAgLy8gRG8gZmFjZXRzIGV4aXN0P1xuICAgICAgJHNjb3BlLmZhY2V0c0V4aXN0ID0gKCgpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICByZXR1cm4gKGN0cmwucGFyZW50Q3RybC5zZWFyY2hTZXJ2aWNlLmZhY2V0U2VydmljZS5yZXN1bHRzLmxlbmd0aCA+IDApO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9KSgpO1xuICAgICAgLy8gQWRkIHRoZSBib3R0b20gcGFkZGluZyBjbGFzcyBpZiB0aGVyZSBhcmUgZmFjZXRzXG4gICAgICAkc2NvcGUuYm90dG9tUGFkZGluZyA9IHsgW1wiY2hhdC1ib3R0b20tcGFkZGluZ1wiXTogJHNjb3BlLmZhY2V0c0V4aXN0IH07XG4gICAgfTtcbiAgfV0pXG4gIC5jb21wb25lbnQoJ3BybUV4cGxvcmVNYWluQWZ0ZXInLCB7XG4gICAgYmluZGluZ3M6IHtcbiAgICAgIHBhcmVudEN0cmw6ICc8J1xuICAgIH0sXG4gICAgY29udHJvbGxlcjogJ2xpYnJhcnloM2xwV2lkZ2V0Q29udHJvbGxlcicsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ1dHRvbiBjaGF0LXRhYiBzcy1jaGF0IGpzLXRvZ2dsZS1jaGF0XCIgbmctY2xhc3M9XCJib3R0b21QYWRkaW5nXCIgbmctaW5pdD1cInNob3dDaGF0V2lkZ2V0ID0gZmFsc2VcIiBuZy1jbGljaz1cInNob3dDaGF0V2lkZ2V0ID0gIXNob3dDaGF0V2lkZ2V0XCI+XG4gICAgICAgICAgICAgICAgPHBybS1pY29uIHN0eWxlPVwiei1pbmRleDoxXCIgaWNvbi10eXBlPVwic3ZnXCIgc3ZnLWljb24tc2V0PVwie3tjb25maWcuaWNvbi5zZXR9fVwiIGljb24tZGVmaW5pdGlvbj1cInt7Y29uZmlnLmljb24uaWNvbn19XCI+PC9wcm0taWNvbj5cbiAgICAgICAgICAgICAgICB7e2NvbmZpZy5wcm9tcHR9fVxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNoYXQtZnJhbWUtd3JhcFwiIG5nLWNsYXNzPVwiYm90dG9tUGFkZGluZ1wiIG5nLXNob3c9XCJzaG93Q2hhdFdpZGdldFwiPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJjaGF0LWNsb3NlIHNzLWljb24ganMtdG9nZ2xlLWNoYXRcIiB0aXRsZT1cIkNsb3NlIGNoYXQgd2luZG93XCIgbmctY2xpY2s9XCJzaG93Q2hhdFdpZGdldCA9ICFzaG93Q2hhdFdpZGdldFwiPiZ0aW1lczs8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8aWZyYW1lIGNsYXNzPVwiY2hhdC1mcmFtZVwiIG5nLXNyYz1cInt7Y29uZmlnLnVybCB8IHRydXN0VXJsfX1cIiBmcmFtZWJvcmRlcj1cIjBcIj48L2lmcmFtZT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIGBcbiAgfSk7XG4iLCJyZXF1aXJlKCcuL2pzL3NlYXJjaC1iYXItc3ViLW1lbnUubW9kdWxlLmpzJylcbm1vZHVsZS5leHBvcnRzID0gJ3NlYXJjaEJhclN1Yk1lbnUnXG4iLCJhbmd1bGFyXG4gIC5tb2R1bGUoJ3NlYXJjaEJhclN1Yk1lbnUnLCBbXSlcbiAgLmNvbnRyb2xsZXIoJ3NlYXJjaEJhclN1Yk1lbnVDb250cm9sbGVyJywgWydzZWFyY2hCYXJTdWJNZW51SXRlbXMnLCAnJHNjb3BlJywgJyRmaWx0ZXInLCBmdW5jdGlvbihpdGVtcywgJHNjb3BlLCAkZmlsdGVyKSB7XG4gICAgdGhpcy4kb25Jbml0ID0gKCkgPT4ge1xuICAgICAgJHNjb3BlLml0ZW1zID0gaXRlbXM7XG4gICAgfVxuICAgICRzY29wZS50cmFuc2xhdGUgPSAob3JpZ2luYWwpID0+IHtcbiAgICAgIHJldHVybiBvcmlnaW5hbC5yZXBsYWNlKC9cXHsoLispXFx9L2csIChtYXRjaCwgcDEpID0+ICRmaWx0ZXIoJ3RyYW5zbGF0ZScpKHAxKSk7XG4gICAgfVxuICAgICRzY29wZS5nb1RvVXJsID0gKHVybCkgPT4ge1xuICAgICAgd2luZG93Lm9wZW4odXJsLCAnX2JsYW5rJyk7XG4gICAgfVxuICB9XSlcbiAgLmNvbXBvbmVudCgnc2VhcmNoQmFyU3ViTWVudScsIHtcbiAgICBjb250cm9sbGVyOiAnc2VhcmNoQmFyU3ViTWVudUNvbnRyb2xsZXInLFxuICAgIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cImxheW91dC1hbGlnbi1lbmQtY2VudGVyIGxheW91dC1yb3cgZmxleCBzZWFyY2gtYmFyLXN1Yi1tZW51XCI+XG4gICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgPGxpIG5nLXJlcGVhdD1cIml0ZW0gaW4gaXRlbXNcIj5cbiAgICAgICAgICAgICAgICAgIDxidXR0b24gZGF0YS1ocmVmPVwie3sgdHJhbnNsYXRlKGl0ZW0uYWN0aW9uKSB9fVwiIGFyaWEtbGFiZWw9XCJ7eyB0cmFuc2xhdGUoaXRlbS5kZXNjcmlwdGlvbikgfX1cIiBuZy1jbGljaz1cImdvVG9VcmwodHJhbnNsYXRlKGl0ZW0uYWN0aW9uKSlcIiBjbGFzcz1cImJ1dHRvbi13aXRoLWljb24gemVyby1tYXJnaW4gbWQtYnV0dG9uIG1kLXNtYWxsIHt7aXRlbS5jc3NDbGFzc2VzfX1cIiB0eXBlPVwiYnV0dG9uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxtZC10b29sdGlwIG1kLWRpcmVjdGlvbj1cImJvdHRvbVwiIG1kLWRlbGF5PVwiNTAwXCI+e3sgdHJhbnNsYXRlKGl0ZW0uZGVzY3JpcHRpb24pIH19PC9tZC10b29sdGlwPjxwcm0taWNvbiBzdHlsZT1cInotaW5kZXg6MVwiIGljb24tdHlwZT1cInN2Z1wiIHN2Zy1pY29uLXNldD1cInt7aXRlbS5pY29uLnNldH19XCIgaWNvbi1kZWZpbml0aW9uPVwie3tpdGVtLmljb24uaWNvbn19XCI+PC9wcm0taWNvbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzZWFyY2gtYmFyLXN1Yi1tZW51LWl0ZW1cIiBuZy1jbGFzcz1cIihpdGVtLnNob3dfeHMpID8gJycgOiAnaGlkZS14cydcIj57eyB0cmFuc2xhdGUoaXRlbS5uYW1lKSB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICA8L2Rpdj5gXG5cbiAgfSk7XG4iLCIndXNlIHN0cmljdCc7XG5cbmFuZ3VsYXIubW9kdWxlKCd0b2dnbGVJbnN0aXR1dGlvbnMnLCBbXSk7XG5cbmFuZ3VsYXIubW9kdWxlKCd0b2dnbGVJbnN0aXR1dGlvbnMnKS5jb21wb25lbnQoJ3RvZ2dsZUluc3RpdHV0aW9ucycsIHtcbiAgYmluZGluZ3M6IHtcbiAgICBzdGFydEhpZGRlbjogJzwnXG4gIH0sXG4gIHRlbXBsYXRlOiAnXFxuICAgIDxtZC1idXR0b24gY2xhc3M9XCJtZC1yYWlzZWRcIiBuZy1jbGljaz1cIiRjdHJsLnRvZ2dsZUxpYnMoKVwiIGlkPVwic3VtbWl0QnV0dG9uXCIgYXJpYS1jb250cm9scz1cInN1bW1pdExpbmtzXCIgYXJpYS1leHBhbmRlZD1mYWxzZSBhcmlhLWxhYmVsPVwiU2hvdy9IaWRlIFN1bW1pdCBMaWJyYXJpZXNcIj5cXG4gICAgICAgIHt7JGN0cmwuc2hvd0xpYnMgPyBcXCdIaWRlIFN1bW1pdCBMaWJyYXJpZXNcXCcgOiBcXCdTaG93IFN1bW1pdCBMaWJyYXJpZXNcXCd9fVxcbiAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPXRydWU+e3skY3RybC5zaG93TGlicyA/IFxcJyZsYXF1bztcXCcgOiBcXCcmcmFxdW87XFwnfX08L3NwYW4+XFxuICAgIDwvbWQtYnV0dG9uPicsXG4gIGNvbnRyb2xsZXI6IGZ1bmN0aW9uIGNvbnRyb2xsZXIoKSB7XG4gICAgdGhpcy4kb25Jbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy5zaG93TGlicyA9IHRoaXMuc3RhcnRIaWRkZW4gPT09IGZhbHNlID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgdGhpcy5idXR0b24gPSBhbmd1bGFyLmVsZW1lbnQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcigncHJtLWFsbWEtbW9yZS1pbnN0LWFmdGVyIGJ1dHRvbicpKTtcbiAgICAgIHRoaXMudGFicyA9IGFuZ3VsYXIuZWxlbWVudChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdwcm0tYWxtYS1tb3JlLWluc3QgbWQtdGFicycpKTtcbiAgICAgIHRoaXMudGFicy5hdHRyKCdpZCcsICdzdW1taXRMaW5rcycpO1xuICAgICAgdGhpcy5idXR0b24ucGFyZW50KCkuYWZ0ZXIodGhpcy50YWJzKTtcbiAgICAgIGlmICghdGhpcy5zaG93TGlicykgdGhpcy50YWJzLmFkZENsYXNzKCdoaWRlJyk7XG4gICAgfTtcbiAgICB0aGlzLnRvZ2dsZUxpYnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB0aGlzLnNob3dMaWJzID0gIXRoaXMuc2hvd0xpYnM7XG4gICAgICB0aGlzLnRhYnMuaGFzQ2xhc3MoJ2hpZGUnKSA/IHRoaXMudGFicy5yZW1vdmVDbGFzcygnaGlkZScpICYmIHRoaXMuYnV0dG9uLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLCB0cnVlKSA6IHRoaXMudGFicy5hZGRDbGFzcygnaGlkZScpICYmIHRoaXMuYnV0dG9uLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLCBmYWxzZSk7XG4gICAgfTtcbiAgfVxufSk7IiwicmVxdWlyZSgnLi9kaXN0L21vZHVsZS5qcycpXG5tb2R1bGUuZXhwb3J0cyA9ICd0b2dnbGVJbnN0aXR1dGlvbnMnXG4iXX0=
