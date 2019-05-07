
	   $(function(){
			   	   var $wrap = $('#wrap');
			   	   var $logoIcon = $('#logo');
			   	   var $NavLogo = $("#nav").find('a');
			   	   var $NavLogoOffsetTop = $NavLogo.offset().top;
			   	   var $NavLogoOffsetLeft = $NavLogo.offset().left;

			   	   var $header = $('#header');
			   	   var $headerWidth = $header.width();

			   	   var $headerHeight = $header.height();
			   	   $header.css({
			   	   		'width':0,
			   	   		'height':0,
			   	   		'display':'none',
			   	   		'opacity':0
			   	   });
			   	   var $content = $('#content');
			   	   var $contentWidth = $content.width();
			   	   var $contentHeight = $content.height();

			   	   //下面各个小部分显示
			   	   var $project = $content.find('.project');
			   	   var $projectWidth = $project.outerWidth();
			   	   var $projectHeight = $project.outerHeight();
			   	   $project.css({
			   	   	  'height':0,
			   	   	  'opacity':0
			   	   })
			   	   var $services = $content.find('.services');
			   	   var $servicesWidth = $services.outerWidth();
			   	   var $servicesHeight = $services.outerHeight();
			   	   $services.css({
			   	   	  'height':0,
			   	   	  'opacity':0
			   	   })
			   	   var $quotes = $content.find('.quotes');
			   	   var $quotesWidth = $quotes.outerWidth();
			   	   var $quotesHeight = $quotes.outerHeight();
			   	   $quotes.css({
			   	   	  'height':0,
			   	   	  'opacity':0
			   	   })
			   	   var $events = $content.find('.events');
			   	   var $eventsWidth = $events.outerWidth();
			   	   var $eventsHeight = $events.outerHeight();
			   	   $events.css({
			   	   	  'height':0,
			   	   	  'opacity':0
			   	   })
			   	   var $price = $content.find('.price');
			   	   var $priceWidth = $price.outerWidth();
			   	   var $priceHeight = $price.outerHeight();
			   	   $price.css({
			   	   	  'height':0,
			   	   	  'opacity':0
			   	   })
			   	   $content.css({
			   	   		'width':0,
			   	   		'height':0,
			   	   		'display':'none',
			   	   		'opacity':0
			   	   });
			   	   var $footer = $('#footer');
			   	   var $footerWidth = $footer.width();
			   	   var $footerHeight = $footer.height();
			   	    $footer.css({
			   	   		'width':0,
			   	   		'height':0,
			   	   		'display':'none',
			   	   		'opacity':0
			   	   });

			   	   $wrap.css('display','none');
			   	   var $clientWidth = $(window).width();
			   	   var $clientHeight = $(window).height();
			   	   var $logoIconHeight = $logoIcon.height();
			   	   var $logoIconWidth =	$logoIcon.width();

			   	   $logoIcon.css({
			   	   	  	"left":($clientWidth-$logoIconWidth)/2,
			   	   	  	"top":($clientHeight-$logoIconHeight)/2,
			   	   	  	"opacity":0
			   	   });
			   	   $logoIcon.animate({
			   	   		"opacity":1
			   	   },1000).delay(100);
			  
			   		var $str = "BUSINESSCOMPANY";
			   		var i=0;
			   		var $outStrt = '';
			   		var timer=setInterval(function(){
			   			if(i == $str.length-1){
			   				clearInterval(timer);
			   			}
			   			$outStrt+=$str[i];
			   			$logoIcon.find('a').html($outStrt);
			   			i++
			   		}, 100);
			   		$logoIcon.delay(1000).animate({
			   			'top':$NavLogoOffsetTop
			   		},1000,function(){
			   			$logoIcon.delay(800).animate({
			   				'left':$NavLogoOffsetLeft
			   			},100,function(){
			   				$('.loading').remove();
			   				$wrap.css('display',"block");
			   			})
			   		});
			   		$header.css('display',"block");
			   		$header.animate({
			   			'width':$headerWidth,
			   			'height':$headerHeight,
			   			'opacity':1
			   		},2000,"linear",function(){
			   			$content.css('display',"block");
				   		$content.animate({
				   			'width':$contentWidth,
				   			'height':$contentHeight,
				   			'opacity':1
				   		},3000,"linear",function(){
				   				$footer.css('display',"block");
						   		$footer.animate({
						   			'width':$footerWidth,
						   			'height':$footerHeight,
						   			'opacity':1
						   		},2000,"linear");
				   		});
			   		});

			   		//显示各个部件
			   		$project.animate({
				   		'height':$projectHeight,
				   		'opacity':1
				   	},300,"linear",function(){
				   		$services.animate({
					   		'height':$servicesHeight,
					   		'opacity':1
					   	},300,"linear",function(){
					   		$quotes.animate({
						   		'height':$quotesHeight,
						   		'opacity':1
						   	},300,"linear",function(){
						   		$events.animate({
							   		'height':$eventsHeight,
							   		'opacity':1
							   	},300,"linear",function(){
							   		$price.animate({
								   		'height':$priceHeight,
								   		'opacity':1
								   	},300,"linear");
							   	});
						   	});
					   	});
				   	});
		});



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
		});
