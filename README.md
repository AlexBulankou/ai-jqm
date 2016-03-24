# AppInsights JavaScript SDK extension for jQuery Mobile SPA
This is a tiny (1.2K zipped) script that improves Application Insights telemetry for single page apps written on jQuery Mobile framework. 
Application Insights already has [SDK for JavaScript applications](https://github.com/Microsoft/ApplicationInsights-JS), you can read more about using Application Insights with JavaScript applications [here](https://azure.microsoft.com/en-us/documentation/articles/app-insights-javascript/). By default page views are only logged with physical page loads and main telemetry "buckets" (or "operations" in Application Insights speak) are associated with physical pages. For single page apps, often there's just a single physical page load and subsequent transitions are done by revealing the content already on the page. This script listens for JQM page transitions and sends trackPage events to AppInsights. Additionally it initializes new operation for every virtual page which helps with telemetry grouping. 

##How to use it
You can see a working example, directly loading the sample page from this repo: http://rawgit.com/AlexBulankou/ai-jqm/master/eg/sample1.html

This assumes you already have your Application Insights JavaScript snippet on the page, if not [please follow the steps here](https://github.com/AlexBulankou/ai-jqm/wiki/Getting-ApplicationInsights-JavaScript-snippet).

##Appendix A. Page lifecyle reference for JQM (copied from mobile router project)
* bc  => pagebeforecreate
* c   => pagecreate
* i   => pageinit
* bs  => pagebeforeshow
* s   => pageshow
* bh  => pagebeforehide
* h   => pagehide
* rm  => pageremove
* bC  => pagebeforechange
* bl  => pagebeforeload
* l   => pageload
