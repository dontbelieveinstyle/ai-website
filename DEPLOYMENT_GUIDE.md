# 部署指南

## 403 错误解决方案

### 1. 前端配置
已修复前端 API 配置，现在会根据环境自动选择正确的 API 地址：
- 开发环境：`http://localhost:8000/api`
- 生产环境：`http://18.162.134.82/api`

### 2. Django 后端配置
已完成以下配置：
- ✅ 添加了 `@csrf_exempt` 装饰器到 contact 视图
- ✅ 配置了 CORS 允许的源地址
- ✅ 设置了正确的 `ALLOWED_HOSTS`

### 3. 服务器配置检查清单

#### Nginx 配置（如果使用）
确保 Nginx 配置文件包含以下内容：

```nginx
server {
    listen 80;
    server_name 18.162.134.82;

    # 静态文件
    location /static/ {
        alias /path/to/your/backend/static/;
    }

    # API 请求
    location /api/ {
        proxy_pass http://127.0.0.1:8000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }

    # 前端文件
    location / {
        try_files $uri $uri/ /index.html;
        root /path/to/your/frontend/dist;
    }
}
```

#### 防火墙设置
确保以下端口开放：
- 80 (HTTP)
- 8000 (Django 开发服务器，如果直接使用)

#### Django 部署命令
```bash
# 1. 激活虚拟环境
source venv/bin/activate

# 2. 安装依赖
pip install -r requirements.txt

# 3. 运行迁移
python manage.py migrate

# 4. 收集静态文件
python manage.py collectstatic --noinput

# 5. 启动服务器
python manage.py runserver 0.0.0.0:8000
```

#### 前端部署命令
```bash
# 1. 安装依赖
npm install

# 2. 构建生产版本
npm run build

# 3. 部署 dist 文件夹到服务器
```

### 4. 测试步骤
1. 确保 Django 服务器在 8000 端口运行
2. 测试 API 端点：`curl -X POST http://18.162.134.82:8000/api/contact/submit/`
3. 检查前端是否能正确访问 API

### 5. 常见问题排查
- 检查服务器日志：`tail -f /var/log/nginx/error.log`
- 检查 Django 日志
- 确认防火墙设置
- 验证域名/IP 解析