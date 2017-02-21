(function(global, doc, $) {

	// 천단위 컴마(,) 표
	// [참고] https://github.com/customd/jquery-number
	// [참고] https://code.google.com/archive/p/jquery-numberformatter/
	$(".comma").blur(function() {
		$(this).val($.number($(this).val()));
	});

})(window, document, window.jQuery);