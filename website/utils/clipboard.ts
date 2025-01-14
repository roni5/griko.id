import type { Renderable } from "react-hot-toast";
import { toast } from "react-hot-toast";

export const copy = async (text: string, message: Renderable = "Copied to clipboard!") => {
  try {
    await navigator.clipboard.writeText(text);
    return toast.success(message);
  } catch (err: unknown) {
    return toast.error(String(err));
  }
};
