export const chunk = <T>(to_chunk: T[], size: number): T[][] => {
  const R = [];
  for (let i = 0; i < to_chunk.length; i += size)
    R.push(to_chunk.slice(i, i + size));
  return R;
};
