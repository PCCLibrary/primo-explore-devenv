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

require('primo-explore-report-problem');

var _viewName = require('./viewName');

var _clickableLogoToAnyLink = require('./clickableLogoToAnyLink');

var _libraryh3lpWidget = require('./libraryh3lpWidget');

var _searchBarSubMenu = require('./searchBarSubMenu');

var app = angular.module('viewCustom', ['clickableLogoToAnyLink', 'libraryh3lpWidget', 'searchBarSubMenu', 'toggleInstitutions', 'reportProblem']);

app.constant(_clickableLogoToAnyLink.clickableLogoLinkConfig.name, _clickableLogoToAnyLink.clickableLogoLinkConfig.config).constant(_libraryh3lpWidget.libraryh3lpWidgetConfig.name, _libraryh3lpWidget.libraryh3lpWidgetConfig.config).constant(_searchBarSubMenu.searchBarSubMenuItemsConfig.name, _searchBarSubMenu.searchBarSubMenuItemsConfig.config).value('customNoSearchResultsTemplateUrl', 'custom/' + _viewName.viewName + '/html/noSearchResults.html').component('prmSearchBarAfter', {
  template: '<search-bar-sub-menu></search-bar-sub-menu>'
}).component('prmAlmaMoreInstAfter', { template: '<toggle-institutions />' }).component('prmActionListAfter', { template: '<oca-report-problem report-url="https://docs.google.com/forms/d/e/1FAIpQLSeWpIktFnYNDZqeN2O_EODmVtkis0hoaRMXhqVcBeXTVIsiag/viewform?" message-text="Want to report a problem?" button-text="Submit report" />' });

},{"./clickableLogoToAnyLink":1,"./libraryh3lpWidget":2,"./searchBarSubMenu":4,"./viewName":5,"primo-explore-clickable-logo-to-any-link":6,"primo-explore-libraryh3lp-widget":8,"primo-explore-report-problem":10,"primo-explore-search-bar-sub-menu":11,"primo-explore-toggle-institutions":14}],4:[function(require,module,exports){
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
'use strict';

angular.module('reportProblem', []);

angular.module('reportProblem').component('ocaReportProblem', {
  bindings: {
    messageText: '@',
    buttonText: '@',
    reportUrl: '@'
  },
  template: '\n      <div ng-if="$ctrl.show" class="bar filter-bar layout-align-center-center layout-row margin-top-medium" layout="row" layout-align="center center">\n          <span class="margin-right-small">{{$ctrl.messageText}}</span>\n          <a ng-href="{{$ctrl.targetUrl}}" target="_blank">\n              <button class="button-with-icon zero-margin md-button md-button-raised md-primoExplore-theme" type="button" aria-label="Report a Problem" style="color: #5c92bd;">\n                  <prm-icon icon-type="svg" svg-icon-set="action" icon-definition="ic_report_problem_24px"></prm-icon>\n                  <span style="text-transform: none;">{{$ctrl.buttonText}}</span>\n              </button>\n          </a>\n      </div>',
  controller: ['$location', '$httpParamSerializer', function ($location, $httpParamSerializer) {
    this.messageText = this.messageText || 'See something that doesn\'t look right?';
    this.buttonText = this.buttonText || 'Report a Problem';
    this.showLocations = ['/fulldisplay', '/openurl'];
    this.$onInit = function () {
      this.targetUrl = this.reportUrl + $httpParamSerializer($location.search());
      this.show = this.showLocations.includes($location.path());
    };
  }]
});
},{}],11:[function(require,module,exports){
require('./js/search-bar-sub-menu.module.js')
module.exports = 'searchBarSubMenu'

},{"./js/search-bar-sub-menu.module.js":12}],12:[function(require,module,exports){
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

},{}],13:[function(require,module,exports){
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
},{}],14:[function(require,module,exports){
require('./dist/module.js')
module.exports = 'toggleInstitutions'

},{"./dist/module.js":13}]},{},[3])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJwcmltby1leHBsb3JlL2N1c3RvbS9QQ0NfTlVJL2pzL2NsaWNrYWJsZUxvZ29Ub0FueUxpbmsuanMiLCJwcmltby1leHBsb3JlL2N1c3RvbS9QQ0NfTlVJL2pzL2xpYnJhcnloM2xwV2lkZ2V0LmpzIiwicHJpbW8tZXhwbG9yZS9jdXN0b20vUENDX05VSS9qcy9tYWluLmpzIiwicHJpbW8tZXhwbG9yZS9jdXN0b20vUENDX05VSS9qcy9zZWFyY2hCYXJTdWJNZW51LmpzIiwicHJpbW8tZXhwbG9yZS9jdXN0b20vUENDX05VSS9qcy92aWV3TmFtZS5qcyIsInByaW1vLWV4cGxvcmUvY3VzdG9tL1BDQ19OVUkvbm9kZV9tb2R1bGVzL3ByaW1vLWV4cGxvcmUtY2xpY2thYmxlLWxvZ28tdG8tYW55LWxpbmsvaW5kZXguanMiLCJwcmltby1leHBsb3JlL2N1c3RvbS9QQ0NfTlVJL25vZGVfbW9kdWxlcy9wcmltby1leHBsb3JlLWNsaWNrYWJsZS1sb2dvLXRvLWFueS1saW5rL2pzL2NsaWNrYWJsZS1sb2dvLXRvLWFueS1saW5rLm1vZHVsZS5qcyIsInByaW1vLWV4cGxvcmUvY3VzdG9tL1BDQ19OVUkvbm9kZV9tb2R1bGVzL3ByaW1vLWV4cGxvcmUtbGlicmFyeWgzbHAtd2lkZ2V0L2luZGV4LmpzIiwicHJpbW8tZXhwbG9yZS9jdXN0b20vUENDX05VSS9ub2RlX21vZHVsZXMvcHJpbW8tZXhwbG9yZS1saWJyYXJ5aDNscC13aWRnZXQvanMvbGlicmFyeWgzbHAtd2lkZ2V0Lm1vZHVsZS5qcyIsInByaW1vLWV4cGxvcmUvY3VzdG9tL1BDQ19OVUkvbm9kZV9tb2R1bGVzL3ByaW1vLWV4cGxvcmUtcmVwb3J0LXByb2JsZW0vZGlzdC9tb2R1bGUuanMiLCJwcmltby1leHBsb3JlL2N1c3RvbS9QQ0NfTlVJL25vZGVfbW9kdWxlcy9wcmltby1leHBsb3JlLXNlYXJjaC1iYXItc3ViLW1lbnUvaW5kZXguanMiLCJwcmltby1leHBsb3JlL2N1c3RvbS9QQ0NfTlVJL25vZGVfbW9kdWxlcy9wcmltby1leHBsb3JlLXNlYXJjaC1iYXItc3ViLW1lbnUvanMvc2VhcmNoLWJhci1zdWItbWVudS5tb2R1bGUuanMiLCJwcmltby1leHBsb3JlL2N1c3RvbS9QQ0NfTlVJL25vZGVfbW9kdWxlcy9wcmltby1leHBsb3JlLXRvZ2dsZS1pbnN0aXR1dGlvbnMvZGlzdC9tb2R1bGUuanMiLCJwcmltby1leHBsb3JlL2N1c3RvbS9QQ0NfTlVJL25vZGVfbW9kdWxlcy9wcmltby1leHBsb3JlLXRvZ2dsZS1pbnN0aXR1dGlvbnMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQ0FPLElBQUksNERBQTBCO0FBQ25DLFFBQU0seUJBRDZCO0FBRW5DLFVBQVE7QUFDTixTQUFLLDRDQURDO0FBRU4sYUFBUztBQUZIO0FBRjJCLENBQTlCOzs7Ozs7OztBQ0FBLElBQUksNERBQTBCO0FBQ25DLFFBQU0seUJBRDZCO0FBRW5DLFVBQVE7QUFDTixTQUFLLHFIQURDO0FBRU4sWUFBUSxjQUZGO0FBR04sVUFBTTtBQUNKLFdBQUssZUFERDtBQUVKLFlBQU07QUFGRjtBQUhBO0FBRjJCLENBQTlCOzs7OztBQ0FQOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUVBLElBQUksTUFBTSxRQUFRLE1BQVIsQ0FBZSxZQUFmLEVBQTZCLENBQ0Msd0JBREQsRUFFQyxtQkFGRCxFQUdDLGtCQUhELEVBSUMsb0JBSkQsRUFLQyxlQUxELENBQTdCLENBQVY7O0FBUUEsSUFDRyxRQURILENBQ1ksZ0RBQXdCLElBRHBDLEVBQzBDLGdEQUF3QixNQURsRSxFQUVHLFFBRkgsQ0FFWSwyQ0FBd0IsSUFGcEMsRUFFMEMsMkNBQXdCLE1BRmxFLEVBR0csUUFISCxDQUdZLDhDQUE0QixJQUh4QyxFQUc4Qyw4Q0FBNEIsTUFIMUUsRUFJRyxLQUpILENBSVMsa0NBSlQsRUFJNkMsaUNBQW1CLDRCQUpoRSxFQUtHLFNBTEgsQ0FLYSxtQkFMYixFQUtrQztBQUM5QixZQUFVO0FBRG9CLENBTGxDLEVBUUcsU0FSSCxDQVFhLHNCQVJiLEVBUXFDLEVBQUMsVUFBVSx5QkFBWCxFQVJyQyxFQVNHLFNBVEgsQ0FTYSxvQkFUYixFQVNtQyxFQUFFLFVBQy9CLCtNQUQ2QixFQVRuQzs7Ozs7Ozs7QUNuQk8sSUFBSSxvRUFBOEI7QUFDdkMsUUFBTSx1QkFEaUM7QUFFdkMsVUFBUSxDQUNOO0FBQ0UsVUFBTSxrQkFEUjtBQUVFLGlCQUFhLGtCQUZmO0FBR0UsWUFBUSxzR0FIVjtBQUlFLFVBQU07QUFDSixXQUFLLGVBREQ7QUFFSixZQUFNO0FBRkY7QUFKUixHQURNO0FBRitCLENBQWxDOzs7Ozs7OztBQ0FQO0FBQ08sSUFBSSw4QkFBVyxTQUFmOzs7QUNEUDtBQUNBO0FBQ0E7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BCQTtBQUNBO0FBQ0E7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BCQTtBQUNBO0FBQ0E7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2QkE7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc31yZXR1cm4gZX0pKCkiLCJleHBvcnQgbGV0IGNsaWNrYWJsZUxvZ29MaW5rQ29uZmlnID0ge1xuICBuYW1lOiAnY2xpY2thYmxlTG9nb0xpbmtDb25maWcnLFxuICBjb25maWc6IHtcbiAgICB1cmw6ICdodHRwczovL3NoYW5naGFpLm55dS5lZHUvYWNhZGVtaWNzL2xpYnJhcnknLFxuICAgIGFsdFRleHQ6ICdOWVUgU2hhbmdoYWkgTGlicmFyeSdcbiAgfVxufTtcbiIsImV4cG9ydCBsZXQgbGlicmFyeWgzbHBXaWRnZXRDb25maWcgPSB7XG4gIG5hbWU6ICdsaWJyYXJ5aDNscFdpZGdldENvbmZpZycsXG4gIGNvbmZpZzoge1xuICAgIHVybDogJy8vbGlicmFyeWgzbHAuY29tL2NoYXQvcGNjLWFzay1hLWxpYnJhcmlhbkBjaGF0LmxpYnJhcnloM2xwLmNvbT9za2luPTIwODcyJnRpdGxlPUNoYXQrV2l0aCtBK0xpYnJhcmlhbiZpZGVudGl0eT1QQ0MnLFxuICAgIHByb21wdDogJ0NoYXQgd2l0aCB1cycsXG4gICAgaWNvbjoge1xuICAgICAgc2V0OiAnY29tbXVuaWNhdGlvbicsXG4gICAgICBpY29uOiAnaWNfY2hhdF8yNHB4J1xuICAgIH1cbiAgfVxufTtcbiIsImltcG9ydCAncHJpbW8tZXhwbG9yZS1jbGlja2FibGUtbG9nby10by1hbnktbGluayc7XG5pbXBvcnQgJ3ByaW1vLWV4cGxvcmUtbGlicmFyeWgzbHAtd2lkZ2V0JztcbmltcG9ydCAncHJpbW8tZXhwbG9yZS1zZWFyY2gtYmFyLXN1Yi1tZW51JztcbmltcG9ydCAncHJpbW8tZXhwbG9yZS10b2dnbGUtaW5zdGl0dXRpb25zJztcbmltcG9ydCAncHJpbW8tZXhwbG9yZS1yZXBvcnQtcHJvYmxlbSc7XG5cbmltcG9ydCB7IHZpZXdOYW1lIH0gZnJvbSAnLi92aWV3TmFtZSc7XG5pbXBvcnQgeyBjbGlja2FibGVMb2dvTGlua0NvbmZpZyB9IGZyb20gJy4vY2xpY2thYmxlTG9nb1RvQW55TGluayc7XG5pbXBvcnQgeyBsaWJyYXJ5aDNscFdpZGdldENvbmZpZyB9IGZyb20gJy4vbGlicmFyeWgzbHBXaWRnZXQnO1xuaW1wb3J0IHsgc2VhcmNoQmFyU3ViTWVudUl0ZW1zQ29uZmlnIH0gZnJvbSAnLi9zZWFyY2hCYXJTdWJNZW51JztcblxubGV0IGFwcCA9IGFuZ3VsYXIubW9kdWxlKCd2aWV3Q3VzdG9tJywgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjbGlja2FibGVMb2dvVG9BbnlMaW5rJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnbGlicmFyeWgzbHBXaWRnZXQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdzZWFyY2hCYXJTdWJNZW51JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndG9nZ2xlSW5zdGl0dXRpb25zJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAncmVwb3J0UHJvYmxlbSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSk7XG5cbmFwcFxuICAuY29uc3RhbnQoY2xpY2thYmxlTG9nb0xpbmtDb25maWcubmFtZSwgY2xpY2thYmxlTG9nb0xpbmtDb25maWcuY29uZmlnKVxuICAuY29uc3RhbnQobGlicmFyeWgzbHBXaWRnZXRDb25maWcubmFtZSwgbGlicmFyeWgzbHBXaWRnZXRDb25maWcuY29uZmlnKVxuICAuY29uc3RhbnQoc2VhcmNoQmFyU3ViTWVudUl0ZW1zQ29uZmlnLm5hbWUsIHNlYXJjaEJhclN1Yk1lbnVJdGVtc0NvbmZpZy5jb25maWcpXG4gIC52YWx1ZSgnY3VzdG9tTm9TZWFyY2hSZXN1bHRzVGVtcGxhdGVVcmwnLCAnY3VzdG9tLycrdmlld05hbWUrJy9odG1sL25vU2VhcmNoUmVzdWx0cy5odG1sJylcbiAgLmNvbXBvbmVudCgncHJtU2VhcmNoQmFyQWZ0ZXInLCB7XG4gICAgdGVtcGxhdGU6ICc8c2VhcmNoLWJhci1zdWItbWVudT48L3NlYXJjaC1iYXItc3ViLW1lbnU+J1xuICB9KVxuICAuY29tcG9uZW50KCdwcm1BbG1hTW9yZUluc3RBZnRlcicsIHt0ZW1wbGF0ZTogJzx0b2dnbGUtaW5zdGl0dXRpb25zIC8+J30pXG4gIC5jb21wb25lbnQoJ3BybUFjdGlvbkxpc3RBZnRlcicsIHsgdGVtcGxhdGU6XG4gICAgICAnPG9jYS1yZXBvcnQtcHJvYmxlbSByZXBvcnQtdXJsPVwiaHR0cHM6Ly9kb2NzLmdvb2dsZS5jb20vZm9ybXMvZC9lLzFGQUlwUUxTZVdwSWt0Rm5ZTkRacWVOMk9fRU9EbVZ0a2lzMGhvYVJNWGhxVmNCZVhUVklzaWFnL3ZpZXdmb3JtP1wiIG1lc3NhZ2UtdGV4dD1cIldhbnQgdG8gcmVwb3J0IGEgcHJvYmxlbT9cIiBidXR0b24tdGV4dD1cIlN1Ym1pdCByZXBvcnRcIiAvPicgfVxuICAgICAgKVxuXG5cbiIsImV4cG9ydCBsZXQgc2VhcmNoQmFyU3ViTWVudUl0ZW1zQ29uZmlnID0ge1xuICBuYW1lOiAnc2VhcmNoQmFyU3ViTWVudUl0ZW1zJyxcbiAgY29uZmlnOiBbXG4gICAge1xuICAgICAgbmFtZTogXCJQcm92aWRlIEZlZWRiYWNrXCIsXG4gICAgICBkZXNjcmlwdGlvbjogXCJQcm92aWRlIEZlZWRiYWNrXCIsXG4gICAgICBhY3Rpb246IFwiaHR0cHM6Ly9kb2NzLmdvb2dsZS5jb20vZm9ybXMvZC9lLzFGQUlwUUxTZVdwSWt0Rm5ZTkRacWVOMk9fRU9EbVZ0a2lzMGhvYVJNWGhxVmNCZVhUVklzaWFnL3ZpZXdmb3JtP1wiLFxuICAgICAgaWNvbjoge1xuICAgICAgICBzZXQ6ICdjb21tdW5pY2F0aW9uJyxcbiAgICAgICAgaWNvbjogJ2ljX2ZvcnVtXzI0cHgnXG4gICAgICB9XG4gICAgfVxuICBdXG59O1xuIiwiLy8gdmlkXG5leHBvcnQgbGV0IHZpZXdOYW1lID0gXCJQQ0NfTlVJXCI7XG4iLCJyZXF1aXJlKCcuL2pzL2NsaWNrYWJsZS1sb2dvLXRvLWFueS1saW5rLm1vZHVsZS5qcycpXG5tb2R1bGUuZXhwb3J0cyA9ICdjbGlja2FibGVMb2dvVG9BbnlMaW5rJ1xuIiwiYW5ndWxhclxuICAubW9kdWxlKCdjbGlja2FibGVMb2dvVG9BbnlMaW5rJywgW10pXG4gIC5jb250cm9sbGVyKCdjbGlja2FibGVMb2dvVG9BbnlMaW5rQ29udHJvbGxlcicsIFsnY2xpY2thYmxlTG9nb0xpbmtDb25maWcnLCAnJHNjb3BlJywgJyRmaWx0ZXInLCBmdW5jdGlvbihjbGlja2FibGVMb2dvTGlua0NvbmZpZywgJHNjb3BlLCAkZmlsdGVyKSB7XG4gICAgJHNjb3BlLmNsaWNrYWJsZUxvZ29MaW5rID0gY2xpY2thYmxlTG9nb0xpbmtDb25maWcudXJsO1xuICAgICRzY29wZS5jbGlja2FibGVMb2dvQWx0ID0gY2xpY2thYmxlTG9nb0xpbmtDb25maWcuYWx0VGV4dDtcbiAgICAkc2NvcGUuaWNvbkxpbmsgPSB0aGlzLnBhcmVudEN0cmwuaWNvbkxpbmtcbiAgICAkc2NvcGUudHJhbnNsYXRlID0gKG9yaWdpbmFsKSA9PiB7XG4gICAgICByZXR1cm4gb3JpZ2luYWwucmVwbGFjZSgvXFx7KC4rKVxcfS9nLCAobWF0Y2gsIHAxKSA9PiAkZmlsdGVyKCd0cmFuc2xhdGUnKShwMSkpO1xuICAgIH1cbiAgfV0pXG4gIC5jb21wb25lbnQoJ3BybUxvZ29BZnRlcicsIHtcbiAgICBiaW5kaW5nczoge1xuICAgICAgcGFyZW50Q3RybDogJzwnXG4gICAgfSxcbiAgICBjb250cm9sbGVyOiAnY2xpY2thYmxlTG9nb1RvQW55TGlua0NvbnRyb2xsZXInLFxuICAgIHRlbXBsYXRlOiAnPGRpdiBjbGFzcz1cInByb2R1Y3QtbG9nbyBwcm9kdWN0LWxvZ28tbG9jYWxcIiBsYXlvdXQ9XCJyb3dcIiBsYXlvdXQtYWxpZ249XCJzdGFydCBjZW50ZXJcIiBsYXlvdXQtZmlsbCBpZD1cImJhbm5lclwiIHRhYmluZGV4PVwiMFwiIHJvbGU9XCJiYW5uZXJcIj4nK1xuICAgICAgICAgICAgICAgICc8YSBuZy1ocmVmPVwie3sgdHJhbnNsYXRlKGNsaWNrYWJsZUxvZ29MaW5rKSB9fVwiPjxpbWcgY2xhc3M9XCJsb2dvLWltYWdlXCIgbmctYWx0PVwie3sgdHJhbnNsYXRlKGNsaWNrYWJsZUxvZ29BbHQpIH19XCIgbmctc3JjPVwie3sgaWNvbkxpbmsgfX1cIi8+PC9hPicrXG4gICAgICAgICAgICAgICc8L2Rpdj4nXG5cbiAgfSk7XG4iLCJyZXF1aXJlKCcuL2pzL2xpYnJhcnloM2xwLXdpZGdldC5tb2R1bGUuanMnKVxubW9kdWxlLmV4cG9ydHMgPSAnbGlicmFyeWgzbHBXaWRnZXQnXG4iLCJhbmd1bGFyXG4gIC8vIE5hbWUgb3VyIG1vZHVsZVxuICAubW9kdWxlKCdsaWJyYXJ5aDNscFdpZGdldCcsIFtdKVxuICAvLyBBZGQgdGhlIGxpYnJhcnloM2xwIHVybCB0byB0cnVzdGVkIHVybCBzb3VyY2VzXG4gIC8vIHNvIGFuZ3VsYXIgZG9lc24ndCBibG9jayBpdCBmcm9tIGFuIGlmcmFtZVxuICAuZmlsdGVyKCd0cnVzdFVybCcsIFsnJHNjZScsIGZ1bmN0aW9uICgkc2NlKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKHVybCkge1xuICAgICAgaWYgKC9eaHR0cChzKT86XFwvXFwvKC4rXFwuKT9saWJyYXJ5aDNscFxcLmNvbS4rJC8udGVzdCh1cmwpKSB7XG4gICAgICAgIHJldHVybiAkc2NlLnRydXN0QXNSZXNvdXJjZVVybCh1cmwpO1xuICAgICAgfVxuICAgIH07XG4gIH1dKVxuICAvLyBDb250cm9sbGVyIGZvciB0aGUgY29tcG9uZW50IGJlbG93XG4gIC5jb250cm9sbGVyKCdsaWJyYXJ5aDNscFdpZGdldENvbnRyb2xsZXInLCBbJ2xpYnJhcnloM2xwV2lkZ2V0Q29uZmlnJywgJyRzY29wZScsIGZ1bmN0aW9uKGxpYnJhcnloM2xwV2lkZ2V0Q29uZmlnLCAkc2NvcGUpIHtcbiAgICB0aGlzLiRvbkluaXQgPSAoKSA9PiB7XG4gICAgICAkc2NvcGUuY29uZmlnID0gbGlicmFyeWgzbHBXaWRnZXRDb25maWc7XG4gICAgICAkc2NvcGUucGFyZW50Q3RybCA9IHRoaXMucGFyZW50Q3RybDtcbiAgICB9XG4gICAgLy8gRG8gZmFjZXRzIGV4aXN0P1xuICAgICRzY29wZS5mYWNldHNFeGlzdCA9ICgpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiAoJHNjb3BlLnBhcmVudEN0cmwuc2VhcmNoU2VydmljZS5mYWNldFNlcnZpY2UucmVzdWx0cy5sZW5ndGggPiAwKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBBZGQgdGhlIGJvdHRvbSBwYWRkaW5nIGNsYXNzIGlmIHRoZXJlIGFyZSBmYWNldHNcbiAgICAkc2NvcGUuYm90dG9tUGFkZGluZyA9ICgpID0+IHtcbiAgICAgIGlmICgkc2NvcGUuZmFjZXRzRXhpc3QoKSkge1xuICAgICAgICByZXR1cm4gXCJjaGF0LWJvdHRvbS1wYWRkaW5nXCI7XG4gICAgICB9XG4gICAgfVxuICB9XSlcbiAgLmNvbXBvbmVudCgncHJtRXhwbG9yZU1haW5BZnRlcicsIHtcbiAgICBiaW5kaW5nczoge1xuICAgICAgcGFyZW50Q3RybDogJzwnXG4gICAgfSxcbiAgICBjb250cm9sbGVyOiAnbGlicmFyeWgzbHBXaWRnZXRDb250cm9sbGVyJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnV0dG9uIGNoYXQtdGFiIHNzLWNoYXQganMtdG9nZ2xlLWNoYXRcIiBuZy1jbGFzcz1cImJvdHRvbVBhZGRpbmcoKVwiIG5nLWluaXQ9XCJzaG93Q2hhdFdpZGdldCA9IGZhbHNlXCIgbmctY2xpY2s9XCJzaG93Q2hhdFdpZGdldCA9ICFzaG93Q2hhdFdpZGdldFwiPlxuICAgICAgICAgICAgICAgIDxwcm0taWNvbiBzdHlsZT1cInotaW5kZXg6MVwiIGljb24tdHlwZT1cInN2Z1wiIHN2Zy1pY29uLXNldD1cInt7Y29uZmlnLmljb24uc2V0fX1cIiBpY29uLWRlZmluaXRpb249XCJ7e2NvbmZpZy5pY29uLmljb259fVwiPjwvcHJtLWljb24+XG4gICAgICAgICAgICAgICAge3tjb25maWcucHJvbXB0fX1cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjaGF0LWZyYW1lLXdyYXBcIiBuZy1jbGFzcz1cImJvdHRvbVBhZGRpbmcoKVwiIG5nLXNob3c9XCJzaG93Q2hhdFdpZGdldFwiPlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiY2hhdC1jbG9zZSBzcy1pY29uIGpzLXRvZ2dsZS1jaGF0XCIgdGl0bGU9XCJDbG9zZSBjaGF0IHdpbmRvd1wiIG5nLWNsaWNrPVwic2hvd0NoYXRXaWRnZXQgPSAhc2hvd0NoYXRXaWRnZXRcIj4mdGltZXM7PC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGlmcmFtZSBjbGFzcz1cImNoYXQtZnJhbWVcIiBuZy1zcmM9XCJ7e2NvbmZpZy51cmwgfCB0cnVzdFVybH19XCIgZnJhbWVib3JkZXI9XCIwXCI+PC9pZnJhbWU+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICBgXG4gIH0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5hbmd1bGFyLm1vZHVsZSgncmVwb3J0UHJvYmxlbScsIFtdKTtcblxuYW5ndWxhci5tb2R1bGUoJ3JlcG9ydFByb2JsZW0nKS5jb21wb25lbnQoJ29jYVJlcG9ydFByb2JsZW0nLCB7XG4gIGJpbmRpbmdzOiB7XG4gICAgbWVzc2FnZVRleHQ6ICdAJyxcbiAgICBidXR0b25UZXh0OiAnQCcsXG4gICAgcmVwb3J0VXJsOiAnQCdcbiAgfSxcbiAgdGVtcGxhdGU6ICdcXG4gICAgICA8ZGl2IG5nLWlmPVwiJGN0cmwuc2hvd1wiIGNsYXNzPVwiYmFyIGZpbHRlci1iYXIgbGF5b3V0LWFsaWduLWNlbnRlci1jZW50ZXIgbGF5b3V0LXJvdyBtYXJnaW4tdG9wLW1lZGl1bVwiIGxheW91dD1cInJvd1wiIGxheW91dC1hbGlnbj1cImNlbnRlciBjZW50ZXJcIj5cXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXJnaW4tcmlnaHQtc21hbGxcIj57eyRjdHJsLm1lc3NhZ2VUZXh0fX08L3NwYW4+XFxuICAgICAgICAgIDxhIG5nLWhyZWY9XCJ7eyRjdHJsLnRhcmdldFVybH19XCIgdGFyZ2V0PVwiX2JsYW5rXCI+XFxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnV0dG9uLXdpdGgtaWNvbiB6ZXJvLW1hcmdpbiBtZC1idXR0b24gbWQtYnV0dG9uLXJhaXNlZCBtZC1wcmltb0V4cGxvcmUtdGhlbWVcIiB0eXBlPVwiYnV0dG9uXCIgYXJpYS1sYWJlbD1cIlJlcG9ydCBhIFByb2JsZW1cIiBzdHlsZT1cImNvbG9yOiAjNWM5MmJkO1wiPlxcbiAgICAgICAgICAgICAgICAgIDxwcm0taWNvbiBpY29uLXR5cGU9XCJzdmdcIiBzdmctaWNvbi1zZXQ9XCJhY3Rpb25cIiBpY29uLWRlZmluaXRpb249XCJpY19yZXBvcnRfcHJvYmxlbV8yNHB4XCI+PC9wcm0taWNvbj5cXG4gICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT1cInRleHQtdHJhbnNmb3JtOiBub25lO1wiPnt7JGN0cmwuYnV0dG9uVGV4dH19PC9zcGFuPlxcbiAgICAgICAgICAgICAgPC9idXR0b24+XFxuICAgICAgICAgIDwvYT5cXG4gICAgICA8L2Rpdj4nLFxuICBjb250cm9sbGVyOiBbJyRsb2NhdGlvbicsICckaHR0cFBhcmFtU2VyaWFsaXplcicsIGZ1bmN0aW9uICgkbG9jYXRpb24sICRodHRwUGFyYW1TZXJpYWxpemVyKSB7XG4gICAgdGhpcy5tZXNzYWdlVGV4dCA9IHRoaXMubWVzc2FnZVRleHQgfHwgJ1NlZSBzb21ldGhpbmcgdGhhdCBkb2VzblxcJ3QgbG9vayByaWdodD8nO1xuICAgIHRoaXMuYnV0dG9uVGV4dCA9IHRoaXMuYnV0dG9uVGV4dCB8fCAnUmVwb3J0IGEgUHJvYmxlbSc7XG4gICAgdGhpcy5zaG93TG9jYXRpb25zID0gWycvZnVsbGRpc3BsYXknLCAnL29wZW51cmwnXTtcbiAgICB0aGlzLiRvbkluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB0aGlzLnRhcmdldFVybCA9IHRoaXMucmVwb3J0VXJsICsgJGh0dHBQYXJhbVNlcmlhbGl6ZXIoJGxvY2F0aW9uLnNlYXJjaCgpKTtcbiAgICAgIHRoaXMuc2hvdyA9IHRoaXMuc2hvd0xvY2F0aW9ucy5pbmNsdWRlcygkbG9jYXRpb24ucGF0aCgpKTtcbiAgICB9O1xuICB9XVxufSk7IiwicmVxdWlyZSgnLi9qcy9zZWFyY2gtYmFyLXN1Yi1tZW51Lm1vZHVsZS5qcycpXG5tb2R1bGUuZXhwb3J0cyA9ICdzZWFyY2hCYXJTdWJNZW51J1xuIiwiYW5ndWxhclxuICAubW9kdWxlKCdzZWFyY2hCYXJTdWJNZW51JywgW10pXG4gIC5jb250cm9sbGVyKCdzZWFyY2hCYXJTdWJNZW51Q29udHJvbGxlcicsIFsnc2VhcmNoQmFyU3ViTWVudUl0ZW1zJywgJyRzY29wZScsICckZmlsdGVyJywgZnVuY3Rpb24oaXRlbXMsICRzY29wZSwgJGZpbHRlcikge1xuICAgIHRoaXMuJG9uSW5pdCA9ICgpID0+IHtcbiAgICAgICRzY29wZS5pdGVtcyA9IGl0ZW1zO1xuICAgIH1cbiAgICAkc2NvcGUudHJhbnNsYXRlID0gKG9yaWdpbmFsKSA9PiB7XG4gICAgICByZXR1cm4gb3JpZ2luYWwucmVwbGFjZSgvXFx7KC4rKVxcfS9nLCAobWF0Y2gsIHAxKSA9PiAkZmlsdGVyKCd0cmFuc2xhdGUnKShwMSkpO1xuICAgIH1cbiAgICAkc2NvcGUuZ29Ub1VybCA9ICh1cmwpID0+IHtcbiAgICAgIHdpbmRvdy5vcGVuKHVybCwgJ19ibGFuaycpO1xuICAgIH1cbiAgfV0pXG4gIC5jb21wb25lbnQoJ3NlYXJjaEJhclN1Yk1lbnUnLCB7XG4gICAgY29udHJvbGxlcjogJ3NlYXJjaEJhclN1Yk1lbnVDb250cm9sbGVyJyxcbiAgICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJsYXlvdXQtYWxpZ24tZW5kLWNlbnRlciBsYXlvdXQtcm93IGZsZXggc2VhcmNoLWJhci1zdWItbWVudVwiPlxuICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgIDxsaSBuZy1yZXBlYXQ9XCJpdGVtIGluIGl0ZW1zXCI+XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIGRhdGEtaHJlZj1cInt7IHRyYW5zbGF0ZShpdGVtLmFjdGlvbikgfX1cIiBhcmlhLWxhYmVsPVwie3sgdHJhbnNsYXRlKGl0ZW0uZGVzY3JpcHRpb24pIH19XCIgbmctY2xpY2s9XCJnb1RvVXJsKHRyYW5zbGF0ZShpdGVtLmFjdGlvbikpXCIgY2xhc3M9XCJidXR0b24td2l0aC1pY29uIHplcm8tbWFyZ2luIG1kLWJ1dHRvbiBtZC1zbWFsbCB7e2l0ZW0uY3NzQ2xhc3Nlc319XCIgdHlwZT1cImJ1dHRvblwiPlxuICAgICAgICAgICAgICAgICAgICA8bWQtdG9vbHRpcCBtZC1kaXJlY3Rpb249XCJib3R0b21cIiBtZC1kZWxheT1cIjUwMFwiPnt7IHRyYW5zbGF0ZShpdGVtLmRlc2NyaXB0aW9uKSB9fTwvbWQtdG9vbHRpcD48cHJtLWljb24gc3R5bGU9XCJ6LWluZGV4OjFcIiBpY29uLXR5cGU9XCJzdmdcIiBzdmctaWNvbi1zZXQ9XCJ7e2l0ZW0uaWNvbi5zZXR9fVwiIGljb24tZGVmaW5pdGlvbj1cInt7aXRlbS5pY29uLmljb259fVwiPjwvcHJtLWljb24+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic2VhcmNoLWJhci1zdWItbWVudS1pdGVtXCIgbmctY2xhc3M9XCIoaXRlbS5zaG93X3hzKSA/ICcnIDogJ2hpZGUteHMnXCI+e3sgdHJhbnNsYXRlKGl0ZW0ubmFtZSkgfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgPC9kaXY+YFxuXG4gIH0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5hbmd1bGFyLm1vZHVsZSgndG9nZ2xlSW5zdGl0dXRpb25zJywgW10pO1xuXG5hbmd1bGFyLm1vZHVsZSgndG9nZ2xlSW5zdGl0dXRpb25zJykuY29tcG9uZW50KCd0b2dnbGVJbnN0aXR1dGlvbnMnLCB7XG4gIGJpbmRpbmdzOiB7XG4gICAgc3RhcnRIaWRkZW46ICc8J1xuICB9LFxuICB0ZW1wbGF0ZTogJ1xcbiAgICA8bWQtYnV0dG9uIGNsYXNzPVwibWQtcmFpc2VkIHRvZ2dsZS1pbnN0aXR1dGlvbnNcIiBuZy1jbGljaz1cIiRjdHJsLnRvZ2dsZUxpYnMoKVwiIGlkPVwic3VtbWl0QnV0dG9uXCIgYXJpYS1jb250cm9scz1cInN1bW1pdExpbmtzXCIgYXJpYS1leHBhbmRlZD1mYWxzZSBhcmlhLWxhYmVsPVwiU2hvdy9IaWRlIFN1bW1pdCBMaWJyYXJpZXNcIj5cXG4gICAgICAgIHt7JGN0cmwuc2hvd0xpYnMgPyBcXCdIaWRlIFN1bW1pdCBMaWJyYXJpZXNcXCcgOiBcXCdTaG93IFN1bW1pdCBMaWJyYXJpZXNcXCd9fVxcbiAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPXRydWU+e3skY3RybC5zaG93TGlicyA/IFxcJyZsYXF1bztcXCcgOiBcXCcmcmFxdW87XFwnfX08L3NwYW4+XFxuICAgIDwvbWQtYnV0dG9uPicsXG4gIGNvbnRyb2xsZXI6IGZ1bmN0aW9uIGNvbnRyb2xsZXIoKSB7XG4gICAgdGhpcy4kb25Jbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy5zaG93TGlicyA9IHRoaXMuc3RhcnRIaWRkZW4gPT09IGZhbHNlID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgdGhpcy5idXR0b24gPSBhbmd1bGFyLmVsZW1lbnQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcigncHJtLWFsbWEtbW9yZS1pbnN0LWFmdGVyIGJ1dHRvbicpKTtcbiAgICAgIHRoaXMudGFicyA9IGFuZ3VsYXIuZWxlbWVudChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdwcm0tYWxtYS1tb3JlLWluc3QgbWQtdGFicycpKTtcbiAgICAgIHRoaXMudGFicy5hdHRyKCdpZCcsICdzdW1taXRMaW5rcycpO1xuICAgICAgdGhpcy5idXR0b24ucGFyZW50KCkuYWZ0ZXIodGhpcy50YWJzKTtcbiAgICAgIGlmICghdGhpcy5zaG93TGlicykgdGhpcy50YWJzLmFkZENsYXNzKCdoaWRlJyk7XG4gICAgfTtcbiAgICB0aGlzLnRvZ2dsZUxpYnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB0aGlzLnNob3dMaWJzID0gIXRoaXMuc2hvd0xpYnM7XG4gICAgICB0aGlzLnRhYnMuaGFzQ2xhc3MoJ2hpZGUnKSA/IHRoaXMudGFicy5yZW1vdmVDbGFzcygnaGlkZScpICYmIHRoaXMuYnV0dG9uLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLCB0cnVlKSA6IHRoaXMudGFicy5hZGRDbGFzcygnaGlkZScpICYmIHRoaXMuYnV0dG9uLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLCBmYWxzZSk7XG4gICAgfTtcbiAgfVxufSk7IiwicmVxdWlyZSgnLi9kaXN0L21vZHVsZS5qcycpXG5tb2R1bGUuZXhwb3J0cyA9ICd0b2dnbGVJbnN0aXR1dGlvbnMnXG4iXX0=
