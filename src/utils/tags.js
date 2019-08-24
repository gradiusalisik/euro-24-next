export const setTag = (tagIds, id) => {
  let newTagIds = tagIds.slice();
  const index = tagIds.indexOf(id);
  if (index >= 0) {
    if (newTagIds.length === 1) {
      return newTagIds;
    }
    newTagIds.splice(index, 1);
  } else {
    newTagIds.splice(tagIds.length, 0, id);
  }
  return newTagIds;
};

export const filteredTags = (tags, slides) =>
  tags.filter(({ id }) => slides.some(({ tags }) => tags.includes(id)));

export const getSlides = (tagIds, slides) =>
  slides.filter(({ tags }) => tags.some(tag => tagIds.includes(tag)));
