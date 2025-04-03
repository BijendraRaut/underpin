import Product from "@/models/Product";
import connectDB from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get("category");

  try {
    await connectDB();
    const query = category
      ? { category: { $regex: new RegExp(category, "i") } }
      : {};
    const products = await Product.find(query);
    return NextResponse.json({
      success: true,
      products,
    });
  } catch (error) {
    console.log("Error fetching products", error);
    return NextResponse.json(
      { success: false, error: "failed to fetch products" },
      { status: 500 }
    );
  }
}
