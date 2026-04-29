<template>
  <div class="hobbies-container">
    <div class="hobby-card music">
      <div class="hobby-icon">🎮</div>
      <div class="hobby-info">
        <h3>Maimai DX / 音游玩家</h3>
        <p>Rating: 13,468 (Gold Tier)</p>
        <span class="tag">#追求极致</span> <span class="tag">#手速挑战</span>
      </div>
    </div>

    <div class="hobby-card anime">
      <div class="hobby-icon">🎸</div>
      <div class="hobby-info">
        <h3>二次元 / 乐队番痴迷</h3>
        <p>《MyGO!!!!!》忠实粉丝，瑞希/爱音推。</p>
        <span class="tag">#迷子でも進め</span> <span class="tag">#情感共鸣</span>
      </div>
    </div>

    <div class="hobby-card travel">
      <div class="hobby-icon">☕</div>
      <div class="hobby-info">
        <h3>生活方式 / 能量补给</h3>
        <p>Monster 能量饮料重度用户，资深熬夜选手。</p>
        <span class="tag">#咖啡因转化代码</span>
      </div>
    </div>

    <div class="passion-quote">
      <p>“既然能把高难曲目练到 Full Combo，<br />我也一定能把业务逻辑磨到完美运行。”</p>
      <el-button class="apply-btn" @click="$router.push('/about')"
        >我想入行，给个面试机会吧 ✨</el-button
      >
    </div>
  </div>
</template>

<style scoped>
.hobbies-container {
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
}

.hobby-card {
  width: 100%;
  max-width: 600px;
  background: white;
  border-radius: 15px;
  padding: 20px;
  display: flex;
  align-items: center;
  gap: 20px;
  box-shadow: 0 4px 12px rgba(255, 105, 180, 0.1);
  border: 1px solid #fff0f6;
  transition: transform 0.3s;
}

.hobby-card:hover {
  transform: translateX(10px);
  border-color: #ff69b4;
}

.hobby-icon {
  font-size: 40px;
}

.hobby-info h3 {
  color: #ff69b4;
  margin-bottom: 5px;
}

.tag {
  font-size: 12px;
  color: #ff85c0;
  background: #fff0f6;
  padding: 2px 8px;
  border-radius: 10px;
  margin-right: 5px;
}

.passion-quote {
  margin-top: 50px;
  text-align: center;
  color: #666;
  font-style: italic;
}

.apply-btn {
  margin-top: 20px;
  background-color: #ff69b4 !important;
  color: white !important;
  border: none !important;
  border-radius: 20px;
  padding: 12px 25px !important;
}
</style>
