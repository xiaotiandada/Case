export default {
  setElementStyle: (obj: any, params: any) => {
    Object.keys(params).forEach(key => {
      obj.style[key] = params[key];
    });
  }
};
