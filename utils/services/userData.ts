import { Jobs } from "../schema";
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

export async function fetchJobData() {
	try {
		const { data, error } = await supabase.from("joblist").select("*");
		if (error) {
			throw error;
		}
		return data || [];
	} catch (error: any) {
		console.error("Error fetching data:", error.message);
		throw error;
	}
}

export async function fetchSingleJobData(id: string) {
	try {
		const { data, error } = await supabase
			.from("joblist")
			.select("*")
			.eq("id", id)
			.single();
		if (error) {
			throw error;
		}
		return data;
	} catch (error: any) {
		console.error("Error fetching data:", error.message);
		throw error;
	}
}
