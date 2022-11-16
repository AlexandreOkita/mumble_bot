export default class DiscordButton {
  customId: string;
  label: string;
  style: DiscordButtonStyle;

  constructor(customId: string, label: string, style: DiscordButtonStyle) {
    this.customId = customId;
    this.label = label;
    this.style = style;
  }
}

export enum DiscordButtonStyle {
  Primary = 1,
  Secondary = 2,
  Success = 3,
  Danger = 4,
  Link = 5,
}
