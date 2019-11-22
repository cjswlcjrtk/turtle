
var app = app || {}
app = (() => {
	let _, js
	let run = x => $.getScript(x+'/resources/js/router.js',()=>{
			$.extend(new Session(x))
			init()
			onCreate()
		})		
	
	let init = () => {
		_ = $.ctx()
		js = $.js()
	}
	
	let onCreate = () => {		
		setContentView()
	}
	let setContentView = () => {
		bugsPage()
	}
	
	let bugsPage =()=>{
		$('<main id="main" role="main" class="container">'+
		'<table id="tab">'+
		'  <tr>'+
		'  </tr>'+
		'</table>'+
		'</main>')  // key값 무조건 string이기 때문에 '' 생량가능 value는 생략 불가, json이기때문에 , 로 속성 추가							
		.appendTo('body')	// body에 오버로딩
		.css({ width : '100%', height : '100%'}) 
		$('#main table')
		.css({ width : '80%', height : '80%', border :'2px solid black', margin: '0 auto', 'margin-top' : '8%' }) 
		$.each(
			[{ id : 'left', width : '20%'}, 
			{ id : 'right', width : '80%'}], 
			(i, j)=>{
			$('<td id="'+ j.id +'"></td>')
			.css({border: '2px solid black', width: j.width, 'vertical-align': 'top'})
			.appendTo('#tab tr')
		})
		$.each([	// name을 주고 구분
			{txt : '벅스', name : 'bugs_crawl'},
			{txt : '영화', name : 'cust_mgmt'}, 
			{txt : '영어', name : 'trd_mgmt'}], 
			(i, j)=>{
				$('<div name="'+ j.name +'">'+ j.txt +'</div>')
				.appendTo('#left')
				.click(function(){
					$(this).css({'background-color' : 'yellow'}).addClass('active')
					$(this).siblings().css({'background-color' : 'white'}).removeClass('active')
					switch($(this).attr('name')){
					case 'bugs_crawl' :
						bugs_crawl()						
						break
					case 'cust_mgmt' : 
						cust_mgmt()
						break
					}
			})
		})
		$('#left div').css({border: '2px solid black', margin: 'auto 0', 'line-height': '50px'})
	}
	
	let bugs_crawl =()=>{
		$('#right').empty()
		$('<form id="crawl_form_id" action="">'+
		'</form>')
		.addClass('form-inline my-2 my-lg-0')
		.appendTo('#right')
		$('#crawl_form_id').css({padding : '0 auto', 'padding-top' : '5%'  })	//'padding-top' : '5%' 
		$('<button class="btn btn-outline-success my-2 my-sm-0" type="submit">이동</button>')
		.appendTo('#crawl_form_id')
		.click(e=>{
			e.preventDefault()	
			alert('bugs_crawl')
		})
	}
	
	let cust_mgmt =()=>{
		$('#right').empty()
		$.getJSON(_+'/cgv/', d=>{				
			$('#right').empty()
			$.each(d,(i,j)=>{
				$('<div><img src="'+ j.txtArtistPhoto +'"><h1>'
						+j.txtArtistRank+'</h1><h4>'+j.txtArtistTitle+'</h4><h4>'
						+j.txtArtistPrecent+'</h4></div>')
				.css({border : '3px solid red',
					  float : 'left'})
				.appendTo('#right')
			})
		})	
//		$('#right').empty()
//		$('<form id="crawl_form_id" action="">'+
//		'</form>')
//		.addClass('form-inline my-2 my-lg-0')
//		.appendTo('#right')
//		$('#crawl_form_id').css({padding : '0 auto', 'padding-top' : '5%'  })	//'padding-top' : '5%' 
//		$('<button class="btn btn-outline-success my-2 my-sm-0" type="submit">이동</button>')
//		.appendTo('#crawl_form_id')		
//		.click(function(){
//			preventDefault()	
//			$.getJSON(_+'/cgv/', d=>{				
//				$('#right').empty()
//				alert('aaaaaaaaaaaaa')
//				$.each(d,(i,j)=>{
//					$('<div><img style="width:200px; src="'+j.txtArtistPhoto+'"><h1>'
//							+j.txtArtistRank+'</h1><h4>'+j.txtArtistTitle+'</h4><h4>'
//							+j.txtArtistPrecent+'</h4><div/>')
//					.css({horder : '3px solid red',
//						  float : 'left'})
//					.appendTo('#right')
//				})
//			})		
//		})
//		.click(e=>{
//			e.preventDefault()	
//			alert('cust_mgmt')
//				
//		})
		
	}
	
	let trd_mgmt =()=>{
		$('#right').empty()
		$('<form id="crawl_form_id" action="">'+
		'</form>')
		.addClass('form-inline my-2 my-lg-0')
		.appendTo('#right')
		$('#crawl_form_id').css({padding : '0 auto', 'padding-top' : '5%'  })	//'padding-top' : '5%' 
		$('<button class="btn btn-outline-success my-2 my-sm-0" type="submit">이동</button>')
		.appendTo('#crawl_form_id')
		.click(e=>{
			e.preventDefault()	
			alert('trd_mgmt')
		})
	}
	
	return {run}
	
	
})()