export default (str: string, keyword: string): string[] => {
	if (keyword === "") {
		return [str];
	}
	const arr = str.split(keyword);
	const result: string[] = [];
	arr.forEach((p, idx) => {
		if (p) {
			result.push(p);
		}
		if (idx < arr.length - 1) {
			result.push(keyword);
		}
	});
	return result;
};
