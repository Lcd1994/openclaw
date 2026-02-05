import { html, nothing } from "lit";
import { t } from "../locale/strings.js";
import type { GoogleChatStatus } from "../types.ts";
import type { ChannelsProps } from "./channels.types.ts";
import { formatAgo } from "../format.ts";
import { renderChannelConfigSection } from "./channels.config.ts";

export function renderGoogleChatCard(params: {
  props: ChannelsProps;
  googleChat?: GoogleChatStatus | null;
  accountCountLabel: unknown;
}) {
  const { props, googleChat, accountCountLabel } = params;

  return html`
    <div class="card">
      <div class="card-title">${t("channels.googlechat.title")}</div>
      <div class="card-sub">${t("channels.googlechat.sub")}</div>
      ${accountCountLabel}

      <div class="status-list" style="margin-top: 16px;">
        <div>
          <span class="label">${t("channels.configured")}</span>
          <span>${googleChat ? (googleChat.configured ? t("agents.yes") : t("agents.no")) : t("agents.na")}</span>
        </div>
        <div>
          <span class="label">${t("channels.running")}</span>
          <span>${googleChat ? (googleChat.running ? t("agents.yes") : t("agents.no")) : t("agents.na")}</span>
        </div>
        <div>
          <span class="label">${t("channels.credential")}</span>
          <span>${googleChat?.credentialSource ?? t("agents.na")}</span>
        </div>
        <div>
          <span class="label">${t("channels.audience")}</span>
          <span>
            ${
              googleChat?.audienceType
                ? `${googleChat.audienceType}${googleChat.audience ? ` · ${googleChat.audience}` : ""}`
                : t("agents.na")
            }
          </span>
        </div>
        <div>
          <span class="label">${t("channels.lastStart")}</span>
          <span>${googleChat?.lastStartAt ? formatAgo(googleChat.lastStartAt) : t("agents.na")}</span>
        </div>
        <div>
          <span class="label">${t("channels.lastProbe")}</span>
          <span>${googleChat?.lastProbeAt ? formatAgo(googleChat.lastProbeAt) : t("agents.na")}</span>
        </div>
      </div>

      ${
        googleChat?.lastError
          ? html`<div class="callout danger" style="margin-top: 12px;">
            ${googleChat.lastError}
          </div>`
          : nothing
      }

      ${
        googleChat?.probe
          ? html`<div class="callout" style="margin-top: 12px;">
            ${t("channels.probe")} ${googleChat.probe.ok ? t("channels.probeOk") : t("channels.probeFailed")} ·
            ${googleChat.probe.status ?? ""} ${googleChat.probe.error ?? ""}
          </div>`
          : nothing
      }

      ${renderChannelConfigSection({ channelId: "googlechat", props })}

      <div class="row" style="margin-top: 12px;">
        <button class="btn" @click=${() => props.onRefresh(true)}>
          ${t("channels.probe")}
        </button>
      </div>
    </div>
  `;
}
