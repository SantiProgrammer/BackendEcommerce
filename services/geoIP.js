/* const axios = require('axios')
axios
    .get(
        'https://ipgeolocation.abstractapi.com/v1/?api_key=d519468ac1a440e19652c37af495d296&ip_address=2806:2f0:91a0:e099:a902:1822:9fb1:3524'
    )
    .then((response) => {
        console.log(response.data)
    })
    .catch((error) => {
        console.log(error)
    })




              function httpGetAsync(url, callback) {
                  const xmlHttp = new XMLHttpRequest()
                  xmlHttp.onreadystatechange = function () {
                      if (xmlHttp.readyState === 4 && xmlHttp.status === 200)
                          callback(xmlHttp.responseText)
                  }
                  xmlHttp.open('GET', url, true) // true for asynchronous
                  xmlHttp.send(null)
              }

              const url =
                  'https://ipgeolocation.abstractapi.com/v1/?api_key=d519468ac1a440e19652c37af495d296&ip_address=2806:2f0:91a0:e099:a902:1822:9fb1:3524'

              httpGetAsync(url) */