let arr = [1, 2, 2, 3, 4, 5];
arr = arr.filter(function (value, index, array) {
	return array.indexOf(value) == index;
});
console.log(arr);
