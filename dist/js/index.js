  var frm0 =document.querySelectorAll(".frm");
	var frm1 =document.querySelector(".frm1");
	var frm2 =document.querySelector(".frm2");
	var frm3 =document.querySelector(".frm3");
	var frm4 =document.querySelector(".frm4");
	var ipt1 =document.querySelectorAll(".into-shop-n");
	console.log(ipt1)
	var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        autoplay: 2000,
    });
    var ps = document.querySelectorAll("#wplm p");
    var spans = document.querySelectorAll("#fts span");
    var uls = document.querySelectorAll("#wp ul");
  // uls.style.display = 'none';
    var timer=null;
  for(var i=0;i<ps.length;i++){
    ps[i].index = i;
    clearTimeout(timer);
    ps[i].onmouseover=function(){      
        this.className = 'hover';
      uls[this.index].style.display='block';
    }
    ps[i].onmouseout=function(){
      this.className = '';
      n=this.index;
      timer=setTimeout(function(){
        uls[n].style.display='none';
        },200);
    }
    uls[i].onmouseover=function(){
      clearTimeout(timer);
      this.style.display = 'block';
    }
    uls[i].onmouseout=function(){
      this.style.display = 'none';
    }
  }
        for (var j = 0; j < spans.length; j++) {
            spans[j].index=j;
            spans[j].onclick=function(){
  var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = callBack;
        xhr.open("GET", "json"+this.index+".json", true);
        xhr.send();
        function callBack(){
            if (xhr.status == 200 || xhr.status == 304) {
                if (xhr.readyState == 4) {
                    var jsonObj = JSON.parse(xhr.responseText);
                    console.log(jsonObj);
                    // console.log(jsonObj);
                    var dataArr = jsonObj["shop_data"];
                    console.log(dataArr);
                    for (var i in dataArr) {
 frm0.innerHTML ='<img src="images/12.gif" alt=""class="left"><p><a href="">'+dataArr[0]["shop_name"]+'</a>店铺等级: <a href="#"></a></p><p><font>主营:'+dataArr[0]["main"]+'</font> <span>同城帮认证</span></p><p><font>地址：'+dataArr[0]["addr_detail"]+' </font><span>人气：'+dataArr[0]["comments"]+'次浏览</span></p>';
  frm1.innerHTML ='<img src="images/22.jpg" alt=""class="left"><p><a href="">'+dataArr[1]["shop_name"]+'</a>店铺等级: <a href="#"></a></p><p><font>主营:'+dataArr[1]["main"]+'</font> <span>同城帮认证</span></p><p><font>地址：'+dataArr[1]["addr_detail"]+' </font><span>人气：'+dataArr[1]["comments"]+'次浏览</span></p>';
   frm2.innerHTML ='<img src="images/23.jpg" alt=""class="left"><p><a href="">'+dataArr[2]["shop_name"]+'</a>店铺等级: <a href="#"></a></p><p><font>主营:'+dataArr[2]["main"]+'</font> <span>同城帮认证</span></p><p><font>地址：'+dataArr[2]["addr_detail"]+' </font><span>人气：'+dataArr[2]["comments"]+'次浏览</span></p>';
    frm3.innerHTML ='<img src="images/24.jpg" alt=""class="left"><p><a href="">'+dataArr[3]["shop_name"]+'</a>店铺等级: <a href="#"></a></p><p><font>主营:'+dataArr[3]["main"]+'</font> <span>同城帮认证</span></p><p><font>地址：'+dataArr[3]["addr_detail"]+' </font><span>人气：'+dataArr[3]["comments"]+'次浏览</span></p>';
     frm4.innerHTML ='<img src="images/25.jpg" alt=""class="left"><p><a href="">'+dataArr[4]["shop_name"]+'</a>店铺等级: <a href="#"></a></p><p><font>主营:'+dataArr[4]["main"]+'</font> <span>同城帮认证</span></p><p><font>地址：'+dataArr[4]["addr_detail"]+' </font><span>人气：'+dataArr[4]["comments"]+'次浏览</span></p>';
                 console.log( dataArr[i]["shop_name"]);   
                  console.log( dataArr[i]["main"]); 
                  console.log(dataArr[i]["addr_detail"]);  
            }
                }
            }
        }
            for (var m = 0; m <spans.length; m++) {
                 spans[m].style.background = 'white';
            };
            spans[this.index].style.background = 'orange';
            document.body.scrollTop = 1600;
            }
        };
        
        for (var i = 0; i < frm0.length; i++) {
        	frm0[i].index=i;
        frm0[i].onmouseover = function (){
        	this.style.background = "#fafafa";
        	for (var j = 0; j < ipt1.length; j++) {
        		ipt1[j].style.display = "none";
        	};
        	ipt1[this.index].style.display = "block";
        	console.log(frm0)

        }
        frm0[i].onmouseout = function (){
        	this.style.background = "";
        	ipt1[this.index].style.display = "none";
        	console.log(frm0)
        }
        };