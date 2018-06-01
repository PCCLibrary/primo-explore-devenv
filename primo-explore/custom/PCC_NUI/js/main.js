import 'primo-explore-clickable-logo-to-any-link';
import 'primo-explore-libraryh3lp-widget';
import 'primo-explore-search-bar-sub-menu';
import 'primo-explore-toggle-institutions';
import 'primo-explore-custom-actions';
import 'primo-explore-custom-no-search-results';
import 'primo-explore-external-search';


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
                                        'externalSearch',
                                        'linksInProfile',
                                        'libraryAccountQuestions'
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
    .value('searchTargets', [{
        "name": "Worldcat",
        "url": "https://pcc.on.worldcat.org/search?",
        "img": "https://raw.githubusercontent.com/alliance-pcsg/primo-explore-external-search/master/worldcat-logo.png",
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
                return 'queryString=' + queries.map(part => {
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
            "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/200px-Google_%22G%22_Logo.svg.png",
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





