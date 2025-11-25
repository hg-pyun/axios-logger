export function join(...paths: string[]) {
  return paths
    .map((path, index) => {
      if (index > 0) {
        path = path.replace(/^\//, ''); // Remove leading slash from all except the first part
      }
      if (index < paths.length - 1) {
        path = path.replace(/\/$/, ''); // Remove trailing slash from all except the last part
      }
      return path;
    })
    .join('/')
    .replace(/\/+/g, '/'); // Replace multiple slashes with a single slash
  
}

export function isURLSearchParams(val: object) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

export function convertURLSearchParamsToObject(params: URLSearchParams) {
  let arr: object = {};
  for (const obj of params.entries()) {
      Object.defineProperty(arr, obj[0], { value: obj[1]});
  }
  return arr;
}
