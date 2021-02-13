class RSSXLineInfo {
  getLineInfo() {
    var axios = require("axios");

    var config = {
      method: "get",
      url:
        "https://rssxweb.vzwcorp.com/rssx/portal/modify?searchValue=8083006676",
      headers: {
        Cookie:
          "JSESSIONID=1EAAF652F5652D9775F26181669B12D4.node1; lineOverviewSubsection=showWearables; savedMDN=8084433500; ROUTEIDEAST=.16; SMSESSION=MLa8mrpmrwpwm/06KFDFII4lC6on2JWq7WPF0WSWxVsjVAqcSlv1+ZqGUZKzFU3TzRdZTKLKJIkYXLE2C+QB7sgnl0aAAZdwU/OlNSrqXITmQkZlxz2zY8mGlclxvi/dlPaCRZSMW96aAK69g1yKNIqcWadQHfXeEBI/KCDXV6hs709gBiQUtM/ZXtxFcMGYx1HNVssPQ89uxal1BfVvnCcV6UbeWogr2HnL2QuiZe1X5EpHOUoexJ8dZRqXgKOKRjY9Ff+JA/k40xcsN8DCAAFz2up6Rf6Dw1H8gQbSFrSoKIEk2L4wf3jFB8yo84yTEiS+FGTX8o8c+J6hcfW9kG4qNft18IexM64vUnj9Qhs5/k8AFuZW4mIDyxoAzxLoaLCtta3FG+YuVKsC32oxlxH/TownG4It+t8oDkpGbbdsDYce6tUi+E6KCkVICGr+Jm+c+/APYfMFk5s4sWaa1zgRTxV5j28FyQpXT5nXjVid9IaYONClqrOS+kwCen9yO6xWr1aSCNx1YfCma/A6qmuzisCBfTTai4rqoOM1NfpFrJzmJkvBOf4yTAVOGwK8ZZfC1J1Xrx4EmQhgzyK7Yf3l1LuIVlcDkESa/sh6tFS9KY0Z/OmNol98zcluxi7+zhys+lKhJgdOZF7LfGdSiSpWQaSGZTYr3WbtRqLv8q44QD7t5DnpVd51CxtDJq0SpUODd/L/SdZqcfbe/15UQLhpEA+AeDz8r1vLSYNgpIFnYJgkJHoaIk+KZrmc3Sj2C2cIdqDWFQRY43WTdsu2Kfy82JfBocUHuC2Q1mSmw3dWbZ7skMhJi5+vHIF4X8E0PwhRvDCTLbfGpKbqDq+tSeXMmKcy+b8Sq9KrsDOvtwdPazDanUpRc3+v3px0Pi+wIyNQESgDS9iPLAjUvcRYDI29d4yPYrlFVSphLxBHCp1h2FVMPSyhUdfvyl6ASOKS8hSpSAZZwy09EJA6UGcBzPalJN9EexGuVY6ylPTk/Zxf5bfnFWaE7TG+eSR/BL7XP+WNkijbXIF8dL9/+kGmdQkE9rGw60gDiTLWVQSpLZGKLsPXUAdyC/ro/iZ/JA6M/aTlm9T+sJBS1SZH4mZv0LUjNkb64eiMREIiyJ7jMPblh4aDxOZPgRjB0lA0tcp0+Qjn8qTLONY4Ox+2AdyRKMbxR38DekmbeVDkHam/TLbX4L8nu6nIR81iJc0yMqgrX7hfe44FEVruUBTt5yhduoAxRkGOee9U",
      },
    };
    axios(config).then((resp) => console.log(resp));
  }
}

let rssx = new RSSXLineInfo();
rssx.getLineInfo();
