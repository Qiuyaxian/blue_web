$(function(){
              var $bgMusic = $("#bgMusic");
              var $start = $('.start');
              var $stop = $('.stop');
              var $end = $('.end');
              var $flag = true;
              //页面打开时播放
              $bgMusic.get(0).play();
              //开始播放
              $start.on('click',function(){
              		$bgMusic.get(0).play();
              });
              //停止播放
              $stop.on('click',function(){
              	    $bgMusic.get(0).pause();
              });
              //静音
              $end.on('click',function(){
                   if($flag){
                   	  $bgMusic.get(0).muted=true;
                   }else{
                   	  $bgMusic.get(0).muted=false;
                   }
                   $flag=!$flag;
                   console.log($flag);
              });

              //音量
              var $volumeBar = $('.volumeBar');
              var $volumeBtn = $('.volumeBtn');
              var $playVolume = $('.play-volume')
              var $volumeBarWidth = $volumeBar.width();        
              var $volumeBtnWidth = $volumeBtn.width();
              var $length = $volumeBarWidth-$volumeBtnWidth;
              var $volumeSize = 0.5;
              $volumeBtn.on('mousedown',function(ev){
              	   var $volumeBtnLeft = $volumeBtn.position().left;
                   var disX = ev.clientX-$volumeBtnLeft;
                   $playVolume.on('mousemove',function(ev){
                   	   var x = ev.clientX;
                   	   var Left = x - disX;
                   	   if(Left<0){
                   	   	  Left=0;
                   	   }else if(Left > $volumeBarWidth-$volumeBtnWidth){
                   	   	  Left = $volumeBarWidth-$volumeBtnWidth;
                   	   }
                       $volumeBtn.css('left',Left);
                       $volumeSize = parseFloat(Left/$length);
                       $bgMusic.get(0).volume = $volumeSize;
                       //console.log($bgMusic.volume);
                   });
                   $playVolume.on('mouseup',function(ev){
                   	   $playVolume.off();
                   })  
              });
              
              //音频条
              var $duration = null;
              var $scale = 0;
              var $columnBarList = $('.columnBar_list');
              var aDivList = $columnBarList.find('.columnBar');
              $bgMusic.get(0).addEventListener('timeupdate',function(){
                  $duration = $bgMusic.get(0).duration;
                  $scale = ($bgMusic.get(0).currentTime / $duration).toFixed(2);
                   for(var i=0;i<aDivList.length;i++){
                   	   var $Height = $scale * (Math.random()*10)*8;
                   	   //$Height = $Height>=11?11:$Height;
                   	   if($Height >= 11){
                   	   	   $Height = 11;
                   	   }else{
                   	   	   $Height = $Height;
                   	   }
              	       aDivList.eq(i).css('height',$Height);
                   }
                   //结束时再次播放
	              if($bgMusic.get(0).ended){
	              	  
	              	  $bgMusic.get(0).loop=true;
	              };
              },false);
             
          })