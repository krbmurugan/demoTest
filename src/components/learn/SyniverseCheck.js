class SyniversePort {
  getPortStatus(mdn) {
    var axios = require("axios");
    var data = {
      qryportrectype: "PQI",
      qryportedno: mdn,
      qryowner: "6006 - Verizon Wireless:600",
      action: "Query",
      nlsp: "ZZZZ",
      npqty: "00001",
      nrsellnm: "CHARTER COMM",
      saveprivacyauditpagefrm: "PortDetails",
      currentUserId: "BV00168",
      reqLineData: [
        {
          selected: false,
          subscriberName: "",
          requestOrResponse: "",
          isReview: false,
          rcode: null,
          rdet: null,
          jcode: null,
          jdet: null,
          lnum: "00001",
          dsllnum: null,
          tn: "",
        },
      ],
      respLineData: [],
    };

    var config = {
      method: "post",
      url:
        "https://soa-prod2.syniverse.com/SMGASMS/rest/portdetails/portdetailsquery",
      headers: {
        Host: " soa-prod2.syniverse.com",
        Connection: " keep-alive",
        "Content-Length": " 2541",
        Accept: " application/json, text/plain, */*",
        "User-Agent":
          " Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36",
        "Content-Type": " application/json",
        Origin: " https://soa-prod2.syniverse.com",
        "Sec-Fetch-Site": " same-origin",
        "Sec-Fetch-Mode": " cors",
        "Sec-Fetch-Dest": " empty",
        Referer:
          " https://soa-prod2.syniverse.com/SMGASMS/PortAdministration/PortDetailsPage/dist/PortDetailsPage/",
        "Accept-Encoding": " gzip, deflate, br",
        "Accept-Language": " en-US,en;q=0.9",
        Cookie:
          "JSESSIONID=zozKf2AdpaJE1JFAo5E2ZdCCHWmeIBbRyppIBrko.SMGGUI; _ga=GA1.2.1694780516.1613584014; _gid=GA1.2.296046647.1613584014; LANGUAGE_PREFERENCE=EN; return_visitor=0; return_visitor_check=1; ObSSOCookie=%2BouQZ2fGG64yUy9aj2viDOJHJQfvIV7q9hE%2FBvmNs4CVR80QopYRKSBfWn%2BUJ0d6TLcPq27RrcJaU265AJiEEGx45nudJhsFpK3JKCHVNGx%2B6PwFz%2BQQu%2FIgzb7TXH04Rgn5a91C3E7UjJeRx5v3O6F3U2SOV7f%2FVAc3CQg6GnMYlXNf3jJqmpn5p5JzKA6LK7oPRvPE15pO5NhTA4F1FluI9aUBs8chm1v1v9TwDEbGNctfubdHJff7zvKganHTkKXHipaKbWXNQ6vOVRnKG0Lg6iBoH87d2CcrY1D%2F%2B2zYRYSM76NvvdSdLdcrUnqrV%2FoY9ICq7J16VJj%2F7b3SjKcPoJ8PrA4SdW8A%2FIBmra66Z3vzXWfD74TzZZ0LRVZBiSQ8O2shiIkRjGBXfaZzs9CLZKE%2FVlf1L4C6DeTBZntmQHKgDUOei0t5CRkJdrfvDgzbSufW7ub%2B8H5qvHvdKO9S9QkptLofhsUyRL8OkSuVq5x7aHjyXV%2Fly3nAUU6G; XRJSessionId=3eqxxQTNh3JiWmLe2lQLSY7WIA5S7mA-3pqYrOsgTWsq2mk6lbk2!1550155063!-1313217260; _WL_AUTHCOOKIE_XRJSessionId=Gq4WXNbCDAlrmHE2GMQb; XROADS_COMPANY_ID=17; SYN=N; TM_COMPANY_ID=%5E00748%5E02079%5E02190%5E02083%5E02075%5E03055%5EW0748%5E03062%5E01444%5E03226%5E03210%5E03052%5E03277%5EC0005%5E0748D%5EB0748%5E01384%5E; SubscriberID=BV00168",
      },
      data: data,
    };
    axios(config)
      .then(function (response) {
        // console.log(JSON.stringify(response.data));
        console.log(
          response.data,
          "MDN|",
          mdn,
          "|ReqSent:",
          response.data.dtsent,
          "|PortDirection:",
          response.data.npdi,
          "|RespSent:",
          response.data.dtsent,
          "|RespDueDate:",
          response.data.dddt,
          "|Response:",
          response.data.miscPortStatus
        );
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}

let sp = new SyniversePort();
let mdnList = [8634506690];
console.log(mdnList);
mdnList.forEach((mdn) => sp.getPortStatus(mdn));
// sp.getPortStatus(2134143);
