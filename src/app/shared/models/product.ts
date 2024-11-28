export class Product {
  kinguinId: number;
  productId: string;
  cheapestOfferId: string[];
  name: string;
  originalName: string;
  description: string;
  developers: string[];
  publishers: string[];
  genres: string[];
  platform: string;
  releaseDate: string;
  qty: number;
  price: number;
  textQty: number;
  offers: Offer[];
  offersCount: number;
  totalQty: number;
  isPreorder: boolean;
  metacriticScore: number;
  regionalLimitations: string;
  regionId: number;
  activationDetails: string;
  videos: Video[];
  languages: string[];
  updatedAt: string;
  systemRequirements: SystemRequirement[];
  tags: string[];
  merchantName: string[];
  ageRating: string;
  steam: string;
  images: Images;
  coverImage:string; 

  constructor(
    kinguinId: number,
    productId: string,
    cheapestOfferId: string[],
    name: string,
    originalName: string,
    description: string,
    developers: string[],
    publishers: string[],
    genres: string[],
    platform: string,
    releaseDate: string,
    qty: number,
    price: number,
    textQty: number,
    offers: Offer[],
    offersCount: number,
    totalQty: number,
    isPreorder: boolean,
    metacriticScore: number,
    regionalLimitations: string,
    regionId: number,
    activationDetails: string,
    videos: Video[],
    languages: string[],
    updatedAt: string,
    systemRequirements: SystemRequirement[],
    tags: string[],
    merchantName: string[],
    ageRating: string,
    steam: string,
    images: Images,
    coverImage:string,
  ) {
    this.kinguinId = kinguinId;
    this.productId = productId;
    this.cheapestOfferId = cheapestOfferId;
    this.name = name;
    this.originalName = originalName;
    this.description = description;
    this.developers = developers;
    this.publishers = publishers;
    this.genres = genres;
    this.platform = platform;
    this.releaseDate = releaseDate;
    this.qty = qty;
    this.price = price;
    this.textQty = textQty;
    this.offers = offers;
    this.offersCount = offersCount;
    this.totalQty = totalQty;
    this.isPreorder = isPreorder;
    this.metacriticScore = metacriticScore;
    this.regionalLimitations = regionalLimitations;
    this.regionId = regionId;
    this.activationDetails = activationDetails;
    this.videos = videos;
    this.languages = languages;
    this.updatedAt = updatedAt;
    this.systemRequirements = systemRequirements;
    this.tags = tags;
    this.merchantName = merchantName;
    this.ageRating = ageRating;
    this.steam = steam;
    this.images = images;
    this.coverImage = coverImage;
  }
}

export class Results{
  results!: Product[];
  items_count!: number;
}

export class Offer {
  id!: string;
  price!: number;
  sellerName!: string;
  quantity!: number;
  currency!: string;
  discount!: number;
}

export class Video {
  url!: string;
  title!: string;
}

export class SystemRequirement {
  os!: string;
  processor!: string;
  memory!: string;
  graphics!: string;
  storage!: string;
}

export class Images {
  screenshots!: Screenshot[];
  cover!: Cover[];
}

export class Screenshot {
  url!: string;
  thumbnail!: string;
}

export class Cover {
  url!: string;
  thumbnail!: string;
}
