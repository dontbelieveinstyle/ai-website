// API 基础 URL 配置
// 优先使用环境变量；如未设置，在生产环境默认使用 https://ai.xrexp.io/api，开发环境使用 /api（通常由代理转发到本地后端）。
const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || (import.meta.env.PROD ? 'https://ai.xrexp.io/api' : '/api');

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
  tags?: string[];
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
  
  getTags: async (): Promise<{ name: string; count: number }[]> => {
    const response = await fetch(`${API_BASE_URL}/blog/tags/`);
    if (!response.ok) {
      throw new Error('Failed to fetch tags');
    }
    return response.json();
  },
};