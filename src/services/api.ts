import { News } from '../types/News'

// Static fake data
const newsData: News[] = [
	{
		id: 1,
		title: 'First News',
		content: 'This is the first news item.',
		author: 'John Doe',
		publishDate: '2024-01-01',
		category: 'World',
	},
	{
		id: 2,
		title: 'Second News',
		content: 'This is the second news item.',
		author: 'Jane Smith',
		publishDate: '2024-02-15',
		category: 'Business',
	},
	{
		id: 3,
		title: 'Third News',
		content: 'This is the third news item.',
		author: 'Alice Johnson',
		publishDate: '2024-03-10',
		category: 'Technology',
	},
]

export const NewsService = {
	// Get all news articles
	getAll: async (): Promise<News[]> => {
		return newsData
	},

	// Get a specific news article by ID
	getById: async (id: number): Promise<News> => {
		const news = newsData.find(item => item.id === id)
		if (!news) throw new Error('News not found')
		return news
	},

	// Create a new news article
	create: async (news: Omit<News, 'id'>): Promise<News> => {
		const newNews: News = {
			id: newsData.length + 1,
			...news,
		}
		newsData.push(newNews)
		return newNews
	},

	// Update an existing news article
	update: async (
		id: number,
		updatedNews: Omit<News, 'id'>
	): Promise<News> => {
		const index = newsData.findIndex(item => item.id === id)
		if (index === -1) throw new Error('News not found')
		newsData[index] = { id, ...updatedNews }
		return newsData[index]
	},

	// Delete a news article
	delete: async (id: number): Promise<void> => {
		const index = newsData.findIndex(item => item.id === id)
		if (index === -1) throw new Error('News not found')
		newsData.splice(index, 1)
	},
}
