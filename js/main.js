/*seajs.use('./js/',function(ex){

})*/


/*define(function(require,exports,module){
     var myFram = require('./myJquery');
     //console.log(myFram.myFrams());
     var aList = myFram.myFrams('#nav').find('a');
     aList.click(function(){
     	alert(1)
     });
});
*/

define(function(require,exports,module){
    
	var $aNav = document.getElementById('nav');
	var $aList = $aNav.getElementsByTagName('a');
    window.bBtn = true;
	
	window.onhashchange = function(){
		if(window.bBtn){
			window.location.reload();
		}
	};

	require('./show.js').show( $aNav , aDiv );
	
	require('./hide.js').hide( $aNav , aDiv );
})
