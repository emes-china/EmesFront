export function groupBy(array, cb) {
  const groups = {};
  array.forEach(o => {
    const group = JSON.stringify(cb(o));
    groups[group] = groups[group] || [];
    groups[group].push(o);
  });
  return Object.keys(groups).map(group => {
    return groups[group];
  });
}
