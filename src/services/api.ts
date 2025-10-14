const API_BASE_URL = 'http://127.0.0.1:8000/api';

// Contact API
export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
}

export interface ContactResponse {
  message: string;
  data?: any;
  errors?: any;
}

export const contactAPI = {
  submit: async (data: ContactFormData): Promise<ContactResponse> => {
    const response = await fetch(`${API_BASE_URL}/contact/submit/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to submit contact form');
    }
    
    return response.json();
  },
};

// Blog API
export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content?: string;
  image: string;
  author: string;
  created_at: string;
  updated_at?: string;
}

export const blogAPI = {
  getPosts: async (): Promise<BlogPost[]> => {
    const response = await fetch(`${API_BASE_URL}/blog/posts/`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch blog posts');
    }
    
    return response.json();
  },
  
  getPost: async (slug: string): Promise<BlogPost> => {
    const response = await fetch(`${API_BASE_URL}/blog/posts/${slug}/`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch blog post');
    }
    
    return response.json();
  },
};