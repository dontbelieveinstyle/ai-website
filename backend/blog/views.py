from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from .models import BlogPost
from .serializers import BlogPostSerializer, BlogPostListSerializer


@api_view(['GET'])
def blog_post_list(request):
    """
    Get all published blog posts
    """
    posts = BlogPost.objects.filter(published=True)
    serializer = BlogPostListSerializer(posts, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def blog_post_detail(request, slug):
    """
    Get a specific blog post by slug
    """
    post = get_object_or_404(BlogPost, slug=slug, published=True)
    serializer = BlogPostSerializer(post)
    return Response(serializer.data)


@api_view(['POST'])
def blog_post_create(request):
    """
    Create a new blog post (for admin)
    """
    serializer = BlogPostSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
