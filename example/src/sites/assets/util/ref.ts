import { Ref, ref } from "vue";

export class RefData {
	private static instance: RefData;
	public static getInstance(): RefData {
		if (this.instance == null) {
			this.instance = new RefData();
		}
		return this.instance;
	}

	public currentRoute: Ref<string> = ref("/");
}
