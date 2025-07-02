"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productPrices = exports.ProductStatus = exports.categoryToUnitMap = exports.Unit = exports.productVarieties = exports.ProductType = void 0;
exports.mapCategoryToProductType = mapCategoryToProductType;
exports.getQuantity = getQuantity;
exports.getDiscount = getDiscount;
exports.getSupplierThreshold = getSupplierThreshold;
exports.addProducts = addProducts;
exports.removeProducts = removeProducts;
var prisma_1 = require("../generated/prisma");
var prisma = new prisma_1.PrismaClient();
removeProducts()
    .then(function () {
    console.log("🌾 Product removal complete.");
    process.exit(0);
})
    .catch(function (err) {
    console.error("❌ Error removing products:", err);
    process.exit(1);
});
// addProducts()
//   .then(() => {
//     console.log("🌾 Product seeding complete.");
//     process.exit(0);
//   })
//   .catch((err) => {
//     console.error("❌ Error seeding products:", err);
//     process.exit(1);
//   });
var kenyaLocations = [
    "Nairobi",
    "Mombasa",
    "Kisumu",
    "Nakuru",
    "Eldoret",
    "Thika",
    "Naivasha",
    "Kitale",
    "Garissa",
    "Meru",
    "Embu",
    "Nyeri",
    "Kericho",
    "Bungoma",
    "Kakamega",
    "Machakos",
    "Narok",
    "Isiolo",
    "Lamu",
    "Voi"
];
var agriProductCategories = [
    "Cereals", // e.g. maize, rice, wheat
    "Fruits", // e.g. mangoes, oranges, bananas
    "Vegetables", // e.g. spinach, kale, tomatoes
    "Legumes", // e.g. beans, lentils, peas
    "Tubers", // e.g. potatoes, sweet potatoes, cassava
    "Herbs", // e.g. basil, coriander, mint
    "Spices", // e.g. chili, ginger, turmeric
    "Nuts & Seeds", // e.g. groundnuts, sesame, sunflower seeds
    "Dairy Products", // e.g. milk, yogurt, cheese
    "Livestock", // e.g. goats, cows, chickens
    "Poultry Products", // e.g. eggs, chicken meat
    "Aquaculture", // e.g. fish, prawns
    "Honey & Bee Products", // e.g. honey, beeswax
    "Flowers & Ornamentals", // e.g. roses, potted plants
    "Animal Feed", // e.g. hay, silage, commercial feed
    "Agrochemicals", // e.g. fertilizers, pesticides
    "Farming Tools & Equipment", // e.g. hoes, irrigation kits
    "Processed Foods", // e.g. flour, dried fruits
    "Beverage Crops", // e.g. tea, coffee
    "Fiber Crops" // e.g. cotton, sisal
];
var ProductType;
(function (ProductType) {
    ProductType["CEREAL"] = "CEREAL";
    ProductType["FRUIT"] = "FRUIT";
    ProductType["VEGETABLE"] = "VEGETABLE";
    ProductType["LEGUME"] = "LEGUME";
    ProductType["TUBER"] = "TUBER";
    ProductType["HERB"] = "HERB";
    ProductType["SPICE"] = "SPICE";
    ProductType["NUT_AND_SEED"] = "NUT_AND_SEED";
    ProductType["DAIRY"] = "DAIRY";
    ProductType["LIVESTOCK"] = "LIVESTOCK";
    ProductType["POULTRY"] = "POULTRY";
    ProductType["AQUACULTURE"] = "AQUACULTURE";
    ProductType["HONEY_AND_BEE"] = "HONEY_AND_BEE";
    ProductType["FLOWER_AND_ORNAMENTAL"] = "FLOWER_AND_ORNAMENTAL";
    ProductType["ANIMAL_FEED"] = "ANIMAL_FEED";
    ProductType["AGROCHEMICAL"] = "AGROCHEMICAL";
    ProductType["FARM_TOOL_EQUIPMENT"] = "FARM_TOOL_EQUIPMENT";
    ProductType["PROCESSED_FOOD"] = "PROCESSED_FOOD";
    ProductType["BEVERAGE_CROP"] = "BEVERAGE_CROP";
    ProductType["FIBER_CROP"] = "FIBER_CROP";
    ProductType["OTHER"] = "OTHER";
})(ProductType || (exports.ProductType = ProductType = {}));
function mapCategoryToProductType(category) {
    switch (category.trim().toLowerCase()) {
        case "cereals":
            return ProductType.CEREAL;
        case "fruits":
            return ProductType.FRUIT;
        case "vegetables":
            return ProductType.VEGETABLE;
        case "legumes":
            return ProductType.LEGUME;
        case "tubers":
            return ProductType.TUBER;
        case "herbs":
            return ProductType.HERB;
        case "spices":
            return ProductType.SPICE;
        case "nuts & seeds":
        case "nuts and seeds":
            return ProductType.NUT_AND_SEED;
        case "dairy products":
            return ProductType.DAIRY;
        case "livestock":
            return ProductType.LIVESTOCK;
        case "poultry products":
            return ProductType.POULTRY;
        case "aquaculture":
            return ProductType.AQUACULTURE;
        case "honey & bee products":
        case "honey and bee products":
            return ProductType.HONEY_AND_BEE;
        case "flowers & ornamentals":
        case "flowers and ornamentals":
            return ProductType.FLOWER_AND_ORNAMENTAL;
        case "animal feed":
            return ProductType.ANIMAL_FEED;
        case "agrochemicals":
            return ProductType.AGROCHEMICAL;
        case "farming tools & equipment":
        case "farming tools and equipment":
            return ProductType.FARM_TOOL_EQUIPMENT;
        case "processed foods":
            return ProductType.PROCESSED_FOOD;
        case "beverage crops":
            return ProductType.BEVERAGE_CROP;
        case "fiber crops":
            return ProductType.FIBER_CROP;
        default:
            return ProductType.OTHER;
    }
}
var agriProductsByCategory = {
    "Cereals": [
        "Maize",
        "Rice",
        "Wheat",
        "Sorghum",
        "Millet",
        "Barley"
    ],
    "Fruits": [
        "Mangoes",
        "Bananas",
        "Oranges",
        "Pineapples",
        "Avocados",
        "Pawpaws",
        "Passion Fruits",
        "Apples",
        "Watermelons"
    ],
    "Vegetables": [
        "Kale (Sukuma Wiki)",
        "Spinach",
        "Cabbage",
        "Tomatoes",
        "Onions",
        "Carrots",
        "Green Beans",
        "Bell Peppers",
        "Cucumbers",
        "Eggplants"
    ],
    "Legumes": [
        "Green Grams (Ndengu)",
        "Beans",
        "Lentils",
        "Pigeon Peas",
        "Peas"
    ],
    "Tubers": [
        "Irish Potatoes",
        "Sweet Potatoes",
        "Cassava",
        "Yams",
        "Arrowroots"
    ],
    "Herbs": [
        "Coriander (Dhania)",
        "Mint",
        "Rosemary",
        "Lemongrass",
        "Sage"
    ],
    "Spices": [
        "Ginger",
        "Garlic",
        "Chili Peppers",
        "Turmeric",
        "Cumin"
    ],
    "Nuts & Seeds": [
        "Groundnuts",
        "Sunflower Seeds",
        "Pumpkin Seeds",
        "Sesame Seeds",
        "SimSim"
    ],
    "Dairy Products": [
        "Fresh Milk",
        "Yogurt",
        "Cheese",
        "Ghee",
        "Butter",
        "Mala (Fermented Milk)"
    ],
    "Livestock": [
        "Cattle",
        "Goats",
        "Sheep",
        "Pigs",
        "Donkeys"
    ],
    "Poultry Products": [
        "Chicken (Broiler)",
        "Chicken (Indigenous)",
        "Eggs",
        "Ducks",
        "Turkeys"
    ],
    "Aquaculture": [
        "Tilapia",
        "Catfish",
        "Mudfish",
        "Fish Fingerlings"
    ],
    "Honey & Bee Products": [
        "Raw Honey",
        "Beeswax",
        "Propolis",
        "Bee Pollen"
    ],
    "Flowers & Ornamentals": [
        "Roses",
        "Carnations",
        "Sunflowers",
        "Potted Plants",
        "Orchids"
    ],
    "Animal Feed": [
        "Hay",
        "Silage",
        "Dairy Meal",
        "Poultry Mash",
        "Bran",
        "Mineral Blocks"
    ],
    "Agrochemicals": [
        "Fertilizer (DAP, CAN, NPK)",
        "Pesticides",
        "Herbicides",
        "Insecticides",
        "Fungicides"
    ],
    "Farming Tools & Equipment": [
        "Hoes",
        "Jembes",
        "Sprayers",
        "Watering Cans",
        "Irrigation Kits",
        "Sickles",
        "Wheelbarrows"
    ],
    "Processed Foods": [
        "Maize Flour",
        "Wheat Flour",
        "Dried Fruits",
        "Tomato Paste",
        "Fruit Juices",
        "Groundnut Paste"
    ],
    "Beverage Crops": [
        "Tea Leaves",
        "Coffee Beans"
    ],
    "Fiber Crops": [
        "Cotton",
        "Sisal"
    ]
};
var productDescriptions = {
    // Cereals
    "Maize": "I bring my best harvest of maize—clean, dry, and perfect for your food or animal feed needs.",
    "Rice": "This rice is grown with care on my paddies—great for any household looking for quality staple food.",
    "Wheat": "I’ve milled this wheat from top-grade harvests. It’s ideal for making bread, chapati, and more.",
    "Sorghum": "Drought or shine, my sorghum thrives. Great for porridge, brewing, or feeding livestock.",
    "Millet": "This millet grows well in our dry climate. It's perfect for making traditional meals and flour.",
    "Barley": "Barley from my farm is clean and full—suitable for animal feed, soups, or brewing.",
    // Fruits
    "Mangoes": "Fresh from my orchard, these mangoes are juicy and sweet—perfect for eating or juicing.",
    "Bananas": "These bananas ripen naturally on the plant. Great for a snack, dessert, or smoothie.",
    "Oranges": "My oranges are juicy and full of flavor—great for fresh juice or enjoying as is.",
    "Pineapples": "These pineapples are grown in rich soil and sun—tangy-sweet and perfect for the table.",
    "Avocados": "I picked these avocados at peak ripeness. They're creamy and rich—great for salads or spreading.",
    "Pawpaws": "Pawpaws from my farm are sweet and full of health benefits—perfect after meals.",
    "Passion Fruits": "These passion fruits are aromatic and tangy—ideal for juices and desserts.",
    "Apples": "Crisp and fresh apples straight from my trees. Good for snacking or baking.",
    "Watermelons": "My watermelons are juicy and refreshing, great for sunny days and family gatherings.",
    // Vegetables
    "Kale (Sukuma Wiki)": "I harvest sukuma wiki fresh daily—nutritious and ideal for everyday meals.",
    "Spinach": "This spinach is tender and iron-rich, perfect for a healthy dish.",
    "Cabbage": "My cabbages are firm and heavy—great for salads, cooking, or storing.",
    "Tomatoes": "Ripe and juicy, my tomatoes are perfect for sauces, salads, and stews.",
    "Onions": "These onions are firm and flavorful—essential for any kitchen.",
    "Carrots": "Crunchy and sweet, my carrots are perfect raw or cooked.",
    "Green Beans": "Fresh and tender, my green beans are ready to cook or eat as they are.",
    "Bell Peppers": "Colorful and sweet, these bell peppers are great for cooking or fresh dishes.",
    "Cucumbers": "My cucumbers are crisp and refreshing—great for salads or pickles.",
    "Eggplants": "These eggplants are glossy and firm—ideal for stews, frying, or grilling.",
    // Legumes
    "Green Grams (Ndengu)": "I grow ndengu naturally—rich in protein and great in stews.",
    "Beans": "My beans are clean and sorted—perfect for hearty meals and soups.",
    "Lentils": "Quick to cook and rich in nutrients—my lentils are a household favorite.",
    "Pigeon Peas": "Pigeon peas from my farm cook fast and taste great in any dish.",
    "Peas": "Fresh peas from my field are sweet and ready to eat or cook.",
    // Tubers
    "Irish Potatoes": "These Irish potatoes are large and firm—great for fries, mash, or stews.",
    "Sweet Potatoes": "Naturally sweet and nutritious, my sweet potatoes roast beautifully.",
    "Cassava": "This cassava is firm and starchy—good for boiling, frying, or milling.",
    "Yams": "Big and starchy, my yams are great boiled or roasted.",
    "Arrowroots": "Easy to digest and delicious, these arrowroots are ideal for breakfast.",
    // Herbs
    "Coriander (Dhania)": "Fresh dhania with strong aroma—perfect for finishing your dishes.",
    "Mint": "Fragrant and refreshing, my mint is great in teas and salads.",
    "Rosemary": "This rosemary adds deep flavor to meats and stews.",
    "Lemongrass": "My lemongrass brings a citrusy aroma to teas and soups.",
    "Sage": "Add a savory touch to your meals with my homegrown sage.",
    // Spices and Roots
    "Ginger": "This ginger is fresh and spicy—great for cooking and health remedies.",
    "Garlic": "My garlic is potent and flavorful, straight from the farm.",
    "Chili Peppers": "Spicy and colorful—these chilies add heat to your dishes.",
    "Turmeric": "Bright yellow and healthy, this turmeric is great for spice blends.",
    "Cumin": "Earthy and aromatic—perfect for stews and spice mixes.",
    // Oilseeds and Nuts
    "Groundnuts": "Roasted or raw, my groundnuts are fresh and full of flavor.",
    "Sunflower Seeds": "These seeds are ready for snacks or pressing into oil.",
    "Pumpkin Seeds": "Healthy and crunchy, great for roasting or adding to meals.",
    "Sesame Seeds": "My sesame seeds are tiny but powerful—good for oil or toppings.",
    "SimSim": "Locally grown SimSim, perfect for making paste or extracting oil.",
    // Dairy
    "Fresh Milk": "Milked fresh every morning—clean and rich in nutrients.",
    "Yogurt": "My homemade yogurt is thick and natural with no additives.",
    "Cheese": "Locally made cheese with a distinct, rich taste.",
    "Ghee": "I make ghee from pure milk fat—excellent for cooking.",
    "Butter": "Churned from fresh cream, this butter is rich and smooth.",
    "Mala (Fermented Milk)": "My mala is tangy and fresh—good for drinking or cooking.",
    // Livestock
    "Cattle": "Strong, healthy cattle raised on natural fodder and care.",
    "Goats": "Hardy goats that provide good milk, meat, and breed well.",
    "Sheep": "Woolly and meaty sheep—ideal for farming or resale.",
    "Pigs": "My pigs are well-fed and clean, ready for pork lovers.",
    "Donkeys": "Strong donkeys, useful for transport and light farm work.",
    // Poultry
    "Chicken (Broiler)": "Fast-growing broilers, ready for meat within weeks.",
    "Chicken (Indigenous)": "Hardy local chicken—ideal for both eggs and meat.",
    "Eggs": "Farm-fresh eggs collected daily from healthy hens.",
    "Ducks": "My ducks are clean and good for meat or egg production.",
    "Turkeys": "Large, meaty turkeys perfect for holidays or resale.",
    // Fish
    "Tilapia": "Freshwater tilapia from my fish pond—mild and delicious.",
    "Catfish": "These catfish are clean and meaty—great for grilling.",
    "Mudfish": "Tasty mudfish raised in clean water systems.",
    "Fish Fingerlings": "Healthy fingerlings ready to stock your fishpond.",
    // Beekeeping Products
    "Raw Honey": "Pure raw honey straight from my hives—nothing added.",
    "Beeswax": "Natural beeswax great for making candles and skin products.",
    "Propolis": "Collected propolis, valued for its health benefits.",
    "Bee Pollen": "Nutritious bee pollen packed by nature—great as a supplement.",
    // Flowers and Plants
    "Roses": "My roses bloom big and smell sweet—perfect for any bouquet.",
    "Carnations": "Colorful carnations with long vase life for floral arrangements.",
    "Sunflowers": "Bright sunflowers that bring cheer and yield edible seeds.",
    "Potted Plants": "Healthy potted plants ready for home or office decor.",
    "Orchids": "Exotic orchids grown with care—rare and beautiful.",
    // Animal Feed
    "Hay": "Clean, sun-dried hay great for feeding livestock.",
    "Silage": "Nutritious silage prepared for year-round animal feeding.",
    "Dairy Meal": "Balanced dairy meal to boost milk production in cows.",
    "Poultry Mash": "Mixed grains to keep poultry healthy and productive.",
    "Bran": "Wheat bran that’s good for mixing in animal feeds.",
    "Mineral Blocks": "Lickable mineral blocks to keep livestock strong.",
    // Farm Inputs
    "Fertilizer (DAP, CAN, NPK)": "Quality fertilizers to boost your crop yields.",
    "Pesticides": "Effective pesticides to protect your crops from pests.",
    "Herbicides": "My herbicides help clear weeds and save labor.",
    "Insecticides": "Use my insecticides to control harmful bugs.",
    "Fungicides": "Fight plant diseases with these reliable fungicides.",
    // Farm Tools
    "Hoes": "Strong hoes that make digging and weeding easier.",
    "Jembes": "Locally-made jembes, perfect for tough soil.",
    "Sprayers": "Reliable sprayers to apply chemicals efficiently.",
    "Watering Cans": "Durable watering cans for home or farm use.",
    "Irrigation Kits": "Irrigation kits to help water your crops efficiently.",
    "Sickles": "Sharp sickles for easy harvesting and grass cutting.",
    "Wheelbarrows": "Sturdy wheelbarrows to move produce and materials.",
    // Value-added Products
    "Maize Flour": "Fine maize flour, milled clean—great for ugali and porridge.",
    "Wheat Flour": "Soft wheat flour perfect for chapatis, cakes, and more.",
    "Dried Fruits": "Naturally dried fruits that last long and taste great.",
    "Tomato Paste": "Rich tomato paste made from my ripest tomatoes.",
    "Fruit Juices": "Freshly made fruit juices with no added sugar.",
    "Groundnut Paste": "Smooth groundnut paste made from roasted peanuts.",
    // Beverages
    "Tea Leaves": "Aromatic tea leaves handpicked from my bushes.",
    "Coffee Beans": "Rich coffee beans sun-dried and ready for roasting.",
    // Fiber Crops
    "Cotton": "Clean cotton bolls harvested and ready for processing.",
    "Sisal": "Strong sisal fibers ideal for ropes, mats, and crafts."
};
exports.productVarieties = {
    // Cereals
    Maize: ["Yellow", "White", "Sweet"],
    Rice: ["Basmati", "Jasmine", "Swarna"],
    Wheat: ["Hard Red", "Soft Red", "Durum"],
    Sorghum: ["Red", "White", "Brown"],
    Millet: ["Pearl", "Finger", "Foxtail"],
    Barley: ["Hulled", "Hull-less", "Malting"],
    // Fruits
    Mangoes: ["Apple", "Ngowe", "Kent", "Tommy Atkins"],
    Bananas: ["Cavendish", "Red", "Plantain", "Apple"],
    Oranges: ["Navel", "Valencia", "Blood Orange"],
    Pineapples: ["Queen", "Smooth Cayenne", "Red Spanish"],
    Avocados: ["Hass", "Fuerte", "Pinkerton"],
    Pawpaws: ["Solo", "Red Lady", "Waimanalo"],
    "Passion Fruits": ["Purple", "Yellow", "Sweet"],
    Apples: ["Gala", "Granny Smith", "Fuji", "Red Delicious"],
    Watermelons: ["Seeded", "Seedless", "Yellow Flesh"],
    // Vegetables
    "Kale (Sukuma Wiki)": ["Curly", "Lacinato", "Red Russian"],
    Spinach: ["Savoy", "Flat Leaf", "Semi-Savoy"],
    Cabbage: ["Green", "Red", "Savoy"],
    Tomatoes: ["Cherry", "Beefsteak", "Roma", "Heirloom"],
    Onions: ["Red", "White", "Yellow", "Shallots"],
    Carrots: ["Orange", "Purple", "White", "Yellow"],
    "Green Beans": ["French", "Snap", "Pole"],
    "Bell Peppers": ["Green", "Red", "Yellow", "Orange"],
    Cucumbers: ["Slicing", "Pickling", "English"],
    Eggplants: ["Globe", "Japanese", "Chinese"],
    // Legumes
    "Green Grams (Ndengu)": ["Regular", "Small Seed"],
    Beans: ["Red Kidney", "Black", "Pinto", "Navy"],
    Lentils: ["Red", "Green", "Brown"],
    "Pigeon Peas": ["Red", "Green"],
    Peas: ["Garden", "Snow", "Sugar Snap"],
    // Tubers
    "Irish Potatoes": ["Shangi", "Dutch", "Yellow"],
    "Sweet Potatoes": ["Orange", "Purple", "White"],
    Cassava: ["Sweet", "Bitter"],
    Yams: ["White", "Yellow", "Purple"],
    Arrowroots: ["Common", "Wild"],
    // Herbs
    "Coriander (Dhania)": ["Fresh", "Dried"],
    Mint: ["Spearmint", "Peppermint"],
    Rosemary: ["Upright", "Prostrate"],
    Lemongrass: ["East Indian", "West Indian"],
    Sage: ["Common", "Purple"],
    // Spices
    Ginger: ["Fresh", "Dried", "Powdered"],
    Garlic: ["Softneck", "Hardneck"],
    "Chili Peppers": ["Bird's Eye", "Habanero", "Jalapeno"],
    Turmeric: ["Fresh", "Powdered"],
    Cumin: ["Whole", "Ground"],
    // Nuts & Seeds
    Groundnuts: ["Raw", "Roasted", "Salted"],
    "Sunflower Seeds": ["Black Oil", "Striped"],
    "Pumpkin Seeds": ["Raw", "Roasted"],
    "Sesame Seeds": ["White", "Black", "Brown"],
    SimSim: ["Raw", "Roasted"],
    // Dairy Products
    "Fresh Milk": ["Full Cream", "Skimmed"],
    Yogurt: ["Plain", "Flavored", "Greek"],
    Cheese: ["Cheddar", "Mozzarella", "Feta"],
    Ghee: ["Clarified Butter"],
    Butter: ["Salted", "Unsalted"],
    "Mala (Fermented Milk)": ["Fresh", "Sour"],
    // Livestock
    Cattle: ["Dairy", "Beef"],
    Goats: ["Boer", "Indigenous", "Saanen"],
    Sheep: ["Dorper", "Merino", "Indigenous"],
    Pigs: ["Large White", "Berkshire", "Landrace"],
    Donkeys: ["Somali", "Burro"],
    // Poultry Products
    "Chicken (Broiler)": ["Standard", "Organic"],
    "Chicken (Indigenous)": ["Kienyeji", "Desi"],
    Eggs: ["Large", "Medium", "Small"],
    Ducks: ["Khaki Campbell", "Indian Runner"],
    Turkeys: ["Broad Breasted", "Heritage"],
    // Aquaculture
    Tilapia: ["Nile", "Blue"],
    Catfish: ["African", "Channel"],
    Mudfish: ["Common", "Giant"],
    "Fish Fingerlings": ["Tilapia", "Catfish"],
    // Honey & Bee Products
    "Raw Honey": ["Wildflower", "Acacia", "Eucalyptus"],
    Beeswax: ["Yellow", "White"],
    Propolis: ["Raw", "Extracted"],
    "Bee Pollen": ["Fresh", "Dried"],
    // Flowers & Ornamentals
    Roses: ["Hybrid Tea", "Floribunda", "Climbing"],
    Carnations: ["Standard", "Spray"],
    Sunflowers: ["Giant", "Dwarf"],
    "Potted Plants": ["Succulents", "Ferns", "Orchids"],
    Orchids: ["Phalaenopsis", "Cattleya"],
    // Animal Feed
    Hay: ["Grass", "Alfalfa", "Mixed"],
    Silage: ["Maize", "Grass"],
    "Dairy Meal": ["Calcium Rich", "Protein Rich"],
    "Poultry Mash": ["Starter", "Grower", "Finisher"],
    Bran: ["Wheat", "Rice"],
    "Mineral Blocks": ["Salt", "Calcium"],
    // Agrochemicals
    "Fertilizer (DAP, CAN, NPK)": ["DAP", "CAN", "NPK"],
    Pesticides: ["Herbicide", "Insecticide", "Fungicide"],
    Herbicides: ["Selective", "Non-Selective"],
    Insecticides: ["Organic", "Chemical"],
    Fungicides: ["Protective", "Systemic"],
    // Farming Tools & Equipment
    Hoes: ["Hand Hoe", "Jembe"],
    Jembes: ["Small", "Large"],
    Sprayers: ["Knapsack", "Motorized"],
    "Watering Cans": ["Plastic", "Metal"],
    "Irrigation Kits": ["Drip", "Sprinkler"],
    Sickles: ["Curved", "Straight"],
    Wheelbarrows: ["Single Wheel", "Dual Wheel"],
    // Processed Foods
    "Maize Flour": ["White", "Yellow"],
    "Wheat Flour": ["Whole Wheat", "Refined"],
    "Dried Fruits": ["Mango", "Pineapple", "Banana"],
    "Tomato Paste": ["Regular", "Organic"],
    "Fruit Juices": ["Mango", "Passion", "Orange"],
    "Groundnut Paste": ["Smooth", "Crunchy"],
    // Beverage Crops
    "Tea Leaves": ["Black", "Green", "White"],
    "Coffee Beans": ["Arabica", "Robusta"],
    // Fiber Crops
    Cotton: ["Organic", "Conventional"],
    Sisal: ["Green", "Dry"]
};
function getUploadPath(name, number) {
    var safeName = name.trim().replace(/\s+/g, "_"); // Replace spaces with underscores
    return "/uploads/".concat(safeName).concat(number, ".jpg");
}
function getQuantity() {
    return Math.floor(Math.random() * (1000 - 100 + 1)) + 100;
}
function getDiscount() {
    return Math.floor(Math.random() * (50 - 5 + 1)) + 100;
}
function getSupplierThreshold() {
    return Math.floor(Math.random() * (50 - 5 + 1)) + 100;
}
function getRandomDateWithinNext6Months() {
    var now = new Date();
    var sixMonthsFromNow = new Date();
    sixMonthsFromNow.setMonth(now.getMonth() + 6);
    // Get timestamps (milliseconds since epoch)
    var nowMs = now.getTime();
    var sixMonthsMs = sixMonthsFromNow.getTime();
    // Generate a random timestamp between now and six months from now
    var randomTimestamp = nowMs + Math.random() * (sixMonthsMs - nowMs);
    return new Date(randomTimestamp);
}
var Unit;
(function (Unit) {
    Unit["KG"] = "KG";
    Unit["LITERS"] = "LITERS";
    Unit["BAGS"] = "BAGS";
    Unit["CRATES"] = "CRATES";
    Unit["BUNCHES"] = "BUNCHES";
    Unit["PIECES"] = "PIECES";
    Unit["ANIMALS"] = "ANIMALS";
    Unit["PACKETS"] = "PACKETS";
    Unit["TOOLS"] = "TOOLS";
    Unit["OTHER"] = "OTHER";
})(Unit || (exports.Unit = Unit = {}));
exports.categoryToUnitMap = {
    "Cereals": Unit.BAGS,
    "Fruits": Unit.CRATES,
    "Vegetables": Unit.BUNCHES,
    "Legumes": Unit.BAGS,
    "Tubers": Unit.BAGS,
    "Herbs": Unit.BUNCHES,
    "Spices": Unit.KG,
    "Nuts & Seeds": Unit.KG,
    "Dairy Products": Unit.LITERS,
    "Livestock": Unit.ANIMALS,
    "Poultry Products": Unit.PIECES,
    "Aquaculture": Unit.KG,
    "Honey & Bee Products": Unit.LITERS,
    "Flowers & Ornamentals": Unit.BUNCHES,
    "Animal Feed": Unit.BAGS,
    "Agrochemicals": Unit.LITERS,
    "Farming Tools & Equipment": Unit.TOOLS,
    "Processed Foods": Unit.PACKETS,
    "Beverage Crops": Unit.KG,
    "Fiber Crops": Unit.BAGS
};
var ProductStatus;
(function (ProductStatus) {
    ProductStatus["AVAILABLE"] = "AVAILABLE";
    ProductStatus["SOLD"] = "SOLD";
    ProductStatus["PENDING"] = "PENDING";
    ProductStatus["EXPIRED"] = "EXPIRED";
    ProductStatus["RESERVED"] = "RESERVED";
})(ProductStatus || (exports.ProductStatus = ProductStatus = {}));
exports.productPrices = {
    // Cereals
    "Maize": { unit: Unit.BAGS, minPrice: 2800, maxPrice: 3300 },
    "Rice": { unit: Unit.BAGS, minPrice: 4000, maxPrice: 5000 },
    "Wheat": { unit: Unit.BAGS, minPrice: 3700, maxPrice: 4200 },
    // Fruits
    "Mangoes": { unit: Unit.CRATES, minPrice: 1000, maxPrice: 1300 },
    "Oranges": { unit: Unit.CRATES, minPrice: 900, maxPrice: 1100 },
    "Bananas": { unit: Unit.CRATES, minPrice: 800, maxPrice: 1000 },
    "Pineapples": { unit: Unit.CRATES, minPrice: 1300, maxPrice: 1600 },
    "Avocados": { unit: Unit.CRATES, minPrice: 1000, maxPrice: 1200 },
    // Vegetables
    "Kale": { unit: Unit.BUNCHES, minPrice: 40, maxPrice: 60 },
    "Spinach": { unit: Unit.BUNCHES, minPrice: 40, maxPrice: 60 },
    "Cabbage": { unit: Unit.BUNCHES, minPrice: 50, maxPrice: 70 },
    "Tomatoes": { unit: Unit.BUNCHES, minPrice: 80, maxPrice: 100 },
    "Onions": { unit: Unit.BUNCHES, minPrice: 90, maxPrice: 120 },
    // Legumes
    "Beans": { unit: Unit.BAGS, minPrice: 5800, maxPrice: 6200 },
    "Lentils": { unit: Unit.BAGS, minPrice: 6800, maxPrice: 7200 },
    "Green grams": { unit: Unit.BAGS, minPrice: 6300, maxPrice: 6700 },
    // Tubers
    "Irish Potatoes": { unit: Unit.BAGS, minPrice: 2300, maxPrice: 2700 },
    "Sweet Potatoes": { unit: Unit.BAGS, minPrice: 2000, maxPrice: 2400 },
    "Cassava": { unit: Unit.BAGS, minPrice: 1800, maxPrice: 2200 },
    // Herbs
    "Coriander": { unit: Unit.BUNCHES, minPrice: 30, maxPrice: 50 },
    "Mint": { unit: Unit.BUNCHES, minPrice: 40, maxPrice: 60 },
    "Basil": { unit: Unit.BUNCHES, minPrice: 50, maxPrice: 70 },
    // Spices
    "Chili": { unit: Unit.KG, minPrice: 130, maxPrice: 170 },
    "Ginger": { unit: Unit.KG, minPrice: 160, maxPrice: 200 },
    "Turmeric": { unit: Unit.KG, minPrice: 180, maxPrice: 220 },
    // Nuts & Seeds
    "Groundnuts": { unit: Unit.KG, minPrice: 150, maxPrice: 190 },
    "Sesame": { unit: Unit.KG, minPrice: 230, maxPrice: 270 },
    "Sunflower seeds": { unit: Unit.KG, minPrice: 180, maxPrice: 220 },
    // Dairy Products
    "Milk": { unit: Unit.LITERS, minPrice: 45, maxPrice: 55 },
    "Yogurt": { unit: Unit.LITERS, minPrice: 90, maxPrice: 110 },
    "Cheese": { unit: Unit.LITERS, minPrice: 850, maxPrice: 950 },
    // Livestock
    "Cow": { unit: Unit.ANIMALS, minPrice: 45000, maxPrice: 55000 },
    "Goat": { unit: Unit.ANIMALS, minPrice: 7000, maxPrice: 9000 },
    "Sheep": { unit: Unit.ANIMALS, minPrice: 6000, maxPrice: 8000 },
    // Poultry Products
    "Eggs": { unit: Unit.PIECES, minPrice: 12, maxPrice: 18 },
    "Chicken Meat": { unit: Unit.PIECES, minPrice: 550, maxPrice: 650 },
    // Aquaculture
    "Tilapia": { unit: Unit.KG, minPrice: 300, maxPrice: 400 },
    "Catfish": { unit: Unit.KG, minPrice: 350, maxPrice: 450 },
    // Honey & Bee Products
    "Honey": { unit: Unit.LITERS, minPrice: 750, maxPrice: 850 },
    "Beeswax": { unit: Unit.LITERS, minPrice: 550, maxPrice: 650 },
    // Flowers & Ornamentals
    "Roses": { unit: Unit.BUNCHES, minPrice: 120, maxPrice: 180 },
    "Potted Plants": { unit: Unit.BUNCHES, minPrice: 250, maxPrice: 350 },
    // Animal Feed
    "Hay": { unit: Unit.BAGS, minPrice: 700, maxPrice: 900 },
    "Silage": { unit: Unit.BAGS, minPrice: 900, maxPrice: 1100 },
    "Commercial Feed": { unit: Unit.BAGS, minPrice: 2300, maxPrice: 2700 },
    // Agrochemicals
    "Fertilizer": { unit: Unit.LITERS, minPrice: 1400, maxPrice: 1600 },
    "Pesticides": { unit: Unit.LITERS, minPrice: 1100, maxPrice: 1300 },
    // Farming Tools & Equipment
    "Hoe": { unit: Unit.TOOLS, minPrice: 400, maxPrice: 600 },
    "Watering Can": { unit: Unit.TOOLS, minPrice: 900, maxPrice: 1100 },
    "Drip Kit": { unit: Unit.TOOLS, minPrice: 3200, maxPrice: 3800 },
    // Processed Foods
    "Maize Flour": { unit: Unit.PACKETS, minPrice: 160, maxPrice: 200 },
    "Dried Mango": { unit: Unit.PACKETS, minPrice: 220, maxPrice: 280 },
    // Beverage Crops
    "Tea": { unit: Unit.KG, minPrice: 320, maxPrice: 380 },
    "Coffee": { unit: Unit.KG, minPrice: 450, maxPrice: 550 },
    // Fiber Crops
    "Cotton": { unit: Unit.BAGS, minPrice: 3700, maxPrice: 4300 },
    "Sisal": { unit: Unit.BAGS, minPrice: 2700, maxPrice: 3300 }
};
function addProducts() {
    return __awaiter(this, void 0, void 0, function () {
        var farmerIds, allfarmers, _i, allfarmers_1, single, generatedProducts, _a, _b, category, productType, products, _c, products_1, product, varieties, i, variety, fullName, _d, unit, minPrice, maxPrice, price, quantity, discount, supplierthreshold, perishdate, location_1, description, imageUrl, farmerid, generated, _e, generatedProducts_1, product;
        return __generator(this, function (_f) {
            switch (_f.label) {
                case 0:
                    farmerIds = [];
                    return [4 /*yield*/, prisma.farmer.findMany()];
                case 1:
                    allfarmers = _f.sent();
                    if (!allfarmers) {
                        console.log("Products not created");
                        return [2 /*return*/];
                    }
                    else {
                        for (_i = 0, allfarmers_1 = allfarmers; _i < allfarmers_1.length; _i++) {
                            single = allfarmers_1[_i];
                            farmerIds.push(single.id);
                        }
                    }
                    generatedProducts = [];
                    for (_a = 0, _b = Object.keys(agriProductsByCategory); _a < _b.length; _a++) {
                        category = _b[_a];
                        productType = mapCategoryToProductType(category);
                        products = agriProductsByCategory[category];
                        for (_c = 0, products_1 = products; _c < products_1.length; _c++) {
                            product = products_1[_c];
                            varieties = exports.productVarieties[product] || ["Standard"];
                            for (i = 0; i < varieties.length; i++) {
                                variety = varieties[i];
                                fullName = "".concat(product, " - ").concat(variety);
                                _d = exports.productPrices[product] || {
                                    unit: exports.categoryToUnitMap[category] || Unit.KG,
                                    minPrice: 100,
                                    maxPrice: 500,
                                }, unit = _d.unit, minPrice = _d.minPrice, maxPrice = _d.maxPrice;
                                price = Math.floor(Math.random() * (maxPrice - minPrice + 1)) + minPrice;
                                quantity = getQuantity();
                                discount = getDiscount();
                                supplierthreshold = getSupplierThreshold();
                                perishdate = getRandomDateWithinNext6Months().toISOString();
                                location_1 = kenyaLocations[Math.floor(Math.random() * kenyaLocations.length)];
                                description = "[DEMO] ".concat(productDescriptions[product] || "High quality ".concat(product, " (").concat(variety, ") fresh from my farm."));
                                imageUrl = getUploadPath(product, i + 1);
                                farmerid = farmerIds[Math.floor(Math.random() * farmerIds.length)];
                                generated = {
                                    name: product,
                                    type: productType,
                                    unit: unit,
                                    priceperunit: price,
                                    quantity: quantity,
                                    variety: variety,
                                    perishdate: perishdate,
                                    location: location_1,
                                    status: ProductStatus.AVAILABLE,
                                    description: description,
                                    images: [imageUrl],
                                    farmerid: farmerid,
                                    discount: discount,
                                    supplierthreshold: supplierthreshold,
                                };
                                generatedProducts.push(generated);
                            }
                        }
                    }
                    _e = 0, generatedProducts_1 = generatedProducts;
                    _f.label = 2;
                case 2:
                    if (!(_e < generatedProducts_1.length)) return [3 /*break*/, 5];
                    product = generatedProducts_1[_e];
                    return [4 /*yield*/, prisma.product.create({
                            data: product,
                        })];
                case 3:
                    _f.sent();
                    _f.label = 4;
                case 4:
                    _e++;
                    return [3 /*break*/, 2];
                case 5:
                    console.log("Inserted ".concat(generatedProducts.length, " products."));
                    return [2 /*return*/];
            }
        });
    });
}
function removeProducts() {
    return __awaiter(this, void 0, void 0, function () {
        var deleted, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, prisma.product.deleteMany({
                            where: {
                                description: {
                                    contains: "[DEMO]",
                                },
                            },
                        })];
                case 1:
                    deleted = _a.sent();
                    console.log("Deleted ".concat(deleted.count, " demo products."));
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    console.error("Error deleting products:", error_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
