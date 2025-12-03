export const getImagePathId = (raw_path: string) => {
  const corrected = raw_path.split(".")[0];

  const path_parts = corrected.split("/");

  if (path_parts.length < 2) {
    throw new Error(
      `Unable to get image path id for ${raw_path}: ${path_parts.join(",")}`,
    );
  }

  return `${path_parts[path_parts.length - 2].toLowerCase()}_${path_parts[path_parts.length - 1]}`;
};
