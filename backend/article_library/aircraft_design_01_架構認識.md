---
title: "Aircraft Design 01"
description: "初步解析航太工程經典聖經《Airplane Design》，涵蓋初步尺寸估算、推進系統整合、氣動力計算、穩定性控制至成本評估等飛機設計八大核心階段。"
pubDate: 2026-08-28
category: "航太工程"
tags: ["Aircrafr Design"]
---

<h2 style="font-size: 1.5rem; font-weight: bold; color: cbd5e1; margin-top: 24px; border-bottom: 1px solid #374151; padding-bottom: 8px;">
  一、前言
</h2>
<p style="color: #cbd5e1; font-size: 1rem; line-height: 1.75; margin-bottom: 1rem;">
  Aircraft Design 的翻譯與解析是一開始想要建這個站的初始理由之一。<br>
  這本書沒有中文翻譯本也沒有中文使用解析，讓我在AIAA競賽期間使用起來甚為不方便(小弟英文就不是很好，真是抱歉喔~)<br>
  有了這個這個網站，現在終於可以對整套書做全面性的翻譯、導讀與整理啦~~~~~~TT。<br>
  是說關於版權問題的部分......平時這個網站不會開放到網際網路(純粹在自家區域網路內開放)<br>
  因此暫時沒什麼大問題......吧><<br>
  整體來說大概這樣，接著開始進入正題。<br>
</p>

<h2 style="font-size: 1.5rem; font-weight: bold; color: cbd5e1; margin-top: 24px; border-bottom: 1px solid #374151; padding-bottom: 8px;">
  二、飛機設計流程
</h2>
<p style="color: #cbd5e1; font-size: 1rem; line-height: 1.75; margin-bottom: 1rem;">
  1.初步尺寸估算 (Preliminary Sizing)<br>
  2.構型設計與推進系統 (Configuration & Propulsion)<br>
  3.駕駛艙、機身、機翼與尾翼佈局 (Layout & Cutaways)<br>
  4.起落架與子系統佈局 (Landing Gear & Systems)<br>
  5.各組件重量估算 (Component Weight)<br>
  6.氣動力、推力與動力計算 (Aerodynamics & Power)<br>
  7.穩定性、控制與性能 (Stability & Performance)<br>
  8.成本估算與營運分析 (Cost Estimation)<br>
</p>

<h4 style="color: cbd5e1; margin-top: 24px; border-bottom: 1px solid #374151;">
  Part I：飛機初步尺寸估算 (Preliminary Sizing)
</h4>
<p style="color: #cbd5e1; font-size: 1rem; line-height: 1.75; margin-bottom: 1rem;">
  首印年份：1985 年<br>
  核心重點：<br>
  &emsp;&emsp;&emsp;&emsp;1.確定任務需求（Mission Requirements）：航程、巡航速度、載重（Payload）。<br>
  &emsp;&emsp;&emsp;&emsp;2.估算起飛總重（Take-off Weight, $W_0$）與燃料重量比例。<br>
  &emsp;&emsp;&emsp;&emsp;3.設定初步翼面積（Wing Area）與推力/功率比。<br>
  <img src="/image/2026-08-28_082423.png" alt="測試圖片"/>
</p>


### 🔹 Part II：初步構型設計與推進系統整合 (Preliminary Configuration Design & Propulsion Integration)
* **首印年份**：1985 年
* **核心重點**：
  * 選擇飛機整體外觀構型（高單翼/低單翼、鴨翼/傳統尾翼等）。
  * 發動機（Propulsion System）的選型與安裝位置（機翼下方、尾部、機身內部）。
  * 進氣道與排氣系統的氣流匹配設計。

![Part II 封面照片](/image/2026-08-28_082634.png)

---

### 🔹 Part III：駕駛艙、機身、機翼與尾翼佈局設計 (Layout Design of Cockpit, Fuselage, Wing and Empennage)
* **首印年份**：1986 年
* **核心重點**：
  * **剖面圖（Cutaways）**與**內部輪廓（Inboard Profiles）**繪製。
  * 人體工學與駕駛艙視野佈局。
  * 客艙/貨艙空間配置與結構穿孔設計。

![Part III 封面照片](/image/2026-08-28_082906.png)

---

### 🔹 Part IV：起落架與系統佈局設計 (Layout Design of Landing Gear and Systems)
* **首印年份**：1986 年 (平裝) / 1989 年 (精裝)
* **核心重點**：
  * 起落架（Landing Gear）幾何佈局與收放機制（前三點 vs. 後三點）。
  * 防翻覆與地面操控穩定性分析。
  * 液壓、電氣、環境控制（ECS）等機載系統空間規劃。

![Part IV 封面照片](/image/2026-08-28_083549.png)

---

### 🔹 Part V：零組件重量估算 (Component Weight Estimation)
* **首印年份**：1985 年
* **核心重點**：
  * 使用經驗公式與半結構法精確估算各部件重量（機翼、機身、起落架、發動機等）。
  * 重心（Center of Gravity, CG）變動範圍分析與 CG envelope 繪製。

![Part V 封面照片](/image/2026-08-28_083859.png)

---

### 🔹 Part VI：氣動力、推力與動力特性初步計算 (Preliminary Calculation of Aerodynamic, Thrust and Power)
* **首印年份**：1987 年
* **核心重點**：
  * 升力與阻力極線（Drag Polar）估算。
  * 零升力阻力（$C_{D0}$）與感應阻力計算。
  * 不同飛行高度與速度下的可用推力/功率分析。

![Part VI 封面照片](/image/2026-08-28_083937.png)

---

### 🔹 Part VII：穩定性、控制與飛行性能特性測定 (Stability, Control and Performance Characteristics)
* **首印年份**：1988 年
* **核心重點**：
  * **靜態與動態穩定性**（Static & Dynamic Stability）分析。
  * 滿足**聯邦航空法規（FAR）**與**軍用標準（Military Requirements）**的性能測試基準。
  * 升限、爬升率、起降距離與轉彎性能計算。

![Part VII 封面照片](/image/2026-08-28_084007.png)

---

### 🔹 Part VIII：飛機成本估算：設計、開發、製造與營運 (Airplane Cost Estimation)
* **首印年份**：1990 年 (精裝)
* **核心重點**：
  * **RDT&E 成本**（研究、設計、測試與評估費用）。
  * 單機製造成本與量產學習曲線（Learning Curve）。
  * 航空公司直接營運成本（DOC）與間接營運成本（IOC）估算。

![Part VIII 封面照片](/image/2026-08-28_084037.png)

---

## 💡 結語

Dr. Jan Roskam 的《Airplane Design》全套八冊，從概念發想一直延伸至商業營運，系統化地建構了近代航空器工程設計的完整論述。無論是航太系學生、工程師，或是航空愛好者，這套作品都是不可多得的珍貴寶典！