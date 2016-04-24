(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// Generated by LiveScript 1.4.0
(function(win, doc){
  var _initAllModule, _initAll;
  _initAllModule = function(){
    var page, main;
    page = require("./pageManage.js");
    page.initial();
    main = require("./mainManage.js");
    main.initial();
  };
  _initAll = function(){
    return _initAllModule();
  };
  _initAll();
}.call(this, window, document));
},{"./mainManage.js":2,"./pageManage.js":3}],2:[function(require,module,exports){
// Generated by LiveScript 1.4.0
var mainManage;
mainManage = (function(){
  var rotateDisplay, page, _initDependModule, _initRotate, _initPageToggle;
  rotateDisplay = null;
  page = null;
  _initDependModule = function(){
    rotateDisplay = require("./rotateDisplay.js");
    page = require("./pageManage.js");
  };
  _initRotate = function(){
    var elem, i$, ref$, len$, i, dom;
    elem = [0, 1, 2, 3, 4];
    for (i$ = 0, len$ = (ref$ = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99]).length; i$ < len$; ++i$) {
      i = ref$[i$];
      elem.sort(fn$);
    }
    for (i$ = 0, len$ = (ref$ = $(".pic-display-list li .display-pic")).length; i$ < len$; ++i$) {
      i = i$;
      dom = ref$[i$];
      dom.style.backgroundImage = "url('/images/rotate/rotate-" + elem[i] + ".jpg')";
    }
    new rotateDisplay({
      displayCSSSelector: ".pic-display-list",
      chooseCSSSelector: ".pic-controll-list",
      delay: 3000,
      leftArrowCSSSelector: ".left-arrow",
      rightArrowCSSSelector: ".right-arrow"
    });
    function fn$(a, b){
      var ref$;
      return (ref$ = Math.random() > 0.5) != null
        ? ref$
        : {
          a: b
        };
    }
  };
  _initPageToggle = function(){
    var _allChoose, i$, len$;
    _allChoose = $("#all-info .choose-list li");
    for (i$ = 0, len$ = _allChoose.length; i$ < len$; ++i$) {
      (fn$.call(this, i$, _allChoose[i$]));
    }
    function fn$(i, dom){
      console.log(i);
      $(dom).click(function(){
        return page.togglePage(i);
      });
    }
  };
  return {
    initial: function(){
      _initDependModule();
      _initRotate();
      _initPageToggle();
    }
  };
}.call(this));
module.exports = mainManage;
},{"./pageManage.js":3,"./rotateDisplay.js":4}],3:[function(require,module,exports){
// Generated by LiveScript 1.4.0
var pageManage;
pageManage = (function(){
  var _state, _allChoose, _allContent, _unchooseAll, _hideAll, _togglePageCallback;
  _state = null;
  $("#istargene-head-nav .choose-container li#about-page-field").addClass("choose");
  _allChoose = $("#all-info .choose-list li");
  _allContent = $("#all-info .info-list li");
  _unchooseAll = function(){
    return _allChoose.each(function(){
      return $(this).removeClass("choose");
    });
  };
  _hideAll = function(){
    return _allContent.each(function(){
      return $(this).fadeOut(200);
    });
  };
  _togglePageCallback = function(seqNum){
    console.log(seqNum);
    _unchooseAll();
    _hideAll();
    $(_allChoose[seqNum]).addClass("choose");
    return setTimeout(function(){
      return $(_allContent[seqNum]).fadeIn(200);
    }, 200);
  };
  return {
    initial: function(){},
    togglePage: function(seqNum){
      return _togglePageCallback(seqNum);
    }
  };
}.call(this));
module.exports = pageManage;
},{}],4:[function(require,module,exports){
// Generated by LiveScript 1.4.0
var rotateDisplay;
rotateDisplay = (function(){
  var ref$, deepCopy, query, addListener, querys, picWidth, compatibleCSSConfig, Base, rotateDisplay;
  ref$ = [util.deepCopy, util.query, util.addListener, util.querys], deepCopy = ref$[0], query = ref$[1], addListener = ref$[2], querys = ref$[3];
  picWidth = 1023;
  compatibleCSSConfig = ["", "-webkit-", "-moz-", "-ms-", "-o-"];
  Base = (function(){
    Base.displayName = 'Base';
    var prototype = Base.prototype, constructor = Base;
    function Base(options){
      deepCopy(options, this);
      this.init();
    }
    prototype.init = function(){};
    return Base;
  }());
  rotateDisplay = (function(superclass){
    var _getCompatibleTranslateCss, _getCompatibleDurationCss, _autoRotateEvent, prototype = extend$((import$(rotateDisplay, superclass).displayName = 'rotateDisplay', rotateDisplay), superclass).prototype, constructor = rotateDisplay;
    _getCompatibleTranslateCss = function(ver, hor){
      var result_, i$, ref$, len$, config;
      result_ = {};
      for (i$ = 0, len$ = (ref$ = compatibleCSSConfig).length; i$ < len$; ++i$) {
        config = ref$[i$];
        result_[config + "transform"] = "translate3d(" + ver + ", " + hor + ", 0)";
      }
      return result_;
    };
    _getCompatibleDurationCss = function(isMove){
      var result_, i$, ref$, len$, config;
      isMove == null && (isMove = false);
      result_ = {};
      if (isMove) {
        for (i$ = 0, len$ = (ref$ = compatibleCSSConfig).length; i$ < len$; ++i$) {
          config = ref$[i$];
          result_[config + "transition"] = "all 0 linear";
        }
      } else {
        for (i$ = 0, len$ = (ref$ = compatibleCSSConfig).length; i$ < len$; ++i$) {
          config = ref$[i$];
          result_[config + "transition"] = "all 0.3s ease-in-out";
        }
      }
      return result_;
    };
    _autoRotateEvent = function(rotateDisplay){
      var self, index;
      self = rotateDisplay;
      if (!self._autoFlag) {
        self._autoFlag = true;
      } else {
        index = (self.currentChoose + 1) % self.activityNum;
        self.setCurrentChooseAndTranslate(index);
      }
      return setTimeout(function(){
        return _autoRotateEvent(self);
      }, self.delay);
    };
    function rotateDisplay(options){
      this.displayUlDom = query(options.displayCSSSelector);
      this.chooseUlDom = query(options.chooseCSSSelector);
      this.leftArrowDom = query(options.leftArrowCSSSelector);
      this.rightArrowDom = query(options.rightArrowCSSSelector);
      rotateDisplay.superclass.call(this, options);
    }
    prototype.init = function(){
      this.initDisplay();
      this.initChoose();
      return this.initAutoRotate();
    };
    prototype.initDisplay = function(){
      var i$, ref$, len$, dom;
      this.displayContainerDom = this.displayUlDom.parentNode;
      this.displayContainerDom.style.overflowX = "hidden";
      this.allDisplayDom = querys("li", this.displayUlDom);
      for (i$ = 0, len$ = (ref$ = this.allDisplayDom).length; i$ < len$; ++i$) {
        dom = ref$[i$];
        dom.style.width = picWidth + "px";
      }
      this.activityNum = this.allDisplayDom.length;
      return this.displayUlDom.style.width = picWidth * this.activityNum + "px";
    };
    prototype.initChoose = function(){
      var self, i$, ref$, len$;
      this.chooseUlDom.parentNode.style.overflow = "hidden";
      self = this;
      this.allChooseDom = querys("li", this.chooseUlDom);
      this.currentChoose = 0;
      this.allChooseDom[0].className = "active";
      for (i$ = 0, len$ = (ref$ = this.allChooseDom).length; i$ < len$; ++i$) {
        (fn$.call(this, i$, ref$[i$]));
      }
      addListener(this.leftArrowDom, "click", function(e){
        e.preventDefault();
        e.stopPropagation();
        self._autoFlag = false;
        return self.setCurrentChooseAndTranslate(self.currentChoose - 1);
      });
      return addListener(this.rightArrowDom, "click", function(e){
        e.preventDefault();
        e.stopPropagation();
        self._autoFlag = false;
        return self.setCurrentChooseAndTranslate(self.currentChoose + 1);
      });
      function fn$(i, dom){
        addListener(dom, "click", function(e){
          e.preventDefault();
          e.stopPropagation();
          self._autoFlag = false;
          return self.setCurrentChooseAndTranslate(i);
        });
      }
    };
    prototype.initAutoRotate = function(){
      var self;
      self = this;
      this._autoFlag = true;
      return setTimeout(function(){
        return _autoRotateEvent(self);
      }, self.delay);
    };
    prototype.setCurrentChoose = function(index){
      this.allChooseDom[this.currentChoose].className = "inactive";
      this.allChooseDom[index].className = "active";
      return this.currentChoose = index;
    };
    prototype.setTransitionForDisplayUlDom = function(isMove){
      var compatibleDurationCss, key, value, results$ = [];
      compatibleDurationCss = _getCompatibleDurationCss(isMove);
      for (key in compatibleDurationCss) {
        value = compatibleDurationCss[key];
        results$.push(this.displayUlDom.style[key] = value);
      }
      return results$;
    };
    prototype.translateForDisplayUlDom = function(ver, hor){
      var compatibleTranslateCss, key, value, results$ = [];
      ver == null && (ver = 0);
      hor == null && (hor = 0);
      compatibleTranslateCss = _getCompatibleTranslateCss(ver, hor);
      for (key in compatibleTranslateCss) {
        value = compatibleTranslateCss[key];
        results$.push(this.displayUlDom.style[key] = value);
      }
      return results$;
    };
    prototype.setCurrentChooseAndTranslate = function(index){
      var transIndex;
      index = (index + this.activityNum) % this.activityNum;
      transIndex = -1 * index;
      this.translateForDisplayUlDom(transIndex * picWidth + "px", 0);
      return this.setCurrentChoose(index);
    };
    return rotateDisplay;
  }(Base));
  return rotateDisplay;
}.call(this));
module.exports = rotateDisplay;
function extend$(sub, sup){
  function fun(){} fun.prototype = (sub.superclass = sup).prototype;
  (sub.prototype = new fun).constructor = sub;
  if (typeof sup.extended == 'function') sup.extended(sub);
  return sub;
}
function import$(obj, src){
  var own = {}.hasOwnProperty;
  for (var key in src) if (own.call(src, key)) obj[key] = src[key];
  return obj;
}
},{}]},{},[1]);
