const express = require('express');
const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const app = express();

// 跨域設定 (CORS) & 解析 JSON
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});

app.use(express.json());

// 全域觀看數暫存 (伺服器執行期間累計)
let viewsCount = 0;

// 指向 backend/article_library
const postsDir = path.join(__dirname, '..', 'article_library');

// 健康檢查路由
app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

// 觀看數 API (GET: 取得目前觀看數)
app.get('/api/views', (req, res) => {
  res.json({ views: viewsCount });
});

// 觀看數 API (POST: 累加 1 並回傳最新數字)
app.post('/api/views', (req, res) => {
  viewsCount += 1;
  console.log(`[VIEWS] 頁面被存取，當前總瀏覽次數: ${viewsCount}`);
  res.json({ views: viewsCount });
});

// 文章 API
app.get('/api/posts', (req, res) => {
  try {
    if (!fs.existsSync(postsDir)) {
      console.log('postsDir not found:', postsDir);
      return res.json([]);
    }

    const files = fs.readdirSync(postsDir).filter(file => file.endsWith('.md'));
    const posts = files.map(file => {
      const slug = file.replace(/\.md$/, '');
      const fileContent = fs.readFileSync(path.join(postsDir, file), 'utf-8');
      const { data, content } = matter(fileContent);

      return {
        slug,
        data: {
          title: data.title || slug,
          category: data.category || 'Reserve (DevOps)',
          description: data.description || '',
          pubDate: data.pubDate ? new Date(data.pubDate) : new Date(),
          tags: Array.isArray(data.tags) ? data.tags : ['Kubernetes', 'Docker', 'Node.js', 'Redis']
        },
        content
      };
    });

    res.json(posts);
  } catch (err) {
    console.error('Error reading posts:', err);
    res.status(500).json({ error: 'Failed to read posts' });
  }
});

app.listen(3000, '0.0.0.0', () => {
  console.log('Backend server running on http://0.0.0.0:3000');
});