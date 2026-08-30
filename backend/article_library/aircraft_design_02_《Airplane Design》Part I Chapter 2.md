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
    圖片內容的繁體中文翻譯與可直接嵌入 HTML 的程式碼如下：繁體中文翻譯其中：$W_{ME}$ 為製造商空重（Manufacturers Empty Weight），有時稱為綠飛機重量（Green Weight）$W_{FEQ}$ 為固定設備重量（Fixed Equipment Weight）固定設備重量可包含以下項目：航電設備空調設備專用雷達設備輔助動力單元 (APU)內裝與傢俱設施飛機於執行預定任務期間所需的其他設備HTML 程式碼HTML<p style="font-family: Arial, 'Microsoft JhengHei', sans-serif;   line-height: 1.8; color: #222;">
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
</p>