import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const backendUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "";

    const response = await fetch(`${backendUrl}/feedback/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();

    return NextResponse.json(data, { status: response.status });
  } catch (error) {
    console.error("Error proxying feedback:", error);
    return NextResponse.json(
      { success: false, message: "Failed to submit feedback. Please try again." },
      { status: 500 }
    );
  }
}
