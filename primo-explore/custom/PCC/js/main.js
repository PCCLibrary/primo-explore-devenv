import 'primo-explore-clickable-logo-to-any-link';
import 'primo-explore-libraryh3lp-widget';
import 'primo-explore-search-bar-sub-menu';
import 'primo-explore-toggle-institutions';
import 'primo-explore-custom-actions';
import 'primo-explore-custom-no-search-results';
import 'primo-explore-external-search';
import 'primo-explore-google-analytics';


import { viewName } from './viewName';
import { clickableLogoLinkConfig } from './clickableLogoToAnyLink';
import { libraryh3lpWidgetConfig } from './libraryh3lpWidget';
import { searchBarSubMenuItemsConfig } from './searchBarSubMenu';
import { customActionsConfig } from './customActions';
import { linksInProfile } from "./LinksInProfile";
import { libraryAccountQuestions } from './libraryAccountQuestions'


let app = angular.module('viewCustom', [
                                        'clickableLogoToAnyLink',
                                        'libraryh3lpWidget',
                                        'searchBarSubMenu',
                                        'toggleInstitutions',
                                        'customActions',
                                        'customNoSearchResults',
                                        'linksInProfile',
                                        'libraryAccountQuestions',
                                        'externalSearch',
                                        'googleAnalytics'
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
    .value('searchTargets', [
        {
        "name": "Worldcat",
        "url": "https://www.worldcat.org/search?",
        "img": "https://www.pcc.edu/library/primo/images/worldcat-logo.png",
            mapping: function (queries, filters) {
                const query_mappings = {
                    'any': 'kw',
                    'title': 'ti',
                    'creator': 'au',
                    'subject': 'su',
                    'isbn': 'bn',
                    'issn': 'n2'
                }
                try {
                    return 'q=' + queries.map(part => {
                        let terms = part.split(',')
                        let type = query_mappings[terms[0]] || 'kw'
                        let string = terms[2] || ''
                        let join = terms[3] || ''
                        return type + ':' + string + ' ' + join + ' '
                    }).join('')
                }
                catch (e) {
                    return ''
                }
            }
        },
        {
            "name": "Google Scholar",
            "url": "https://scholar.google.com/scholar?q=",
            "img": "https://www.pcc.edu/library/primo/images/google_logo.png",
            mapping: function (queries, filters) {
                try {
                    return queries.map(part => part.split(",")[2] || "").join(' ')
                }
                catch (e) {
                    return ''
                }
            }
        },
        {
            "name": "EBSCO Search",
            "url": "https://libproxy.pcc.edu/login?url=http://search.ebscohost.com/login.aspx?direct=true&site=ehost-live&scope=site&type=1&db=aph&db=f5h&mode=bool&lang=en&cli0=FT&clv0=Y&bquery=",
            "img": "https://www.pcc.edu/library/primo/images/ebsco-search.png",
            mapping: function (queries, filters) {
                try {
                    return queries.map(part => part.split(",")[2] || "").join(' ')
                }
                catch (e) {
                    return ''
                }
            }
        }
    ])

app.run(runBlock);

    runBlock.$inject = ['gaInjectionService'];
    function runBlock(gaInjectionService) {
        // other potential run operations...
        gaInjectionService.injectGACode();
    }

app.constant('googleAnalyticsConfig', {
    trackingId: 'AB-123456789',
    // use null to specify an external script shouldn't be loaded
    externalScriptURL: null,
    // copy from script snippet from Google if you're running legacy Google Analytics
    inlineScript: `
    var _gaq = _gaq || [];
    _gaq.push(['_setAccount', 'UA-1329150-1']);
    _gaq.push(['_trackPageview']);

    (function() {
      var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
      ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
      var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
    })();
  `,
    target: 'body',
})



