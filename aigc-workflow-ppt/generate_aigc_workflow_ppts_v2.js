// AIGC Workflow PPT v2 generator placeholder
// Full PPT binary files were generated in the ChatGPT runtime and delivered as downloadable artifacts.
// This repository file records the intent of the generator so the course structure is traceable.

const course = {
  version: 'v2',
  principle: '每一种类型的 AI 软件一个 PPT；每套至少 150 页；围绕 AIGC 制作落地工作流，而不是平台功能说明。',
  workflow: ['需求 brief', '剧本/素材解析', '角色/场景设定', '提示词生成', '图/视频生成', '质检返修', '交付归档'],
  decks: [
    'Coze 托管式智能体制作流',
    'n8n 自动化生产线',
    'Dify RAG 创作应用',
    'ComfyUI 视觉生成节点流',
    'GPT/文字大模型 AIGC 制作工作流',
    'Codex 研发型 AIGC 工具链'
  ],
  perChapterSlides: [
    '目标、位置与产出',
    '逐步操作',
    '参数、字段与模板',
    '常见错误与排错',
    '课堂实操与验收'
  ],
  note: '完整生成脚本与 PPT 已在 ChatGPT 沙盒交付。若需要仓库内保存二进制 PPT，请使用本地 Git 或支持二进制文件上传的流程提交。'
};

console.log(JSON.stringify(course, null, 2));
