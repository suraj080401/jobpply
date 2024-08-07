import { IreferralData } from "../schema";
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
		const { data, error } = await supabase
			.from("joblist")
			.select("*")
			.order("created_at", { ascending: false });
		if (error) {
			throw error;
		}
		return data || [];
	} catch (error: any) {
		console.error("Error fetching data:", error.message);
		throw error;
	}
}

export async function fetchTopJobData() {
	try {
		const { data, error } = await supabase
			.from("joblist")
			.select("*")
			.order("created_at", { ascending: false })
			.limit(10);
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

export async function fetchCategoryCounts() {
	try {
		const { data, error } = await supabase.rpc("category_count_with_totals");
		if (error) {
			throw error;
		}
		console.log(data);
		return data;
	} catch (error: any) {
		console.error("Error fetching data:", error.message);
	}
}

interface rederralCode {
	company: string;
	code: string;
}

export async function fetchCompanyReferrals(
	query: string,
): Promise<string | null> {
	try {
		const { data, error } = await supabase
			.from("linkedincompanycodes")
			.select("code")
			.eq("company", query)
			.single();

		if (error) {
			throw error;
		}

		return data?.code || null;
	} catch (error: any) {
		console.error("Error fetching data:", error.message);
		throw new Error(error.message);
	}
}
