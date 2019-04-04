mui.ready(function(){
			
	var fs = document.documentElement.clientWidth * 75 / 750 ;
    document.documentElement.style.fontSize = fs+"px";
      	
	mui(".mui-bar-tab").on("tap",".mui-tab-item",function(){
		var hr = this.getAttribute("href");
		console.info( this,hr );
		window.location.href = hr;
	})
})