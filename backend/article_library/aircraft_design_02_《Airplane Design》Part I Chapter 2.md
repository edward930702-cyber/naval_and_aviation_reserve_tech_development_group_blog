---
title: "《Airplane Design》Part I Chapter 2."
description: "Aircraft Design 02"
pubDate: 2026-08-31
category: "航太工程"
tags: ["Aircrafr Design"]
---

<p style="color: #cbd5e1; font-size: 1rem; line-height: 1.75; margin-bottom: 1rem;">
  <p style="color: #cbd5e1; font-weight: bold; font-size: 1.1rem; margin-top: 16px; margin-bottom: 6px;">
    估算起飛總重 <span style="font-family: 'Times New Roman', serif; font-style: italic;">W<sub>TO</sub></span>、空重 <span style="font-family: 'Times New Roman', serif; font-style: italic;">W<sub>E</sub></span> 與任務燃油重量 <span style="font-family: 'Times New Roman', serif; font-style: italic;">W<sub>F</sub></span>
  </p>
  <p>
    飛機通常必須在載運指定有效載荷（payload）的同時，滿足非常嚴格的航程（range）、續航時間（endurance）、速度（speed）與巡航速度（cruise speed）目標。<br>
    因此，能夠預測完成特定任務所需的最小飛機重量與燃油重量至關重要。<br>
    針對給定的任務規範，本章提出了一種用於估算的快速方法：<br>
    &emsp;&emsp;&emsp;&emsp;* 起飛總重，<span style="font-family: 'Times New Roman', serif; font-style: italic; font-weight: bold;">W<sub>TO</sub></span><br>
    &emsp;&emsp;&emsp;&emsp;* 空重，<span style="font-family: 'Times New Roman', serif; font-style: italic; font-weight: bold;">W<sub>E</sub></span><br>
    &emsp;&emsp;&emsp;&emsp;* 任務燃油重量，<span style="font-family: 'Times New Roman', serif; font-style: italic; font-weight: bold;">W<sub>F</sub></span><br>
    &emsp;<br>
    此方法適用於以下十二種類型的飛機：<br>
    &emsp;&emsp;&emsp;&emsp;1. 自製螺旋槳飛機 (Homebuilt Propeller Driven Airplanes)<br>
    &emsp;&emsp;&emsp;&emsp;2. 單發動機螺旋槳飛機 (Single Engine Propeller Driven Airplanes)<br>
    &emsp;&emsp;&emsp;&emsp;3. 雙發動機螺旋槳飛機 (Twin Engine Propeller Driven Airplanes)<br>
    &emsp;&emsp;&emsp;&emsp;4. 農業飛機 (Agricultural Airplanes)<br>
    &emsp;&emsp;&emsp;&emsp;5. 商務噴射機 (Business Jets)<br>
    &emsp;&emsp;&emsp;&emsp;6. 區域渦輪螺旋槳飛機 (Regional Turbopropeller Driven Airplanes)<br>
    &emsp;&emsp;&emsp;&emsp;7. 運輸噴射機 (Transport Jets)<br>
    &emsp;&emsp;&emsp;&emsp;8. 軍用教練機 (Military Trainers)<br>
    &emsp;&emsp;&emsp;&emsp;9. 戰鬥機 (Fighters)<br>
    &emsp;&emsp;&emsp;&emsp;10. 軍用巡邏、轟炸及運輸機 (Military Patrol, Bomb and Transport Airplanes)<br>
    &emsp;&emsp;&emsp;&emsp;11. 飛艇、兩棲及浮筒水上飛機 (Flying Boats, Amphibious and Float Airplanes)<br>
    &emsp;&emsp;&emsp;&emsp;12. 超音速巡航飛機 (Supersonic Cruise Airplanes)
    &emsp;<br>
  </p>

  <p style="color: #ffffff; font-weight: bold; font-size: 1.1rem; margin-top: 16px; margin-bottom: 6px;">
    2.1 方法總綱
  </p>
  <p>
    將起飛總重 <span style="font-family: 'Times New Roman', serif; font-style: italic; font-weight: bold;">W<sub>TO</sub></span> 拆解的一種便利方式如下：<br>
  </p>
  <p style="font-family: 'Times New Roman', serif; font-style: italic; font-weight: bold; text-align: center; margin: 15px 0;">
    W<sub>TO</sub> = W<sub>OE</sub> + W<sub>F</sub> + W<sub>PL</sub>
    <span style="float: right; font-style: normal; font-weight: normal;">(2.1)</span>
  </p>
  <p>
    其中：<br>
  </p>
  <p>
    <span style="display: inline-block; margin-left: 20px;">
        <span style="font-family: 'Times New Roman', serif; font-style: italic; font-weight: bold;">W<sub>OE</sub></span> 為飛機營運空重，
    </span><br>
    <span style="display: inline-block; margin-left: 20px;">
        <span style="font-family: 'Times New Roman', serif; font-style: italic; font-weight: bold;">W<sub>F</sub></span> 為任務燃油重量，
    </span><br>
    <span style="display: inline-block; margin-left: 20px;">
        <span style="font-family: 'Times New Roman', serif; font-style: italic; font-weight: bold;">W<sub>PL</sub></span> 為有效載荷重量。
    </span><br><br>
    營運空重 <span style="font-family: 'Times New Roman', serif; font-style: italic; font-weight: bold;">W<sub>OE</sub></span>（亦稱為 OWE），通常表示如下：
  </p>
  <p style="font-family: 'Times New Roman', serif; font-style: italic; font-weight: bold; text-align: center; margin: 15px 0;">
    W<sub>OE</sub> = W<sub>E</sub> + W<sub>tfo</sub> + W<sub>crew</sub>
    <span style="float: right; font-style: normal; font-weight: normal;">(2.2)</span>
  </p>
  <p style="font-family: Arial, 'Microsoft JhengHei', sans-serif; line-height: 1.8; color: #cbd5e1;">
    其中：<br>
    <span style="display: inline-block; margin-left: 20px;">
        <span style="font-family: 'Times New Roman', serif; font-style: italic; font-weight: bold;">W<sub>E</sub></span> 為空重，
    </span><br>
    <span style="display: inline-block; margin-left: 20px;">
        <span style="font-family: 'Times New Roman', serif; font-style: italic; font-weight: bold;">W<sub>tfo</sub></span> 為所有殘留（=不可用）燃油與滑油的重量，
    </span><br>
    <span style="display: inline-block; margin-left: 20px;">
        <span style="font-family: 'Times New Roman', serif; font-style: italic; font-weight: bold;">W<sub>crew</sub></span> 為操作飛機所需機組人員的重量。
    </span><br><br>
    必須記住的是，空重 <span style="font-family: 'Times New Roman', serif; font-style: italic; font-weight: bold;">W<sub>E</sub></span> 有時會以下列方式細分：
  </p>
  <p style="font-family: 'Times New Roman', serif; font-style: italic; font-weight: bold; text-align: center; margin: 15px 0;">
    W<sub>E</sub> = W<sub>ME</sub> + W<sub>FEQ</sub>
    <span style="float: right; font-style: normal; font-weight: normal;">(2.3)</span>
  </p>
  <p style="font-family: Arial, 'Microsoft JhengHei', sans-serif;   line-height: 1.8; color: #cbd5e1;">
    其中：<br>
    <span style="display: inline-block; margin-left: 20px;">
        <span style="font-family: 'Times New Roman', serif; font-style: italic; font-weight: bold;">W<sub>ME</sub></span> 為製造商空重（manufacturers empty weight），有時稱為綠飛機重量（green weight），
    </span><br>
    <span style="display: inline-block; margin-left: 20px;">
        <span style="font-family: 'Times New Roman', serif; font-style: italic; font-weight: bold;">W<sub>FEQ</sub></span> 為固定設備重量（fixed equipment weight）。
    </span><br><br>
    固定設備重量可包含以下項目：<br>
    <span style="display: inline-block; margin-left: 20px;">* 航電設備 (avionics equipment)</span><br>
    <span style="display: inline-block; margin-left: 20px;">* 空調設備 (airconditioning equipment)</span><br>
    <span style="display: inline-block; margin-left: 20px;">* 專用雷達設備 (special radar equipment)</span><br>
    <span style="display: inline-block; margin-left: 20px;">* 輔助動力單元 (auxiliary power unit, APU)</span><br>
    <span style="display: inline-block; margin-left: 20px;">* 內裝與傢俱設施 (furnishings and interiors)</span><br>
    <span style="display: inline-block; margin-left: 20px;">* 飛機於執行預定任務期間所需的其他設備 (other equipment needed to operate the airplane during its intended mission)</span>
  </p>
  <p style="font-family: Arial, 'Microsoft JhengHei', sans-serif; line-height: 1.8; color: #cbd5e1;">
    在此階段，必須強調兩個關鍵點：<br><br>
    <span style="display: inline-block; margin-left: 20px;">
        <span style="text-decoration: underline; font-weight: bold;">要點 1：</span> 從非常基礎的考量來估算所需的任務燃油重量 <span style="font-family: 'Times New Roman', serif; font-style: italic; font-weight: bold;">W<sub>F</sub></span> 並不困難。這將在第 2.4 節中說明。
    </span><br><br>
    <span style="display: inline-block; margin-left: 20px;">
        <span style="text-decoration: underline; font-weight: bold;">要點 2：</span> 對於前面提到的十二種類型飛機，<span style="font-family: 'Times New Roman', serif; font-style: italic; font-weight: bold;">log<sub>10</sub>W<sub>TO</sub></span> 與 <span style="font-family: 'Times New Roman', serif; font-style: italic; font-weight: bold;">log<sub>10</sub>W<sub>E</sub></span> 之間存在線性關係。此點的圖表證據將在第 2.5 節中呈現。
    </span>
  </p>
  <p style="font-family: Arial, 'Microsoft JhengHei', sans-serif; line-height: 1.8; color: #cbd5e1;">
    基於這兩點，估算 <span style="font-family: 'Times New Roman', serif; font-style: italic; font-weight: bold;">W<sub>TO</sub></span>、<span style="font-family: 'Times New Roman', serif; font-style: italic; font-weight: bold;">W<sub>E</sub></span> 與 <span style="font-family: 'Times New Roman', serif; font-style: italic; font-weight: bold;">W<sub>F</sub></span> 數值的過程包含以下步驟：
  </p>
  <p style="font-family: Arial, 'Microsoft JhengHei', sans-serif; line-height: 1.8; color: #cbd5e1;">
    <strong>步驟 1.</strong> 確定任務有效載荷重量 <span style="font-family: 'Times New Roman', serif; font-style: italic; font-weight: bold;">W<sub>PL</sub></span>（第 2.2 節）。<br>
    <strong>步驟 2.</strong> 猜測一個合理的起飛重量 <span style="font-family: 'Times New Roman', serif; font-style: italic; font-weight: bold;">W<sub>TO<sub>guess</sub></sub></span>（第 2.3 節）。<br>
    <strong>步驟 3.</strong> 確定任務燃油重量 <span style="font-family: 'Times New Roman', serif; font-style: italic; font-weight: bold;">W<sub>F</sub></span>（第 2.4 節）。<br>
    <strong>步驟 4.</strong> 由下式計算營運空重的暫定值 <span style="font-family: 'Times New Roman', serif; font-style: italic; font-weight: bold;">W<sub>OE<sub>tent</sub></sub></span>：
  </p>
  <p style="font-family: 'Times New Roman', serif; font-style: italic; font-weight: bold; text-align: center; margin: 10px 0;">
    W<sub>OE<sub>tent</sub></sub> = W<sub>TO<sub>guess</sub></sub> - W<sub>F</sub> - W<sub>PL</sub>
    <span style="float: right; font-style: normal; font-weight: normal;">(2.4)</span>
  </p>
  <p style="font-family: Arial, 'Microsoft JhengHei', sans-serif; line-height: 1.8; color: #cbd5e1;">
    <strong>步驟 5.</strong> 由下式計算空重的暫定值 <span style="font-family: 'Times New Roman', serif; font-style: italic; font-weight: bold;">W<sub>E<sub>tent</sub></sub></span>：
  </p>
  <p style="font-family: 'Times New Roman', serif; font-style: italic; font-weight: bold; text-align: center; margin: 10px 0;">
    W<sub>E<sub>tent</sub></sub> = W<sub>OE<sub>tent</sub></sub> - W<sub>tfo</sub> - W<sub>crew</sub>
    <span style="float: right; font-style: normal; font-weight: normal;">(2.5)</span>
  </p>
  <p style="font-family: Arial, 'Microsoft JhengHei', sans-serif; line-height: 1.8; color: #cbd5e1;">
    雖然對某些飛機而言，<span style="font-family: 'Times New Roman', serif; font-style: italic; font-weight: bold;">W<sub>tfo</sub></span> 可高達 <span style="font-family: 'Times New Roman', serif; font-style: italic; font-weight: bold;">W<sub>TO</sub></span> 的 0.5% 或更多，但在設計過程的這個階段通常會將其忽略。如何確定 <span style="font-family: 'Times New Roman', serif; font-style: italic; font-weight: bold;">W<sub>crew</sub></span> 的數值將在第 2.2 節中討論。<br><br>
    <strong>步驟 6.</strong> 從第 2.5 節中找出空重 <span style="font-family: 'Times New Roman', serif; font-style: italic; font-weight: bold;">W<sub>E</sub></span> 的許用值。<br>
    <strong>步驟 7.</strong> 比較步驟 5 與步驟 6 所得之 <span style="font-family: 'Times New Roman', serif; font-style: italic; font-weight: bold;">W<sub>E<sub>tent</sub></sub></span> 與 <span style="font-family: 'Times New Roman', serif; font-style: italic; font-weight: bold;">W<sub>E</sub></span> 的數值。接下來，調整 <span style="font-family: 'Times New Roman', serif; font-style: italic; font-weight: bold;">W<sub>TO<sub>guess</sub></sub></span> 的數值並重複步驟 3 至步驟 6。持續此過程，直到 <span style="font-family: 'Times New Roman', serif; font-style: italic; font-weight: bold;">W<sub>E<sub>tent</sub></sub></span> 與 <span style="font-family: 'Times New Roman', serif; font-style: italic; font-weight: bold;">W<sub>E</sub></span> 的數值互相符合至預先選定的容許誤差內。在設計過程的這個階段，通常 0.5% 的容許誤差就足夠了。
  </p>
  <p style="font-family: Arial, 'Microsoft JhengHei', sans-serif; line-height: 1.8; color: #cbd5e1;">
    第 2.2 節至第 2.5 節包含估算 <span style="font-family: 'Times New Roman', serif; font-style: italic; font-weight: bold;">W<sub>PL</sub></span>、<span style="font-family: 'Times New Roman', serif; font-style: italic; font-weight: bold;">W<sub>TO</sub></span> 與 <span style="font-family: 'Times New Roman', serif; font-style: italic; font-weight: bold;">W<sub>F</sub></span> 的詳細方法。第 2.6 節則將此分步方法應用於三種類型的飛機。
  </p>

  <p style="color: #ffffff; font-weight: bold; font-size: 1.1rem; margin-top: 16px; margin-bottom: 6px;">
    2.2 任務有效載荷重量 <span style="font-family: 'Times New Roman', serif; font-style: italic;">W<sub>PL</sub></span> 與機組人員重量 <span style="font-family: 'Times New Roman', serif; font-style: italic;">W<sub>crew</sub></span> 之確定
  </p>
  <p style="font-family: Arial, 'Microsoft JhengHei', sans-serif; line-height: 1.8; color: #cbd5e1;">
    在第 2.1 節中，<span style="text-decoration: underline; font-weight: bold;">要點 1</span> 指出從基礎考量來估算 <span style="font-family: 'Times New Roman', serif; font-style: italic; font-weight: bold;">W<sub>F</sub></span> 的數值並不困難。本節將介紹達成此目的的方法。<br><br>
    任務燃油重量 <span style="font-family: 'Times New Roman', serif; font-style: italic; font-weight: bold;">W<sub>F</sub></span> 可表示為：
  </p>
  <p style="font-family: 'Times New Roman', serif; font-style: italic; font-weight: bold; text-align: center; margin: 10px 0;">
    W<sub>F</sub> = W<sub>F<sub>used</sub></sub> + W<sub>F<sub>res</sub></sub>
    <span style="float: right; font-style: normal; font-weight: normal;">(2.6)</span>
  </p>
  <p style="font-family: Arial, 'Microsoft JhengHei', sans-serif; line-height: 1.8; color: #cbd5e1;">
    其中：<br>
    <span style="display: inline-block; margin-left: 20px;">
        <span style="font-family: 'Times New Roman', serif; font-style: italic; font-weight: bold;">W<sub>F<sub>used</sub></sub></span> 為任務期間實際使用的燃油，
    </span><br>
    <span style="display: inline-block; margin-left: 20px;">
        <span style="font-family: 'Times New Roman', serif; font-style: italic; font-weight: bold;">W<sub>F<sub>res</sub></sub></span> 為任務所需的預備燃油。
    </span><br><br>
    預備燃油通常在任務規範中加以規定，也在規範客運運輸機營運的 FAR（聯邦航空法規）中有所規定。預備燃油通常以下列一種或多種形式規定：<br>
    <span style="display: inline-block; margin-left: 20px;">1. 作為 <span style="font-family: 'Times New Roman', serif; font-style: italic; font-weight: bold;">W<sub>F<sub>used</sub></sub></span> 的一部分比例</span><br>
    <span style="display: inline-block; margin-left: 20px;">2. 作為額外航程的要求，以便能飛抵備降機場</span><br>
    <span style="display: inline-block; margin-left: 20px;">3. 作為（額外）盤旋時間的要求</span><br><br>
    為了確定任務期間實際使用的燃油重量 <span style="font-family: 'Times New Roman', serif; font-style: italic; font-weight: bold;">W<sub>F<sub>used</sub></sub></span>，將使用所謂的<span style="text-decoration: underline; font-weight: bold;">燃油比例法（fuel-fraction method）</span>。在此方法中，飛機任務被分解為數個任務階段。每個階段所使用的燃油可透過簡單計算得出，或根據經驗進行估算。<br><br>
    燃油比例法將透過應用於任意飛機來進行說明。圖 2.1 定義了該飛機的任務剖面。<br><br>
    可以觀察到，任務剖面被分解為數個任務階段。每個階段都有一個編號，且每個階段都有其對應的起始重量與結束重量。
  </p>
  &emsp;<br>
  <img src="/image/2026-08-30_160135.png" alt="figure 2.1"/>
  &emsp;<br>
  <p style="font-family: Arial, 'Microsoft JhengHei', sans-serif; line-height: 1.8; color: #cbd5e1;">
    由於引擎啟動和滑行至跑道過程中所消耗的燃料極少，因此滑行重量與起飛重量的比例(燃油分數) <span style="display: inline-block; vertical-align: middle; text-align: center; font-family: 'Times New Roman', serif; font-style: italic;">
        <span style="display: block; border-bottom: 1px solid #cbd5e1; padding: 0 2px;">W<sub>ramp</sub></span>
        <span style="display: block; padding: 0 2px;">W<sub>TO</sub></span>
    </span> 通常幾乎等於 1
  </p>
</p> 