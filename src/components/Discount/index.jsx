export const calculateDiscountPercentage = (price, discountedPrice) => {
    if (discountedPrice && discountedPrice !== price) {
      const discountPercentage = ((price - discountedPrice) / price * 100).toFixed(2);
      return parseFloat(discountPercentage).toString().replace(/\.0+$/, '');
    } else {
      return null;
    }
  };
