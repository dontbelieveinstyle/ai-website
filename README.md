# Airabbi 网站复制版

这是一个基于 React + TypeScript 前端和 Django 后端的全栈网站项目，复制了 Airabbi 官网的设计和功能。

## 技术栈

### 前端
- React 18 + TypeScript
- Vite (构建工具)
- Tailwind CSS (样式框架)
- React Router (路由管理)
- Lucide React (图标库)
- Zustand (状态管理)

### 后端
- Django 5.1.4
- Django REST Framework
- SQLite 数据库
- CORS 支持

## 环境要求

- Node.js 18+ 
- Python 3.8+
- npm 或 yarn

## 安装和运行

### 1. 克隆项目

```bash
git clone https://github.com/dontbelieveinstyle/ai-website.git
cd ai-website
```

### 2. 后端设置

```bash
# 进入后端目录
cd backend

# 创建虚拟环境
python -m venv venv

# 激活虚拟环境
# macOS/Linux:
source venv/bin/activate
# Windows:
venv\Scripts\activate

# 安装依赖
pip install -r requirements.txt

# 运行数据库迁移
python manage.py migrate

# 创建超级用户（可选）
python manage.py createsuperuser

# 启动后端服务器
python manage.py runserver 8000
```

### 3. 前端设置

```bash
# 在项目根目录
npm install

# 启动前端开发服务器
npm run dev
```

## 访问地址

- **前端网站**: http://localhost:5173/
- **后端 API**: http://127.0.0.1:8000/api/
- **管理后台**: http://127.0.0.1:8000/admin/

## 管理员账户

- **用户名**: admin
- **密码**: admin123

## 项目结构

```
ai-website/
├── src/                    # 前端源码
│   ├── components/         # React 组件
│   ├── pages/             # 页面组件
│   ├── hooks/             # 自定义 Hooks
│   ├── utils/             # 工具函数
│   └── App.tsx            # 主应用组件
├── backend/               # 后端源码
│   ├── airabbi_backend/   # Django 项目配置
│   ├── blog/              # 博客应用
│   ├── contact/           # 联系表单应用
│   ├── venv/              # Python 虚拟环境
│   └── manage.py          # Django 管理脚本
├── public/                # 静态资源
├── package.json           # 前端依赖配置
└── README.md              # 项目说明
```

## 功能特性

### 前端功能
- 响应式设计，支持移动端
- 首页展示
- 服务页面
- 博客文章列表和详情
- 联系表单
- 关于我们页面

### 后端功能
- RESTful API
- 博客文章管理
- 联系表单处理
- Django 管理后台
- 中文界面支持

## 开发说明

### 前端开发
```bash
npm run dev          # 启动开发服务器
npm run build        # 构建生产版本
npm run preview      # 预览生产版本
npm run lint         # 代码检查
```

### 后端开发
```bash
python manage.py runserver    # 启动开发服务器
python manage.py migrate      # 运行数据库迁移
python manage.py makemigrations  # 创建数据库迁移
python manage.py collectstatic   # 收集静态文件
```

## 部署

项目已配置好生产环境设置，可以部署到各种云平台。确保在生产环境中：

1. 设置正确的环境变量
2. 使用生产数据库（如 PostgreSQL）
3. 配置静态文件服务
4. 启用 HTTPS

## 许可证

MIT License
