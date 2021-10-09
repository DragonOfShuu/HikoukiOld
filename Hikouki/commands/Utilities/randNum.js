module.exports = (min=0, max=1) => {
  let num = Math.random() * (max - min) + min;

  return Math.floor(num);
}