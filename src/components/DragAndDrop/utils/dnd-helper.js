export default (item, monitor, listIndex, index, ref, move) => {
  const draggedListIndex = item.listIndex;
  const targetListIndex = listIndex;

  const draggedIndex = item.index;
  const targetIndex = index;

  if (draggedIndex === targetIndex && draggedListIndex === targetListIndex) return;

  const targetSize = ref.current.getBoundingClientRect();
  const targetCenter = (targetSize.bottom - targetSize.top) / 2;

  const draggedOffset = monitor.getClientOffset();
  const draggedTop = draggedOffset.y - targetSize.top;

  if (draggedIndex < targetIndex && draggedTop < targetCenter) return;
  if (draggedIndex > targetIndex && draggedTop > targetCenter) return;

  move(draggedListIndex, targetListIndex, draggedIndex, targetIndex);

  item.index = targetIndex;
  item.listIndex = targetListIndex;
}
