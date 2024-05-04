const BASE_URL = "https://test.api.weniv.co.kr";
export async function getProductData() {
  const response = await fetch(`${BASE_URL}/mall`);
  const data = await response.json();
  return data;
}

export async function getProductIdData(id) {
  const response = await fetch(`${BASE_URL}/mall/${id}`);
  const data = await response.json();
  return data;
}
