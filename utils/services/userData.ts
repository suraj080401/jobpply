import supabase from "../supabaseClient";

export async function fetchData() {
	try {
		const { data, error } = await supabase.from("user").select("*");
		if (error) {
			throw error;
		}
		return data || [];
	} catch (error: any) {
		console.error("Error fetching data:", error.message);
		throw error;
	}
}
