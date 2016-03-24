# AppInsights JavaScript SDK extension for jQuery Mobile SPA
This is a tiny (1.2K zipped) script that improves Application Insights telemetry for single page apps written on jQuery Mobile framework. 
Application Insights already has [SDK for JavaScript applications](https://github.com/Microsoft/ApplicationInsights-JS), you can read more about using Application Insights with JavaScript applications [here](https://azure.microsoft.com/en-us/documentation/articles/app-insights-javascript/). By default page views are only logged with physical page loads and main telemetry "buckets" (or "operations" in Application Insights speak) are associated with physical pages. For single page apps, often there's just a single physical page load and subsequent transitions are done by revealing the content already on the page. This script listens for JQM page transitions and sends trackPage events to AppInsights. Additionally it initializes new operation for every virtual page which helps with telemetry grouping. 

##How to use it
You can see a working example, directly loading the sample page from this repo: http://rawgit.com/AlexBulankou/ai-jqm/master/eg/sample1.html

This assumes you already have your Application Insights JavaScript snippet on the page, if not [please follow the steps here](https://github.com/AlexBulankou/ai-jqm/wiki/Getting-ApplicationInsights-JavaScript-snippet).

Insert ai-jqm script after jQuery Mobile script and after Application Insights snippet. You can use cdn.rawgit.com and reference the latest tagged version: https://cdn.rawgit.com/AlexBulankou/ai-jqm/v0.9/scripts/ai-jqm.min.js

![snippet](https://bit4ka.dm2303.df.livefilestore.com/y3mNTiIVA2dhr_MJA_QTnbl-P3_YnN_bJKe34qPFZqxuKdpKgEbRSUBGJvUeMRsGVl6P8SKhDJAawuaGYDHAXax1w9wjf56I5bpSmS98_PfC27xX7P-gpLfCvUq5dqW3fcBcWzLWmZnxNs8MsVfPJBUsw?width=942&height=336&cropmode=none)

That's it - you're done! Try opening virtual pages of your JQM application and in your Application Insights resource you will see telemetry grouped according to JQM virtual page. For example, this is the telemetry I'm seeing for [http://rawgit.com/AlexBulankou/ai-jqm/master/eg/sample1.html](this application):

![telemetry grouped by JQM page](https://pbth1q.dm2303.df.livefilestore.com/y3m4sQrj-il72VlNfhO8igE-fn1s_AU9F-NovqQybdIQYOUBU45DpWbvhFknzbTIzCL0AsGW-IS1QoaHZEaUcT3b4SL-X-jxRD96PX2XFT0AEdWGVNWNXQrgJ0Vv4qvdFsLJZJVWWoEcJsnXPuB1O1srA?width=826&height=569&cropmode=none)

This allows you to easily view usage and loading performance for each of the JQM routes and, more importantly, you can view all telemetry that was logged for a particular route:
![correlation](https://oz8fmw.dm2303.df.livefilestore.com/y3mU5-u14EDB1Y4zICbcDDBIDaL4IkErdatd9d17SUDIDEQD8EqzIYluJmQBFi0fiasguEKc-tcxWRE9rLL4J-JF-X9Nm5kB12wglCD2H6qKS7bgLiHIMhqRH6nTPPkfTBx2w8Owc-Omp3dVM4xIBwlww?width=1024&height=802&cropmode=none)



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
