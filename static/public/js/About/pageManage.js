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
      setTimeout(function(){
        return _allChoose[0].parentNode.scrollIntoView();
      }, 0);
      return _togglePageCallback(seqNum);
    }
  };
}.call(this));
module.exports = pageManage;