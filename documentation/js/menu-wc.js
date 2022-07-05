'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">domain-gateway documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/HealthModule.html" data-type="entity-link" >HealthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-HealthModule-c357ed18b69e534994e9f9978badf605e517c2f81673c5b55dd770b0b8e79672f33e08e9ca3ce644391a5fed9b2d64438bd9cf1d6953719cd8295d6758fb4617"' : 'data-target="#xs-controllers-links-module-HealthModule-c357ed18b69e534994e9f9978badf605e517c2f81673c5b55dd770b0b8e79672f33e08e9ca3ce644391a5fed9b2d64438bd9cf1d6953719cd8295d6758fb4617"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-HealthModule-c357ed18b69e534994e9f9978badf605e517c2f81673c5b55dd770b0b8e79672f33e08e9ca3ce644391a5fed9b2d64438bd9cf1d6953719cd8295d6758fb4617"' :
                                            'id="xs-controllers-links-module-HealthModule-c357ed18b69e534994e9f9978badf605e517c2f81673c5b55dd770b0b8e79672f33e08e9ca3ce644391a5fed9b2d64438bd9cf1d6953719cd8295d6758fb4617"' }>
                                            <li class="link">
                                                <a href="controllers/HealthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HealthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-HealthModule-c357ed18b69e534994e9f9978badf605e517c2f81673c5b55dd770b0b8e79672f33e08e9ca3ce644391a5fed9b2d64438bd9cf1d6953719cd8295d6758fb4617"' : 'data-target="#xs-injectables-links-module-HealthModule-c357ed18b69e534994e9f9978badf605e517c2f81673c5b55dd770b0b8e79672f33e08e9ca3ce644391a5fed9b2d64438bd9cf1d6953719cd8295d6758fb4617"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-HealthModule-c357ed18b69e534994e9f9978badf605e517c2f81673c5b55dd770b0b8e79672f33e08e9ca3ce644391a5fed9b2d64438bd9cf1d6953719cd8295d6758fb4617"' :
                                        'id="xs-injectables-links-module-HealthModule-c357ed18b69e534994e9f9978badf605e517c2f81673c5b55dd770b0b8e79672f33e08e9ca3ce644391a5fed9b2d64438bd9cf1d6953719cd8295d6758fb4617"' }>
                                        <li class="link">
                                            <a href="injectables/HealthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HealthService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/LoggingModule.html" data-type="entity-link" >LoggingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ProxyModule.html" data-type="entity-link" >ProxyModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-ProxyModule-6f3a6076a412700725c1871f90d28da9812279605f13c717396e4c6e167612e7670225d364216ea47888b4cc662af0b1495bb18da04f3959af6386ba9558b663"' : 'data-target="#xs-controllers-links-module-ProxyModule-6f3a6076a412700725c1871f90d28da9812279605f13c717396e4c6e167612e7670225d364216ea47888b4cc662af0b1495bb18da04f3959af6386ba9558b663"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ProxyModule-6f3a6076a412700725c1871f90d28da9812279605f13c717396e4c6e167612e7670225d364216ea47888b4cc662af0b1495bb18da04f3959af6386ba9558b663"' :
                                            'id="xs-controllers-links-module-ProxyModule-6f3a6076a412700725c1871f90d28da9812279605f13c717396e4c6e167612e7670225d364216ea47888b4cc662af0b1495bb18da04f3959af6386ba9558b663"' }>
                                            <li class="link">
                                                <a href="controllers/ProxyController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProxyController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-ProxyModule-6f3a6076a412700725c1871f90d28da9812279605f13c717396e4c6e167612e7670225d364216ea47888b4cc662af0b1495bb18da04f3959af6386ba9558b663"' : 'data-target="#xs-injectables-links-module-ProxyModule-6f3a6076a412700725c1871f90d28da9812279605f13c717396e4c6e167612e7670225d364216ea47888b4cc662af0b1495bb18da04f3959af6386ba9558b663"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ProxyModule-6f3a6076a412700725c1871f90d28da9812279605f13c717396e4c6e167612e7670225d364216ea47888b4cc662af0b1495bb18da04f3959af6386ba9558b663"' :
                                        'id="xs-injectables-links-module-ProxyModule-6f3a6076a412700725c1871f90d28da9812279605f13c717396e4c6e167612e7670225d364216ea47888b4cc662af0b1495bb18da04f3959af6386ba9558b663"' }>
                                        <li class="link">
                                            <a href="injectables/ProxyService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProxyService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/RedisCachingModule.html" data-type="entity-link" >RedisCachingModule</a>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#controllers-links"' :
                                'data-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/HealthController.html" data-type="entity-link" >HealthController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/ProxyController.html" data-type="entity-link" >ProxyController</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CacheConfigurationService.html" data-type="entity-link" >CacheConfigurationService</a>
                            </li>
                            <li class="link">
                                <a href="classes/CaseInsensitiveMap.html" data-type="entity-link" >CaseInsensitiveMap</a>
                            </li>
                            <li class="link">
                                <a href="classes/ElasticSearchLoggerService.html" data-type="entity-link" >ElasticSearchLoggerService</a>
                            </li>
                            <li class="link">
                                <a href="classes/ElasticSearchLoggerUtilities.html" data-type="entity-link" >ElasticSearchLoggerUtilities</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/CorrelationIdMiddleware.html" data-type="entity-link" >CorrelationIdMiddleware</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/HealthService.html" data-type="entity-link" >HealthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LoggerMiddleware.html" data-type="entity-link" >LoggerMiddleware</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProxyConfigService.html" data-type="entity-link" >ProxyConfigService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProxyService.html" data-type="entity-link" >ProxyService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/ElasticSearchLoggerOptions.html" data-type="entity-link" >ElasticSearchLoggerOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ProxyModuleAsyncOptions.html" data-type="entity-link" >ProxyModuleAsyncOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ProxyModuleOptions.html" data-type="entity-link" >ProxyModuleOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ProxyModuleOptionsFactory.html" data-type="entity-link" >ProxyModuleOptionsFactory</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Service.html" data-type="entity-link" >Service</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});