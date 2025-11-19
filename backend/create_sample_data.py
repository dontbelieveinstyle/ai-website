import os
import django

# Setup Django
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'airabbi_backend.settings')
django.setup()

from blog.models import BlogPost, Tag
from django.utils.text import slugify

# Sample blog posts
sample_posts = [
    {
        'title': 'AI Transformation: The Future of Business',
        'excerpt': 'Discover how artificial intelligence is revolutionizing business operations and creating new opportunities for growth.',
        'content': '''Artificial Intelligence is no longer a futuristic concept—it's a present reality that's transforming businesses across all industries. From automating routine tasks to providing deep insights through data analysis, AI is helping companies operate more efficiently and make better decisions.

In this comprehensive guide, we'll explore the key areas where AI is making the biggest impact:

1. **Process Automation**: AI-powered systems can handle repetitive tasks, freeing up human resources for more strategic work.

2. **Data Analytics**: Machine learning algorithms can process vast amounts of data to identify patterns and trends that humans might miss.

3. **Customer Experience**: AI chatbots and recommendation systems are personalizing customer interactions at scale.

4. **Predictive Maintenance**: AI can predict equipment failures before they happen, reducing downtime and maintenance costs.

The companies that embrace AI transformation today will be the leaders of tomorrow.''',
        'image': 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=modern%20business%20office%20with%20AI%20technology%20holographic%20displays%20and%20data%20visualization&image_size=landscape_16_9',
        'author': 'Airabbi Team'
    },
    {
        'title': 'Machine Learning in Healthcare: Saving Lives with Data',
        'excerpt': 'Explore how machine learning algorithms are revolutionizing medical diagnosis and treatment.',
        'content': '''Healthcare is experiencing a revolution powered by machine learning and artificial intelligence. These technologies are not just improving efficiency—they're literally saving lives by enabling faster, more accurate diagnoses and personalized treatments.

**Key Applications in Healthcare:**

- **Medical Imaging**: AI can detect cancer, fractures, and other conditions in X-rays, MRIs, and CT scans with remarkable accuracy.
- **Drug Discovery**: Machine learning accelerates the development of new medications by predicting molecular behavior.
- **Personalized Medicine**: AI analyzes genetic data to recommend tailored treatment plans.
- **Epidemic Prediction**: Algorithms can model disease spread and help public health officials respond more effectively.

The integration of AI in healthcare is creating a future where medical care is more precise, accessible, and effective than ever before.''',
        'image': 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=futuristic%20medical%20facility%20with%20AI%20diagnostic%20equipment%20and%20holographic%20patient%20data&image_size=landscape_16_9',
        'author': 'Dr. Sarah Chen'
    },
    {
        'title': 'The Rise of Conversational AI: Beyond Simple Chatbots',
        'excerpt': 'Understanding how advanced conversational AI is changing customer service and business communication.',
        'content': '''Conversational AI has evolved far beyond simple rule-based chatbots. Today's advanced systems can understand context, maintain coherent conversations, and provide sophisticated assistance across multiple domains.

**Evolution of Conversational AI:**

1. **Rule-Based Systems**: Early chatbots followed predetermined scripts
2. **Natural Language Processing**: Systems began understanding human language nuances
3. **Machine Learning Integration**: AI started learning from conversations
4. **Large Language Models**: Modern systems can engage in complex, contextual discussions

**Business Applications:**

- **Customer Support**: 24/7 assistance with complex problem-solving capabilities
- **Sales Assistance**: Personalized product recommendations and guided purchasing
- **Internal Operations**: Employee support and knowledge management
- **Training and Education**: Interactive learning experiences

The future of conversational AI promises even more sophisticated interactions that will be indistinguishable from human conversation.''',
        'image': 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=modern%20customer%20service%20center%20with%20AI%20chatbot%20interfaces%20and%20digital%20communication&image_size=landscape_16_9',
        'author': 'Michael Rodriguez'
    }
]

# Create blog posts
for post_data in sample_posts:
    slug = slugify(post_data['title'])
    
    # Check if post already exists
    if not BlogPost.objects.filter(slug=slug).exists():
        BlogPost.objects.create(
            title=post_data['title'],
            slug=slug,
            excerpt=post_data['excerpt'],
            content=post_data['content'],
            image=post_data['image'],
            author=post_data['author'],
            published=True
        )
        print(f"Created blog post: {post_data['title']}")
    else:
        print(f"Blog post already exists: {post_data['title']}")

# Create initial tags
initial_tags = ['AI', 'Machine Learning', 'Deep Learning']
for tag_name in initial_tags:
    Tag.objects.get_or_create(name=tag_name)
print(f"Ensured initial tags exist: {', '.join(initial_tags)}")

# Optional: attach tags to posts based on titles
title_tag_map = {
    'AI Transformation: The Future of Business': ['AI'],
    'Machine Learning in Healthcare: Saving Lives with Data': ['Machine Learning', 'AI'],
    'The Rise of Conversational AI: Beyond Simple Chatbots': ['AI']
}

for post_data in sample_posts:
    slug = slugify(post_data['title'])
    try:
        post = BlogPost.objects.get(slug=slug)
        names = title_tag_map.get(post_data['title'], [])
        if names:
            tags = Tag.objects.filter(name__in=names)
            post.tags.add(*tags)
            print(f"Attached tags {names} to post: {post_data['title']}")
    except BlogPost.DoesNotExist:
        continue

print("Sample data creation completed!")