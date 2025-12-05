export const chunk = <T>(to_chunk: T[], size: number): T[][] => {
  const R = [];
  for (let i = 0; i < to_chunk.length; i += size)
    R.push(to_chunk.slice(i, i + size));
  return R;
};

export const snakeCaseString = (value: string) => {
  return value
    .replace(/\W+/g, " ")
    .split(/ |\B(?=[A-Z])/)
    .map((word) => word.toLowerCase())
    .join("_");
};
