$(function() {
	Test.init();
});

var Test = {
	init: function() {
		$('#clone_list').click(Test.clone_list);
		$('.dropdown-item').click(Test.update_text);
	}
	,clone_list: function() {
		var list = $('.hidden-list-of-things').find('#to-clone').clone();
		$('.list-of-things').append(list);
	}
	,update_text: function() {
		var selection = $(this).val();
		$("#car-selection").val(selection);
	}
};