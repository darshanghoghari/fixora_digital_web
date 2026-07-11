const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "";

export const API_ENDPOINTS = {
    submitFeedback: `${API_BASE_URL}/feedback/create`,
};

export interface FeedbackData {
    name: string;
    email: string;
    rating: number;
    note: string;
}



export const submitFeedback = async (data: FeedbackData): Promise<{ success: boolean; message?: string }> => {
    try {
        const response = await fetch(API_ENDPOINTS.submitFeedback, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error("Failed to submit feedback");
        }

        const result = await response.json();
        return { success: true, message: result.message };
    } catch (error) {
        console.error("Error submitting feedback:", error);
        return { success: false, message: "Failed to submit feedback. Please try again." };
    }
};

