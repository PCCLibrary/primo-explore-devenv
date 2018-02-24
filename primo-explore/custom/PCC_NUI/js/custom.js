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
var libraryh3lpWidgetConfig = exports.libraryh3lpWidgetConfig = {
  name: 'libraryh3lpWidgetConfig',
  config: {
    url: '//libraryh3lp.com/chat/pcc-ask-a-librarian@chat.libraryh3lp.com?skin=20872&title=Chat+With+A+Librarian&identity=PCC',
    prompt: 'Chat with us',
    icon: {
      set: 'communication',
      icon: 'ic_chat_24px'
    }
  }
};

},{}],3:[function(require,module,exports){
'use strict';

require('primo-explore-clickable-logo-to-any-link');

require('primo-explore-libraryh3lp-widget');

require('primo-explore-search-bar-sub-menu');

require('primo-explore-toggle-institutions');

var _viewName = require('./viewName');

var _clickableLogoToAnyLink = require('./clickableLogoToAnyLink');

var _libraryh3lpWidget = require('./libraryh3lpWidget');

var _searchBarSubMenu = require('./searchBarSubMenu');

var app = angular.module('viewCustom', ['clickableLogoToAnyLink', 'libraryh3lpWidget', 'searchBarSubMenu', 'toggleInstitutions']);

app.constant(_clickableLogoToAnyLink.clickableLogoLinkConfig.name, _clickableLogoToAnyLink.clickableLogoLinkConfig.config).constant(_libraryh3lpWidget.libraryh3lpWidgetConfig.name, _libraryh3lpWidget.libraryh3lpWidgetConfig.config).constant(_searchBarSubMenu.searchBarSubMenuItemsConfig.name, _searchBarSubMenu.searchBarSubMenuItemsConfig.config).value('customNoSearchResultsTemplateUrl', 'custom/' + _viewName.viewName + '/html/noSearchResults.html').component('prmSearchBarAfter', {
  template: '<search-bar-sub-menu></search-bar-sub-menu>'
}).component('prmAlmaMoreInstAfter', { template: '<toggle-institutions />' });

},{"./clickableLogoToAnyLink":1,"./libraryh3lpWidget":2,"./searchBarSubMenu":4,"./viewName":5,"primo-explore-clickable-logo-to-any-link":6,"primo-explore-libraryh3lp-widget":8,"primo-explore-search-bar-sub-menu":10,"primo-explore-toggle-institutions":13}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var searchBarSubMenuItemsConfig = exports.searchBarSubMenuItemsConfig = {
  name: 'searchBarSubMenuItems',
  config: [{
    name: "Provide Feedback",
    description: "Provide Feedback",
    action: "https://docs.google.com/forms/d/e/1FAIpQLSeWpIktFnYNDZqeN2O_EODmVtkis0hoaRMXhqVcBeXTVIsiag/viewform?adaptor=Local+Search+Engine&context=L&docid=CP71166276150001451&lang=en_US&offset=0&query=any,contains,dogs&search_scope=PCC_Summit&sortby=rank&tab=default_tab&vid=PCC_NUI",
    icon: {
      set: 'communication',
      icon: 'ic_forum_24px'
    }
  }]
};

},{}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// vid
var viewName = exports.viewName = "PCC_NUI";

},{}],6:[function(require,module,exports){
require('./js/clickable-logo-to-any-link.module.js')
module.exports = 'clickableLogoToAnyLink'

},{"./js/clickable-logo-to-any-link.module.js":7}],7:[function(require,module,exports){
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

},{}],8:[function(require,module,exports){
require('./js/libraryh3lp-widget.module.js')
module.exports = 'libraryh3lpWidget'

},{"./js/libraryh3lp-widget.module.js":9}],9:[function(require,module,exports){
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

},{}],10:[function(require,module,exports){
require('./js/search-bar-sub-menu.module.js')
module.exports = 'searchBarSubMenu'

},{"./js/search-bar-sub-menu.module.js":11}],11:[function(require,module,exports){
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

},{}],12:[function(require,module,exports){
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
},{}],13:[function(require,module,exports){
require('./dist/module.js')
module.exports = 'toggleInstitutions'

},{"./dist/module.js":12}]},{},[3])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJwcmltby1leHBsb3JlL2N1c3RvbS9QQ0NfTlVJL2pzL2NsaWNrYWJsZUxvZ29Ub0FueUxpbmsuanMiLCJwcmltby1leHBsb3JlL2N1c3RvbS9QQ0NfTlVJL2pzL2xpYnJhcnloM2xwV2lkZ2V0LmpzIiwicHJpbW8tZXhwbG9yZS9jdXN0b20vUENDX05VSS9qcy9tYWluLmpzIiwicHJpbW8tZXhwbG9yZS9jdXN0b20vUENDX05VSS9qcy9zZWFyY2hCYXJTdWJNZW51LmpzIiwicHJpbW8tZXhwbG9yZS9jdXN0b20vUENDX05VSS9qcy92aWV3TmFtZS5qcyIsInByaW1vLWV4cGxvcmUvY3VzdG9tL1BDQ19OVUkvbm9kZV9tb2R1bGVzL3ByaW1vLWV4cGxvcmUtY2xpY2thYmxlLWxvZ28tdG8tYW55LWxpbmsvaW5kZXguanMiLCJwcmltby1leHBsb3JlL2N1c3RvbS9QQ0NfTlVJL25vZGVfbW9kdWxlcy9wcmltby1leHBsb3JlLWNsaWNrYWJsZS1sb2dvLXRvLWFueS1saW5rL2pzL2NsaWNrYWJsZS1sb2dvLXRvLWFueS1saW5rLm1vZHVsZS5qcyIsInByaW1vLWV4cGxvcmUvY3VzdG9tL1BDQ19OVUkvbm9kZV9tb2R1bGVzL3ByaW1vLWV4cGxvcmUtbGlicmFyeWgzbHAtd2lkZ2V0L2luZGV4LmpzIiwicHJpbW8tZXhwbG9yZS9jdXN0b20vUENDX05VSS9ub2RlX21vZHVsZXMvcHJpbW8tZXhwbG9yZS1saWJyYXJ5aDNscC13aWRnZXQvanMvbGlicmFyeWgzbHAtd2lkZ2V0Lm1vZHVsZS5qcyIsInByaW1vLWV4cGxvcmUvY3VzdG9tL1BDQ19OVUkvbm9kZV9tb2R1bGVzL3ByaW1vLWV4cGxvcmUtc2VhcmNoLWJhci1zdWItbWVudS9pbmRleC5qcyIsInByaW1vLWV4cGxvcmUvY3VzdG9tL1BDQ19OVUkvbm9kZV9tb2R1bGVzL3ByaW1vLWV4cGxvcmUtc2VhcmNoLWJhci1zdWItbWVudS9qcy9zZWFyY2gtYmFyLXN1Yi1tZW51Lm1vZHVsZS5qcyIsInByaW1vLWV4cGxvcmUvY3VzdG9tL1BDQ19OVUkvbm9kZV9tb2R1bGVzL3ByaW1vLWV4cGxvcmUtdG9nZ2xlLWluc3RpdHV0aW9ucy9kaXN0L21vZHVsZS5qcyIsInByaW1vLWV4cGxvcmUvY3VzdG9tL1BDQ19OVUkvbm9kZV9tb2R1bGVzL3ByaW1vLWV4cGxvcmUtdG9nZ2xlLWluc3RpdHV0aW9ucy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FDQU8sSUFBSSw0REFBMEI7QUFDbkMsUUFBTSx5QkFENkI7QUFFbkMsVUFBUTtBQUNOLFNBQUssNENBREM7QUFFTixhQUFTO0FBRkg7QUFGMkIsQ0FBOUI7Ozs7Ozs7O0FDQUEsSUFBSSw0REFBMEI7QUFDbkMsUUFBTSx5QkFENkI7QUFFbkMsVUFBUTtBQUNOLFNBQUsscUhBREM7QUFFTixZQUFRLGNBRkY7QUFHTixVQUFNO0FBQ0osV0FBSyxlQUREO0FBRUosWUFBTTtBQUZGO0FBSEE7QUFGMkIsQ0FBOUI7Ozs7O0FDQVA7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUEsSUFBSSxNQUFNLFFBQVEsTUFBUixDQUFlLFlBQWYsRUFBNkIsQ0FDQyx3QkFERCxFQUVDLG1CQUZELEVBR0Msa0JBSEQsRUFJQyxvQkFKRCxDQUE3QixDQUFWOztBQU9BLElBQ0csUUFESCxDQUNZLGdEQUF3QixJQURwQyxFQUMwQyxnREFBd0IsTUFEbEUsRUFFRyxRQUZILENBRVksMkNBQXdCLElBRnBDLEVBRTBDLDJDQUF3QixNQUZsRSxFQUdHLFFBSEgsQ0FHWSw4Q0FBNEIsSUFIeEMsRUFHOEMsOENBQTRCLE1BSDFFLEVBSUcsS0FKSCxDQUlTLGtDQUpULEVBSTZDLGlDQUFtQiw0QkFKaEUsRUFLRyxTQUxILENBS2EsbUJBTGIsRUFLa0M7QUFDOUIsWUFBVTtBQURvQixDQUxsQyxFQVFHLFNBUkgsQ0FRYSxzQkFSYixFQVFxQyxFQUFDLFVBQVUseUJBQVgsRUFSckM7Ozs7Ozs7O0FDakJPLElBQUksb0VBQThCO0FBQ3ZDLFFBQU0sdUJBRGlDO0FBRXZDLFVBQVEsQ0FDTjtBQUNFLFVBQU0sa0JBRFI7QUFFRSxpQkFBYSxrQkFGZjtBQUdFLFlBQVEsaVJBSFY7QUFJRSxVQUFNO0FBQ0osV0FBSyxlQUREO0FBRUosWUFBTTtBQUZGO0FBSlIsR0FETTtBQUYrQixDQUFsQzs7Ozs7Ozs7QUNBUDtBQUNPLElBQUksOEJBQVcsU0FBZjs7O0FDRFA7QUFDQTtBQUNBOztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQkE7QUFDQTtBQUNBOztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakRBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZCQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfXJldHVybiBlfSkoKSIsImV4cG9ydCBsZXQgY2xpY2thYmxlTG9nb0xpbmtDb25maWcgPSB7XG4gIG5hbWU6ICdjbGlja2FibGVMb2dvTGlua0NvbmZpZycsXG4gIGNvbmZpZzoge1xuICAgIHVybDogJ2h0dHBzOi8vc2hhbmdoYWkubnl1LmVkdS9hY2FkZW1pY3MvbGlicmFyeScsXG4gICAgYWx0VGV4dDogJ05ZVSBTaGFuZ2hhaSBMaWJyYXJ5J1xuICB9XG59O1xuIiwiZXhwb3J0IGxldCBsaWJyYXJ5aDNscFdpZGdldENvbmZpZyA9IHtcbiAgbmFtZTogJ2xpYnJhcnloM2xwV2lkZ2V0Q29uZmlnJyxcbiAgY29uZmlnOiB7XG4gICAgdXJsOiAnLy9saWJyYXJ5aDNscC5jb20vY2hhdC9wY2MtYXNrLWEtbGlicmFyaWFuQGNoYXQubGlicmFyeWgzbHAuY29tP3NraW49MjA4NzImdGl0bGU9Q2hhdCtXaXRoK0ErTGlicmFyaWFuJmlkZW50aXR5PVBDQycsXG4gICAgcHJvbXB0OiAnQ2hhdCB3aXRoIHVzJyxcbiAgICBpY29uOiB7XG4gICAgICBzZXQ6ICdjb21tdW5pY2F0aW9uJyxcbiAgICAgIGljb246ICdpY19jaGF0XzI0cHgnXG4gICAgfVxuICB9XG59O1xuIiwiaW1wb3J0ICdwcmltby1leHBsb3JlLWNsaWNrYWJsZS1sb2dvLXRvLWFueS1saW5rJztcbmltcG9ydCAncHJpbW8tZXhwbG9yZS1saWJyYXJ5aDNscC13aWRnZXQnO1xuaW1wb3J0ICdwcmltby1leHBsb3JlLXNlYXJjaC1iYXItc3ViLW1lbnUnO1xuaW1wb3J0ICdwcmltby1leHBsb3JlLXRvZ2dsZS1pbnN0aXR1dGlvbnMnO1xuXG5pbXBvcnQgeyB2aWV3TmFtZSB9IGZyb20gJy4vdmlld05hbWUnO1xuaW1wb3J0IHsgY2xpY2thYmxlTG9nb0xpbmtDb25maWcgfSBmcm9tICcuL2NsaWNrYWJsZUxvZ29Ub0FueUxpbmsnO1xuaW1wb3J0IHsgbGlicmFyeWgzbHBXaWRnZXRDb25maWcgfSBmcm9tICcuL2xpYnJhcnloM2xwV2lkZ2V0JztcbmltcG9ydCB7IHNlYXJjaEJhclN1Yk1lbnVJdGVtc0NvbmZpZyB9IGZyb20gJy4vc2VhcmNoQmFyU3ViTWVudSc7XG5cbmxldCBhcHAgPSBhbmd1bGFyLm1vZHVsZSgndmlld0N1c3RvbScsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2xpY2thYmxlTG9nb1RvQW55TGluaycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2xpYnJhcnloM2xwV2lkZ2V0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnc2VhcmNoQmFyU3ViTWVudScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RvZ2dsZUluc3RpdHV0aW9ucydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSk7XG5cbmFwcFxuICAuY29uc3RhbnQoY2xpY2thYmxlTG9nb0xpbmtDb25maWcubmFtZSwgY2xpY2thYmxlTG9nb0xpbmtDb25maWcuY29uZmlnKVxuICAuY29uc3RhbnQobGlicmFyeWgzbHBXaWRnZXRDb25maWcubmFtZSwgbGlicmFyeWgzbHBXaWRnZXRDb25maWcuY29uZmlnKVxuICAuY29uc3RhbnQoc2VhcmNoQmFyU3ViTWVudUl0ZW1zQ29uZmlnLm5hbWUsIHNlYXJjaEJhclN1Yk1lbnVJdGVtc0NvbmZpZy5jb25maWcpXG4gIC52YWx1ZSgnY3VzdG9tTm9TZWFyY2hSZXN1bHRzVGVtcGxhdGVVcmwnLCAnY3VzdG9tLycrdmlld05hbWUrJy9odG1sL25vU2VhcmNoUmVzdWx0cy5odG1sJylcbiAgLmNvbXBvbmVudCgncHJtU2VhcmNoQmFyQWZ0ZXInLCB7XG4gICAgdGVtcGxhdGU6ICc8c2VhcmNoLWJhci1zdWItbWVudT48L3NlYXJjaC1iYXItc3ViLW1lbnU+J1xuICB9KVxuICAuY29tcG9uZW50KCdwcm1BbG1hTW9yZUluc3RBZnRlcicsIHt0ZW1wbGF0ZTogJzx0b2dnbGUtaW5zdGl0dXRpb25zIC8+J30pXG5cblxuIiwiZXhwb3J0IGxldCBzZWFyY2hCYXJTdWJNZW51SXRlbXNDb25maWcgPSB7XG4gIG5hbWU6ICdzZWFyY2hCYXJTdWJNZW51SXRlbXMnLFxuICBjb25maWc6IFtcbiAgICB7XG4gICAgICBuYW1lOiBcIlByb3ZpZGUgRmVlZGJhY2tcIixcbiAgICAgIGRlc2NyaXB0aW9uOiBcIlByb3ZpZGUgRmVlZGJhY2tcIixcbiAgICAgIGFjdGlvbjogXCJodHRwczovL2RvY3MuZ29vZ2xlLmNvbS9mb3Jtcy9kL2UvMUZBSXBRTFNlV3BJa3RGbllORFpxZU4yT19FT0RtVnRraXMwaG9hUk1YaHFWY0JlWFRWSXNpYWcvdmlld2Zvcm0/YWRhcHRvcj1Mb2NhbCtTZWFyY2grRW5naW5lJmNvbnRleHQ9TCZkb2NpZD1DUDcxMTY2Mjc2MTUwMDAxNDUxJmxhbmc9ZW5fVVMmb2Zmc2V0PTAmcXVlcnk9YW55LGNvbnRhaW5zLGRvZ3Mmc2VhcmNoX3Njb3BlPVBDQ19TdW1taXQmc29ydGJ5PXJhbmsmdGFiPWRlZmF1bHRfdGFiJnZpZD1QQ0NfTlVJXCIsXG4gICAgICBpY29uOiB7XG4gICAgICAgIHNldDogJ2NvbW11bmljYXRpb24nLFxuICAgICAgICBpY29uOiAnaWNfZm9ydW1fMjRweCdcbiAgICAgIH1cbiAgICB9XG4gIF1cbn07XG4iLCIvLyB2aWRcbmV4cG9ydCBsZXQgdmlld05hbWUgPSBcIlBDQ19OVUlcIjtcbiIsInJlcXVpcmUoJy4vanMvY2xpY2thYmxlLWxvZ28tdG8tYW55LWxpbmsubW9kdWxlLmpzJylcbm1vZHVsZS5leHBvcnRzID0gJ2NsaWNrYWJsZUxvZ29Ub0FueUxpbmsnXG4iLCJhbmd1bGFyXG4gIC5tb2R1bGUoJ2NsaWNrYWJsZUxvZ29Ub0FueUxpbmsnLCBbXSlcbiAgLmNvbnRyb2xsZXIoJ2NsaWNrYWJsZUxvZ29Ub0FueUxpbmtDb250cm9sbGVyJywgWydjbGlja2FibGVMb2dvTGlua0NvbmZpZycsICckc2NvcGUnLCAnJGZpbHRlcicsIGZ1bmN0aW9uKGNsaWNrYWJsZUxvZ29MaW5rQ29uZmlnLCAkc2NvcGUsICRmaWx0ZXIpIHtcbiAgICAkc2NvcGUuY2xpY2thYmxlTG9nb0xpbmsgPSBjbGlja2FibGVMb2dvTGlua0NvbmZpZy51cmw7XG4gICAgJHNjb3BlLmNsaWNrYWJsZUxvZ29BbHQgPSBjbGlja2FibGVMb2dvTGlua0NvbmZpZy5hbHRUZXh0O1xuICAgICRzY29wZS5pY29uTGluayA9IHRoaXMucGFyZW50Q3RybC5pY29uTGlua1xuICAgICRzY29wZS50cmFuc2xhdGUgPSAob3JpZ2luYWwpID0+IHtcbiAgICAgIHJldHVybiBvcmlnaW5hbC5yZXBsYWNlKC9cXHsoLispXFx9L2csIChtYXRjaCwgcDEpID0+ICRmaWx0ZXIoJ3RyYW5zbGF0ZScpKHAxKSk7XG4gICAgfVxuICB9XSlcbiAgLmNvbXBvbmVudCgncHJtTG9nb0FmdGVyJywge1xuICAgIGJpbmRpbmdzOiB7XG4gICAgICBwYXJlbnRDdHJsOiAnPCdcbiAgICB9LFxuICAgIGNvbnRyb2xsZXI6ICdjbGlja2FibGVMb2dvVG9BbnlMaW5rQ29udHJvbGxlcicsXG4gICAgdGVtcGxhdGU6ICc8ZGl2IGNsYXNzPVwicHJvZHVjdC1sb2dvIHByb2R1Y3QtbG9nby1sb2NhbFwiIGxheW91dD1cInJvd1wiIGxheW91dC1hbGlnbj1cInN0YXJ0IGNlbnRlclwiIGxheW91dC1maWxsIGlkPVwiYmFubmVyXCIgdGFiaW5kZXg9XCIwXCIgcm9sZT1cImJhbm5lclwiPicrXG4gICAgICAgICAgICAgICAgJzxhIG5nLWhyZWY9XCJ7eyB0cmFuc2xhdGUoY2xpY2thYmxlTG9nb0xpbmspIH19XCI+PGltZyBjbGFzcz1cImxvZ28taW1hZ2VcIiBuZy1hbHQ9XCJ7eyB0cmFuc2xhdGUoY2xpY2thYmxlTG9nb0FsdCkgfX1cIiBuZy1zcmM9XCJ7eyBpY29uTGluayB9fVwiLz48L2E+JytcbiAgICAgICAgICAgICAgJzwvZGl2PidcblxuICB9KTtcbiIsInJlcXVpcmUoJy4vanMvbGlicmFyeWgzbHAtd2lkZ2V0Lm1vZHVsZS5qcycpXG5tb2R1bGUuZXhwb3J0cyA9ICdsaWJyYXJ5aDNscFdpZGdldCdcbiIsImFuZ3VsYXJcbiAgLy8gTmFtZSBvdXIgbW9kdWxlXG4gIC5tb2R1bGUoJ2xpYnJhcnloM2xwV2lkZ2V0JywgW10pXG4gIC8vIEFkZCB0aGUgbGlicmFyeWgzbHAgdXJsIHRvIHRydXN0ZWQgdXJsIHNvdXJjZXNcbiAgLy8gc28gYW5ndWxhciBkb2Vzbid0IGJsb2NrIGl0IGZyb20gYW4gaWZyYW1lXG4gIC5maWx0ZXIoJ3RydXN0VXJsJywgWyckc2NlJywgZnVuY3Rpb24gKCRzY2UpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24odXJsKSB7XG4gICAgICBpZiAoL15odHRwKHMpPzpcXC9cXC8oLitcXC4pP2xpYnJhcnloM2xwXFwuY29tLiskLy50ZXN0KHVybCkpIHtcbiAgICAgICAgcmV0dXJuICRzY2UudHJ1c3RBc1Jlc291cmNlVXJsKHVybCk7XG4gICAgICB9XG4gICAgfTtcbiAgfV0pXG4gIC8vIENvbnRyb2xsZXIgZm9yIHRoZSBjb21wb25lbnQgYmVsb3dcbiAgLmNvbnRyb2xsZXIoJ2xpYnJhcnloM2xwV2lkZ2V0Q29udHJvbGxlcicsIFsnbGlicmFyeWgzbHBXaWRnZXRDb25maWcnLCAnJHNjb3BlJywgZnVuY3Rpb24obGlicmFyeWgzbHBXaWRnZXRDb25maWcsICRzY29wZSkge1xuICAgIHRoaXMuJG9uSW5pdCA9ICgpID0+IHtcbiAgICAgICRzY29wZS5jb25maWcgPSBsaWJyYXJ5aDNscFdpZGdldENvbmZpZztcbiAgICAgICRzY29wZS5wYXJlbnRDdHJsID0gdGhpcy5wYXJlbnRDdHJsO1xuICAgIH1cbiAgICAvLyBEbyBmYWNldHMgZXhpc3Q/XG4gICAgJHNjb3BlLmZhY2V0c0V4aXN0ID0gKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuICgkc2NvcGUucGFyZW50Q3RybC5zZWFyY2hTZXJ2aWNlLmZhY2V0U2VydmljZS5yZXN1bHRzLmxlbmd0aCA+IDApO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIEFkZCB0aGUgYm90dG9tIHBhZGRpbmcgY2xhc3MgaWYgdGhlcmUgYXJlIGZhY2V0c1xuICAgICRzY29wZS5ib3R0b21QYWRkaW5nID0gKCkgPT4ge1xuICAgICAgaWYgKCRzY29wZS5mYWNldHNFeGlzdCgpKSB7XG4gICAgICAgIHJldHVybiBcImNoYXQtYm90dG9tLXBhZGRpbmdcIjtcbiAgICAgIH1cbiAgICB9XG4gIH1dKVxuICAuY29tcG9uZW50KCdwcm1FeHBsb3JlTWFpbkFmdGVyJywge1xuICAgIGJpbmRpbmdzOiB7XG4gICAgICBwYXJlbnRDdHJsOiAnPCdcbiAgICB9LFxuICAgIGNvbnRyb2xsZXI6ICdsaWJyYXJ5aDNscFdpZGdldENvbnRyb2xsZXInLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidXR0b24gY2hhdC10YWIgc3MtY2hhdCBqcy10b2dnbGUtY2hhdFwiIG5nLWNsYXNzPVwiYm90dG9tUGFkZGluZygpXCIgbmctaW5pdD1cInNob3dDaGF0V2lkZ2V0ID0gZmFsc2VcIiBuZy1jbGljaz1cInNob3dDaGF0V2lkZ2V0ID0gIXNob3dDaGF0V2lkZ2V0XCI+XG4gICAgICAgICAgICAgICAgPHBybS1pY29uIHN0eWxlPVwiei1pbmRleDoxXCIgaWNvbi10eXBlPVwic3ZnXCIgc3ZnLWljb24tc2V0PVwie3tjb25maWcuaWNvbi5zZXR9fVwiIGljb24tZGVmaW5pdGlvbj1cInt7Y29uZmlnLmljb24uaWNvbn19XCI+PC9wcm0taWNvbj5cbiAgICAgICAgICAgICAgICB7e2NvbmZpZy5wcm9tcHR9fVxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNoYXQtZnJhbWUtd3JhcFwiIG5nLWNsYXNzPVwiYm90dG9tUGFkZGluZygpXCIgbmctc2hvdz1cInNob3dDaGF0V2lkZ2V0XCI+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJjaGF0LWNsb3NlIHNzLWljb24ganMtdG9nZ2xlLWNoYXRcIiB0aXRsZT1cIkNsb3NlIGNoYXQgd2luZG93XCIgbmctY2xpY2s9XCJzaG93Q2hhdFdpZGdldCA9ICFzaG93Q2hhdFdpZGdldFwiPiZ0aW1lczs8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8aWZyYW1lIGNsYXNzPVwiY2hhdC1mcmFtZVwiIG5nLXNyYz1cInt7Y29uZmlnLnVybCB8IHRydXN0VXJsfX1cIiBmcmFtZWJvcmRlcj1cIjBcIj48L2lmcmFtZT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIGBcbiAgfSk7XG4iLCJyZXF1aXJlKCcuL2pzL3NlYXJjaC1iYXItc3ViLW1lbnUubW9kdWxlLmpzJylcbm1vZHVsZS5leHBvcnRzID0gJ3NlYXJjaEJhclN1Yk1lbnUnXG4iLCJhbmd1bGFyXG4gIC5tb2R1bGUoJ3NlYXJjaEJhclN1Yk1lbnUnLCBbXSlcbiAgLmNvbnRyb2xsZXIoJ3NlYXJjaEJhclN1Yk1lbnVDb250cm9sbGVyJywgWydzZWFyY2hCYXJTdWJNZW51SXRlbXMnLCAnJHNjb3BlJywgJyRmaWx0ZXInLCBmdW5jdGlvbihpdGVtcywgJHNjb3BlLCAkZmlsdGVyKSB7XG4gICAgdGhpcy4kb25Jbml0ID0gKCkgPT4ge1xuICAgICAgJHNjb3BlLml0ZW1zID0gaXRlbXM7XG4gICAgfVxuICAgICRzY29wZS50cmFuc2xhdGUgPSAob3JpZ2luYWwpID0+IHtcbiAgICAgIHJldHVybiBvcmlnaW5hbC5yZXBsYWNlKC9cXHsoLispXFx9L2csIChtYXRjaCwgcDEpID0+ICRmaWx0ZXIoJ3RyYW5zbGF0ZScpKHAxKSk7XG4gICAgfVxuICAgICRzY29wZS5nb1RvVXJsID0gKHVybCkgPT4ge1xuICAgICAgd2luZG93Lm9wZW4odXJsLCAnX2JsYW5rJyk7XG4gICAgfVxuICB9XSlcbiAgLmNvbXBvbmVudCgnc2VhcmNoQmFyU3ViTWVudScsIHtcbiAgICBjb250cm9sbGVyOiAnc2VhcmNoQmFyU3ViTWVudUNvbnRyb2xsZXInLFxuICAgIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cImxheW91dC1hbGlnbi1lbmQtY2VudGVyIGxheW91dC1yb3cgZmxleCBzZWFyY2gtYmFyLXN1Yi1tZW51XCI+XG4gICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgPGxpIG5nLXJlcGVhdD1cIml0ZW0gaW4gaXRlbXNcIj5cbiAgICAgICAgICAgICAgICAgIDxidXR0b24gZGF0YS1ocmVmPVwie3sgdHJhbnNsYXRlKGl0ZW0uYWN0aW9uKSB9fVwiIGFyaWEtbGFiZWw9XCJ7eyB0cmFuc2xhdGUoaXRlbS5kZXNjcmlwdGlvbikgfX1cIiBuZy1jbGljaz1cImdvVG9VcmwodHJhbnNsYXRlKGl0ZW0uYWN0aW9uKSlcIiBjbGFzcz1cImJ1dHRvbi13aXRoLWljb24gemVyby1tYXJnaW4gbWQtYnV0dG9uIG1kLXNtYWxsIHt7aXRlbS5jc3NDbGFzc2VzfX1cIiB0eXBlPVwiYnV0dG9uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxtZC10b29sdGlwIG1kLWRpcmVjdGlvbj1cImJvdHRvbVwiIG1kLWRlbGF5PVwiNTAwXCI+e3sgdHJhbnNsYXRlKGl0ZW0uZGVzY3JpcHRpb24pIH19PC9tZC10b29sdGlwPjxwcm0taWNvbiBzdHlsZT1cInotaW5kZXg6MVwiIGljb24tdHlwZT1cInN2Z1wiIHN2Zy1pY29uLXNldD1cInt7aXRlbS5pY29uLnNldH19XCIgaWNvbi1kZWZpbml0aW9uPVwie3tpdGVtLmljb24uaWNvbn19XCI+PC9wcm0taWNvbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzZWFyY2gtYmFyLXN1Yi1tZW51LWl0ZW1cIiBuZy1jbGFzcz1cIihpdGVtLnNob3dfeHMpID8gJycgOiAnaGlkZS14cydcIj57eyB0cmFuc2xhdGUoaXRlbS5uYW1lKSB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICA8L2Rpdj5gXG5cbiAgfSk7XG4iLCIndXNlIHN0cmljdCc7XG5cbmFuZ3VsYXIubW9kdWxlKCd0b2dnbGVJbnN0aXR1dGlvbnMnLCBbXSk7XG5cbmFuZ3VsYXIubW9kdWxlKCd0b2dnbGVJbnN0aXR1dGlvbnMnKS5jb21wb25lbnQoJ3RvZ2dsZUluc3RpdHV0aW9ucycsIHtcbiAgYmluZGluZ3M6IHtcbiAgICBzdGFydEhpZGRlbjogJzwnXG4gIH0sXG4gIHRlbXBsYXRlOiAnXFxuICAgIDxtZC1idXR0b24gY2xhc3M9XCJtZC1yYWlzZWRcIiBuZy1jbGljaz1cIiRjdHJsLnRvZ2dsZUxpYnMoKVwiIGlkPVwic3VtbWl0QnV0dG9uXCIgYXJpYS1jb250cm9scz1cInN1bW1pdExpbmtzXCIgYXJpYS1leHBhbmRlZD1mYWxzZSBhcmlhLWxhYmVsPVwiU2hvdy9IaWRlIFN1bW1pdCBMaWJyYXJpZXNcIj5cXG4gICAgICAgIHt7JGN0cmwuc2hvd0xpYnMgPyBcXCdIaWRlIFN1bW1pdCBMaWJyYXJpZXNcXCcgOiBcXCdTaG93IFN1bW1pdCBMaWJyYXJpZXNcXCd9fVxcbiAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPXRydWU+e3skY3RybC5zaG93TGlicyA/IFxcJyZsYXF1bztcXCcgOiBcXCcmcmFxdW87XFwnfX08L3NwYW4+XFxuICAgIDwvbWQtYnV0dG9uPicsXG4gIGNvbnRyb2xsZXI6IGZ1bmN0aW9uIGNvbnRyb2xsZXIoKSB7XG4gICAgdGhpcy4kb25Jbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy5zaG93TGlicyA9IHRoaXMuc3RhcnRIaWRkZW4gPT09IGZhbHNlID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgdGhpcy5idXR0b24gPSBhbmd1bGFyLmVsZW1lbnQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcigncHJtLWFsbWEtbW9yZS1pbnN0LWFmdGVyIGJ1dHRvbicpKTtcbiAgICAgIHRoaXMudGFicyA9IGFuZ3VsYXIuZWxlbWVudChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdwcm0tYWxtYS1tb3JlLWluc3QgbWQtdGFicycpKTtcbiAgICAgIHRoaXMudGFicy5hdHRyKCdpZCcsICdzdW1taXRMaW5rcycpO1xuICAgICAgdGhpcy5idXR0b24ucGFyZW50KCkuYWZ0ZXIodGhpcy50YWJzKTtcbiAgICAgIGlmICghdGhpcy5zaG93TGlicykgdGhpcy50YWJzLmFkZENsYXNzKCdoaWRlJyk7XG4gICAgfTtcbiAgICB0aGlzLnRvZ2dsZUxpYnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB0aGlzLnNob3dMaWJzID0gIXRoaXMuc2hvd0xpYnM7XG4gICAgICB0aGlzLnRhYnMuaGFzQ2xhc3MoJ2hpZGUnKSA/IHRoaXMudGFicy5yZW1vdmVDbGFzcygnaGlkZScpICYmIHRoaXMuYnV0dG9uLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLCB0cnVlKSA6IHRoaXMudGFicy5hZGRDbGFzcygnaGlkZScpICYmIHRoaXMuYnV0dG9uLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLCBmYWxzZSk7XG4gICAgfTtcbiAgfVxufSk7IiwicmVxdWlyZSgnLi9kaXN0L21vZHVsZS5qcycpXG5tb2R1bGUuZXhwb3J0cyA9ICd0b2dnbGVJbnN0aXR1dGlvbnMnXG4iXX0=
