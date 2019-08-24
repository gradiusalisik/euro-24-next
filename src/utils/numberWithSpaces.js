export const numberWithSpaces = data =>
  String(data).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ");
