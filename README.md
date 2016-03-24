# AppInsights JavaScript SDK extension for jQuery Mobile SPA
This is a tiny (1.2K zipped) script that improves Application Insights telemetry for single page apps written on jQuery Mobile framework. 
Application Insights already has [SDK for JavaScript applications](https://github.com/Microsoft/ApplicationInsights-JS), you can read more about using Application Insights with JavaScript applications [here](https://azure.microsoft.com/en-us/documentation/articles/app-insights-javascript/). By default page views are only logged with physical page loads and main telemetry "buckets" (or "operations" in Application Insights speak) are associated with physical pages. For single page apps, often there's just a single physical page load and subsequent transitions are done by revealing the content already on the page. This script listens for JQM page transitions and sends trackPage events to AppInsights. Additionally it initializes new operation for every virtual page which helps with telemetry grouping. 

##How to use it
You can see a working example, directly loading the sample page from this repo: http://rawgit.com/AlexBulankou/ai-jqm/master/eg/sample1.html
If you don't already have Application Insights enabled for your project, start by going to https://portal.azure.com and creating a new Application Insights resource. If you have ASP.NET or Java application you should use the corresponding AI resource template; for all other SPA applications use "Other":

![Other](https://qumryw.dm2303.df.livefilestore.com/y3muEm9QdBP8FR2hIQtSdK1XxMPr8NCfsjnUgttckrscOGw1DD3pbWo4vPnnx9mFoFWW1uBkAEwe1amBC0LEjViiOtszBVXImjV2DpDctmkpoJc0klvQD1ANGBBFPD76KtNwNhZFUfg34Q5VXP67A-y_g?width=1024&cropmode=none)

After resource is created copy the JavaScript snippet with instrumentation key after clicking of page load chart from the main page:

![Snippet](https://cv0vgw.dm2303.df.livefilestore.com/y3m5RoJ2eNBTymwOBWdTCsPVhynlqcI0M-cDnl8pSsAlHtY4orfmILol-JAiUSrLlM0eqHsfkFsfVSxH7d-IOmRxLjNxLzKKvpNVPkhal8lsdfL4SJQyMf_rvcws9OChUxvjiUORpK9YVmJEdtUy0HJ2Q?width=1024&height=730&cropmode=none)

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
