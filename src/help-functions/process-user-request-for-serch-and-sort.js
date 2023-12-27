
export const processUserRequestForSerchAndSort = (searchValue, isSort) => {
	let request = '';

	if(searchValue) {
		request += `?q=${searchValue}`
	}

	if(isSort && searchValue) {
		request += '&_sort=value'
	} else if(isSort) {
		request += '?_sort=value'
	}

	return request
}
