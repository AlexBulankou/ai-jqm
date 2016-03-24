/*!
 * ApplicationInsights JS SDK extension for jQuery Mobile v0.1
 * https://github.com/AlexBulankou/ai-jqm
 *
 * Copyright 2016 (c) Alex Bulankou
 * Licensed under the MIT license
 * https://github.com/AlexBulankou/ai-jqm/blob/master/LICENSE
 */

(function() {
    /* keep reference to the object holding the state of the page we're transitioning to */
    var pageInProgress = null;
    $(document).bind("pagebeforechange", function(e, data) {
        if (!pageInProgress) {
            var url = null;
            if (data.options && data.options.dataUrl && (typeof data.options.dataUrl) === "string") {
                url = data.options.dataUrl;
            }
            else if (data.toPage && (typeof data.toPage) === "string") {
                url = data.toPage;
            }

            if (url) {
                var pageName = url;
                if (url.indexOf("#") > -1) {
                    pageName = url.substring(url.indexOf('#'));
                }
                else {
                    pageName = "#";
                }

                pageInProgress = { url: url, name: pageName };
                window.appInsights.startTrackPage(pageName);
            }
        }

    });

    $(document).bind("pagebeforeshow", function(e, data) {
        if (pageInProgress) {
            /* initialize new operation context */
            window.appInsights.context.operation = new Microsoft.ApplicationInsights.Context.Operation();
            window.appInsights.context.operation.name = pageInProgress.name;
        }
    });

    $(document).bind("pageshow", function(e, data) {
        if (pageInProgress) {
            window.appInsights.stopTrackPage(pageInProgress.name, pageInProgress.url);
            pageInProgress = null;
        }
    });
}
)();