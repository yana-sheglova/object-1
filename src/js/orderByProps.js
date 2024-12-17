export default function orderByProps(obj, order) {
  const sortedProps = [];

  order.forEach((key) => {
    if (key in obj) {
      sortedProps.push({ key, value: obj[key] });
    }
  });

  const remainingProps = [];

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key) && !order.includes(key)) {
      remainingProps.push({ key, value: obj[key] });
    }
  }

  remainingProps.sort((a, b) => a.key.localeCompare(b.key));

  return sortedProps.concat(remainingProps);
}
