const { create } = require('xmlbuilder2');

const jcr_root = create({ version: '1.0', encoding: 'UTF-8' })

jcr_root
        .ele('jcr:root')
                .att('xmlns:sling', 'http://sling.apache.org/jcr/sling/1.0')
                .att('xmlns:cq', 'http://www.day.com/jcr/cq/1.0')
                .att('xmlns:jcr', 'http://www.jcp.org/jcr/1.0')
                .att('xmlns:mix', 'http://www.jcp.org/jcr/mix/1.0')
                .att('xmlns:nt', 'http://www.jcp.org/jcr/nt/1.0')
                .att('jcr:primaryType', 'cq:Page')
                .ele('jcr:content')
                        .att('cq:template', '/conf/dcx/settings/wcm/templates/dcx-base-template')
                        .att('jcr:primaryType', 'cq:PageContent')
                        .att('jcr:title', 'sdsds')
                        .att('sling:resourceType', 'dcx/components/structure/page')
                        .ele('root')
                                .att('cr:primaryType', 'nt:unstructured')
                                .att('sling:resourceType', 'wcm/foundation/components/responsivegrid')
                                .ele('loggedinmapping')
                                        .att('jcr:primaryType', 'nt:unstructured')
                                        .att('sling:resourceType', 'dcx/components/content/loggedinmapping')
                                        .att('company', 'true')
                                        .att('country', 'true')
                                        .att('emailAddress', 'true')
                                        .att('firstName', 'true')
                                        .att('lastName', 'true')
                                        .att('phoneCountryCode', 'true')
                                        .att('phoneNumber', 'true')
                                        .att('state', 'true')
                                        .att('zipOrPostalCode', 'true')

                                


const xml = jcr_root.end({ prettyPrint: true });
console.log(xml);