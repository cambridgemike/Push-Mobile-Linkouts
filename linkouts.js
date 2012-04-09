var Yelp = {
  test:     function(url){ return /yelp.com.biz/.test(url) },
  convert: function(url, pn){ pn.data.appUrl = "yelp://"+ url.split(".com")[1] }
}

var Gmaps = {
  test: function(url){ return /maps.google/.test(url) },
  convert: function(url, pn){ pn.data.appUrl = url; }
}

var Rdio = {
  test: function(url){ return /rdio.com/.test(url) },
  convert: function(url, pn){ 
    $.getJSON("http://www.rdio.com/api/oembed/?url=" + escape(url), function(data){
      url_string = $(data.html).attr('src')
      url_string = url_string.replace(/^http/, "rdio")
      url_string = url_string.replace(/\/?\?.*/,"") // Get rid of the search string
      url_string = url_string.replace(/\/\w\//, "/x/") // for whatever weird reason this must be an "x"
      pn.data.appUrl = url_string
    })
  }
}

var Instagram = {
  test: function(url){ return /instagr.am/.test(url) },
  convert: function(url, pn){ 
    $.getJSON("http://api.instagram.com/oembed?url=" + escape(url), function(data) {
        pn.data.appUrl = "instagram://media?id=" + data.media_id
      })
  }
}

var linkouts = [Yelp, Gmaps, Instagram, Rdio]
