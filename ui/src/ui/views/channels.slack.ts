import { html, nothing } from "lit";
import { t } from "../locale/strings.js";
import type { SlackStatus } from "../types.ts";
import type { ChannelsProps } from "./channels.types.ts";
import { formatAgo } from "../format.ts";
import { renderChannelConfigSection } from "./channels.config.ts";

export function renderSlackCard(params: {
  props: ChannelsProps;
  slack?: SlackStatus | null;
  accountCountLabel: unknown;
}) {
  const { props, slack, accountCountLabel } = params;

  return html`
    <div class="card">
      <div class="card-title">${t("channels.slack.title")}</div>
      <div class="card-sub">${t("channels.slack.sub")}</div>
      ${accountCountLabel}

      <div class="status-list" style="margin-top: 16px;">
        <div>
          <span class="label">${t("channels.configured")}</span>
          <span>${slack?.configured ? t("agents.yes") : t("agents.no")}</span>
        </div>
        <div>
          <span class="label">${t("channels.running")}</span>
          <span>${slack?.running ? t("agents.yes") : t("agents.no")}</span>
        </div>
        <div>
          <span class="label">${t("channels.lastStart")}</span>
          <span>${slack?.lastStartAt ? formatAgo(slack.lastStartAt) : t("agents.na")}</span>
        </div>
        <div>
          <span class="label">${t("channels.lastProbe")}</span>
          <span>${slack?.lastProbeAt ? formatAgo(slack.lastProbeAt) : t("agents.na")}</span>
        </div>
      </div>

      ${
        slack?.lastError
          ? html`<div class="callout danger" style="margin-top: 12px;">
            ${slack.lastError}
          </div>`
          : nothing
      }

      ${
        slack?.probe
          ? html`<div class="callout" style="margin-top: 12px;">
            ${t("channels.probe")} ${slack.probe.ok ? t("channels.probeOk") : t("channels.probeFailed")} ·
            ${slack.probe.status ?? ""} ${slack.probe.error ?? ""}
          </div>`
          : nothing
      }

      ${renderChannelConfigSection({ channelId: "slack", props })}

      <div class="row" style="margin-top: 12px;">
        <button class="btn" @click=${() => props.onRefresh(true)}>
          ${t("channels.probe")}
        </button>
      </div>
    </div>
  `;
}
