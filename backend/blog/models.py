from django.db import models
from django.utils import timezone


class Tag(models.Model):
    name = models.CharField(max_length=50, unique=True)

    class Meta:
        ordering = ['name']

    def __str__(self):
        return self.name


class BlogPost(models.Model):
    title = models.CharField(max_length=200)
    slug = models.SlugField(max_length=200, unique=True)
    excerpt = models.TextField(max_length=300)
    content = models.TextField()
    # 支持本地上传图片，保存到 MEDIA_ROOT/blog/
    image = models.ImageField(upload_to='blog/', blank=True, null=True,default=None)
    tags = models.ManyToManyField(Tag, blank=True, related_name='posts')
    author = models.CharField(max_length=100, default='Airabbi Team')
    published = models.BooleanField(default=True)
    created_at = models.DateTimeField(default=timezone.now)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        ordering = ['-created_at']
    
    def __str__(self):
        return self.title
