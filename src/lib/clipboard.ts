/**
 * Copies text to the clipboard via the Clipboard API.
 * Returns false instead of throwing when the environment blocks clipboard
 * access (e.g. insecure context, permissions denied, unsupported browser).
 */
export async function copyToClipboard(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    return false;
  }
}
