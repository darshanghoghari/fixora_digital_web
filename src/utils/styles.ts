import { theme } from "@/config/theme";

export const getColorClass = (color: keyof typeof theme.colors) => {
  const colorMap: Record<string, string> = {
    primary: "text-orange-500",
    secondary: "text-white",
    accent: "text-orange-200",
    textPrimary: "text-gray-900 dark:text-white",
    textSecondary: "text-gray-600 dark:text-gray-400",
  };
  return colorMap[color] || "";
};

export const getBgClass = (color: keyof typeof theme.colors) => {
  const bgMap: Record<string, string> = {
    primary: "bg-orange-500",
    secondary: "bg-white",
    accent: "bg-orange-100 dark:bg-orange-900/20",
    textPrimary: "bg-gray-900 dark:bg-white",
    textSecondary: "bg-gray-600 dark:bg-gray-400",
  };
  return bgMap[color] || "";
};

export const getBorderClass = (color: keyof typeof theme.colors) => {
  const borderMap: Record<string, string> = {
    primary: "border-orange-500",
    secondary: "border-white",
    accent: "border-orange-200",
  };
  return borderMap[color] || "";
};

export const styles = {
  button: {
    primary: "px-8 py-4 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl",
    secondary: "px-8 py-4 rounded-lg font-semibold border-2 transition-all",
  },
  card: "bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-md hover:shadow-xl transition-all hover:-translate-y-1",
  section: "py-20",
  container: "container mx-auto px-4 sm:px-6 lg:px-8",
  heading: {
    h1: "text-4xl md:text-5xl font-bold mb-6",
    h2: "text-3xl md:text-4xl font-bold mb-6",
    h3: "text-2xl font-semibold mb-4",
  },
} as const;

