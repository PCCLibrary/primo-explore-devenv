(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var clickableLogoLinkConfig = exports.clickableLogoLinkConfig = {
  name: 'clickableLogoLinkConfig',
  config: {
    url: 'https://shanghai.nyu.edu/academics/library',
    altText: 'NYU Shanghai Library'
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
        action: "https://docs.google.com/forms/d/e/1FAIpQLSeWpIktFnYNDZqeN2O_EODmVtkis0hoaRMXhqVcBeXTVIsiag/viewform?"
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
    action: "https://docs.google.com/forms/d/e/1FAIpQLSeWpIktFnYNDZqeN2O_EODmVtkis0hoaRMXhqVcBeXTVIsiag/viewform?",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJwcmltby1leHBsb3JlL2N1c3RvbS9QQ0NfTlVJL2pzL2NsaWNrYWJsZUxvZ29Ub0FueUxpbmsuanMiLCJwcmltby1leHBsb3JlL2N1c3RvbS9QQ0NfTlVJL2pzL2N1c3RvbUFjdGlvbnMuanMiLCJwcmltby1leHBsb3JlL2N1c3RvbS9QQ0NfTlVJL2pzL2xpYnJhcnloM2xwV2lkZ2V0LmpzIiwicHJpbW8tZXhwbG9yZS9jdXN0b20vUENDX05VSS9qcy9tYWluLmpzIiwicHJpbW8tZXhwbG9yZS9jdXN0b20vUENDX05VSS9qcy9zZWFyY2hCYXJTdWJNZW51LmpzIiwicHJpbW8tZXhwbG9yZS9jdXN0b20vUENDX05VSS9qcy92aWV3TmFtZS5qcyIsInByaW1vLWV4cGxvcmUvY3VzdG9tL1BDQ19OVUkvbm9kZV9tb2R1bGVzL3ByaW1vLWV4cGxvcmUtY2xpY2thYmxlLWxvZ28tdG8tYW55LWxpbmsvaW5kZXguanMiLCJwcmltby1leHBsb3JlL2N1c3RvbS9QQ0NfTlVJL25vZGVfbW9kdWxlcy9wcmltby1leHBsb3JlLWNsaWNrYWJsZS1sb2dvLXRvLWFueS1saW5rL2pzL2NsaWNrYWJsZS1sb2dvLXRvLWFueS1saW5rLm1vZHVsZS5qcyIsInByaW1vLWV4cGxvcmUvY3VzdG9tL1BDQ19OVUkvbm9kZV9tb2R1bGVzL3ByaW1vLWV4cGxvcmUtY3VzdG9tLWFjdGlvbnMvaW5kZXguanMiLCJwcmltby1leHBsb3JlL2N1c3RvbS9QQ0NfTlVJL25vZGVfbW9kdWxlcy9wcmltby1leHBsb3JlLWN1c3RvbS1hY3Rpb25zL2pzL2N1c3RvbS1hY3Rpb25zLm1vZHVsZS5qcyIsInByaW1vLWV4cGxvcmUvY3VzdG9tL1BDQ19OVUkvbm9kZV9tb2R1bGVzL3ByaW1vLWV4cGxvcmUtbGlicmFyeWgzbHAtd2lkZ2V0L2luZGV4LmpzIiwicHJpbW8tZXhwbG9yZS9jdXN0b20vUENDX05VSS9ub2RlX21vZHVsZXMvcHJpbW8tZXhwbG9yZS1saWJyYXJ5aDNscC13aWRnZXQvanMvbGlicmFyeWgzbHAtd2lkZ2V0Lm1vZHVsZS5qcyIsInByaW1vLWV4cGxvcmUvY3VzdG9tL1BDQ19OVUkvbm9kZV9tb2R1bGVzL3ByaW1vLWV4cGxvcmUtc2VhcmNoLWJhci1zdWItbWVudS9pbmRleC5qcyIsInByaW1vLWV4cGxvcmUvY3VzdG9tL1BDQ19OVUkvbm9kZV9tb2R1bGVzL3ByaW1vLWV4cGxvcmUtc2VhcmNoLWJhci1zdWItbWVudS9qcy9zZWFyY2gtYmFyLXN1Yi1tZW51Lm1vZHVsZS5qcyIsInByaW1vLWV4cGxvcmUvY3VzdG9tL1BDQ19OVUkvbm9kZV9tb2R1bGVzL3ByaW1vLWV4cGxvcmUtdG9nZ2xlLWluc3RpdHV0aW9ucy9kaXN0L21vZHVsZS5qcyIsInByaW1vLWV4cGxvcmUvY3VzdG9tL1BDQ19OVUkvbm9kZV9tb2R1bGVzL3ByaW1vLWV4cGxvcmUtdG9nZ2xlLWluc3RpdHV0aW9ucy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FDQU8sSUFBSSw0REFBMEI7QUFDbkMsUUFBTSx5QkFENkI7QUFFbkMsVUFBUTtBQUNOLFNBQUssNENBREM7QUFFTixhQUFTO0FBRkg7QUFGMkIsQ0FBOUI7Ozs7Ozs7O0FDQUEsSUFBSSxvREFBc0I7QUFDN0IsVUFBTSxlQUR1QjtBQUU3QixZQUFRLENBQ0o7QUFDSSxjQUFNLFVBRFY7QUFFSSxjQUFNLFVBRlY7QUFHSSxjQUFNO0FBQ0YsaUJBQUssZUFESDtBQUVGLGtCQUFNO0FBRkosU0FIVjtBQU9JLGdCQUFRO0FBUFosS0FESTtBQUZxQixDQUExQjs7Ozs7Ozs7QUNBQSxJQUFJLDREQUEwQjtBQUNuQyxRQUFNLHlCQUQ2QjtBQUVuQyxVQUFRO0FBQ04sU0FBSywySEFEQztBQUVOLFlBQVEsY0FGRjtBQUdOLFVBQU07QUFDSixXQUFLLGVBREQ7QUFFSixZQUFNO0FBRkY7QUFIQTtBQUYyQixDQUE5Qjs7Ozs7QUNBUDs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFHQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQSxJQUFJLE1BQU0sUUFBUSxNQUFSLENBQWUsWUFBZixFQUE2QixDQUNDLHdCQURELEVBRUMsbUJBRkQsRUFHQyxrQkFIRCxFQUlDLG9CQUpELEVBS0MsZUFMRCxDQUE3QixDQUFWOztBQVFBLElBQ0csUUFESCxDQUNZLG1DQUFvQixJQURoQyxFQUNzQyxtQ0FBb0IsTUFEMUQsRUFFRyxRQUZILENBRVksZ0RBQXdCLElBRnBDLEVBRTBDLGdEQUF3QixNQUZsRSxFQUdHLFFBSEgsQ0FHWSwyQ0FBd0IsSUFIcEMsRUFHMEMsMkNBQXdCLE1BSGxFLEVBSUcsUUFKSCxDQUlZLDhDQUE0QixJQUp4QyxFQUk4Qyw4Q0FBNEIsTUFKMUUsRUFLRyxLQUxILENBS1Msa0NBTFQsRUFLNkMsaUNBQW1CLDRCQUxoRSxFQU1HLFNBTkgsQ0FNYSxtQkFOYixFQU1rQztBQUM5QixZQUFVO0FBRG9CLENBTmxDLEVBU0csU0FUSCxDQVNhLHNCQVRiLEVBU3FDLEVBQUMsVUFBVSx5QkFBWCxFQVRyQzs7Ozs7Ozs7QUNyQk8sSUFBSSxvRUFBOEI7QUFDdkMsUUFBTSx1QkFEaUM7QUFFdkMsVUFBUSxDQUNOO0FBQ0UsVUFBTSxrQkFEUjtBQUVFLGlCQUFhLGtCQUZmO0FBR0UsWUFBUSxzR0FIVjtBQUlFLFVBQU07QUFDSixXQUFLLGVBREQ7QUFFSixZQUFNO0FBRkY7QUFKUixHQURNO0FBRitCLENBQWxDOzs7Ozs7OztBQ0FQO0FBQ08sSUFBSSw4QkFBVyxTQUFmOzs7QUNEUDtBQUNBO0FBQ0E7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BCQTtBQUNBO0FBQ0E7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlEQTtBQUNBO0FBQ0E7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqREE7QUFDQTtBQUNBOztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkJBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9cmV0dXJuIGV9KSgpIiwiZXhwb3J0IGxldCBjbGlja2FibGVMb2dvTGlua0NvbmZpZyA9IHtcbiAgbmFtZTogJ2NsaWNrYWJsZUxvZ29MaW5rQ29uZmlnJyxcbiAgY29uZmlnOiB7XG4gICAgdXJsOiAnaHR0cHM6Ly9zaGFuZ2hhaS5ueXUuZWR1L2FjYWRlbWljcy9saWJyYXJ5JyxcbiAgICBhbHRUZXh0OiAnTllVIFNoYW5naGFpIExpYnJhcnknXG4gIH1cbn07XG4iLCJleHBvcnQgbGV0IGN1c3RvbUFjdGlvbnNDb25maWcgPSB7XG4gICAgbmFtZTogJ2N1c3RvbUFjdGlvbnMnLFxuICAgIGNvbmZpZzogW1xuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiBcIkZlZWRiYWNrXCIsXG4gICAgICAgICAgICB0eXBlOiAndGVtcGxhdGUnLFxuICAgICAgICAgICAgaWNvbjoge1xuICAgICAgICAgICAgICAgIHNldDogJ2NvbW11bmljYXRpb24nLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdpY19mb3J1bV8yNHB4J1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGFjdGlvbjogXCJodHRwczovL2RvY3MuZ29vZ2xlLmNvbS9mb3Jtcy9kL2UvMUZBSXBRTFNlV3BJa3RGbllORFpxZU4yT19FT0RtVnRraXMwaG9hUk1YaHFWY0JlWFRWSXNpYWcvdmlld2Zvcm0/XCJcbiAgICAgICAgfVxuICAgIF1cbn07XG4iLCJleHBvcnQgbGV0IGxpYnJhcnloM2xwV2lkZ2V0Q29uZmlnID0ge1xuICBuYW1lOiAnbGlicmFyeWgzbHBXaWRnZXRDb25maWcnLFxuICBjb25maWc6IHtcbiAgICB1cmw6ICdodHRwczovL2xpYnJhcnloM2xwLmNvbS9jaGF0L3BjYy1hc2stYS1saWJyYXJpYW5AY2hhdC5saWJyYXJ5aDNscC5jb20/c2tpbj0yODI0OCZ0aXRsZT1DaGF0K1dpdGgrQStMaWJyYXJpYW4maWRlbnRpdHk9UENDJyxcbiAgICBwcm9tcHQ6ICdDaGF0IHdpdGggdXMnLFxuICAgIGljb246IHtcbiAgICAgIHNldDogJ2NvbW11bmljYXRpb24nLFxuICAgICAgaWNvbjogJ2ljX2NoYXRfMjRweCdcbiAgICB9XG4gIH1cbn07XG4iLCJpbXBvcnQgJ3ByaW1vLWV4cGxvcmUtY2xpY2thYmxlLWxvZ28tdG8tYW55LWxpbmsnO1xuaW1wb3J0ICdwcmltby1leHBsb3JlLWxpYnJhcnloM2xwLXdpZGdldCc7XG5pbXBvcnQgJ3ByaW1vLWV4cGxvcmUtc2VhcmNoLWJhci1zdWItbWVudSc7XG5pbXBvcnQgJ3ByaW1vLWV4cGxvcmUtdG9nZ2xlLWluc3RpdHV0aW9ucyc7XG5pbXBvcnQgJ3ByaW1vLWV4cGxvcmUtY3VzdG9tLWFjdGlvbnMnO1xuXG5cbmltcG9ydCB7IHZpZXdOYW1lIH0gZnJvbSAnLi92aWV3TmFtZSc7XG5pbXBvcnQgeyBjbGlja2FibGVMb2dvTGlua0NvbmZpZyB9IGZyb20gJy4vY2xpY2thYmxlTG9nb1RvQW55TGluayc7XG5pbXBvcnQgeyBsaWJyYXJ5aDNscFdpZGdldENvbmZpZyB9IGZyb20gJy4vbGlicmFyeWgzbHBXaWRnZXQnO1xuaW1wb3J0IHsgc2VhcmNoQmFyU3ViTWVudUl0ZW1zQ29uZmlnIH0gZnJvbSAnLi9zZWFyY2hCYXJTdWJNZW51JztcbmltcG9ydCB7IGN1c3RvbUFjdGlvbnNDb25maWcgfSBmcm9tICcuL2N1c3RvbUFjdGlvbnMnO1xuXG5sZXQgYXBwID0gYW5ndWxhci5tb2R1bGUoJ3ZpZXdDdXN0b20nLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NsaWNrYWJsZUxvZ29Ub0FueUxpbmsnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdsaWJyYXJ5aDNscFdpZGdldCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3NlYXJjaEJhclN1Yk1lbnUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0b2dnbGVJbnN0aXR1dGlvbnMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjdXN0b21BY3Rpb25zJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKTtcblxuYXBwXG4gIC5jb25zdGFudChjdXN0b21BY3Rpb25zQ29uZmlnLm5hbWUsIGN1c3RvbUFjdGlvbnNDb25maWcuY29uZmlnKVxuICAuY29uc3RhbnQoY2xpY2thYmxlTG9nb0xpbmtDb25maWcubmFtZSwgY2xpY2thYmxlTG9nb0xpbmtDb25maWcuY29uZmlnKVxuICAuY29uc3RhbnQobGlicmFyeWgzbHBXaWRnZXRDb25maWcubmFtZSwgbGlicmFyeWgzbHBXaWRnZXRDb25maWcuY29uZmlnKVxuICAuY29uc3RhbnQoc2VhcmNoQmFyU3ViTWVudUl0ZW1zQ29uZmlnLm5hbWUsIHNlYXJjaEJhclN1Yk1lbnVJdGVtc0NvbmZpZy5jb25maWcpXG4gIC52YWx1ZSgnY3VzdG9tTm9TZWFyY2hSZXN1bHRzVGVtcGxhdGVVcmwnLCAnY3VzdG9tLycrdmlld05hbWUrJy9odG1sL25vU2VhcmNoUmVzdWx0cy5odG1sJylcbiAgLmNvbXBvbmVudCgncHJtU2VhcmNoQmFyQWZ0ZXInLCB7XG4gICAgdGVtcGxhdGU6ICc8c2VhcmNoLWJhci1zdWItbWVudT48L3NlYXJjaC1iYXItc3ViLW1lbnU+J1xuICB9KVxuICAuY29tcG9uZW50KCdwcm1BbG1hTW9yZUluc3RBZnRlcicsIHt0ZW1wbGF0ZTogJzx0b2dnbGUtaW5zdGl0dXRpb25zIC8+J30pXG5cblxuIiwiZXhwb3J0IGxldCBzZWFyY2hCYXJTdWJNZW51SXRlbXNDb25maWcgPSB7XG4gIG5hbWU6ICdzZWFyY2hCYXJTdWJNZW51SXRlbXMnLFxuICBjb25maWc6IFtcbiAgICB7XG4gICAgICBuYW1lOiBcIlByb3ZpZGUgRmVlZGJhY2tcIixcbiAgICAgIGRlc2NyaXB0aW9uOiBcIlByb3ZpZGUgRmVlZGJhY2tcIixcbiAgICAgIGFjdGlvbjogXCJodHRwczovL2RvY3MuZ29vZ2xlLmNvbS9mb3Jtcy9kL2UvMUZBSXBRTFNlV3BJa3RGbllORFpxZU4yT19FT0RtVnRraXMwaG9hUk1YaHFWY0JlWFRWSXNpYWcvdmlld2Zvcm0/XCIsXG4gICAgICBpY29uOiB7XG4gICAgICAgIHNldDogJ2NvbW11bmljYXRpb24nLFxuICAgICAgICBpY29uOiAnaWNfZm9ydW1fMjRweCdcbiAgICAgIH1cbiAgICB9XG4gIF1cbn07XG4iLCIvLyB2aWRcbmV4cG9ydCBsZXQgdmlld05hbWUgPSBcIlBDQ19OVUlcIjtcbiIsInJlcXVpcmUoJy4vanMvY2xpY2thYmxlLWxvZ28tdG8tYW55LWxpbmsubW9kdWxlLmpzJylcbm1vZHVsZS5leHBvcnRzID0gJ2NsaWNrYWJsZUxvZ29Ub0FueUxpbmsnXG4iLCJhbmd1bGFyXG4gIC5tb2R1bGUoJ2NsaWNrYWJsZUxvZ29Ub0FueUxpbmsnLCBbXSlcbiAgLmNvbnRyb2xsZXIoJ2NsaWNrYWJsZUxvZ29Ub0FueUxpbmtDb250cm9sbGVyJywgWydjbGlja2FibGVMb2dvTGlua0NvbmZpZycsICckc2NvcGUnLCAnJGZpbHRlcicsIGZ1bmN0aW9uKGNsaWNrYWJsZUxvZ29MaW5rQ29uZmlnLCAkc2NvcGUsICRmaWx0ZXIpIHtcbiAgICAkc2NvcGUuY2xpY2thYmxlTG9nb0xpbmsgPSBjbGlja2FibGVMb2dvTGlua0NvbmZpZy51cmw7XG4gICAgJHNjb3BlLmNsaWNrYWJsZUxvZ29BbHQgPSBjbGlja2FibGVMb2dvTGlua0NvbmZpZy5hbHRUZXh0O1xuICAgICRzY29wZS5pY29uTGluayA9IHRoaXMucGFyZW50Q3RybC5pY29uTGlua1xuICAgICRzY29wZS50cmFuc2xhdGUgPSAob3JpZ2luYWwpID0+IHtcbiAgICAgIHJldHVybiBvcmlnaW5hbC5yZXBsYWNlKC9cXHsoLispXFx9L2csIChtYXRjaCwgcDEpID0+ICRmaWx0ZXIoJ3RyYW5zbGF0ZScpKHAxKSk7XG4gICAgfVxuICB9XSlcbiAgLmNvbXBvbmVudCgncHJtTG9nb0FmdGVyJywge1xuICAgIGJpbmRpbmdzOiB7XG4gICAgICBwYXJlbnRDdHJsOiAnPCdcbiAgICB9LFxuICAgIGNvbnRyb2xsZXI6ICdjbGlja2FibGVMb2dvVG9BbnlMaW5rQ29udHJvbGxlcicsXG4gICAgdGVtcGxhdGU6ICc8ZGl2IGNsYXNzPVwicHJvZHVjdC1sb2dvIHByb2R1Y3QtbG9nby1sb2NhbFwiIGxheW91dD1cInJvd1wiIGxheW91dC1hbGlnbj1cInN0YXJ0IGNlbnRlclwiIGxheW91dC1maWxsIGlkPVwiYmFubmVyXCIgdGFiaW5kZXg9XCIwXCIgcm9sZT1cImJhbm5lclwiPicrXG4gICAgICAgICAgICAgICAgJzxhIG5nLWhyZWY9XCJ7eyB0cmFuc2xhdGUoY2xpY2thYmxlTG9nb0xpbmspIH19XCI+PGltZyBjbGFzcz1cImxvZ28taW1hZ2VcIiBuZy1hbHQ9XCJ7eyB0cmFuc2xhdGUoY2xpY2thYmxlTG9nb0FsdCkgfX1cIiBuZy1zcmM9XCJ7eyBpY29uTGluayB9fVwiLz48L2E+JytcbiAgICAgICAgICAgICAgJzwvZGl2PidcblxuICB9KTtcbiIsInJlcXVpcmUoJy4vanMvY3VzdG9tLWFjdGlvbnMubW9kdWxlLmpzJylcbm1vZHVsZS5leHBvcnRzID0gJ2N1c3RvbUFjdGlvbnMnXG4iLCJhbmd1bGFyXG4gIC5tb2R1bGUoJ2N1c3RvbUFjdGlvbnMnLCBbXSlcbiAgLmNvbXBvbmVudCgncHJtQWN0aW9uQ29udGFpbmVyQWZ0ZXInLCB7XG4gICAgcmVxdWlyZTogeyBwcm1BY3Rpb25DdHJsOiAnXnBybUFjdGlvbkxpc3QnIH0sXG4gICAgY29udHJvbGxlcjogWydjdXN0b21BY3Rpb25zU2VydmljZScsICdjdXN0b21BY3Rpb25zJywgZnVuY3Rpb24gKGN1c3RvbUFjdGlvbnNTZXJ2aWNlLCBjdXN0b21BY3Rpb25zKSB7XG4gICAgICB0aGlzLiRvbkluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGN1c3RvbUFjdGlvbnNTZXJ2aWNlLnNldENvbnRyb2xsZXIodGhpcy5wcm1BY3Rpb25DdHJsKVxuICAgICAgICBjdXN0b21BY3Rpb25zLm1hcChhY3Rpb24gPT4gY3VzdG9tQWN0aW9uc1NlcnZpY2UuYWRkQWN0aW9uKGFjdGlvbikpXG4gICAgICB9XG4gICAgfV1cbiAgfSlcbiAgLmZhY3RvcnkoJ2N1c3RvbUFjdGlvbnNTZXJ2aWNlJywgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB7XG4gICAgICBzZXRDb250cm9sbGVyOiBmdW5jdGlvbiAoY29udHJvbGxlcikge1xuICAgICAgICB0aGlzLnBybUFjdGlvbkN0cmwgPSBjb250cm9sbGVyXG4gICAgICB9LFxuICAgICAgcHJvY2Vzc0FjdGlvbjogZnVuY3Rpb24gKGFjdGlvbikge1xuICAgICAgICBhY3Rpb24uaWNvbm5hbWUgPSBhY3Rpb24ubmFtZS5yZXBsYWNlKC9cXHMrL2csICcnKSxcbiAgICAgICAgYWN0aW9uLnNsdWcgPSBhY3Rpb24ubmFtZS5yZXBsYWNlKC9cXHMrL2csICcnKS50b0xvd2VyQ2FzZSgpLFxuICAgICAgICBhY3Rpb24uaW5kZXggPSBPYmplY3Qua2V5cyh0aGlzLnBybUFjdGlvbkN0cmwuYWN0aW9uTGlzdFNlcnZpY2UuYWN0aW9uc1RvSW5kZXgpLmxlbmd0aCAtIDFcbiAgICAgICAgdGhpcy5wcm1BY3Rpb25DdHJsLmFjdGlvbkxhYmVsTmFtZXNNYXBbYWN0aW9uLnNsdWddID0gYWN0aW9uLm5hbWVcbiAgICAgICAgdGhpcy5wcm1BY3Rpb25DdHJsLmFjdGlvbkljb25OYW1lc01hcFthY3Rpb24uc2x1Z10gPSBhY3Rpb24uaWNvbm5hbWVcbiAgICAgICAgdGhpcy5wcm1BY3Rpb25DdHJsLmFjdGlvbkljb25zW2FjdGlvbi5pY29ubmFtZV0gPSB7XG4gICAgICAgICAgaWNvbjogYWN0aW9uLmljb24ubmFtZSxcbiAgICAgICAgICBpY29uU2V0OiBhY3Rpb24uaWNvbi5zZXQsXG4gICAgICAgICAgdHlwZTogXCJzdmdcIlxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhY3Rpb25cbiAgICAgIH0sXG4gICAgICBhZGRBY3Rpb246IGZ1bmN0aW9uIChhY3Rpb24pIHtcbiAgICAgICAgYWN0aW9uID0gdGhpcy5wcm9jZXNzQWN0aW9uKGFjdGlvbilcbiAgICAgICAgaWYgKCF0aGlzLnBybUFjdGlvbkN0cmwuYWN0aW9uTGlzdFNlcnZpY2UuYWN0aW9uc1RvSW5kZXhbYWN0aW9uLnNsdWddKSB7XG4gICAgICAgICAgdGhpcy5wcm1BY3Rpb25DdHJsLmFjdGlvbkxpc3RTZXJ2aWNlLnJlcXVpcmVkQWN0aW9uc0xpc3RbYWN0aW9uLmluZGV4XSA9IGFjdGlvbi5zbHVnXG4gICAgICAgICAgdGhpcy5wcm1BY3Rpb25DdHJsLmFjdGlvbkxpc3RTZXJ2aWNlLmFjdGlvbnNUb0Rpc3BsYXkudW5zaGlmdChhY3Rpb24uc2x1ZylcbiAgICAgICAgICB0aGlzLnBybUFjdGlvbkN0cmwuYWN0aW9uTGlzdFNlcnZpY2UuYWN0aW9uc1RvSW5kZXhbYWN0aW9uLnNsdWddID0gYWN0aW9uLmluZGV4XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGFjdGlvbi50eXBlID09PSAndGVtcGxhdGUnKSB7XG4gICAgICAgICAgICAvLyBwcm9jZXNzIHsgfSBpbiB0ZW1wbGF0ZVZhcnNcbiAgICAgICAgICAgIGlmIChhY3Rpb24uaGFzT3duUHJvcGVydHkoJ3RlbXBsYXRlVmFyJykpIHtcbiAgICAgICAgICAgICAgICBhY3Rpb24uYWN0aW9uID0gYWN0aW9uLmFjdGlvbi5yZXBsYWNlKC97XFxkfS9nLCAocikgPT4gYWN0aW9uLnRlbXBsYXRlVmFyW3IucmVwbGFjZSgvW15cXGRdL2csICcnKV0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyByZXBsYWNlIGEgcmVjb3JkSWQgb2NjdXJlbmNlXG4gICAgICAgICAgICBhY3Rpb24uYWN0aW9uID0gYWN0aW9uLmFjdGlvbi5yZXBsYWNlKC97cmVjb3JkSWR9L2csIChyKSA9PiB0aGlzLnBybUFjdGlvbkN0cmwuaXRlbS5wbnguc2VhcmNoLnJlY29yZGlkWzBdKVxuICAgICAgICAgICAgLy8gcmVwbGFjZSBhIHBueC54eHgueHh4WzBdIHBhdHRlcm4gZXguIHBueC5zZWFyY2gucmVjb3JkaWRbMF1cbiAgICAgICAgICAgIGxldCBwbnhQcm9wZXJ0aWVzID0gYWN0aW9uLmFjdGlvbi5tYXRjaCgvXFx7KHBueFxcLi4qPylcXH0vZykgfHwgW11cbiAgICAgICAgICAgIHBueFByb3BlcnRpZXMuZm9yRWFjaCgocCkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCB2YWx1ZUZvclAgPSBwLnJlcGxhY2UoL1t7fV0vZywgJycpLnNwbGl0KCcuJykucmVkdWNlKChvLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaCA9IC8oLiopKFxcW1xcZFxcXSkvLmV4ZWMoaSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChoIGluc3RhbmNlb2YgQXJyYXkpIHsgcmV0dXJuIG9baFsxXV1baFsyXS5yZXBsYWNlKC9bXlxcZF0vZywgJycpXSB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gb1tpXVxuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJydcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIHRoaXMucHJtQWN0aW9uQ3RybC5pdGVtKVxuICAgICAgICAgICAgICAgIGFjdGlvbi5hY3Rpb24gPSBhY3Rpb24uYWN0aW9uLnJlcGxhY2UocCwgdmFsdWVGb3JQKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnBybUFjdGlvbkN0cmwuYWN0aW9uTGlzdFNlcnZpY2Uub25Ub2dnbGVbYWN0aW9uLnNsdWddID0gKCkgPT4gd2luZG93Lm9wZW4oYWN0aW9uLmFjdGlvbiwgJ19ibGFuaycpXG4gICAgICB9XG4gICAgfVxuICB9KVxuIiwicmVxdWlyZSgnLi9qcy9saWJyYXJ5aDNscC13aWRnZXQubW9kdWxlLmpzJylcbm1vZHVsZS5leHBvcnRzID0gJ2xpYnJhcnloM2xwV2lkZ2V0J1xuIiwiYW5ndWxhclxuICAvLyBOYW1lIG91ciBtb2R1bGVcbiAgLm1vZHVsZSgnbGlicmFyeWgzbHBXaWRnZXQnLCBbXSlcbiAgLy8gQWRkIHRoZSBsaWJyYXJ5aDNscCB1cmwgdG8gdHJ1c3RlZCB1cmwgc291cmNlc1xuICAvLyBzbyBhbmd1bGFyIGRvZXNuJ3QgYmxvY2sgaXQgZnJvbSBhbiBpZnJhbWVcbiAgLmZpbHRlcigndHJ1c3RVcmwnLCBbJyRzY2UnLCBmdW5jdGlvbiAoJHNjZSkge1xuICAgIHJldHVybiBmdW5jdGlvbih1cmwpIHtcbiAgICAgIGlmICgvXmh0dHAocyk/OlxcL1xcLyguK1xcLik/bGlicmFyeWgzbHBcXC5jb20uKyQvLnRlc3QodXJsKSkge1xuICAgICAgICByZXR1cm4gJHNjZS50cnVzdEFzUmVzb3VyY2VVcmwodXJsKTtcbiAgICAgIH1cbiAgICB9O1xuICB9XSlcbiAgLy8gQ29udHJvbGxlciBmb3IgdGhlIGNvbXBvbmVudCBiZWxvd1xuICAuY29udHJvbGxlcignbGlicmFyeWgzbHBXaWRnZXRDb250cm9sbGVyJywgWydsaWJyYXJ5aDNscFdpZGdldENvbmZpZycsICckc2NvcGUnLCBmdW5jdGlvbihsaWJyYXJ5aDNscFdpZGdldENvbmZpZywgJHNjb3BlKSB7XG4gICAgdGhpcy4kb25Jbml0ID0gKCkgPT4ge1xuICAgICAgJHNjb3BlLmNvbmZpZyA9IGxpYnJhcnloM2xwV2lkZ2V0Q29uZmlnO1xuICAgICAgJHNjb3BlLnBhcmVudEN0cmwgPSB0aGlzLnBhcmVudEN0cmw7XG4gICAgfVxuICAgIC8vIERvIGZhY2V0cyBleGlzdD9cbiAgICAkc2NvcGUuZmFjZXRzRXhpc3QgPSAoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gKCRzY29wZS5wYXJlbnRDdHJsLnNlYXJjaFNlcnZpY2UuZmFjZXRTZXJ2aWNlLnJlc3VsdHMubGVuZ3RoID4gMCk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gQWRkIHRoZSBib3R0b20gcGFkZGluZyBjbGFzcyBpZiB0aGVyZSBhcmUgZmFjZXRzXG4gICAgJHNjb3BlLmJvdHRvbVBhZGRpbmcgPSAoKSA9PiB7XG4gICAgICBpZiAoJHNjb3BlLmZhY2V0c0V4aXN0KCkpIHtcbiAgICAgICAgcmV0dXJuIFwiY2hhdC1ib3R0b20tcGFkZGluZ1wiO1xuICAgICAgfVxuICAgIH1cbiAgfV0pXG4gIC5jb21wb25lbnQoJ3BybUV4cGxvcmVNYWluQWZ0ZXInLCB7XG4gICAgYmluZGluZ3M6IHtcbiAgICAgIHBhcmVudEN0cmw6ICc8J1xuICAgIH0sXG4gICAgY29udHJvbGxlcjogJ2xpYnJhcnloM2xwV2lkZ2V0Q29udHJvbGxlcicsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ1dHRvbiBjaGF0LXRhYiBzcy1jaGF0IGpzLXRvZ2dsZS1jaGF0XCIgbmctY2xhc3M9XCJib3R0b21QYWRkaW5nKClcIiBuZy1pbml0PVwic2hvd0NoYXRXaWRnZXQgPSBmYWxzZVwiIG5nLWNsaWNrPVwic2hvd0NoYXRXaWRnZXQgPSAhc2hvd0NoYXRXaWRnZXRcIj5cbiAgICAgICAgICAgICAgICA8cHJtLWljb24gc3R5bGU9XCJ6LWluZGV4OjFcIiBpY29uLXR5cGU9XCJzdmdcIiBzdmctaWNvbi1zZXQ9XCJ7e2NvbmZpZy5pY29uLnNldH19XCIgaWNvbi1kZWZpbml0aW9uPVwie3tjb25maWcuaWNvbi5pY29ufX1cIj48L3BybS1pY29uPlxuICAgICAgICAgICAgICAgIHt7Y29uZmlnLnByb21wdH19XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2hhdC1mcmFtZS13cmFwXCIgbmctY2xhc3M9XCJib3R0b21QYWRkaW5nKClcIiBuZy1zaG93PVwic2hvd0NoYXRXaWRnZXRcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImNoYXQtY2xvc2Ugc3MtaWNvbiBqcy10b2dnbGUtY2hhdFwiIHRpdGxlPVwiQ2xvc2UgY2hhdCB3aW5kb3dcIiBuZy1jbGljaz1cInNob3dDaGF0V2lkZ2V0ID0gIXNob3dDaGF0V2lkZ2V0XCI+JnRpbWVzOzwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxpZnJhbWUgY2xhc3M9XCJjaGF0LWZyYW1lXCIgbmctc3JjPVwie3tjb25maWcudXJsIHwgdHJ1c3RVcmx9fVwiIGZyYW1lYm9yZGVyPVwiMFwiPjwvaWZyYW1lPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgYFxuICB9KTtcbiIsInJlcXVpcmUoJy4vanMvc2VhcmNoLWJhci1zdWItbWVudS5tb2R1bGUuanMnKVxubW9kdWxlLmV4cG9ydHMgPSAnc2VhcmNoQmFyU3ViTWVudSdcbiIsImFuZ3VsYXJcbiAgLm1vZHVsZSgnc2VhcmNoQmFyU3ViTWVudScsIFtdKVxuICAuY29udHJvbGxlcignc2VhcmNoQmFyU3ViTWVudUNvbnRyb2xsZXInLCBbJ3NlYXJjaEJhclN1Yk1lbnVJdGVtcycsICckc2NvcGUnLCAnJGZpbHRlcicsIGZ1bmN0aW9uKGl0ZW1zLCAkc2NvcGUsICRmaWx0ZXIpIHtcbiAgICB0aGlzLiRvbkluaXQgPSAoKSA9PiB7XG4gICAgICAkc2NvcGUuaXRlbXMgPSBpdGVtcztcbiAgICB9XG4gICAgJHNjb3BlLnRyYW5zbGF0ZSA9IChvcmlnaW5hbCkgPT4ge1xuICAgICAgcmV0dXJuIG9yaWdpbmFsLnJlcGxhY2UoL1xceyguKylcXH0vZywgKG1hdGNoLCBwMSkgPT4gJGZpbHRlcigndHJhbnNsYXRlJykocDEpKTtcbiAgICB9XG4gICAgJHNjb3BlLmdvVG9VcmwgPSAodXJsKSA9PiB7XG4gICAgICB3aW5kb3cub3Blbih1cmwsICdfYmxhbmsnKTtcbiAgICB9XG4gIH1dKVxuICAuY29tcG9uZW50KCdzZWFyY2hCYXJTdWJNZW51Jywge1xuICAgIGNvbnRyb2xsZXI6ICdzZWFyY2hCYXJTdWJNZW51Q29udHJvbGxlcicsXG4gICAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwibGF5b3V0LWFsaWduLWVuZC1jZW50ZXIgbGF5b3V0LXJvdyBmbGV4IHNlYXJjaC1iYXItc3ViLW1lbnVcIj5cbiAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICA8bGkgbmctcmVwZWF0PVwiaXRlbSBpbiBpdGVtc1wiPlxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBkYXRhLWhyZWY9XCJ7eyB0cmFuc2xhdGUoaXRlbS5hY3Rpb24pIH19XCIgYXJpYS1sYWJlbD1cInt7IHRyYW5zbGF0ZShpdGVtLmRlc2NyaXB0aW9uKSB9fVwiIG5nLWNsaWNrPVwiZ29Ub1VybCh0cmFuc2xhdGUoaXRlbS5hY3Rpb24pKVwiIGNsYXNzPVwiYnV0dG9uLXdpdGgtaWNvbiB6ZXJvLW1hcmdpbiBtZC1idXR0b24gbWQtc21hbGwge3tpdGVtLmNzc0NsYXNzZXN9fVwiIHR5cGU9XCJidXR0b25cIj5cbiAgICAgICAgICAgICAgICAgICAgPG1kLXRvb2x0aXAgbWQtZGlyZWN0aW9uPVwiYm90dG9tXCIgbWQtZGVsYXk9XCI1MDBcIj57eyB0cmFuc2xhdGUoaXRlbS5kZXNjcmlwdGlvbikgfX08L21kLXRvb2x0aXA+PHBybS1pY29uIHN0eWxlPVwiei1pbmRleDoxXCIgaWNvbi10eXBlPVwic3ZnXCIgc3ZnLWljb24tc2V0PVwie3tpdGVtLmljb24uc2V0fX1cIiBpY29uLWRlZmluaXRpb249XCJ7e2l0ZW0uaWNvbi5pY29ufX1cIj48L3BybS1pY29uPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInNlYXJjaC1iYXItc3ViLW1lbnUtaXRlbVwiIG5nLWNsYXNzPVwiKGl0ZW0uc2hvd194cykgPyAnJyA6ICdoaWRlLXhzJ1wiPnt7IHRyYW5zbGF0ZShpdGVtLm5hbWUpIH19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgIDwvZGl2PmBcblxuICB9KTtcbiIsIid1c2Ugc3RyaWN0JztcblxuYW5ndWxhci5tb2R1bGUoJ3RvZ2dsZUluc3RpdHV0aW9ucycsIFtdKTtcblxuYW5ndWxhci5tb2R1bGUoJ3RvZ2dsZUluc3RpdHV0aW9ucycpLmNvbXBvbmVudCgndG9nZ2xlSW5zdGl0dXRpb25zJywge1xuICBiaW5kaW5nczoge1xuICAgIHN0YXJ0SGlkZGVuOiAnPCdcbiAgfSxcbiAgdGVtcGxhdGU6ICdcXG4gICAgPG1kLWJ1dHRvbiBjbGFzcz1cIm1kLXJhaXNlZCB0b2dnbGUtaW5zdGl0dXRpb25zXCIgbmctY2xpY2s9XCIkY3RybC50b2dnbGVMaWJzKClcIiBpZD1cInN1bW1pdEJ1dHRvblwiIGFyaWEtY29udHJvbHM9XCJzdW1taXRMaW5rc1wiIGFyaWEtZXhwYW5kZWQ9ZmFsc2UgYXJpYS1sYWJlbD1cIlNob3cvSGlkZSBTdW1taXQgTGlicmFyaWVzXCI+XFxuICAgICAgICB7eyRjdHJsLnNob3dMaWJzID8gXFwnSGlkZSBTdW1taXQgTGlicmFyaWVzXFwnIDogXFwnU2hvdyBTdW1taXQgTGlicmFyaWVzXFwnfX1cXG4gICAgICA8c3BhbiBhcmlhLWhpZGRlbj10cnVlPnt7JGN0cmwuc2hvd0xpYnMgPyBcXCcmbGFxdW87XFwnIDogXFwnJnJhcXVvO1xcJ319PC9zcGFuPlxcbiAgICA8L21kLWJ1dHRvbj4nLFxuICBjb250cm9sbGVyOiBmdW5jdGlvbiBjb250cm9sbGVyKCkge1xuICAgIHRoaXMuJG9uSW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoaXMuc2hvd0xpYnMgPSB0aGlzLnN0YXJ0SGlkZGVuID09PSBmYWxzZSA/IHRydWUgOiBmYWxzZTtcbiAgICAgIHRoaXMuYnV0dG9uID0gYW5ndWxhci5lbGVtZW50KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3BybS1hbG1hLW1vcmUtaW5zdC1hZnRlciBidXR0b24nKSk7XG4gICAgICB0aGlzLnRhYnMgPSBhbmd1bGFyLmVsZW1lbnQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcigncHJtLWFsbWEtbW9yZS1pbnN0IG1kLXRhYnMnKSk7XG4gICAgICB0aGlzLnRhYnMuYXR0cignaWQnLCAnc3VtbWl0TGlua3MnKTtcbiAgICAgIHRoaXMuYnV0dG9uLnBhcmVudCgpLmFmdGVyKHRoaXMudGFicyk7XG4gICAgICBpZiAoIXRoaXMuc2hvd0xpYnMpIHRoaXMudGFicy5hZGRDbGFzcygnaGlkZScpO1xuICAgIH07XG4gICAgdGhpcy50b2dnbGVMaWJzID0gZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy5zaG93TGlicyA9ICF0aGlzLnNob3dMaWJzO1xuICAgICAgdGhpcy50YWJzLmhhc0NsYXNzKCdoaWRlJykgPyB0aGlzLnRhYnMucmVtb3ZlQ2xhc3MoJ2hpZGUnKSAmJiB0aGlzLmJ1dHRvbi5hdHRyKCdhcmlhLWV4cGFuZGVkJywgdHJ1ZSkgOiB0aGlzLnRhYnMuYWRkQ2xhc3MoJ2hpZGUnKSAmJiB0aGlzLmJ1dHRvbi5hdHRyKCdhcmlhLWV4cGFuZGVkJywgZmFsc2UpO1xuICAgIH07XG4gIH1cbn0pOyIsInJlcXVpcmUoJy4vZGlzdC9tb2R1bGUuanMnKVxubW9kdWxlLmV4cG9ydHMgPSAndG9nZ2xlSW5zdGl0dXRpb25zJ1xuIl19
