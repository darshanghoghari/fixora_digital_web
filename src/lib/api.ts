const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "";

export const API_ENDPOINTS = {
    submitFeedback: `${API_BASE_URL}/api/feedback`,
    getReviews: `${API_BASE_URL}/api/reviews`,
    getFeedbackList: `${API_BASE_URL}/api/feedback/list`,
};

export interface FeedbackData {
    name: string;
    email: string;
    rating: number;
    message: string;
}

export interface Review {
    id: number;
    name: string;
    rating: number;
    comment: string;
    date: string;
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

export const getReviews = async (): Promise<Review[]> => {
    try {
        const response = await fetch(API_ENDPOINTS.getReviews, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            throw new Error("Failed to fetch reviews");
        }

        const data = await response.json();
        return data.reviews || [];
    } catch (error) {
        console.error("Error fetching reviews:", error);
        return [];
    }
};

export const getFeedbackList = async (): Promise<Review[]> => {
    try {
        const response = await fetch(API_ENDPOINTS.getFeedbackList, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            throw new Error("Failed to fetch feedback list");
        }

        const data = await response.json();
        return data.feedback || [];
    } catch (error) {
        console.error("Error fetching feedback list:", error);
        return [];
    }
};

