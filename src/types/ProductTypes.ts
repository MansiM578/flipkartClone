export type Item = {
  id: string;
  assured: boolean;
  breadcrumbs: string[];
  currencyType: string;
  description: string;
  discount: number;
  images: string[];
  name: string;
  offers: Offer[];
  price: number;
  ratingReviews: RatingReviews;
  seller: Seller[];
  services: Services;
  slug: string;
  specialPrice: boolean;
  specifications: Specification;
  stock: number;
};

export type Offer = {
  offerType: string;
  description: string;
};

export type RatingReviews = {
  avg_rating: number;
  rating: number;
  reviews: number;
};

export type Seller = {
  name: string;
  returns: boolean;
  rating: number;
};

export type Services = {
  paymentType: string;
  warranty: string;
};

export type Specification = {
  attributes: SpecificationAttribute[];
};

export type SpecificationAttribute = {
  inTheBox: InTheBox;
  general: General;
  dimensions: Dimension;
  moreDetails: MoreDetails;
};

export type InTheBox = {
  salesPackage: string;
  packOf: string;
};

export type General = {
  brand: string;
  suitableFor: string;
  appliedOn: string;
  removable: string;
  color: string;
};

export type Dimension = {
  height: string;
  width: string;
};

export type MoreDetails = {
  GenericName: string;
  CountryOfOrigin: string;
};

export type CartItem = {
  itemId: string;
  name: string;
  quantity: number;
  image: string;
};

export type ItemsState = {
  items: Item[] | null;
  loading: boolean;
  error: string | null;
  itemDetails: Item | null;
  cart: CartItem[] | null;
};
