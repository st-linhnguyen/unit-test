export const handleRemoveItems = (arr: unknown[], ids: unknown[]) => {
  return arr.filter((_item: {id: unknown}) => !ids.includes(_item.id));
};
