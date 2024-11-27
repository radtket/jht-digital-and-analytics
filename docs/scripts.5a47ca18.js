// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"DOAq":[function(require,module,exports) {

},{}],"L4MM":[function(require,module,exports) {

},{"./../images/background.png":[["background.1f5a153e.png","DW13"],"DW13"],"./../images/curv.png":[["curv.c29d10b2.png","gC7F"],"gC7F"]}],"g2Hq":[function(require,module,exports) {
"use strict";

require("normalize.css");
require("../styles/index.scss");
// Navbar Scroll
window.addEventListener("scroll", function () {
  var scrollTop = Math.round(window.scrollY);
  var topnav = document.querySelector(".topnav");
  if (scrollTop > 49) {
    topnav.classList.add("topnav-fixed");
  } else {
    topnav.classList.remove("topnav-fixed");
  }
});
var makeNavLinksSmooth = function makeNavLinksSmooth() {
  var navLinks = document.querySelectorAll(".scoll-link");
  Object.values(navLinks).forEach(function (item) {
    item.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(item.hash).scrollIntoView({
        behavior: "smooth"
      });
    });
  });
};
var spyScrolling = function spyScrolling() {
  var sections = document.querySelectorAll(".page-section");
  window.onscroll = function () {
    var scrollPos = document.documentElement.scrollTop || document.body.scrollTop;
    Object.values(sections).forEach(function (_ref) {
      var offsetTop = _ref.offsetTop,
        id = _ref.id;
      if (offsetTop <= scrollPos) {
        document.querySelector(".active").classList.remove("active");
        document.querySelector("a[href*=".concat(id, "]")).classList.add("active");
      }
    });
  };
};
makeNavLinksSmooth();
spyScrolling();
var intervalId = 0; // Needed to cancel the scrolling when we're at the top of the page

document.querySelector(".scroll").addEventListener("click", function () {
  intervalId = setInterval(function () {
    if (window.pageYOffset === 0) {
      clearInterval(intervalId);
    }
    window.scroll(0, window.pageYOffset - 50);
  }, 16.66);
});

// Modal
var modalTriggers = document.querySelectorAll("[data-modal-for]");
Object.values(modalTriggers).forEach(function (trigger) {
  var modal = document.getElementById(trigger.dataset.modalFor);
  trigger.addEventListener("click", function () {
    if (trigger.hasAttribute("open")) {
      modal.showModal();
      document.querySelector("body").classList.add("scroll-lock");
    }
    if (trigger.hasAttribute("close")) {
      modal.close();
      document.querySelector("body").classList.remove("scroll-lock");
    }
  });
});
},{"normalize.css":"DOAq","../styles/index.scss":"L4MM"}]},{},["g2Hq"], null)
//# sourceMappingURL=scripts.5a47ca18.js.map