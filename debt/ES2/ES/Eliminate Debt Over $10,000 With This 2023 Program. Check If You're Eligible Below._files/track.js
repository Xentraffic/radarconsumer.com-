var campaignID = "63e88a7cdc200100017fdc78";
var cachebuster = Math.round(new Date().getTime() / 1000);
var rtkClickID;
function removeParam(key, sourceURL) {
    var rtn = sourceURL.split("?")[0],
        param, params_arr = [],
        queryString = (sourceURL.indexOf("?") !== -1) ? sourceURL.split("?")[1] : "";
    if (queryString !== "") {
        params_arr = queryString.split("&");
        for (var i = params_arr.length - 1; i >= 0; i -= 1) {
            param = params_arr[i].split("=")[0];
            if (param === key) {
                params_arr.splice(i, 1);
            }
        }
        rtn = rtn + "?" + params_arr.join("&");
    }
    return rtn;
};
var urlParams = new URLSearchParams(window.location.search);
var pixelParams = "&" + window.location.search.substr(1)
if (campaignID == "") {
    campaignID = urlParams.get('rtkcmpid')
}
var initialSrc = "https://trk.advanced-tracker.com/"+campaignID+"?format=json";

function stripTrailingSlash(str) {
    return str.replace(/\/$/, "");
}
var rawData;
setTimeout(function(){
    if (!urlParams.get('rtkcid')) {
        xhr = new XMLHttpRequest;
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4 && xhr.status == 200) {
                rawData = JSON.parse(xhr.responseText);
                rtkClickID = rawData.clickid
                setCookie();
                document.querySelectorAll('a').forEach(function(el) {
                    if (el.href.indexOf("trk.advanced-tracker.com/click")>-1) {
                        if (el.href.indexOf('?')>-1) {
                            el.href = stripTrailingSlash(el.href)+"&clickid="+rawData.clickid+"&rtkck="+cachebuster
                        } else {
                            el.href = stripTrailingSlash(el.href)+"?clickid="+rawData.clickid+"&rtkck="+cachebuster
                        }
                    }
                    if (el.href.indexOf("clickid={clickid}")>-1) {
                        el.href = el.href.replace(/{clickid}/, rawData.clickid)+"&rtkck="+cachebuster;
                    }
                });
                xhrr = new XMLHttpRequest;
                xhrr.open("GET", "https://trk.advanced-tracker.com/view?clickid="+rawData.clickid)
                xhrr.send();
            }
        }
        xhr.open("GET", initialSrc+pixelParams)
        xhr.send();
    }
    else {
        rtkClickID = urlParams.get('rtkcid')
        setCookie();
        xhrTrack = new XMLHttpRequest;
        xhrTrack.open("GET", "https://trk.advanced-tracker.com/view?clickid="+rtkClickID )
        xhrTrack.send();
        document.querySelectorAll('a').forEach(function(el) {
            if (el.href.indexOf("trk.advanced-tracker.com/click")>-1) {
                if (el.href.indexOf('?')>-1) {
                    el.href = stripTrailingSlash(el.href)+"&clickid="+rtkClickID+"&rtkck="+cachebuster
                } else {
                    el.href = stripTrailingSlash(el.href)+"?clickid="+rtkClickID+"&rtkck="+cachebuster
                }
            }
            if (el.href.indexOf("clickid={clickid}")>-1) {
                el.href = el.href.replace(/{clickid}/, rawData.clickid)+"&rtkck="+cachebuster;
            }
        });
    }
}, 5e1)

function setCookie(){
    var cookieName = "rtkclickid-store", cookieValue = rtkClickID ,expirationTime = 86400 * 30 * 1000,
        date = new Date(), dateTimeNow = date.getTime();
    date.setTime(dateTimeNow + expirationTime); var date = date.toUTCString();
    document.cookie = cookieName+"="+cookieValue+"; expires="+date+"; path=/;"
}
