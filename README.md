# 海空軍預備技術開發群 Full-Stack Technical Blog

[![Docker Compose](https://img.shields.io/badge/Docker%20Compose-v3.8-2496ED?style=flat&logo=docker)](https://www.docker.com/)
[![Astro](https://img.shields.io/badge/Astro-SSR-BC52EE?style=flat&logo=astro)](https://astro.build/)
[![Node.js](https://img.shields.io/badge/Node.js-Express-339933?style=flat&logo=nodedotjs)](https://nodejs.org/)
[![Redis](https://img.shields.io/badge/Redis-Storage-DC382D?style=flat&logo=redis)](https://redis.io/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-06B6D4?style=flat&logo=tailwindcss)](https://tailwindcss.com/)

本專案為 **海空軍預備技術開發群 (Naval & Aviation Reserve Tech Development Group)** 所開發的全棧現代化技術部落格系統。採用 **Astro SSR** 搭配 **Node.js Express** 微服務架構，並透過 Docker 實現高層級資安隔離（Zero External Exposure）與熱更新部署。

---

## 📂 專案目錄結構 (Directory Structure)

```text
naval_and_aviation_reserve_tech_development_group/
├── backend/                        # 後端 API 與文章庫服務
│   ├── article_library/            # Markdown (.md) 文章庫 (Docker Volume 掛載點)
│   ├── src/
│   │   └── index.js               # Express 伺服器入口 (監聽 0.0.0.0:3000)
│   ├── Dockerfile                  # 後端容器構建檔
│   └── package.json
│
├── frontend/                       # 前端 Astro SSR 服務
│   ├── src/
│   │   ├── pages/                  # Astro 路由系統
│   │   │   ├── posts/
│   │   │   │   └── [...slug].astro # 動態文章內頁渲染
│   │   │   ├── tags/
│   │   │   │   └── [tag].astro     # 標籤分類篩選頁面
│   │   │   └── index.astro         # 部落格首頁 (文章列表與瀏覽計數)
│   │   └── styles/                 # 全域與 Tailwind 樣式設定
│   ├── astro.config.mjs            # Astro SSR (Node Adapter) 配置檔
│   ├── tailwind.config.mjs         # Tailwind CSS 主題配置
│   ├── Dockerfile                  # 前端 Multi-Stage 構建檔 (0.0.0.0:4321)
│   └── package.json
│
└── docker-compose.yml              # 多容器編排檔 (單一入口門控門神)
```

---

## 🛡️ 系統架構與資安設計 (System Architecture)

本系統採用 **網路零暴露 (Zero External Exposure)** 之嚴格安全策略：

```text
  [ 外部使用者 / 瀏覽器 ]
            │
            ▼ (HTTP / Port 30080)
┌─────────────────────────────────────────────────────────────┐
│ Docker Private Network (Internal)                           │
│                                                             │
│   ┌──────────────────────────┐                              │
│   │  Frontend (Astro SSR)    │                              │
│   │  Port 4321               │                              │
│   └────────────┬─────────────┘                              │
│                │                                            │
│                │  http://backend:3000 (Docker Internal DNS) │
│                ▼                                            │
│   ┌──────────────────────────┐       ┌───────────────────┐  │
│   │  Backend (Express API)   │ ────► │ Redis Cache       │  │
│   │  Port 3000 (Blocked)     │       │ Port 6379 (Block) │  │
│   └────────────┬─────────────┘       └───────────────────┘  │
│                │                                            │
│                ▼ Volume Mount                               │
│      [ ./backend/article_library ]                          │
└─────────────────────────────────────────────────────────────┘
```

* **單一入口對外 (Single Entrypoint)**：全站僅開放 `30080` (映射至前端 `4321`) 對外放行。
* **後端與資料庫徹底隱身**：`3000` (API) 與 `6379` (Redis) **未設定外部映射 ports**，外網攻擊者無法直接掃描或連線後端。
* **SSR 背景數據通訊**：前端由 Astro 在容器背景經由內部 DNS (`http://backend:3000`) 請求資料，瀏覽器端只會收到渲染完成的 HTML。

---

## 🚀 快速啟動與部署 (Quick Start)

### 1. 環境需求
* Docker Engine 20.10+
* Docker Compose v2+
* Git

### 2. 複製專案與啟動服務

```bash
# 1. Clone 專案庫
git clone https://github.com/your-repo/naval_and_aviation_reserve_tech_development_group.git
cd naval_and_aviation_reserve_tech_development_group

# 2. 啟動所有容器 (自動構建前端與後端)
docker compose up -d --build

# 3. 查看服務運行狀態
docker compose ps
```

啟動完成後，開啟瀏覽器即可存取首頁：
* **全站服務入口**：`http://<SERVER_IP>:30080`

---

## 📝 文章管理與即時熱更新 (Content Workflow)

受惠於 `docker-compose.yml` 中的 **Volume 動態掛載**，文章更新**無需重新構建 Image，亦不需重啟容器**。

### 1. 新增 / 編輯文章
在 `backend/article_library/` 目錄下建立 `.md` 檔案，必須包含標準 Frontmatter 標頭：

```markdown
---
title: "Kubernetes 戰術部署與 K3s 輕量化實踐"
category: "DevOps"
description: "探討在邊緣運算環境下快速構建高可用性 K8s 叢集之技巧。"
pubDate: "2026-08-28"
tags:
  - Kubernetes
  - Docker
  - DevOps
---

# 戰術概述

此處撰寫 Markdown 文章內容...
```

### 2. 生效機制
* **伺服器端部署**：於 Ubuntu 執行 `git pull origin main` 拉取新文章，重新整理網頁即可即時呈現。
* **熱刪除/熱修改**：伺服器本地直接修改或刪除 `backend/article_library/*.md` 檔案，前端重新整理後數據秒級同步。

---

## 🛠️ 維運與資安診斷 (Verification & Troubleshooting)

### 1. 驗證後端是否成功隱蔽 (資安測試)
```bash
# 由外部電腦請求 3000 連接埠 (預期：Connection refused)
curl -i --max-time 3 http://<SERVER_IP>:3000/api/posts

# 請求 30080 前端入口 (預期：HTTP 200 OK)
curl -i --max-time 3 http://<SERVER_IP>:30080
```

### 2. 檢視容器內部 Logs
```bash
# 查看前端 SSR 渲染日誌
docker compose logs -f frontend

# 查看後端 API 存取與觀看數累加紀錄
docker compose logs -f backend
```

### 3. 無快取強制重新編譯 (Troubleshooting)
若修改前端配置 (如 `astro.config.mjs` 或 `Dockerfile`) 後無生效，請執行：
```bash
docker compose down
docker compose build --no-cache frontend
docker compose up -d
```

---

## 📄 授權條款 (License)

Internal Technical Documentation for **Naval & Aviation Reserve Tech Development Group**.
