var openExplainBox = function(item) {
	var parent = item.parentNode;
	var target = parent.nextElementSibling;
	target.classList.remove('d-none');
	item.classList.add('d-none');
}