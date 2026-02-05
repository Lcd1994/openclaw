# UI 汉化完整方案

## 📊 当前状态

### ✅ 已汉化页面（10个）
1. `cron.ts` - 定时任务 ✓
2. `chat.ts` - 对话 ✓
3. `overview.ts` - 总览 ✓
4. `skills.ts` - 技能 ✓
5. `sessions.ts` - 会话 ✓
6. `instances.ts` - 实例 ✓
7. `logs.ts` - 日志 ✓
8. `markdown-sidebar.ts` - 工具侧栏 ✓
9. `exec-approval.ts` - 执行审批 ✓
10. `gateway-url-confirmation.ts` - 网关确认 ✓

### ❌ 未汉化页面（需要处理）

#### 阶段一：Keys已定义，只需替换使用（优先级：高，工作量：小）
1. **`nodes.ts`** - 节点页面
   - ✅ Keys已定义：`nodes.*`（60+ keys）
   - ❌ 文件未导入 `t()`，硬编码英文未替换
   - 📝 工作量：中等（文件较大，约1167行）

2. **`debug.ts`** - 调试页面
   - ✅ Keys已定义：`debug.*`（17个基础keys）
   - ❌ 文件未导入 `t()`，硬编码英文未替换
   - ❌ 缺少keys：`debug.securityAudit`、`debug.critical`、`debug.warnings`、`debug.noCriticalIssues`、`debug.info`、`debug.runCommand`、`debug.placeholderMethod`
   - 📝 工作量：小（约150行）

#### 阶段二：需要新增Keys并替换（优先级：中，工作量：大）
3. **`agents.ts`** - 代理页面
   - ❌ 未定义keys
   - 📝 主要文案：
     - "Agents"、"configured"、"Select an agent"、"Pick an agent to inspect..."
     - "Overview"、"Workspace paths and identity metadata"
     - "Primary model"、"Fallbacks"、"Model Selection"
     - "Agent Context"、"Channels"、"Scheduler"、"Agent Cron Jobs"
     - "Core Files"、"Tool Access"、"Skills"、"Files"
     - 各种按钮："Reload Config"、"Save"、"Edit"、"Reset"、"Enable"、"Disable"等
   - 📝 工作量：大（文件很大，约1962行，包含多个子组件）

4. **`config.ts`** - 配置页面
   - ❌ 部分未汉化
   - 📝 主要文案：
     - "All Settings"、"Search settings..."、"No changes"、"Unsaved changes"
     - "Form"、"Raw"、"Save"、"Apply"、"Update"、"Reload"
     - "Loading schema…"、"Raw JSON5"、"No settings match"、"No settings in this section"
   - 📝 工作量：中等（约745行）

5. **`channels.ts` 及相关子文件** - 渠道页面
   - ❌ 未定义keys
   - 📝 涉及文件：
     - `channels.ts` - 主文件
     - `channels.whatsapp.ts` - WhatsApp渠道
     - `channels.telegram.ts` - Telegram渠道
     - `channels.discord.ts` - Discord渠道
     - `channels.slack.ts` - Slack渠道
     - `channels.signal.ts` - Signal渠道
     - `channels.imessage.ts` - iMessage渠道
     - `channels.googlechat.ts` - Google Chat渠道
     - `channels.nostr.ts` - Nostr渠道
     - `channels.shared.ts` - 共享组件
     - `channels.config.ts` - 配置组件
   - 📝 主要文案：
     - "Channel health"、"Channel status snapshots"
     - "Configured"、"Running"、"Connected"、"Linked"、"Last connect"、"Last message"、"Auth age"
     - "Show QR"、"Relink"、"Wait for scan"、"Logout"、"Refresh"
     - 各渠道特定文案
   - 📝 工作量：大（多个文件，每个渠道都有独立组件）

6. **`config-form.*.ts`** - 配置表单相关
   - ❌ 部分未汉化
   - 📝 涉及文件：
     - `config-form.render.ts` - 表单渲染
     - `config-form.node.ts` - 节点表单
     - `config-form.shared.ts` - 共享逻辑
   - 📝 主要文案：
     - "Environment Variables"、"Setup Wizard"、"Canvas Host"等section labels
     - "No settings match"、"No settings in this section"
   - 📝 工作量：小（主要是section labels）

---

## 🎯 实施计划

### 阶段一：快速完成（Keys已定义）
**目标**：完成 `nodes.ts` 和 `debug.ts` 的汉化

#### 1.1 `debug.ts` 汉化
- [ ] 补充缺失的keys到 `en.ts` 和 `zh-CN.ts`
- [ ] 在 `debug.ts` 中导入 `t()`
- [ ] 替换所有硬编码英文为 `t("debug.xxx")`
- **预计时间**：15分钟

#### 1.2 `nodes.ts` 汉化
- [ ] 在 `nodes.ts` 中导入 `t()`
- [ ] 替换所有硬编码英文为 `t("nodes.xxx")`
- [ ] 检查是否有遗漏的keys，如有则补充
- **预计时间**：30-45分钟

### 阶段二：系统化新增Keys（需要新增Keys）
**目标**：完成 `agents.ts`、`config.ts`、`channels.*.ts` 的汉化

#### 2.1 `config.ts` 汉化
- [ ] 收集所有需要翻译的文案
- [ ] 在 `en.ts` 和 `zh-CN.ts` 中新增 `config.*` keys
- [ ] 在 `config.ts` 中导入 `t()` 并替换
- **预计时间**：30分钟

#### 2.2 `config-form.*.ts` 汉化
- [ ] 收集section labels和提示文案
- [ ] 新增 `configForm.*` keys
- [ ] 替换硬编码文案
- **预计时间**：15分钟

#### 2.3 `channels.ts` 及相关文件汉化
- [ ] 收集所有渠道相关的通用文案
- [ ] 新增 `channels.*` keys（通用）
- [ ] 新增各渠道特定的keys（`channels.whatsapp.*`、`channels.telegram.*` 等）
- [ ] 依次替换各渠道文件中的硬编码文案
- **预计时间**：60-90分钟

#### 2.4 `agents.ts` 汉化
- [ ] 收集所有代理相关的文案（文件较大，需要仔细梳理）
- [ ] 新增 `agents.*` keys（预计50+ keys）
- [ ] 在 `agents.ts` 中导入 `t()` 并替换
- [ ] 检查子组件函数中的硬编码文案
- **预计时间**：60-90分钟

---

## 📋 Keys命名规范

### 已使用的命名模式
- `{page}.{section}.{item}` - 例如：`overview.gatewayAccess`
- `{page}.{action}` - 例如：`overview.connect`、`overview.refresh`
- `{page}.{field}` - 例如：`overview.wsUrl`、`overview.gatewayToken`

### 建议新增Keys的命名
- **Config页面**：`config.*`
  - `config.allSettings`、`config.searchPlaceholder`、`config.noChanges`
  - `config.formMode`、`config.rawMode`、`config.save`、`config.apply`、`config.update`、`config.reload`
  - `config.loadingSchema`、`config.rawJson5`、`config.noMatch`、`config.noSettings`

- **Agents页面**：`agents.*`
  - `agents.title`、`agents.configured`、`agents.selectAgent`、`agents.selectAgentSub`
  - `agents.overview`、`agents.overviewSub`、`agents.workspace`、`agents.primaryModel`
  - `agents.fallbacks`、`agents.modelSelection`、`agents.agentContext`、`agents.channels`
  - `agents.scheduler`、`agents.cronJobs`、`agents.coreFiles`、`agents.toolAccess`
  - `agents.reloadConfig`、`agents.save`、`agents.edit`、`agents.reset`、`agents.enable`、`agents.disable`

- **Channels页面**：`channels.*` 和 `channels.{channel}.*`
  - `channels.health`、`channels.healthSub`、`channels.configured`、`channels.running`
  - `channels.connected`、`channels.linked`、`channels.lastConnect`、`channels.lastMessage`
  - `channels.authAge`、`channels.showQr`、`channels.relink`、`channels.waitForScan`
  - `channels.logout`、`channels.refresh`
  - `channels.whatsapp.title`、`channels.whatsapp.sub`、`channels.telegram.*` 等

---

## ✅ 验收标准

1. ✅ 所有用户可见的文案都已通过 `t()` 函数获取
2. ✅ 切换语言时，页面内容完全切换（无遗漏的英文）
3. ✅ 中文翻译自然、符合中文表达习惯
4. ✅ 代码通过 lint 检查，无语法错误
5. ✅ 功能测试通过，切换语言不影响功能

---

## 🚀 开始实施

建议按以下顺序执行：
1. **阶段一**：先完成 `debug.ts` 和 `nodes.ts`（快速见效）
2. **阶段二**：按 `config.ts` → `config-form.*.ts` → `channels.*.ts` → `agents.ts` 的顺序

每个阶段完成后，可以刷新页面验证效果，确保质量。
