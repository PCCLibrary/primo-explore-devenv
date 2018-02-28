import 'primo-explore-clickable-logo-to-any-link';
import 'primo-explore-libraryh3lp-widget';
import 'primo-explore-search-bar-sub-menu';
import 'primo-explore-toggle-institutions';
import 'primo-explore-custom-actions';


import { viewName } from './viewName';
import { clickableLogoLinkConfig } from './clickableLogoToAnyLink';
import { libraryh3lpWidgetConfig } from './libraryh3lpWidget';
import { searchBarSubMenuItemsConfig } from './searchBarSubMenu';
import { customActionsConfig } from './customActions';

let app = angular.module('viewCustom', [
                                        'clickableLogoToAnyLink',
                                        'libraryh3lpWidget',
                                        'searchBarSubMenu',
                                        'toggleInstitutions',
                                        'customActions'
                                      ]);

app
  .constant(customActionsConfig.name, customActionsConfig.config)
  .constant(clickableLogoLinkConfig.name, clickableLogoLinkConfig.config)
  .constant(libraryh3lpWidgetConfig.name, libraryh3lpWidgetConfig.config)
  .constant(searchBarSubMenuItemsConfig.name, searchBarSubMenuItemsConfig.config)
  .value('customNoSearchResultsTemplateUrl', 'custom/'+viewName+'/html/noSearchResults.html')
  .component('prmSearchBarAfter', {
    template: '<search-bar-sub-menu></search-bar-sub-menu>'
  })
  .component('prmAlmaMoreInstAfter', {template: '<toggle-institutions />'})


