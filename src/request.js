module.exports = {
  request: function(url, params) {
    var myHeaders = new Headers({
      'TOKEN': localStorage.getItem('token')
    });

    function status(response) {  
      if (response.status >= 200 && response.status < 300) {  
        return Promise.resolve(response);
      } else {  
        return Promise.reject(new Error(response.statusText));
      }  
    }

    function wrap(response) {
      return response.text().then(function(text) {
        var firstChar = text.charAt(0);
        if (firstChar == '{' ||　firstChar == '[') {
          return Promise.resolve(JSON.parse(text));
        } else {
          return Promise.resolve({text: text});
        }
      });
    }

    function json(response) {
      console.log(response);
      return response.json();
    }

    var args = {
      headers: myHeaders,
      mode: 'cors',
      method: 'GET'
    };
    return fetch(url, Object.assign(args, params))
      .then(status)
      .then(wrap)
      .then(function(response) {
        if (response.status == 1) {
          window.location.hash = '/login';
          return false;
        }
        if (response.status == 0 || response.status == 200) {
          return Promise.resolve(response.data);
        } else {
          return Promise.reject(response);
        }
      });
  }
};