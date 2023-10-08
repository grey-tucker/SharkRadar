class DataHandler {
	static async getData(route) {
		try {
			const res = await fetch(`data/${route}`);

			if (res.status >= 400) {
				throw new Error(`Request failed with response code ${res.status}`);
			}

			return await res.json();
		} catch (err) {
			console.error(err);
			return [];
		}
	}

    /**
	 * /@returns {Promise<import("src/utils/objects/shark.js")[]>}
	 */
	static async getSharks() {
		return await this.getData("sharks");
	}
}

export default DataHandler;