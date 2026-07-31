const vegetableData = [
  { id: "purple", name: "紫背草", tribe: "kamutu", color: "#7d5aa6", image: "assets/purple-back-grass-cutout.png" },
  { id: "onion", name: "刺蔥", tribe: "tjanaq", color: "#3d8f61", image: "assets/cicong-cutout.png" },
  { id: "lettuce", name: "山萵苣", tribe: "samaq", color: "#73a857", image: "assets/lettuce-cutout.png" },
  { id: "showa", name: "昭和草", tribe: "qaudriudri", color: "#9aaf48", image: "assets/showa-grass-cutout.png" },
  { id: "pumpkin", name: "南瓜嫩葉", tribe: "ludus", color: "#d69a36", image: "assets/pumpkin-leaf-cutout.png" },
];

const storyPages = [
  {
    eyebrow: "名稱由來",
    title: "從「山地飯」到「搖搖飯」",
    body:
      "搖搖飯最初並沒有這個名稱，早期漢人多稱它為「山地飯」，意指山地人所食用的飯。後來媒體與記者介紹這道傳統料理時，依照製作過程中一邊攪拌、一邊搖動鍋中食材的特色，將它命名為「搖搖飯」，這個名稱也逐漸流傳開來。",
    visual: "origin-meal",
  },
  {
    eyebrow: "族語名稱",
    title: "pinuljacengan",
    body:
      "以排灣族語來說，這道料理真正的名稱是「pinuljacengan」，意思是「放入蔬菜的飯」，也可稱為「健康蔬菜飯」。這個名稱更直接說出了料理的核心：把當季野菜與米飯一起煮成一鍋共享的食物。",
    visual: "name-greens",
  },
  {
    eyebrow: "有趣小故事",
    title: "鍋巴留給誰？",
    body:
      "部落長輩過去常會透過一些有趣的故事影響孩子的飲食習慣。例如，為了不讓小朋友吃搖搖飯的鍋巴，長輩會故意說：「小朋友吃了會長腫包。」雖然這並非事實，但孩子們往往會因此不敢食用，鍋巴也就留給大人享用，成為許多人童年的回憶。",
    visual: "rice-memory",
  },
  {
    eyebrow: "吃飯的規定",
    title: "一鍋飯裡的分享禮儀",
    body:
      "過去在部落裡，搖搖飯通常是一大鍋供大家一起享用。用餐時，大家圍坐在鍋子四周，每個人拿著一支湯匙，並遵守共同禮儀：只能舀取自己面前的飯，不能伸手去挖別人面前的部分。這樣的習慣展現彼此尊重與公平分享的精神。",
    visual: "sharing-bowl",
  },
  {
    eyebrow: "材料",
    title: "依季節採集的野菜",
    body:
      "搖搖飯並沒有規定一定要放哪些蔬菜，而是依照季節和當地自然環境，採集當季盛產的野菜加入料理。不同野菜有不同風味與口感，有些味道較濃烈會少放，有些越煮越香甜就會多放。",
    visual: "seasonal-greens",
  },
  {
    eyebrow: "材料比例",
    title: "每一鍋都有自己的味道",
    body:
      "野菜的比例是影響搖搖飯風味的重要關鍵。若味道較重的野菜放得太多，整鍋飯的味道也會更濃烈，不一定符合所有人的口味。因此，每位料理者都會依自己的喜好調整野菜種類與比例，使每一鍋搖搖飯都有獨特風味。",
    visual: "flavor-mix",
  },
  {
    eyebrow: "料理方式",
    title: "固定方向攪拌",
    body:
      "製作搖搖飯時，攪拌方式十分重要。攪拌時必須固定同一個方向，不論順時針或逆時針，一旦選定方向，就不能隨意來回攪拌或改變方向。攪拌的同時，另一人會持續將野菜加入鍋中，過程不能中斷，否則野菜容易黏在一起，影響口感。",
    visual: "stirring-pot",
  },
  {
    eyebrow: "料理方式",
    title: "不是一般稀飯",
    body:
      "搖搖飯的濃稠度不是靠中途加水調整，而是在一開始控制好水量，再透過持續攪拌，使米粒釋放澱粉，讓整鍋飯變得更濃稠，也讓野菜與米飯充分融合。雖然外觀看起來與稀飯相似，但因製作方式、食材搭配與口感都不同，搖搖飯並不能等同於一般稀飯。",
    visual: "texture-rice",
  },
  {
    eyebrow: "遊戲方式",
    title: "歡迎來到搖搖飯料理屋",
    body:
      "閱讀完歷史與製作方式後，進入 2 分鐘限時挑戰。玩家需依照客人訂單完成料理：加水、加米、順時鐘攪拌三圈、拖曳加入指定野菜與份數、再順時鐘攪拌三圈、盛裝並交給客人。正確訂單可得 15 分，每項錯誤扣 5 分；總分達 60 分以上，即可解鎖自由料理模式。",
    visual: "game-ingredients",
  },
];

const customers = ["阿布", "米娜", "小禾", "雅各", "山風", "莉苓"];

const gameState = {
  pageIndex: 0,
  timeLimit: 120,
  timeRemaining: 120,
  totalScore: 0,
  completedOrders: 0,
  perfectOrders: 0,
  incorrectOrders: 0,
  timerId: null,
  isChallengeRunning: false,
  isPaused: false,
  isTimeUp: false,
  pendingNextOrder: false,
  isResettingAttempt: false,
  mode: "challenge",
  order: null,
  cooking: null,
  currentOrderErrors: new Set(),
  customModeUnlocked: false,
  stirGesture: {
    active: false,
    lastAngle: 0,
    clockwiseTravel: 0,
  },
};

const els = {
  coverPanel: document.querySelector("#coverPanel"),
  aboutPanel: document.querySelector("#aboutPanel"),
  vegLibraryPanel: document.querySelector("#vegLibraryPanel"),
  readerPanel: document.querySelector("#readerPanel"),
  hudPanel: document.querySelector("#hudPanel"),
  gamePanel: document.querySelector("#gamePanel"),
  summaryPanel: document.querySelector("#summaryPanel"),
  customPanel: document.querySelector("#customPanel"),
  learnVegBtn: document.querySelector("#learnVegBtn"),
  enterBtn: document.querySelector("#enterBtn"),
  aboutBtn: document.querySelector("#aboutBtn"),
  aboutBackBtn: document.querySelector("#aboutBackBtn"),
  vegBackBtn: document.querySelector("#vegBackBtn"),
  prevPageBtn: document.querySelector("#prevPageBtn"),
  nextPageBtn: document.querySelector("#nextPageBtn"),
  pageMark: document.querySelector("#pageMark"),
  pageEyebrow: document.querySelector("#pageEyebrow"),
  pageTitle: document.querySelector("#pageTitle"),
  pageBody: document.querySelector("#pageBody"),
  bookVisual: document.querySelector("#bookVisual"),
  timerBox: document.querySelector("#timerBox"),
  timer: document.querySelector("#timer"),
  score: document.querySelector("#score"),
  completed: document.querySelector("#completed"),
  pauseBtn: document.querySelector("#pauseBtn"),
  pauseMenu: document.querySelector("#pauseMenu"),
  restartPausedBtn: document.querySelector("#restartPausedBtn"),
  homePausedBtn: document.querySelector("#homePausedBtn"),
  orderEyebrow: document.querySelector("#orderEyebrow"),
  orderSpeech: document.querySelector("#orderSpeech"),
  customerName: document.querySelector("#customerName"),
  orderList: document.querySelector("#orderList"),
  phaseHint: document.querySelector("#phaseHint"),
  resultBox: document.querySelector("#resultBox"),
  ingredientsTray: document.querySelector("#ingredientsTray"),
  riceQuick: document.querySelector("#riceQuick"),
  waterQuick: document.querySelector("#waterQuick"),
  pot: document.querySelector("#pot"),
  potLabel: document.querySelector("#potLabel"),
  stirBtn: document.querySelector("#stirBtn"),
  stirCountLabel: document.querySelector("#stirCountLabel"),
  serveBtn: document.querySelector("#serveBtn"),
  deliverBtn: document.querySelector("#deliverBtn"),
  waterState: document.querySelector("#waterState"),
  riceState: document.querySelector("#riceState"),
  serveState: document.querySelector("#serveState"),
  chosenList: document.querySelector("#chosenList"),
  finalCompleted: document.querySelector("#finalCompleted"),
  finalScore: document.querySelector("#finalScore"),
  finalPerfect: document.querySelector("#finalPerfect"),
  finalIncorrect: document.querySelector("#finalIncorrect"),
  summaryTitle: document.querySelector("#summaryTitle"),
  unlockText: document.querySelector("#unlockText"),
  retryBtn: document.querySelector("#retryBtn"),
  customBtn: document.querySelector("#customBtn"),
  customGrid: document.querySelector("#customGrid"),
  finishCustomBtn: document.querySelector("#finishCustomBtn"),
  backBtn: document.querySelector("#backBtn"),
  customResult: document.querySelector("#customResult"),
};

const audioState = {
  current: null,
  button: null,
};

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60).toString().padStart(2, "0");
  const secs = (seconds % 60).toString().padStart(2, "0");
  return `${minutes}:${secs}`;
}

function playAudio(src, button) {
  if (audioState.current) {
    audioState.current.pause();
    audioState.current.currentTime = 0;
    if (audioState.button) audioState.button.textContent = audioState.button.dataset.label ?? "播放";
  }
  if (audioState.button === button) {
    audioState.current = null;
    audioState.button = null;
    return;
  }
  const audio = new Audio(src);
  audioState.current = audio;
  audioState.button = button;
  button.dataset.label = button.textContent;
  button.textContent = button.classList.contains("audio-button") ? "■" : "停止試聽";
  audio.addEventListener("ended", () => {
    button.textContent = button.dataset.label;
    audioState.current = null;
    audioState.button = null;
  });
  audio.play().catch(() => {
    button.textContent = button.dataset.label;
    audioState.current = null;
    audioState.button = null;
  });
}

function bindAudioButtons() {
  document.querySelectorAll("[data-audio-src]").forEach((button) => {
    button.addEventListener("click", () => playAudio(button.dataset.audioSrc, button));
  });
}

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function shuffle(items) {
  return [...items].sort(() => Math.random() - 0.5);
}

function emptyCookingState() {
  return {
    water: false,
    rice: false,
    stirBeforeVegetables: 0,
    stirAfterVegetables: 0,
    served: false,
    delivered: false,
    vegetables: Object.fromEntries(vegetableData.map((veg) => [veg.id, 0])),
    actions: [],
    hasAddedVegetables: false,
  };
}

function createOrder() {
  const count = randomInt(2, 4);
  const picked = shuffle(vegetableData).slice(0, count);
  const needs = {};
  picked.forEach((veg) => {
    needs[veg.id] = randomInt(1, 3);
  });
  return {
    customer: customers[randomInt(0, customers.length - 1)],
    needs,
  };
}

function showOnly(panel) {
  [els.coverPanel, els.aboutPanel, els.vegLibraryPanel, els.readerPanel, els.hudPanel, els.gamePanel, els.summaryPanel, els.customPanel].forEach(
    (item) => {
      item.hidden = item !== panel && !(panel === els.gamePanel && item === els.hudPanel);
    },
  );
  if (panel !== els.gamePanel) closePauseMenu(false);
}

function renderStoryPage() {
  const page = storyPages[gameState.pageIndex];
  els.pageMark.textContent = `${gameState.pageIndex + 1} / ${storyPages.length}`;
  els.pageEyebrow.textContent = page.eyebrow;
  els.pageTitle.textContent = page.title;
  els.pageBody.textContent = page.body;
  els.bookVisual.className = `book-visual ${page.visual}`;
  els.prevPageBtn.disabled = gameState.pageIndex === 0;
  els.nextPageBtn.textContent =
    gameState.pageIndex === storyPages.length - 1 ? "開始挑戰" : "下一頁";
}

function resetChallenge() {
  clearInterval(gameState.timerId);
  gameState.timerId = null;
  gameState.timeRemaining = gameState.timeLimit;
  gameState.totalScore = 0;
  gameState.completedOrders = 0;
  gameState.perfectOrders = 0;
  gameState.incorrectOrders = 0;
  gameState.isChallengeRunning = false;
  gameState.isPaused = false;
  gameState.isTimeUp = false;
  gameState.pendingNextOrder = false;
  gameState.isResettingAttempt = false;
  gameState.mode = "challenge";
  gameState.order = null;
  gameState.cooking = emptyCookingState();
  gameState.currentOrderErrors.clear();
  updateStats();
}

function startChallenge() {
  resetChallenge();
  gameState.mode = "challenge";
  showOnly(els.gamePanel);
  gameState.isChallengeRunning = true;
  renderIngredients();
  nextOrder();
  gameState.timerId = setInterval(tick, 1000);
  updateStats();
}

function tick() {
  if (!gameState.isChallengeRunning || gameState.isPaused) return;
  gameState.timeRemaining = Math.max(0, gameState.timeRemaining - 1);
  updateStats();
  if (gameState.timeRemaining === 0) finishChallenge();
}

function finishChallenge() {
  clearInterval(gameState.timerId);
  gameState.timerId = null;
  gameState.isChallengeRunning = false;
  gameState.isPaused = false;
  gameState.isTimeUp = true;
  closePauseMenu(false);
  showOnly(els.summaryPanel);

  gameState.customModeUnlocked = gameState.customModeUnlocked || gameState.totalScore >= 60;
  els.finalCompleted.textContent = gameState.completedOrders;
  els.finalScore.textContent = gameState.totalScore;
  els.finalPerfect.textContent = gameState.perfectOrders;
  els.finalIncorrect.textContent = gameState.incorrectOrders;
  els.customBtn.hidden = !gameState.customModeUnlocked;

  if (gameState.totalScore >= 60) {
    els.summaryTitle.textContent = "挑戰成功！";
    els.unlockText.textContent = "你已解鎖「製作自己的搖搖飯」。";
  } else {
    els.summaryTitle.textContent = "再試一次！";
    els.unlockText.textContent = "分數達 60 分就能解鎖自由製作模式。";
  }
}

function resetCookingForMode(mode) {
  clearInterval(gameState.timerId);
  gameState.timerId = null;
  gameState.mode = mode;
  gameState.isChallengeRunning = true;
  gameState.isPaused = false;
  gameState.isTimeUp = false;
  gameState.pendingNextOrder = false;
  gameState.isResettingAttempt = false;
  gameState.order = null;
  gameState.cooking = emptyCookingState();
  gameState.currentOrderErrors.clear();
  gameState.stirGesture.active = false;
  gameState.stirGesture.clockwiseTravel = 0;
  els.resultBox.textContent = "";
  els.resultBox.className = "result";
}

function nextOrder() {
  if (gameState.isTimeUp) return;
  gameState.pendingNextOrder = false;
  gameState.isResettingAttempt = false;
  gameState.order = createOrder();
  gameState.cooking = emptyCookingState();
  gameState.currentOrderErrors.clear();
  els.resultBox.textContent = "";
  els.resultBox.className = "result";
  renderOrder();
  renderCooking();
}

function failCurrentAttempt(message) {
  if (gameState.mode !== "challenge" || gameState.isResettingAttempt || gameState.isTimeUp) return;
  gameState.isResettingAttempt = true;
  gameState.cooking = emptyCookingState();
  gameState.currentOrderErrors.clear();
  endStirGesture();
  renderCooking();
  els.resultBox.className = "result error attempt-fail";
  els.resultBox.innerHTML = `<strong>✕</strong><span>${message}<br>請重新製作這張訂單。</span>`;
  els.phaseHint.textContent = "順序錯誤，鍋子已清空。計時繼續，重新從加水開始。";
  setTimeout(() => {
    if (gameState.isTimeUp || gameState.mode !== "challenge") return;
    gameState.isResettingAttempt = false;
    els.resultBox.textContent = "";
    els.resultBox.className = "result";
    renderCooking();
  }, 1100);
}

function getVegetable(id) {
  return vegetableData.find((veg) => veg.id === id);
}

function getGameVegetableName(veg) {
  return veg.tribe;
}

function renderOrder() {
  if (gameState.mode === "custom") {
    els.orderEyebrow.textContent = "自由料理";
    els.orderSpeech.textContent = "自由加入喜歡的野菜，完成一碗自己的搖搖飯。";
    els.customerName.textContent = "自由料理";
    els.orderList.innerHTML = "";
    const item = document.createElement("li");
    item.textContent = "自由加入喜歡的野菜，至少加入 1 份。";
    els.orderList.append(item);
    return;
  }
  els.orderEyebrow.textContent = "客人訂單";
  els.orderSpeech.textContent = "「我要一份搖搖飯，請幫我加上這些菜。」";
  els.customerName.textContent = `${gameState.order.customer} 的訂單`;
  els.orderList.innerHTML = "";
  Object.entries(gameState.order.needs).forEach(([id, qty]) => {
    const veg = getVegetable(id);
    const item = document.createElement("li");
    item.textContent = `${veg.name} ${qty} 份`;
    els.orderList.append(item);
  });
}

function renderIngredients() {
  els.ingredientsTray.innerHTML = "";
  vegetableData
    .map((veg, index) => ({
      type: "vegetable",
      id: veg.id,
      label: `${index + 1}`,
      fullName: veg.name,
      gameName: getGameVegetableName(veg),
      sub: veg.tribe,
      className: "veg",
      color: veg.color,
      image: veg.image,
    }))
    .forEach((item) => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = `ingredient-card ${item.className} veg-${item.id}`;
    card.draggable = true;
    card.dataset.type = item.type;
    if (item.id) card.dataset.id = item.id;
    if (item.color) card.style.setProperty("--item-color", item.color);
    card.title = `${item.fullName}（${item.sub}）`;
    card.innerHTML = `<img src="${item.image}" alt="${item.fullName}" draggable="false" /><strong>${item.label}</strong><span>${item.gameName}</span>`;
    card.addEventListener("dragstart", (event) => {
      event.dataTransfer.setData("text/plain", JSON.stringify(item));
    });
    card.addEventListener("click", () => addIngredient(item));
    els.ingredientsTray.append(card);
  });
}

function addIngredient(item) {
  if (
    !gameState.isChallengeRunning ||
    gameState.isPaused ||
    gameState.isTimeUp ||
    gameState.isResettingAttempt ||
    gameState.cooking.delivered
  ) return;
  const cooking = gameState.cooking;
  if (gameState.mode === "challenge") {
    if (item.type === "rice" && !cooking.water) {
      failCurrentAttempt("還沒加水就加米。");
      return;
    }
    if (item.type === "vegetable" && (!cooking.water || !cooking.rice)) {
      failCurrentAttempt("還沒完成加水、加米就放野菜。");
      return;
    }
    if (item.type === "vegetable" && cooking.stirBeforeVegetables < 3) {
      failCurrentAttempt("忘記先順時鐘攪拌三圈就放野菜。");
      return;
    }
    if (item.type !== "vegetable" && cooking.hasAddedVegetables) {
      failCurrentAttempt("放入野菜後不能再補加水或米。");
      return;
    }
  }
  if (gameState.mode === "custom") {
    if (item.type === "rice" && !cooking.water) {
      els.phaseHint.textContent = "自由料理也要先加水，才能加米。";
      return;
    }
    if (item.type === "vegetable" && (!cooking.water || !cooking.rice)) {
      els.phaseHint.textContent = "請先加水、加米，並完成第一次攪拌三圈。";
      return;
    }
    if (item.type === "vegetable" && cooking.stirBeforeVegetables < 3) {
      els.phaseHint.textContent = "第一次順時鐘攪拌三圈完成後，才能拖曳野菜進鍋。";
      return;
    }
    if (item.type === "vegetable" && cooking.stirAfterVegetables > 0) {
      els.phaseHint.textContent = "第二次攪拌開始後，野菜拖曳已鎖定。";
      return;
    }
  }
  if (item.type === "water") {
    cooking.water = true;
    cooking.actions.push("water");
  }
  if (item.type === "rice") {
    cooking.rice = true;
    cooking.actions.push("rice");
  }
  if (item.type === "vegetable") {
    cooking.vegetables[item.id] =
      gameState.mode === "custom"
        ? cooking.vegetables[item.id] + 1
        : Math.min(5, cooking.vegetables[item.id] + 1);
    cooking.hasAddedVegetables = true;
    cooking.actions.push(`veg:${item.id}`);
  }
  playAddSound();
  renderCooking();
}

function playAddSound() {
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if (!AudioContext) return;
  const context = playAddSound.context ?? new AudioContext();
  playAddSound.context = context;
  if (context.state === "suspended") context.resume();
  const oscillator = context.createOscillator();
  const gain = context.createGain();
  oscillator.type = "sine";
  oscillator.frequency.value = 520;
  gain.gain.setValueAtTime(0.0001, context.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.06, context.currentTime + 0.01);
  gain.gain.exponentialRampToValueAtTime(0.0001, context.currentTime + 0.11);
  oscillator.connect(gain);
  gain.connect(context.destination);
  oscillator.start();
  oscillator.stop(context.currentTime + 0.12);
}

function stirClockwise() {
  if (
    !gameState.isChallengeRunning ||
    gameState.isPaused ||
    gameState.isTimeUp ||
    gameState.isResettingAttempt ||
    gameState.cooking.delivered
  ) return;
  const cooking = gameState.cooking;
  if (gameState.mode === "challenge") {
    if (!cooking.water || !cooking.rice) {
      failCurrentAttempt("還沒加水和米就開始攪拌。");
      return;
    }
    if (cooking.stirBeforeVegetables >= 3 && !cooking.hasAddedVegetables) {
      failCurrentAttempt("第一次攪拌完成後，還沒放野菜就繼續攪拌。");
      return;
    }
  }
  if (gameState.mode === "custom") {
    if (!cooking.water || !cooking.rice) {
      els.phaseHint.textContent = "請先加水和米，才能進行第一次攪拌。";
      return;
    }
    if (!cooking.hasAddedVegetables && cooking.stirBeforeVegetables >= 3) {
      els.phaseHint.textContent = "第一次攪拌已完成，請拖曳至少一份野菜進鍋。";
      return;
    }
    if (!cooking.hasAddedVegetables && cooking.stirBeforeVegetables < 3) {
      cooking.stirBeforeVegetables += 1;
    } else if (cooking.hasAddedVegetables) {
      cooking.stirAfterVegetables += 1;
    }
  } else if (cooking.hasAddedVegetables) cooking.stirAfterVegetables += 1;
  else cooking.stirBeforeVegetables += 1;
  cooking.actions.push("stir");
  els.pot.classList.remove("stirring");
  requestAnimationFrame(() => els.pot.classList.add("stirring"));
  renderCooking();
}

function getPointerAngle(event) {
  const rect = els.pot.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;
  return Math.atan2(event.clientY - centerY, event.clientX - centerX) * (180 / Math.PI);
}

function normalizeAngleDelta(delta) {
  if (delta > 180) return delta - 360;
  if (delta < -180) return delta + 360;
  return delta;
}

function startStirGesture(event) {
  if (
    !gameState.isChallengeRunning ||
    gameState.isPaused ||
    gameState.isTimeUp ||
    gameState.isResettingAttempt ||
    gameState.cooking.delivered
  ) return;
  gameState.stirGesture.active = true;
  gameState.stirGesture.lastAngle = getPointerAngle(event);
  gameState.stirGesture.clockwiseTravel = 0;
  els.pot.classList.add("stir-active");
  els.pot.setPointerCapture?.(event.pointerId);
}

function moveStirGesture(event) {
  const gesture = gameState.stirGesture;
  if (!gesture.active) return;
  event.preventDefault();
  const angle = getPointerAngle(event);
  const delta = normalizeAngleDelta(angle - gesture.lastAngle);
  gesture.lastAngle = angle;

  if (delta > 0) {
    gesture.clockwiseTravel += delta;
  } else if (delta < -8) {
    gesture.clockwiseTravel = Math.max(0, gesture.clockwiseTravel + delta * 1.4);
  }

  els.pot.style.setProperty("--stir-progress", `${Math.min(1, gesture.clockwiseTravel / 320)}turn`);

  if (gesture.clockwiseTravel >= 320) {
    gesture.clockwiseTravel = 0;
    stirClockwise();
  }
}

function endStirGesture(event) {
  gameState.stirGesture.active = false;
  gameState.stirGesture.clockwiseTravel = 0;
  els.pot.classList.remove("stir-active");
  els.pot.style.setProperty("--stir-progress", "0turn");
  if (event?.pointerId != null) els.pot.releasePointerCapture?.(event.pointerId);
}

function serveRice() {
  if (
    !gameState.isChallengeRunning ||
    gameState.isPaused ||
    gameState.isTimeUp ||
    gameState.isResettingAttempt ||
    gameState.cooking.delivered
  ) return;
  if (gameState.mode === "custom") {
    const vegetableCount = getTotalVegetableCount();
    if (vegetableCount === 0) {
      els.phaseHint.textContent = "自由料理至少要加入一份任意野菜。";
      return;
    }
    if (gameState.cooking.stirAfterVegetables < 3) {
      els.phaseHint.textContent = "請完成第二次順時鐘攪拌三圈，才能盛裝。";
      return;
    }
  }
  if (gameState.mode === "challenge" && gameState.cooking.stirAfterVegetables < 3) {
    failCurrentAttempt("還沒完成第二次順時鐘攪拌三圈就盛裝。");
    return;
  }
  gameState.cooking.served = true;
  gameState.cooking.actions.push("serve");
  renderCooking();
}

function deliverRice() {
  if (
    !gameState.isChallengeRunning ||
    gameState.isPaused ||
    gameState.isTimeUp ||
    gameState.isResettingAttempt ||
    gameState.cooking.delivered
  ) return;
  if (gameState.mode === "custom") {
    if (!gameState.cooking.served) {
      els.phaseHint.textContent = "請先盛裝，再完成料理。";
      return;
    }
    gameState.cooking.delivered = true;
    gameState.cooking.actions.push("deliver");
    finishCustomRice();
    renderCooking();
    return;
  }
  if (!gameState.cooking.served) {
    failCurrentAttempt("還沒盛裝就交給客人。");
    return;
  }
  gameState.cooking.delivered = true;
  gameState.cooking.actions.push("deliver");
  scoreOrder();
}

function renderCooking() {
  const cooking = gameState.cooking;
  const vegetableCount = getTotalVegetableCount();
  els.waterState.textContent = cooking.water ? "已加入" : "未加入";
  els.riceState.textContent = cooking.rice ? "已加入" : "未加入";
  els.serveState.textContent = cooking.served ? "已盛裝" : "尚未";
  els.stirCountLabel.textContent = `${Math.min(cooking.stirBeforeVegetables, 3)} + ${Math.min(
    cooking.stirAfterVegetables,
    3,
  )} / 6`;

  els.pot.classList.toggle("has-water", cooking.water);
  els.pot.classList.toggle("has-rice", cooking.rice);
  els.pot.classList.toggle("has-veg", vegetableCount > 0);
  els.pot.classList.toggle("served", cooking.served);
  els.potLabel.textContent = cooking.served ? "已盛裝" : vegetableCount ? "菜香上來了" : "鍋中料理";
  [els.riceQuick, els.waterQuick, els.serveBtn, els.deliverBtn].forEach((button) => {
    button.disabled = gameState.isPaused || gameState.isResettingAttempt || cooking.delivered;
    button.draggable = !button.disabled;
  });
  document.querySelectorAll("[data-type='vegetable']").forEach((button) => {
    const locked = gameState.mode === "custom" && cooking.stirAfterVegetables > 0;
    button.disabled = gameState.isPaused || gameState.isResettingAttempt || locked || cooking.delivered;
    button.draggable = !button.disabled;
  });

  els.chosenList.innerHTML = "";
  vegetableData.forEach((veg) => {
    const qty = cooking.vegetables[veg.id];
    if (!qty) return;
    const chip = document.createElement("div");
    chip.className = "chip";
    chip.textContent = `${getGameVegetableName(veg)} ${qty} 份`;
    els.chosenList.append(chip);
  });
  if (!els.chosenList.children.length) {
    const chip = document.createElement("div");
    chip.className = "chip";
    chip.textContent = "尚未加入野菜";
    els.chosenList.append(chip);
  }

  if (gameState.mode === "custom") renderCustomHint(vegetableCount);
  else if (!cooking.water) els.phaseHint.textContent = "把水拖曳到鍋子裡。";
  else if (!cooking.rice) els.phaseHint.textContent = "接著把米拖曳到鍋子裡。";
  else if (cooking.stirBeforeVegetables < 3) els.phaseHint.textContent = "加入菜之前，先順時鐘攪拌三次。";
  else if (!vegetableCount) els.phaseHint.textContent = "依照客人要求，把菜拖曳到鍋子裡。";
  else if (cooking.stirAfterVegetables < 3) els.phaseHint.textContent = "放完菜後，再順時鐘攪拌三次。";
  else if (!cooking.served) els.phaseHint.textContent = "按下盛裝，把搖搖飯裝起來。";
  else els.phaseHint.textContent = "交給客人，完成這張訂單。";
}

function getTotalVegetableCount() {
  return Object.values(gameState.cooking?.vegetables ?? {}).reduce((sum, qty) => sum + qty, 0);
}

function renderCustomHint(vegetableCount) {
  const cooking = gameState.cooking;
  if (!cooking.water) els.phaseHint.textContent = "自由料理：先把水拖曳到鍋子裡。";
  else if (!cooking.rice) els.phaseHint.textContent = "自由料理：接著把米拖曳到鍋子裡。";
  else if (cooking.stirBeforeVegetables < 3) els.phaseHint.textContent = "自由料理：先照箭頭順時鐘攪拌三圈。";
  else if (!vegetableCount) els.phaseHint.textContent = "自由料理：拖曳任意野菜進鍋，每次拖入增加一份。";
  else if (cooking.stirAfterVegetables === 0) els.phaseHint.textContent = "可繼續加菜；開始第二次攪拌後，野菜會鎖定。";
  else if (cooking.stirAfterVegetables < 3) els.phaseHint.textContent = "第二次攪拌中，野菜已鎖定。請完成三圈。";
  else if (!cooking.served) els.phaseHint.textContent = "自由料理：可以盛裝了。";
  else if (!cooking.delivered) els.phaseHint.textContent = "按紅色完成，結束自由料理。";
  else els.phaseHint.textContent = "自由料理完成。";
}

function updateStats() {
  els.pauseBtn.hidden = !gameState.isChallengeRunning && !gameState.isPaused;
  els.pauseBtn.textContent = gameState.isPaused ? "繼續" : "暫停";
  if (gameState.mode === "custom") {
    els.timer.textContent = "自由";
    els.timerBox.classList.remove("warning");
    els.score.textContent = "0";
    els.completed.textContent = "0";
    return;
  }
  els.timer.textContent = formatTime(gameState.timeRemaining);
  els.timerBox.classList.toggle("warning", gameState.timeRemaining <= 30);
  els.score.textContent = gameState.totalScore;
  els.completed.textContent = gameState.completedOrders;
  if (gameState.timeRemaining <= 10 && gameState.isChallengeRunning) {
    els.phaseHint.textContent = "最後 10 秒！";
  }
}

function closePauseMenu(resumeGame = true) {
  els.pauseMenu.hidden = true;
  if (!gameState.isPaused) return;
  if (resumeGame && !gameState.isTimeUp) {
    gameState.isPaused = false;
    if (gameState.mode === "challenge" && !gameState.timerId) {
      gameState.timerId = setInterval(tick, 1000);
    }
    if (gameState.pendingNextOrder && gameState.mode === "challenge") {
      nextOrder();
    }
  }
  if (gameState.cooking) renderCooking();
  updateStats();
}

function togglePauseMenu() {
  if (!gameState.isChallengeRunning && !gameState.isPaused) return;
  if (gameState.isPaused) {
    closePauseMenu(true);
    return;
  }
  gameState.isPaused = true;
  clearInterval(gameState.timerId);
  gameState.timerId = null;
  els.pauseMenu.hidden = false;
  endStirGesture();
  renderCooking();
  els.phaseHint.textContent = "遊戲已暫停。可以按「重新計時」重新開始，或回到主畫面。";
  updateStats();
}

function restartFromPause() {
  closePauseMenu(false);
  if (gameState.mode === "custom") showCustomMode();
  else startChallenge();
}

function returnHomeFromPause() {
  closePauseMenu(false);
  resetChallenge();
  showOnly(els.coverPanel);
}

function scoreOrder() {
  const errors = gameState.currentOrderErrors;
  const cooking = gameState.cooking;
  const actions = cooking.actions;

  if (!cooking.water) errors.add("忘記加水");
  if (!cooking.rice) errors.add("忘記加米");
  if (cooking.stirBeforeVegetables < 3) errors.add("加菜前沒有順時鐘攪拌三次");
  if (cooking.stirAfterVegetables < 3) errors.add("加菜後沒有順時鐘攪拌三次");
  if (!cooking.served) errors.add("尚未盛裝");

  const waterIndex = actions.indexOf("water");
  const riceIndex = actions.indexOf("rice");
  const firstStir = actions.indexOf("stir");
  const firstVeg = actions.findIndex((item) => item.startsWith("veg:"));
  const serveIndex = actions.indexOf("serve");
  const deliverIndex = actions.indexOf("deliver");

  if (waterIndex === -1 || riceIndex === -1 || waterIndex > riceIndex) errors.add("水和米的順序錯誤");
  if (firstVeg !== -1 && firstStir > firstVeg) errors.add("太早加入野菜");
  if (serveIndex === -1 || serveIndex > deliverIndex) errors.add("交餐前沒有盛裝");

  Object.entries(gameState.order.needs).forEach(([id, needed]) => {
    const veg = getVegetable(id);
    const actual = cooking.vegetables[id];
    if (actual < needed) errors.add(`${getGameVegetableName(veg)} 少了 ${needed - actual} 份`);
    if (actual > needed) errors.add(`${getGameVegetableName(veg)} 多了 ${actual - needed} 份`);
  });

  vegetableData
    .filter((veg) => !(veg.id in gameState.order.needs) && cooking.vegetables[veg.id] > 0)
    .forEach((veg) => errors.add(`不該加入${getGameVegetableName(veg)}`));

  const orderScore = Math.max(0, 15 - errors.size * 5);
  gameState.totalScore = Math.max(0, gameState.totalScore + orderScore);
  gameState.completedOrders += 1;

  if (errors.size === 0) {
    gameState.perfectOrders += 1;
    els.resultBox.className = "result";
    els.resultBox.innerHTML = `訂單完成！<br>獲得分數：${orderScore} 分`;
  } else {
    gameState.incorrectOrders += 1;
    els.resultBox.className = "result error";
    els.resultBox.innerHTML = `訂單完成！<br>本次錯誤：${[...errors].slice(0, 3).join("、")}<br>獲得分數：${orderScore} 分`;
  }

  updateStats();
  gameState.pendingNextOrder = true;
  setTimeout(() => {
    if (!gameState.isChallengeRunning || gameState.isPaused || gameState.isTimeUp) return;
    nextOrder();
  }, 1200);
}

function showCustomMode() {
  resetCookingForMode("custom");
  showOnly(els.gamePanel);
  renderIngredients();
  renderOrder();
  renderCooking();
  updateStats();
}

function finishCustomRice() {
  const selected = Object.entries(gameState.cooking.vegetables)
    .map(([id, qty]) => [getVegetable(id).name, qty])
    .filter(([, qty]) => qty > 0)
    .map(([name, qty]) => `${name} × ${qty}`);

  els.resultBox.className = "result";
  els.resultBox.innerHTML = `自由料理完成！<br>${selected.join("<br>")}`;
}

els.enterBtn.addEventListener("click", () => {
  gameState.pageIndex = 0;
  renderStoryPage();
  showOnly(els.readerPanel);
});

els.learnVegBtn.addEventListener("click", () => {
  showOnly(els.vegLibraryPanel);
});

els.aboutBtn.addEventListener("click", () => {
  showOnly(els.aboutPanel);
});

els.aboutBackBtn.addEventListener("click", () => {
  showOnly(els.coverPanel);
});

els.vegBackBtn.addEventListener("click", () => {
  showOnly(els.coverPanel);
});

els.prevPageBtn.addEventListener("click", () => {
  gameState.pageIndex = Math.max(0, gameState.pageIndex - 1);
  renderStoryPage();
});

els.nextPageBtn.addEventListener("click", () => {
  if (gameState.pageIndex === storyPages.length - 1) startChallenge();
  else {
    gameState.pageIndex += 1;
    renderStoryPage();
  }
});

els.pot.addEventListener("dragover", (event) => {
  event.preventDefault();
  els.pot.classList.add("drag-over");
});

els.pot.addEventListener("dragleave", () => els.pot.classList.remove("drag-over"));

els.pot.addEventListener("drop", (event) => {
  event.preventDefault();
  els.pot.classList.remove("drag-over");
  const item = JSON.parse(event.dataTransfer.getData("text/plain"));
  addIngredient(item);
});

els.pot.addEventListener("pointerdown", startStirGesture);
els.pot.addEventListener("pointermove", moveStirGesture);
els.pot.addEventListener("pointerup", endStirGesture);
els.pot.addEventListener("pointercancel", endStirGesture);
els.riceQuick.addEventListener("click", () =>
  addIngredient({ type: "rice", label: "米", sub: "拖曳到鍋中" }),
);
els.waterQuick.addEventListener("click", () =>
  addIngredient({ type: "water", label: "水", sub: "拖曳到鍋中" }),
);
[
  [els.riceQuick, { type: "rice", label: "米", sub: "拖曳到鍋中" }],
  [els.waterQuick, { type: "water", label: "水", sub: "拖曳到鍋中" }],
].forEach(([button, item]) => {
  button.draggable = true;
  button.addEventListener("dragstart", (event) => {
    event.dataTransfer.setData("text/plain", JSON.stringify(item));
  });
});
els.serveBtn.addEventListener("click", serveRice);
els.deliverBtn.addEventListener("click", deliverRice);
els.pauseBtn.addEventListener("click", togglePauseMenu);
els.restartPausedBtn.addEventListener("click", restartFromPause);
els.homePausedBtn.addEventListener("click", returnHomeFromPause);
els.retryBtn.addEventListener("click", () => {
  gameState.pageIndex = storyPages.length - 1;
  startChallenge();
});
els.customBtn.addEventListener("click", showCustomMode);
els.finishCustomBtn.addEventListener("click", finishCustomRice);
els.backBtn.addEventListener("click", () => {
  resetChallenge();
  showOnly(els.coverPanel);
});
els.customGrid.addEventListener("input", (event) => {
  const input = event.target.closest("[data-custom]");
  if (!input) return;
  document.querySelector(`#custom-${input.dataset.custom}`).textContent = `${input.value} 份`;
});

renderStoryPage();
bindAudioButtons();
resetChallenge();
