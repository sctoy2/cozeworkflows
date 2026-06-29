# AIGC 工作流教学 PPT 交付清单

本批次按“一个平台类型一套 PPT”生成，共 6 套，每套 150 页。

| 序号 | PPT | 类型 | 页数 |
|---|---|---|---|
| 1 | AIGC工作流教学PPT_01_Coze_托管式智能体工作流_150页.pptx | 托管式智能体 / 低代码应用工作流 | 150 |
| 2 | AIGC工作流教学PPT_02_n8n_通用自动化编排工作流_150页.pptx | 通用自动化编排 + AI 节点 | 150 |
| 3 | AIGC工作流教学PPT_03_Dify_AI应用与RAG工作流_150页.pptx | AI 应用开发 / RAG / Agentic Workflow 平台 | 150 |
| 4 | AIGC工作流教学PPT_04_ComfyUI_多模态视觉生成工作流_150页.pptx | 多模态图像 / 视频 / 节点式生成工作流 | 150 |
| 5 | AIGC工作流教学PPT_05_OpenAI_GPT_API_Agents_代码优先智能体工作流_150页.pptx | 模型能力 / GPTs / Responses API / Agents SDK | 150 |
| 6 | AIGC工作流教学PPT_06_Codex_研发编码智能体工作流_150页.pptx | 软件研发 / 编码智能体 / Git 工作流自动化 | 150 |

## 使用建议

1. 每套课件按 30 个章节、每章 5 页组织。
2. 用于培训时建议先讲概念与架构，再现场搭建最小可用工作流。
3. 企业内部落地前，需要重新核对账号权限、价格、数据安全要求和官方最新界面。

## 平台清单

### Coze
- 类型：托管式智能体 / 低代码应用工作流
- 定位：适合快速搭建中文智能体、办公助手、知识问答、插件式业务自动化。
- 案例：搭建“周报生成助手”：输入本周事项，调用大模型整理摘要、风险、下周计划，并输出 Markdown 周报。
- 参考资料：https://www.coze.cn/open/docs/guides/agent_workflow；https://www.coze.cn/open/docs/guides/llm_node；https://www.coze.cn/open/docs/guides/plugin_node；https://www.coze.cn/open/docs/guides/run_app_as_api

### n8n
- 类型：通用自动化编排 + AI 节点
- 定位：适合把表单、Webhook、数据库、邮件、IM、CRM 与大模型串成可维护的自动化流程。
- 案例：搭建“内容摘要 API”：外部系统 POST 文本，n8n 调用模型生成摘要、标题、行动建议，并返回 JSON。
- 参考资料：https://docs.n8n.io/；https://docs.n8n.io/deploy/host-n8n/install-options/install-with-docker；https://docs.n8n.io/data/data-structure/；https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.chainllm

### Dify
- 类型：AI 应用开发 / RAG / Agentic Workflow 平台
- 定位：适合把知识库、模型供应商、工作流、Chatflow、API 发布和日志观测整合为 AI 应用平台。
- 案例：搭建“公司制度问答助手”：上传制度文档，用户提问后先检索知识库，再由 LLM 基于引用生成回答。
- 参考资料：https://docs.dify.ai/zh/self-host/deploy/quick-start/docker-compose；https://docs.dify.ai/zh/cloud/use-dify/build/workflow-chatflow；https://docs.dify.ai/zh/use-dify/workspace/model-providers；https://docs.dify.ai/zh/cloud/use-dify/publish/developing-with-apis

### ComfyUI
- 类型：多模态图像 / 视频 / 节点式生成工作流
- 定位：适合做文生图、图生图、LoRA、ControlNet、视频生成、批量出图和视觉生产流水线。
- 案例：搭建“短剧角色定妆照生成流”：输入角色描述、服化要求、负面词，生成统一风格的人物定妆图。
- 参考资料：https://docs.comfy.org/zh/comfy-cli/getting-started；https://docs.comfy.org/zh/manager/install；https://docs.comfy.org/zh/development/api-development/workflow-api-format；https://docs.comfy.org/zh/development/comfyui-server/api-examples

### OpenAI GPT/API/Agents
- 类型：模型能力 / GPTs / Responses API / Agents SDK
- 定位：适合用 GPTs 做轻量内部助手，用 Responses API 和 Agents SDK 做代码化、可控、可扩展的智能体系统。
- 案例：搭建“结构化内容审核 Agent”：输入文案，模型按 Schema 输出风险等级、修改建议、是否需要人工复核。
- 参考资料：https://help.openai.com/en/articles/8554397-creating-a-gpt；https://developers.openai.com/api/reference/responses/overview；https://developers.openai.com/api/docs/guides/agents；https://developers.openai.com/api/docs/guides/structured-outputs

### Codex
- 类型：软件研发 / 编码智能体 / Git 工作流自动化
- 定位：适合仓库理解、代码修改、测试、重构、迁移、PR 辅助、CI/CD 中的研发自动化任务。
- 案例：搭建“仓库自动体检工作流”：Codex 扫描项目结构，输出风险清单、修复建议，并按 Schema 生成报告。
- 参考资料：https://developers.openai.com/codex；https://developers.openai.com/codex/cli；https://developers.openai.com/codex/config-basic；https://developers.openai.com/codex/noninteractive；https://developers.openai.com/codex/mcp

## 文件说明

PPT 二进制文件已在 ChatGPT 运行环境生成。GitHub 当前写入的是交付清单；如需把 PPT 文件也放进仓库，需要使用支持二进制上传的 Git 客户端或后续提供仓库上传权限/流程。