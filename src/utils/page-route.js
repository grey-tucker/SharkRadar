class PageRouteObject {
	/** @type {string} */
	path;
	/** @type {string} */
	name;
	/** @type {() => import("react").ReactElement} */
	element;
	/** @type {boolean} */
	index;

	/**
	 * @param {string} path
	 * @param {string} name
	 * @param {() => import("react").ReactElement} element
	 * @param {boolean} [index]
	 */
	constructor(path, name, element, index = false) {
		this.path = path;
		this.name = name;
		this.element = element;
		this.index = index;
	}
}

export default PageRouteObject;