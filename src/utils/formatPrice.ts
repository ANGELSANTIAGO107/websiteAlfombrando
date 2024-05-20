export function formatPrice(price: number) {
  return Number(price).toLocaleString("es-CO", {
    style: "currency",
    currency: "COP",
  });
}
