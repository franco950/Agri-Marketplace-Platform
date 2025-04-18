
// Enums
export enum ProductType {
    FRUIT = "FRUIT",
    VEGETABLE = "VEGETABLE",
    GRAIN = "GRAIN",
    LEGUME = "LEGUME",
    TUBER = "TUBER",
    DAIRY = "DAIRY",
    MEAT = "MEAT",
    POULTRY = "POULTRY",
    OTHER = "OTHER"
  }
  
  export enum Unit {
    KG = "KG",
    LITERS = "LITERS",
    BAGS = "BAGS",
    CRATES = "CRATES",
    BUNCHES = "BUNCHES",
    PIECES = "PIECES",
    OTHER = "OTHER"
  }
  
  export enum ProductStatus {
    AVAILABLE = "AVAILABLE",
    SOLD = "SOLD",
    PENDING = "PENDING",
    EXPIRED = "EXPIRED",
    RESERVED = "RESERVED"
  }
  
  export enum Rating {
    ONE = "ONE",
    TWO = "TWO",
    THREE = "THREE",
    FOUR = "FOUR",
    FIVE = "FIVE",
    SIX = "SIX",
    SEVEN = "SEVEN",
    EIGHT = "EIGHT",
    NINE = "NINE",
    TEN = "TEN"
  }
  
  export type Admin ={
    id: number;
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    isactive: boolean;
    
  }
  export type Worker ={
    id: number;
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    isactive: boolean;
    
  }
  export type Farmer ={
    id: number;
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    phone: string;
    isactive: boolean;
    products?: Product[];
  }
  
  export type Buyer ={
    id: number;
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    phone: string;
    isactive: boolean;
  }
  
  export type Supplier ={
    id: number;
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    phone: string;
    isactive: boolean;
  }
  export enum Delivery {
    FARMER,
    SELF,
    SERVICE
  }
  
  export type Product ={
    id: number;
    name: string;
    type: ProductType;
    unit: Unit;
    priceperunit: number;
    quantity: number;
    variety: string;
    perishdate: string;
    location: string;
    status: ProductStatus;
    description: string;
    images: any;
    createdAt: string;
    updatedAt: string;
    farmerid: number;
    farmerobj?: Farmer;
    reviews?: Review[];
  }
  
  export type Review ={
    id: number;
    userId: number;
    rating: Rating;
    comment: string;
    productid: number;
    productobj?: Product;
  }

export const productsData = [
  {
    name: "Maize",
    type: ProductType.GRAIN,
    unit: Unit.BAGS,
    priceperunit: 336,
    quantity: 71,
    variety: "Local",
    perishdate: new Date("2025-04-25T14:42:43.581384"),
    location: "Nyeri",
    status: ProductStatus.AVAILABLE,
    description: "High quality maize from Kenyan farms.",
    images: ["/images/product_1.jpg"],
    createdAt: new Date("2025-04-16T14:42:43.581422"),
    updatedAt: new Date("2025-04-16T14:42:43.581424"),
    farmerid: 1,
  },
  {
    name: "Tomatoes",
    type: ProductType.VEGETABLE,
    unit: Unit.CRATES,
    priceperunit: 486,
    quantity: 13,
    variety: "Hybrid",
    perishdate: new Date("2025-04-28T14:42:43.581429"),
    location: "Thika",
    status: ProductStatus.SOLD,
    description: "High quality tomatoes from Kenyan farms.",
    images: ["/images/product_2.jpg"],
    createdAt: new Date("2025-04-16T14:42:43.581440"),
    updatedAt: new Date("2025-04-16T14:42:43.581441"),
    farmerid: 2,
  },
  {
    name: "Milk",
    type: ProductType.DAIRY,
    unit: Unit.LITERS,
    priceperunit: 291,
    quantity: 84,
    variety: "Organic",
    perishdate: new Date("2025-04-20T14:42:43.581445"),
    location: "Nairobi",
    status: ProductStatus.RESERVED,
    description: "High quality milk from Kenyan farms.",
    images: ["/images/product_3.jpg"],
    createdAt: new Date("2025-04-16T14:42:43.581453"),
    updatedAt: new Date("2025-04-16T14:42:43.581455"),
    farmerid: 3,
  },
  {
    name: "Chicken",
    type: ProductType.POULTRY,
    unit: Unit.PIECES,
    priceperunit: 417,
    quantity: 73,
    variety: "Dairy breed",
    perishdate: new Date("2025-04-21T14:42:43.581459"),
    location: "Kisumu",
    status: ProductStatus.EXPIRED,
    description: "High quality chicken from Kenyan farms.",
    images: ["/images/product_4.jpg"],
    createdAt: new Date("2025-04-16T14:42:43.581466"),
    updatedAt: new Date("2025-04-16T14:42:43.581468"),
    farmerid: 4,
  },
  {
    name: "Mangoes",
    type: ProductType.FRUIT,
    unit: Unit.CRATES,
    priceperunit: 181,
    quantity: 43,
    variety: "Broiler",
    perishdate: new Date("2025-04-25T14:42:43.581472"),
    location: "Kisumu",
    status: ProductStatus.EXPIRED,
    description: "High quality mangoes from Kenyan farms.",
    images: ["/images/product_5.jpg"],
    createdAt: new Date("2025-04-16T14:42:43.581478"),
    updatedAt: new Date("2025-04-16T14:42:43.581480"),
    farmerid: 5,
  },
  {
    name: "Potatoes",
    type: ProductType.TUBER,
    unit: Unit.KG,
    priceperunit: 430,
    quantity: 4,
    variety: "Sweet",
    perishdate: new Date("2025-04-23T14:42:43.581484"),
    location: "Nairobi",
    status: ProductStatus.PENDING,
    description: "High quality potatoes from Kenyan farms.",
    images: ["/images/product_6.jpg"],
    createdAt: new Date("2025-04-16T14:42:43.581491"),
    updatedAt: new Date("2025-04-16T14:42:43.581493"),
    farmerid: 6,
  },
  {
    name: "Beans",
    type: ProductType.LEGUME,
    unit: Unit.BAGS,
    priceperunit: 136,
    quantity: 16,
    variety: "Red",
    perishdate: new Date("2025-04-30T14:42:43.581496"),
    location: "Eldoret",
    status: ProductStatus.RESERVED,
    description: "High quality beans from Kenyan farms.",
    images: ["/images/product_7.jpg"],
    createdAt: new Date("2025-04-16T14:42:43.581503"),
    updatedAt: new Date("2025-04-16T14:42:43.581505"),
    farmerid: 7,
  },
  {
    name: "Carrots",
    type: ProductType.VEGETABLE,
    unit: Unit.KG,
    priceperunit: 53,
    quantity: 37,
    variety: "Green",
    perishdate: new Date("2025-04-25T14:42:43.581511"),
    location: "Kitale",
    status: ProductStatus.RESERVED,
    description: "High quality carrots from Kenyan farms.",
    images: ["/images/product_8.jpg"],
    createdAt: new Date("2025-04-16T14:42:43.581519"),
    updatedAt: new Date("2025-04-16T14:42:43.581521"),
    farmerid: 8,
  },
  {
    name: "Cabbage",
    type: ProductType.VEGETABLE,
    unit: Unit.KG,
    priceperunit: 148,
    quantity: 39,
    variety: "Fresh",
    perishdate: new Date("2025-04-26T14:42:43.581525"),
    location: "Meru",
    status: ProductStatus.PENDING,
    description: "High quality cabbage from Kenyan farms.",
    images: ["/images/product_9.jpg"],
    createdAt: new Date("2025-04-16T14:42:43.581533"),
    updatedAt: new Date("2025-04-16T14:42:43.581535"),
    farmerid: 9,
  },
  {
    name: "Bananas",
    type: ProductType.FRUIT,
    unit: Unit.BUNCHES,
    priceperunit: 137,
    quantity: 94,
    variety: "Dry",
    perishdate: new Date("2025-04-26T14:42:43.581539"),
    location: "Nyeri",
    status: ProductStatus.EXPIRED,
    description: "High quality bananas from Kenyan farms.",
    images: ["/images/product_10.jpg"],
    createdAt: new Date("2025-04-16T14:42:43.581546"),
    updatedAt: new Date("2025-04-16T14:42:43.581548"),
    farmerid: 10,
  },
];

export const reviewsData = [
  { userId: 7, rating: Rating.NINE, comment: "Great quality maize!", productid: 1 },
  { userId: 7, rating: Rating.THREE, comment: "Great quality tomatoes!", productid: 2 },
  { userId: 4, rating: Rating.ONE, comment: "Great quality milk!", productid: 3 },
  { userId: 3, rating: Rating.TEN, comment: "Great quality chicken!", productid: 4 },
  { userId: 5, rating: Rating.TWO, comment: "Great quality mangoes!", productid: 5 },
  { userId: 7, rating: Rating.TWO, comment: "Great quality potatoes!", productid: 6 },
  { userId: 3, rating: Rating.ONE, comment: "Great quality beans!", productid: 7 },
  { userId: 2, rating: Rating.SIX, comment: "Great quality carrots!", productid: 8 },
  { userId: 5, rating: Rating.EIGHT, comment: "Great quality cabbage!", productid: 9 },
  { userId: 10, rating: Rating.SEVEN, comment: "Great quality bananas!", productid: 10 },
];

  export const farmersData = [
    { firstname: "Wanjiku", lastname: "Kiprotich", email: "farmer1@example.com", password: "kiprotich", phone: "+254742525132", isactive: true },
    { firstname: "Ouma", lastname: "Kiprotich", email: "farmer2@example.com", password: "password", phone: "+254773089312", isactive: true },
    { firstname: "Chebet", lastname: "Barasa", email: "farmer3@example.com", password: "barasa", phone: "+254767284463", isactive: true },
    { firstname: "Mwangi", lastname: "Kiprotich", email: "farmer4@example.com", password: "hashed_password", phone: "+254722631670", isactive: true },
    { firstname: "Mwangi", lastname: "Kiprotich", email: "farmer5@example.com", password: "hashed_password", phone: "+254712132242", isactive: true },
    { firstname: "Mwangi", lastname: "Wambui", email: "farmer6@example.com", password: "hashed_password", phone: "+254741199462", isactive: true },
    { firstname: "Achieng", lastname: "Cheruiyot", email: "farmer7@example.com", password: "hashed_password", phone: "+254726569429", isactive: true },
    { firstname: "Kiptoo", lastname: "Mutua", email: "farmer8@example.com", password: "hashed_password", phone: "+254760733041", isactive: true },
    { firstname: "Ouma", lastname: "Mutua", email: "farmer9@example.com", password: "hashed_password", phone: "+254741415930", isactive: true },
    { firstname: "Kamau", lastname: "Koech", email: "farmer10@example.com", password: "hashed_password", phone: "+254723272337", isactive: true }
  ];
  export const buyersData = [
    { firstname: "Mwangi", lastname: "Were", email: "buyer1@example.com", password: "awesome1", phone: "+254728011241", isactive: true },
    { firstname: "Nyambura", lastname: "Odhiambo", email: "buyer2@example.com", password: "awesome2", phone: "+254712886214", isactive: true },
    { firstname: "Wanjiku", lastname: "Cheruiyot", email: "buyer3@example.com", password: "hashed_password", phone: "+254752216085", isactive: true },
    { firstname: "Kamau", lastname: "Mutua", email: "buyer4@example.com", password: "hashed_password", phone: "+254782422423", isactive: true },
    { firstname: "Mwangi", lastname: "Cheruiyot", email: "buyer5@example.com", password: "hashed_password", phone: "+254770962464", isactive: true },
    { firstname: "Njeri", lastname: "Wambui", email: "buyer6@example.com", password: "hashed_password", phone: "+254739542246", isactive: true },
    { firstname: "Otieno", lastname: "Koech", email: "buyer7@example.com", password: "hashed_password", phone: "+254793244530", isactive: true },
    { firstname: "Chebet", lastname: "Kiprotich", email: "buyer8@example.com", password: "hashed_password", phone: "+254763805003", isactive: true },
    { firstname: "Kiptoo", lastname: "Odhiambo", email: "buyer9@example.com", password: "hashed_password", phone: "+254732688702", isactive: true },
    { firstname: "Mwangi", lastname: "Muthoni", email: "buyer10@example.com", password: "hashed_password", phone: "+254783917184", isactive: true }
  ];
  export const suppliersData = [
    { firstname: "Wanjiku", lastname: "Barasa", email: "supplier1@example.com", password: "secure", phone: "+254775564309", isactive: true },
    { firstname: "Ouma", lastname: "Wambui", email: "supplier2@example.com", password: "safe", phone: "+254735941037", isactive: true },
    { firstname: "Mwangi", lastname: "Wambui", email: "supplier3@example.com", password: "hashed_password", phone: "+254762790374", isactive: true },
    { firstname: "Nyambura", lastname: "Odhiambo", email: "supplier4@example.com", password: "hashed_password", phone: "+254751776309", isactive: true },
    { firstname: "Njeri", lastname: "Barasa", email: "supplier5@example.com", password: "hashed_password", phone: "+254762159218", isactive: true },
    { firstname: "Wanjiku", lastname: "Were", email: "supplier6@example.com", password: "hashed_password", phone: "+254789667298", isactive: true },
    { firstname: "Wanjiku", lastname: "Omondi", email: "supplier7@example.com", password: "hashed_password", phone: "+254770269661", isactive: true },
    { firstname: "Mwangi", lastname: "Kiprotich", email: "supplier8@example.com", password: "hashed_password", phone: "+254773138548", isactive: true },
    { firstname: "Achieng", lastname: "Muthoni", email: "supplier9@example.com", password: "hashed_password", phone: "+254791391832", isactive: true },
    { firstname: "Ouma", lastname: "Kiprotich", email: "supplier10@example.com", password: "hashed_password", phone: "+254792148933", isactive: true }
  ];

 
    