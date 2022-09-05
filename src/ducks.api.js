export async function getList() {
  const response = await fetch("/ducks-api/list");
  const json = await response.json();
  return json;
}
