from django.urls import path
from . import views

urlpatterns = [
    path('posts/', views.blog_post_list, name='blog_post_list'),
    path('posts/<slug:slug>/', views.blog_post_detail, name='blog_post_detail'),
    path('posts/create/', views.blog_post_create, name='blog_post_create'),
    path('tags/', views.tag_list, name='tag_list'),
]