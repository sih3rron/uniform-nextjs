I am thinking of submitting a Feature Request for the following item, but want to check if anything similar is being worked on so I'm not creating any unnecessary noise :)

## Description

The events payload for both Personalization and Experiments, while adequate, could use some additional metadata relating to match criteria and *why* a user is received a specific treatment. 

It would be really useful if we could provide amend the existing definitions for `personalizationResult` and `testResult` to include a reference to the specific match criteria that resulted in the Users' Experience and a 'Published Manifest' version indicator.


## Why is this feature valuable?

This additional metadata would make it much easier for our customers to:  
- QA specific experiences by matching the distinct criteria if there are multiple sets of criteria.
- Troubleshoot in production scenarios where a user is frustrated or is unaware of why they might be exposed to a specific piece of content.
- Passing criteria including user scores at the moment a user is exposed to an experience would enable our customers to do more with our scoring system. This has the potential to increase platform utilization.

## Describe how this feature will work

### Criteria Matching
Every Personalization or A/B test has a set of match criteria associated with it.
If a user meets that criteria then they are exposed to, the appropriate experience is then rendered. At the point of evaluation we must be able to expose the matching criterion as a value on the payload of either `personalizationResult` or `testResult`

Example:

``
{
    changed: true,  
    control: false,
    name: "My-First-P13n",
    variantIds: ['My-Default-Button'],
    matchedCriteria: SIG: [{
        "type": "QS",
        "match": {
            "cs": false,
            "op": "=",
            "rhs": "demo"
        },
        "queryName": "button"
    }],
    manifestVersion: 80,
}
``


### Manifest Versioning
Context Criteria are published via a Manifest. When that manifest is published we should expose an iterator that increments a key-value pair to illustrate what version of the manifest is in Production. As a practice, versions of the manifest can be retained for 'x' days by our customer to enable their comparison if required. Exposing the manifest version on eventing provides a paper trail that can be reviewed. Consider this similar to rudimentary audit logging.

