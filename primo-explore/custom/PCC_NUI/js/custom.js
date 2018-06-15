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
    template: '\n              \n              <div class="layout-row"><a\n                href="https://secure.touchnet.net/C21249_ustores/web/store_main.jsp?STOREID=24&SINGLESTORE=true"\n                class="md-button md-raised md-accent"\n                aria-label="Pay fines online"\n              ><span>Pay fines online</span>\n              </a></div>\n              \n              <div class="layout-row"><a href="https://www.pcc.edu/library/services/borrowing/library-fines/">See other ways to deal with your fines.</a></div>\n              \n              '
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
    url: 'https://wwwtest.pcc.edu/library/scripts/chat-api/widget.php',
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
var viewName = exports.viewName = "PCC_NUI";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJwcmltby1leHBsb3JlL2N1c3RvbS9QQ0NfTlVJL2pzL0xpbmtzSW5Qcm9maWxlLmpzIiwicHJpbW8tZXhwbG9yZS9jdXN0b20vUENDX05VSS9qcy9jbGlja2FibGVMb2dvVG9BbnlMaW5rLmpzIiwicHJpbW8tZXhwbG9yZS9jdXN0b20vUENDX05VSS9qcy9jdXN0b21BY3Rpb25zLmpzIiwicHJpbW8tZXhwbG9yZS9jdXN0b20vUENDX05VSS9qcy9saWJyYXJ5QWNjb3VudFF1ZXN0aW9ucy5qcyIsInByaW1vLWV4cGxvcmUvY3VzdG9tL1BDQ19OVUkvanMvbGlicmFyeWgzbHBXaWRnZXQuanMiLCJwcmltby1leHBsb3JlL2N1c3RvbS9QQ0NfTlVJL2pzL21haW4uanMiLCJwcmltby1leHBsb3JlL2N1c3RvbS9QQ0NfTlVJL2pzL3NlYXJjaEJhclN1Yk1lbnUuanMiLCJwcmltby1leHBsb3JlL2N1c3RvbS9QQ0NfTlVJL2pzL3ZpZXdOYW1lLmpzIiwicHJpbW8tZXhwbG9yZS9jdXN0b20vUENDX05VSS9ub2RlX21vZHVsZXMvcHJpbW8tZXhwbG9yZS1jbGlja2FibGUtbG9nby10by1hbnktbGluay9pbmRleC5qcyIsInByaW1vLWV4cGxvcmUvY3VzdG9tL1BDQ19OVUkvbm9kZV9tb2R1bGVzL3ByaW1vLWV4cGxvcmUtY2xpY2thYmxlLWxvZ28tdG8tYW55LWxpbmsvanMvY2xpY2thYmxlLWxvZ28tdG8tYW55LWxpbmsubW9kdWxlLmpzIiwicHJpbW8tZXhwbG9yZS9jdXN0b20vUENDX05VSS9ub2RlX21vZHVsZXMvcHJpbW8tZXhwbG9yZS1jdXN0b20tYWN0aW9ucy9pbmRleC5qcyIsInByaW1vLWV4cGxvcmUvY3VzdG9tL1BDQ19OVUkvbm9kZV9tb2R1bGVzL3ByaW1vLWV4cGxvcmUtY3VzdG9tLWFjdGlvbnMvanMvY3VzdG9tLWFjdGlvbnMubW9kdWxlLmpzIiwicHJpbW8tZXhwbG9yZS9jdXN0b20vUENDX05VSS9ub2RlX21vZHVsZXMvcHJpbW8tZXhwbG9yZS1jdXN0b20tbm8tc2VhcmNoLXJlc3VsdHMvaW5kZXguanMiLCJwcmltby1leHBsb3JlL2N1c3RvbS9QQ0NfTlVJL25vZGVfbW9kdWxlcy9wcmltby1leHBsb3JlLWN1c3RvbS1uby1zZWFyY2gtcmVzdWx0cy9qcy9jdXN0b20tbm8tc2VhcmNoLXJlc3VsdHMubW9kdWxlLmpzIiwicHJpbW8tZXhwbG9yZS9jdXN0b20vUENDX05VSS9ub2RlX21vZHVsZXMvcHJpbW8tZXhwbG9yZS1leHRlcm5hbC1zZWFyY2gvaW5kZXguanMiLCJwcmltby1leHBsb3JlL2N1c3RvbS9QQ0NfTlVJL25vZGVfbW9kdWxlcy9wcmltby1leHBsb3JlLWV4dGVybmFsLXNlYXJjaC9qcy9leHRlcm5hbC1zZWFyY2gubW9kdWxlLmpzIiwicHJpbW8tZXhwbG9yZS9jdXN0b20vUENDX05VSS9ub2RlX21vZHVsZXMvcHJpbW8tZXhwbG9yZS1saWJyYXJ5aDNscC13aWRnZXQvaW5kZXguanMiLCJwcmltby1leHBsb3JlL2N1c3RvbS9QQ0NfTlVJL25vZGVfbW9kdWxlcy9wcmltby1leHBsb3JlLWxpYnJhcnloM2xwLXdpZGdldC9qcy9saWJyYXJ5aDNscC13aWRnZXQubW9kdWxlLmpzIiwicHJpbW8tZXhwbG9yZS9jdXN0b20vUENDX05VSS9ub2RlX21vZHVsZXMvcHJpbW8tZXhwbG9yZS1zZWFyY2gtYmFyLXN1Yi1tZW51L2luZGV4LmpzIiwicHJpbW8tZXhwbG9yZS9jdXN0b20vUENDX05VSS9ub2RlX21vZHVsZXMvcHJpbW8tZXhwbG9yZS1zZWFyY2gtYmFyLXN1Yi1tZW51L2pzL3NlYXJjaC1iYXItc3ViLW1lbnUubW9kdWxlLmpzIiwicHJpbW8tZXhwbG9yZS9jdXN0b20vUENDX05VSS9ub2RlX21vZHVsZXMvcHJpbW8tZXhwbG9yZS10b2dnbGUtaW5zdGl0dXRpb25zL2Rpc3QvbW9kdWxlLmpzIiwicHJpbW8tZXhwbG9yZS9jdXN0b20vUENDX05VSS9ub2RlX21vZHVsZXMvcHJpbW8tZXhwbG9yZS10b2dnbGUtaW5zdGl0dXRpb25zL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQTtBQUNBO0FBREEsQ0FFSyxNQUZMLENBRVksZ0JBRlosRUFFOEIsRUFGOUI7QUFHSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEosQ0FRSyxTQVJMLENBUWUsZUFSZixFQVFnQztBQUN4QixjQUFVO0FBQ04sb0JBQVk7QUFETixLQURjO0FBSXhCO0FBQ0E7QUFMd0IsQ0FSaEM7O0FBMkJBLE9BQU8sT0FBUCxHQUFpQixnQkFBakI7Ozs7Ozs7O0FDM0JPLElBQUksNERBQTBCO0FBQ25DLFFBQU0seUJBRDZCO0FBRW5DLFVBQVE7QUFDTixTQUFLLDZCQURDO0FBRU4sYUFBUztBQUZIO0FBRjJCLENBQTlCOzs7Ozs7OztBQ0FBLElBQUksb0RBQXNCO0FBQzdCLFVBQU0sZUFEdUI7QUFFN0IsWUFBUSxDQUNKO0FBQ0ksY0FBTSxjQURWO0FBRUkscUJBQWEsNEJBRmpCO0FBR0ksY0FBTSxVQUhWO0FBSUksY0FBTTtBQUNGLGlCQUFLLGVBREg7QUFFRixrQkFBTTtBQUZKLFNBSlY7QUFRSSxnQkFBUTtBQVJaLEtBREk7QUFGcUIsQ0FBMUI7Ozs7O0FDQVA7QUFDQTtBQURBLENBRUssTUFGTCxDQUVZLHlCQUZaLEVBRXVDLEVBRnZDO0FBR0k7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBKLENBUUssU0FSTCxDQVFlLG1DQVJmLEVBUW9EO0FBQzVDLGNBQVU7QUFDTixvQkFBWTtBQUROLEtBRGtDO0FBSTVDO0FBQ0E7QUFMNEMsQ0FScEQ7O0FBMENBLE9BQU8sT0FBUCxHQUFpQix5QkFBakI7Ozs7Ozs7O0FDMUNPLElBQUksNERBQTBCO0FBQ25DLFFBQU0seUJBRDZCO0FBRW5DLFVBQVE7QUFDTixTQUFLLDZEQURDO0FBRU4sWUFBUSxNQUZGO0FBR04sVUFBTTtBQUNKLFdBQUssZUFERDtBQUVKLFlBQU07QUFGRjtBQUhBO0FBRjJCLENBQTlCOzs7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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pFQTtBQUNBO0FBQ0E7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0NBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZCQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfXJldHVybiBlfSkoKSIsImFuZ3VsYXJcbi8vIE5hbWUgb3VyIG1vZHVsZVxuICAgIC5tb2R1bGUoJ2xpbmtzSW5Qcm9maWxlJywgW10pXG4gICAgLy8gLmNvbnRyb2xsZXIoJ2xpbmtzSW5Qcm9maWxlQ29udHJvbGxlcicsIFsnJHNjb3BlJywgZnVuY3Rpb24oICRzY29wZSApIHtcbiAgICAvLyAgICAgdGhpcy4kb25Jbml0ID0gKCkgPT4ge1xuICAgIC8vICAgICAgICAgJHNjb3BlLnBhcmVudEN0cmwgPSB0aGlzLnBhcmVudEN0cmw7XG4gICAgLy8gICAgIH1cbiAgICAvLyB9XSlcbiAgICAuY29tcG9uZW50KCdwcm1GaW5lc0FmdGVyJywge1xuICAgICAgICBiaW5kaW5nczoge1xuICAgICAgICAgICAgcGFyZW50Q3RybDogJzwnXG4gICAgICAgIH0sXG4gICAgICAgIC8vIGNvbnRyb2xsZXI6ICdsaW5rc0luUHJvZmlsZUNvbnRyb2xsZXInLFxuICAgICAgICB0ZW1wbGF0ZTogYFxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxheW91dC1yb3dcIj48YVxuICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3NlY3VyZS50b3VjaG5ldC5uZXQvQzIxMjQ5X3VzdG9yZXMvd2ViL3N0b3JlX21haW4uanNwP1NUT1JFSUQ9MjQmU0lOR0xFU1RPUkU9dHJ1ZVwiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJtZC1idXR0b24gbWQtcmFpc2VkIG1kLWFjY2VudFwiXG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIlBheSBmaW5lcyBvbmxpbmVcIlxuICAgICAgICAgICAgICA+PHNwYW4+UGF5IGZpbmVzIG9ubGluZTwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9hPjwvZGl2PlxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxheW91dC1yb3dcIj48YSBocmVmPVwiaHR0cHM6Ly93d3cucGNjLmVkdS9saWJyYXJ5L3NlcnZpY2VzL2JvcnJvd2luZy9saWJyYXJ5LWZpbmVzL1wiPlNlZSBvdGhlciB3YXlzIHRvIGRlYWwgd2l0aCB5b3VyIGZpbmVzLjwvYT48L2Rpdj5cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIGBcbiAgICB9KTtcblxubW9kdWxlLmV4cG9ydHMgPSAnbGlua3NJblByb2ZpbGUnXG4iLCJleHBvcnQgbGV0IGNsaWNrYWJsZUxvZ29MaW5rQ29uZmlnID0ge1xuICBuYW1lOiAnY2xpY2thYmxlTG9nb0xpbmtDb25maWcnLFxuICBjb25maWc6IHtcbiAgICB1cmw6ICdodHRwczovL3d3dy5wY2MuZWR1L2xpYnJhcnknLFxuICAgIGFsdFRleHQ6ICdQQ0MgTGlicmFyeSdcbiAgfVxufTtcbiIsImV4cG9ydCBsZXQgY3VzdG9tQWN0aW9uc0NvbmZpZyA9IHtcbiAgICBuYW1lOiAnY3VzdG9tQWN0aW9ucycsXG4gICAgY29uZmlnOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6IFwiUmVwb3J0IElzc3VlXCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJSZXBvcnQgYW4gaXNzdWUgb3IgcHJvYmxlbVwiLFxuICAgICAgICAgICAgdHlwZTogJ3RlbXBsYXRlJyxcbiAgICAgICAgICAgIGljb246IHtcbiAgICAgICAgICAgICAgICBzZXQ6ICdjb21tdW5pY2F0aW9uJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnaWNfY29tbWVudF8yNHB4J1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGFjdGlvbjogXCJodHRwczovL3d3dy5wY2MuZWR1L2xpYnJhcnkvYWJvdXQvcGVvcGxlL2NvbnRhY3QvcmVwb3J0LWlzc3Vlcy9cIlxuICAgICAgICB9XG4gICAgXVxufTtcbiIsImFuZ3VsYXJcbi8vIE5hbWUgb3VyIG1vZHVsZVxuICAgIC5tb2R1bGUoJ2xpYnJhcnlBY2NvdW50UXVlc3Rpb25zJywgW10pXG4gICAgLy8gLmNvbnRyb2xsZXIoJ2xpYnJhcnlBY2NvdW50UXVlc3Rpb25zQ29udHJvbGxlcicsIFsnJHNjb3BlJywgZnVuY3Rpb24oICRzY29wZSApIHtcbiAgICAvLyAgICAgdGhpcy4kb25Jbml0ID0gKCkgPT4ge1xuICAgIC8vICAgICAgICAgJHNjb3BlLnBhcmVudEN0cmwgPSB0aGlzLnBhcmVudEN0cmw7XG4gICAgLy8gICAgIH1cbiAgICAvLyB9XSlcbiAgICAuY29tcG9uZW50KCdwcm1NZXNzYWdlc0FuZEJsb2Nrc092ZXJ2aWV3QWZ0ZXInLCB7XG4gICAgICAgIGJpbmRpbmdzOiB7XG4gICAgICAgICAgICBwYXJlbnRDdHJsOiAnPCdcbiAgICAgICAgfSxcbiAgICAgICAgLy8gY29udHJvbGxlcjogJ2xpYnJhcnlBY2NvdW50UXVlc3Rpb25zQ29udHJvbGxlcicsXG4gICAgICAgIHRlbXBsYXRlOlxuICAgICAgICAgICAgYFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRpbGVzLWdyaWQtdGlsZVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aWxlLWNvbnRlbnQgbGF5b3V0LWNvbHVtblwiIGxheW91dD1cImNvbHVtblwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGlsZS1oZWFkZXIgbGF5b3V0LWNvbHVtblwiIGxheW91dD1cImNvbHVtblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBsYXlvdXQ9XCJyb3dcIiBsYXlvdXQtYWxpZ249XCJzcGFjZS1iZXR3ZWVuXCIgY2xhc3M9XCJsYXlvdXQtYWxpZ24tc3BhY2UtYmV0d2Vlbi1zdHJldGNoIGxheW91dC1yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJoZWFkZXItbGluayBsaWdodC10ZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPk1vcmUgUXVlc3Rpb25zPzwvc3Bhbj4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGxheW91dD1cImNvbHVtblwiIGxheW91dC1hbGlnbj1cImNlbnRlciBjZW50ZXJcIiBsYXlvdXQtcGFkZGluZz1cIlwiIGxheW91dC1tYXJnaW49XCJcIiBjbGFzcz1cImxheW91dC1tYXJnaW4gbGF5b3V0LXBhZGRpbmcgbGF5b3V0LWFsaWduLWNlbnRlci1jZW50ZXIgbGF5b3V0LWNvbHVtblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cucGNjLmVkdS9saWJyYXJ5L3NlcnZpY2VzL2JvcnJvd2luZy9saWJyYXJ5LWFjY291bnQtcXVlc3Rpb25zL1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJtZC1idXR0b24gbWQtcmFpc2VkIG1kLWFjY2VudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkxpYnJhcnkgQWNjb3VudCBRdWVzdGlvbnNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkxpYnJhcnkgQWNjb3VudCBRdWVzdGlvbnM8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPCEtLS0tPlxuICAgICAgICAgICAgPCEtLS0tPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBgXG4gICAgfSk7XG5cbm1vZHVsZS5leHBvcnRzID0gJ2xpYnJhcnlBY2NvdW50UXVlc3Rpb25zJ1xuIiwiZXhwb3J0IGxldCBsaWJyYXJ5aDNscFdpZGdldENvbmZpZyA9IHtcbiAgbmFtZTogJ2xpYnJhcnloM2xwV2lkZ2V0Q29uZmlnJyxcbiAgY29uZmlnOiB7XG4gICAgdXJsOiAnaHR0cHM6Ly93d3d0ZXN0LnBjYy5lZHUvbGlicmFyeS9zY3JpcHRzL2NoYXQtYXBpL3dpZGdldC5waHAnLFxuICAgIHByb21wdDogJ0NoYXQnLFxuICAgIGljb246IHtcbiAgICAgIHNldDogJ2NvbW11bmljYXRpb24nLFxuICAgICAgaWNvbjogJ2ljX2ZvcnVtXzI0cHgnXG4gICAgfVxuICB9XG59OyIsImltcG9ydCAncHJpbW8tZXhwbG9yZS1jbGlja2FibGUtbG9nby10by1hbnktbGluayc7XG5pbXBvcnQgJ3ByaW1vLWV4cGxvcmUtbGlicmFyeWgzbHAtd2lkZ2V0JztcbmltcG9ydCAncHJpbW8tZXhwbG9yZS1zZWFyY2gtYmFyLXN1Yi1tZW51JztcbmltcG9ydCAncHJpbW8tZXhwbG9yZS10b2dnbGUtaW5zdGl0dXRpb25zJztcbmltcG9ydCAncHJpbW8tZXhwbG9yZS1jdXN0b20tYWN0aW9ucyc7XG5pbXBvcnQgJ3ByaW1vLWV4cGxvcmUtY3VzdG9tLW5vLXNlYXJjaC1yZXN1bHRzJztcbmltcG9ydCAncHJpbW8tZXhwbG9yZS1leHRlcm5hbC1zZWFyY2gnO1xuXG5cbmltcG9ydCB7IHZpZXdOYW1lIH0gZnJvbSAnLi92aWV3TmFtZSc7XG5pbXBvcnQgeyBjbGlja2FibGVMb2dvTGlua0NvbmZpZyB9IGZyb20gJy4vY2xpY2thYmxlTG9nb1RvQW55TGluayc7XG5pbXBvcnQgeyBsaWJyYXJ5aDNscFdpZGdldENvbmZpZyB9IGZyb20gJy4vbGlicmFyeWgzbHBXaWRnZXQnO1xuaW1wb3J0IHsgc2VhcmNoQmFyU3ViTWVudUl0ZW1zQ29uZmlnIH0gZnJvbSAnLi9zZWFyY2hCYXJTdWJNZW51JztcbmltcG9ydCB7IGN1c3RvbUFjdGlvbnNDb25maWcgfSBmcm9tICcuL2N1c3RvbUFjdGlvbnMnO1xuaW1wb3J0IHsgbGlua3NJblByb2ZpbGUgfSBmcm9tIFwiLi9MaW5rc0luUHJvZmlsZVwiO1xuaW1wb3J0IHsgbGlicmFyeUFjY291bnRRdWVzdGlvbnMgfSBmcm9tICcuL2xpYnJhcnlBY2NvdW50UXVlc3Rpb25zJ1xuXG5cbmxldCBhcHAgPSBhbmd1bGFyLm1vZHVsZSgndmlld0N1c3RvbScsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2xpY2thYmxlTG9nb1RvQW55TGluaycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2xpYnJhcnloM2xwV2lkZ2V0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnc2VhcmNoQmFyU3ViTWVudScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RvZ2dsZUluc3RpdHV0aW9ucycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2N1c3RvbUFjdGlvbnMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjdXN0b21Ob1NlYXJjaFJlc3VsdHMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdsaW5rc0luUHJvZmlsZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2xpYnJhcnlBY2NvdW50UXVlc3Rpb25zJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZXh0ZXJuYWxTZWFyY2gnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pO1xuXG5hcHBcbiAgLmNvbnN0YW50KGN1c3RvbUFjdGlvbnNDb25maWcubmFtZSwgY3VzdG9tQWN0aW9uc0NvbmZpZy5jb25maWcpXG4gIC5jb25zdGFudChjbGlja2FibGVMb2dvTGlua0NvbmZpZy5uYW1lLCBjbGlja2FibGVMb2dvTGlua0NvbmZpZy5jb25maWcpXG4gIC5jb25zdGFudChsaWJyYXJ5aDNscFdpZGdldENvbmZpZy5uYW1lLCBsaWJyYXJ5aDNscFdpZGdldENvbmZpZy5jb25maWcpXG4gIC5jb25zdGFudChzZWFyY2hCYXJTdWJNZW51SXRlbXNDb25maWcubmFtZSwgc2VhcmNoQmFyU3ViTWVudUl0ZW1zQ29uZmlnLmNvbmZpZylcbiAgLnZhbHVlKCdjdXN0b21Ob1NlYXJjaFJlc3VsdHNUZW1wbGF0ZVVybCcsICdjdXN0b20vJyt2aWV3TmFtZSsnL2h0bWwvbm9TZWFyY2hSZXN1bHRzLmh0bWwnKVxuICAuY29tcG9uZW50KCdwcm1TZWFyY2hCYXJBZnRlcicsIHtcbiAgICB0ZW1wbGF0ZTogJzxzZWFyY2gtYmFyLXN1Yi1tZW51Pjwvc2VhcmNoLWJhci1zdWItbWVudT4nXG4gIH0pXG4gIC5jb21wb25lbnQoJ3BybUFsbWFNb3JlSW5zdEFmdGVyJywge3RlbXBsYXRlOiAnPHRvZ2dsZS1pbnN0aXR1dGlvbnMgLz4nfSlcbiAgICAudmFsdWUoJ3NlYXJjaFRhcmdldHMnLCBbXG4gICAgICAgIHtcbiAgICAgICAgXCJuYW1lXCI6IFwiV29ybGRjYXRcIixcbiAgICAgICAgXCJ1cmxcIjogXCJodHRwczovL3BjYy5vbi53b3JsZGNhdC5vcmcvc2VhcmNoP1wiLFxuICAgICAgICBcImltZ1wiOiBcImh0dHBzOi8vd3d3LnBjYy5lZHUvbGlicmFyeS9wcmltby9pbWFnZXMvd29ybGRjYXQtbG9nby5wbmdcIixcbiAgICAgICAgICAgIG1hcHBpbmc6IGZ1bmN0aW9uIChxdWVyaWVzLCBmaWx0ZXJzKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcXVlcnlfbWFwcGluZ3MgPSB7XG4gICAgICAgICAgICAgICAgICAgICdhbnknOiAna3cnLFxuICAgICAgICAgICAgICAgICAgICAndGl0bGUnOiAndGknLFxuICAgICAgICAgICAgICAgICAgICAnY3JlYXRvcic6ICdhdScsXG4gICAgICAgICAgICAgICAgICAgICdzdWJqZWN0JzogJ3N1JyxcbiAgICAgICAgICAgICAgICAgICAgJ2lzYm4nOiAnYm4nLFxuICAgICAgICAgICAgICAgICAgICAnaXNzbic6ICduMidcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdxdWVyeVN0cmluZz0nICsgcXVlcmllcy5tYXAocGFydCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdGVybXMgPSBwYXJ0LnNwbGl0KCcsJylcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0eXBlID0gcXVlcnlfbWFwcGluZ3NbdGVybXNbMF1dIHx8ICdrdydcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzdHJpbmcgPSB0ZXJtc1syXSB8fCAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGpvaW4gPSB0ZXJtc1szXSB8fCAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHR5cGUgKyAnOicgKyBzdHJpbmcgKyAnICcgKyBqb2luICsgJyAnXG4gICAgICAgICAgICAgICAgICAgIH0pLmpvaW4oJycpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJuYW1lXCI6IFwiR29vZ2xlIFNjaG9sYXJcIixcbiAgICAgICAgICAgIFwidXJsXCI6IFwiaHR0cHM6Ly9zY2hvbGFyLmdvb2dsZS5jb20vc2Nob2xhcj9xPVwiLFxuICAgICAgICAgICAgXCJpbWdcIjogXCJodHRwczovL3d3dy5wY2MuZWR1L2xpYnJhcnkvcHJpbW8vaW1hZ2VzL2dvb2dsZV9sb2dvLnBuZ1wiLFxuICAgICAgICAgICAgbWFwcGluZzogZnVuY3Rpb24gKHF1ZXJpZXMsIGZpbHRlcnMpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcXVlcmllcy5tYXAocGFydCA9PiBwYXJ0LnNwbGl0KFwiLFwiKVsyXSB8fCBcIlwiKS5qb2luKCcgJylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICcnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcIm5hbWVcIjogXCJFQlNDTyBTZWFyY2hcIixcbiAgICAgICAgICAgIFwidXJsXCI6IFwiaHR0cHM6Ly9saWJwcm94eS5wY2MuZWR1L2xvZ2luP3VybD1odHRwOi8vc2VhcmNoLmVic2NvaG9zdC5jb20vbG9naW4uYXNweD9kaXJlY3Q9dHJ1ZSZzaXRlPWVob3N0LWxpdmUmc2NvcGU9c2l0ZSZ0eXBlPTEmZGI9YXBoJmRiPWY1aCZtb2RlPWJvb2wmbGFuZz1lbiZjbGkwPUZUJmNsdjA9WSZicXVlcnk9XCIsXG4gICAgICAgICAgICBcImltZ1wiOiBcImh0dHBzOi8vd3d3LnBjYy5lZHUvbGlicmFyeS9wcmltby9pbWFnZXMvZWJzY28tc2VhcmNoLnBuZ1wiLFxuICAgICAgICAgICAgbWFwcGluZzogZnVuY3Rpb24gKHF1ZXJpZXMsIGZpbHRlcnMpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcXVlcmllcy5tYXAocGFydCA9PiBwYXJ0LnNwbGl0KFwiLFwiKVsyXSB8fCBcIlwiKS5qb2luKCcgJylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICcnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgXSlcblxuXG5cblxuXG4iLCJleHBvcnQgbGV0IHNlYXJjaEJhclN1Yk1lbnVJdGVtc0NvbmZpZyA9IHtcbiAgbmFtZTogJ3NlYXJjaEJhclN1Yk1lbnVJdGVtcycsXG4gIGNvbmZpZzogW1xuICAgIHtcbiAgICAgIG5hbWU6IFwiUmVwb3J0IElzc3VlXCIsXG4gICAgICBkZXNjcmlwdGlvbjogXCJSZXBvcnQgYW4gaXNzdWUgb3IgcHJvYmxlbVwiLFxuICAgICAgYWN0aW9uOiBcImh0dHBzOi8vd3d3LnBjYy5lZHUvbGlicmFyeS9hYm91dC9wZW9wbGUvY29udGFjdC9yZXBvcnQtaXNzdWVzL1wiLFxuICAgICAgaWNvbjoge1xuICAgICAgICBzZXQ6ICdjb21tdW5pY2F0aW9uJyxcbiAgICAgICAgaWNvbjogJ2ljX2NvbW1lbnRfMjRweCdcbiAgICAgIH1cbiAgICB9XG4gIF1cbn07XG4iLCIvLyB2aWRcbmV4cG9ydCBsZXQgdmlld05hbWUgPSBcIlBDQ19OVUlcIjtcbiIsInJlcXVpcmUoJy4vanMvY2xpY2thYmxlLWxvZ28tdG8tYW55LWxpbmsubW9kdWxlLmpzJylcbm1vZHVsZS5leHBvcnRzID0gJ2NsaWNrYWJsZUxvZ29Ub0FueUxpbmsnXG4iLCJhbmd1bGFyXG4gIC5tb2R1bGUoJ2NsaWNrYWJsZUxvZ29Ub0FueUxpbmsnLCBbXSlcbiAgLmNvbnRyb2xsZXIoJ2NsaWNrYWJsZUxvZ29Ub0FueUxpbmtDb250cm9sbGVyJywgWydjbGlja2FibGVMb2dvTGlua0NvbmZpZycsICckc2NvcGUnLCAnJGZpbHRlcicsIGZ1bmN0aW9uKGNsaWNrYWJsZUxvZ29MaW5rQ29uZmlnLCAkc2NvcGUsICRmaWx0ZXIpIHtcbiAgICAkc2NvcGUuY2xpY2thYmxlTG9nb0xpbmsgPSBjbGlja2FibGVMb2dvTGlua0NvbmZpZy51cmw7XG4gICAgJHNjb3BlLmNsaWNrYWJsZUxvZ29BbHQgPSBjbGlja2FibGVMb2dvTGlua0NvbmZpZy5hbHRUZXh0O1xuICAgICRzY29wZS5pY29uTGluayA9IHRoaXMucGFyZW50Q3RybC5pY29uTGlua1xuICAgICRzY29wZS50cmFuc2xhdGUgPSAob3JpZ2luYWwpID0+IHtcbiAgICAgIHJldHVybiBvcmlnaW5hbC5yZXBsYWNlKC9cXHsoLispXFx9L2csIChtYXRjaCwgcDEpID0+ICRmaWx0ZXIoJ3RyYW5zbGF0ZScpKHAxKSk7XG4gICAgfVxuICB9XSlcbiAgLmNvbXBvbmVudCgncHJtTG9nb0FmdGVyJywge1xuICAgIGJpbmRpbmdzOiB7XG4gICAgICBwYXJlbnRDdHJsOiAnPCdcbiAgICB9LFxuICAgIGNvbnRyb2xsZXI6ICdjbGlja2FibGVMb2dvVG9BbnlMaW5rQ29udHJvbGxlcicsXG4gICAgdGVtcGxhdGU6ICc8ZGl2IGNsYXNzPVwicHJvZHVjdC1sb2dvIHByb2R1Y3QtbG9nby1sb2NhbFwiIGxheW91dD1cInJvd1wiIGxheW91dC1hbGlnbj1cInN0YXJ0IGNlbnRlclwiIGxheW91dC1maWxsIGlkPVwiYmFubmVyXCIgdGFiaW5kZXg9XCIwXCIgcm9sZT1cImJhbm5lclwiPicrXG4gICAgICAgICAgICAgICAgJzxhIG5nLWhyZWY9XCJ7eyB0cmFuc2xhdGUoY2xpY2thYmxlTG9nb0xpbmspIH19XCI+PGltZyBjbGFzcz1cImxvZ28taW1hZ2VcIiBuZy1hbHQ9XCJ7eyB0cmFuc2xhdGUoY2xpY2thYmxlTG9nb0FsdCkgfX1cIiBuZy1zcmM9XCJ7eyBpY29uTGluayB9fVwiLz48L2E+JytcbiAgICAgICAgICAgICAgJzwvZGl2PidcblxuICB9KTtcbiIsInJlcXVpcmUoJy4vanMvY3VzdG9tLWFjdGlvbnMubW9kdWxlLmpzJylcbm1vZHVsZS5leHBvcnRzID0gJ2N1c3RvbUFjdGlvbnMnXG4iLCJhbmd1bGFyXG4gIC5tb2R1bGUoJ2N1c3RvbUFjdGlvbnMnLCBbXSlcbiAgLmNvbXBvbmVudCgncHJtQWN0aW9uQ29udGFpbmVyQWZ0ZXInLCB7XG4gICAgcmVxdWlyZTogeyBwcm1BY3Rpb25DdHJsOiAnXnBybUFjdGlvbkxpc3QnIH0sXG4gICAgY29udHJvbGxlcjogWydjdXN0b21BY3Rpb25zU2VydmljZScsICdjdXN0b21BY3Rpb25zJywgZnVuY3Rpb24gKGN1c3RvbUFjdGlvbnNTZXJ2aWNlLCBjdXN0b21BY3Rpb25zKSB7XG4gICAgICB0aGlzLiRvbkluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGN1c3RvbUFjdGlvbnNTZXJ2aWNlLnNldENvbnRyb2xsZXIodGhpcy5wcm1BY3Rpb25DdHJsKVxuICAgICAgICBjdXN0b21BY3Rpb25zLm1hcChhY3Rpb24gPT4gY3VzdG9tQWN0aW9uc1NlcnZpY2UuYWRkQWN0aW9uKGFjdGlvbikpXG4gICAgICB9XG4gICAgfV1cbiAgfSlcbiAgLmZhY3RvcnkoJ2N1c3RvbUFjdGlvbnNTZXJ2aWNlJywgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB7XG4gICAgICBzZXRDb250cm9sbGVyOiBmdW5jdGlvbiAoY29udHJvbGxlcikge1xuICAgICAgICB0aGlzLnBybUFjdGlvbkN0cmwgPSBjb250cm9sbGVyXG4gICAgICB9LFxuICAgICAgcHJvY2Vzc0FjdGlvbjogZnVuY3Rpb24gKGFjdGlvbikge1xuICAgICAgICBhY3Rpb24uaWNvbm5hbWUgPSBhY3Rpb24ubmFtZS5yZXBsYWNlKC9cXHMrL2csICcnKSxcbiAgICAgICAgYWN0aW9uLnNsdWcgPSBhY3Rpb24ubmFtZS5yZXBsYWNlKC9cXHMrL2csICcnKS50b0xvd2VyQ2FzZSgpLFxuICAgICAgICBhY3Rpb24uaW5kZXggPSBPYmplY3Qua2V5cyh0aGlzLnBybUFjdGlvbkN0cmwuYWN0aW9uTGlzdFNlcnZpY2UuYWN0aW9uc1RvSW5kZXgpLmxlbmd0aCAtIDFcbiAgICAgICAgdGhpcy5wcm1BY3Rpb25DdHJsLmFjdGlvbkxhYmVsTmFtZXNNYXBbYWN0aW9uLnNsdWddID0gYWN0aW9uLm5hbWVcbiAgICAgICAgdGhpcy5wcm1BY3Rpb25DdHJsLmFjdGlvbkljb25OYW1lc01hcFthY3Rpb24uc2x1Z10gPSBhY3Rpb24uaWNvbm5hbWVcbiAgICAgICAgdGhpcy5wcm1BY3Rpb25DdHJsLmFjdGlvbkljb25zW2FjdGlvbi5pY29ubmFtZV0gPSB7XG4gICAgICAgICAgaWNvbjogYWN0aW9uLmljb24ubmFtZSxcbiAgICAgICAgICBpY29uU2V0OiBhY3Rpb24uaWNvbi5zZXQsXG4gICAgICAgICAgdHlwZTogXCJzdmdcIlxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhY3Rpb25cbiAgICAgIH0sXG4gICAgICBhZGRBY3Rpb246IGZ1bmN0aW9uIChhY3Rpb24pIHtcbiAgICAgICAgYWN0aW9uID0gdGhpcy5wcm9jZXNzQWN0aW9uKGFjdGlvbilcbiAgICAgICAgaWYgKCF0aGlzLnBybUFjdGlvbkN0cmwuYWN0aW9uTGlzdFNlcnZpY2UuYWN0aW9uc1RvSW5kZXhbYWN0aW9uLnNsdWddKSB7XG4gICAgICAgICAgdGhpcy5wcm1BY3Rpb25DdHJsLmFjdGlvbkxpc3RTZXJ2aWNlLnJlcXVpcmVkQWN0aW9uc0xpc3RbYWN0aW9uLmluZGV4XSA9IGFjdGlvbi5zbHVnXG4gICAgICAgICAgdGhpcy5wcm1BY3Rpb25DdHJsLmFjdGlvbkxpc3RTZXJ2aWNlLmFjdGlvbnNUb0Rpc3BsYXkudW5zaGlmdChhY3Rpb24uc2x1ZylcbiAgICAgICAgICB0aGlzLnBybUFjdGlvbkN0cmwuYWN0aW9uTGlzdFNlcnZpY2UuYWN0aW9uc1RvSW5kZXhbYWN0aW9uLnNsdWddID0gYWN0aW9uLmluZGV4XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGFjdGlvbi50eXBlID09PSAndGVtcGxhdGUnKSB7XG4gICAgICAgICAgICAvLyBwcm9jZXNzIHsgfSBpbiB0ZW1wbGF0ZVZhcnNcbiAgICAgICAgICAgIGlmIChhY3Rpb24uaGFzT3duUHJvcGVydHkoJ3RlbXBsYXRlVmFyJykpIHtcbiAgICAgICAgICAgICAgICBhY3Rpb24uYWN0aW9uID0gYWN0aW9uLmFjdGlvbi5yZXBsYWNlKC97XFxkfS9nLCAocikgPT4gYWN0aW9uLnRlbXBsYXRlVmFyW3IucmVwbGFjZSgvW15cXGRdL2csICcnKV0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyByZXBsYWNlIGEgcmVjb3JkSWQgb2NjdXJlbmNlXG4gICAgICAgICAgICBhY3Rpb24uYWN0aW9uID0gYWN0aW9uLmFjdGlvbi5yZXBsYWNlKC97cmVjb3JkSWR9L2csIChyKSA9PiB0aGlzLnBybUFjdGlvbkN0cmwuaXRlbS5wbnguc2VhcmNoLnJlY29yZGlkWzBdKVxuICAgICAgICAgICAgLy8gcmVwbGFjZSBhIHBueC54eHgueHh4WzBdIHBhdHRlcm4gZXguIHBueC5zZWFyY2gucmVjb3JkaWRbMF1cbiAgICAgICAgICAgIGxldCBwbnhQcm9wZXJ0aWVzID0gYWN0aW9uLmFjdGlvbi5tYXRjaCgvXFx7KHBueFxcLi4qPylcXH0vZykgfHwgW11cbiAgICAgICAgICAgIHBueFByb3BlcnRpZXMuZm9yRWFjaCgocCkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCB2YWx1ZUZvclAgPSBwLnJlcGxhY2UoL1t7fV0vZywgJycpLnNwbGl0KCcuJykucmVkdWNlKChvLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaCA9IC8oLiopKFxcW1xcZFxcXSkvLmV4ZWMoaSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChoIGluc3RhbmNlb2YgQXJyYXkpIHsgcmV0dXJuIG9baFsxXV1baFsyXS5yZXBsYWNlKC9bXlxcZF0vZywgJycpXSB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gb1tpXVxuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJydcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIHRoaXMucHJtQWN0aW9uQ3RybC5pdGVtKVxuICAgICAgICAgICAgICAgIGFjdGlvbi5hY3Rpb24gPSBhY3Rpb24uYWN0aW9uLnJlcGxhY2UocCwgdmFsdWVGb3JQKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnBybUFjdGlvbkN0cmwuYWN0aW9uTGlzdFNlcnZpY2Uub25Ub2dnbGVbYWN0aW9uLnNsdWddID0gKCkgPT4gd2luZG93Lm9wZW4oYWN0aW9uLmFjdGlvbiwgJ19ibGFuaycpXG4gICAgICB9XG4gICAgfVxuICB9KVxuIiwicmVxdWlyZSgnLi9qcy9jdXN0b20tbm8tc2VhcmNoLXJlc3VsdHMubW9kdWxlLmpzJylcbm1vZHVsZS5leHBvcnRzID0gJ2N1c3RvbU5vU2VhcmNoUmVzdWx0cydcbiIsImFuZ3VsYXJcbiAgLm1vZHVsZSgnY3VzdG9tTm9TZWFyY2hSZXN1bHRzJywgW10pXG4gIC5jb21wb25lbnQoJ3BybU5vU2VhcmNoUmVzdWx0QWZ0ZXInLCB7XG4gICAgYmluZGluZ3M6IHtcbiAgICAgIHBhcmVudEN0cmw6ICc8J1xuICAgIH0sXG4gICAgdGVtcGxhdGVVcmw6IFsnY3VzdG9tTm9TZWFyY2hSZXN1bHRzVGVtcGxhdGVVcmwnLCBmdW5jdGlvbiAoY3VzdG9tTm9TZWFyY2hSZXN1bHRzVGVtcGxhdGVVcmwpIHtcbiAgICAgIHJldHVybiBjdXN0b21Ob1NlYXJjaFJlc3VsdHNUZW1wbGF0ZVVybDtcbiAgICB9XVxuICB9KTtcbiIsInJlcXVpcmUoJy4vanMvZXh0ZXJuYWwtc2VhcmNoLm1vZHVsZS5qcycpXG5tb2R1bGUuZXhwb3J0cyA9ICdleHRlcm5hbFNlYXJjaCdcbiIsImFuZ3VsYXJcbiAgLm1vZHVsZSgnZXh0ZXJuYWxTZWFyY2gnLCBbXSlcbiAgLnZhbHVlKCdzZWFyY2hUYXJnZXRzJywgW10pXG4gIC5jb21wb25lbnQoJ3BybUZhY2V0QWZ0ZXInLCB7XG4gICAgICBiaW5kaW5nczogeyBwYXJlbnRDdHJsOiAnPCcgfSxcbiAgICAgIGNvbnRyb2xsZXI6IFsnZXh0ZXJuYWxTZWFyY2hTZXJ2aWNlJywgZnVuY3Rpb24gKGV4dGVybmFsU2VhcmNoU2VydmljZSkge1xuICAgICAgICBleHRlcm5hbFNlYXJjaFNlcnZpY2UuY29udHJvbGxlciA9IHRoaXMucGFyZW50Q3RybFxuICAgICAgICBleHRlcm5hbFNlYXJjaFNlcnZpY2UuYWRkRXh0U2VhcmNoKClcbiAgICAgIH1dXG4gIH0pXG4gIC5jb21wb25lbnQoJ3BybVBhZ2VOYXZNZW51QWZ0ZXInLCB7XG4gICAgY29udHJvbGxlcjogWydleHRlcm5hbFNlYXJjaFNlcnZpY2UnLCBmdW5jdGlvbiAoZXh0ZXJuYWxTZWFyY2hTZXJ2aWNlKSB7XG4gICAgICBpZiAoZXh0ZXJuYWxTZWFyY2hTZXJ2aWNlLmNvbnRyb2xsZXIpIGV4dGVybmFsU2VhcmNoU2VydmljZS5hZGRFeHRTZWFyY2goKVxuICAgIH1dXG4gIH0pXG4gIC5jb21wb25lbnQoJ3BybUZhY2V0RXhhY3RBZnRlcicsIHtcbiAgICAgIGJpbmRpbmdzOiB7IHBhcmVudEN0cmw6ICc8JyB9LFxuICAgICAgdGVtcGxhdGU6IGBcbiAgICAgIDxkaXYgbmctaWY9XCJuYW1lID09PSAnRXh0ZXJuYWwgU2VhcmNoJ1wiPlxuICAgICAgICAgIDxkaXYgbmctaGlkZT1cIiRjdHJsLnBhcmVudEN0cmwuZmFjZXRHcm91cC5mYWNldEdyb3VwQ29sbGFwc2VkXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uLWNvbnRlbnQgYW5pbWF0ZS1tYXgtaGVpZ2h0LXZhcmlhYmxlXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWQtY2hpcHMgbWQtY2hpcHMtd3JhcFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgbmctcmVwZWF0PVwidGFyZ2V0IGluIHRhcmdldHNcIiBhcmlhLWxpdmU9XCJwb2xpdGVcIiBjbGFzcz1cIm1kLWNoaXAgYW5pbWF0ZS1vcGFjaXR5LWFuZC1zY2FsZSBmYWNldC1lbGVtZW50LW1hcmtlci1sb2NhbDRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1kLWNoaXAtY29udGVudCBsYXlvdXQtcm93XCIgcm9sZT1cImJ1dHRvblwiIHRhYmluZGV4PVwiMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZyBkaXI9XCJhdXRvXCIgdGl0bGU9XCJ7eyB0YXJnZXQubmFtZSB9fVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIG5nLWhyZWY9XCJ7eyB0YXJnZXQudXJsICsgdGFyZ2V0Lm1hcHBpbmcocXVlcmllcywgZmlsdGVycykgfX1cIiB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBuZy1zcmM9XCJ7eyB0YXJnZXQuaW1nIH19XCIgd2lkdGg9XCIyMlwiIGhlaWdodD1cIjIyXCIgc3R5bGU9XCJ2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7XCI+IHt7IHRhcmdldC5uYW1lIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+YCxcbiAgICAgIGNvbnRyb2xsZXI6IFsnJHNjb3BlJywgJyRsb2NhdGlvbicsICdzZWFyY2hUYXJnZXRzJywgZnVuY3Rpb24gKCRzY29wZSwgJGxvY2F0aW9uLCBzZWFyY2hUYXJnZXRzKSB7XG4gICAgICAgICRzY29wZS5uYW1lID0gdGhpcy5wYXJlbnRDdHJsLmZhY2V0R3JvdXAubmFtZVxuICAgICAgICAkc2NvcGUudGFyZ2V0cyA9IHNlYXJjaFRhcmdldHNcbiAgICAgICAgbGV0IHF1ZXJ5ID0gJGxvY2F0aW9uLnNlYXJjaCgpLnF1ZXJ5XG4gICAgICAgIGxldCBmaWx0ZXIgPSAkbG9jYXRpb24uc2VhcmNoKCkucGZpbHRlclxuICAgICAgICAkc2NvcGUucXVlcmllcyA9IEFycmF5LmlzQXJyYXkocXVlcnkpID8gcXVlcnkgOiBxdWVyeSA/IFtxdWVyeV0gOiBmYWxzZVxuICAgICAgICAkc2NvcGUuZmlsdGVycyA9IEFycmF5LmlzQXJyYXkoZmlsdGVyKSA/IGZpbHRlciA6IGZpbHRlciA/IFtmaWx0ZXJdIDogZmFsc2VcbiAgICAgIH1dXG4gIH0pXG4gIC5mYWN0b3J5KCdleHRlcm5hbFNlYXJjaFNlcnZpY2UnLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGdldCBjb250cm9sbGVyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm1GYWNldEN0cmwgfHwgZmFsc2VcbiAgICAgIH0sXG4gICAgICBzZXQgY29udHJvbGxlcihjb250cm9sbGVyKSB7XG4gICAgICAgIHRoaXMucHJtRmFjZXRDdHJsID0gY29udHJvbGxlclxuICAgICAgfSxcbiAgICAgIGFkZEV4dFNlYXJjaDogZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5wcm1GYWNldEN0cmwuZmFjZXRTZXJ2aWNlLnJlc3VsdHNbdGhpcy5wcm1GYWNldEN0cmwuZmFjZXRTZXJ2aWNlLnJlc3VsdHMubGVuZ3RoIC0gMV0ubmFtZSAhPT0gJ0V4dGVybmFsIFNlYXJjaCcpIHtcbiAgICAgICAgICB0aGlzLnBybUZhY2V0Q3RybC5mYWNldFNlcnZpY2UucmVzdWx0cy5wdXNoKHtcbiAgICAgICAgICAgIG5hbWU6ICdFeHRlcm5hbCBTZWFyY2gnLFxuICAgICAgICAgICAgZGlzcGxheWVkVHlwZTogJ2V4YWN0JyxcbiAgICAgICAgICAgIGxpbWl0Q291bnQ6IDAsXG4gICAgICAgICAgICBmYWNldEdyb3VwQ29sbGFwc2VkOiBmYWxzZSxcbiAgICAgICAgICAgIHZhbHVlczogdW5kZWZpbmVkXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSlcbiIsInJlcXVpcmUoJy4vanMvbGlicmFyeWgzbHAtd2lkZ2V0Lm1vZHVsZS5qcycpXG5tb2R1bGUuZXhwb3J0cyA9ICdsaWJyYXJ5aDNscFdpZGdldCdcbiIsImFuZ3VsYXJcbiAgLy8gTmFtZSBvdXIgbW9kdWxlXG4gIC5tb2R1bGUoJ2xpYnJhcnloM2xwV2lkZ2V0JywgW10pXG4gIC8vIEFkZCB0aGUgbGlicmFyeWgzbHAgdXJsIHRvIHRydXN0ZWQgdXJsIHNvdXJjZXNcbiAgLy8gc28gYW5ndWxhciBkb2Vzbid0IGJsb2NrIGl0IGZyb20gYW4gaWZyYW1lXG4gIC5maWx0ZXIoJ3RydXN0VXJsJywgWyckc2NlJywgZnVuY3Rpb24gKCRzY2UpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24odXJsKSB7XG4gICAgICBpZiAoL15odHRwKHMpPzpcXC9cXC8oLitcXC4pP3BjY1xcLmVkdS4rJC8udGVzdCh1cmwpKSB7XG4gICAgICAgIHJldHVybiAkc2NlLnRydXN0QXNSZXNvdXJjZVVybCh1cmwpO1xuICAgICAgfVxuICAgIH07XG4gIH1dKVxuICAvLyBDb250cm9sbGVyIGZvciB0aGUgY29tcG9uZW50IGJlbG93XG4gIC5jb250cm9sbGVyKCdsaWJyYXJ5aDNscFdpZGdldENvbnRyb2xsZXInLCBbJ2xpYnJhcnloM2xwV2lkZ2V0Q29uZmlnJywgJyRzY29wZScsIGZ1bmN0aW9uKGxpYnJhcnloM2xwV2lkZ2V0Q29uZmlnLCAkc2NvcGUpIHtcbiAgICBjb25zdCBjdHJsID0gdGhpcztcbiAgICB0aGlzLiRvbkluaXQgPSAoKSA9PiB7XG4gICAgICAkc2NvcGUuY29uZmlnID0gbGlicmFyeWgzbHBXaWRnZXRDb25maWc7XG4gICAgICAvLyBEbyBmYWNldHMgZXhpc3Q/XG4gICAgICAkc2NvcGUuZmFjZXRzRXhpc3QgPSAoKCkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHJldHVybiAoY3RybC5wYXJlbnRDdHJsLnNlYXJjaFNlcnZpY2UuZmFjZXRTZXJ2aWNlLnJlc3VsdHMubGVuZ3RoID4gMCk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0pKCk7XG4gICAgICAvLyBBZGQgdGhlIGJvdHRvbSBwYWRkaW5nIGNsYXNzIGlmIHRoZXJlIGFyZSBmYWNldHNcbiAgICAgICRzY29wZS5ib3R0b21QYWRkaW5nID0geyBbXCJjaGF0LWJvdHRvbS1wYWRkaW5nXCJdOiAkc2NvcGUuZmFjZXRzRXhpc3QgfTtcbiAgICB9O1xuICB9XSlcbiAgLmNvbXBvbmVudCgncHJtRXhwbG9yZU1haW5BZnRlcicsIHtcbiAgICBiaW5kaW5nczoge1xuICAgICAgcGFyZW50Q3RybDogJzwnXG4gICAgfSxcbiAgICBjb250cm9sbGVyOiAnbGlicmFyeWgzbHBXaWRnZXRDb250cm9sbGVyJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnV0dG9uIGNoYXQtdGFiIHNzLWNoYXQganMtdG9nZ2xlLWNoYXRcIiBuZy1jbGFzcz1cImJvdHRvbVBhZGRpbmdcIiBuZy1pbml0PVwic2hvd0NoYXRXaWRnZXQgPSBmYWxzZVwiIG5nLWNsaWNrPVwic2hvd0NoYXRXaWRnZXQgPSAhc2hvd0NoYXRXaWRnZXRcIj5cbiAgICAgICAgICAgICAgICA8cHJtLWljb24gc3R5bGU9XCJ6LWluZGV4OjFcIiBpY29uLXR5cGU9XCJzdmdcIiBzdmctaWNvbi1zZXQ9XCJ7e2NvbmZpZy5pY29uLnNldH19XCIgaWNvbi1kZWZpbml0aW9uPVwie3tjb25maWcuaWNvbi5pY29ufX1cIj48L3BybS1pY29uPlxuICAgICAgICAgICAgICAgIHt7Y29uZmlnLnByb21wdH19XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2hhdC1mcmFtZS13cmFwXCIgbmctY2xhc3M9XCJib3R0b21QYWRkaW5nXCIgbmctc2hvdz1cInNob3dDaGF0V2lkZ2V0XCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImNoYXQtY2xvc2Ugc3MtaWNvbiBqcy10b2dnbGUtY2hhdFwiIHRpdGxlPVwiQ2xvc2UgY2hhdCB3aW5kb3dcIiBuZy1jbGljaz1cInNob3dDaGF0V2lkZ2V0ID0gIXNob3dDaGF0V2lkZ2V0XCI+JnRpbWVzOzwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxpZnJhbWUgY2xhc3M9XCJjaGF0LWZyYW1lXCIgbmctc3JjPVwie3tjb25maWcudXJsIHwgdHJ1c3RVcmx9fVwiIGZyYW1lYm9yZGVyPVwiMFwiPjwvaWZyYW1lPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgYFxuICB9KTtcbiIsInJlcXVpcmUoJy4vanMvc2VhcmNoLWJhci1zdWItbWVudS5tb2R1bGUuanMnKVxubW9kdWxlLmV4cG9ydHMgPSAnc2VhcmNoQmFyU3ViTWVudSdcbiIsImFuZ3VsYXJcbiAgLm1vZHVsZSgnc2VhcmNoQmFyU3ViTWVudScsIFtdKVxuICAuY29udHJvbGxlcignc2VhcmNoQmFyU3ViTWVudUNvbnRyb2xsZXInLCBbJ3NlYXJjaEJhclN1Yk1lbnVJdGVtcycsICckc2NvcGUnLCAnJGZpbHRlcicsIGZ1bmN0aW9uKGl0ZW1zLCAkc2NvcGUsICRmaWx0ZXIpIHtcbiAgICB0aGlzLiRvbkluaXQgPSAoKSA9PiB7XG4gICAgICAkc2NvcGUuaXRlbXMgPSBpdGVtcztcbiAgICB9XG4gICAgJHNjb3BlLnRyYW5zbGF0ZSA9IChvcmlnaW5hbCkgPT4ge1xuICAgICAgcmV0dXJuIG9yaWdpbmFsLnJlcGxhY2UoL1xceyguKylcXH0vZywgKG1hdGNoLCBwMSkgPT4gJGZpbHRlcigndHJhbnNsYXRlJykocDEpKTtcbiAgICB9XG4gICAgJHNjb3BlLmdvVG9VcmwgPSAodXJsKSA9PiB7XG4gICAgICB3aW5kb3cub3Blbih1cmwsICdfYmxhbmsnKTtcbiAgICB9XG4gIH1dKVxuICAuY29tcG9uZW50KCdzZWFyY2hCYXJTdWJNZW51Jywge1xuICAgIGNvbnRyb2xsZXI6ICdzZWFyY2hCYXJTdWJNZW51Q29udHJvbGxlcicsXG4gICAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwibGF5b3V0LWFsaWduLWVuZC1jZW50ZXIgbGF5b3V0LXJvdyBmbGV4IHNlYXJjaC1iYXItc3ViLW1lbnVcIj5cbiAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICA8bGkgbmctcmVwZWF0PVwiaXRlbSBpbiBpdGVtc1wiPlxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBkYXRhLWhyZWY9XCJ7eyB0cmFuc2xhdGUoaXRlbS5hY3Rpb24pIH19XCIgYXJpYS1sYWJlbD1cInt7IHRyYW5zbGF0ZShpdGVtLmRlc2NyaXB0aW9uKSB9fVwiIG5nLWNsaWNrPVwiZ29Ub1VybCh0cmFuc2xhdGUoaXRlbS5hY3Rpb24pKVwiIGNsYXNzPVwiYnV0dG9uLXdpdGgtaWNvbiB6ZXJvLW1hcmdpbiBtZC1idXR0b24gbWQtc21hbGwge3tpdGVtLmNzc0NsYXNzZXN9fVwiIHR5cGU9XCJidXR0b25cIj5cbiAgICAgICAgICAgICAgICAgICAgPG1kLXRvb2x0aXAgbWQtZGlyZWN0aW9uPVwiYm90dG9tXCIgbWQtZGVsYXk9XCI1MDBcIj57eyB0cmFuc2xhdGUoaXRlbS5kZXNjcmlwdGlvbikgfX08L21kLXRvb2x0aXA+PHBybS1pY29uIHN0eWxlPVwiei1pbmRleDoxXCIgaWNvbi10eXBlPVwic3ZnXCIgc3ZnLWljb24tc2V0PVwie3tpdGVtLmljb24uc2V0fX1cIiBpY29uLWRlZmluaXRpb249XCJ7e2l0ZW0uaWNvbi5pY29ufX1cIj48L3BybS1pY29uPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInNlYXJjaC1iYXItc3ViLW1lbnUtaXRlbVwiIG5nLWNsYXNzPVwiKGl0ZW0uc2hvd194cykgPyAnJyA6ICdoaWRlLXhzJ1wiPnt7IHRyYW5zbGF0ZShpdGVtLm5hbWUpIH19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgIDwvZGl2PmBcblxuICB9KTtcbiIsIid1c2Ugc3RyaWN0JztcblxuYW5ndWxhci5tb2R1bGUoJ3RvZ2dsZUluc3RpdHV0aW9ucycsIFtdKTtcblxuYW5ndWxhci5tb2R1bGUoJ3RvZ2dsZUluc3RpdHV0aW9ucycpLmNvbXBvbmVudCgndG9nZ2xlSW5zdGl0dXRpb25zJywge1xuICBiaW5kaW5nczoge1xuICAgIHN0YXJ0SGlkZGVuOiAnPCdcbiAgfSxcbiAgdGVtcGxhdGU6ICdcXG4gICAgPG1kLWJ1dHRvbiBjbGFzcz1cIm1kLXJhaXNlZFwiIG5nLWNsaWNrPVwiJGN0cmwudG9nZ2xlTGlicygpXCIgaWQ9XCJzdW1taXRCdXR0b25cIiBhcmlhLWNvbnRyb2xzPVwic3VtbWl0TGlua3NcIiBhcmlhLWV4cGFuZGVkPWZhbHNlIGFyaWEtbGFiZWw9XCJTaG93L0hpZGUgU3VtbWl0IExpYnJhcmllc1wiPlxcbiAgICAgICAge3skY3RybC5zaG93TGlicyA/IFxcJ0hpZGUgU3VtbWl0IExpYnJhcmllc1xcJyA6IFxcJ1Nob3cgU3VtbWl0IExpYnJhcmllc1xcJ319XFxuICAgICAgPHNwYW4gYXJpYS1oaWRkZW49dHJ1ZT57eyRjdHJsLnNob3dMaWJzID8gXFwnJmxhcXVvO1xcJyA6IFxcJyZyYXF1bztcXCd9fTwvc3Bhbj5cXG4gICAgPC9tZC1idXR0b24+JyxcbiAgY29udHJvbGxlcjogZnVuY3Rpb24gY29udHJvbGxlcigpIHtcbiAgICB0aGlzLiRvbkluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB0aGlzLnNob3dMaWJzID0gdGhpcy5zdGFydEhpZGRlbiA9PT0gZmFsc2UgPyB0cnVlIDogZmFsc2U7XG4gICAgICB0aGlzLmJ1dHRvbiA9IGFuZ3VsYXIuZWxlbWVudChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdwcm0tYWxtYS1tb3JlLWluc3QtYWZ0ZXIgYnV0dG9uJykpO1xuICAgICAgdGhpcy50YWJzID0gYW5ndWxhci5lbGVtZW50KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3BybS1hbG1hLW1vcmUtaW5zdCBtZC10YWJzJykpO1xuICAgICAgdGhpcy50YWJzLmF0dHIoJ2lkJywgJ3N1bW1pdExpbmtzJyk7XG4gICAgICB0aGlzLmJ1dHRvbi5wYXJlbnQoKS5hZnRlcih0aGlzLnRhYnMpO1xuICAgICAgaWYgKCF0aGlzLnNob3dMaWJzKSB0aGlzLnRhYnMuYWRkQ2xhc3MoJ2hpZGUnKTtcbiAgICB9O1xuICAgIHRoaXMudG9nZ2xlTGlicyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoaXMuc2hvd0xpYnMgPSAhdGhpcy5zaG93TGlicztcbiAgICAgIHRoaXMudGFicy5oYXNDbGFzcygnaGlkZScpID8gdGhpcy50YWJzLnJlbW92ZUNsYXNzKCdoaWRlJykgJiYgdGhpcy5idXR0b24uYXR0cignYXJpYS1leHBhbmRlZCcsIHRydWUpIDogdGhpcy50YWJzLmFkZENsYXNzKCdoaWRlJykgJiYgdGhpcy5idXR0b24uYXR0cignYXJpYS1leHBhbmRlZCcsIGZhbHNlKTtcbiAgICB9O1xuICB9XG59KTsiLCJyZXF1aXJlKCcuL2Rpc3QvbW9kdWxlLmpzJylcbm1vZHVsZS5leHBvcnRzID0gJ3RvZ2dsZUluc3RpdHV0aW9ucydcbiJdfQ==
