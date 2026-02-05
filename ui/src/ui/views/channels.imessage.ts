import { html, nothing } from "lit";
import { t } from "../locale/strings.js";
import type { IMessageStatus } from "../types.ts";
import type { ChannelsProps } from "./channels.types.ts";
import { formatAgo } from "../format.ts";
import { renderChannelConfigSection } from "./channels.config.ts";

export function renderIMessageCard(params: {
  props: ChannelsProps;
  imessage?: IMessageStatus | null;
  accountCountLabel: unknown;
}) {
  const { props, imessage, accountCountLabel } = params;

  return html`
    <div class="card">
      <div class="card-title">${t("channels.imessage.title")}</div>
      <div class="card-sub">${t("channels.imessage.sub")}</div>
      ${accountCountLabel}

      <div class="status-list" style="margin-top: 16px;">
        <div>
          <span class="label">${t("channels.configured")}</span>
          <span>${imessage?.configured ? t("agents.yes") : t("agents.no")}</span>
        </div>
        <div>
          <span class="label">${t("channels.running")}</span>
          <span>${imessage?.running ? t("agents.yes") : t("agents.no")}</span>
        </div>
        <div>
          <span class="label">${t("channels.lastStart")}</span>
          <span>${imessage?.lastStartAt ? formatAgo(imessage.lastStartAt) : t("agents.na")}</span>
        </div>
        <div>
          <span class="label">${t("channels.lastProbe")}</span>
          <span>${imessage?.lastProbeAt ? formatAgo(imessage.lastProbeAt) : t("agents.na")}</span>
        </div>
      </div>

      ${
        imessage?.lastError
          ? html`<div class="callout danger" style="margin-top: 12px;">
            ${imessage.lastError}
          </div>`
          : nothing
      }

      ${
        imessage?.probe
          ? html`<div class="callout" style="margin-top: 12px;">
            ${t("channels.probe")} ${imessage.probe.ok ? t("channels.probeOk") : t("channels.probeFailed")} ·
            ${imessage.probe.error ?? ""}
          </div>`
          : nothing
      }

      ${renderChannelConfigSection({ channelId: "imessage", props })}

      <div class="row" style="margin-top: 12px;">
        <button class="btn" @click=${() => props.onRefresh(true)}>
          ${t("channels.probe")}
        </button>
      </div>
    </div>
  `;
}
