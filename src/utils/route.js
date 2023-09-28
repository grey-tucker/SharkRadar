class PageRoute {
	/** @type {string} */
	path;
	/** @type {() => string} */
	element;
	/** @type {boolean} */
	index;

	/**
	 * @param {string} path
	 * @param {() => string} element
	 * @param {boolean} [index]
	 */
	constructor(path, element, index = false) {
		this.path = path;
		this.element = element;
		this.index = index;
	}
}

export default PageRoute;
