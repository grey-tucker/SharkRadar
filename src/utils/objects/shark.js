class SharkObject {
	/** @type {number} */
	sharkID;
	/** @type {number} */
	age;
	/** @type {number} */
	originLat;
    /** @type {number} */
	originLon;
	///** @type {import("src/utils/objects/shark-type.js").default | null} */
	sharkType;

	/**
	 * @param {number} sharkID
	 * @param {number} age
	 * @param {number} originLat
     * @param {number} originLon
	 /* //@param {import("src/utils/objects/shark-type.js").default | null} sharkType
	 */
	constructor(sharkID, age, originLat, originLon, sharkType = null) {
		this.sharkID = sharkID;
		this.age = age;
		this.originLat = originLat;
        this.originLat = originLat;
		this.sharkType = sharkType;
	}
}

export default SharkObject;