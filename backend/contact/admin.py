from django.contrib import admin
from .models import Contact


@admin.register(Contact)
class ContactAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'company', 'created_at')
    list_filter = ('created_at', 'company')
    search_fields = ('name', 'email', 'company', 'message')
    readonly_fields = ('created_at',)
    date_hierarchy = 'created_at'
    ordering = ('-created_at',)
    
    def has_add_permission(self, request):
        # 禁止在管理后台添加联系记录，只能通过前端表单提交
        return False
