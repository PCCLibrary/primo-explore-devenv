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
    url: 'https://libraryh3lp.com/chat/pcc-ask-a-librarian@chat.libraryh3lp.com?skin=28248&title=Chat+With+A+Librarian&identity=PCC',
    fallback: 'https://www.questionpoint.org/crs/qwidgetV4/js/qwidget.bootstrapnj.js?langcode=1&instid=13961&skin=blue&size=standard',
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
        return function(url,fallback) {
          // if (/^http(s)?:\/\/(.+\.)?libraryh3lp\.com.+$/.test(url)) {
            return $sce.trustAsResourceUrl(fallback);
          // }
        };
    }])
  // Controller for the component below
  .controller('libraryh3lpWidgetController', ['libraryh3lpWidgetConfig', '$scope', function(libraryh3lpWidgetConfig, $scope) {
    this.$onInit = () => {
      $scope.config = libraryh3lpWidgetConfig;
      $scope.parentCtrl = this.parentCtrl;
    }
    // Do facets exist?
    $scope.facetsExist = () => {
      try {
        return ($scope.parentCtrl.searchService.facetService.results.length > 0);
      } catch (e) {
        return false;
      }
    }
    // Add the bottom padding class if there are facets
    $scope.bottomPadding = () => {
      if ($scope.facetsExist()) {
        return "chat-bottom-padding";
      }
    }
  }])
  .component('prmExploreMainAfter', {
    bindings: {
      parentCtrl: '<'
    },
    controller: 'libraryh3lpWidgetController',
    template: `
              <button class="button chat-tab ss-chat js-toggle-chat" ng-class="bottomPadding()" ng-init="showChatWidget = false" ng-click="showChatWidget = !showChatWidget">
                <prm-icon style="z-index:1" icon-type="svg" svg-icon-set="{{config.icon.set}}" icon-definition="{{config.icon.icon}}"></prm-icon>
                {{config.prompt}}
              </button>
              <div class="chat-frame-wrap" ng-class="bottomPadding()" ng-show="showChatWidget">
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJwcmltby1leHBsb3JlL2N1c3RvbS9QQ0NfTlVJL2pzL0xpbmtzSW5Qcm9maWxlLmpzIiwicHJpbW8tZXhwbG9yZS9jdXN0b20vUENDX05VSS9qcy9jbGlja2FibGVMb2dvVG9BbnlMaW5rLmpzIiwicHJpbW8tZXhwbG9yZS9jdXN0b20vUENDX05VSS9qcy9jdXN0b21BY3Rpb25zLmpzIiwicHJpbW8tZXhwbG9yZS9jdXN0b20vUENDX05VSS9qcy9saWJyYXJ5QWNjb3VudFF1ZXN0aW9ucy5qcyIsInByaW1vLWV4cGxvcmUvY3VzdG9tL1BDQ19OVUkvanMvbGlicmFyeWgzbHBXaWRnZXQuanMiLCJwcmltby1leHBsb3JlL2N1c3RvbS9QQ0NfTlVJL2pzL21haW4uanMiLCJwcmltby1leHBsb3JlL2N1c3RvbS9QQ0NfTlVJL2pzL3NlYXJjaEJhclN1Yk1lbnUuanMiLCJwcmltby1leHBsb3JlL2N1c3RvbS9QQ0NfTlVJL2pzL3ZpZXdOYW1lLmpzIiwicHJpbW8tZXhwbG9yZS9jdXN0b20vUENDX05VSS9ub2RlX21vZHVsZXMvcHJpbW8tZXhwbG9yZS1jbGlja2FibGUtbG9nby10by1hbnktbGluay9pbmRleC5qcyIsInByaW1vLWV4cGxvcmUvY3VzdG9tL1BDQ19OVUkvbm9kZV9tb2R1bGVzL3ByaW1vLWV4cGxvcmUtY2xpY2thYmxlLWxvZ28tdG8tYW55LWxpbmsvanMvY2xpY2thYmxlLWxvZ28tdG8tYW55LWxpbmsubW9kdWxlLmpzIiwicHJpbW8tZXhwbG9yZS9jdXN0b20vUENDX05VSS9ub2RlX21vZHVsZXMvcHJpbW8tZXhwbG9yZS1jdXN0b20tYWN0aW9ucy9pbmRleC5qcyIsInByaW1vLWV4cGxvcmUvY3VzdG9tL1BDQ19OVUkvbm9kZV9tb2R1bGVzL3ByaW1vLWV4cGxvcmUtY3VzdG9tLWFjdGlvbnMvanMvY3VzdG9tLWFjdGlvbnMubW9kdWxlLmpzIiwicHJpbW8tZXhwbG9yZS9jdXN0b20vUENDX05VSS9ub2RlX21vZHVsZXMvcHJpbW8tZXhwbG9yZS1jdXN0b20tbm8tc2VhcmNoLXJlc3VsdHMvaW5kZXguanMiLCJwcmltby1leHBsb3JlL2N1c3RvbS9QQ0NfTlVJL25vZGVfbW9kdWxlcy9wcmltby1leHBsb3JlLWN1c3RvbS1uby1zZWFyY2gtcmVzdWx0cy9qcy9jdXN0b20tbm8tc2VhcmNoLXJlc3VsdHMubW9kdWxlLmpzIiwicHJpbW8tZXhwbG9yZS9jdXN0b20vUENDX05VSS9ub2RlX21vZHVsZXMvcHJpbW8tZXhwbG9yZS1leHRlcm5hbC1zZWFyY2gvaW5kZXguanMiLCJwcmltby1leHBsb3JlL2N1c3RvbS9QQ0NfTlVJL25vZGVfbW9kdWxlcy9wcmltby1leHBsb3JlLWV4dGVybmFsLXNlYXJjaC9qcy9leHRlcm5hbC1zZWFyY2gubW9kdWxlLmpzIiwicHJpbW8tZXhwbG9yZS9jdXN0b20vUENDX05VSS9ub2RlX21vZHVsZXMvcHJpbW8tZXhwbG9yZS1saWJyYXJ5aDNscC13aWRnZXQvaW5kZXguanMiLCJwcmltby1leHBsb3JlL2N1c3RvbS9QQ0NfTlVJL25vZGVfbW9kdWxlcy9wcmltby1leHBsb3JlLWxpYnJhcnloM2xwLXdpZGdldC9qcy9saWJyYXJ5aDNscC13aWRnZXQubW9kdWxlLmpzIiwicHJpbW8tZXhwbG9yZS9jdXN0b20vUENDX05VSS9ub2RlX21vZHVsZXMvcHJpbW8tZXhwbG9yZS1zZWFyY2gtYmFyLXN1Yi1tZW51L2luZGV4LmpzIiwicHJpbW8tZXhwbG9yZS9jdXN0b20vUENDX05VSS9ub2RlX21vZHVsZXMvcHJpbW8tZXhwbG9yZS1zZWFyY2gtYmFyLXN1Yi1tZW51L2pzL3NlYXJjaC1iYXItc3ViLW1lbnUubW9kdWxlLmpzIiwicHJpbW8tZXhwbG9yZS9jdXN0b20vUENDX05VSS9ub2RlX21vZHVsZXMvcHJpbW8tZXhwbG9yZS10b2dnbGUtaW5zdGl0dXRpb25zL2Rpc3QvbW9kdWxlLmpzIiwicHJpbW8tZXhwbG9yZS9jdXN0b20vUENDX05VSS9ub2RlX21vZHVsZXMvcHJpbW8tZXhwbG9yZS10b2dnbGUtaW5zdGl0dXRpb25zL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQTtBQUNBO0FBREEsQ0FFSyxNQUZMLENBRVksZ0JBRlosRUFFOEIsRUFGOUI7QUFHSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEosQ0FRSyxTQVJMLENBUWUsZUFSZixFQVFnQztBQUN4QixjQUFVO0FBQ04sb0JBQVk7QUFETixLQURjO0FBSXhCO0FBQ0E7QUFMd0IsQ0FSaEM7O0FBMkJBLE9BQU8sT0FBUCxHQUFpQixnQkFBakI7Ozs7Ozs7O0FDM0JPLElBQUksNERBQTBCO0FBQ25DLFFBQU0seUJBRDZCO0FBRW5DLFVBQVE7QUFDTixTQUFLLDZCQURDO0FBRU4sYUFBUztBQUZIO0FBRjJCLENBQTlCOzs7Ozs7OztBQ0FBLElBQUksb0RBQXNCO0FBQzdCLFVBQU0sZUFEdUI7QUFFN0IsWUFBUSxDQUNKO0FBQ0ksY0FBTSxjQURWO0FBRUkscUJBQWEsNEJBRmpCO0FBR0ksY0FBTSxVQUhWO0FBSUksY0FBTTtBQUNGLGlCQUFLLGVBREg7QUFFRixrQkFBTTtBQUZKLFNBSlY7QUFRSSxnQkFBUTtBQVJaLEtBREk7QUFGcUIsQ0FBMUI7Ozs7O0FDQVA7QUFDQTtBQURBLENBRUssTUFGTCxDQUVZLHlCQUZaLEVBRXVDLEVBRnZDO0FBR0k7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBKLENBUUssU0FSTCxDQVFlLG1DQVJmLEVBUW9EO0FBQzVDLGNBQVU7QUFDTixvQkFBWTtBQUROLEtBRGtDO0FBSTVDO0FBQ0E7QUFMNEMsQ0FScEQ7O0FBMENBLE9BQU8sT0FBUCxHQUFpQix5QkFBakI7Ozs7Ozs7O0FDMUNPLElBQUksNERBQTBCO0FBQ25DLFFBQU0seUJBRDZCO0FBRW5DLFVBQVE7QUFDTixTQUFLLDJIQURDO0FBRU4sY0FBVSx1SEFGSjtBQUdOLFlBQVEsTUFIRjtBQUlOLFVBQU07QUFDSixXQUFLLGVBREQ7QUFFSixZQUFNO0FBRkY7QUFK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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqRUE7QUFDQTtBQUNBOztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakRBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZCQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfXJldHVybiBlfSkoKSIsImFuZ3VsYXJcbi8vIE5hbWUgb3VyIG1vZHVsZVxuICAgIC5tb2R1bGUoJ2xpbmtzSW5Qcm9maWxlJywgW10pXG4gICAgLy8gLmNvbnRyb2xsZXIoJ2xpbmtzSW5Qcm9maWxlQ29udHJvbGxlcicsIFsnJHNjb3BlJywgZnVuY3Rpb24oICRzY29wZSApIHtcbiAgICAvLyAgICAgdGhpcy4kb25Jbml0ID0gKCkgPT4ge1xuICAgIC8vICAgICAgICAgJHNjb3BlLnBhcmVudEN0cmwgPSB0aGlzLnBhcmVudEN0cmw7XG4gICAgLy8gICAgIH1cbiAgICAvLyB9XSlcbiAgICAuY29tcG9uZW50KCdwcm1GaW5lc0FmdGVyJywge1xuICAgICAgICBiaW5kaW5nczoge1xuICAgICAgICAgICAgcGFyZW50Q3RybDogJzwnXG4gICAgICAgIH0sXG4gICAgICAgIC8vIGNvbnRyb2xsZXI6ICdsaW5rc0luUHJvZmlsZUNvbnRyb2xsZXInLFxuICAgICAgICB0ZW1wbGF0ZTogYFxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxheW91dC1yb3dcIj48YVxuICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3NlY3VyZS50b3VjaG5ldC5uZXQvQzIxMjQ5X3VzdG9yZXMvd2ViL3N0b3JlX21haW4uanNwP1NUT1JFSUQ9MjQmU0lOR0xFU1RPUkU9dHJ1ZVwiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJtZC1idXR0b24gbWQtcmFpc2VkIG1kLWFjY2VudFwiXG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIlBheSBmaW5lcyBvbmxpbmVcIlxuICAgICAgICAgICAgICA+PHNwYW4+UGF5IGZpbmVzIG9ubGluZTwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9hPjwvZGl2PlxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxheW91dC1yb3dcIj48YSBocmVmPVwiaHR0cHM6Ly93d3cucGNjLmVkdS9saWJyYXJ5L3NlcnZpY2VzL2JvcnJvd2luZy9saWJyYXJ5LWZpbmVzL1wiPlNlZSBvdGhlciB3YXlzIHRvIGRlYWwgd2l0aCB5b3VyIGZpbmVzLjwvYT48L2Rpdj5cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIGBcbiAgICB9KTtcblxubW9kdWxlLmV4cG9ydHMgPSAnbGlua3NJblByb2ZpbGUnXG4iLCJleHBvcnQgbGV0IGNsaWNrYWJsZUxvZ29MaW5rQ29uZmlnID0ge1xuICBuYW1lOiAnY2xpY2thYmxlTG9nb0xpbmtDb25maWcnLFxuICBjb25maWc6IHtcbiAgICB1cmw6ICdodHRwczovL3d3dy5wY2MuZWR1L2xpYnJhcnknLFxuICAgIGFsdFRleHQ6ICdQQ0MgTGlicmFyeSdcbiAgfVxufTtcbiIsImV4cG9ydCBsZXQgY3VzdG9tQWN0aW9uc0NvbmZpZyA9IHtcbiAgICBuYW1lOiAnY3VzdG9tQWN0aW9ucycsXG4gICAgY29uZmlnOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6IFwiUmVwb3J0IElzc3VlXCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJSZXBvcnQgYW4gaXNzdWUgb3IgcHJvYmxlbVwiLFxuICAgICAgICAgICAgdHlwZTogJ3RlbXBsYXRlJyxcbiAgICAgICAgICAgIGljb246IHtcbiAgICAgICAgICAgICAgICBzZXQ6ICdjb21tdW5pY2F0aW9uJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnaWNfY29tbWVudF8yNHB4J1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGFjdGlvbjogXCJodHRwczovL3d3dy5wY2MuZWR1L2xpYnJhcnkvYWJvdXQvcGVvcGxlL2NvbnRhY3QvcmVwb3J0LWlzc3Vlcy9cIlxuICAgICAgICB9XG4gICAgXVxufTtcbiIsImFuZ3VsYXJcbi8vIE5hbWUgb3VyIG1vZHVsZVxuICAgIC5tb2R1bGUoJ2xpYnJhcnlBY2NvdW50UXVlc3Rpb25zJywgW10pXG4gICAgLy8gLmNvbnRyb2xsZXIoJ2xpYnJhcnlBY2NvdW50UXVlc3Rpb25zQ29udHJvbGxlcicsIFsnJHNjb3BlJywgZnVuY3Rpb24oICRzY29wZSApIHtcbiAgICAvLyAgICAgdGhpcy4kb25Jbml0ID0gKCkgPT4ge1xuICAgIC8vICAgICAgICAgJHNjb3BlLnBhcmVudEN0cmwgPSB0aGlzLnBhcmVudEN0cmw7XG4gICAgLy8gICAgIH1cbiAgICAvLyB9XSlcbiAgICAuY29tcG9uZW50KCdwcm1NZXNzYWdlc0FuZEJsb2Nrc092ZXJ2aWV3QWZ0ZXInLCB7XG4gICAgICAgIGJpbmRpbmdzOiB7XG4gICAgICAgICAgICBwYXJlbnRDdHJsOiAnPCdcbiAgICAgICAgfSxcbiAgICAgICAgLy8gY29udHJvbGxlcjogJ2xpYnJhcnlBY2NvdW50UXVlc3Rpb25zQ29udHJvbGxlcicsXG4gICAgICAgIHRlbXBsYXRlOlxuICAgICAgICAgICAgYFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRpbGVzLWdyaWQtdGlsZVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aWxlLWNvbnRlbnQgbGF5b3V0LWNvbHVtblwiIGxheW91dD1cImNvbHVtblwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGlsZS1oZWFkZXIgbGF5b3V0LWNvbHVtblwiIGxheW91dD1cImNvbHVtblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBsYXlvdXQ9XCJyb3dcIiBsYXlvdXQtYWxpZ249XCJzcGFjZS1iZXR3ZWVuXCIgY2xhc3M9XCJsYXlvdXQtYWxpZ24tc3BhY2UtYmV0d2Vlbi1zdHJldGNoIGxheW91dC1yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJoZWFkZXItbGluayBsaWdodC10ZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPk1vcmUgUXVlc3Rpb25zPzwvc3Bhbj4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGxheW91dD1cImNvbHVtblwiIGxheW91dC1hbGlnbj1cImNlbnRlciBjZW50ZXJcIiBsYXlvdXQtcGFkZGluZz1cIlwiIGxheW91dC1tYXJnaW49XCJcIiBjbGFzcz1cImxheW91dC1tYXJnaW4gbGF5b3V0LXBhZGRpbmcgbGF5b3V0LWFsaWduLWNlbnRlci1jZW50ZXIgbGF5b3V0LWNvbHVtblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cucGNjLmVkdS9saWJyYXJ5L3NlcnZpY2VzL2JvcnJvd2luZy9saWJyYXJ5LWFjY291bnQtcXVlc3Rpb25zL1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJtZC1idXR0b24gbWQtcmFpc2VkIG1kLWFjY2VudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkxpYnJhcnkgQWNjb3VudCBRdWVzdGlvbnNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkxpYnJhcnkgQWNjb3VudCBRdWVzdGlvbnM8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPCEtLS0tPlxuICAgICAgICAgICAgPCEtLS0tPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBgXG4gICAgfSk7XG5cbm1vZHVsZS5leHBvcnRzID0gJ2xpYnJhcnlBY2NvdW50UXVlc3Rpb25zJ1xuIiwiZXhwb3J0IGxldCBsaWJyYXJ5aDNscFdpZGdldENvbmZpZyA9IHtcbiAgbmFtZTogJ2xpYnJhcnloM2xwV2lkZ2V0Q29uZmlnJyxcbiAgY29uZmlnOiB7XG4gICAgdXJsOiAnaHR0cHM6Ly9saWJyYXJ5aDNscC5jb20vY2hhdC9wY2MtYXNrLWEtbGlicmFyaWFuQGNoYXQubGlicmFyeWgzbHAuY29tP3NraW49MjgyNDgmdGl0bGU9Q2hhdCtXaXRoK0ErTGlicmFyaWFuJmlkZW50aXR5PVBDQycsXG4gICAgZmFsbGJhY2s6ICdodHRwczovL3d3dy5xdWVzdGlvbnBvaW50Lm9yZy9jcnMvcXdpZGdldFY0L2pzL3F3aWRnZXQuYm9vdHN0cmFwbmouanM/bGFuZ2NvZGU9MSZpbnN0aWQ9MTM5NjEmc2tpbj1ibHVlJnNpemU9c3RhbmRhcmQnLFxuICAgIHByb21wdDogJ0NoYXQnLFxuICAgIGljb246IHtcbiAgICAgIHNldDogJ2NvbW11bmljYXRpb24nLFxuICAgICAgaWNvbjogJ2ljX2ZvcnVtXzI0cHgnXG4gICAgfVxuICB9XG59O1xuIiwiaW1wb3J0ICdwcmltby1leHBsb3JlLWNsaWNrYWJsZS1sb2dvLXRvLWFueS1saW5rJztcbmltcG9ydCAncHJpbW8tZXhwbG9yZS1saWJyYXJ5aDNscC13aWRnZXQnO1xuaW1wb3J0ICdwcmltby1leHBsb3JlLXNlYXJjaC1iYXItc3ViLW1lbnUnO1xuaW1wb3J0ICdwcmltby1leHBsb3JlLXRvZ2dsZS1pbnN0aXR1dGlvbnMnO1xuaW1wb3J0ICdwcmltby1leHBsb3JlLWN1c3RvbS1hY3Rpb25zJztcbmltcG9ydCAncHJpbW8tZXhwbG9yZS1jdXN0b20tbm8tc2VhcmNoLXJlc3VsdHMnO1xuaW1wb3J0ICdwcmltby1leHBsb3JlLWV4dGVybmFsLXNlYXJjaCc7XG5cblxuaW1wb3J0IHsgdmlld05hbWUgfSBmcm9tICcuL3ZpZXdOYW1lJztcbmltcG9ydCB7IGNsaWNrYWJsZUxvZ29MaW5rQ29uZmlnIH0gZnJvbSAnLi9jbGlja2FibGVMb2dvVG9BbnlMaW5rJztcbmltcG9ydCB7IGxpYnJhcnloM2xwV2lkZ2V0Q29uZmlnIH0gZnJvbSAnLi9saWJyYXJ5aDNscFdpZGdldCc7XG5pbXBvcnQgeyBzZWFyY2hCYXJTdWJNZW51SXRlbXNDb25maWcgfSBmcm9tICcuL3NlYXJjaEJhclN1Yk1lbnUnO1xuaW1wb3J0IHsgY3VzdG9tQWN0aW9uc0NvbmZpZyB9IGZyb20gJy4vY3VzdG9tQWN0aW9ucyc7XG5pbXBvcnQgeyBsaW5rc0luUHJvZmlsZSB9IGZyb20gXCIuL0xpbmtzSW5Qcm9maWxlXCI7XG5pbXBvcnQgeyBsaWJyYXJ5QWNjb3VudFF1ZXN0aW9ucyB9IGZyb20gJy4vbGlicmFyeUFjY291bnRRdWVzdGlvbnMnXG5cblxubGV0IGFwcCA9IGFuZ3VsYXIubW9kdWxlKCd2aWV3Q3VzdG9tJywgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjbGlja2FibGVMb2dvVG9BbnlMaW5rJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnbGlicmFyeWgzbHBXaWRnZXQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdzZWFyY2hCYXJTdWJNZW51JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndG9nZ2xlSW5zdGl0dXRpb25zJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY3VzdG9tQWN0aW9ucycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2N1c3RvbU5vU2VhcmNoUmVzdWx0cycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2xpbmtzSW5Qcm9maWxlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnbGlicmFyeUFjY291bnRRdWVzdGlvbnMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdleHRlcm5hbFNlYXJjaCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSk7XG5cbmFwcFxuICAuY29uc3RhbnQoY3VzdG9tQWN0aW9uc0NvbmZpZy5uYW1lLCBjdXN0b21BY3Rpb25zQ29uZmlnLmNvbmZpZylcbiAgLmNvbnN0YW50KGNsaWNrYWJsZUxvZ29MaW5rQ29uZmlnLm5hbWUsIGNsaWNrYWJsZUxvZ29MaW5rQ29uZmlnLmNvbmZpZylcbiAgLmNvbnN0YW50KGxpYnJhcnloM2xwV2lkZ2V0Q29uZmlnLm5hbWUsIGxpYnJhcnloM2xwV2lkZ2V0Q29uZmlnLmNvbmZpZylcbiAgLmNvbnN0YW50KHNlYXJjaEJhclN1Yk1lbnVJdGVtc0NvbmZpZy5uYW1lLCBzZWFyY2hCYXJTdWJNZW51SXRlbXNDb25maWcuY29uZmlnKVxuICAudmFsdWUoJ2N1c3RvbU5vU2VhcmNoUmVzdWx0c1RlbXBsYXRlVXJsJywgJ2N1c3RvbS8nK3ZpZXdOYW1lKycvaHRtbC9ub1NlYXJjaFJlc3VsdHMuaHRtbCcpXG4gIC5jb21wb25lbnQoJ3BybVNlYXJjaEJhckFmdGVyJywge1xuICAgIHRlbXBsYXRlOiAnPHNlYXJjaC1iYXItc3ViLW1lbnU+PC9zZWFyY2gtYmFyLXN1Yi1tZW51PidcbiAgfSlcbiAgLmNvbXBvbmVudCgncHJtQWxtYU1vcmVJbnN0QWZ0ZXInLCB7dGVtcGxhdGU6ICc8dG9nZ2xlLWluc3RpdHV0aW9ucyAvPid9KVxuICAgIC52YWx1ZSgnc2VhcmNoVGFyZ2V0cycsIFtcbiAgICAgICAge1xuICAgICAgICBcIm5hbWVcIjogXCJXb3JsZGNhdFwiLFxuICAgICAgICBcInVybFwiOiBcImh0dHBzOi8vcGNjLm9uLndvcmxkY2F0Lm9yZy9zZWFyY2g/XCIsXG4gICAgICAgIFwiaW1nXCI6IFwiaHR0cHM6Ly93d3cucGNjLmVkdS9saWJyYXJ5L3ByaW1vL2ltYWdlcy93b3JsZGNhdC1sb2dvLnBuZ1wiLFxuICAgICAgICAgICAgbWFwcGluZzogZnVuY3Rpb24gKHF1ZXJpZXMsIGZpbHRlcnMpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBxdWVyeV9tYXBwaW5ncyA9IHtcbiAgICAgICAgICAgICAgICAgICAgJ2FueSc6ICdrdycsXG4gICAgICAgICAgICAgICAgICAgICd0aXRsZSc6ICd0aScsXG4gICAgICAgICAgICAgICAgICAgICdjcmVhdG9yJzogJ2F1JyxcbiAgICAgICAgICAgICAgICAgICAgJ3N1YmplY3QnOiAnc3UnLFxuICAgICAgICAgICAgICAgICAgICAnaXNibic6ICdibicsXG4gICAgICAgICAgICAgICAgICAgICdpc3NuJzogJ24yJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ3F1ZXJ5U3RyaW5nPScgKyBxdWVyaWVzLm1hcChwYXJ0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0ZXJtcyA9IHBhcnQuc3BsaXQoJywnKVxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHR5cGUgPSBxdWVyeV9tYXBwaW5nc1t0ZXJtc1swXV0gfHwgJ2t3J1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHN0cmluZyA9IHRlcm1zWzJdIHx8ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgam9pbiA9IHRlcm1zWzNdIHx8ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHlwZSArICc6JyArIHN0cmluZyArICcgJyArIGpvaW4gKyAnICdcbiAgICAgICAgICAgICAgICAgICAgfSkuam9pbignJylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICcnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcIm5hbWVcIjogXCJHb29nbGUgU2Nob2xhclwiLFxuICAgICAgICAgICAgXCJ1cmxcIjogXCJodHRwczovL3NjaG9sYXIuZ29vZ2xlLmNvbS9zY2hvbGFyP3E9XCIsXG4gICAgICAgICAgICBcImltZ1wiOiBcImh0dHBzOi8vd3d3LnBjYy5lZHUvbGlicmFyeS9wcmltby9pbWFnZXMvZ29vZ2xlX2xvZ28ucG5nXCIsXG4gICAgICAgICAgICBtYXBwaW5nOiBmdW5jdGlvbiAocXVlcmllcywgZmlsdGVycykge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBxdWVyaWVzLm1hcChwYXJ0ID0+IHBhcnQuc3BsaXQoXCIsXCIpWzJdIHx8IFwiXCIpLmpvaW4oJyAnKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJydcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIkVCU0NPIFNlYXJjaFwiLFxuICAgICAgICAgICAgXCJ1cmxcIjogXCJodHRwczovL2xpYnByb3h5LnBjYy5lZHUvbG9naW4/dXJsPWh0dHA6Ly9zZWFyY2guZWJzY29ob3N0LmNvbS9sb2dpbi5hc3B4P2RpcmVjdD10cnVlJnNpdGU9ZWhvc3QtbGl2ZSZzY29wZT1zaXRlJnR5cGU9MSZkYj1hcGgmZGI9ZjVoJm1vZGU9Ym9vbCZsYW5nPWVuJmNsaTA9RlQmY2x2MD1ZJmJxdWVyeT1cIixcbiAgICAgICAgICAgIFwiaW1nXCI6IFwiaHR0cHM6Ly93d3cucGNjLmVkdS9saWJyYXJ5L3ByaW1vL2ltYWdlcy9lYnNjby1zZWFyY2gucG5nXCIsXG4gICAgICAgICAgICBtYXBwaW5nOiBmdW5jdGlvbiAocXVlcmllcywgZmlsdGVycykge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBxdWVyaWVzLm1hcChwYXJ0ID0+IHBhcnQuc3BsaXQoXCIsXCIpWzJdIHx8IFwiXCIpLmpvaW4oJyAnKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJydcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICBdKVxuXG5cblxuXG5cbiIsImV4cG9ydCBsZXQgc2VhcmNoQmFyU3ViTWVudUl0ZW1zQ29uZmlnID0ge1xuICBuYW1lOiAnc2VhcmNoQmFyU3ViTWVudUl0ZW1zJyxcbiAgY29uZmlnOiBbXG4gICAge1xuICAgICAgbmFtZTogXCJSZXBvcnQgSXNzdWVcIixcbiAgICAgIGRlc2NyaXB0aW9uOiBcIlJlcG9ydCBhbiBpc3N1ZSBvciBwcm9ibGVtXCIsXG4gICAgICBhY3Rpb246IFwiaHR0cHM6Ly93d3cucGNjLmVkdS9saWJyYXJ5L2Fib3V0L3Blb3BsZS9jb250YWN0L3JlcG9ydC1pc3N1ZXMvXCIsXG4gICAgICBpY29uOiB7XG4gICAgICAgIHNldDogJ2NvbW11bmljYXRpb24nLFxuICAgICAgICBpY29uOiAnaWNfY29tbWVudF8yNHB4J1xuICAgICAgfVxuICAgIH1cbiAgXVxufTtcbiIsIi8vIHZpZFxuZXhwb3J0IGxldCB2aWV3TmFtZSA9IFwiUENDX05VSVwiO1xuIiwicmVxdWlyZSgnLi9qcy9jbGlja2FibGUtbG9nby10by1hbnktbGluay5tb2R1bGUuanMnKVxubW9kdWxlLmV4cG9ydHMgPSAnY2xpY2thYmxlTG9nb1RvQW55TGluaydcbiIsImFuZ3VsYXJcbiAgLm1vZHVsZSgnY2xpY2thYmxlTG9nb1RvQW55TGluaycsIFtdKVxuICAuY29udHJvbGxlcignY2xpY2thYmxlTG9nb1RvQW55TGlua0NvbnRyb2xsZXInLCBbJ2NsaWNrYWJsZUxvZ29MaW5rQ29uZmlnJywgJyRzY29wZScsICckZmlsdGVyJywgZnVuY3Rpb24oY2xpY2thYmxlTG9nb0xpbmtDb25maWcsICRzY29wZSwgJGZpbHRlcikge1xuICAgICRzY29wZS5jbGlja2FibGVMb2dvTGluayA9IGNsaWNrYWJsZUxvZ29MaW5rQ29uZmlnLnVybDtcbiAgICAkc2NvcGUuY2xpY2thYmxlTG9nb0FsdCA9IGNsaWNrYWJsZUxvZ29MaW5rQ29uZmlnLmFsdFRleHQ7XG4gICAgJHNjb3BlLmljb25MaW5rID0gdGhpcy5wYXJlbnRDdHJsLmljb25MaW5rXG4gICAgJHNjb3BlLnRyYW5zbGF0ZSA9IChvcmlnaW5hbCkgPT4ge1xuICAgICAgcmV0dXJuIG9yaWdpbmFsLnJlcGxhY2UoL1xceyguKylcXH0vZywgKG1hdGNoLCBwMSkgPT4gJGZpbHRlcigndHJhbnNsYXRlJykocDEpKTtcbiAgICB9XG4gIH1dKVxuICAuY29tcG9uZW50KCdwcm1Mb2dvQWZ0ZXInLCB7XG4gICAgYmluZGluZ3M6IHtcbiAgICAgIHBhcmVudEN0cmw6ICc8J1xuICAgIH0sXG4gICAgY29udHJvbGxlcjogJ2NsaWNrYWJsZUxvZ29Ub0FueUxpbmtDb250cm9sbGVyJyxcbiAgICB0ZW1wbGF0ZTogJzxkaXYgY2xhc3M9XCJwcm9kdWN0LWxvZ28gcHJvZHVjdC1sb2dvLWxvY2FsXCIgbGF5b3V0PVwicm93XCIgbGF5b3V0LWFsaWduPVwic3RhcnQgY2VudGVyXCIgbGF5b3V0LWZpbGwgaWQ9XCJiYW5uZXJcIiB0YWJpbmRleD1cIjBcIiByb2xlPVwiYmFubmVyXCI+JytcbiAgICAgICAgICAgICAgICAnPGEgbmctaHJlZj1cInt7IHRyYW5zbGF0ZShjbGlja2FibGVMb2dvTGluaykgfX1cIj48aW1nIGNsYXNzPVwibG9nby1pbWFnZVwiIG5nLWFsdD1cInt7IHRyYW5zbGF0ZShjbGlja2FibGVMb2dvQWx0KSB9fVwiIG5nLXNyYz1cInt7IGljb25MaW5rIH19XCIvPjwvYT4nK1xuICAgICAgICAgICAgICAnPC9kaXY+J1xuXG4gIH0pO1xuIiwicmVxdWlyZSgnLi9qcy9jdXN0b20tYWN0aW9ucy5tb2R1bGUuanMnKVxubW9kdWxlLmV4cG9ydHMgPSAnY3VzdG9tQWN0aW9ucydcbiIsImFuZ3VsYXJcbiAgLm1vZHVsZSgnY3VzdG9tQWN0aW9ucycsIFtdKVxuICAuY29tcG9uZW50KCdwcm1BY3Rpb25Db250YWluZXJBZnRlcicsIHtcbiAgICByZXF1aXJlOiB7IHBybUFjdGlvbkN0cmw6ICdecHJtQWN0aW9uTGlzdCcgfSxcbiAgICBjb250cm9sbGVyOiBbJ2N1c3RvbUFjdGlvbnNTZXJ2aWNlJywgJ2N1c3RvbUFjdGlvbnMnLCBmdW5jdGlvbiAoY3VzdG9tQWN0aW9uc1NlcnZpY2UsIGN1c3RvbUFjdGlvbnMpIHtcbiAgICAgIHRoaXMuJG9uSW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY3VzdG9tQWN0aW9uc1NlcnZpY2Uuc2V0Q29udHJvbGxlcih0aGlzLnBybUFjdGlvbkN0cmwpXG4gICAgICAgIGN1c3RvbUFjdGlvbnMubWFwKGFjdGlvbiA9PiBjdXN0b21BY3Rpb25zU2VydmljZS5hZGRBY3Rpb24oYWN0aW9uKSlcbiAgICAgIH1cbiAgICB9XVxuICB9KVxuICAuZmFjdG9yeSgnY3VzdG9tQWN0aW9uc1NlcnZpY2UnLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHNldENvbnRyb2xsZXI6IGZ1bmN0aW9uIChjb250cm9sbGVyKSB7XG4gICAgICAgIHRoaXMucHJtQWN0aW9uQ3RybCA9IGNvbnRyb2xsZXJcbiAgICAgIH0sXG4gICAgICBwcm9jZXNzQWN0aW9uOiBmdW5jdGlvbiAoYWN0aW9uKSB7XG4gICAgICAgIGFjdGlvbi5pY29ubmFtZSA9IGFjdGlvbi5uYW1lLnJlcGxhY2UoL1xccysvZywgJycpLFxuICAgICAgICBhY3Rpb24uc2x1ZyA9IGFjdGlvbi5uYW1lLnJlcGxhY2UoL1xccysvZywgJycpLnRvTG93ZXJDYXNlKCksXG4gICAgICAgIGFjdGlvbi5pbmRleCA9IE9iamVjdC5rZXlzKHRoaXMucHJtQWN0aW9uQ3RybC5hY3Rpb25MaXN0U2VydmljZS5hY3Rpb25zVG9JbmRleCkubGVuZ3RoIC0gMVxuICAgICAgICB0aGlzLnBybUFjdGlvbkN0cmwuYWN0aW9uTGFiZWxOYW1lc01hcFthY3Rpb24uc2x1Z10gPSBhY3Rpb24ubmFtZVxuICAgICAgICB0aGlzLnBybUFjdGlvbkN0cmwuYWN0aW9uSWNvbk5hbWVzTWFwW2FjdGlvbi5zbHVnXSA9IGFjdGlvbi5pY29ubmFtZVxuICAgICAgICB0aGlzLnBybUFjdGlvbkN0cmwuYWN0aW9uSWNvbnNbYWN0aW9uLmljb25uYW1lXSA9IHtcbiAgICAgICAgICBpY29uOiBhY3Rpb24uaWNvbi5uYW1lLFxuICAgICAgICAgIGljb25TZXQ6IGFjdGlvbi5pY29uLnNldCxcbiAgICAgICAgICB0eXBlOiBcInN2Z1wiXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFjdGlvblxuICAgICAgfSxcbiAgICAgIGFkZEFjdGlvbjogZnVuY3Rpb24gKGFjdGlvbikge1xuICAgICAgICBhY3Rpb24gPSB0aGlzLnByb2Nlc3NBY3Rpb24oYWN0aW9uKVxuICAgICAgICBpZiAoIXRoaXMucHJtQWN0aW9uQ3RybC5hY3Rpb25MaXN0U2VydmljZS5hY3Rpb25zVG9JbmRleFthY3Rpb24uc2x1Z10pIHtcbiAgICAgICAgICB0aGlzLnBybUFjdGlvbkN0cmwuYWN0aW9uTGlzdFNlcnZpY2UucmVxdWlyZWRBY3Rpb25zTGlzdFthY3Rpb24uaW5kZXhdID0gYWN0aW9uLnNsdWdcbiAgICAgICAgICB0aGlzLnBybUFjdGlvbkN0cmwuYWN0aW9uTGlzdFNlcnZpY2UuYWN0aW9uc1RvRGlzcGxheS51bnNoaWZ0KGFjdGlvbi5zbHVnKVxuICAgICAgICAgIHRoaXMucHJtQWN0aW9uQ3RybC5hY3Rpb25MaXN0U2VydmljZS5hY3Rpb25zVG9JbmRleFthY3Rpb24uc2x1Z10gPSBhY3Rpb24uaW5kZXhcbiAgICAgICAgfVxuICAgICAgICBpZiAoYWN0aW9uLnR5cGUgPT09ICd0ZW1wbGF0ZScpIHtcbiAgICAgICAgICAgIC8vIHByb2Nlc3MgeyB9IGluIHRlbXBsYXRlVmFyc1xuICAgICAgICAgICAgaWYgKGFjdGlvbi5oYXNPd25Qcm9wZXJ0eSgndGVtcGxhdGVWYXInKSkge1xuICAgICAgICAgICAgICAgIGFjdGlvbi5hY3Rpb24gPSBhY3Rpb24uYWN0aW9uLnJlcGxhY2UoL3tcXGR9L2csIChyKSA9PiBhY3Rpb24udGVtcGxhdGVWYXJbci5yZXBsYWNlKC9bXlxcZF0vZywgJycpXSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIHJlcGxhY2UgYSByZWNvcmRJZCBvY2N1cmVuY2VcbiAgICAgICAgICAgIGFjdGlvbi5hY3Rpb24gPSBhY3Rpb24uYWN0aW9uLnJlcGxhY2UoL3tyZWNvcmRJZH0vZywgKHIpID0+IHRoaXMucHJtQWN0aW9uQ3RybC5pdGVtLnBueC5zZWFyY2gucmVjb3JkaWRbMF0pXG4gICAgICAgICAgICAvLyByZXBsYWNlIGEgcG54Lnh4eC54eHhbMF0gcGF0dGVybiBleC4gcG54LnNlYXJjaC5yZWNvcmRpZFswXVxuICAgICAgICAgICAgbGV0IHBueFByb3BlcnRpZXMgPSBhY3Rpb24uYWN0aW9uLm1hdGNoKC9cXHsocG54XFwuLio/KVxcfS9nKSB8fCBbXVxuICAgICAgICAgICAgcG54UHJvcGVydGllcy5mb3JFYWNoKChwKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHZhbHVlRm9yUCA9IHAucmVwbGFjZSgvW3t9XS9nLCAnJykuc3BsaXQoJy4nKS5yZWR1Y2UoKG8sIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBoID0gLyguKikoXFxbXFxkXFxdKS8uZXhlYyhpKVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGggaW5zdGFuY2VvZiBBcnJheSkgeyByZXR1cm4gb1toWzFdXVtoWzJdLnJlcGxhY2UoL1teXFxkXS9nLCAnJyldIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvW2ldXG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwgdGhpcy5wcm1BY3Rpb25DdHJsLml0ZW0pXG4gICAgICAgICAgICAgICAgYWN0aW9uLmFjdGlvbiA9IGFjdGlvbi5hY3Rpb24ucmVwbGFjZShwLCB2YWx1ZUZvclApXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIHRoaXMucHJtQWN0aW9uQ3RybC5hY3Rpb25MaXN0U2VydmljZS5vblRvZ2dsZVthY3Rpb24uc2x1Z10gPSAoKSA9PiB3aW5kb3cub3BlbihhY3Rpb24uYWN0aW9uLCAnX2JsYW5rJylcbiAgICAgIH1cbiAgICB9XG4gIH0pXG4iLCJyZXF1aXJlKCcuL2pzL2N1c3RvbS1uby1zZWFyY2gtcmVzdWx0cy5tb2R1bGUuanMnKVxubW9kdWxlLmV4cG9ydHMgPSAnY3VzdG9tTm9TZWFyY2hSZXN1bHRzJ1xuIiwiYW5ndWxhclxuICAubW9kdWxlKCdjdXN0b21Ob1NlYXJjaFJlc3VsdHMnLCBbXSlcbiAgLmNvbXBvbmVudCgncHJtTm9TZWFyY2hSZXN1bHRBZnRlcicsIHtcbiAgICBiaW5kaW5nczoge1xuICAgICAgcGFyZW50Q3RybDogJzwnXG4gICAgfSxcbiAgICB0ZW1wbGF0ZVVybDogWydjdXN0b21Ob1NlYXJjaFJlc3VsdHNUZW1wbGF0ZVVybCcsIGZ1bmN0aW9uIChjdXN0b21Ob1NlYXJjaFJlc3VsdHNUZW1wbGF0ZVVybCkge1xuICAgICAgcmV0dXJuIGN1c3RvbU5vU2VhcmNoUmVzdWx0c1RlbXBsYXRlVXJsO1xuICAgIH1dXG4gIH0pO1xuIiwicmVxdWlyZSgnLi9qcy9leHRlcm5hbC1zZWFyY2gubW9kdWxlLmpzJylcbm1vZHVsZS5leHBvcnRzID0gJ2V4dGVybmFsU2VhcmNoJ1xuIiwiYW5ndWxhclxuICAubW9kdWxlKCdleHRlcm5hbFNlYXJjaCcsIFtdKVxuICAudmFsdWUoJ3NlYXJjaFRhcmdldHMnLCBbXSlcbiAgLmNvbXBvbmVudCgncHJtRmFjZXRBZnRlcicsIHtcbiAgICAgIGJpbmRpbmdzOiB7IHBhcmVudEN0cmw6ICc8JyB9LFxuICAgICAgY29udHJvbGxlcjogWydleHRlcm5hbFNlYXJjaFNlcnZpY2UnLCBmdW5jdGlvbiAoZXh0ZXJuYWxTZWFyY2hTZXJ2aWNlKSB7XG4gICAgICAgIGV4dGVybmFsU2VhcmNoU2VydmljZS5jb250cm9sbGVyID0gdGhpcy5wYXJlbnRDdHJsXG4gICAgICAgIGV4dGVybmFsU2VhcmNoU2VydmljZS5hZGRFeHRTZWFyY2goKVxuICAgICAgfV1cbiAgfSlcbiAgLmNvbXBvbmVudCgncHJtUGFnZU5hdk1lbnVBZnRlcicsIHtcbiAgICBjb250cm9sbGVyOiBbJ2V4dGVybmFsU2VhcmNoU2VydmljZScsIGZ1bmN0aW9uIChleHRlcm5hbFNlYXJjaFNlcnZpY2UpIHtcbiAgICAgIGlmIChleHRlcm5hbFNlYXJjaFNlcnZpY2UuY29udHJvbGxlcikgZXh0ZXJuYWxTZWFyY2hTZXJ2aWNlLmFkZEV4dFNlYXJjaCgpXG4gICAgfV1cbiAgfSlcbiAgLmNvbXBvbmVudCgncHJtRmFjZXRFeGFjdEFmdGVyJywge1xuICAgICAgYmluZGluZ3M6IHsgcGFyZW50Q3RybDogJzwnIH0sXG4gICAgICB0ZW1wbGF0ZTogYFxuICAgICAgPGRpdiBuZy1pZj1cIm5hbWUgPT09ICdFeHRlcm5hbCBTZWFyY2gnXCI+XG4gICAgICAgICAgPGRpdiBuZy1oaWRlPVwiJGN0cmwucGFyZW50Q3RybC5mYWNldEdyb3VwLmZhY2V0R3JvdXBDb2xsYXBzZWRcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlY3Rpb24tY29udGVudCBhbmltYXRlLW1heC1oZWlnaHQtdmFyaWFibGVcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZC1jaGlwcyBtZC1jaGlwcy13cmFwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBuZy1yZXBlYXQ9XCJ0YXJnZXQgaW4gdGFyZ2V0c1wiIGFyaWEtbGl2ZT1cInBvbGl0ZVwiIGNsYXNzPVwibWQtY2hpcCBhbmltYXRlLW9wYWNpdHktYW5kLXNjYWxlIGZhY2V0LWVsZW1lbnQtbWFya2VyLWxvY2FsNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWQtY2hpcC1jb250ZW50IGxheW91dC1yb3dcIiByb2xlPVwiYnV0dG9uXCIgdGFiaW5kZXg9XCIwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nIGRpcj1cImF1dG9cIiB0aXRsZT1cInt7IHRhcmdldC5uYW1lIH19XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgbmctaHJlZj1cInt7IHRhcmdldC51cmwgKyB0YXJnZXQubWFwcGluZyhxdWVyaWVzLCBmaWx0ZXJzKSB9fVwiIHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIG5nLXNyYz1cInt7IHRhcmdldC5pbWcgfX1cIiB3aWR0aD1cIjIyXCIgaGVpZ2h0PVwiMjJcIiBzdHlsZT1cInZlcnRpY2FsLWFsaWduOm1pZGRsZTtcIj4ge3sgdGFyZ2V0Lm5hbWUgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N0cm9uZz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5gLFxuICAgICAgY29udHJvbGxlcjogWyckc2NvcGUnLCAnJGxvY2F0aW9uJywgJ3NlYXJjaFRhcmdldHMnLCBmdW5jdGlvbiAoJHNjb3BlLCAkbG9jYXRpb24sIHNlYXJjaFRhcmdldHMpIHtcbiAgICAgICAgJHNjb3BlLm5hbWUgPSB0aGlzLnBhcmVudEN0cmwuZmFjZXRHcm91cC5uYW1lXG4gICAgICAgICRzY29wZS50YXJnZXRzID0gc2VhcmNoVGFyZ2V0c1xuICAgICAgICBsZXQgcXVlcnkgPSAkbG9jYXRpb24uc2VhcmNoKCkucXVlcnlcbiAgICAgICAgbGV0IGZpbHRlciA9ICRsb2NhdGlvbi5zZWFyY2goKS5wZmlsdGVyXG4gICAgICAgICRzY29wZS5xdWVyaWVzID0gQXJyYXkuaXNBcnJheShxdWVyeSkgPyBxdWVyeSA6IHF1ZXJ5ID8gW3F1ZXJ5XSA6IGZhbHNlXG4gICAgICAgICRzY29wZS5maWx0ZXJzID0gQXJyYXkuaXNBcnJheShmaWx0ZXIpID8gZmlsdGVyIDogZmlsdGVyID8gW2ZpbHRlcl0gOiBmYWxzZVxuICAgICAgfV1cbiAgfSlcbiAgLmZhY3RvcnkoJ2V4dGVybmFsU2VhcmNoU2VydmljZScsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZ2V0IGNvbnRyb2xsZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBybUZhY2V0Q3RybCB8fCBmYWxzZVxuICAgICAgfSxcbiAgICAgIHNldCBjb250cm9sbGVyKGNvbnRyb2xsZXIpIHtcbiAgICAgICAgdGhpcy5wcm1GYWNldEN0cmwgPSBjb250cm9sbGVyXG4gICAgICB9LFxuICAgICAgYWRkRXh0U2VhcmNoOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLnBybUZhY2V0Q3RybC5mYWNldFNlcnZpY2UucmVzdWx0c1t0aGlzLnBybUZhY2V0Q3RybC5mYWNldFNlcnZpY2UucmVzdWx0cy5sZW5ndGggLSAxXS5uYW1lICE9PSAnRXh0ZXJuYWwgU2VhcmNoJykge1xuICAgICAgICAgIHRoaXMucHJtRmFjZXRDdHJsLmZhY2V0U2VydmljZS5yZXN1bHRzLnB1c2goe1xuICAgICAgICAgICAgbmFtZTogJ0V4dGVybmFsIFNlYXJjaCcsXG4gICAgICAgICAgICBkaXNwbGF5ZWRUeXBlOiAnZXhhY3QnLFxuICAgICAgICAgICAgbGltaXRDb3VudDogMCxcbiAgICAgICAgICAgIGZhY2V0R3JvdXBDb2xsYXBzZWQ6IGZhbHNlLFxuICAgICAgICAgICAgdmFsdWVzOiB1bmRlZmluZWRcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9KVxuIiwicmVxdWlyZSgnLi9qcy9saWJyYXJ5aDNscC13aWRnZXQubW9kdWxlLmpzJylcbm1vZHVsZS5leHBvcnRzID0gJ2xpYnJhcnloM2xwV2lkZ2V0J1xuIiwiYW5ndWxhclxuICAvLyBOYW1lIG91ciBtb2R1bGVcbiAgLm1vZHVsZSgnbGlicmFyeWgzbHBXaWRnZXQnLCBbXSlcbiAgLy8gQWRkIHRoZSBsaWJyYXJ5aDNscCB1cmwgdG8gdHJ1c3RlZCB1cmwgc291cmNlc1xuICAvLyBzbyBhbmd1bGFyIGRvZXNuJ3QgYmxvY2sgaXQgZnJvbSBhbiBpZnJhbWVcbiAgICAuZmlsdGVyKCd0cnVzdFVybCcsIFsnJHNjZScsIGZ1bmN0aW9uICgkc2NlKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbih1cmwsZmFsbGJhY2spIHtcbiAgICAgICAgICAvLyBpZiAoL15odHRwKHMpPzpcXC9cXC8oLitcXC4pP2xpYnJhcnloM2xwXFwuY29tLiskLy50ZXN0KHVybCkpIHtcbiAgICAgICAgICAgIHJldHVybiAkc2NlLnRydXN0QXNSZXNvdXJjZVVybChmYWxsYmFjayk7XG4gICAgICAgICAgLy8gfVxuICAgICAgICB9O1xuICAgIH1dKVxuICAvLyBDb250cm9sbGVyIGZvciB0aGUgY29tcG9uZW50IGJlbG93XG4gIC5jb250cm9sbGVyKCdsaWJyYXJ5aDNscFdpZGdldENvbnRyb2xsZXInLCBbJ2xpYnJhcnloM2xwV2lkZ2V0Q29uZmlnJywgJyRzY29wZScsIGZ1bmN0aW9uKGxpYnJhcnloM2xwV2lkZ2V0Q29uZmlnLCAkc2NvcGUpIHtcbiAgICB0aGlzLiRvbkluaXQgPSAoKSA9PiB7XG4gICAgICAkc2NvcGUuY29uZmlnID0gbGlicmFyeWgzbHBXaWRnZXRDb25maWc7XG4gICAgICAkc2NvcGUucGFyZW50Q3RybCA9IHRoaXMucGFyZW50Q3RybDtcbiAgICB9XG4gICAgLy8gRG8gZmFjZXRzIGV4aXN0P1xuICAgICRzY29wZS5mYWNldHNFeGlzdCA9ICgpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiAoJHNjb3BlLnBhcmVudEN0cmwuc2VhcmNoU2VydmljZS5mYWNldFNlcnZpY2UucmVzdWx0cy5sZW5ndGggPiAwKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBBZGQgdGhlIGJvdHRvbSBwYWRkaW5nIGNsYXNzIGlmIHRoZXJlIGFyZSBmYWNldHNcbiAgICAkc2NvcGUuYm90dG9tUGFkZGluZyA9ICgpID0+IHtcbiAgICAgIGlmICgkc2NvcGUuZmFjZXRzRXhpc3QoKSkge1xuICAgICAgICByZXR1cm4gXCJjaGF0LWJvdHRvbS1wYWRkaW5nXCI7XG4gICAgICB9XG4gICAgfVxuICB9XSlcbiAgLmNvbXBvbmVudCgncHJtRXhwbG9yZU1haW5BZnRlcicsIHtcbiAgICBiaW5kaW5nczoge1xuICAgICAgcGFyZW50Q3RybDogJzwnXG4gICAgfSxcbiAgICBjb250cm9sbGVyOiAnbGlicmFyeWgzbHBXaWRnZXRDb250cm9sbGVyJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnV0dG9uIGNoYXQtdGFiIHNzLWNoYXQganMtdG9nZ2xlLWNoYXRcIiBuZy1jbGFzcz1cImJvdHRvbVBhZGRpbmcoKVwiIG5nLWluaXQ9XCJzaG93Q2hhdFdpZGdldCA9IGZhbHNlXCIgbmctY2xpY2s9XCJzaG93Q2hhdFdpZGdldCA9ICFzaG93Q2hhdFdpZGdldFwiPlxuICAgICAgICAgICAgICAgIDxwcm0taWNvbiBzdHlsZT1cInotaW5kZXg6MVwiIGljb24tdHlwZT1cInN2Z1wiIHN2Zy1pY29uLXNldD1cInt7Y29uZmlnLmljb24uc2V0fX1cIiBpY29uLWRlZmluaXRpb249XCJ7e2NvbmZpZy5pY29uLmljb259fVwiPjwvcHJtLWljb24+XG4gICAgICAgICAgICAgICAge3tjb25maWcucHJvbXB0fX1cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjaGF0LWZyYW1lLXdyYXBcIiBuZy1jbGFzcz1cImJvdHRvbVBhZGRpbmcoKVwiIG5nLXNob3c9XCJzaG93Q2hhdFdpZGdldFwiPlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiY2hhdC1jbG9zZSBzcy1pY29uIGpzLXRvZ2dsZS1jaGF0XCIgdGl0bGU9XCJDbG9zZSBjaGF0IHdpbmRvd1wiIG5nLWNsaWNrPVwic2hvd0NoYXRXaWRnZXQgPSAhc2hvd0NoYXRXaWRnZXRcIj4mdGltZXM7PC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGlmcmFtZSBjbGFzcz1cImNoYXQtZnJhbWVcIiBuZy1zcmM9XCJ7e2NvbmZpZy51cmwgfCB0cnVzdFVybH19XCIgZnJhbWVib3JkZXI9XCIwXCI+PC9pZnJhbWU+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICBgXG4gIH0pO1xuIiwicmVxdWlyZSgnLi9qcy9zZWFyY2gtYmFyLXN1Yi1tZW51Lm1vZHVsZS5qcycpXG5tb2R1bGUuZXhwb3J0cyA9ICdzZWFyY2hCYXJTdWJNZW51J1xuIiwiYW5ndWxhclxuICAubW9kdWxlKCdzZWFyY2hCYXJTdWJNZW51JywgW10pXG4gIC5jb250cm9sbGVyKCdzZWFyY2hCYXJTdWJNZW51Q29udHJvbGxlcicsIFsnc2VhcmNoQmFyU3ViTWVudUl0ZW1zJywgJyRzY29wZScsICckZmlsdGVyJywgZnVuY3Rpb24oaXRlbXMsICRzY29wZSwgJGZpbHRlcikge1xuICAgIHRoaXMuJG9uSW5pdCA9ICgpID0+IHtcbiAgICAgICRzY29wZS5pdGVtcyA9IGl0ZW1zO1xuICAgIH1cbiAgICAkc2NvcGUudHJhbnNsYXRlID0gKG9yaWdpbmFsKSA9PiB7XG4gICAgICByZXR1cm4gb3JpZ2luYWwucmVwbGFjZSgvXFx7KC4rKVxcfS9nLCAobWF0Y2gsIHAxKSA9PiAkZmlsdGVyKCd0cmFuc2xhdGUnKShwMSkpO1xuICAgIH1cbiAgICAkc2NvcGUuZ29Ub1VybCA9ICh1cmwpID0+IHtcbiAgICAgIHdpbmRvdy5vcGVuKHVybCwgJ19ibGFuaycpO1xuICAgIH1cbiAgfV0pXG4gIC5jb21wb25lbnQoJ3NlYXJjaEJhclN1Yk1lbnUnLCB7XG4gICAgY29udHJvbGxlcjogJ3NlYXJjaEJhclN1Yk1lbnVDb250cm9sbGVyJyxcbiAgICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJsYXlvdXQtYWxpZ24tZW5kLWNlbnRlciBsYXlvdXQtcm93IGZsZXggc2VhcmNoLWJhci1zdWItbWVudVwiPlxuICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgIDxsaSBuZy1yZXBlYXQ9XCJpdGVtIGluIGl0ZW1zXCI+XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIGRhdGEtaHJlZj1cInt7IHRyYW5zbGF0ZShpdGVtLmFjdGlvbikgfX1cIiBhcmlhLWxhYmVsPVwie3sgdHJhbnNsYXRlKGl0ZW0uZGVzY3JpcHRpb24pIH19XCIgbmctY2xpY2s9XCJnb1RvVXJsKHRyYW5zbGF0ZShpdGVtLmFjdGlvbikpXCIgY2xhc3M9XCJidXR0b24td2l0aC1pY29uIHplcm8tbWFyZ2luIG1kLWJ1dHRvbiBtZC1zbWFsbCB7e2l0ZW0uY3NzQ2xhc3Nlc319XCIgdHlwZT1cImJ1dHRvblwiPlxuICAgICAgICAgICAgICAgICAgICA8bWQtdG9vbHRpcCBtZC1kaXJlY3Rpb249XCJib3R0b21cIiBtZC1kZWxheT1cIjUwMFwiPnt7IHRyYW5zbGF0ZShpdGVtLmRlc2NyaXB0aW9uKSB9fTwvbWQtdG9vbHRpcD48cHJtLWljb24gc3R5bGU9XCJ6LWluZGV4OjFcIiBpY29uLXR5cGU9XCJzdmdcIiBzdmctaWNvbi1zZXQ9XCJ7e2l0ZW0uaWNvbi5zZXR9fVwiIGljb24tZGVmaW5pdGlvbj1cInt7aXRlbS5pY29uLmljb259fVwiPjwvcHJtLWljb24+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic2VhcmNoLWJhci1zdWItbWVudS1pdGVtXCIgbmctY2xhc3M9XCIoaXRlbS5zaG93X3hzKSA/ICcnIDogJ2hpZGUteHMnXCI+e3sgdHJhbnNsYXRlKGl0ZW0ubmFtZSkgfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgPC9kaXY+YFxuXG4gIH0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5hbmd1bGFyLm1vZHVsZSgndG9nZ2xlSW5zdGl0dXRpb25zJywgW10pO1xuXG5hbmd1bGFyLm1vZHVsZSgndG9nZ2xlSW5zdGl0dXRpb25zJykuY29tcG9uZW50KCd0b2dnbGVJbnN0aXR1dGlvbnMnLCB7XG4gIGJpbmRpbmdzOiB7XG4gICAgc3RhcnRIaWRkZW46ICc8J1xuICB9LFxuICB0ZW1wbGF0ZTogJ1xcbiAgICA8bWQtYnV0dG9uIGNsYXNzPVwibWQtcmFpc2VkXCIgbmctY2xpY2s9XCIkY3RybC50b2dnbGVMaWJzKClcIiBpZD1cInN1bW1pdEJ1dHRvblwiIGFyaWEtY29udHJvbHM9XCJzdW1taXRMaW5rc1wiIGFyaWEtZXhwYW5kZWQ9ZmFsc2UgYXJpYS1sYWJlbD1cIlNob3cvSGlkZSBTdW1taXQgTGlicmFyaWVzXCI+XFxuICAgICAgICB7eyRjdHJsLnNob3dMaWJzID8gXFwnSGlkZSBTdW1taXQgTGlicmFyaWVzXFwnIDogXFwnU2hvdyBTdW1taXQgTGlicmFyaWVzXFwnfX1cXG4gICAgICA8c3BhbiBhcmlhLWhpZGRlbj10cnVlPnt7JGN0cmwuc2hvd0xpYnMgPyBcXCcmbGFxdW87XFwnIDogXFwnJnJhcXVvO1xcJ319PC9zcGFuPlxcbiAgICA8L21kLWJ1dHRvbj4nLFxuICBjb250cm9sbGVyOiBmdW5jdGlvbiBjb250cm9sbGVyKCkge1xuICAgIHRoaXMuJG9uSW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoaXMuc2hvd0xpYnMgPSB0aGlzLnN0YXJ0SGlkZGVuID09PSBmYWxzZSA/IHRydWUgOiBmYWxzZTtcbiAgICAgIHRoaXMuYnV0dG9uID0gYW5ndWxhci5lbGVtZW50KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3BybS1hbG1hLW1vcmUtaW5zdC1hZnRlciBidXR0b24nKSk7XG4gICAgICB0aGlzLnRhYnMgPSBhbmd1bGFyLmVsZW1lbnQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcigncHJtLWFsbWEtbW9yZS1pbnN0IG1kLXRhYnMnKSk7XG4gICAgICB0aGlzLnRhYnMuYXR0cignaWQnLCAnc3VtbWl0TGlua3MnKTtcbiAgICAgIHRoaXMuYnV0dG9uLnBhcmVudCgpLmFmdGVyKHRoaXMudGFicyk7XG4gICAgICBpZiAoIXRoaXMuc2hvd0xpYnMpIHRoaXMudGFicy5hZGRDbGFzcygnaGlkZScpO1xuICAgIH07XG4gICAgdGhpcy50b2dnbGVMaWJzID0gZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy5zaG93TGlicyA9ICF0aGlzLnNob3dMaWJzO1xuICAgICAgdGhpcy50YWJzLmhhc0NsYXNzKCdoaWRlJykgPyB0aGlzLnRhYnMucmVtb3ZlQ2xhc3MoJ2hpZGUnKSAmJiB0aGlzLmJ1dHRvbi5hdHRyKCdhcmlhLWV4cGFuZGVkJywgdHJ1ZSkgOiB0aGlzLnRhYnMuYWRkQ2xhc3MoJ2hpZGUnKSAmJiB0aGlzLmJ1dHRvbi5hdHRyKCdhcmlhLWV4cGFuZGVkJywgZmFsc2UpO1xuICAgIH07XG4gIH1cbn0pOyIsInJlcXVpcmUoJy4vZGlzdC9tb2R1bGUuanMnKVxubW9kdWxlLmV4cG9ydHMgPSAndG9nZ2xlSW5zdGl0dXRpb25zJ1xuIl19
