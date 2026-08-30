---
title: "《Airplane Design》Part I Chapter 1."
description: "Aircraft Design 01 "
pubDate: 2026-08-30
category: "航太工程"
tags: ["Aircrafr Design"]
---

<p style="color: #cbd5e1; font-size: 1rem; line-height: 1.75; margin-bottom: 1rem;">
  <p style="color: #cbd5e1; font-weight: bold; font-size: 1.1rem; margin-top: 16px; margin-bottom: 6px;">
    Table of Symbles
  </p>
  <img src="/image/2026-08-30_033230.png" alt="table_of_symble_1"/>
  <img src="/image/2026-08-30_034337.png" alt="table_of_symble_2"/>
  <img src="/image/2026-08-30_034343.png" alt="table_of_symble_3"/>
  <img src="/image/2026-08-30_034349.png" alt="table_of_symble_4"/>

  <p style="color: #cbd5e1; font-weight: bold; font-size: 1.1rem; margin-top: 16px; margin-bottom: 6px;">
    Introduction
  </p>
  <p>
    本套《飛機設計》系列叢書的宗旨，在於使航太工程系的學生熟悉飛機設計過程中所涉及的分析方法與決策制定。<br>
    若要設計一架飛機，必須先取得該飛機的任務規範（mission specification）。<br>
    飛機任務規範的形成方式各有不同，取決於飛機的類型，有時亦取決於客戶需求。<br>
    圖 1.1 說明了任務規範可能演進的幾條路徑。<br>
    讀者會注意到，「初步尺寸估算（preliminary sizing）」與「初步設計（preliminary design）」這兩個詞彙出現在圖 1.1 中。本系列叢書的重點即集中於飛機設計的這些階段。<br>
    許多飛機永遠無法跨越初始或初步設計階段。事實上，絕大多數的飛機都停留在這個階段。<br>
    初步設計階段之後會如何發展，很大程度上取決於初步設計期間所獲得的結果，以及後續市場對該機型的實際需求或預期興趣。<br>
    如果在初步設計研究後確定能滿足特定需求，即可進入飛機的全尺寸開發（full scale development）階段。<br>
    若在初步設計研究中發現某些問題領域（例如需要透過研發來修正的特定技術缺陷，或是缺乏相關數據庫），則可啟動研究與開發計畫，旨在克服這些問題。<br>
    最終，當問題獲得解決後，便能演進出最終的任務規範，進而推動全尺寸開發。<br>
    若在研究計畫進行期間顯露出問題無法在合理的時間或成本內解決，則該項設計可能會被放棄或修改。<br>
    圖 1.2 說明了本系列叢書所涵蓋的初步設計流程。<br>
    本系列叢書的結構編排如下：<br>
    &emsp;&emsp;&emsp;&emsp;Part I.初步尺寸估算 (Preliminary Sizing)<br>
    &emsp;&emsp;&emsp;&emsp;Part II.構型設計與推進系統 (Configuration & Propulsion)<br>
    &emsp;&emsp;&emsp;&emsp;Part III.駕駛艙、機身、機翼與尾翼佈局 (Layout & Cutaways)<br>
    &emsp;&emsp;&emsp;&emsp;Part IV.起落架與子系統佈局 (Landing Gear & Systems)<br>
    &emsp;&emsp;&emsp;&emsp;Part V.各組件重量估算 (Component Weight)<br>
    &emsp;&emsp;&emsp;&emsp;Part VI.氣動力、推力與動力計算 (Aerodynamics & Power)<br>
    &emsp;&emsp;&emsp;&emsp;Part VII.穩定性、控制與性能 (Stability & Performance)<br>
    &emsp;&emsp;&emsp;&emsp;Part VIII.成本估算與營運分析 (Cost Estimation)<br>
    &emsp;<br>
    第一部分（PART I）的宗旨，在於提出一種針對給定任務規範進行飛機初步尺寸估算（preliminary sizing）的快速方法。<br>
    初步尺寸估算的定義為透過該快速方法，得出下列飛機設計參數的數值定義：<br>
    &emsp;&emsp;&emsp;&emsp;*Gross Take-off Weight, W<sub>TO</sub><br>
    &emsp;&emsp;&emsp;&emsp;*Empty Weight, W<sub>E</sub><br>
    &emsp;&emsp;&emsp;&emsp;*Mission Fuel Weight, W<sub>F</sub><br>
    &emsp;&emsp;&emsp;&emsp;*Maximum Required Take-off Thrust, T<sub>TO</sub> or Take-off Power, P<sub>TO</sub><br>
    &emsp;&emsp;&emsp;&emsp;*Wing Area, S and Wing Aspect Ratio, A<br>
    &emsp;&emsp;&emsp;&emsp;*Maximum Required Lift Coefficient (Clean), C<sub>L<sub>max</sub></sub><br>
    &emsp;&emsp;&emsp;&emsp;*Maximum Required Lift Coefficient for Take-off, C<sub>L<sub>max<sub>TO</sub></sub></sub><br>
    &emsp;&emsp;&emsp;&emsp;*Maximum Required Lift Coefficient for Landing, C<sub>L<sub>max<sub>L</sub></sub></sub> or C<sub>L<sub>max<sub>PA</sub></sub></sub><br>
    &emsp;<br>
    本書假設已可取得該飛機的任務規範。在任務規範中，通常會以數值明確定義的典型參數包含：<br>
    &emsp;&emsp;&emsp;&emsp;*Payload and type of payload<br>
    &emsp;&emsp;&emsp;&emsp;*Range and/or loiter requirements<br>
    &emsp;&emsp;&emsp;&emsp;*Cruise speed and altitude<br>
    &emsp;&emsp;&emsp;&emsp;*Field length for take-off and for landing<br>
    &emsp;&emsp;&emsp;&emsp;*Fuel reserves<br>
    &emsp;&emsp;&emsp;&emsp;*Climb requirements<br>
    &emsp;&emsp;&emsp;&emsp;*Maneuvering requirements<br>
    &emsp;&emsp;&emsp;&emsp;*Certification base (For example: Experimental, FAR 23, FAR 25 or Military)<br>
    &emsp;<br>
    有些任務規範所包含的細節會比其他規範詳細得多。這取決於撰寫規範的客戶，以及該客戶希望給予飛機設計師多少設計彈性。<br>
    本書所介紹的尺寸估算方法依序如下:<br>
    &emsp;&emsp;&emsp;&emsp;第 2 章：估算起飛總重 W<sub>TO</sub>、空重 W<sub>E</sub> 以及任務燃料重 W<sub>F</sub>。<br>
    &emsp;&emsp;&emsp;&emsp;第 3 章：估算機翼面積 S、機翼展弦比 A、起飛推力 T<sub>TO</sub> 以及最大升力係數 C<sub>L<sub>max</sub></sub>、C<sub>L<sub>max<sub>TO</sub></sub></sub> 與 C<sub>L<sub>max<sub>L</sub></sub></sub>。<br>
    &emsp;&emsp;&emsp;&emsp;第 4 章：提供初步尺寸估算流程的使用者指南。<br>
    &emsp;<br>
    <img src="/image/2026-08-30_044359.png" alt="Figure 1.1"/>
    &emsp;<br>
    <img src="/image/2026-08-30_044418.png" alt="Figure 1.2"/>
    &emsp;<br>
  </p>
</p>