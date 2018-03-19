(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
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

},{}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var customActionsConfig = exports.customActionsConfig = {
    name: 'customActions',
    config: [{
        name: "Feedback",
        type: 'template',
        icon: {
            set: 'communication',
            name: 'ic_forum_24px'
        },
        action: "https://www.pcc.edu/library/about/people/contact/report-issues/"
    }]
};

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var libraryh3lpWidgetConfig = exports.libraryh3lpWidgetConfig = {
  name: 'libraryh3lpWidgetConfig',
  config: {
    url: 'https://libraryh3lp.com/chat/pcc-ask-a-librarian@chat.libraryh3lp.com?skin=28248&title=Chat+With+A+Librarian&identity=PCC',
    prompt: 'Chat with us',
    icon: {
      set: 'communication',
      icon: 'ic_chat_24px'
    }
  }
};

},{}],4:[function(require,module,exports){
'use strict';

require('primo-explore-clickable-logo-to-any-link');

require('primo-explore-libraryh3lp-widget');

require('primo-explore-search-bar-sub-menu');

require('primo-explore-toggle-institutions');

require('primo-explore-custom-actions');

var _viewName = require('./viewName');

var _clickableLogoToAnyLink = require('./clickableLogoToAnyLink');

var _libraryh3lpWidget = require('./libraryh3lpWidget');

var _searchBarSubMenu = require('./searchBarSubMenu');

var _customActions = require('./customActions');

var app = angular.module('viewCustom', ['clickableLogoToAnyLink', 'libraryh3lpWidget', 'searchBarSubMenu', 'toggleInstitutions', 'customActions']);

app.constant(_customActions.customActionsConfig.name, _customActions.customActionsConfig.config).constant(_clickableLogoToAnyLink.clickableLogoLinkConfig.name, _clickableLogoToAnyLink.clickableLogoLinkConfig.config).constant(_libraryh3lpWidget.libraryh3lpWidgetConfig.name, _libraryh3lpWidget.libraryh3lpWidgetConfig.config).constant(_searchBarSubMenu.searchBarSubMenuItemsConfig.name, _searchBarSubMenu.searchBarSubMenuItemsConfig.config).value('customNoSearchResultsTemplateUrl', 'custom/' + _viewName.viewName + '/html/noSearchResults.html').component('prmSearchBarAfter', {
  template: '<search-bar-sub-menu></search-bar-sub-menu>'
}).component('prmAlmaMoreInstAfter', { template: '<toggle-institutions />' });

},{"./clickableLogoToAnyLink":1,"./customActions":2,"./libraryh3lpWidget":3,"./searchBarSubMenu":5,"./viewName":6,"primo-explore-clickable-logo-to-any-link":7,"primo-explore-custom-actions":9,"primo-explore-libraryh3lp-widget":11,"primo-explore-search-bar-sub-menu":13,"primo-explore-toggle-institutions":16}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var searchBarSubMenuItemsConfig = exports.searchBarSubMenuItemsConfig = {
  name: 'searchBarSubMenuItems',
  config: [{
    name: "Provide Feedback",
    description: "Provide Feedback",
    action: "https://www.pcc.edu/library/about/people/contact/report-issues/",
    icon: {
      set: 'communication',
      icon: 'ic_forum_24px'
    }
  }]
};

},{}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// vid
var viewName = exports.viewName = "PCC_NUI";

},{}],7:[function(require,module,exports){
require('./js/clickable-logo-to-any-link.module.js')
module.exports = 'clickableLogoToAnyLink'

},{"./js/clickable-logo-to-any-link.module.js":8}],8:[function(require,module,exports){
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

},{}],9:[function(require,module,exports){
require('./js/custom-actions.module.js')
module.exports = 'customActions'

},{"./js/custom-actions.module.js":10}],10:[function(require,module,exports){
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

},{}],11:[function(require,module,exports){
require('./js/libraryh3lp-widget.module.js')
module.exports = 'libraryh3lpWidget'

},{"./js/libraryh3lp-widget.module.js":12}],12:[function(require,module,exports){
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

},{}],13:[function(require,module,exports){
require('./js/search-bar-sub-menu.module.js')
module.exports = 'searchBarSubMenu'

},{"./js/search-bar-sub-menu.module.js":14}],14:[function(require,module,exports){
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

},{}],15:[function(require,module,exports){
'use strict';

angular.module('toggleInstitutions', []);

angular.module('toggleInstitutions').component('toggleInstitutions', {
  bindings: {
    startHidden: '<'
  },
  template: '\n    <md-button class="md-raised toggle-institutions" ng-click="$ctrl.toggleLibs()" id="summitButton" aria-controls="summitLinks" aria-expanded=false aria-label="Show/Hide Summit Libraries">\n        {{$ctrl.showLibs ? \'Hide Summit Libraries\' : \'Show Summit Libraries\'}}\n      <span aria-hidden=true>{{$ctrl.showLibs ? \'&laquo;\' : \'&raquo;\'}}</span>\n    </md-button>',
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
},{}],16:[function(require,module,exports){
require('./dist/module.js')
module.exports = 'toggleInstitutions'

},{"./dist/module.js":15}]},{},[4])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJwcmltby1leHBsb3JlL2N1c3RvbS9QQ0NfTlVJL2pzL2NsaWNrYWJsZUxvZ29Ub0FueUxpbmsuanMiLCJwcmltby1leHBsb3JlL2N1c3RvbS9QQ0NfTlVJL2pzL2N1c3RvbUFjdGlvbnMuanMiLCJwcmltby1leHBsb3JlL2N1c3RvbS9QQ0NfTlVJL2pzL2xpYnJhcnloM2xwV2lkZ2V0LmpzIiwicHJpbW8tZXhwbG9yZS9jdXN0b20vUENDX05VSS9qcy9tYWluLmpzIiwicHJpbW8tZXhwbG9yZS9jdXN0b20vUENDX05VSS9qcy9zZWFyY2hCYXJTdWJNZW51LmpzIiwicHJpbW8tZXhwbG9yZS9jdXN0b20vUENDX05VSS9qcy92aWV3TmFtZS5qcyIsInByaW1vLWV4cGxvcmUvY3VzdG9tL1BDQ19OVUkvbm9kZV9tb2R1bGVzL3ByaW1vLWV4cGxvcmUtY2xpY2thYmxlLWxvZ28tdG8tYW55LWxpbmsvaW5kZXguanMiLCJwcmltby1leHBsb3JlL2N1c3RvbS9QQ0NfTlVJL25vZGVfbW9kdWxlcy9wcmltby1leHBsb3JlLWNsaWNrYWJsZS1sb2dvLXRvLWFueS1saW5rL2pzL2NsaWNrYWJsZS1sb2dvLXRvLWFueS1saW5rLm1vZHVsZS5qcyIsInByaW1vLWV4cGxvcmUvY3VzdG9tL1BDQ19OVUkvbm9kZV9tb2R1bGVzL3ByaW1vLWV4cGxvcmUtY3VzdG9tLWFjdGlvbnMvaW5kZXguanMiLCJwcmltby1leHBsb3JlL2N1c3RvbS9QQ0NfTlVJL25vZGVfbW9kdWxlcy9wcmltby1leHBsb3JlLWN1c3RvbS1hY3Rpb25zL2pzL2N1c3RvbS1hY3Rpb25zLm1vZHVsZS5qcyIsInByaW1vLWV4cGxvcmUvY3VzdG9tL1BDQ19OVUkvbm9kZV9tb2R1bGVzL3ByaW1vLWV4cGxvcmUtbGlicmFyeWgzbHAtd2lkZ2V0L2luZGV4LmpzIiwicHJpbW8tZXhwbG9yZS9jdXN0b20vUENDX05VSS9ub2RlX21vZHVsZXMvcHJpbW8tZXhwbG9yZS1saWJyYXJ5aDNscC13aWRnZXQvanMvbGlicmFyeWgzbHAtd2lkZ2V0Lm1vZHVsZS5qcyIsInByaW1vLWV4cGxvcmUvY3VzdG9tL1BDQ19OVUkvbm9kZV9tb2R1bGVzL3ByaW1vLWV4cGxvcmUtc2VhcmNoLWJhci1zdWItbWVudS9pbmRleC5qcyIsInByaW1vLWV4cGxvcmUvY3VzdG9tL1BDQ19OVUkvbm9kZV9tb2R1bGVzL3ByaW1vLWV4cGxvcmUtc2VhcmNoLWJhci1zdWItbWVudS9qcy9zZWFyY2gtYmFyLXN1Yi1tZW51Lm1vZHVsZS5qcyIsInByaW1vLWV4cGxvcmUvY3VzdG9tL1BDQ19OVUkvbm9kZV9tb2R1bGVzL3ByaW1vLWV4cGxvcmUtdG9nZ2xlLWluc3RpdHV0aW9ucy9kaXN0L21vZHVsZS5qcyIsInByaW1vLWV4cGxvcmUvY3VzdG9tL1BDQ19OVUkvbm9kZV9tb2R1bGVzL3ByaW1vLWV4cGxvcmUtdG9nZ2xlLWluc3RpdHV0aW9ucy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FDQU8sSUFBSSw0REFBMEI7QUFDbkMsUUFBTSx5QkFENkI7QUFFbkMsVUFBUTtBQUNOLFNBQUssNkJBREM7QUFFTixhQUFTO0FBRkg7QUFGMkIsQ0FBOUI7Ozs7Ozs7O0FDQUEsSUFBSSxvREFBc0I7QUFDN0IsVUFBTSxlQUR1QjtBQUU3QixZQUFRLENBQ0o7QUFDSSxjQUFNLFVBRFY7QUFFSSxjQUFNLFVBRlY7QUFHSSxjQUFNO0FBQ0YsaUJBQUssZUFESDtBQUVGLGtCQUFNO0FBRkosU0FIVjtBQU9JLGdCQUFRO0FBUFosS0FESTtBQUZxQixDQUExQjs7Ozs7Ozs7QUNBQSxJQUFJLDREQUEwQjtBQUNuQyxRQUFNLHlCQUQ2QjtBQUVuQyxVQUFRO0FBQ04sU0FBSywySEFEQztBQUVOLFlBQVEsY0FGRjtBQUdOLFVBQU07QUFDSixXQUFLLGVBREQ7QUFFSixZQUFNO0FBRkY7QUFIQTtBQUYyQixDQUE5Qjs7Ozs7QUNBUDs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFHQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQSxJQUFJLE1BQU0sUUFBUSxNQUFSLENBQWUsWUFBZixFQUE2QixDQUNDLHdCQURELEVBRUMsbUJBRkQsRUFHQyxrQkFIRCxFQUlDLG9CQUpELEVBS0MsZUFMRCxDQUE3QixDQUFWOztBQVFBLElBQ0csUUFESCxDQUNZLG1DQUFvQixJQURoQyxFQUNzQyxtQ0FBb0IsTUFEMUQsRUFFRyxRQUZILENBRVksZ0RBQXdCLElBRnBDLEVBRTBDLGdEQUF3QixNQUZsRSxFQUdHLFFBSEgsQ0FHWSwyQ0FBd0IsSUFIcEMsRUFHMEMsMkNBQXdCLE1BSGxFLEVBSUcsUUFKSCxDQUlZLDhDQUE0QixJQUp4QyxFQUk4Qyw4Q0FBNEIsTUFKMUUsRUFLRyxLQUxILENBS1Msa0NBTFQsRUFLNkMsaUNBQW1CLDRCQUxoRSxFQU1HLFNBTkgsQ0FNYSxtQkFOYixFQU1rQztBQUM5QixZQUFVO0FBRG9CLENBTmxDLEVBU0csU0FUSCxDQVNhLHNCQVRiLEVBU3FDLEVBQUMsVUFBVSx5QkFBWCxFQVRyQzs7Ozs7Ozs7QUNyQk8sSUFBSSxvRUFBOEI7QUFDdkMsUUFBTSx1QkFEaUM7QUFFdkMsVUFBUSxDQUNOO0FBQ0UsVUFBTSxrQkFEUjtBQUVFLGlCQUFhLGtCQUZmO0FBR0UsWUFBUSxpRUFIVjtBQUlFLFVBQU07QUFDSixXQUFLLGVBREQ7QUFFSixZQUFNO0FBRkY7QUFKUixHQURNO0FBRitCLENBQWxDOzs7Ozs7OztBQ0FQO0FBQ08sSUFBSSw4QkFBVyxTQUFmOzs7QUNEUDtBQUNBO0FBQ0E7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BCQTtBQUNBO0FBQ0E7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlEQTtBQUNBO0FBQ0E7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqREE7QUFDQTtBQUNBOztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkJBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9cmV0dXJuIGV9KSgpIiwiZXhwb3J0IGxldCBjbGlja2FibGVMb2dvTGlua0NvbmZpZyA9IHtcbiAgbmFtZTogJ2NsaWNrYWJsZUxvZ29MaW5rQ29uZmlnJyxcbiAgY29uZmlnOiB7XG4gICAgdXJsOiAnaHR0cHM6Ly93d3cucGNjLmVkdS9saWJyYXJ5JyxcbiAgICBhbHRUZXh0OiAnUENDIExpYnJhcnknXG4gIH1cbn07XG4iLCJleHBvcnQgbGV0IGN1c3RvbUFjdGlvbnNDb25maWcgPSB7XG4gICAgbmFtZTogJ2N1c3RvbUFjdGlvbnMnLFxuICAgIGNvbmZpZzogW1xuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiBcIkZlZWRiYWNrXCIsXG4gICAgICAgICAgICB0eXBlOiAndGVtcGxhdGUnLFxuICAgICAgICAgICAgaWNvbjoge1xuICAgICAgICAgICAgICAgIHNldDogJ2NvbW11bmljYXRpb24nLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdpY19mb3J1bV8yNHB4J1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGFjdGlvbjogXCJodHRwczovL3d3dy5wY2MuZWR1L2xpYnJhcnkvYWJvdXQvcGVvcGxlL2NvbnRhY3QvcmVwb3J0LWlzc3Vlcy9cIlxuICAgICAgICB9XG4gICAgXVxufTtcbiIsImV4cG9ydCBsZXQgbGlicmFyeWgzbHBXaWRnZXRDb25maWcgPSB7XG4gIG5hbWU6ICdsaWJyYXJ5aDNscFdpZGdldENvbmZpZycsXG4gIGNvbmZpZzoge1xuICAgIHVybDogJ2h0dHBzOi8vbGlicmFyeWgzbHAuY29tL2NoYXQvcGNjLWFzay1hLWxpYnJhcmlhbkBjaGF0LmxpYnJhcnloM2xwLmNvbT9za2luPTI4MjQ4JnRpdGxlPUNoYXQrV2l0aCtBK0xpYnJhcmlhbiZpZGVudGl0eT1QQ0MnLFxuICAgIHByb21wdDogJ0NoYXQgd2l0aCB1cycsXG4gICAgaWNvbjoge1xuICAgICAgc2V0OiAnY29tbXVuaWNhdGlvbicsXG4gICAgICBpY29uOiAnaWNfY2hhdF8yNHB4J1xuICAgIH1cbiAgfVxufTtcbiIsImltcG9ydCAncHJpbW8tZXhwbG9yZS1jbGlja2FibGUtbG9nby10by1hbnktbGluayc7XG5pbXBvcnQgJ3ByaW1vLWV4cGxvcmUtbGlicmFyeWgzbHAtd2lkZ2V0JztcbmltcG9ydCAncHJpbW8tZXhwbG9yZS1zZWFyY2gtYmFyLXN1Yi1tZW51JztcbmltcG9ydCAncHJpbW8tZXhwbG9yZS10b2dnbGUtaW5zdGl0dXRpb25zJztcbmltcG9ydCAncHJpbW8tZXhwbG9yZS1jdXN0b20tYWN0aW9ucyc7XG5cblxuaW1wb3J0IHsgdmlld05hbWUgfSBmcm9tICcuL3ZpZXdOYW1lJztcbmltcG9ydCB7IGNsaWNrYWJsZUxvZ29MaW5rQ29uZmlnIH0gZnJvbSAnLi9jbGlja2FibGVMb2dvVG9BbnlMaW5rJztcbmltcG9ydCB7IGxpYnJhcnloM2xwV2lkZ2V0Q29uZmlnIH0gZnJvbSAnLi9saWJyYXJ5aDNscFdpZGdldCc7XG5pbXBvcnQgeyBzZWFyY2hCYXJTdWJNZW51SXRlbXNDb25maWcgfSBmcm9tICcuL3NlYXJjaEJhclN1Yk1lbnUnO1xuaW1wb3J0IHsgY3VzdG9tQWN0aW9uc0NvbmZpZyB9IGZyb20gJy4vY3VzdG9tQWN0aW9ucyc7XG5cbmxldCBhcHAgPSBhbmd1bGFyLm1vZHVsZSgndmlld0N1c3RvbScsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2xpY2thYmxlTG9nb1RvQW55TGluaycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2xpYnJhcnloM2xwV2lkZ2V0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnc2VhcmNoQmFyU3ViTWVudScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RvZ2dsZUluc3RpdHV0aW9ucycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2N1c3RvbUFjdGlvbnMnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pO1xuXG5hcHBcbiAgLmNvbnN0YW50KGN1c3RvbUFjdGlvbnNDb25maWcubmFtZSwgY3VzdG9tQWN0aW9uc0NvbmZpZy5jb25maWcpXG4gIC5jb25zdGFudChjbGlja2FibGVMb2dvTGlua0NvbmZpZy5uYW1lLCBjbGlja2FibGVMb2dvTGlua0NvbmZpZy5jb25maWcpXG4gIC5jb25zdGFudChsaWJyYXJ5aDNscFdpZGdldENvbmZpZy5uYW1lLCBsaWJyYXJ5aDNscFdpZGdldENvbmZpZy5jb25maWcpXG4gIC5jb25zdGFudChzZWFyY2hCYXJTdWJNZW51SXRlbXNDb25maWcubmFtZSwgc2VhcmNoQmFyU3ViTWVudUl0ZW1zQ29uZmlnLmNvbmZpZylcbiAgLnZhbHVlKCdjdXN0b21Ob1NlYXJjaFJlc3VsdHNUZW1wbGF0ZVVybCcsICdjdXN0b20vJyt2aWV3TmFtZSsnL2h0bWwvbm9TZWFyY2hSZXN1bHRzLmh0bWwnKVxuICAuY29tcG9uZW50KCdwcm1TZWFyY2hCYXJBZnRlcicsIHtcbiAgICB0ZW1wbGF0ZTogJzxzZWFyY2gtYmFyLXN1Yi1tZW51Pjwvc2VhcmNoLWJhci1zdWItbWVudT4nXG4gIH0pXG4gIC5jb21wb25lbnQoJ3BybUFsbWFNb3JlSW5zdEFmdGVyJywge3RlbXBsYXRlOiAnPHRvZ2dsZS1pbnN0aXR1dGlvbnMgLz4nfSlcblxuXG4iLCJleHBvcnQgbGV0IHNlYXJjaEJhclN1Yk1lbnVJdGVtc0NvbmZpZyA9IHtcbiAgbmFtZTogJ3NlYXJjaEJhclN1Yk1lbnVJdGVtcycsXG4gIGNvbmZpZzogW1xuICAgIHtcbiAgICAgIG5hbWU6IFwiUHJvdmlkZSBGZWVkYmFja1wiLFxuICAgICAgZGVzY3JpcHRpb246IFwiUHJvdmlkZSBGZWVkYmFja1wiLFxuICAgICAgYWN0aW9uOiBcImh0dHBzOi8vd3d3LnBjYy5lZHUvbGlicmFyeS9hYm91dC9wZW9wbGUvY29udGFjdC9yZXBvcnQtaXNzdWVzL1wiLFxuICAgICAgaWNvbjoge1xuICAgICAgICBzZXQ6ICdjb21tdW5pY2F0aW9uJyxcbiAgICAgICAgaWNvbjogJ2ljX2ZvcnVtXzI0cHgnXG4gICAgICB9XG4gICAgfVxuICBdXG59O1xuIiwiLy8gdmlkXG5leHBvcnQgbGV0IHZpZXdOYW1lID0gXCJQQ0NfTlVJXCI7XG4iLCJyZXF1aXJlKCcuL2pzL2NsaWNrYWJsZS1sb2dvLXRvLWFueS1saW5rLm1vZHVsZS5qcycpXG5tb2R1bGUuZXhwb3J0cyA9ICdjbGlja2FibGVMb2dvVG9BbnlMaW5rJ1xuIiwiYW5ndWxhclxuICAubW9kdWxlKCdjbGlja2FibGVMb2dvVG9BbnlMaW5rJywgW10pXG4gIC5jb250cm9sbGVyKCdjbGlja2FibGVMb2dvVG9BbnlMaW5rQ29udHJvbGxlcicsIFsnY2xpY2thYmxlTG9nb0xpbmtDb25maWcnLCAnJHNjb3BlJywgJyRmaWx0ZXInLCBmdW5jdGlvbihjbGlja2FibGVMb2dvTGlua0NvbmZpZywgJHNjb3BlLCAkZmlsdGVyKSB7XG4gICAgJHNjb3BlLmNsaWNrYWJsZUxvZ29MaW5rID0gY2xpY2thYmxlTG9nb0xpbmtDb25maWcudXJsO1xuICAgICRzY29wZS5jbGlja2FibGVMb2dvQWx0ID0gY2xpY2thYmxlTG9nb0xpbmtDb25maWcuYWx0VGV4dDtcbiAgICAkc2NvcGUuaWNvbkxpbmsgPSB0aGlzLnBhcmVudEN0cmwuaWNvbkxpbmtcbiAgICAkc2NvcGUudHJhbnNsYXRlID0gKG9yaWdpbmFsKSA9PiB7XG4gICAgICByZXR1cm4gb3JpZ2luYWwucmVwbGFjZSgvXFx7KC4rKVxcfS9nLCAobWF0Y2gsIHAxKSA9PiAkZmlsdGVyKCd0cmFuc2xhdGUnKShwMSkpO1xuICAgIH1cbiAgfV0pXG4gIC5jb21wb25lbnQoJ3BybUxvZ29BZnRlcicsIHtcbiAgICBiaW5kaW5nczoge1xuICAgICAgcGFyZW50Q3RybDogJzwnXG4gICAgfSxcbiAgICBjb250cm9sbGVyOiAnY2xpY2thYmxlTG9nb1RvQW55TGlua0NvbnRyb2xsZXInLFxuICAgIHRlbXBsYXRlOiAnPGRpdiBjbGFzcz1cInByb2R1Y3QtbG9nbyBwcm9kdWN0LWxvZ28tbG9jYWxcIiBsYXlvdXQ9XCJyb3dcIiBsYXlvdXQtYWxpZ249XCJzdGFydCBjZW50ZXJcIiBsYXlvdXQtZmlsbCBpZD1cImJhbm5lclwiIHRhYmluZGV4PVwiMFwiIHJvbGU9XCJiYW5uZXJcIj4nK1xuICAgICAgICAgICAgICAgICc8YSBuZy1ocmVmPVwie3sgdHJhbnNsYXRlKGNsaWNrYWJsZUxvZ29MaW5rKSB9fVwiPjxpbWcgY2xhc3M9XCJsb2dvLWltYWdlXCIgbmctYWx0PVwie3sgdHJhbnNsYXRlKGNsaWNrYWJsZUxvZ29BbHQpIH19XCIgbmctc3JjPVwie3sgaWNvbkxpbmsgfX1cIi8+PC9hPicrXG4gICAgICAgICAgICAgICc8L2Rpdj4nXG5cbiAgfSk7XG4iLCJyZXF1aXJlKCcuL2pzL2N1c3RvbS1hY3Rpb25zLm1vZHVsZS5qcycpXG5tb2R1bGUuZXhwb3J0cyA9ICdjdXN0b21BY3Rpb25zJ1xuIiwiYW5ndWxhclxuICAubW9kdWxlKCdjdXN0b21BY3Rpb25zJywgW10pXG4gIC5jb21wb25lbnQoJ3BybUFjdGlvbkNvbnRhaW5lckFmdGVyJywge1xuICAgIHJlcXVpcmU6IHsgcHJtQWN0aW9uQ3RybDogJ15wcm1BY3Rpb25MaXN0JyB9LFxuICAgIGNvbnRyb2xsZXI6IFsnY3VzdG9tQWN0aW9uc1NlcnZpY2UnLCAnY3VzdG9tQWN0aW9ucycsIGZ1bmN0aW9uIChjdXN0b21BY3Rpb25zU2VydmljZSwgY3VzdG9tQWN0aW9ucykge1xuICAgICAgdGhpcy4kb25Jbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBjdXN0b21BY3Rpb25zU2VydmljZS5zZXRDb250cm9sbGVyKHRoaXMucHJtQWN0aW9uQ3RybClcbiAgICAgICAgY3VzdG9tQWN0aW9ucy5tYXAoYWN0aW9uID0+IGN1c3RvbUFjdGlvbnNTZXJ2aWNlLmFkZEFjdGlvbihhY3Rpb24pKVxuICAgICAgfVxuICAgIH1dXG4gIH0pXG4gIC5mYWN0b3J5KCdjdXN0b21BY3Rpb25zU2VydmljZScsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc2V0Q29udHJvbGxlcjogZnVuY3Rpb24gKGNvbnRyb2xsZXIpIHtcbiAgICAgICAgdGhpcy5wcm1BY3Rpb25DdHJsID0gY29udHJvbGxlclxuICAgICAgfSxcbiAgICAgIHByb2Nlc3NBY3Rpb246IGZ1bmN0aW9uIChhY3Rpb24pIHtcbiAgICAgICAgYWN0aW9uLmljb25uYW1lID0gYWN0aW9uLm5hbWUucmVwbGFjZSgvXFxzKy9nLCAnJyksXG4gICAgICAgIGFjdGlvbi5zbHVnID0gYWN0aW9uLm5hbWUucmVwbGFjZSgvXFxzKy9nLCAnJykudG9Mb3dlckNhc2UoKSxcbiAgICAgICAgYWN0aW9uLmluZGV4ID0gT2JqZWN0LmtleXModGhpcy5wcm1BY3Rpb25DdHJsLmFjdGlvbkxpc3RTZXJ2aWNlLmFjdGlvbnNUb0luZGV4KS5sZW5ndGggLSAxXG4gICAgICAgIHRoaXMucHJtQWN0aW9uQ3RybC5hY3Rpb25MYWJlbE5hbWVzTWFwW2FjdGlvbi5zbHVnXSA9IGFjdGlvbi5uYW1lXG4gICAgICAgIHRoaXMucHJtQWN0aW9uQ3RybC5hY3Rpb25JY29uTmFtZXNNYXBbYWN0aW9uLnNsdWddID0gYWN0aW9uLmljb25uYW1lXG4gICAgICAgIHRoaXMucHJtQWN0aW9uQ3RybC5hY3Rpb25JY29uc1thY3Rpb24uaWNvbm5hbWVdID0ge1xuICAgICAgICAgIGljb246IGFjdGlvbi5pY29uLm5hbWUsXG4gICAgICAgICAgaWNvblNldDogYWN0aW9uLmljb24uc2V0LFxuICAgICAgICAgIHR5cGU6IFwic3ZnXCJcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYWN0aW9uXG4gICAgICB9LFxuICAgICAgYWRkQWN0aW9uOiBmdW5jdGlvbiAoYWN0aW9uKSB7XG4gICAgICAgIGFjdGlvbiA9IHRoaXMucHJvY2Vzc0FjdGlvbihhY3Rpb24pXG4gICAgICAgIGlmICghdGhpcy5wcm1BY3Rpb25DdHJsLmFjdGlvbkxpc3RTZXJ2aWNlLmFjdGlvbnNUb0luZGV4W2FjdGlvbi5zbHVnXSkge1xuICAgICAgICAgIHRoaXMucHJtQWN0aW9uQ3RybC5hY3Rpb25MaXN0U2VydmljZS5yZXF1aXJlZEFjdGlvbnNMaXN0W2FjdGlvbi5pbmRleF0gPSBhY3Rpb24uc2x1Z1xuICAgICAgICAgIHRoaXMucHJtQWN0aW9uQ3RybC5hY3Rpb25MaXN0U2VydmljZS5hY3Rpb25zVG9EaXNwbGF5LnVuc2hpZnQoYWN0aW9uLnNsdWcpXG4gICAgICAgICAgdGhpcy5wcm1BY3Rpb25DdHJsLmFjdGlvbkxpc3RTZXJ2aWNlLmFjdGlvbnNUb0luZGV4W2FjdGlvbi5zbHVnXSA9IGFjdGlvbi5pbmRleFxuICAgICAgICB9XG4gICAgICAgIGlmIChhY3Rpb24udHlwZSA9PT0gJ3RlbXBsYXRlJykge1xuICAgICAgICAgICAgLy8gcHJvY2VzcyB7IH0gaW4gdGVtcGxhdGVWYXJzXG4gICAgICAgICAgICBpZiAoYWN0aW9uLmhhc093blByb3BlcnR5KCd0ZW1wbGF0ZVZhcicpKSB7XG4gICAgICAgICAgICAgICAgYWN0aW9uLmFjdGlvbiA9IGFjdGlvbi5hY3Rpb24ucmVwbGFjZSgve1xcZH0vZywgKHIpID0+IGFjdGlvbi50ZW1wbGF0ZVZhcltyLnJlcGxhY2UoL1teXFxkXS9nLCAnJyldKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gcmVwbGFjZSBhIHJlY29yZElkIG9jY3VyZW5jZVxuICAgICAgICAgICAgYWN0aW9uLmFjdGlvbiA9IGFjdGlvbi5hY3Rpb24ucmVwbGFjZSgve3JlY29yZElkfS9nLCAocikgPT4gdGhpcy5wcm1BY3Rpb25DdHJsLml0ZW0ucG54LnNlYXJjaC5yZWNvcmRpZFswXSlcbiAgICAgICAgICAgIC8vIHJlcGxhY2UgYSBwbngueHh4Lnh4eFswXSBwYXR0ZXJuIGV4LiBwbnguc2VhcmNoLnJlY29yZGlkWzBdXG4gICAgICAgICAgICBsZXQgcG54UHJvcGVydGllcyA9IGFjdGlvbi5hY3Rpb24ubWF0Y2goL1xceyhwbnhcXC4uKj8pXFx9L2cpIHx8IFtdXG4gICAgICAgICAgICBwbnhQcm9wZXJ0aWVzLmZvckVhY2goKHApID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgdmFsdWVGb3JQID0gcC5yZXBsYWNlKC9be31dL2csICcnKS5zcGxpdCgnLicpLnJlZHVjZSgobywgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGggPSAvKC4qKShcXFtcXGRcXF0pLy5leGVjKGkpXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaCBpbnN0YW5jZW9mIEFycmF5KSB7IHJldHVybiBvW2hbMV1dW2hbMl0ucmVwbGFjZSgvW15cXGRdL2csICcnKV0gfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9baV1cbiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICcnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCB0aGlzLnBybUFjdGlvbkN0cmwuaXRlbSlcbiAgICAgICAgICAgICAgICBhY3Rpb24uYWN0aW9uID0gYWN0aW9uLmFjdGlvbi5yZXBsYWNlKHAsIHZhbHVlRm9yUClcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wcm1BY3Rpb25DdHJsLmFjdGlvbkxpc3RTZXJ2aWNlLm9uVG9nZ2xlW2FjdGlvbi5zbHVnXSA9ICgpID0+IHdpbmRvdy5vcGVuKGFjdGlvbi5hY3Rpb24sICdfYmxhbmsnKVxuICAgICAgfVxuICAgIH1cbiAgfSlcbiIsInJlcXVpcmUoJy4vanMvbGlicmFyeWgzbHAtd2lkZ2V0Lm1vZHVsZS5qcycpXG5tb2R1bGUuZXhwb3J0cyA9ICdsaWJyYXJ5aDNscFdpZGdldCdcbiIsImFuZ3VsYXJcbiAgLy8gTmFtZSBvdXIgbW9kdWxlXG4gIC5tb2R1bGUoJ2xpYnJhcnloM2xwV2lkZ2V0JywgW10pXG4gIC8vIEFkZCB0aGUgbGlicmFyeWgzbHAgdXJsIHRvIHRydXN0ZWQgdXJsIHNvdXJjZXNcbiAgLy8gc28gYW5ndWxhciBkb2Vzbid0IGJsb2NrIGl0IGZyb20gYW4gaWZyYW1lXG4gIC5maWx0ZXIoJ3RydXN0VXJsJywgWyckc2NlJywgZnVuY3Rpb24gKCRzY2UpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24odXJsKSB7XG4gICAgICBpZiAoL15odHRwKHMpPzpcXC9cXC8oLitcXC4pP2xpYnJhcnloM2xwXFwuY29tLiskLy50ZXN0KHVybCkpIHtcbiAgICAgICAgcmV0dXJuICRzY2UudHJ1c3RBc1Jlc291cmNlVXJsKHVybCk7XG4gICAgICB9XG4gICAgfTtcbiAgfV0pXG4gIC8vIENvbnRyb2xsZXIgZm9yIHRoZSBjb21wb25lbnQgYmVsb3dcbiAgLmNvbnRyb2xsZXIoJ2xpYnJhcnloM2xwV2lkZ2V0Q29udHJvbGxlcicsIFsnbGlicmFyeWgzbHBXaWRnZXRDb25maWcnLCAnJHNjb3BlJywgZnVuY3Rpb24obGlicmFyeWgzbHBXaWRnZXRDb25maWcsICRzY29wZSkge1xuICAgIHRoaXMuJG9uSW5pdCA9ICgpID0+IHtcbiAgICAgICRzY29wZS5jb25maWcgPSBsaWJyYXJ5aDNscFdpZGdldENvbmZpZztcbiAgICAgICRzY29wZS5wYXJlbnRDdHJsID0gdGhpcy5wYXJlbnRDdHJsO1xuICAgIH1cbiAgICAvLyBEbyBmYWNldHMgZXhpc3Q/XG4gICAgJHNjb3BlLmZhY2V0c0V4aXN0ID0gKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuICgkc2NvcGUucGFyZW50Q3RybC5zZWFyY2hTZXJ2aWNlLmZhY2V0U2VydmljZS5yZXN1bHRzLmxlbmd0aCA+IDApO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIEFkZCB0aGUgYm90dG9tIHBhZGRpbmcgY2xhc3MgaWYgdGhlcmUgYXJlIGZhY2V0c1xuICAgICRzY29wZS5ib3R0b21QYWRkaW5nID0gKCkgPT4ge1xuICAgICAgaWYgKCRzY29wZS5mYWNldHNFeGlzdCgpKSB7XG4gICAgICAgIHJldHVybiBcImNoYXQtYm90dG9tLXBhZGRpbmdcIjtcbiAgICAgIH1cbiAgICB9XG4gIH1dKVxuICAuY29tcG9uZW50KCdwcm1FeHBsb3JlTWFpbkFmdGVyJywge1xuICAgIGJpbmRpbmdzOiB7XG4gICAgICBwYXJlbnRDdHJsOiAnPCdcbiAgICB9LFxuICAgIGNvbnRyb2xsZXI6ICdsaWJyYXJ5aDNscFdpZGdldENvbnRyb2xsZXInLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidXR0b24gY2hhdC10YWIgc3MtY2hhdCBqcy10b2dnbGUtY2hhdFwiIG5nLWNsYXNzPVwiYm90dG9tUGFkZGluZygpXCIgbmctaW5pdD1cInNob3dDaGF0V2lkZ2V0ID0gZmFsc2VcIiBuZy1jbGljaz1cInNob3dDaGF0V2lkZ2V0ID0gIXNob3dDaGF0V2lkZ2V0XCI+XG4gICAgICAgICAgICAgICAgPHBybS1pY29uIHN0eWxlPVwiei1pbmRleDoxXCIgaWNvbi10eXBlPVwic3ZnXCIgc3ZnLWljb24tc2V0PVwie3tjb25maWcuaWNvbi5zZXR9fVwiIGljb24tZGVmaW5pdGlvbj1cInt7Y29uZmlnLmljb24uaWNvbn19XCI+PC9wcm0taWNvbj5cbiAgICAgICAgICAgICAgICB7e2NvbmZpZy5wcm9tcHR9fVxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNoYXQtZnJhbWUtd3JhcFwiIG5nLWNsYXNzPVwiYm90dG9tUGFkZGluZygpXCIgbmctc2hvdz1cInNob3dDaGF0V2lkZ2V0XCI+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJjaGF0LWNsb3NlIHNzLWljb24ganMtdG9nZ2xlLWNoYXRcIiB0aXRsZT1cIkNsb3NlIGNoYXQgd2luZG93XCIgbmctY2xpY2s9XCJzaG93Q2hhdFdpZGdldCA9ICFzaG93Q2hhdFdpZGdldFwiPiZ0aW1lczs8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8aWZyYW1lIGNsYXNzPVwiY2hhdC1mcmFtZVwiIG5nLXNyYz1cInt7Y29uZmlnLnVybCB8IHRydXN0VXJsfX1cIiBmcmFtZWJvcmRlcj1cIjBcIj48L2lmcmFtZT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIGBcbiAgfSk7XG4iLCJyZXF1aXJlKCcuL2pzL3NlYXJjaC1iYXItc3ViLW1lbnUubW9kdWxlLmpzJylcbm1vZHVsZS5leHBvcnRzID0gJ3NlYXJjaEJhclN1Yk1lbnUnXG4iLCJhbmd1bGFyXG4gIC5tb2R1bGUoJ3NlYXJjaEJhclN1Yk1lbnUnLCBbXSlcbiAgLmNvbnRyb2xsZXIoJ3NlYXJjaEJhclN1Yk1lbnVDb250cm9sbGVyJywgWydzZWFyY2hCYXJTdWJNZW51SXRlbXMnLCAnJHNjb3BlJywgJyRmaWx0ZXInLCBmdW5jdGlvbihpdGVtcywgJHNjb3BlLCAkZmlsdGVyKSB7XG4gICAgdGhpcy4kb25Jbml0ID0gKCkgPT4ge1xuICAgICAgJHNjb3BlLml0ZW1zID0gaXRlbXM7XG4gICAgfVxuICAgICRzY29wZS50cmFuc2xhdGUgPSAob3JpZ2luYWwpID0+IHtcbiAgICAgIHJldHVybiBvcmlnaW5hbC5yZXBsYWNlKC9cXHsoLispXFx9L2csIChtYXRjaCwgcDEpID0+ICRmaWx0ZXIoJ3RyYW5zbGF0ZScpKHAxKSk7XG4gICAgfVxuICAgICRzY29wZS5nb1RvVXJsID0gKHVybCkgPT4ge1xuICAgICAgd2luZG93Lm9wZW4odXJsLCAnX2JsYW5rJyk7XG4gICAgfVxuICB9XSlcbiAgLmNvbXBvbmVudCgnc2VhcmNoQmFyU3ViTWVudScsIHtcbiAgICBjb250cm9sbGVyOiAnc2VhcmNoQmFyU3ViTWVudUNvbnRyb2xsZXInLFxuICAgIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cImxheW91dC1hbGlnbi1lbmQtY2VudGVyIGxheW91dC1yb3cgZmxleCBzZWFyY2gtYmFyLXN1Yi1tZW51XCI+XG4gICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgPGxpIG5nLXJlcGVhdD1cIml0ZW0gaW4gaXRlbXNcIj5cbiAgICAgICAgICAgICAgICAgIDxidXR0b24gZGF0YS1ocmVmPVwie3sgdHJhbnNsYXRlKGl0ZW0uYWN0aW9uKSB9fVwiIGFyaWEtbGFiZWw9XCJ7eyB0cmFuc2xhdGUoaXRlbS5kZXNjcmlwdGlvbikgfX1cIiBuZy1jbGljaz1cImdvVG9VcmwodHJhbnNsYXRlKGl0ZW0uYWN0aW9uKSlcIiBjbGFzcz1cImJ1dHRvbi13aXRoLWljb24gemVyby1tYXJnaW4gbWQtYnV0dG9uIG1kLXNtYWxsIHt7aXRlbS5jc3NDbGFzc2VzfX1cIiB0eXBlPVwiYnV0dG9uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxtZC10b29sdGlwIG1kLWRpcmVjdGlvbj1cImJvdHRvbVwiIG1kLWRlbGF5PVwiNTAwXCI+e3sgdHJhbnNsYXRlKGl0ZW0uZGVzY3JpcHRpb24pIH19PC9tZC10b29sdGlwPjxwcm0taWNvbiBzdHlsZT1cInotaW5kZXg6MVwiIGljb24tdHlwZT1cInN2Z1wiIHN2Zy1pY29uLXNldD1cInt7aXRlbS5pY29uLnNldH19XCIgaWNvbi1kZWZpbml0aW9uPVwie3tpdGVtLmljb24uaWNvbn19XCI+PC9wcm0taWNvbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzZWFyY2gtYmFyLXN1Yi1tZW51LWl0ZW1cIiBuZy1jbGFzcz1cIihpdGVtLnNob3dfeHMpID8gJycgOiAnaGlkZS14cydcIj57eyB0cmFuc2xhdGUoaXRlbS5uYW1lKSB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICA8L2Rpdj5gXG5cbiAgfSk7XG4iLCIndXNlIHN0cmljdCc7XG5cbmFuZ3VsYXIubW9kdWxlKCd0b2dnbGVJbnN0aXR1dGlvbnMnLCBbXSk7XG5cbmFuZ3VsYXIubW9kdWxlKCd0b2dnbGVJbnN0aXR1dGlvbnMnKS5jb21wb25lbnQoJ3RvZ2dsZUluc3RpdHV0aW9ucycsIHtcbiAgYmluZGluZ3M6IHtcbiAgICBzdGFydEhpZGRlbjogJzwnXG4gIH0sXG4gIHRlbXBsYXRlOiAnXFxuICAgIDxtZC1idXR0b24gY2xhc3M9XCJtZC1yYWlzZWQgdG9nZ2xlLWluc3RpdHV0aW9uc1wiIG5nLWNsaWNrPVwiJGN0cmwudG9nZ2xlTGlicygpXCIgaWQ9XCJzdW1taXRCdXR0b25cIiBhcmlhLWNvbnRyb2xzPVwic3VtbWl0TGlua3NcIiBhcmlhLWV4cGFuZGVkPWZhbHNlIGFyaWEtbGFiZWw9XCJTaG93L0hpZGUgU3VtbWl0IExpYnJhcmllc1wiPlxcbiAgICAgICAge3skY3RybC5zaG93TGlicyA/IFxcJ0hpZGUgU3VtbWl0IExpYnJhcmllc1xcJyA6IFxcJ1Nob3cgU3VtbWl0IExpYnJhcmllc1xcJ319XFxuICAgICAgPHNwYW4gYXJpYS1oaWRkZW49dHJ1ZT57eyRjdHJsLnNob3dMaWJzID8gXFwnJmxhcXVvO1xcJyA6IFxcJyZyYXF1bztcXCd9fTwvc3Bhbj5cXG4gICAgPC9tZC1idXR0b24+JyxcbiAgY29udHJvbGxlcjogZnVuY3Rpb24gY29udHJvbGxlcigpIHtcbiAgICB0aGlzLiRvbkluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB0aGlzLnNob3dMaWJzID0gdGhpcy5zdGFydEhpZGRlbiA9PT0gZmFsc2UgPyB0cnVlIDogZmFsc2U7XG4gICAgICB0aGlzLmJ1dHRvbiA9IGFuZ3VsYXIuZWxlbWVudChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdwcm0tYWxtYS1tb3JlLWluc3QtYWZ0ZXIgYnV0dG9uJykpO1xuICAgICAgdGhpcy50YWJzID0gYW5ndWxhci5lbGVtZW50KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3BybS1hbG1hLW1vcmUtaW5zdCBtZC10YWJzJykpO1xuICAgICAgdGhpcy50YWJzLmF0dHIoJ2lkJywgJ3N1bW1pdExpbmtzJyk7XG4gICAgICB0aGlzLmJ1dHRvbi5wYXJlbnQoKS5hZnRlcih0aGlzLnRhYnMpO1xuICAgICAgaWYgKCF0aGlzLnNob3dMaWJzKSB0aGlzLnRhYnMuYWRkQ2xhc3MoJ2hpZGUnKTtcbiAgICB9O1xuICAgIHRoaXMudG9nZ2xlTGlicyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoaXMuc2hvd0xpYnMgPSAhdGhpcy5zaG93TGlicztcbiAgICAgIHRoaXMudGFicy5oYXNDbGFzcygnaGlkZScpID8gdGhpcy50YWJzLnJlbW92ZUNsYXNzKCdoaWRlJykgJiYgdGhpcy5idXR0b24uYXR0cignYXJpYS1leHBhbmRlZCcsIHRydWUpIDogdGhpcy50YWJzLmFkZENsYXNzKCdoaWRlJykgJiYgdGhpcy5idXR0b24uYXR0cignYXJpYS1leHBhbmRlZCcsIGZhbHNlKTtcbiAgICB9O1xuICB9XG59KTsiLCJyZXF1aXJlKCcuL2Rpc3QvbW9kdWxlLmpzJylcbm1vZHVsZS5leHBvcnRzID0gJ3RvZ2dsZUluc3RpdHV0aW9ucydcbiJdfQ==
