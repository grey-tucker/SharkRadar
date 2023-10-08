class SharkTypeObject {
	/** @type {number} */
	SharkTypeID;
	/** @type {string} */
	species;

	/**
	 * @param {number} 	SharkTypeID;
	 * @param {string} 	species;
	 */
	constructor (SharkTypeID, species) {
		this.SharkTypeID = SharkTypeID;
		this.species = species;
	}
}

export default SharkTypeObject;