(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
'use strict';

angular
// Name our module
.module('linksInProfile', []).controller('linksInProfileController', ['$scope', function ($scope) {
    var _this = this;

    this.$onInit = function () {
        $scope.parentCtrl = _this.parentCtrl;
    };
}]).component('prmFinesAfter', {
    bindings: {
        parentCtrl: '<'
    },
    controller: 'linksInProfileController',
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
.module('libraryAccountQuestions', []).controller('libraryAccountQuestionsController', ['$scope', function ($scope) {
    var _this = this;

    this.$onInit = function () {
        $scope.parentCtrl = _this.parentCtrl;
    };
}]).component('prmMessagesAndBlocksOverviewAfter', {
    bindings: {
        parentCtrl: '<'
    },
    controller: 'libraryAccountQuestionsController',
    template: '\n              <div class="layout-row"><a\n                href="https://www.pcc.edu/library/services/borrowing/library-account-questions/"\n                class="md-button md-raised md-accent"\n                aria-label="Library Account Questions"\n              ><span>Library Account Questions</span>\n              </a></div>\n              '
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

var app = angular.module('viewCustom', ['clickableLogoToAnyLink', 'libraryh3lpWidget', 'searchBarSubMenu', 'toggleInstitutions', 'customActions', 'customNoSearchResults', 'externalSearch', 'linksInProfile', 'libraryAccountQuestions']);

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
  .component('prmPageNavMenu', {
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
          this.prmFacetCtrl.facetService.results.unshift({
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJwcmltby1leHBsb3JlL2N1c3RvbS9QQ0NfTlVJL2pzL0xpbmtzSW5Qcm9maWxlLmpzIiwicHJpbW8tZXhwbG9yZS9jdXN0b20vUENDX05VSS9qcy9jbGlja2FibGVMb2dvVG9BbnlMaW5rLmpzIiwicHJpbW8tZXhwbG9yZS9jdXN0b20vUENDX05VSS9qcy9jdXN0b21BY3Rpb25zLmpzIiwicHJpbW8tZXhwbG9yZS9jdXN0b20vUENDX05VSS9qcy9saWJyYXJ5QWNjb3VudFF1ZXN0aW9ucy5qcyIsInByaW1vLWV4cGxvcmUvY3VzdG9tL1BDQ19OVUkvanMvbGlicmFyeWgzbHBXaWRnZXQuanMiLCJwcmltby1leHBsb3JlL2N1c3RvbS9QQ0NfTlVJL2pzL21haW4uanMiLCJwcmltby1leHBsb3JlL2N1c3RvbS9QQ0NfTlVJL2pzL3NlYXJjaEJhclN1Yk1lbnUuanMiLCJwcmltby1leHBsb3JlL2N1c3RvbS9QQ0NfTlVJL2pzL3ZpZXdOYW1lLmpzIiwicHJpbW8tZXhwbG9yZS9jdXN0b20vUENDX05VSS9ub2RlX21vZHVsZXMvcHJpbW8tZXhwbG9yZS1jbGlja2FibGUtbG9nby10by1hbnktbGluay9pbmRleC5qcyIsInByaW1vLWV4cGxvcmUvY3VzdG9tL1BDQ19OVUkvbm9kZV9tb2R1bGVzL3ByaW1vLWV4cGxvcmUtY2xpY2thYmxlLWxvZ28tdG8tYW55LWxpbmsvanMvY2xpY2thYmxlLWxvZ28tdG8tYW55LWxpbmsubW9kdWxlLmpzIiwicHJpbW8tZXhwbG9yZS9jdXN0b20vUENDX05VSS9ub2RlX21vZHVsZXMvcHJpbW8tZXhwbG9yZS1jdXN0b20tYWN0aW9ucy9pbmRleC5qcyIsInByaW1vLWV4cGxvcmUvY3VzdG9tL1BDQ19OVUkvbm9kZV9tb2R1bGVzL3ByaW1vLWV4cGxvcmUtY3VzdG9tLWFjdGlvbnMvanMvY3VzdG9tLWFjdGlvbnMubW9kdWxlLmpzIiwicHJpbW8tZXhwbG9yZS9jdXN0b20vUENDX05VSS9ub2RlX21vZHVsZXMvcHJpbW8tZXhwbG9yZS1jdXN0b20tbm8tc2VhcmNoLXJlc3VsdHMvaW5kZXguanMiLCJwcmltby1leHBsb3JlL2N1c3RvbS9QQ0NfTlVJL25vZGVfbW9kdWxlcy9wcmltby1leHBsb3JlLWN1c3RvbS1uby1zZWFyY2gtcmVzdWx0cy9qcy9jdXN0b20tbm8tc2VhcmNoLXJlc3VsdHMubW9kdWxlLmpzIiwicHJpbW8tZXhwbG9yZS9jdXN0b20vUENDX05VSS9ub2RlX21vZHVsZXMvcHJpbW8tZXhwbG9yZS1leHRlcm5hbC1zZWFyY2gvaW5kZXguanMiLCJwcmltby1leHBsb3JlL2N1c3RvbS9QQ0NfTlVJL25vZGVfbW9kdWxlcy9wcmltby1leHBsb3JlLWV4dGVybmFsLXNlYXJjaC9qcy9leHRlcm5hbC1zZWFyY2gubW9kdWxlLmpzIiwicHJpbW8tZXhwbG9yZS9jdXN0b20vUENDX05VSS9ub2RlX21vZHVsZXMvcHJpbW8tZXhwbG9yZS1saWJyYXJ5aDNscC13aWRnZXQvaW5kZXguanMiLCJwcmltby1leHBsb3JlL2N1c3RvbS9QQ0NfTlVJL25vZGVfbW9kdWxlcy9wcmltby1leHBsb3JlLWxpYnJhcnloM2xwLXdpZGdldC9qcy9saWJyYXJ5aDNscC13aWRnZXQubW9kdWxlLmpzIiwicHJpbW8tZXhwbG9yZS9jdXN0b20vUENDX05VSS9ub2RlX21vZHVsZXMvcHJpbW8tZXhwbG9yZS1zZWFyY2gtYmFyLXN1Yi1tZW51L2luZGV4LmpzIiwicHJpbW8tZXhwbG9yZS9jdXN0b20vUENDX05VSS9ub2RlX21vZHVsZXMvcHJpbW8tZXhwbG9yZS1zZWFyY2gtYmFyLXN1Yi1tZW51L2pzL3NlYXJjaC1iYXItc3ViLW1lbnUubW9kdWxlLmpzIiwicHJpbW8tZXhwbG9yZS9jdXN0b20vUENDX05VSS9ub2RlX21vZHVsZXMvcHJpbW8tZXhwbG9yZS10b2dnbGUtaW5zdGl0dXRpb25zL2Rpc3QvbW9kdWxlLmpzIiwicHJpbW8tZXhwbG9yZS9jdXN0b20vUENDX05VSS9ub2RlX21vZHVsZXMvcHJpbW8tZXhwbG9yZS10b2dnbGUtaW5zdGl0dXRpb25zL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQTtBQUNBO0FBREEsQ0FFSyxNQUZMLENBRVksZ0JBRlosRUFFOEIsRUFGOUIsRUFHSyxVQUhMLENBR2dCLDBCQUhoQixFQUc0QyxDQUFDLFFBQUQsRUFBVyxVQUFVLE1BQVYsRUFBbUI7QUFBQTs7QUFDbEUsU0FBSyxPQUFMLEdBQWUsWUFBTTtBQUNqQixlQUFPLFVBQVAsR0FBb0IsTUFBSyxVQUF6QjtBQUNILEtBRkQ7QUFHSCxDQUp1QyxDQUg1QyxFQVFLLFNBUkwsQ0FRZSxlQVJmLEVBUWdDO0FBQ3hCLGNBQVU7QUFDTixvQkFBWTtBQUROLEtBRGM7QUFJeEIsZ0JBQVksMEJBSlk7QUFLeEI7QUFMd0IsQ0FSaEM7O0FBMkJBLE9BQU8sT0FBUCxHQUFpQixnQkFBakI7Ozs7Ozs7O0FDM0JPLElBQUksNERBQTBCO0FBQ25DLFFBQU0seUJBRDZCO0FBRW5DLFVBQVE7QUFDTixTQUFLLDZCQURDO0FBRU4sYUFBUztBQUZIO0FBRjJCLENBQTlCOzs7Ozs7OztBQ0FBLElBQUksb0RBQXNCO0FBQzdCLFVBQU0sZUFEdUI7QUFFN0IsWUFBUSxDQUNKO0FBQ0ksY0FBTSxjQURWO0FBRUkscUJBQWEsNEJBRmpCO0FBR0ksY0FBTSxVQUhWO0FBSUksY0FBTTtBQUNGLGlCQUFLLGVBREg7QUFFRixrQkFBTTtBQUZKLFNBSlY7QUFRSSxnQkFBUTtBQVJaLEtBREk7QUFGcUIsQ0FBMUI7Ozs7O0FDQVA7QUFDQTtBQURBLENBRUssTUFGTCxDQUVZLHlCQUZaLEVBRXVDLEVBRnZDLEVBR0ssVUFITCxDQUdnQixtQ0FIaEIsRUFHcUQsQ0FBQyxRQUFELEVBQVcsVUFBVSxNQUFWLEVBQW1CO0FBQUE7O0FBQzNFLFNBQUssT0FBTCxHQUFlLFlBQU07QUFDakIsZUFBTyxVQUFQLEdBQW9CLE1BQUssVUFBekI7QUFDSCxLQUZEO0FBR0gsQ0FKZ0QsQ0FIckQs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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqRUE7QUFDQTtBQUNBOztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4REE7QUFDQTtBQUNBOztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkJBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9cmV0dXJuIGV9KSgpIiwiYW5ndWxhclxuLy8gTmFtZSBvdXIgbW9kdWxlXG4gICAgLm1vZHVsZSgnbGlua3NJblByb2ZpbGUnLCBbXSlcbiAgICAuY29udHJvbGxlcignbGlua3NJblByb2ZpbGVDb250cm9sbGVyJywgWyckc2NvcGUnLCBmdW5jdGlvbiggJHNjb3BlICkge1xuICAgICAgICB0aGlzLiRvbkluaXQgPSAoKSA9PiB7XG4gICAgICAgICAgICAkc2NvcGUucGFyZW50Q3RybCA9IHRoaXMucGFyZW50Q3RybDtcbiAgICAgICAgfVxuICAgIH1dKVxuICAgIC5jb21wb25lbnQoJ3BybUZpbmVzQWZ0ZXInLCB7XG4gICAgICAgIGJpbmRpbmdzOiB7XG4gICAgICAgICAgICBwYXJlbnRDdHJsOiAnPCdcbiAgICAgICAgfSxcbiAgICAgICAgY29udHJvbGxlcjogJ2xpbmtzSW5Qcm9maWxlQ29udHJvbGxlcicsXG4gICAgICAgIHRlbXBsYXRlOiBgXG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGF5b3V0LXJvd1wiPjxhXG4gICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vc2VjdXJlLnRvdWNobmV0Lm5ldC9DMjEyNDlfdXN0b3Jlcy93ZWIvc3RvcmVfbWFpbi5qc3A/U1RPUkVJRD0yNCZTSU5HTEVTVE9SRT10cnVlXCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cIm1kLWJ1dHRvbiBtZC1yYWlzZWQgbWQtYWNjZW50XCJcbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiUGF5IGZpbmVzIG9ubGluZVwiXG4gICAgICAgICAgICAgID48c3Bhbj5QYXkgZmluZXMgb25saW5lPC9zcGFuPlxuICAgICAgICAgICAgICA8L2E+PC9kaXY+XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGF5b3V0LXJvd1wiPjxhIGhyZWY9XCJodHRwczovL3d3dy5wY2MuZWR1L2xpYnJhcnkvc2VydmljZXMvYm9ycm93aW5nL2xpYnJhcnktZmluZXMvXCI+U2VlIG90aGVyIHdheXMgdG8gZGVhbCB3aXRoIHlvdXIgZmluZXMuPC9hPjwvZGl2PlxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgYFxuICAgIH0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9ICdsaW5rc0luUHJvZmlsZSdcbiIsImV4cG9ydCBsZXQgY2xpY2thYmxlTG9nb0xpbmtDb25maWcgPSB7XG4gIG5hbWU6ICdjbGlja2FibGVMb2dvTGlua0NvbmZpZycsXG4gIGNvbmZpZzoge1xuICAgIHVybDogJ2h0dHBzOi8vd3d3LnBjYy5lZHUvbGlicmFyeScsXG4gICAgYWx0VGV4dDogJ1BDQyBMaWJyYXJ5J1xuICB9XG59O1xuIiwiZXhwb3J0IGxldCBjdXN0b21BY3Rpb25zQ29uZmlnID0ge1xuICAgIG5hbWU6ICdjdXN0b21BY3Rpb25zJyxcbiAgICBjb25maWc6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogXCJSZXBvcnQgSXNzdWVcIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIlJlcG9ydCBhbiBpc3N1ZSBvciBwcm9ibGVtXCIsXG4gICAgICAgICAgICB0eXBlOiAndGVtcGxhdGUnLFxuICAgICAgICAgICAgaWNvbjoge1xuICAgICAgICAgICAgICAgIHNldDogJ2NvbW11bmljYXRpb24nLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdpY19jb21tZW50XzI0cHgnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYWN0aW9uOiBcImh0dHBzOi8vd3d3LnBjYy5lZHUvbGlicmFyeS9hYm91dC9wZW9wbGUvY29udGFjdC9yZXBvcnQtaXNzdWVzL1wiXG4gICAgICAgIH1cbiAgICBdXG59O1xuIiwiYW5ndWxhclxuLy8gTmFtZSBvdXIgbW9kdWxlXG4gICAgLm1vZHVsZSgnbGlicmFyeUFjY291bnRRdWVzdGlvbnMnLCBbXSlcbiAgICAuY29udHJvbGxlcignbGlicmFyeUFjY291bnRRdWVzdGlvbnNDb250cm9sbGVyJywgWyckc2NvcGUnLCBmdW5jdGlvbiggJHNjb3BlICkge1xuICAgICAgICB0aGlzLiRvbkluaXQgPSAoKSA9PiB7XG4gICAgICAgICAgICAkc2NvcGUucGFyZW50Q3RybCA9IHRoaXMucGFyZW50Q3RybDtcbiAgICAgICAgfVxuICAgIH1dKVxuICAgIC5jb21wb25lbnQoJ3BybU1lc3NhZ2VzQW5kQmxvY2tzT3ZlcnZpZXdBZnRlcicsIHtcbiAgICAgICAgYmluZGluZ3M6IHtcbiAgICAgICAgICAgIHBhcmVudEN0cmw6ICc8J1xuICAgICAgICB9LFxuICAgICAgICBjb250cm9sbGVyOiAnbGlicmFyeUFjY291bnRRdWVzdGlvbnNDb250cm9sbGVyJyxcbiAgICAgICAgdGVtcGxhdGU6IGBcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxheW91dC1yb3dcIj48YVxuICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3d3dy5wY2MuZWR1L2xpYnJhcnkvc2VydmljZXMvYm9ycm93aW5nL2xpYnJhcnktYWNjb3VudC1xdWVzdGlvbnMvXCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cIm1kLWJ1dHRvbiBtZC1yYWlzZWQgbWQtYWNjZW50XCJcbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiTGlicmFyeSBBY2NvdW50IFF1ZXN0aW9uc1wiXG4gICAgICAgICAgICAgID48c3Bhbj5MaWJyYXJ5IEFjY291bnQgUXVlc3Rpb25zPC9zcGFuPlxuICAgICAgICAgICAgICA8L2E+PC9kaXY+XG4gICAgICAgICAgICAgIGBcbiAgICB9KTtcblxubW9kdWxlLmV4cG9ydHMgPSAnbGlicmFyeUFjY291bnRRdWVzdGlvbnMnXG4iLCJleHBvcnQgbGV0IGxpYnJhcnloM2xwV2lkZ2V0Q29uZmlnID0ge1xuICBuYW1lOiAnbGlicmFyeWgzbHBXaWRnZXRDb25maWcnLFxuICBjb25maWc6IHtcbiAgICB1cmw6ICdodHRwczovL2xpYnJhcnloM2xwLmNvbS9jaGF0L3BjYy1hc2stYS1saWJyYXJpYW5AY2hhdC5saWJyYXJ5aDNscC5jb20/c2tpbj0yODI0OCZ0aXRsZT1DaGF0K1dpdGgrQStMaWJyYXJpYW4maWRlbnRpdHk9UENDJyxcbiAgICBmYWxsYmFjazogJ2h0dHBzOi8vd3d3LnF1ZXN0aW9ucG9pbnQub3JnL2Nycy9xd2lkZ2V0VjQvanMvcXdpZGdldC5ib290c3RyYXBuai5qcz9sYW5nY29kZT0xJmluc3RpZD0xMzk2MSZza2luPWJsdWUmc2l6ZT1zdGFuZGFyZCcsXG4gICAgcHJvbXB0OiAnQ2hhdCcsXG4gICAgaWNvbjoge1xuICAgICAgc2V0OiAnY29tbXVuaWNhdGlvbicsXG4gICAgICBpY29uOiAnaWNfZm9ydW1fMjRweCdcbiAgICB9XG4gIH1cbn07XG4iLCJpbXBvcnQgJ3ByaW1vLWV4cGxvcmUtY2xpY2thYmxlLWxvZ28tdG8tYW55LWxpbmsnO1xuaW1wb3J0ICdwcmltby1leHBsb3JlLWxpYnJhcnloM2xwLXdpZGdldCc7XG5pbXBvcnQgJ3ByaW1vLWV4cGxvcmUtc2VhcmNoLWJhci1zdWItbWVudSc7XG5pbXBvcnQgJ3ByaW1vLWV4cGxvcmUtdG9nZ2xlLWluc3RpdHV0aW9ucyc7XG5pbXBvcnQgJ3ByaW1vLWV4cGxvcmUtY3VzdG9tLWFjdGlvbnMnO1xuaW1wb3J0ICdwcmltby1leHBsb3JlLWN1c3RvbS1uby1zZWFyY2gtcmVzdWx0cyc7XG5pbXBvcnQgJ3ByaW1vLWV4cGxvcmUtZXh0ZXJuYWwtc2VhcmNoJztcblxuXG5pbXBvcnQgeyB2aWV3TmFtZSB9IGZyb20gJy4vdmlld05hbWUnO1xuaW1wb3J0IHsgY2xpY2thYmxlTG9nb0xpbmtDb25maWcgfSBmcm9tICcuL2NsaWNrYWJsZUxvZ29Ub0FueUxpbmsnO1xuaW1wb3J0IHsgbGlicmFyeWgzbHBXaWRnZXRDb25maWcgfSBmcm9tICcuL2xpYnJhcnloM2xwV2lkZ2V0JztcbmltcG9ydCB7IHNlYXJjaEJhclN1Yk1lbnVJdGVtc0NvbmZpZyB9IGZyb20gJy4vc2VhcmNoQmFyU3ViTWVudSc7XG5pbXBvcnQgeyBjdXN0b21BY3Rpb25zQ29uZmlnIH0gZnJvbSAnLi9jdXN0b21BY3Rpb25zJztcbmltcG9ydCB7IGxpbmtzSW5Qcm9maWxlIH0gZnJvbSBcIi4vTGlua3NJblByb2ZpbGVcIjtcbmltcG9ydCB7IGxpYnJhcnlBY2NvdW50UXVlc3Rpb25zIH0gZnJvbSAnLi9saWJyYXJ5QWNjb3VudFF1ZXN0aW9ucydcblxuXG5sZXQgYXBwID0gYW5ndWxhci5tb2R1bGUoJ3ZpZXdDdXN0b20nLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NsaWNrYWJsZUxvZ29Ub0FueUxpbmsnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdsaWJyYXJ5aDNscFdpZGdldCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3NlYXJjaEJhclN1Yk1lbnUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0b2dnbGVJbnN0aXR1dGlvbnMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjdXN0b21BY3Rpb25zJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY3VzdG9tTm9TZWFyY2hSZXN1bHRzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZXh0ZXJuYWxTZWFyY2gnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdsaW5rc0luUHJvZmlsZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2xpYnJhcnlBY2NvdW50UXVlc3Rpb25zJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKTtcblxuYXBwXG4gICAgLmNvbnN0YW50KGN1c3RvbUFjdGlvbnNDb25maWcubmFtZSwgY3VzdG9tQWN0aW9uc0NvbmZpZy5jb25maWcpXG4gICAgLmNvbnN0YW50KGNsaWNrYWJsZUxvZ29MaW5rQ29uZmlnLm5hbWUsIGNsaWNrYWJsZUxvZ29MaW5rQ29uZmlnLmNvbmZpZylcbiAgICAuY29uc3RhbnQobGlicmFyeWgzbHBXaWRnZXRDb25maWcubmFtZSwgbGlicmFyeWgzbHBXaWRnZXRDb25maWcuY29uZmlnKVxuICAgIC5jb25zdGFudChzZWFyY2hCYXJTdWJNZW51SXRlbXNDb25maWcubmFtZSwgc2VhcmNoQmFyU3ViTWVudUl0ZW1zQ29uZmlnLmNvbmZpZylcbiAgICAudmFsdWUoJ2N1c3RvbU5vU2VhcmNoUmVzdWx0c1RlbXBsYXRlVXJsJywgJ2N1c3RvbS8nK3ZpZXdOYW1lKycvaHRtbC9ub1NlYXJjaFJlc3VsdHMuaHRtbCcpXG4gICAgLmNvbXBvbmVudCgncHJtU2VhcmNoQmFyQWZ0ZXInLCB7XG4gICAgdGVtcGxhdGU6ICc8c2VhcmNoLWJhci1zdWItbWVudT48L3NlYXJjaC1iYXItc3ViLW1lbnU+J1xuICAgIH0pXG4gICAgLmNvbXBvbmVudCgncHJtQWxtYU1vcmVJbnN0QWZ0ZXInLCB7dGVtcGxhdGU6ICc8dG9nZ2xlLWluc3RpdHV0aW9ucyAvPid9KVxuICAgIC52YWx1ZSgnc2VhcmNoVGFyZ2V0cycsIFt7XG4gICAgICAgIFwibmFtZVwiOiBcIldvcmxkY2F0XCIsXG4gICAgICAgIFwidXJsXCI6IFwiaHR0cHM6Ly9wY2Mub24ud29ybGRjYXQub3JnL3NlYXJjaD9cIixcbiAgICAgICAgXCJpbWdcIjogXCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vYWxsaWFuY2UtcGNzZy9wcmltby1leHBsb3JlLWV4dGVybmFsLXNlYXJjaC9tYXN0ZXIvd29ybGRjYXQtbG9nby5wbmdcIixcbiAgICAgICAgbWFwcGluZzogZnVuY3Rpb24gKHF1ZXJpZXMsIGZpbHRlcnMpIHtcbiAgICAgICAgICAgIGNvbnN0IHF1ZXJ5X21hcHBpbmdzID0ge1xuICAgICAgICAgICAgICAgICdhbnknOiAna3cnLFxuICAgICAgICAgICAgICAgICd0aXRsZSc6ICd0aScsXG4gICAgICAgICAgICAgICAgJ2NyZWF0b3InOiAnYXUnLFxuICAgICAgICAgICAgICAgICdzdWJqZWN0JzogJ3N1JyxcbiAgICAgICAgICAgICAgICAnaXNibic6ICdibicsXG4gICAgICAgICAgICAgICAgJ2lzc24nOiAnbjInXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHJldHVybiAncXVlcnlTdHJpbmc9JyArIHF1ZXJpZXMubWFwKHBhcnQgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgdGVybXMgPSBwYXJ0LnNwbGl0KCcsJylcbiAgICAgICAgICAgICAgICAgICAgbGV0IHR5cGUgPSBxdWVyeV9tYXBwaW5nc1t0ZXJtc1swXV0gfHwgJ2t3J1xuICAgICAgICAgICAgICAgICAgICBsZXQgc3RyaW5nID0gdGVybXNbMl0gfHwgJydcbiAgICAgICAgICAgICAgICAgICAgbGV0IGpvaW4gPSB0ZXJtc1szXSB8fCAnJ1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHlwZSArICc6JyArIHN0cmluZyArICcgJyArIGpvaW4gKyAnICdcbiAgICAgICAgICAgICAgICB9KS5qb2luKCcnKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJydcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIkdvb2dsZSBTY2hvbGFyXCIsXG4gICAgICAgICAgICBcInVybFwiOiBcImh0dHBzOi8vc2Nob2xhci5nb29nbGUuY29tL3NjaG9sYXI/cT1cIixcbiAgICAgICAgICAgIFwiaW1nXCI6IFwiaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvY29tbW9ucy90aHVtYi81LzUzL0dvb2dsZV8lMjJHJTIyX0xvZ28uc3ZnLzIwMHB4LUdvb2dsZV8lMjJHJTIyX0xvZ28uc3ZnLnBuZ1wiLFxuICAgICAgICAgICAgbWFwcGluZzogZnVuY3Rpb24gKHF1ZXJpZXMsIGZpbHRlcnMpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcXVlcmllcy5tYXAocGFydCA9PiBwYXJ0LnNwbGl0KFwiLFwiKVsyXSB8fCBcIlwiKS5qb2luKCcgJylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICcnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgXSlcblxuXG5cblxuXG4iLCJleHBvcnQgbGV0IHNlYXJjaEJhclN1Yk1lbnVJdGVtc0NvbmZpZyA9IHtcbiAgbmFtZTogJ3NlYXJjaEJhclN1Yk1lbnVJdGVtcycsXG4gIGNvbmZpZzogW1xuICAgIHtcbiAgICAgIG5hbWU6IFwiUmVwb3J0IElzc3VlXCIsXG4gICAgICBkZXNjcmlwdGlvbjogXCJSZXBvcnQgYW4gaXNzdWUgb3IgcHJvYmxlbVwiLFxuICAgICAgYWN0aW9uOiBcImh0dHBzOi8vd3d3LnBjYy5lZHUvbGlicmFyeS9hYm91dC9wZW9wbGUvY29udGFjdC9yZXBvcnQtaXNzdWVzL1wiLFxuICAgICAgaWNvbjoge1xuICAgICAgICBzZXQ6ICdjb21tdW5pY2F0aW9uJyxcbiAgICAgICAgaWNvbjogJ2ljX2NvbW1lbnRfMjRweCdcbiAgICAgIH1cbiAgICB9XG4gIF1cbn07XG4iLCIvLyB2aWRcbmV4cG9ydCBsZXQgdmlld05hbWUgPSBcIlBDQ19OVUlcIjtcbiIsInJlcXVpcmUoJy4vanMvY2xpY2thYmxlLWxvZ28tdG8tYW55LWxpbmsubW9kdWxlLmpzJylcbm1vZHVsZS5leHBvcnRzID0gJ2NsaWNrYWJsZUxvZ29Ub0FueUxpbmsnXG4iLCJhbmd1bGFyXG4gIC5tb2R1bGUoJ2NsaWNrYWJsZUxvZ29Ub0FueUxpbmsnLCBbXSlcbiAgLmNvbnRyb2xsZXIoJ2NsaWNrYWJsZUxvZ29Ub0FueUxpbmtDb250cm9sbGVyJywgWydjbGlja2FibGVMb2dvTGlua0NvbmZpZycsICckc2NvcGUnLCAnJGZpbHRlcicsIGZ1bmN0aW9uKGNsaWNrYWJsZUxvZ29MaW5rQ29uZmlnLCAkc2NvcGUsICRmaWx0ZXIpIHtcbiAgICAkc2NvcGUuY2xpY2thYmxlTG9nb0xpbmsgPSBjbGlja2FibGVMb2dvTGlua0NvbmZpZy51cmw7XG4gICAgJHNjb3BlLmNsaWNrYWJsZUxvZ29BbHQgPSBjbGlja2FibGVMb2dvTGlua0NvbmZpZy5hbHRUZXh0O1xuICAgICRzY29wZS5pY29uTGluayA9IHRoaXMucGFyZW50Q3RybC5pY29uTGlua1xuICAgICRzY29wZS50cmFuc2xhdGUgPSAob3JpZ2luYWwpID0+IHtcbiAgICAgIHJldHVybiBvcmlnaW5hbC5yZXBsYWNlKC9cXHsoLispXFx9L2csIChtYXRjaCwgcDEpID0+ICRmaWx0ZXIoJ3RyYW5zbGF0ZScpKHAxKSk7XG4gICAgfVxuICB9XSlcbiAgLmNvbXBvbmVudCgncHJtTG9nb0FmdGVyJywge1xuICAgIGJpbmRpbmdzOiB7XG4gICAgICBwYXJlbnRDdHJsOiAnPCdcbiAgICB9LFxuICAgIGNvbnRyb2xsZXI6ICdjbGlja2FibGVMb2dvVG9BbnlMaW5rQ29udHJvbGxlcicsXG4gICAgdGVtcGxhdGU6ICc8ZGl2IGNsYXNzPVwicHJvZHVjdC1sb2dvIHByb2R1Y3QtbG9nby1sb2NhbFwiIGxheW91dD1cInJvd1wiIGxheW91dC1hbGlnbj1cInN0YXJ0IGNlbnRlclwiIGxheW91dC1maWxsIGlkPVwiYmFubmVyXCIgdGFiaW5kZXg9XCIwXCIgcm9sZT1cImJhbm5lclwiPicrXG4gICAgICAgICAgICAgICAgJzxhIG5nLWhyZWY9XCJ7eyB0cmFuc2xhdGUoY2xpY2thYmxlTG9nb0xpbmspIH19XCI+PGltZyBjbGFzcz1cImxvZ28taW1hZ2VcIiBuZy1hbHQ9XCJ7eyB0cmFuc2xhdGUoY2xpY2thYmxlTG9nb0FsdCkgfX1cIiBuZy1zcmM9XCJ7eyBpY29uTGluayB9fVwiLz48L2E+JytcbiAgICAgICAgICAgICAgJzwvZGl2PidcblxuICB9KTtcbiIsInJlcXVpcmUoJy4vanMvY3VzdG9tLWFjdGlvbnMubW9kdWxlLmpzJylcbm1vZHVsZS5leHBvcnRzID0gJ2N1c3RvbUFjdGlvbnMnXG4iLCJhbmd1bGFyXG4gIC5tb2R1bGUoJ2N1c3RvbUFjdGlvbnMnLCBbXSlcbiAgLmNvbXBvbmVudCgncHJtQWN0aW9uQ29udGFpbmVyQWZ0ZXInLCB7XG4gICAgcmVxdWlyZTogeyBwcm1BY3Rpb25DdHJsOiAnXnBybUFjdGlvbkxpc3QnIH0sXG4gICAgY29udHJvbGxlcjogWydjdXN0b21BY3Rpb25zU2VydmljZScsICdjdXN0b21BY3Rpb25zJywgZnVuY3Rpb24gKGN1c3RvbUFjdGlvbnNTZXJ2aWNlLCBjdXN0b21BY3Rpb25zKSB7XG4gICAgICB0aGlzLiRvbkluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGN1c3RvbUFjdGlvbnNTZXJ2aWNlLnNldENvbnRyb2xsZXIodGhpcy5wcm1BY3Rpb25DdHJsKVxuICAgICAgICBjdXN0b21BY3Rpb25zLm1hcChhY3Rpb24gPT4gY3VzdG9tQWN0aW9uc1NlcnZpY2UuYWRkQWN0aW9uKGFjdGlvbikpXG4gICAgICB9XG4gICAgfV1cbiAgfSlcbiAgLmZhY3RvcnkoJ2N1c3RvbUFjdGlvbnNTZXJ2aWNlJywgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB7XG4gICAgICBzZXRDb250cm9sbGVyOiBmdW5jdGlvbiAoY29udHJvbGxlcikge1xuICAgICAgICB0aGlzLnBybUFjdGlvbkN0cmwgPSBjb250cm9sbGVyXG4gICAgICB9LFxuICAgICAgcHJvY2Vzc0FjdGlvbjogZnVuY3Rpb24gKGFjdGlvbikge1xuICAgICAgICBhY3Rpb24uaWNvbm5hbWUgPSBhY3Rpb24ubmFtZS5yZXBsYWNlKC9cXHMrL2csICcnKSxcbiAgICAgICAgYWN0aW9uLnNsdWcgPSBhY3Rpb24ubmFtZS5yZXBsYWNlKC9cXHMrL2csICcnKS50b0xvd2VyQ2FzZSgpLFxuICAgICAgICBhY3Rpb24uaW5kZXggPSBPYmplY3Qua2V5cyh0aGlzLnBybUFjdGlvbkN0cmwuYWN0aW9uTGlzdFNlcnZpY2UuYWN0aW9uc1RvSW5kZXgpLmxlbmd0aCAtIDFcbiAgICAgICAgdGhpcy5wcm1BY3Rpb25DdHJsLmFjdGlvbkxhYmVsTmFtZXNNYXBbYWN0aW9uLnNsdWddID0gYWN0aW9uLm5hbWVcbiAgICAgICAgdGhpcy5wcm1BY3Rpb25DdHJsLmFjdGlvbkljb25OYW1lc01hcFthY3Rpb24uc2x1Z10gPSBhY3Rpb24uaWNvbm5hbWVcbiAgICAgICAgdGhpcy5wcm1BY3Rpb25DdHJsLmFjdGlvbkljb25zW2FjdGlvbi5pY29ubmFtZV0gPSB7XG4gICAgICAgICAgaWNvbjogYWN0aW9uLmljb24ubmFtZSxcbiAgICAgICAgICBpY29uU2V0OiBhY3Rpb24uaWNvbi5zZXQsXG4gICAgICAgICAgdHlwZTogXCJzdmdcIlxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhY3Rpb25cbiAgICAgIH0sXG4gICAgICBhZGRBY3Rpb246IGZ1bmN0aW9uIChhY3Rpb24pIHtcbiAgICAgICAgYWN0aW9uID0gdGhpcy5wcm9jZXNzQWN0aW9uKGFjdGlvbilcbiAgICAgICAgaWYgKCF0aGlzLnBybUFjdGlvbkN0cmwuYWN0aW9uTGlzdFNlcnZpY2UuYWN0aW9uc1RvSW5kZXhbYWN0aW9uLnNsdWddKSB7XG4gICAgICAgICAgdGhpcy5wcm1BY3Rpb25DdHJsLmFjdGlvbkxpc3RTZXJ2aWNlLnJlcXVpcmVkQWN0aW9uc0xpc3RbYWN0aW9uLmluZGV4XSA9IGFjdGlvbi5zbHVnXG4gICAgICAgICAgdGhpcy5wcm1BY3Rpb25DdHJsLmFjdGlvbkxpc3RTZXJ2aWNlLmFjdGlvbnNUb0Rpc3BsYXkudW5zaGlmdChhY3Rpb24uc2x1ZylcbiAgICAgICAgICB0aGlzLnBybUFjdGlvbkN0cmwuYWN0aW9uTGlzdFNlcnZpY2UuYWN0aW9uc1RvSW5kZXhbYWN0aW9uLnNsdWddID0gYWN0aW9uLmluZGV4XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGFjdGlvbi50eXBlID09PSAndGVtcGxhdGUnKSB7XG4gICAgICAgICAgICAvLyBwcm9jZXNzIHsgfSBpbiB0ZW1wbGF0ZVZhcnNcbiAgICAgICAgICAgIGlmIChhY3Rpb24uaGFzT3duUHJvcGVydHkoJ3RlbXBsYXRlVmFyJykpIHtcbiAgICAgICAgICAgICAgICBhY3Rpb24uYWN0aW9uID0gYWN0aW9uLmFjdGlvbi5yZXBsYWNlKC97XFxkfS9nLCAocikgPT4gYWN0aW9uLnRlbXBsYXRlVmFyW3IucmVwbGFjZSgvW15cXGRdL2csICcnKV0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyByZXBsYWNlIGEgcmVjb3JkSWQgb2NjdXJlbmNlXG4gICAgICAgICAgICBhY3Rpb24uYWN0aW9uID0gYWN0aW9uLmFjdGlvbi5yZXBsYWNlKC97cmVjb3JkSWR9L2csIChyKSA9PiB0aGlzLnBybUFjdGlvbkN0cmwuaXRlbS5wbnguc2VhcmNoLnJlY29yZGlkWzBdKVxuICAgICAgICAgICAgLy8gcmVwbGFjZSBhIHBueC54eHgueHh4WzBdIHBhdHRlcm4gZXguIHBueC5zZWFyY2gucmVjb3JkaWRbMF1cbiAgICAgICAgICAgIGxldCBwbnhQcm9wZXJ0aWVzID0gYWN0aW9uLmFjdGlvbi5tYXRjaCgvXFx7KHBueFxcLi4qPylcXH0vZykgfHwgW11cbiAgICAgICAgICAgIHBueFByb3BlcnRpZXMuZm9yRWFjaCgocCkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCB2YWx1ZUZvclAgPSBwLnJlcGxhY2UoL1t7fV0vZywgJycpLnNwbGl0KCcuJykucmVkdWNlKChvLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaCA9IC8oLiopKFxcW1xcZFxcXSkvLmV4ZWMoaSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChoIGluc3RhbmNlb2YgQXJyYXkpIHsgcmV0dXJuIG9baFsxXV1baFsyXS5yZXBsYWNlKC9bXlxcZF0vZywgJycpXSB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gb1tpXVxuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJydcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIHRoaXMucHJtQWN0aW9uQ3RybC5pdGVtKVxuICAgICAgICAgICAgICAgIGFjdGlvbi5hY3Rpb24gPSBhY3Rpb24uYWN0aW9uLnJlcGxhY2UocCwgdmFsdWVGb3JQKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnBybUFjdGlvbkN0cmwuYWN0aW9uTGlzdFNlcnZpY2Uub25Ub2dnbGVbYWN0aW9uLnNsdWddID0gKCkgPT4gd2luZG93Lm9wZW4oYWN0aW9uLmFjdGlvbiwgJ19ibGFuaycpXG4gICAgICB9XG4gICAgfVxuICB9KVxuIiwicmVxdWlyZSgnLi9qcy9jdXN0b20tbm8tc2VhcmNoLXJlc3VsdHMubW9kdWxlLmpzJylcbm1vZHVsZS5leHBvcnRzID0gJ2N1c3RvbU5vU2VhcmNoUmVzdWx0cydcbiIsImFuZ3VsYXJcbiAgLm1vZHVsZSgnY3VzdG9tTm9TZWFyY2hSZXN1bHRzJywgW10pXG4gIC5jb21wb25lbnQoJ3BybU5vU2VhcmNoUmVzdWx0QWZ0ZXInLCB7XG4gICAgYmluZGluZ3M6IHtcbiAgICAgIHBhcmVudEN0cmw6ICc8J1xuICAgIH0sXG4gICAgdGVtcGxhdGVVcmw6IFsnY3VzdG9tTm9TZWFyY2hSZXN1bHRzVGVtcGxhdGVVcmwnLCBmdW5jdGlvbiAoY3VzdG9tTm9TZWFyY2hSZXN1bHRzVGVtcGxhdGVVcmwpIHtcbiAgICAgIHJldHVybiBjdXN0b21Ob1NlYXJjaFJlc3VsdHNUZW1wbGF0ZVVybDtcbiAgICB9XVxuICB9KTtcbiIsInJlcXVpcmUoJy4vanMvZXh0ZXJuYWwtc2VhcmNoLm1vZHVsZS5qcycpXG5tb2R1bGUuZXhwb3J0cyA9ICdleHRlcm5hbFNlYXJjaCdcbiIsImFuZ3VsYXJcbiAgLm1vZHVsZSgnZXh0ZXJuYWxTZWFyY2gnLCBbXSlcbiAgLnZhbHVlKCdzZWFyY2hUYXJnZXRzJywgW10pXG4gIC5jb21wb25lbnQoJ3BybUZhY2V0QWZ0ZXInLCB7XG4gICAgICBiaW5kaW5nczogeyBwYXJlbnRDdHJsOiAnPCcgfSxcbiAgICAgIGNvbnRyb2xsZXI6IFsnZXh0ZXJuYWxTZWFyY2hTZXJ2aWNlJywgZnVuY3Rpb24gKGV4dGVybmFsU2VhcmNoU2VydmljZSkge1xuICAgICAgICBleHRlcm5hbFNlYXJjaFNlcnZpY2UuY29udHJvbGxlciA9IHRoaXMucGFyZW50Q3RybFxuICAgICAgICBleHRlcm5hbFNlYXJjaFNlcnZpY2UuYWRkRXh0U2VhcmNoKClcbiAgICAgIH1dXG4gIH0pXG4gIC5jb21wb25lbnQoJ3BybVBhZ2VOYXZNZW51Jywge1xuICAgIGNvbnRyb2xsZXI6IFsnZXh0ZXJuYWxTZWFyY2hTZXJ2aWNlJywgZnVuY3Rpb24gKGV4dGVybmFsU2VhcmNoU2VydmljZSkge1xuICAgICAgaWYgKGV4dGVybmFsU2VhcmNoU2VydmljZS5jb250cm9sbGVyKSBleHRlcm5hbFNlYXJjaFNlcnZpY2UuYWRkRXh0U2VhcmNoKClcbiAgICB9XVxuICB9KVxuICAuY29tcG9uZW50KCdwcm1GYWNldEV4YWN0QWZ0ZXInLCB7XG4gICAgICBiaW5kaW5nczogeyBwYXJlbnRDdHJsOiAnPCcgfSxcbiAgICAgIHRlbXBsYXRlOiBgXG4gICAgICA8ZGl2IG5nLWlmPVwibmFtZSA9PT0gJ0V4dGVybmFsIFNlYXJjaCdcIj5cbiAgICAgICAgICA8ZGl2IG5nLWhpZGU9XCIkY3RybC5wYXJlbnRDdHJsLmZhY2V0R3JvdXAuZmFjZXRHcm91cENvbGxhcHNlZFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VjdGlvbi1jb250ZW50IGFuaW1hdGUtbWF4LWhlaWdodC12YXJpYWJsZVwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1kLWNoaXBzIG1kLWNoaXBzLXdyYXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IG5nLXJlcGVhdD1cInRhcmdldCBpbiB0YXJnZXRzXCIgYXJpYS1saXZlPVwicG9saXRlXCIgY2xhc3M9XCJtZC1jaGlwIGFuaW1hdGUtb3BhY2l0eS1hbmQtc2NhbGUgZmFjZXQtZWxlbWVudC1tYXJrZXItbG9jYWw0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZC1jaGlwLWNvbnRlbnQgbGF5b3V0LXJvd1wiIHJvbGU9XCJidXR0b25cIiB0YWJpbmRleD1cIjBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmcgZGlyPVwiYXV0b1wiIHRpdGxlPVwie3sgdGFyZ2V0Lm5hbWUgfX1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBuZy1ocmVmPVwie3sgdGFyZ2V0LnVybCArIHRhcmdldC5tYXBwaW5nKHF1ZXJpZXMsIGZpbHRlcnMpIH19XCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgbmctc3JjPVwie3sgdGFyZ2V0LmltZyB9fVwiIHdpZHRoPVwiMjJcIiBoZWlnaHQ9XCIyMlwiIHN0eWxlPVwidmVydGljYWwtYWxpZ246bWlkZGxlO1wiPiB7eyB0YXJnZXQubmFtZSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Ryb25nPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PmAsXG4gICAgICBjb250cm9sbGVyOiBbJyRzY29wZScsICckbG9jYXRpb24nLCAnc2VhcmNoVGFyZ2V0cycsIGZ1bmN0aW9uICgkc2NvcGUsICRsb2NhdGlvbiwgc2VhcmNoVGFyZ2V0cykge1xuICAgICAgICAkc2NvcGUubmFtZSA9IHRoaXMucGFyZW50Q3RybC5mYWNldEdyb3VwLm5hbWVcbiAgICAgICAgJHNjb3BlLnRhcmdldHMgPSBzZWFyY2hUYXJnZXRzXG4gICAgICAgIGxldCBxdWVyeSA9ICRsb2NhdGlvbi5zZWFyY2goKS5xdWVyeVxuICAgICAgICBsZXQgZmlsdGVyID0gJGxvY2F0aW9uLnNlYXJjaCgpLnBmaWx0ZXJcbiAgICAgICAgJHNjb3BlLnF1ZXJpZXMgPSBBcnJheS5pc0FycmF5KHF1ZXJ5KSA/IHF1ZXJ5IDogcXVlcnkgPyBbcXVlcnldIDogZmFsc2VcbiAgICAgICAgJHNjb3BlLmZpbHRlcnMgPSBBcnJheS5pc0FycmF5KGZpbHRlcikgPyBmaWx0ZXIgOiBmaWx0ZXIgPyBbZmlsdGVyXSA6IGZhbHNlXG4gICAgICB9XVxuICB9KVxuICAuZmFjdG9yeSgnZXh0ZXJuYWxTZWFyY2hTZXJ2aWNlJywgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB7XG4gICAgICBnZXQgY29udHJvbGxlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJtRmFjZXRDdHJsIHx8IGZhbHNlXG4gICAgICB9LFxuICAgICAgc2V0IGNvbnRyb2xsZXIoY29udHJvbGxlcikge1xuICAgICAgICB0aGlzLnBybUZhY2V0Q3RybCA9IGNvbnRyb2xsZXJcbiAgICAgIH0sXG4gICAgICBhZGRFeHRTZWFyY2g6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMucHJtRmFjZXRDdHJsLmZhY2V0U2VydmljZS5yZXN1bHRzWzBdLm5hbWUgIT09ICdFeHRlcm5hbCBTZWFyY2gnKSB7XG4gICAgICAgICAgdGhpcy5wcm1GYWNldEN0cmwuZmFjZXRTZXJ2aWNlLnJlc3VsdHMudW5zaGlmdCh7XG4gICAgICAgICAgICBuYW1lOiAnRXh0ZXJuYWwgU2VhcmNoJyxcbiAgICAgICAgICAgIGRpc3BsYXllZFR5cGU6ICdleGFjdCcsXG4gICAgICAgICAgICBsaW1pdENvdW50OiAwLFxuICAgICAgICAgICAgZmFjZXRHcm91cENvbGxhcHNlZDogZmFsc2UsXG4gICAgICAgICAgICB2YWx1ZXM6IHVuZGVmaW5lZFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0pXG4iLCJyZXF1aXJlKCcuL2pzL2xpYnJhcnloM2xwLXdpZGdldC5tb2R1bGUuanMnKVxubW9kdWxlLmV4cG9ydHMgPSAnbGlicmFyeWgzbHBXaWRnZXQnXG4iLCJhbmd1bGFyXG4gIC8vIE5hbWUgb3VyIG1vZHVsZVxuICAubW9kdWxlKCdsaWJyYXJ5aDNscFdpZGdldCcsIFtdKVxuICAvLyBBZGQgdGhlIGxpYnJhcnloM2xwIHVybCB0byB0cnVzdGVkIHVybCBzb3VyY2VzXG4gIC8vIHNvIGFuZ3VsYXIgZG9lc24ndCBibG9jayBpdCBmcm9tIGFuIGlmcmFtZVxuICAuZmlsdGVyKCd0cnVzdFVybCcsIFsnJHNjZScsIGZ1bmN0aW9uICgkc2NlKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKHVybCkge1xuICAgICAgaWYgKC9eaHR0cChzKT86XFwvXFwvKC4rXFwuKT9saWJyYXJ5aDNscFxcLmNvbS4rJC8udGVzdCh1cmwpKSB7XG4gICAgICAgIHJldHVybiAkc2NlLnRydXN0QXNSZXNvdXJjZVVybCh1cmwpO1xuICAgICAgfVxuICAgIH07XG4gIH1dKVxuICAgIC5maWx0ZXIoJ2ZhbGxiYWNrVXJsJywgWyckc2NlJywgZnVuY3Rpb24gKCRzY2UpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKGZhbGxiYWNrKSB7XG4gICAgICAgICAgICBpZiAoL15odHRwKHMpPzpcXC9cXC8oLitcXC4pP3F1ZXN0aW9ucG9pbnRcXC5vcmcuKyQvLnRlc3QoZmFsbGJhY2spKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICRzY2UudHJ1c3RBc1Jlc291cmNlVXJsKGZhbGxiYWNrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XSlcbiAgLy8gQ29udHJvbGxlciBmb3IgdGhlIGNvbXBvbmVudCBiZWxvd1xuICAuY29udHJvbGxlcignbGlicmFyeWgzbHBXaWRnZXRDb250cm9sbGVyJywgWydsaWJyYXJ5aDNscFdpZGdldENvbmZpZycsICckc2NvcGUnLCBmdW5jdGlvbihsaWJyYXJ5aDNscFdpZGdldENvbmZpZywgJHNjb3BlKSB7XG4gICAgdGhpcy4kb25Jbml0ID0gKCkgPT4ge1xuICAgICAgJHNjb3BlLmNvbmZpZyA9IGxpYnJhcnloM2xwV2lkZ2V0Q29uZmlnO1xuICAgICAgJHNjb3BlLnBhcmVudEN0cmwgPSB0aGlzLnBhcmVudEN0cmw7XG4gICAgfVxuICAgIC8vIERvIGZhY2V0cyBleGlzdD9cbiAgICAkc2NvcGUuZmFjZXRzRXhpc3QgPSAoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gKCRzY29wZS5wYXJlbnRDdHJsLnNlYXJjaFNlcnZpY2UuZmFjZXRTZXJ2aWNlLnJlc3VsdHMubGVuZ3RoID4gMCk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gQWRkIHRoZSBib3R0b20gcGFkZGluZyBjbGFzcyBpZiB0aGVyZSBhcmUgZmFjZXRzXG4gICAgJHNjb3BlLmJvdHRvbVBhZGRpbmcgPSAoKSA9PiB7XG4gICAgICBpZiAoJHNjb3BlLmZhY2V0c0V4aXN0KCkpIHtcbiAgICAgICAgcmV0dXJuIFwiY2hhdC1ib3R0b20tcGFkZGluZ1wiO1xuICAgICAgfVxuICAgIH1cbiAgfV0pXG4gIC5jb21wb25lbnQoJ3BybUV4cGxvcmVNYWluQWZ0ZXInLCB7XG4gICAgYmluZGluZ3M6IHtcbiAgICAgIHBhcmVudEN0cmw6ICc8J1xuICAgIH0sXG4gICAgY29udHJvbGxlcjogJ2xpYnJhcnloM2xwV2lkZ2V0Q29udHJvbGxlcicsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ1dHRvbiBjaGF0LXRhYiBzcy1jaGF0IGpzLXRvZ2dsZS1jaGF0XCIgbmctY2xhc3M9XCJib3R0b21QYWRkaW5nKClcIiBuZy1pbml0PVwic2hvd0NoYXRXaWRnZXQgPSBmYWxzZVwiIG5nLWNsaWNrPVwic2hvd0NoYXRXaWRnZXQgPSAhc2hvd0NoYXRXaWRnZXRcIj5cbiAgICAgICAgICAgICAgICA8cHJtLWljb24gc3R5bGU9XCJ6LWluZGV4OjFcIiBpY29uLXR5cGU9XCJzdmdcIiBzdmctaWNvbi1zZXQ9XCJ7e2NvbmZpZy5pY29uLnNldH19XCIgaWNvbi1kZWZpbml0aW9uPVwie3tjb25maWcuaWNvbi5pY29ufX1cIj48L3BybS1pY29uPlxuICAgICAgICAgICAgICAgIHt7Y29uZmlnLnByb21wdH19XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2hhdC1mcmFtZS13cmFwXCIgbmctY2xhc3M9XCJib3R0b21QYWRkaW5nKClcIiBuZy1zaG93PVwic2hvd0NoYXRXaWRnZXRcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImNoYXQtY2xvc2Ugc3MtaWNvbiBqcy10b2dnbGUtY2hhdFwiIHRpdGxlPVwiQ2xvc2UgY2hhdCB3aW5kb3dcIiBuZy1jbGljaz1cInNob3dDaGF0V2lkZ2V0ID0gIXNob3dDaGF0V2lkZ2V0XCI+JnRpbWVzOzwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxpZnJhbWUgY2xhc3M9XCJjaGF0LWZyYW1lXCIgbmctc3JjPVwie3tjb25maWcudXJsIHwgdHJ1c3RVcmx9fVwiIGZyYW1lYm9yZGVyPVwiMFwiPjwvaWZyYW1lPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgYFxuICB9KTtcbiIsInJlcXVpcmUoJy4vanMvc2VhcmNoLWJhci1zdWItbWVudS5tb2R1bGUuanMnKVxubW9kdWxlLmV4cG9ydHMgPSAnc2VhcmNoQmFyU3ViTWVudSdcbiIsImFuZ3VsYXJcbiAgLm1vZHVsZSgnc2VhcmNoQmFyU3ViTWVudScsIFtdKVxuICAuY29udHJvbGxlcignc2VhcmNoQmFyU3ViTWVudUNvbnRyb2xsZXInLCBbJ3NlYXJjaEJhclN1Yk1lbnVJdGVtcycsICckc2NvcGUnLCAnJGZpbHRlcicsIGZ1bmN0aW9uKGl0ZW1zLCAkc2NvcGUsICRmaWx0ZXIpIHtcbiAgICB0aGlzLiRvbkluaXQgPSAoKSA9PiB7XG4gICAgICAkc2NvcGUuaXRlbXMgPSBpdGVtcztcbiAgICB9XG4gICAgJHNjb3BlLnRyYW5zbGF0ZSA9IChvcmlnaW5hbCkgPT4ge1xuICAgICAgcmV0dXJuIG9yaWdpbmFsLnJlcGxhY2UoL1xceyguKylcXH0vZywgKG1hdGNoLCBwMSkgPT4gJGZpbHRlcigndHJhbnNsYXRlJykocDEpKTtcbiAgICB9XG4gICAgJHNjb3BlLmdvVG9VcmwgPSAodXJsKSA9PiB7XG4gICAgICB3aW5kb3cub3Blbih1cmwsICdfYmxhbmsnKTtcbiAgICB9XG4gIH1dKVxuICAuY29tcG9uZW50KCdzZWFyY2hCYXJTdWJNZW51Jywge1xuICAgIGNvbnRyb2xsZXI6ICdzZWFyY2hCYXJTdWJNZW51Q29udHJvbGxlcicsXG4gICAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwibGF5b3V0LWFsaWduLWVuZC1jZW50ZXIgbGF5b3V0LXJvdyBmbGV4IHNlYXJjaC1iYXItc3ViLW1lbnVcIj5cbiAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICA8bGkgbmctcmVwZWF0PVwiaXRlbSBpbiBpdGVtc1wiPlxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBkYXRhLWhyZWY9XCJ7eyB0cmFuc2xhdGUoaXRlbS5hY3Rpb24pIH19XCIgYXJpYS1sYWJlbD1cInt7IHRyYW5zbGF0ZShpdGVtLmRlc2NyaXB0aW9uKSB9fVwiIG5nLWNsaWNrPVwiZ29Ub1VybCh0cmFuc2xhdGUoaXRlbS5hY3Rpb24pKVwiIGNsYXNzPVwiYnV0dG9uLXdpdGgtaWNvbiB6ZXJvLW1hcmdpbiBtZC1idXR0b24gbWQtc21hbGwge3tpdGVtLmNzc0NsYXNzZXN9fVwiIHR5cGU9XCJidXR0b25cIj5cbiAgICAgICAgICAgICAgICAgICAgPG1kLXRvb2x0aXAgbWQtZGlyZWN0aW9uPVwiYm90dG9tXCIgbWQtZGVsYXk9XCI1MDBcIj57eyB0cmFuc2xhdGUoaXRlbS5kZXNjcmlwdGlvbikgfX08L21kLXRvb2x0aXA+PHBybS1pY29uIHN0eWxlPVwiei1pbmRleDoxXCIgaWNvbi10eXBlPVwic3ZnXCIgc3ZnLWljb24tc2V0PVwie3tpdGVtLmljb24uc2V0fX1cIiBpY29uLWRlZmluaXRpb249XCJ7e2l0ZW0uaWNvbi5pY29ufX1cIj48L3BybS1pY29uPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInNlYXJjaC1iYXItc3ViLW1lbnUtaXRlbVwiIG5nLWNsYXNzPVwiKGl0ZW0uc2hvd194cykgPyAnJyA6ICdoaWRlLXhzJ1wiPnt7IHRyYW5zbGF0ZShpdGVtLm5hbWUpIH19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgIDwvZGl2PmBcblxuICB9KTtcbiIsIid1c2Ugc3RyaWN0JztcblxuYW5ndWxhci5tb2R1bGUoJ3RvZ2dsZUluc3RpdHV0aW9ucycsIFtdKTtcblxuYW5ndWxhci5tb2R1bGUoJ3RvZ2dsZUluc3RpdHV0aW9ucycpLmNvbXBvbmVudCgndG9nZ2xlSW5zdGl0dXRpb25zJywge1xuICBiaW5kaW5nczoge1xuICAgIHN0YXJ0SGlkZGVuOiAnPCdcbiAgfSxcbiAgdGVtcGxhdGU6ICdcXG4gICAgPG1kLWJ1dHRvbiBjbGFzcz1cIm1kLXJhaXNlZFwiIG5nLWNsaWNrPVwiJGN0cmwudG9nZ2xlTGlicygpXCIgaWQ9XCJzdW1taXRCdXR0b25cIiBhcmlhLWNvbnRyb2xzPVwic3VtbWl0TGlua3NcIiBhcmlhLWV4cGFuZGVkPWZhbHNlIGFyaWEtbGFiZWw9XCJTaG93L0hpZGUgU3VtbWl0IExpYnJhcmllc1wiPlxcbiAgICAgICAge3skY3RybC5zaG93TGlicyA/IFxcJ0hpZGUgU3VtbWl0IExpYnJhcmllc1xcJyA6IFxcJ1Nob3cgU3VtbWl0IExpYnJhcmllc1xcJ319XFxuICAgICAgPHNwYW4gYXJpYS1oaWRkZW49dHJ1ZT57eyRjdHJsLnNob3dMaWJzID8gXFwnJmxhcXVvO1xcJyA6IFxcJyZyYXF1bztcXCd9fTwvc3Bhbj5cXG4gICAgPC9tZC1idXR0b24+JyxcbiAgY29udHJvbGxlcjogZnVuY3Rpb24gY29udHJvbGxlcigpIHtcbiAgICB0aGlzLiRvbkluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB0aGlzLnNob3dMaWJzID0gdGhpcy5zdGFydEhpZGRlbiA9PT0gZmFsc2UgPyB0cnVlIDogZmFsc2U7XG4gICAgICB0aGlzLmJ1dHRvbiA9IGFuZ3VsYXIuZWxlbWVudChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdwcm0tYWxtYS1tb3JlLWluc3QtYWZ0ZXIgYnV0dG9uJykpO1xuICAgICAgdGhpcy50YWJzID0gYW5ndWxhci5lbGVtZW50KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3BybS1hbG1hLW1vcmUtaW5zdCBtZC10YWJzJykpO1xuICAgICAgdGhpcy50YWJzLmF0dHIoJ2lkJywgJ3N1bW1pdExpbmtzJyk7XG4gICAgICB0aGlzLmJ1dHRvbi5wYXJlbnQoKS5hZnRlcih0aGlzLnRhYnMpO1xuICAgICAgaWYgKCF0aGlzLnNob3dMaWJzKSB0aGlzLnRhYnMuYWRkQ2xhc3MoJ2hpZGUnKTtcbiAgICB9O1xuICAgIHRoaXMudG9nZ2xlTGlicyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoaXMuc2hvd0xpYnMgPSAhdGhpcy5zaG93TGlicztcbiAgICAgIHRoaXMudGFicy5oYXNDbGFzcygnaGlkZScpID8gdGhpcy50YWJzLnJlbW92ZUNsYXNzKCdoaWRlJykgJiYgdGhpcy5idXR0b24uYXR0cignYXJpYS1leHBhbmRlZCcsIHRydWUpIDogdGhpcy50YWJzLmFkZENsYXNzKCdoaWRlJykgJiYgdGhpcy5idXR0b24uYXR0cignYXJpYS1leHBhbmRlZCcsIGZhbHNlKTtcbiAgICB9O1xuICB9XG59KTsiLCJyZXF1aXJlKCcuL2Rpc3QvbW9kdWxlLmpzJylcbm1vZHVsZS5leHBvcnRzID0gJ3RvZ2dsZUluc3RpdHV0aW9ucydcbiJdfQ==
