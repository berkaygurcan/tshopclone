import {create} from 'zustand';
import {login} from '../api/AuthService';
import {Product} from '../types/Products';

interface State {
  user: string | null;
  cart: {product: Product; quantity: number}[]; // Her ürünün miktarını da takip edeceğiz
  isLoading: boolean;
  error: string | null;
  loginUser: (credentials: {
    username: string;
    password: string;
  }) => Promise<void>;
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  // Diğer state işlevlerini ve state değerlerini burada tanımlayabilirsiniz
}

const useStore = create<State>(set => ({
  user: null,
  isLoading: false,
  error: null,
  cart: [],
  loginUser: async credentials => {
    set({isLoading: true, error: null}); // İşlem başlamadan önce error state'i null olarak ayarlandı
    try {
      const user = await login(credentials);
      set({user, isLoading: false});
    } catch (error) {
      if (error.response && error.response.status === 401) {
        // Eğer hata bir HTTP 401 hatası ise, yani giriş bilgileri hatalı ise özel bir hata mesajı ayarlayabilirsiniz.
        set({isLoading: false, error: 'Giriş bilgileri hatalı'});
      } else {
        // Diğer hata durumlarında ise "Bilinmeyen bir hata" mesajını kullanabilirsiniz.
        set({isLoading: false, error: 'Bilinmeyen bir hata oluştu'});
        console.error('Axios Error:', error);
      }
    }
  },
  addToCart: product => {
    set(state => {
      // Ürün sepette var mı kontrol et
      const existingItem = state.cart.find(
        item => item.product.id === product.id,
      );

      if (existingItem) {
        // Eğer ürün zaten sepette varsa, miktarını artır
        existingItem.quantity += 1;
        return {cart: [...state.cart]};
      } else {
        // Eğer ürün sepette yoksa, yeni bir öğe olarak ekle
        return {cart: [...state.cart, {product, quantity: 1}]};
      }
    });
  },
  removeFromCart: productId => {
    set(state => {
      // Verilen ürünü sepetten çıkar
      const updatedCart = state.cart.filter(
        item => item.product.id !== productId,
      );
      return {cart: updatedCart};
    });
  },
  // Diğer state işlevlerini burada ekleyebilirsiniz
}));

export default useStore;
