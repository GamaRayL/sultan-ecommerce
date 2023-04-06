export default interface IButton {
  icon?: "search" | "download" | "basket" | "catalog" | "delete";
  type?: "button" | "submit";
  color?: "primary" | "inherit";
  variant?: "contained" | "outlined";
  iconSize?: number;
  uppercase?: boolean;
  buttonSize?: "small" | "medium" | "large";
  children?: React.ReactNode;
  form?: string;
  onClick?: (e: React.MouseEvent) => void;
}
