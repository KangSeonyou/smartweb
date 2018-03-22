$(function(){

	/*
		알고리즘
		1.클릭한 인디케이터(앵커)가 몇번째 요소인지를 나타내는 index번호 추출

		2. 해당 요소의 부모에 on클래스를 추가

		3. 해당요소 외의 li에 .on클래스를 제거

		4. index번호와 매칭되는 슬라이드가 보일 수 있도록 .slides-container를 이동한다
	*/

	//제이쿼리로 셀렉팅할 경우 배열방식으로 저장된다.
	console.log('$("#slides>.slides-pagination>li>a")=',$("#slides>.slides-pagination>li>a"));

	var $indicator = $("#slides>.slides-pagination>li>a")

	//인디케이터에 대한 클릭이벤트 구문
	$("#slides>.slides-pagination>li>a").click(function(evt){

		
		//.index()메소드는 지정된 요소의 인덱스 번호를추출한다. 0부터 시작
		var nowIdx = $indicator.index($(this));

		console.log("nowIdx=",nowIdx);

		$indicator.eq(nowIdx).parent().addClass("on").siblings().removeClass("on");

		//.animate(JSON옵션(필수),시간,이징효과,콜백함수)
		$("#slides>.slides-container").stop().animate({
			"left" : -665 * nowIdx
		},600);

		evt.preventDefault();

	});

});