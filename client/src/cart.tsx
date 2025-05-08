import { useEffect, useState } from 'react';

type CartProduct = {
  productid: string;
  quantity: number;
};

type CartItem = {
  userid: string;
  items: CartProduct[];
};

export function useCart(userId: string) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [total,setTotal]=useState<number>(0)

  // Load cart from localStorage on first mount
  useEffect(() => {
    const stored = localStorage.getItem('cart');
    if (stored) {
      try {
        setTotal(0)
        setCart(JSON.parse(stored));
      } catch (err) {
        console.error('Failed to parse cart from localStorage:', err);
        setCart([]);
      }
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    const totalquantity = userCartItems.reduce((total, item) => total + item.quantity, 0);
    setTotal(totalquantity)
    localStorage.setItem('cart', JSON.stringify(cart));

  }, [cart]);

  // Add or update product in cart
  const addToCart = (productid: string, quantity: number) => {
    console.log('aadded')
    setCart((prevCart) => {
      const newCart = [...prevCart];
      let userCart = newCart.find((c) => c.userid === userId);

      if (!userCart) {
        userCart = { userid: userId, items: [] };
        newCart.push(userCart);
      }

      const product = userCart.items.find((item) => item.productid === productid);
      if (product) {
        product.quantity += quantity;
      } else {
        userCart.items.push({ productid, quantity });
      }

      return newCart;
    });
  };

  // Remove product from cart
  const removeFromCart = (productid: string) => {
    setCart((prevCart) => {
      const newCart = prevCart.map((userCart) => {
        if (userCart.userid === userId) {
          return {
            ...userCart,
            items: userCart.items.filter((item) => item.productid !== productid),
          };
        }
        return userCart;
      });

      return newCart;
    });
  };

  // Get just the items for this user
  const userCartItems = cart.find((c) => c.userid === userId)?.items || [];
  
  


  return {
    cart: userCartItems,
    total:total,
    addToCart,
    removeFromCart,
  };
}
