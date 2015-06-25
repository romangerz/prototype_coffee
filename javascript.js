
		$(document).ready(function()	{
			
			$(".boundary").mousemove(function(e) {
				var mousePos = e.clientX;
				var step = 800/4;
				var currentStep = Math.floor(mousePos/step);
				var positions = [0, -800, -1600, -2400, -3200];
				var currentPos = positions[currentStep];
				console.log(currentPos);
					$(".getraenk").removeClass("active");
					$(".getraenk:nth-child(" + (currentStep+1) + ")").addClass("active");

					$(".slider").css("transform", "translateX(" + currentPos + "px)");						
					
			});
//			$("latte").click(function() {
//				$(".settings").slideUp(function();
//				});
//			$("latte").click(function() {
//				$(".settings").hide();
//				});

			var laststep;
			
			var selection = 0;
			var mode = "";
			
			var _size = 3.0;
			var _intensity = 2.0;
			var _milk = 3.0;
			var _foam = 3.0;
			var currentValue1 = 0.0;
			var currentValue2 = 0.0;
			var currentValue3 = 0.0;
			var currentValue4 = 0.0;
		
			$(".setting1 .zahl").text(Math.ceil(_size));
			$(".setting2 .zahl").text(Math.ceil(_intensity));
			$(".setting3 .zahl").text(Math.ceil(_milk));
			$(".setting4 .zahl").text(Math.ceil(_foam));
			
			drawArc(_size / 3.001);	
			drawArc2(_intensity / 3.001);
			drawArc3(_milk / 3.001);
			drawArc4(_foam / 3.001);
			
			
			var oldselection = 0;
			var initMouseY = 0;
			
			$(".screen2").mousemove(function(e) {
				var mousePos = e.clientY;
				
				
				if (mode == "selecting")	{
					var step = 600/4;
					var currentStep = Math.floor(mousePos/step) + 0.999;
					var currentSelection = Math.ceil(currentStep);
					
					$(".setting-item").removeClass("active");
					$(".setting" + currentSelection).addClass("active");
					
					selection = currentSelection;
				}
				
				//if (mode == "editing")	{
				
					
					
					if(mode == "editing"){
						step == 600/3;
						if(oldselection != selection){
							initMouseY = mousePos;
						}
						
						
//hier werden die parameter des kaffeegetränkes vordefiniert
						
						if (selection == 1)	{
							_size = (mousePos - initMouseY)/280
							
							drawArc(Math.ceil(_size)/3);	
							$(".setting1 .zahl").text(Math.ceil(_size));
							
						} else if (selection == 2)	{
							
							_intensity = (mousePos - initMouseY)/280
							drawArc2(Math.ceil(_intensity)/3);
							$(".setting2 .zahl").text(Math.ceil(_intensity));
							
						} else if (selection == 3)	{
							
							_milk = (mousePos - initMouseY)/280
							drawArc3(Math.ceil(_milk)/3);
							$(".setting3 .zahl").text(Math.ceil(_milk));
							
						} else if (selection == 4)	{
							
							_foam = (mousePos - initMouseY)/280
							drawArc4(Math.ceil(_foam)/3);
							$(".setting4 .zahl").text(Math.ceil(_foam));
						}




					}
				
					
					oldselection = selection;
			//	}
				
				
/*
				if(laststep != currentStep){
					if (selection == 1)	{
						drawArc(currentStep/3.0);	
						$(".setting1 .zahl").text(Math.ceil(currentStep));
					} else if (selection == 2)	{
						drawArc2(currentStep/3.0);
						$(".setting2 .zahl").text(Math.ceil(currentStep));
					} else if (selection == 3)	{
						drawArc3(currentStep/3.0);
						$(".setting3 .zahl").text(Math.ceil(currentStep));
					} else if (selection == 4)	{
						drawArc4(currentStep/3.0);
						$(".setting4 .zahl").text(Math.ceil(currentStep));
					}
					
					console.log(currentStep)
					laststep = currentStep
					
				}	
*/			
//–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––				
			});
			
			$(".screen2").click(function(e) {
				if (mode != "selecting")	{
					mode = "selecting";
				} else if (mode == "selecting")	{
					mode = "editing";
				}
/*
				selection += 1;
				
				$(".setting-item").removeClass("active");
				
				if (selection == 1)	{
					$(".setting1").addClass("active");
				} else if (selection == 2)	{
					$(".setting2").addClass("active");
				} else if (selection == 3)	{
					$(".setting3").addClass("active");
				} else if (selection == 4)	{
					$(".setting4").addClass("active");
				}
*/
			});

			$("body").mousedown(function(e){ 
				$(".screen2")[0].style.visibility = "visible"; //screen2 einblenden
			});	
			

		
			// Lets create big circle in the middle:

//––––––––––––––––––––––––svg––––––––––––––––––––––––
			function drawArc(percent) {
			    var endpoint = percent*360;
			 		if(currentValue1 != endpoint){
				 		// video
				 		
				 		Snap.animate(currentValue1, endpoint, function (val) {
				        arc.remove();
				
				        var d = val,
				            dr = d-90;
				            radians = Math.PI*(dr)/180,
				            endx = centre + radius*Math.cos(radians),
				            endy = centre + radius * Math.sin(radians),
				            largeArc = d>180 ? 1 : 0;  
				            path = "M"+centre+","+startY+" A"+radius+","+radius+" 0 "+largeArc+",1 "+endx+","+endy;
				  
				        arc = s.path(path);
				        
				        arc.attr({
				          stroke: '#ffffff',
				          fill: 'none',
				          strokeWidth: 3
				        });
				        
				        currentValue1 = endpoint
	
				    }, 300, mina.easeinout);  
				  }
			}
			
			var canvasSize = 50,
				centre = 100/2,
			    radius = 50*.8/2,
			    s = Snap('.svg'),
			    path = "",
			    arc = s.path(path),    
			    startY = centre-radius
			    
						
//––––––––––––––––––––––––svg2––––––––––––––––––––––––

			function drawArc2(percent) {
			    var endpoint = percent*360;
			    
			    Snap.animate(currentValue2, endpoint, function (val) {
			        arc2.remove();
			
			        var d = val,
			            dr = d-90;
			            radians = Math.PI*(dr)/180,
			            endx = centre + radius*Math.cos(radians),
			            endy = centre + radius * Math.sin(radians),
			            largeArc = d>180 ? 1 : 0;  
			            path = "M"+centre+","+startY+" A"+radius+","+radius+" 0 "+largeArc+",1 "+endx+","+endy;
			  
			        arc2 = s2.path(path);
			        
			        arc2.attr({
			          stroke: '#ffffff',
			          fill: 'none',
			          strokeWidth: 3
			        });
			        
			        currentValue2 = endpoint
			
			    }, 300, mina.easeinout);  
			}
			
			var canvasSize = 50,
				centre = 100/2,
			    radius = 50*.8/2,
			    s2 = Snap('.svg2'),
			    path = "",
			    arc2 = s2.path(path),    
			    startY = centre-radius
			    
	
			
//––––––––––––––––––––––––svg3––––––––––––––––––––––––    

			function drawArc3(percent) {
			    var endpoint = percent*360;
			    
			    Snap.animate(currentValue3, endpoint, function (val) {
			        arc3.remove();
			
			        var d = val,
			            dr = d-90;
			            radians = Math.PI*(dr)/180,
			            endx = centre + radius*Math.cos(radians),
			            endy = centre + radius * Math.sin(radians),
			            largeArc = d>180 ? 1 : 0;  
			            path = "M"+centre+","+startY+" A"+radius+","+radius+" 0 "+largeArc+",1 "+endx+","+endy;
			  
			        arc3 = s3.path(path);
			        
			        arc3.attr({
			          stroke: '#ffffff',
			          fill: 'none',
			          strokeWidth: 3
			        });
			        
			        currentValue3 = endpoint
			
			    }, 300, mina.easeinout);  
			}
			
			var canvasSize = 50,
				centre = 100/2,
			    radius = 50*.8/2,
			    s3 = Snap('.svg3'),
			    path = "",
			    arc3 = s3.path(path),    
			    startY = centre-radius
			    
				
			
//––––––––––––––––––––––––svg4––––––––––––––––––––––––    

			function drawArc4(percent) {
			    var endpoint = percent*360;
			    
			    Snap.animate(currentValue4, endpoint, function (val) {
			        arc4.remove();
			
			        var d = val,
			            dr = d-90;
			            radians = Math.PI*(dr)/180,
			            endx = centre + radius*Math.cos(radians),
			            endy = centre + radius * Math.sin(radians),
			            largeArc = d>180 ? 1 : 0;  
			            path = "M"+centre+","+startY+" A"+radius+","+radius+" 0 "+largeArc+",1 "+endx+","+endy;
			  
			        arc4 = s4.path(path);
			        
			        arc4.attr({
			          stroke: '#ffffff',
			          fill: 'none',
			          strokeWidth: 3
			        });
			        
			        currentValue4 = endpoint
			
			    }, 300, mina.easeinout);  
			}
			
			var canvasSize = 50,
				centre = 100/2,
			    radius = 50*.8/2,
			    s4 = Snap('.svg4'),
			    path = "",
			    arc4 = s4.path(path),    
			    startY = centre-radius
			    	
						
		});	


	
