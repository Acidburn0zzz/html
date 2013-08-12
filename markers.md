# List of Markers in use in source file

The source file has a number of markers that are used to split it into the different specs and perform a number of other functions such as validation and segmenting.

## 1. The following markers start with &lt;!--START xxx--> , end with &lt;!--END xxx-->.

### W3C Specifications

* w3c-html : W3C HTML5 spec - http://dev.w3.org/html5/spec/single-page.html
* 2dcontext : 2D canvas context spec - http://dev.w3.org/html5/2dcontext/
* eventsource: Server-Sent events - http://dev.w3.org/html5/eventsource/
* html-device : remove??
* microdata : Microdata spec - http://www.w3.org/TR/microdata/
* postmsg : Web messaging spec - http://dev.w3.org/html5/postmsg/
* storage : Web Storage - http://dev.w3.org/html5/webstorage/
* websocket-api : WebSocket API - http://dev.w3.org/html5/websockets/
* webvtt : WebVTT - http://dev.w3.org/html5/webvtt/
* workers : Web Workers - http://dev.w3.org/html5/workers/

### WHATWG Specifications

* complete : the WHATWG HTML spec - http://www.whatwg.org/specs/web-apps/current-work/
* dev-html : Web Developer edition - http://developers.whatwg.org/
* vCard : 1st part of Microdata vocabularies
* vEvent : 2nd part of Microdata vocabularies
* vocabs : Microdata vocabularies (part of complete)
* whatwg-workers : Web Workers (part of complete)
* work : 3rd part of Microdata vocabularies

### Other purposes

* validation : IDL validation

## 2. The following markers start with &lt;!--xxx and serve different purposes:

### Processing instructions

* FIXUP : adjust the heading levels of &lt;h1>-&lt;h6> elements
* BOILERPLATE : add specific boilerplate for spec creation
* PUB-N / PUB-Y : Content to include or exclude from TR space

### Changes between topics markers email particular people automatically (@WHATWG)

* TOPIC:XXX : start new topic (ADD-TOPIC:xxx , REMOVE-TOPIC:xxx)

### Notes about W3C / WHATWG differences

* FORK : explicit difference between W3C and WHATWG spec
* bug : reference to bug number

### Subjects / Source of difference

* EDITORIAL : editorial difference
* VERSION : sections that talk about HTML versioning
* POLITICS :  political difference
* CONFORMANCE : sections that talk about conformance
* HPAAIG : HTML to Platform Accessibility APIs Implementation Guide
* TITLE : title attribute difference between W3C and WHATWG
* APPCACHE-PREFER-ONLINE : application cache difference between W3C and WHATWG
* DATA : HTMLDataElement only in WHATWG
* CSSREF : DOMElementMap only in WHATWG
* DOWNLOAD : removed attribute from a element in W3C
* PING : removed attribute from a element in W3C
* HTML4POLICE : difference because W3C spec has to be valid HTML4
* SECURITY : about security
* FETCH : fetching resources
* SCRIPT EXEC : marks areas related to creation of scripts
* DND-v3 / DND-v4 : new drag-and-drop features
* SYNCLOAD : synchronous load
* INERT : inert attribute
* MD : microdata
* 2DCONTEXT : 2D canvas context
* 2DCANVAS : 2D canvas spec (a typo?)
* INSERT FINGERPRINT : insert fingerprint spec