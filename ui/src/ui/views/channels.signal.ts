import { html, nothing } from "lit";
import { t } from "../locale/strings.js";
import type { SignalStatus } from "../types.ts";
import type { ChannelsProps } from "./channels.types.ts";
import { formatAgo } from "../format.ts";
import { renderChannelConfigSection } from "./channels.config.ts";

export function renderSignalCard(params: {
  props: ChannelsProps;
  signal?: SignalStatus | null;
  accountCountLabel: unknown;
}) {
  const { props, signal, accountCountLabel } = params;

  return html`
    <div class="card">
      <div class="card-title">${t("channels.signal.title")}</div>
      <div class="card-sub">${t("channels.signal.sub")}</div>
      ${accountCountLabel}

      <div class="status-list" style="margin-top: 16px;">
        <div>
          <span class="label">${t("channels.configured")}</span>
          <span>${signal?.configured ? t("agents.yes") : t("agents.no")}</span>
        </div>
        <div>
          <span class="label">${t("channels.running")}</span>
          <span>${signal?.running ? t("agents.yes") : t("agents.no")}</span>
        </div>
        <div>
          <span class="label">${t("channels.baseUrl")}</span>
          <span>${signal?.baseUrl ?? t("agents.na")}</span>
        </div>
        <div>
          <span class="label">${t("channels.lastStart")}</span>
          <span>${signal?.lastStartAt ? formatAgo(signal.lastStartAt) : t("agents.na")}</span>
        </div>
        <div>
          <span class="label">${t("channels.lastProbe")}</span>
          <span>${signal?.lastProbeAt ? formatAgo(signal.lastProbeAt) : t("agents.na")}</span>
        </div>
      </div>

      ${
        signal?.lastError
          ? html`<div class="callout danger" style="margin-top: 12px;">
            ${signal.lastError}
          </div>`
          : nothing
      }

      ${
        signal?.probe
          ? html`<div class="callout" style="margin-top: 12px;">
            ${t("channels.probe")} ${signal.probe.ok ? t("channels.probeOk") : t("channels.probeFailed")} ·
            ${signal.probe.status ?? ""} ${signal.probe.error ?? ""}
          </div>`
          : nothing
      }

      ${renderChannelConfigSection({ channelId: "signal", props })}

      <div class="row" style="margin-top: 12px;">
        <button class="btn" @click=${() => props.onRefresh(true)}>
          ${t("channels.probe")}
        </button>
      </div>
    </div>
  `;
}
