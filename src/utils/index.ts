export function cls(...classNames: (string | null | undefined)[]) {
  return (classNames || []).filter((clsName) => !!clsName).join('');
}
