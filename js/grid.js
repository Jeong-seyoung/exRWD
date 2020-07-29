(function(){
  'use strict';
  var gridToggleClass = function(e){
    var gridSystem= document.querySelector('.gridSystem');
    if(e.keyCode===27){
      gridSystem.classList.toggle('isActive');
    }
  };
  window.addEventListener('keyup',gridToggleClass);
})(window);

//(function 모듈이름(){
//  'use strict';
//  var gridToggleClass=function (params) {
//var gridSystem=document.querySelecter돔객체 설정.실행할메소드('.gridSystem'변수)    
//  if(e.keycode===k){

//}
// };
//window.addEventListener('keyup',gridToggleClass) 이벤트 바인딩
//})(window); window는 생략 가능