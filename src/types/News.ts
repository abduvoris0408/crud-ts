export interface News {
  id?: number;
  title: string;
  content: string;
  author: string;
  publishDate: string;
  category: string;
  imageUrl?: string;
}

export const NewsCategories: string[] = [
  "Politics",
  "Technology",
  "Sports",
  "Entertainment",
  "Science",
  "Health",
  "Business"
];