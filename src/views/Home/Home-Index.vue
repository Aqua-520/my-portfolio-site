<script setup>
import { ref, onMounted } from 'vue'
defineOptions({
  name: 'HomeView',
})
/* 
  打字机文本实时显示
*/
const typedText = ref('')
// 需要替换的文本数组，通过下标取文字
const phrases = [
  '一名正在进化的前端开发者',
  '一名沉迷于 Vue 栈的修补匠',
  '一名从日本启程的归国技术生',
  '一个被代码耽误的 maimai 玩家',
]

// 在处理第几段话
let phraseIndex = 0
// 正在处理字符串的第几个下标字符
let charIndex = 0
// false代表在加字，满了切换为true删字
let isDeleting = false
// 每隔多少ms进行一次删除字或者添加字操作
let typeSpeed = 150

/* 
  打字机函数
*/
const handleType = () => {
  // 1. 获取当前正在循环的那句话
  const currentPhrase = phrases[phraseIndex]

  // 2. 核心逻辑：根据当前是“打字”还是“删除”状态，操作字符串截取
  if (isDeleting) {
    // 【删除状态】：截取的长度每次减 1
    typedText.value = currentPhrase.substring(0, charIndex - 1)
    charIndex--
    typeSpeed = 80 // 删除文字通常比打字快，所以速度设快一点
  } else {
    // 【打字状态】：截取的长度每次加 1
    typedText.value = currentPhrase.substring(0, charIndex + 1)
    charIndex++
    typeSpeed = 150 // 模拟正常打字速度
  }

  // 3. 状态转换判断

  // 情况 A：当一句话全部打完时
  // 当是加字状态且文字下标长度加到了跟字符串一样长的时候
  if (!isDeleting && charIndex === currentPhrase.length) {
    isDeleting = true // 切换到删除状态
    typeSpeed = 2000 // 文本完全显示后，停留 2 秒让读者看清楚
  }
  // 情况 B：当一句话全部删完时
  // 删除字状态最后且字符串为0也就是删完了
  else if (isDeleting && charIndex === 0) {
    isDeleting = false // 切换回打字状态
    // 切换到下一句话，利用取余符号 (%) 实现数组循环，回到 0
    phraseIndex = (phraseIndex + 1) % phrases.length
    typeSpeed = 500 // 准备开始下一句前，短暂休息 0.5 秒
  }

  // 4. 递归调用：根据计算出的 typeSpeed 延迟执行下一次操作
  // 这种写法比 setInterval 灵活，因为每一跳的速度都可以动态改变
  setTimeout(handleType, typeSpeed)
}

onMounted(() => {
  handleType()
})
</script>

<template>
  <div class="home-container">
    <div class="avatar-wrapper">
      <img src="@/assets/picture/千早爱音.png" alt="avatar" class="avatar-img" />
    </div>

    <div class="intro-content">
      <h1 class="user-name">汪宸宇</h1>
      <div class="typewriter-box">
        <span class="prefix">你好，我是</span>
        <!-- 动态渲染打字机文字 -->
        <span class="typing-text">{{ typedText }}</span>
        <span class="cursor">|</span>
      </div>
    </div>

    <p class="description">
      欢迎来到我的页面。我是一名<strong>主攻前端开发</strong>的应届生。<br />
      对我来说，代码是一种表达，是在<strong>逻辑与结构</strong>中寻找秩序的过程。<br />
      比起远方，我更沉浸于屏幕之内的创造。仍在起点，但会一直走下去。
    </p>

    <div class="action-buttons">
      <div target="_blank" class="btn btn-primary">点着玩的</div>
      <a href="https://github.com/Aqua-520" target="_blank" class="btn btn-outline">GITHUB</a>
    </div>
  </div>
</template>

<style scoped>
.home-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 20px;
  animation: fadeIn 0.8s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* 头像 */
.avatar-wrapper {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  padding: 5px;
  background: linear-gradient(135deg, #ff69b4, #ffc0cb);
  box-shadow: 0 10px 25px rgba(255, 105, 180, 0.3);
  margin-bottom: 30px;
}

.avatar-img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid #fff;
}

/* 标题与打字机 */
.user-name {
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 10px;
  letter-spacing: 2px;
}

.typewriter-box {
  font-size: 1.2rem;
  color: #666;
  height: 1.5em;
  margin-bottom: 30px;
}

.typing-text {
  color: #ff69b4;
  font-weight: 600;
  margin-left: 8px;
}

.cursor {
  color: #ff69b4;
  animation: blink 0.7s infinite;
}

@keyframes blink {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}

/* 描述文字 */
/* 描述文字 */
.description {
  max-width: 700px;
  line-height: 1.8;
  color: #5e6d82;
  font-size: 1rem;
  margin-bottom: 40px;

  /* 关键修改部分 */
  text-align: center; /* 首先保证文字水平居中 */
  text-wrap: balance; /* 自动平衡每行字数，避免长短不一（现代浏览器支持） */
  margin-left: auto; /* 配合 max-width 实现块级居中 */
  margin-right: auto;
  word-break: break-all; /* 防止长英文单词撑开布局 */
}

.description b,
.description strong {
  color: #ff69b4;
}

/* 按钮样式 */
.action-buttons {
  display: flex;
  gap: 20px;
}

.btn {
  padding: 12px 35px;
  border-radius: 30px;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.btn-primary {
  background-color: #ff69b4;
  color: white;
  box-shadow: 0 4px 15px rgba(255, 105, 180, 0.4);
}

.btn-primary:hover {
  background-color: #ff85c0;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(255, 105, 180, 0.5);
  cursor: pointer;
}

.btn-outline {
  background-color: transparent;
  color: #888;
  border: 1px solid #ddd;
}

.btn-outline:hover {
  border-color: #ff69b4;
  color: #ff69b4;
  background: rgba(255, 105, 180, 0.05);
  transform: translateY(-2px);
}

/* 手机端适配 */
@media (max-width: 768px) {
  .user-name {
    font-size: 1.8rem;
  }
  .description {
    font-size: 0.9rem;
  }
  .action-buttons {
    flex-direction: column;
  }
}
</style>
