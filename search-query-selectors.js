{
  "Google Search": {
    "querySelector": {
      "phone": ".mnr-c .yuRUbf a.sXtWJb, .mnr-c a.cz3goc.BmP5tf, .MjjYud a.cz3goc.BmP5tf",
      "pad": ".hlcw0c .yuRUbf > a",
      "desktop": "#center_col div:not(.kp-blk *) > .yuRUbf > a cite",
      "result_container_selector": "[data-hveid]",
      "featured": [".kp-blk.c2xzTb .yuRUbf > a"],
      "highlight": ".MBeuO"
    },
    "search_engine_json": {
      "is_web_search": true,
      "override_required_params": {
        "q": ".*",
        "ie": ".*",
        "oe": ".*",
        "hl": ".*",
        "client": ".*"
      },
      "required_params": ["q"],
      "required_prefix": "google.com/search",
      "match_prefix": "google(\\.\\w+){1,}\/search"
    }
  },
  "DuckDuckGo": {
    "querySelector": {
      "phone": ".results a[data-testid=\"result-title-a\"]",
      "pad": ".results a[data-testid=\"result-title-a\"]",
      "desktop": ".results a[data-testid=\"result-title-a\"]",
      "result_container_selector": ".result__body",
      "featured": [],
      "highlight": ""
    },
    "search_engine_json": {
      "is_web_search": true,
      "override_required_params": {
        "q": ".*",
        "t": "iphone|ipad"
      },
      "required_params": ["q"],
      "required_prefix": "duckduckgo.com",
      "match_prefix": "duckduckgo.com"
    }
  },
  "Bing": {
    "querySelector": {
      "phone": ".b_attribution cite",
      "pad": ".b_attribution cite",
      "desktop": ".b_attribution cite",
      "result_container_selector": ".b_algo",
      "featured": [],
      "highlight": ""
    },
    "search_engine_json": {
      "is_web_search": true,
      "override_required_params": {
        "q": ".*",
        "form": ".*",
        "PC": ".*"
      },
      "required_params": ["q"],
      "required_prefix": "bing.com/search",
      "match_prefix": "bing(\\.com)?(\\.\\w+)?\/search"
    }
  },
  "Amazon US": {
    "querySelector": {
      "desktop": "",
      "featured": [],
      "pad": "",
      "phone": "",
      "result_container_selector": "",
      "highlight": ""
    },
    "search_engine_json": {
      "is_web_search": false,
      "override_required_params": {},
      "required_params": ["k"],
      "required_prefix": "amazon.com/s",
      "match_prefix": "amazon(\\.com)?(\\.\\w+)?\/s"
    }
  },
  "Ecosia": {
    "querySelector": {
      "desktop": "div:not(.card-ad) > .result .result-url",
      "featured": [],
      "pad": "div:not(.card-ad) > .result .result-url",
      "phone": "div:not(.card-ad) > .result .result-url",
      "result_container_selector": ".result",
      "highlight": ""
    },
    "search_engine_json": {
      "is_web_search": true,
      "override_required_params": {
      	"q": ".*",
	"tts": ".*"
      },
      "required_params": ["q"],
      "required_prefix": "ecosia.org/search",
      "match_prefix": "ecosia\\.org\/search"
    }
  },
  "Neeva": {
    "querySelector": {
      "desktop": "div[data-gtid=result-item] .web-index__linkTitle-oESam a",
      "featured": [],
      "pad": "div[data-gtid=result-item] .web-index__linkTitle-oESam a",
      "phone": "div[data-gtid=result-item] .web-index__linkTitle-oESam a",
      "result_container_selector": ".result-container__wrapper-38pV8",
      "highlight": ""
    },
    "search_engine_json": {
      "is_web_search": true,
      "override_required_params": {},
      "required_params": ["q"],
      "required_prefix": "neeva.com/search",
      "match_prefix": "neeva\\.com\/search"
    }
  },
  "Brave": {
    "querySelector": {
      "desktop": "#results .snippet a.result-header",
      "featured": [],
      "pad": "#results .snippet a.result-header",
      "phone": "#results .snippet a.result-header",
      "result_container_selector": "#results .snippet",
      "highlight": ""
    },
    "search_engine_json": {
      "is_web_search": true,
      "override_required_params": {},
      "required_params": ["q"],
      "required_prefix": "search.brave.com/search",
      "match_prefix": "search\\.brave\\.com(\\.\\w+)?\/search"
    }
  },
  "Startpage": {
    "querySelector": {
      "desktop": "",
      "featured": [],
      "pad": ".w-gl__result__main a.w-gl__result-title.result-link",
      "phone": ".w-gl__result__main a.w-gl__result-title.result-link",
      "result_container_selector": ".w-gl__result__main",
      "highlight": ""
    },
    "search_engine_json": {
      "is_web_search": true,
      "override_required_params": {},
      "required_params": ["query"],
      "required_prefix": "startpage.com/sp/search",
      "match_prefix": "startpage\\.com\/sp\/search",
      "other_params": {
        "cat": "web",
      	"pl": "opensearch",
	      "language": "english"
      }
    }
  },
  "Qwant": {
    "querySelector": {
      "desktop": "",
      "featured": [],
      "pad": "",
      "phone": "",
      "result_container_selector": "",
      "highlight": ""
    },
    "search_engine_json": {
      "is_web_search": true,
      "override_required_params": {},
      "required_params": ["q"],
      "required_prefix": "qwant.com",
      "match_prefix": "qwant\\.com\\?q",
      "other_params": {
        "client": "opensearch"
      }
    }
  },
  "Mojeek": {
    "querySelector": {
      "desktop": "",
      "featured": [],
      "pad": ".results-standard a.ob",
      "phone": ".results-standard a.ob",
      "result_container_selector": "li",
      "highlight": ""
    },
    "search_engine_json": {
      "is_web_search": true,
      "override_required_params": {},
      "required_params": ["q"],
      "required_prefix": "mojeek.com/search",
      "match_prefix": "mojeek\\.com\/search\\?q",
      "other_params": {}
    }
  },
  "You": {
    "querySelector": {
      "desktop": "",
      "featured": [],
      "pad": ".app_container__Qh1ws .app_content__Tr2HC a",
      "phone": ".app_container__Qh1ws .app_content__Tr2HC a",
      "result_container_selector": "",
      "highlight": ""
    },
    "search_engine_json": {
      "is_web_search": true,
      "override_required_params": {},
      "required_params": ["q"],
      "required_prefix": "you.com/search",
      "match_prefix": "you\\.com\/search\\?q",
      "other_params": {}
    }
  },
  "Baidu": {
    "querySelector": {
      "desktop": "",
      "featured": [],
      "pad": "",
      "phone": "",
      "result_container_selector": "",
      "highlight": ""
    },
    "search_engine_json": {
      "is_web_search": true,
      "override_required_params": {
        "from": ".*",
        "word": ".*"
      },
      "required_params": ["word"],
      "required_prefix": "m.baidu.com/s",
      "match_prefix": "(m\\.)?baidu\\.com\/s",
      "other_params": {}
    }
  },
  "Sogou": {
    "querySelector": {
      "desktop": "",
      "featured": [],
      "pad": "",
      "phone": "",
      "result_container_selector": "",
      "highlight": ""
    },
    "search_engine_json": {
      "is_web_search": true,
      "override_required_params": {
        "keyword": ".*",
        "v": ".*"
      },
      "required_params": ["keyword"],
      "required_prefix": "m.sogou.com/web/sl",
      "match_prefix": "(m\\.)?sogou\\.com\/web\/sl",
      "other_params": {}
    }
  },
  "360 Search": {
    "querySelector": {
      "desktop": "",
      "featured": [],
      "pad": "",
      "phone": "",
      "result_container_selector": "",
      "highlight": ""
    },
    "search_engine_json": {
      "is_web_search": true,
      "override_required_params": {
        "q": ".*",
        "src": ".*",
        "srcg": ".*"
      },
      "required_params": ["q"],
      "required_prefix": "m.so.com/s",
      "match_prefix": "(m\\.)?so\\.com\/s",
      "other_params": {}
    }
  },
  "Yahoo": {
    "querySelector": {
      "desktop": "",
      "featured": [],
      "pad": "",
      "phone": "",
      "result_container_selector": "",
      "highlight": ""
    },
    "search_engine_json": {
      "is_web_search": true,
      "override_required_params": {
        "p": ".*",
        "fr": ".*",
        ".tsrc": ".*"
      },
      "override_required_pad_params": {
        "p": ".*",
        "fr": ".*"
      },
      "required_params": ["p"],
      "required_prefix": "search.yahoo.com/search",
      "match_prefix": "search\\.yahoo\\.com\/search",
      "other_params": {}
    }
  }
}
