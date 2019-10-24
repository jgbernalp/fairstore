export const classNames = (...args: Array<string | undefined>) =>
  args
    .filter(Boolean)
    .join(' ')
    .trim();
