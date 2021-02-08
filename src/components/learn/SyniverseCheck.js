class SyniversePort {


    getPortStatus(mdn) {
        var axios = require('axios');
        var data = {
            "qryportrectype": "PQI",
            "qryportedno": mdn,
            "qryowner": "6006 - Verizon Wireless:600",
            "action": "Query",
            "nlsp": "ZZZZ",
            "npqty": "00001",
            "nrsellnm": "CHARTER COMM",
            "saveprivacyauditpagefrm": "PortDetails",
            "currentUserId": "BV00168", "reqLineData": [
                {
                    "selected": false,
                    "subscriberName": "",
                    "requestOrResponse": "",
                    "isReview": false,
                    "rcode": null,
                    "rdet": null,
                    "jcode": null,
                    "jdet": null,
                    "lnum": "00001",
                    "dsllnum": null,
                    "tn": ""

                }
            ], "respLineData": []
        };

        var config = {
            method: 'post',
            url: 'https://soa-prod2.syniverse.com/SMGASMS/rest/portdetails/portdetailsquery',
            headers: {
                'Host': ' soa-prod2.syniverse.com',
                'Connection': ' keep-alive',
                'Content-Length': ' 2541',
                'Accept': ' application/json, text/plain, */*',
                'User-Agent': ' Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36',
                'Content-Type': ' application/json',
                'Origin': ' https://soa-prod2.syniverse.com',
                'Sec-Fetch-Site': ' same-origin',
                'Sec-Fetch-Mode': ' cors',
                'Sec-Fetch-Dest': ' empty',
                'Referer': ' https://soa-prod2.syniverse.com/SMGASMS/PortAdministration/PortDetailsPage/dist/PortDetailsPage/',
                'Accept-Encoding': ' gzip, deflate, br',
                'Accept-Language': ' en-US,en;q=0.9',
                'Cookie': ' JSESSIONID=3g2sm-VFCSMiZZHUkHBq-8Bv6vrOIstCbTvSHzAq.SMGGUI; _ga=GA1.2.478530240.1581028623; LANGUAGE_PREFERENCE=EN; return_visitor=1; OptanonAlertBoxClosed=2020-02-27T15:23:43.558Z; OptanonConsent=isIABGlobal=false&datestamp=Wed+May+27+2020+12%3A24%3A44+GMT-0500+(Central+Daylight+Time)&version=6.0.0&landingPath=NotLandingPage&groups=1%3A1%2C2%3A1%2C0_196101%3A1%2C3%3A1%2C0_196098%3A1%2C4%3A1%2C0_196105%3A1%2C0_272017%3A1%2C0_272078%3A1%2C0_272077%3A1%2C0_272076%3A1%2C0_272011%3A1%2C0_272010%3A1%2C0_272009%3A1%2C0_272008%3A1%2C0_272007%3A1%2C0_272006%3A1%2C0_196100%3A1%2C0_196099%3A1%2C0_196103%3A1%2C0_196102%3A1%2C0_196106%3A1&consentId=c239ee97-f7f7-49ec-979d-5003ee962aea&AwaitingReconsent=false; _gid=GA1.2.1875083703.1612197918; XROADS_COMPANY_ID=17; SYN=N; TM_COMPANY_ID=%5E00748%5E02079%5E02190%5E02083%5E02075%5E03055%5EW0748%5E03062%5E01444%5E03226%5E03210%5E03052%5E03277%5EC0005%5E0748D%5EB0748%5E01384%5E; SubscriberID=BV00168; return_visitor_check=1; ObSSOCookie=RG8wacGsDdEiN%2Fw5IBM0hAAXigkioOPBVBoWPMnLAsh2%2B7oC%2Fox4CdauSmU2H5CfYlPPTYnT1jAIIEhf1QrzWO8E2WNPpcyE%2BgTNqTBDxMaLDjnlxl0U%2FjHrfyD%2BjQKUB5bqF27BZldEr8XLUIi%2BpfaNZ8YPLHdZZwPFyvIveuO2dV1iZgzk%2F382cYRZ2u2ORAMJZUrP6F3leHgTTPk7ljGhlJfZk2drnDgoTC4Zp6PifkQ3Sqx%2Fye%2BvEbmd2%2Bbk5RjE8Fetyj%2FQDt6TdCTKpA%2BDFaLDLkdFngXUbo0%2FeGxrBm7p2pN3rf%2B34Ot4zWGpfrVBEAYYZqw5b46qNlp16bkxItXU3HZB2kJjqhxV8uV02pKmy36N4Rr7H45TsG2WarO92FqHMS1MEGuF5sm%2BuXIFs2Xg2Ep6SqbgUsgBjFrjZmRe2cig1CjLLGA5bpdiXE%2Bnrf8i8JsDZqjp9tf%2BdXX1YZFl%2BKa3VWHEhpaeC1twVDX22YnQnKB7z2JEMJRA; XRJSessionId=gx1r6i8ZG77ZCQmJNDeIZMBhV-BcDQVOjH9n7PhqDksyDZrQNrsX!47433228!-80109516; _WL_AUTHCOOKIE_XRJSessionId=LwHajMNZRcIc0c52xjIQ'
            },
            data: data
        };
        axios(config)
            .then(function (response) {
                // console.log(JSON.stringify(response.data));
                console.log('MDN:', mdn, '|ReqSent:', response.data.dtsent, '|PortDirection:', response.data.npdi, '|RespSent:', response.data.dtsent, '|RespDueDate:', response.data.dddt, '|Response:', response.data.miscPortStatus);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
}

let sp = new SyniversePort();
let mdnList = [8138522007,
    8638605454,
    8052401610,
    8033998658,
    4079444458,
    4244001955,
    8645808975,
    2106289683,
    7753121601,
    5856736697,
    7602619205,
    7147703654,
    7146007951,
    9512217824,
    6614815734,
    6615761717,
    3149091685,
    9204223495,
    9155818460,
    9176285390,
    8133889585,
    9515268595,
    9137226085,
    7182667833,
    3614462309,
    8185453895
]
console.log(mdnList)
mdnList.forEach(mdn => sp.getPortStatus(mdn));
// sp.getPortStatus(2134143);

