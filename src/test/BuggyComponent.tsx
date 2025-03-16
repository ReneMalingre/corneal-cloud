export function BuggyComponent() {
  throw new Error('Test error message');
  return null;
}
