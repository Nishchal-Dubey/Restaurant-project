// import React, { createContext, useContext, useState } from 'react';

// const WishlistContext = createContext();

// export const WishlistProvider = ({ children }) => {
//   const [wishlist, setWishlist] = useState([]);

//   const addToWishlist = (item) => {
//     // Avoid duplicates
//     setWishlist((prev) => {
//       if (prev.find((i) => i.id === item.id)) return prev;
//       return [...prev, item];
//     });
//   };

//   const removeFromWishlist = (id) => {
//     setWishlist((prev) => prev.filter(item => item.id !== id));
//   };

//   return (
//     <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist }}>
//       {children}
//     </WishlistContext.Provider>
//   );
// };

// export const useWishlist = () => useContext(WishlistContext);




import React, { createContext, useContext, useState } from 'react';

// Create context
const WishlistContext = createContext();

// Provider component to wrap around app
export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);

  // Add item to wishlist (avoid duplicates)
  const addToWishlist = (item) => {
    setWishlist((prev) => {
      const exists = prev.find((i) => i.id === item.id);
      return exists ? prev : [...prev, item];
    });
  };

  // Remove a specific item
  const removeFromWishlist = (id) => {
    setWishlist((prev) => prev.filter((item) => item.id !== id));
  };

  // Clear all items
  const clearWishlist = () => {
    setWishlist([]);
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        addToWishlist,
        removeFromWishlist,
        clearWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

// Custom hook for easier usage in components
export const useWishlist = () => useContext(WishlistContext);
