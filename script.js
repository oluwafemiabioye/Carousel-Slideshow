var maining=document.querySelector("img");
var images=["bg1.jpg","bg2.jpg","bg3.jpg","bg4.jpg","bg5.jpg","bg6.jpg"]
var num=0;

	function next(){
		num++;
		if (num>=images.length){
			num=0;
			maining.src=images[num]
		}else{
			maining.src=images[num]
		}
	};

	function back(){
		num--;
		if (num<0){
			num=images.length-1;
			maining.src=images[num]
		}else{
			maining.src=images[num]
		}
	};