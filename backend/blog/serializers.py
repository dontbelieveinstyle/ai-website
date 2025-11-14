from rest_framework import serializers
from .models import BlogPost, Tag


class BlogPostSerializer(serializers.ModelSerializer):
    tags = serializers.SlugRelatedField(many=True, read_only=True, slug_field='name')
    class Meta:
        model = BlogPost
        fields = ['id', 'title', 'slug', 'excerpt', 'content', 'image', 'tags', 'author', 'published', 'created_at', 'updated_at']
        read_only_fields = ['id', 'created_at', 'updated_at']


class BlogPostListSerializer(serializers.ModelSerializer):
    """Simplified serializer for blog post list"""
    tags = serializers.SlugRelatedField(many=True, read_only=True, slug_field='name')
    class Meta:
        model = BlogPost
        fields = ['id', 'title', 'slug', 'excerpt', 'image', 'tags', 'author', 'created_at']
