import 'primo-explore-clickable-logo-to-any-link';
import 'primo-explore-libraryh3lp-widget';
import 'primo-explore-search-bar-sub-menu';
import 'primo-explore-toggle-institutions';
import 'primo-explore-report-problem';

import { viewName } from './viewName';
import { clickableLogoLinkConfig } from './clickableLogoToAnyLink';
import { libraryh3lpWidgetConfig } from './libraryh3lpWidget';
import { searchBarSubMenuItemsConfig } from './searchBarSubMenu';

let app = angular.module('viewCustom', [
                                        'clickableLogoToAnyLink',
                                        'libraryh3lpWidget',
                                        'searchBarSubMenu',
                                        'toggleInstitutions',
                                        'reportProblem'
                                      ]);

app
  .constant(clickableLogoLinkConfig.name, clickableLogoLinkConfig.config)
  .constant(libraryh3lpWidgetConfig.name, libraryh3lpWidgetConfig.config)
  .constant(searchBarSubMenuItemsConfig.name, searchBarSubMenuItemsConfig.config)
  .value('customNoSearchResultsTemplateUrl', 'custom/'+viewName+'/html/noSearchResults.html')
  .component('prmSearchBarAfter', {
    template: '<search-bar-sub-menu></search-bar-sub-menu>'
  })
  .component('prmAlmaMoreInstAfter', {template: '<toggle-institutions />'})
  .component('prmActionListAfter', { template:
      '<oca-report-problem report-url="https://docs.google.com/forms/d/e/1FAIpQLSeWpIktFnYNDZqeN2O_EODmVtkis0hoaRMXhqVcBeXTVIsiag/viewform?" message-text="Want to report a problem?" button-text="Submit report" />' }
      )


