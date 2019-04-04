mui.ready(function(){
			
	var fs = document.documentElement.clientWidth * 75 / 750 ;
    document.documentElement.style.fontSize = fs+"px";
      	
	mui(".mui-bar-tab").on("tap",".mui-tab-item",function(){
		var hr = this.getAttribute("href");
		console.info( this,hr );
		window.location.href = hr;
	})
	var items = document.querySelectorAll('.item')
	function show (index){
		for (var i=0;i<items.length;i++) {
			if (i == index) {
				items[i].style.opacity = 1
				items[i].style.zIndex = 10
			}else{
				items[i].style.opacity = 0
				items[i].style.zIndex = 0
			}
		}
	}
	var sum = 0
	setInterval(function(){
		sum = sum%3
		show(sum)
		sum++
	},2000)
})