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
    "img": "https://raw.githubusercontent.com/alliance-pcsg/primo-explore-external-search/master/worldcat-logo.png",
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
    "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/200px-Google_%22G%22_Logo.svg.png",
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
    "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/200px-Google_%22G%22_Logo.svg.png",
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
        if (this.prmFacetCtrl.facetService.results[0].name !== 'External Search') {
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
      if (/^http(s)?:\/\/(.+\.)?libraryh3lp\.com.+$/.test(url)) {
        return $sce.trustAsResourceUrl(url);
      }
    };
  }])
    .filter('fallbackUrl', ['$sce', function ($sce) {
        return function(fallback) {
            if (/^http(s)?:\/\/(.+\.)?questionpoint\.org.+$/.test(fallback)) {
                return $sce.trustAsResourceUrl(fallback);
            }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJwcmltby1leHBsb3JlL2N1c3RvbS9QQ0NfTlVJL2pzL0xpbmtzSW5Qcm9maWxlLmpzIiwicHJpbW8tZXhwbG9yZS9jdXN0b20vUENDX05VSS9qcy9jbGlja2FibGVMb2dvVG9BbnlMaW5rLmpzIiwicHJpbW8tZXhwbG9yZS9jdXN0b20vUENDX05VSS9qcy9jdXN0b21BY3Rpb25zLmpzIiwicHJpbW8tZXhwbG9yZS9jdXN0b20vUENDX05VSS9qcy9saWJyYXJ5QWNjb3VudFF1ZXN0aW9ucy5qcyIsInByaW1vLWV4cGxvcmUvY3VzdG9tL1BDQ19OVUkvanMvbGlicmFyeWgzbHBXaWRnZXQuanMiLCJwcmltby1leHBsb3JlL2N1c3RvbS9QQ0NfTlVJL2pzL21haW4uanMiLCJwcmltby1leHBsb3JlL2N1c3RvbS9QQ0NfTlVJL2pzL3NlYXJjaEJhclN1Yk1lbnUuanMiLCJwcmltby1leHBsb3JlL2N1c3RvbS9QQ0NfTlVJL2pzL3ZpZXdOYW1lLmpzIiwicHJpbW8tZXhwbG9yZS9jdXN0b20vUENDX05VSS9ub2RlX21vZHVsZXMvcHJpbW8tZXhwbG9yZS1jbGlja2FibGUtbG9nby10by1hbnktbGluay9pbmRleC5qcyIsInByaW1vLWV4cGxvcmUvY3VzdG9tL1BDQ19OVUkvbm9kZV9tb2R1bGVzL3ByaW1vLWV4cGxvcmUtY2xpY2thYmxlLWxvZ28tdG8tYW55LWxpbmsvanMvY2xpY2thYmxlLWxvZ28tdG8tYW55LWxpbmsubW9kdWxlLmpzIiwicHJpbW8tZXhwbG9yZS9jdXN0b20vUENDX05VSS9ub2RlX21vZHVsZXMvcHJpbW8tZXhwbG9yZS1jdXN0b20tYWN0aW9ucy9pbmRleC5qcyIsInByaW1vLWV4cGxvcmUvY3VzdG9tL1BDQ19OVUkvbm9kZV9tb2R1bGVzL3ByaW1vLWV4cGxvcmUtY3VzdG9tLWFjdGlvbnMvanMvY3VzdG9tLWFjdGlvbnMubW9kdWxlLmpzIiwicHJpbW8tZXhwbG9yZS9jdXN0b20vUENDX05VSS9ub2RlX21vZHVsZXMvcHJpbW8tZXhwbG9yZS1jdXN0b20tbm8tc2VhcmNoLXJlc3VsdHMvaW5kZXguanMiLCJwcmltby1leHBsb3JlL2N1c3RvbS9QQ0NfTlVJL25vZGVfbW9kdWxlcy9wcmltby1leHBsb3JlLWN1c3RvbS1uby1zZWFyY2gtcmVzdWx0cy9qcy9jdXN0b20tbm8tc2VhcmNoLXJlc3VsdHMubW9kdWxlLmpzIiwicHJpbW8tZXhwbG9yZS9jdXN0b20vUENDX05VSS9ub2RlX21vZHVsZXMvcHJpbW8tZXhwbG9yZS1leHRlcm5hbC1zZWFyY2gvaW5kZXguanMiLCJwcmltby1leHBsb3JlL2N1c3RvbS9QQ0NfTlVJL25vZGVfbW9kdWxlcy9wcmltby1leHBsb3JlLWV4dGVybmFsLXNlYXJjaC9qcy9leHRlcm5hbC1zZWFyY2gubW9kdWxlLmpzIiwicHJpbW8tZXhwbG9yZS9jdXN0b20vUENDX05VSS9ub2RlX21vZHVsZXMvcHJpbW8tZXhwbG9yZS1saWJyYXJ5aDNscC13aWRnZXQvaW5kZXguanMiLCJwcmltby1leHBsb3JlL2N1c3RvbS9QQ0NfTlVJL25vZGVfbW9kdWxlcy9wcmltby1leHBsb3JlLWxpYnJhcnloM2xwLXdpZGdldC9qcy9saWJyYXJ5aDNscC13aWRnZXQubW9kdWxlLmpzIiwicHJpbW8tZXhwbG9yZS9jdXN0b20vUENDX05VSS9ub2RlX21vZHVsZXMvcHJpbW8tZXhwbG9yZS1zZWFyY2gtYmFyLXN1Yi1tZW51L2luZGV4LmpzIiwicHJpbW8tZXhwbG9yZS9jdXN0b20vUENDX05VSS9ub2RlX21vZHVsZXMvcHJpbW8tZXhwbG9yZS1zZWFyY2gtYmFyLXN1Yi1tZW51L2pzL3NlYXJjaC1iYXItc3ViLW1lbnUubW9kdWxlLmpzIiwicHJpbW8tZXhwbG9yZS9jdXN0b20vUENDX05VSS9ub2RlX21vZHVsZXMvcHJpbW8tZXhwbG9yZS10b2dnbGUtaW5zdGl0dXRpb25zL2Rpc3QvbW9kdWxlLmpzIiwicHJpbW8tZXhwbG9yZS9jdXN0b20vUENDX05VSS9ub2RlX21vZHVsZXMvcHJpbW8tZXhwbG9yZS10b2dnbGUtaW5zdGl0dXRpb25zL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQTtBQUNBO0FBREEsQ0FFSyxNQUZMLENBRVksZ0JBRlosRUFFOEIsRUFGOUI7QUFHSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEosQ0FRSyxTQVJMLENBUWUsZUFSZixFQVFnQztBQUN4QixjQUFVO0FBQ04sb0JBQVk7QUFETixLQURjO0FBSXhCO0FBQ0E7QUFMd0IsQ0FSaEM7O0FBMkJBLE9BQU8sT0FBUCxHQUFpQixnQkFBakI7Ozs7Ozs7O0FDM0JPLElBQUksNERBQTBCO0FBQ25DLFFBQU0seUJBRDZCO0FBRW5DLFVBQVE7QUFDTixTQUFLLDZCQURDO0FBRU4sYUFBUztBQUZIO0FBRjJCLENBQTlCOzs7Ozs7OztBQ0FBLElBQUksb0RBQXNCO0FBQzdCLFVBQU0sZUFEdUI7QUFFN0IsWUFBUSxDQUNKO0FBQ0ksY0FBTSxjQURWO0FBRUkscUJBQWEsNEJBRmpCO0FBR0ksY0FBTSxVQUhWO0FBSUksY0FBTTtBQUNGLGlCQUFLLGVBREg7QUFFRixrQkFBTTtBQUZKLFNBSlY7QUFRSSxnQkFBUTtBQVJaLEtBREk7QUFGcUIsQ0FBMUI7Ozs7O0FDQVA7QUFDQTtBQURBLENBRUssTUFGTCxDQUVZLHlCQUZaLEVBRXVDLEVBRnZDO0FBR0k7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBKLENBUUssU0FSTCxDQVFlLG1DQVJmLEVBUW9EO0FBQzVDLGNBQVU7QUFDTixvQkFBWTtBQUROLEtBRGtDO0FBSTVDO0FBQ0E7QUFMNEMsQ0FScEQ7O0FBMENBLE9BQU8sT0FBUCxHQUFpQix5QkFBakI7Ozs7Ozs7O0FDMUNPLElBQUksNERBQTBCO0FBQ25DLFFBQU0seUJBRDZCO0FBRW5DLFVBQVE7QUFDTixTQUFLLDJIQURDO0FBRU4sY0FBVSx1SEFGSjtBQUdOLFlBQVEsTUFIRjtBQUlOLFVBQU07QUFDSixXQUFLLGVBREQ7QUFFSixZQUFNO0FBRkY7QUFK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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqRUE7QUFDQTtBQUNBOztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4REE7QUFDQTtBQUNBOztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkJBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9cmV0dXJuIGV9KSgpIiwiYW5ndWxhclxuLy8gTmFtZSBvdXIgbW9kdWxlXG4gICAgLm1vZHVsZSgnbGlua3NJblByb2ZpbGUnLCBbXSlcbiAgICAvLyAuY29udHJvbGxlcignbGlua3NJblByb2ZpbGVDb250cm9sbGVyJywgWyckc2NvcGUnLCBmdW5jdGlvbiggJHNjb3BlICkge1xuICAgIC8vICAgICB0aGlzLiRvbkluaXQgPSAoKSA9PiB7XG4gICAgLy8gICAgICAgICAkc2NvcGUucGFyZW50Q3RybCA9IHRoaXMucGFyZW50Q3RybDtcbiAgICAvLyAgICAgfVxuICAgIC8vIH1dKVxuICAgIC5jb21wb25lbnQoJ3BybUZpbmVzQWZ0ZXInLCB7XG4gICAgICAgIGJpbmRpbmdzOiB7XG4gICAgICAgICAgICBwYXJlbnRDdHJsOiAnPCdcbiAgICAgICAgfSxcbiAgICAgICAgLy8gY29udHJvbGxlcjogJ2xpbmtzSW5Qcm9maWxlQ29udHJvbGxlcicsXG4gICAgICAgIHRlbXBsYXRlOiBgXG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGF5b3V0LXJvd1wiPjxhXG4gICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vc2VjdXJlLnRvdWNobmV0Lm5ldC9DMjEyNDlfdXN0b3Jlcy93ZWIvc3RvcmVfbWFpbi5qc3A/U1RPUkVJRD0yNCZTSU5HTEVTVE9SRT10cnVlXCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cIm1kLWJ1dHRvbiBtZC1yYWlzZWQgbWQtYWNjZW50XCJcbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiUGF5IGZpbmVzIG9ubGluZVwiXG4gICAgICAgICAgICAgID48c3Bhbj5QYXkgZmluZXMgb25saW5lPC9zcGFuPlxuICAgICAgICAgICAgICA8L2E+PC9kaXY+XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGF5b3V0LXJvd1wiPjxhIGhyZWY9XCJodHRwczovL3d3dy5wY2MuZWR1L2xpYnJhcnkvc2VydmljZXMvYm9ycm93aW5nL2xpYnJhcnktZmluZXMvXCI+U2VlIG90aGVyIHdheXMgdG8gZGVhbCB3aXRoIHlvdXIgZmluZXMuPC9hPjwvZGl2PlxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgYFxuICAgIH0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9ICdsaW5rc0luUHJvZmlsZSdcbiIsImV4cG9ydCBsZXQgY2xpY2thYmxlTG9nb0xpbmtDb25maWcgPSB7XG4gIG5hbWU6ICdjbGlja2FibGVMb2dvTGlua0NvbmZpZycsXG4gIGNvbmZpZzoge1xuICAgIHVybDogJ2h0dHBzOi8vd3d3LnBjYy5lZHUvbGlicmFyeScsXG4gICAgYWx0VGV4dDogJ1BDQyBMaWJyYXJ5J1xuICB9XG59O1xuIiwiZXhwb3J0IGxldCBjdXN0b21BY3Rpb25zQ29uZmlnID0ge1xuICAgIG5hbWU6ICdjdXN0b21BY3Rpb25zJyxcbiAgICBjb25maWc6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogXCJSZXBvcnQgSXNzdWVcIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIlJlcG9ydCBhbiBpc3N1ZSBvciBwcm9ibGVtXCIsXG4gICAgICAgICAgICB0eXBlOiAndGVtcGxhdGUnLFxuICAgICAgICAgICAgaWNvbjoge1xuICAgICAgICAgICAgICAgIHNldDogJ2NvbW11bmljYXRpb24nLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdpY19jb21tZW50XzI0cHgnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYWN0aW9uOiBcImh0dHBzOi8vd3d3LnBjYy5lZHUvbGlicmFyeS9hYm91dC9wZW9wbGUvY29udGFjdC9yZXBvcnQtaXNzdWVzL1wiXG4gICAgICAgIH1cbiAgICBdXG59O1xuIiwiYW5ndWxhclxuLy8gTmFtZSBvdXIgbW9kdWxlXG4gICAgLm1vZHVsZSgnbGlicmFyeUFjY291bnRRdWVzdGlvbnMnLCBbXSlcbiAgICAvLyAuY29udHJvbGxlcignbGlicmFyeUFjY291bnRRdWVzdGlvbnNDb250cm9sbGVyJywgWyckc2NvcGUnLCBmdW5jdGlvbiggJHNjb3BlICkge1xuICAgIC8vICAgICB0aGlzLiRvbkluaXQgPSAoKSA9PiB7XG4gICAgLy8gICAgICAgICAkc2NvcGUucGFyZW50Q3RybCA9IHRoaXMucGFyZW50Q3RybDtcbiAgICAvLyAgICAgfVxuICAgIC8vIH1dKVxuICAgIC5jb21wb25lbnQoJ3BybU1lc3NhZ2VzQW5kQmxvY2tzT3ZlcnZpZXdBZnRlcicsIHtcbiAgICAgICAgYmluZGluZ3M6IHtcbiAgICAgICAgICAgIHBhcmVudEN0cmw6ICc8J1xuICAgICAgICB9LFxuICAgICAgICAvLyBjb250cm9sbGVyOiAnbGlicmFyeUFjY291bnRRdWVzdGlvbnNDb250cm9sbGVyJyxcbiAgICAgICAgdGVtcGxhdGU6XG4gICAgICAgICAgICBgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGlsZXMtZ3JpZC10aWxlXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRpbGUtY29udGVudCBsYXlvdXQtY29sdW1uXCIgbGF5b3V0PVwiY29sdW1uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aWxlLWhlYWRlciBsYXlvdXQtY29sdW1uXCIgbGF5b3V0PVwiY29sdW1uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGxheW91dD1cInJvd1wiIGxheW91dC1hbGlnbj1cInNwYWNlLWJldHdlZW5cIiBjbGFzcz1cImxheW91dC1hbGlnbi1zcGFjZS1iZXR3ZWVuLXN0cmV0Y2ggbGF5b3V0LXJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cImhlYWRlci1saW5rIGxpZ2h0LXRleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+TW9yZSBRdWVzdGlvbnM/PC9zcGFuPiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgbGF5b3V0PVwiY29sdW1uXCIgbGF5b3V0LWFsaWduPVwiY2VudGVyIGNlbnRlclwiIGxheW91dC1wYWRkaW5nPVwiXCIgbGF5b3V0LW1hcmdpbj1cIlwiIGNsYXNzPVwibGF5b3V0LW1hcmdpbiBsYXlvdXQtcGFkZGluZyBsYXlvdXQtYWxpZ24tY2VudGVyLWNlbnRlciBsYXlvdXQtY29sdW1uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5wY2MuZWR1L2xpYnJhcnkvc2VydmljZXMvYm9ycm93aW5nL2xpYnJhcnktYWNjb3VudC1xdWVzdGlvbnMvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIm1kLWJ1dHRvbiBtZC1yYWlzZWQgbWQtYWNjZW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiTGlicmFyeSBBY2NvdW50IFF1ZXN0aW9uc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+TGlicmFyeSBBY2NvdW50IFF1ZXN0aW9uczwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8IS0tLS0+XG4gICAgICAgICAgICA8IS0tLS0+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIGBcbiAgICB9KTtcblxubW9kdWxlLmV4cG9ydHMgPSAnbGlicmFyeUFjY291bnRRdWVzdGlvbnMnXG4iLCJleHBvcnQgbGV0IGxpYnJhcnloM2xwV2lkZ2V0Q29uZmlnID0ge1xuICBuYW1lOiAnbGlicmFyeWgzbHBXaWRnZXRDb25maWcnLFxuICBjb25maWc6IHtcbiAgICB1cmw6ICdodHRwczovL2xpYnJhcnloM2xwLmNvbS9jaGF0L3BjYy1hc2stYS1saWJyYXJpYW5AY2hhdC5saWJyYXJ5aDNscC5jb20/c2tpbj0yODI0OCZ0aXRsZT1DaGF0K1dpdGgrQStMaWJyYXJpYW4maWRlbnRpdHk9UENDJyxcbiAgICBmYWxsYmFjazogJ2h0dHBzOi8vd3d3LnF1ZXN0aW9ucG9pbnQub3JnL2Nycy9xd2lkZ2V0VjQvanMvcXdpZGdldC5ib290c3RyYXBuai5qcz9sYW5nY29kZT0xJmluc3RpZD0xMzk2MSZza2luPWJsdWUmc2l6ZT1zdGFuZGFyZCcsXG4gICAgcHJvbXB0OiAnQ2hhdCcsXG4gICAgaWNvbjoge1xuICAgICAgc2V0OiAnY29tbXVuaWNhdGlvbicsXG4gICAgICBpY29uOiAnaWNfZm9ydW1fMjRweCdcbiAgICB9XG4gIH1cbn07XG4iLCJpbXBvcnQgJ3ByaW1vLWV4cGxvcmUtY2xpY2thYmxlLWxvZ28tdG8tYW55LWxpbmsnO1xuaW1wb3J0ICdwcmltby1leHBsb3JlLWxpYnJhcnloM2xwLXdpZGdldCc7XG5pbXBvcnQgJ3ByaW1vLWV4cGxvcmUtc2VhcmNoLWJhci1zdWItbWVudSc7XG5pbXBvcnQgJ3ByaW1vLWV4cGxvcmUtdG9nZ2xlLWluc3RpdHV0aW9ucyc7XG5pbXBvcnQgJ3ByaW1vLWV4cGxvcmUtY3VzdG9tLWFjdGlvbnMnO1xuaW1wb3J0ICdwcmltby1leHBsb3JlLWN1c3RvbS1uby1zZWFyY2gtcmVzdWx0cyc7XG5pbXBvcnQgJ3ByaW1vLWV4cGxvcmUtZXh0ZXJuYWwtc2VhcmNoJztcblxuXG5pbXBvcnQgeyB2aWV3TmFtZSB9IGZyb20gJy4vdmlld05hbWUnO1xuaW1wb3J0IHsgY2xpY2thYmxlTG9nb0xpbmtDb25maWcgfSBmcm9tICcuL2NsaWNrYWJsZUxvZ29Ub0FueUxpbmsnO1xuaW1wb3J0IHsgbGlicmFyeWgzbHBXaWRnZXRDb25maWcgfSBmcm9tICcuL2xpYnJhcnloM2xwV2lkZ2V0JztcbmltcG9ydCB7IHNlYXJjaEJhclN1Yk1lbnVJdGVtc0NvbmZpZyB9IGZyb20gJy4vc2VhcmNoQmFyU3ViTWVudSc7XG5pbXBvcnQgeyBjdXN0b21BY3Rpb25zQ29uZmlnIH0gZnJvbSAnLi9jdXN0b21BY3Rpb25zJztcbmltcG9ydCB7IGxpbmtzSW5Qcm9maWxlIH0gZnJvbSBcIi4vTGlua3NJblByb2ZpbGVcIjtcbmltcG9ydCB7IGxpYnJhcnlBY2NvdW50UXVlc3Rpb25zIH0gZnJvbSAnLi9saWJyYXJ5QWNjb3VudFF1ZXN0aW9ucydcblxuXG5sZXQgYXBwID0gYW5ndWxhci5tb2R1bGUoJ3ZpZXdDdXN0b20nLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NsaWNrYWJsZUxvZ29Ub0FueUxpbmsnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdsaWJyYXJ5aDNscFdpZGdldCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3NlYXJjaEJhclN1Yk1lbnUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0b2dnbGVJbnN0aXR1dGlvbnMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjdXN0b21BY3Rpb25zJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY3VzdG9tTm9TZWFyY2hSZXN1bHRzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnbGlua3NJblByb2ZpbGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdsaWJyYXJ5QWNjb3VudFF1ZXN0aW9ucycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2V4dGVybmFsU2VhcmNoJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKTtcblxuYXBwXG4gIC5jb25zdGFudChjdXN0b21BY3Rpb25zQ29uZmlnLm5hbWUsIGN1c3RvbUFjdGlvbnNDb25maWcuY29uZmlnKVxuICAuY29uc3RhbnQoY2xpY2thYmxlTG9nb0xpbmtDb25maWcubmFtZSwgY2xpY2thYmxlTG9nb0xpbmtDb25maWcuY29uZmlnKVxuICAuY29uc3RhbnQobGlicmFyeWgzbHBXaWRnZXRDb25maWcubmFtZSwgbGlicmFyeWgzbHBXaWRnZXRDb25maWcuY29uZmlnKVxuICAuY29uc3RhbnQoc2VhcmNoQmFyU3ViTWVudUl0ZW1zQ29uZmlnLm5hbWUsIHNlYXJjaEJhclN1Yk1lbnVJdGVtc0NvbmZpZy5jb25maWcpXG4gIC52YWx1ZSgnY3VzdG9tTm9TZWFyY2hSZXN1bHRzVGVtcGxhdGVVcmwnLCAnY3VzdG9tLycrdmlld05hbWUrJy9odG1sL25vU2VhcmNoUmVzdWx0cy5odG1sJylcbiAgLmNvbXBvbmVudCgncHJtU2VhcmNoQmFyQWZ0ZXInLCB7XG4gICAgdGVtcGxhdGU6ICc8c2VhcmNoLWJhci1zdWItbWVudT48L3NlYXJjaC1iYXItc3ViLW1lbnU+J1xuICB9KVxuICAuY29tcG9uZW50KCdwcm1BbG1hTW9yZUluc3RBZnRlcicsIHt0ZW1wbGF0ZTogJzx0b2dnbGUtaW5zdGl0dXRpb25zIC8+J30pXG4gICAgLnZhbHVlKCdzZWFyY2hUYXJnZXRzJywgW1xuICAgICAgICB7XG4gICAgICAgIFwibmFtZVwiOiBcIldvcmxkY2F0XCIsXG4gICAgICAgIFwidXJsXCI6IFwiaHR0cHM6Ly9wY2Mub24ud29ybGRjYXQub3JnL3NlYXJjaD9cIixcbiAgICAgICAgXCJpbWdcIjogXCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vYWxsaWFuY2UtcGNzZy9wcmltby1leHBsb3JlLWV4dGVybmFsLXNlYXJjaC9tYXN0ZXIvd29ybGRjYXQtbG9nby5wbmdcIixcbiAgICAgICAgICAgIG1hcHBpbmc6IGZ1bmN0aW9uIChxdWVyaWVzLCBmaWx0ZXJzKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcXVlcnlfbWFwcGluZ3MgPSB7XG4gICAgICAgICAgICAgICAgICAgICdhbnknOiAna3cnLFxuICAgICAgICAgICAgICAgICAgICAndGl0bGUnOiAndGknLFxuICAgICAgICAgICAgICAgICAgICAnY3JlYXRvcic6ICdhdScsXG4gICAgICAgICAgICAgICAgICAgICdzdWJqZWN0JzogJ3N1JyxcbiAgICAgICAgICAgICAgICAgICAgJ2lzYm4nOiAnYm4nLFxuICAgICAgICAgICAgICAgICAgICAnaXNzbic6ICduMidcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdxdWVyeVN0cmluZz0nICsgcXVlcmllcy5tYXAocGFydCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdGVybXMgPSBwYXJ0LnNwbGl0KCcsJylcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0eXBlID0gcXVlcnlfbWFwcGluZ3NbdGVybXNbMF1dIHx8ICdrdydcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzdHJpbmcgPSB0ZXJtc1syXSB8fCAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGpvaW4gPSB0ZXJtc1szXSB8fCAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHR5cGUgKyAnOicgKyBzdHJpbmcgKyAnICcgKyBqb2luICsgJyAnXG4gICAgICAgICAgICAgICAgICAgIH0pLmpvaW4oJycpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJuYW1lXCI6IFwiR29vZ2xlIFNjaG9sYXJcIixcbiAgICAgICAgICAgIFwidXJsXCI6IFwiaHR0cHM6Ly9zY2hvbGFyLmdvb2dsZS5jb20vc2Nob2xhcj9xPVwiLFxuICAgICAgICAgICAgXCJpbWdcIjogXCJodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9jb21tb25zL3RodW1iLzUvNTMvR29vZ2xlXyUyMkclMjJfTG9nby5zdmcvMjAwcHgtR29vZ2xlXyUyMkclMjJfTG9nby5zdmcucG5nXCIsXG4gICAgICAgICAgICBtYXBwaW5nOiBmdW5jdGlvbiAocXVlcmllcywgZmlsdGVycykge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBxdWVyaWVzLm1hcChwYXJ0ID0+IHBhcnQuc3BsaXQoXCIsXCIpWzJdIHx8IFwiXCIpLmpvaW4oJyAnKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJydcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIkVCU0NPIFNlYXJjaFwiLFxuICAgICAgICAgICAgXCJ1cmxcIjogXCJodHRwczovL2xpYnByb3h5LnBjYy5lZHUvbG9naW4/dXJsPWh0dHA6Ly9zZWFyY2guZWJzY29ob3N0LmNvbS9sb2dpbi5hc3B4P2RpcmVjdD10cnVlJnNpdGU9ZWhvc3QtbGl2ZSZzY29wZT1zaXRlJnR5cGU9MSZkYj1hcGgmZGI9ZjVoJm1vZGU9Ym9vbCZsYW5nPWVuJmNsaTA9RlQmY2x2MD1ZJmJxdWVyeT1cIixcbiAgICAgICAgICAgIFwiaW1nXCI6IFwiaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvY29tbW9ucy90aHVtYi81LzUzL0dvb2dsZV8lMjJHJTIyX0xvZ28uc3ZnLzIwMHB4LUdvb2dsZV8lMjJHJTIyX0xvZ28uc3ZnLnBuZ1wiLFxuICAgICAgICAgICAgbWFwcGluZzogZnVuY3Rpb24gKHF1ZXJpZXMsIGZpbHRlcnMpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcXVlcmllcy5tYXAocGFydCA9PiBwYXJ0LnNwbGl0KFwiLFwiKVsyXSB8fCBcIlwiKS5qb2luKCcgJylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICcnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgXSlcblxuXG5cblxuXG4iLCJleHBvcnQgbGV0IHNlYXJjaEJhclN1Yk1lbnVJdGVtc0NvbmZpZyA9IHtcbiAgbmFtZTogJ3NlYXJjaEJhclN1Yk1lbnVJdGVtcycsXG4gIGNvbmZpZzogW1xuICAgIHtcbiAgICAgIG5hbWU6IFwiUmVwb3J0IElzc3VlXCIsXG4gICAgICBkZXNjcmlwdGlvbjogXCJSZXBvcnQgYW4gaXNzdWUgb3IgcHJvYmxlbVwiLFxuICAgICAgYWN0aW9uOiBcImh0dHBzOi8vd3d3LnBjYy5lZHUvbGlicmFyeS9hYm91dC9wZW9wbGUvY29udGFjdC9yZXBvcnQtaXNzdWVzL1wiLFxuICAgICAgaWNvbjoge1xuICAgICAgICBzZXQ6ICdjb21tdW5pY2F0aW9uJyxcbiAgICAgICAgaWNvbjogJ2ljX2NvbW1lbnRfMjRweCdcbiAgICAgIH1cbiAgICB9XG4gIF1cbn07XG4iLCIvLyB2aWRcbmV4cG9ydCBsZXQgdmlld05hbWUgPSBcIlBDQ19OVUlcIjtcbiIsInJlcXVpcmUoJy4vanMvY2xpY2thYmxlLWxvZ28tdG8tYW55LWxpbmsubW9kdWxlLmpzJylcbm1vZHVsZS5leHBvcnRzID0gJ2NsaWNrYWJsZUxvZ29Ub0FueUxpbmsnXG4iLCJhbmd1bGFyXG4gIC5tb2R1bGUoJ2NsaWNrYWJsZUxvZ29Ub0FueUxpbmsnLCBbXSlcbiAgLmNvbnRyb2xsZXIoJ2NsaWNrYWJsZUxvZ29Ub0FueUxpbmtDb250cm9sbGVyJywgWydjbGlja2FibGVMb2dvTGlua0NvbmZpZycsICckc2NvcGUnLCAnJGZpbHRlcicsIGZ1bmN0aW9uKGNsaWNrYWJsZUxvZ29MaW5rQ29uZmlnLCAkc2NvcGUsICRmaWx0ZXIpIHtcbiAgICAkc2NvcGUuY2xpY2thYmxlTG9nb0xpbmsgPSBjbGlja2FibGVMb2dvTGlua0NvbmZpZy51cmw7XG4gICAgJHNjb3BlLmNsaWNrYWJsZUxvZ29BbHQgPSBjbGlja2FibGVMb2dvTGlua0NvbmZpZy5hbHRUZXh0O1xuICAgICRzY29wZS5pY29uTGluayA9IHRoaXMucGFyZW50Q3RybC5pY29uTGlua1xuICAgICRzY29wZS50cmFuc2xhdGUgPSAob3JpZ2luYWwpID0+IHtcbiAgICAgIHJldHVybiBvcmlnaW5hbC5yZXBsYWNlKC9cXHsoLispXFx9L2csIChtYXRjaCwgcDEpID0+ICRmaWx0ZXIoJ3RyYW5zbGF0ZScpKHAxKSk7XG4gICAgfVxuICB9XSlcbiAgLmNvbXBvbmVudCgncHJtTG9nb0FmdGVyJywge1xuICAgIGJpbmRpbmdzOiB7XG4gICAgICBwYXJlbnRDdHJsOiAnPCdcbiAgICB9LFxuICAgIGNvbnRyb2xsZXI6ICdjbGlja2FibGVMb2dvVG9BbnlMaW5rQ29udHJvbGxlcicsXG4gICAgdGVtcGxhdGU6ICc8ZGl2IGNsYXNzPVwicHJvZHVjdC1sb2dvIHByb2R1Y3QtbG9nby1sb2NhbFwiIGxheW91dD1cInJvd1wiIGxheW91dC1hbGlnbj1cInN0YXJ0IGNlbnRlclwiIGxheW91dC1maWxsIGlkPVwiYmFubmVyXCIgdGFiaW5kZXg9XCIwXCIgcm9sZT1cImJhbm5lclwiPicrXG4gICAgICAgICAgICAgICAgJzxhIG5nLWhyZWY9XCJ7eyB0cmFuc2xhdGUoY2xpY2thYmxlTG9nb0xpbmspIH19XCI+PGltZyBjbGFzcz1cImxvZ28taW1hZ2VcIiBuZy1hbHQ9XCJ7eyB0cmFuc2xhdGUoY2xpY2thYmxlTG9nb0FsdCkgfX1cIiBuZy1zcmM9XCJ7eyBpY29uTGluayB9fVwiLz48L2E+JytcbiAgICAgICAgICAgICAgJzwvZGl2PidcblxuICB9KTtcbiIsInJlcXVpcmUoJy4vanMvY3VzdG9tLWFjdGlvbnMubW9kdWxlLmpzJylcbm1vZHVsZS5leHBvcnRzID0gJ2N1c3RvbUFjdGlvbnMnXG4iLCJhbmd1bGFyXG4gIC5tb2R1bGUoJ2N1c3RvbUFjdGlvbnMnLCBbXSlcbiAgLmNvbXBvbmVudCgncHJtQWN0aW9uQ29udGFpbmVyQWZ0ZXInLCB7XG4gICAgcmVxdWlyZTogeyBwcm1BY3Rpb25DdHJsOiAnXnBybUFjdGlvbkxpc3QnIH0sXG4gICAgY29udHJvbGxlcjogWydjdXN0b21BY3Rpb25zU2VydmljZScsICdjdXN0b21BY3Rpb25zJywgZnVuY3Rpb24gKGN1c3RvbUFjdGlvbnNTZXJ2aWNlLCBjdXN0b21BY3Rpb25zKSB7XG4gICAgICB0aGlzLiRvbkluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGN1c3RvbUFjdGlvbnNTZXJ2aWNlLnNldENvbnRyb2xsZXIodGhpcy5wcm1BY3Rpb25DdHJsKVxuICAgICAgICBjdXN0b21BY3Rpb25zLm1hcChhY3Rpb24gPT4gY3VzdG9tQWN0aW9uc1NlcnZpY2UuYWRkQWN0aW9uKGFjdGlvbikpXG4gICAgICB9XG4gICAgfV1cbiAgfSlcbiAgLmZhY3RvcnkoJ2N1c3RvbUFjdGlvbnNTZXJ2aWNlJywgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB7XG4gICAgICBzZXRDb250cm9sbGVyOiBmdW5jdGlvbiAoY29udHJvbGxlcikge1xuICAgICAgICB0aGlzLnBybUFjdGlvbkN0cmwgPSBjb250cm9sbGVyXG4gICAgICB9LFxuICAgICAgcHJvY2Vzc0FjdGlvbjogZnVuY3Rpb24gKGFjdGlvbikge1xuICAgICAgICBhY3Rpb24uaWNvbm5hbWUgPSBhY3Rpb24ubmFtZS5yZXBsYWNlKC9cXHMrL2csICcnKSxcbiAgICAgICAgYWN0aW9uLnNsdWcgPSBhY3Rpb24ubmFtZS5yZXBsYWNlKC9cXHMrL2csICcnKS50b0xvd2VyQ2FzZSgpLFxuICAgICAgICBhY3Rpb24uaW5kZXggPSBPYmplY3Qua2V5cyh0aGlzLnBybUFjdGlvbkN0cmwuYWN0aW9uTGlzdFNlcnZpY2UuYWN0aW9uc1RvSW5kZXgpLmxlbmd0aCAtIDFcbiAgICAgICAgdGhpcy5wcm1BY3Rpb25DdHJsLmFjdGlvbkxhYmVsTmFtZXNNYXBbYWN0aW9uLnNsdWddID0gYWN0aW9uLm5hbWVcbiAgICAgICAgdGhpcy5wcm1BY3Rpb25DdHJsLmFjdGlvbkljb25OYW1lc01hcFthY3Rpb24uc2x1Z10gPSBhY3Rpb24uaWNvbm5hbWVcbiAgICAgICAgdGhpcy5wcm1BY3Rpb25DdHJsLmFjdGlvbkljb25zW2FjdGlvbi5pY29ubmFtZV0gPSB7XG4gICAgICAgICAgaWNvbjogYWN0aW9uLmljb24ubmFtZSxcbiAgICAgICAgICBpY29uU2V0OiBhY3Rpb24uaWNvbi5zZXQsXG4gICAgICAgICAgdHlwZTogXCJzdmdcIlxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhY3Rpb25cbiAgICAgIH0sXG4gICAgICBhZGRBY3Rpb246IGZ1bmN0aW9uIChhY3Rpb24pIHtcbiAgICAgICAgYWN0aW9uID0gdGhpcy5wcm9jZXNzQWN0aW9uKGFjdGlvbilcbiAgICAgICAgaWYgKCF0aGlzLnBybUFjdGlvbkN0cmwuYWN0aW9uTGlzdFNlcnZpY2UuYWN0aW9uc1RvSW5kZXhbYWN0aW9uLnNsdWddKSB7XG4gICAgICAgICAgdGhpcy5wcm1BY3Rpb25DdHJsLmFjdGlvbkxpc3RTZXJ2aWNlLnJlcXVpcmVkQWN0aW9uc0xpc3RbYWN0aW9uLmluZGV4XSA9IGFjdGlvbi5zbHVnXG4gICAgICAgICAgdGhpcy5wcm1BY3Rpb25DdHJsLmFjdGlvbkxpc3RTZXJ2aWNlLmFjdGlvbnNUb0Rpc3BsYXkudW5zaGlmdChhY3Rpb24uc2x1ZylcbiAgICAgICAgICB0aGlzLnBybUFjdGlvbkN0cmwuYWN0aW9uTGlzdFNlcnZpY2UuYWN0aW9uc1RvSW5kZXhbYWN0aW9uLnNsdWddID0gYWN0aW9uLmluZGV4XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGFjdGlvbi50eXBlID09PSAndGVtcGxhdGUnKSB7XG4gICAgICAgICAgICAvLyBwcm9jZXNzIHsgfSBpbiB0ZW1wbGF0ZVZhcnNcbiAgICAgICAgICAgIGlmIChhY3Rpb24uaGFzT3duUHJvcGVydHkoJ3RlbXBsYXRlVmFyJykpIHtcbiAgICAgICAgICAgICAgICBhY3Rpb24uYWN0aW9uID0gYWN0aW9uLmFjdGlvbi5yZXBsYWNlKC97XFxkfS9nLCAocikgPT4gYWN0aW9uLnRlbXBsYXRlVmFyW3IucmVwbGFjZSgvW15cXGRdL2csICcnKV0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyByZXBsYWNlIGEgcmVjb3JkSWQgb2NjdXJlbmNlXG4gICAgICAgICAgICBhY3Rpb24uYWN0aW9uID0gYWN0aW9uLmFjdGlvbi5yZXBsYWNlKC97cmVjb3JkSWR9L2csIChyKSA9PiB0aGlzLnBybUFjdGlvbkN0cmwuaXRlbS5wbnguc2VhcmNoLnJlY29yZGlkWzBdKVxuICAgICAgICAgICAgLy8gcmVwbGFjZSBhIHBueC54eHgueHh4WzBdIHBhdHRlcm4gZXguIHBueC5zZWFyY2gucmVjb3JkaWRbMF1cbiAgICAgICAgICAgIGxldCBwbnhQcm9wZXJ0aWVzID0gYWN0aW9uLmFjdGlvbi5tYXRjaCgvXFx7KHBueFxcLi4qPylcXH0vZykgfHwgW11cbiAgICAgICAgICAgIHBueFByb3BlcnRpZXMuZm9yRWFjaCgocCkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCB2YWx1ZUZvclAgPSBwLnJlcGxhY2UoL1t7fV0vZywgJycpLnNwbGl0KCcuJykucmVkdWNlKChvLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaCA9IC8oLiopKFxcW1xcZFxcXSkvLmV4ZWMoaSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChoIGluc3RhbmNlb2YgQXJyYXkpIHsgcmV0dXJuIG9baFsxXV1baFsyXS5yZXBsYWNlKC9bXlxcZF0vZywgJycpXSB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gb1tpXVxuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJydcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIHRoaXMucHJtQWN0aW9uQ3RybC5pdGVtKVxuICAgICAgICAgICAgICAgIGFjdGlvbi5hY3Rpb24gPSBhY3Rpb24uYWN0aW9uLnJlcGxhY2UocCwgdmFsdWVGb3JQKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnBybUFjdGlvbkN0cmwuYWN0aW9uTGlzdFNlcnZpY2Uub25Ub2dnbGVbYWN0aW9uLnNsdWddID0gKCkgPT4gd2luZG93Lm9wZW4oYWN0aW9uLmFjdGlvbiwgJ19ibGFuaycpXG4gICAgICB9XG4gICAgfVxuICB9KVxuIiwicmVxdWlyZSgnLi9qcy9jdXN0b20tbm8tc2VhcmNoLXJlc3VsdHMubW9kdWxlLmpzJylcbm1vZHVsZS5leHBvcnRzID0gJ2N1c3RvbU5vU2VhcmNoUmVzdWx0cydcbiIsImFuZ3VsYXJcbiAgLm1vZHVsZSgnY3VzdG9tTm9TZWFyY2hSZXN1bHRzJywgW10pXG4gIC5jb21wb25lbnQoJ3BybU5vU2VhcmNoUmVzdWx0QWZ0ZXInLCB7XG4gICAgYmluZGluZ3M6IHtcbiAgICAgIHBhcmVudEN0cmw6ICc8J1xuICAgIH0sXG4gICAgdGVtcGxhdGVVcmw6IFsnY3VzdG9tTm9TZWFyY2hSZXN1bHRzVGVtcGxhdGVVcmwnLCBmdW5jdGlvbiAoY3VzdG9tTm9TZWFyY2hSZXN1bHRzVGVtcGxhdGVVcmwpIHtcbiAgICAgIHJldHVybiBjdXN0b21Ob1NlYXJjaFJlc3VsdHNUZW1wbGF0ZVVybDtcbiAgICB9XVxuICB9KTtcbiIsInJlcXVpcmUoJy4vanMvZXh0ZXJuYWwtc2VhcmNoLm1vZHVsZS5qcycpXG5tb2R1bGUuZXhwb3J0cyA9ICdleHRlcm5hbFNlYXJjaCdcbiIsImFuZ3VsYXJcbiAgLm1vZHVsZSgnZXh0ZXJuYWxTZWFyY2gnLCBbXSlcbiAgLnZhbHVlKCdzZWFyY2hUYXJnZXRzJywgW10pXG4gIC5jb21wb25lbnQoJ3BybUZhY2V0QWZ0ZXInLCB7XG4gICAgICBiaW5kaW5nczogeyBwYXJlbnRDdHJsOiAnPCcgfSxcbiAgICAgIGNvbnRyb2xsZXI6IFsnZXh0ZXJuYWxTZWFyY2hTZXJ2aWNlJywgZnVuY3Rpb24gKGV4dGVybmFsU2VhcmNoU2VydmljZSkge1xuICAgICAgICBleHRlcm5hbFNlYXJjaFNlcnZpY2UuY29udHJvbGxlciA9IHRoaXMucGFyZW50Q3RybFxuICAgICAgICBleHRlcm5hbFNlYXJjaFNlcnZpY2UuYWRkRXh0U2VhcmNoKClcbiAgICAgIH1dXG4gIH0pXG4gIC5jb21wb25lbnQoJ3BybVBhZ2VOYXZNZW51QWZ0ZXInLCB7XG4gICAgY29udHJvbGxlcjogWydleHRlcm5hbFNlYXJjaFNlcnZpY2UnLCBmdW5jdGlvbiAoZXh0ZXJuYWxTZWFyY2hTZXJ2aWNlKSB7XG4gICAgICBpZiAoZXh0ZXJuYWxTZWFyY2hTZXJ2aWNlLmNvbnRyb2xsZXIpIGV4dGVybmFsU2VhcmNoU2VydmljZS5hZGRFeHRTZWFyY2goKVxuICAgIH1dXG4gIH0pXG4gIC5jb21wb25lbnQoJ3BybUZhY2V0RXhhY3RBZnRlcicsIHtcbiAgICAgIGJpbmRpbmdzOiB7IHBhcmVudEN0cmw6ICc8JyB9LFxuICAgICAgdGVtcGxhdGU6IGBcbiAgICAgIDxkaXYgbmctaWY9XCJuYW1lID09PSAnRXh0ZXJuYWwgU2VhcmNoJ1wiPlxuICAgICAgICAgIDxkaXYgbmctaGlkZT1cIiRjdHJsLnBhcmVudEN0cmwuZmFjZXRHcm91cC5mYWNldEdyb3VwQ29sbGFwc2VkXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uLWNvbnRlbnQgYW5pbWF0ZS1tYXgtaGVpZ2h0LXZhcmlhYmxlXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWQtY2hpcHMgbWQtY2hpcHMtd3JhcFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgbmctcmVwZWF0PVwidGFyZ2V0IGluIHRhcmdldHNcIiBhcmlhLWxpdmU9XCJwb2xpdGVcIiBjbGFzcz1cIm1kLWNoaXAgYW5pbWF0ZS1vcGFjaXR5LWFuZC1zY2FsZSBmYWNldC1lbGVtZW50LW1hcmtlci1sb2NhbDRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1kLWNoaXAtY29udGVudCBsYXlvdXQtcm93XCIgcm9sZT1cImJ1dHRvblwiIHRhYmluZGV4PVwiMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZyBkaXI9XCJhdXRvXCIgdGl0bGU9XCJ7eyB0YXJnZXQubmFtZSB9fVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIG5nLWhyZWY9XCJ7eyB0YXJnZXQudXJsICsgdGFyZ2V0Lm1hcHBpbmcocXVlcmllcywgZmlsdGVycykgfX1cIiB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBuZy1zcmM9XCJ7eyB0YXJnZXQuaW1nIH19XCIgd2lkdGg9XCIyMlwiIGhlaWdodD1cIjIyXCIgc3R5bGU9XCJ2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7XCI+IHt7IHRhcmdldC5uYW1lIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+YCxcbiAgICAgIGNvbnRyb2xsZXI6IFsnJHNjb3BlJywgJyRsb2NhdGlvbicsICdzZWFyY2hUYXJnZXRzJywgZnVuY3Rpb24gKCRzY29wZSwgJGxvY2F0aW9uLCBzZWFyY2hUYXJnZXRzKSB7XG4gICAgICAgICRzY29wZS5uYW1lID0gdGhpcy5wYXJlbnRDdHJsLmZhY2V0R3JvdXAubmFtZVxuICAgICAgICAkc2NvcGUudGFyZ2V0cyA9IHNlYXJjaFRhcmdldHNcbiAgICAgICAgbGV0IHF1ZXJ5ID0gJGxvY2F0aW9uLnNlYXJjaCgpLnF1ZXJ5XG4gICAgICAgIGxldCBmaWx0ZXIgPSAkbG9jYXRpb24uc2VhcmNoKCkucGZpbHRlclxuICAgICAgICAkc2NvcGUucXVlcmllcyA9IEFycmF5LmlzQXJyYXkocXVlcnkpID8gcXVlcnkgOiBxdWVyeSA/IFtxdWVyeV0gOiBmYWxzZVxuICAgICAgICAkc2NvcGUuZmlsdGVycyA9IEFycmF5LmlzQXJyYXkoZmlsdGVyKSA/IGZpbHRlciA6IGZpbHRlciA/IFtmaWx0ZXJdIDogZmFsc2VcbiAgICAgIH1dXG4gIH0pXG4gIC5mYWN0b3J5KCdleHRlcm5hbFNlYXJjaFNlcnZpY2UnLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGdldCBjb250cm9sbGVyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm1GYWNldEN0cmwgfHwgZmFsc2VcbiAgICAgIH0sXG4gICAgICBzZXQgY29udHJvbGxlcihjb250cm9sbGVyKSB7XG4gICAgICAgIHRoaXMucHJtRmFjZXRDdHJsID0gY29udHJvbGxlclxuICAgICAgfSxcbiAgICAgIGFkZEV4dFNlYXJjaDogZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5wcm1GYWNldEN0cmwuZmFjZXRTZXJ2aWNlLnJlc3VsdHNbMF0ubmFtZSAhPT0gJ0V4dGVybmFsIFNlYXJjaCcpIHtcbiAgICAgICAgICB0aGlzLnBybUZhY2V0Q3RybC5mYWNldFNlcnZpY2UucmVzdWx0cy5wdXNoKHtcbiAgICAgICAgICAgIG5hbWU6ICdFeHRlcm5hbCBTZWFyY2gnLFxuICAgICAgICAgICAgZGlzcGxheWVkVHlwZTogJ2V4YWN0JyxcbiAgICAgICAgICAgIGxpbWl0Q291bnQ6IDAsXG4gICAgICAgICAgICBmYWNldEdyb3VwQ29sbGFwc2VkOiBmYWxzZSxcbiAgICAgICAgICAgIHZhbHVlczogdW5kZWZpbmVkXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSlcbiIsInJlcXVpcmUoJy4vanMvbGlicmFyeWgzbHAtd2lkZ2V0Lm1vZHVsZS5qcycpXG5tb2R1bGUuZXhwb3J0cyA9ICdsaWJyYXJ5aDNscFdpZGdldCdcbiIsImFuZ3VsYXJcbiAgLy8gTmFtZSBvdXIgbW9kdWxlXG4gIC5tb2R1bGUoJ2xpYnJhcnloM2xwV2lkZ2V0JywgW10pXG4gIC8vIEFkZCB0aGUgbGlicmFyeWgzbHAgdXJsIHRvIHRydXN0ZWQgdXJsIHNvdXJjZXNcbiAgLy8gc28gYW5ndWxhciBkb2Vzbid0IGJsb2NrIGl0IGZyb20gYW4gaWZyYW1lXG4gIC5maWx0ZXIoJ3RydXN0VXJsJywgWyckc2NlJywgZnVuY3Rpb24gKCRzY2UpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24odXJsKSB7XG4gICAgICBpZiAoL15odHRwKHMpPzpcXC9cXC8oLitcXC4pP2xpYnJhcnloM2xwXFwuY29tLiskLy50ZXN0KHVybCkpIHtcbiAgICAgICAgcmV0dXJuICRzY2UudHJ1c3RBc1Jlc291cmNlVXJsKHVybCk7XG4gICAgICB9XG4gICAgfTtcbiAgfV0pXG4gICAgLmZpbHRlcignZmFsbGJhY2tVcmwnLCBbJyRzY2UnLCBmdW5jdGlvbiAoJHNjZSkge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24oZmFsbGJhY2spIHtcbiAgICAgICAgICAgIGlmICgvXmh0dHAocyk/OlxcL1xcLyguK1xcLik/cXVlc3Rpb25wb2ludFxcLm9yZy4rJC8udGVzdChmYWxsYmFjaykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJHNjZS50cnVzdEFzUmVzb3VyY2VVcmwoZmFsbGJhY2spO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1dKVxuICAvLyBDb250cm9sbGVyIGZvciB0aGUgY29tcG9uZW50IGJlbG93XG4gIC5jb250cm9sbGVyKCdsaWJyYXJ5aDNscFdpZGdldENvbnRyb2xsZXInLCBbJ2xpYnJhcnloM2xwV2lkZ2V0Q29uZmlnJywgJyRzY29wZScsIGZ1bmN0aW9uKGxpYnJhcnloM2xwV2lkZ2V0Q29uZmlnLCAkc2NvcGUpIHtcbiAgICB0aGlzLiRvbkluaXQgPSAoKSA9PiB7XG4gICAgICAkc2NvcGUuY29uZmlnID0gbGlicmFyeWgzbHBXaWRnZXRDb25maWc7XG4gICAgICAkc2NvcGUucGFyZW50Q3RybCA9IHRoaXMucGFyZW50Q3RybDtcbiAgICB9XG4gICAgLy8gRG8gZmFjZXRzIGV4aXN0P1xuICAgICRzY29wZS5mYWNldHNFeGlzdCA9ICgpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiAoJHNjb3BlLnBhcmVudEN0cmwuc2VhcmNoU2VydmljZS5mYWNldFNlcnZpY2UucmVzdWx0cy5sZW5ndGggPiAwKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBBZGQgdGhlIGJvdHRvbSBwYWRkaW5nIGNsYXNzIGlmIHRoZXJlIGFyZSBmYWNldHNcbiAgICAkc2NvcGUuYm90dG9tUGFkZGluZyA9ICgpID0+IHtcbiAgICAgIGlmICgkc2NvcGUuZmFjZXRzRXhpc3QoKSkge1xuICAgICAgICByZXR1cm4gXCJjaGF0LWJvdHRvbS1wYWRkaW5nXCI7XG4gICAgICB9XG4gICAgfVxuICB9XSlcbiAgLmNvbXBvbmVudCgncHJtRXhwbG9yZU1haW5BZnRlcicsIHtcbiAgICBiaW5kaW5nczoge1xuICAgICAgcGFyZW50Q3RybDogJzwnXG4gICAgfSxcbiAgICBjb250cm9sbGVyOiAnbGlicmFyeWgzbHBXaWRnZXRDb250cm9sbGVyJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnV0dG9uIGNoYXQtdGFiIHNzLWNoYXQganMtdG9nZ2xlLWNoYXRcIiBuZy1jbGFzcz1cImJvdHRvbVBhZGRpbmcoKVwiIG5nLWluaXQ9XCJzaG93Q2hhdFdpZGdldCA9IGZhbHNlXCIgbmctY2xpY2s9XCJzaG93Q2hhdFdpZGdldCA9ICFzaG93Q2hhdFdpZGdldFwiPlxuICAgICAgICAgICAgICAgIDxwcm0taWNvbiBzdHlsZT1cInotaW5kZXg6MVwiIGljb24tdHlwZT1cInN2Z1wiIHN2Zy1pY29uLXNldD1cInt7Y29uZmlnLmljb24uc2V0fX1cIiBpY29uLWRlZmluaXRpb249XCJ7e2NvbmZpZy5pY29uLmljb259fVwiPjwvcHJtLWljb24+XG4gICAgICAgICAgICAgICAge3tjb25maWcucHJvbXB0fX1cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjaGF0LWZyYW1lLXdyYXBcIiBuZy1jbGFzcz1cImJvdHRvbVBhZGRpbmcoKVwiIG5nLXNob3c9XCJzaG93Q2hhdFdpZGdldFwiPlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiY2hhdC1jbG9zZSBzcy1pY29uIGpzLXRvZ2dsZS1jaGF0XCIgdGl0bGU9XCJDbG9zZSBjaGF0IHdpbmRvd1wiIG5nLWNsaWNrPVwic2hvd0NoYXRXaWRnZXQgPSAhc2hvd0NoYXRXaWRnZXRcIj4mdGltZXM7PC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGlmcmFtZSBjbGFzcz1cImNoYXQtZnJhbWVcIiBuZy1zcmM9XCJ7e2NvbmZpZy51cmwgfCB0cnVzdFVybH19XCIgZnJhbWVib3JkZXI9XCIwXCI+PC9pZnJhbWU+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICBgXG4gIH0pO1xuIiwicmVxdWlyZSgnLi9qcy9zZWFyY2gtYmFyLXN1Yi1tZW51Lm1vZHVsZS5qcycpXG5tb2R1bGUuZXhwb3J0cyA9ICdzZWFyY2hCYXJTdWJNZW51J1xuIiwiYW5ndWxhclxuICAubW9kdWxlKCdzZWFyY2hCYXJTdWJNZW51JywgW10pXG4gIC5jb250cm9sbGVyKCdzZWFyY2hCYXJTdWJNZW51Q29udHJvbGxlcicsIFsnc2VhcmNoQmFyU3ViTWVudUl0ZW1zJywgJyRzY29wZScsICckZmlsdGVyJywgZnVuY3Rpb24oaXRlbXMsICRzY29wZSwgJGZpbHRlcikge1xuICAgIHRoaXMuJG9uSW5pdCA9ICgpID0+IHtcbiAgICAgICRzY29wZS5pdGVtcyA9IGl0ZW1zO1xuICAgIH1cbiAgICAkc2NvcGUudHJhbnNsYXRlID0gKG9yaWdpbmFsKSA9PiB7XG4gICAgICByZXR1cm4gb3JpZ2luYWwucmVwbGFjZSgvXFx7KC4rKVxcfS9nLCAobWF0Y2gsIHAxKSA9PiAkZmlsdGVyKCd0cmFuc2xhdGUnKShwMSkpO1xuICAgIH1cbiAgICAkc2NvcGUuZ29Ub1VybCA9ICh1cmwpID0+IHtcbiAgICAgIHdpbmRvdy5vcGVuKHVybCwgJ19ibGFuaycpO1xuICAgIH1cbiAgfV0pXG4gIC5jb21wb25lbnQoJ3NlYXJjaEJhclN1Yk1lbnUnLCB7XG4gICAgY29udHJvbGxlcjogJ3NlYXJjaEJhclN1Yk1lbnVDb250cm9sbGVyJyxcbiAgICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJsYXlvdXQtYWxpZ24tZW5kLWNlbnRlciBsYXlvdXQtcm93IGZsZXggc2VhcmNoLWJhci1zdWItbWVudVwiPlxuICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgIDxsaSBuZy1yZXBlYXQ9XCJpdGVtIGluIGl0ZW1zXCI+XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIGRhdGEtaHJlZj1cInt7IHRyYW5zbGF0ZShpdGVtLmFjdGlvbikgfX1cIiBhcmlhLWxhYmVsPVwie3sgdHJhbnNsYXRlKGl0ZW0uZGVzY3JpcHRpb24pIH19XCIgbmctY2xpY2s9XCJnb1RvVXJsKHRyYW5zbGF0ZShpdGVtLmFjdGlvbikpXCIgY2xhc3M9XCJidXR0b24td2l0aC1pY29uIHplcm8tbWFyZ2luIG1kLWJ1dHRvbiBtZC1zbWFsbCB7e2l0ZW0uY3NzQ2xhc3Nlc319XCIgdHlwZT1cImJ1dHRvblwiPlxuICAgICAgICAgICAgICAgICAgICA8bWQtdG9vbHRpcCBtZC1kaXJlY3Rpb249XCJib3R0b21cIiBtZC1kZWxheT1cIjUwMFwiPnt7IHRyYW5zbGF0ZShpdGVtLmRlc2NyaXB0aW9uKSB9fTwvbWQtdG9vbHRpcD48cHJtLWljb24gc3R5bGU9XCJ6LWluZGV4OjFcIiBpY29uLXR5cGU9XCJzdmdcIiBzdmctaWNvbi1zZXQ9XCJ7e2l0ZW0uaWNvbi5zZXR9fVwiIGljb24tZGVmaW5pdGlvbj1cInt7aXRlbS5pY29uLmljb259fVwiPjwvcHJtLWljb24+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic2VhcmNoLWJhci1zdWItbWVudS1pdGVtXCIgbmctY2xhc3M9XCIoaXRlbS5zaG93X3hzKSA/ICcnIDogJ2hpZGUteHMnXCI+e3sgdHJhbnNsYXRlKGl0ZW0ubmFtZSkgfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgPC9kaXY+YFxuXG4gIH0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5hbmd1bGFyLm1vZHVsZSgndG9nZ2xlSW5zdGl0dXRpb25zJywgW10pO1xuXG5hbmd1bGFyLm1vZHVsZSgndG9nZ2xlSW5zdGl0dXRpb25zJykuY29tcG9uZW50KCd0b2dnbGVJbnN0aXR1dGlvbnMnLCB7XG4gIGJpbmRpbmdzOiB7XG4gICAgc3RhcnRIaWRkZW46ICc8J1xuICB9LFxuICB0ZW1wbGF0ZTogJ1xcbiAgICA8bWQtYnV0dG9uIGNsYXNzPVwibWQtcmFpc2VkXCIgbmctY2xpY2s9XCIkY3RybC50b2dnbGVMaWJzKClcIiBpZD1cInN1bW1pdEJ1dHRvblwiIGFyaWEtY29udHJvbHM9XCJzdW1taXRMaW5rc1wiIGFyaWEtZXhwYW5kZWQ9ZmFsc2UgYXJpYS1sYWJlbD1cIlNob3cvSGlkZSBTdW1taXQgTGlicmFyaWVzXCI+XFxuICAgICAgICB7eyRjdHJsLnNob3dMaWJzID8gXFwnSGlkZSBTdW1taXQgTGlicmFyaWVzXFwnIDogXFwnU2hvdyBTdW1taXQgTGlicmFyaWVzXFwnfX1cXG4gICAgICA8c3BhbiBhcmlhLWhpZGRlbj10cnVlPnt7JGN0cmwuc2hvd0xpYnMgPyBcXCcmbGFxdW87XFwnIDogXFwnJnJhcXVvO1xcJ319PC9zcGFuPlxcbiAgICA8L21kLWJ1dHRvbj4nLFxuICBjb250cm9sbGVyOiBmdW5jdGlvbiBjb250cm9sbGVyKCkge1xuICAgIHRoaXMuJG9uSW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoaXMuc2hvd0xpYnMgPSB0aGlzLnN0YXJ0SGlkZGVuID09PSBmYWxzZSA/IHRydWUgOiBmYWxzZTtcbiAgICAgIHRoaXMuYnV0dG9uID0gYW5ndWxhci5lbGVtZW50KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3BybS1hbG1hLW1vcmUtaW5zdC1hZnRlciBidXR0b24nKSk7XG4gICAgICB0aGlzLnRhYnMgPSBhbmd1bGFyLmVsZW1lbnQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcigncHJtLWFsbWEtbW9yZS1pbnN0IG1kLXRhYnMnKSk7XG4gICAgICB0aGlzLnRhYnMuYXR0cignaWQnLCAnc3VtbWl0TGlua3MnKTtcbiAgICAgIHRoaXMuYnV0dG9uLnBhcmVudCgpLmFmdGVyKHRoaXMudGFicyk7XG4gICAgICBpZiAoIXRoaXMuc2hvd0xpYnMpIHRoaXMudGFicy5hZGRDbGFzcygnaGlkZScpO1xuICAgIH07XG4gICAgdGhpcy50b2dnbGVMaWJzID0gZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy5zaG93TGlicyA9ICF0aGlzLnNob3dMaWJzO1xuICAgICAgdGhpcy50YWJzLmhhc0NsYXNzKCdoaWRlJykgPyB0aGlzLnRhYnMucmVtb3ZlQ2xhc3MoJ2hpZGUnKSAmJiB0aGlzLmJ1dHRvbi5hdHRyKCdhcmlhLWV4cGFuZGVkJywgdHJ1ZSkgOiB0aGlzLnRhYnMuYWRkQ2xhc3MoJ2hpZGUnKSAmJiB0aGlzLmJ1dHRvbi5hdHRyKCdhcmlhLWV4cGFuZGVkJywgZmFsc2UpO1xuICAgIH07XG4gIH1cbn0pOyIsInJlcXVpcmUoJy4vZGlzdC9tb2R1bGUuanMnKVxubW9kdWxlLmV4cG9ydHMgPSAndG9nZ2xlSW5zdGl0dXRpb25zJ1xuIl19
