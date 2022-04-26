const useScopeClass = (scope) => {
  const scopeClass = (key) => {
    if (key === "")
      return scope;
    return [scope, key].join("-");
  };
  return scopeClass;
};

const index = {
  useScopeClass
};

export { index as default };
