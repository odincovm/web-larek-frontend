type Product {
  id: number;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
}
type CartItem {
  product: Product;
  quantity: number;
}
type Order {
  id: number;
  items: CartItem[];
  totalPrice: number;
  paymentMethod: string;
  address: string;
}