export const assert: (value: any, message?: string) => asserts value = (
  value,
  message
) => {
  if (!value) {
    throw new Error(message || "Assertion failed");
  }
};
