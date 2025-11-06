from django.shortcuts import render

def index(request):
    """
    渲染前端应用的主页面
    """
    return render(request, 'index.html')
