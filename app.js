const SITE_CONFIG = {
  wechatQr: "",
  wechatId: "",
};

const templates = {
  qinglan: {
    kicker: "校园通用版",
    title: "清岚",
    image: "assets/templates/qinglan-large.webp",
    description:
      "彩色板块标题和清晰的信息分区，适合经历比较丰富、需要同时展示实习与校园项目的同学。照片为可选项。",
    tags: ["产品运营", "市场", "新媒体", "校招"],
    fit: "产品、运营、市场、新媒体及综合校招",
  },
  jianxing: {
    kicker: "技术工程版",
    title: "简行",
    image: "assets/templates/jianxing-large.webp",
    description:
      "姓名居中、技能矩阵和项目信息集中，适合需要快速展示技术栈、项目过程与调试能力的理工科岗位。",
    tags: ["嵌入式", "硬件", "软件", "理工科"],
    fit: "嵌入式、硬件、软件、工程技术岗",
  },
  "deep-navy": {
    kicker: "商务正式版",
    title: "深蓝",
    image: "assets/templates/deep-navy-large.webp",
    description:
      "深色侧栏配正式的信息组织，适合需要稳重感和专业感的岗位。头像位置用姓名缩写代替，避免直接使用真人照片。",
    tags: ["金融", "咨询", "国企", "学生干部"],
    fit: "金融、咨询、国企、管培生和正式商务岗",
  },
  classic: {
    kicker: "ATS 友好版",
    title: "经典 ATS",
    image: "assets/templates/classic-ats-large.webp",
    description:
      "单栏、标准标题和清晰文本结构，适合海投和对机器筛选要求较高的岗位。改内容比改版式更重要。",
    tags: ["海投", "ATS", "技术", "校招"],
    fit: "互联网、技术、金融及需要 ATS 解析的岗位",
  },
  modern: {
    kicker: "现代侧栏版",
    title: "现代侧栏",
    image: "assets/templates/modern-sidebar-large.webp",
    description:
      "深蓝侧栏和双栏结构，信息层次清楚，适合希望简历看起来现代但不过度设计的校招同学。",
    tags: ["通用校招", "运营", "市场"],
    fit: "互联网、运营、市场和其他通用校招岗位",
  },
  pillar: {
    kicker: "信息卡片版",
    title: "Pillar",
    image: "assets/templates/pillar-large.webp",
    description:
      "用信息卡片突出成果和技能，适合项目经历较多、希望让招聘方快速看到亮点的同学。",
    tags: ["产品", "运营", "品牌", "项目"],
    fit: "产品、运营、品牌、市场等项目型岗位",
  },
};

const templateDialog = document.querySelector("#template-dialog");
const contactDialog = document.querySelector("#contact-dialog");
const modalImage = document.querySelector("#template-dialog-image");
const modalKicker = document.querySelector("#template-dialog-kicker");
const modalTitle = document.querySelector("#template-dialog-title");
const modalDescription = document.querySelector("#template-dialog-description");
const modalTags = document.querySelector("#template-dialog-tags");
const modalFit = document.querySelector("#template-dialog-fit");

function syncBodyLock() {
  const hasOpenDialog =
    templateDialog.open || contactDialog.open;
  document.body.classList.toggle("modal-open", hasOpenDialog);
}

function openTemplate(key) {
  const template = templates[key];
  if (!template) return;

  modalImage.src = template.image;
  modalImage.alt = `${template.title}简历模板完整预览`;
  modalKicker.textContent = template.kicker;
  modalTitle.textContent = template.title;
  modalDescription.textContent = template.description;
  modalFit.textContent = template.fit;
  modalTags.replaceChildren(
    ...template.tags.map((tag) => {
      const item = document.createElement("span");
      item.textContent = tag;
      return item;
    })
  );

  templateDialog.showModal();
  syncBodyLock();
}

function openContact() {
  if (templateDialog.open) {
    templateDialog.close();
  }
  contactDialog.showModal();
  syncBodyLock();
}

document.querySelectorAll(".js-template").forEach((button) => {
  button.addEventListener("click", () => {
    openTemplate(button.dataset.template);
  });
});

document.querySelectorAll(".js-contact").forEach((button) => {
  button.addEventListener("click", openContact);
});

document.querySelectorAll("[data-close]").forEach((button) => {
  button.addEventListener("click", () => {
    button.closest("dialog").close();
    syncBodyLock();
  });
});

[templateDialog, contactDialog].forEach((dialog) => {
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) {
      dialog.close();
      syncBodyLock();
    }
  });
  dialog.addEventListener("close", syncBodyLock);
});

const header = document.querySelector("#site-header");
function updateHeader() {
  header.classList.toggle("is-scrolled", window.scrollY > 8);
}
updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

const qrSlot = document.querySelector("#qr-slot");
const contactNote = document.querySelector("#contact-note");
if (SITE_CONFIG.wechatQr) {
  const qrImage = document.createElement("img");
  qrImage.src = SITE_CONFIG.wechatQr;
  qrImage.alt = "微信咨询二维码";
  qrSlot.replaceChildren(qrImage);
  contactNote.textContent = SITE_CONFIG.wechatId
    ? `微信号：${SITE_CONFIG.wechatId}`
    : "长按识别二维码，备注“简历 + 目标岗位”。";
} else if (SITE_CONFIG.wechatId) {
  qrSlot.replaceChildren();
  const label = document.createElement("span");
  label.textContent = SITE_CONFIG.wechatId;
  qrSlot.append(label);
  contactNote.textContent = "复制微信号添加，备注“简历 + 目标岗位”。";
}
