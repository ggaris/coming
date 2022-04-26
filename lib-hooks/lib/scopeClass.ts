export default function useScopeClass(scope: string) {

  const scopeClass = (key: string): string => {
    if (key === '') return scope;
    return [scope, key].join('-');
  }

  return scopeClass;
}


