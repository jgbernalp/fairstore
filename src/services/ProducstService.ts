import { Product } from '../models/Product';

export const products: ReadonlyArray<Product> = [
  {
    name: 'Avocado',
    image: 'https://img.etimg.com/thumb/msid-69268059,width-643,imgsize-164253,resizemode-4/avocados.jpg',
    price: 100,
    farmer: {
      name: 'Pedro',
      avatar:
        'https://media.istockphoto.com/photos/senior-farmercountryside-man-picture-id955895084?k=6&m=955895084&s=612x612&w=0&h=BZoADpECS7G8Xg-TGCYhvX2gDULjF-tHmAK4_eMWlOY=',
    },
  },
  {
    name: 'Coffee',
    image:
      'https://athome.starbucks.com/sites/site.prod.athome.starbucks.com/files/2019-06/CoffeeFinder_ArticleHeader_Desktop_1176x712.jpg',
    price: 200,
    farmer: {
      name: 'Maria',
      avatar:
        'http://images.telemetro.com/internacionales/Campesina-Puerto-Rico-Nobel-FotoAFP_MEDIMA20160418_0264_31.jpg',
    },
  },
  {
    name: 'Garlic',
    image: 'https://cdn.editorchoice.com/wp-content/uploads/2019/07/garlic.jpg',
    price: 140,
    farmer: {
      name: 'Pablo',
      avatar:
        'https://media.istockphoto.com/videos/portrait-of-young-farmer-in-hat-standing-at-field-of-organic-farm-and-video-id814387148?s=640x640',
    },
  },
  {
    name: 'Strawberries',
    image: 'https://cdn.theatlantic.com/assets/media/img/mt/2019/08/RTR4FJJS/lead_720_405.jpg?mod=1567003290',
    price: 42,
    farmer: {
      name: 'Hannah',
      avatar:
        'https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/06/22/11/strawberry-farm-worker.jpg?w968h681',
    },
  },
  {
    name: 'Grapes',
    image: 'https://cdn.shopify.com/s/files/1/1359/5939/products/10_24_2011_6_1400x.jpg?v=1529969229',
    price: 52,
    farmer: {
      name: 'Marco',
      avatar:
        'https://previews.123rf.com/images/carballo/carballo1610/carballo161000120/63546971-farmer-harvesting-the-grapes-in-the-vineyard.jpg',
    },
  },
  {
    name: 'Bread',
    image:
      'https://www.thespruceeats.com/thmb/2blr6l0u64ETt4Fpdi-lfGnXL8w=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-155279113-582681813df78c6f6a39e2c6.jpg',
    price: 12,
    farmer: {
      name: 'Karl',
      avatar: 'http://www.cusanos.com/wp-content/uploads/2016/06/bakers.jpg',
    },
  },
  {
    name: 'Cheese',
    image:
      'https://www.vegetariantimes.com/.image/t_share/MTQ2ODI5MzI5MzA5NzcxNzM2/how-to-buy-veg-friendly-cheesejpg.jpg',
    price: 40,
    farmer: {
      name: 'Martha',
      avatar:
        'https://bloximages.chicago2.vip.townnews.com/poststar.com/content/tncms/assets/v3/editorial/a/d1/ad178123-1316-5197-b425-1c7a7faa2483/589fd680488c9.image.jpg',
    },
  },
  {
    name: 'Hess Avocado',
    image:
      'https://i0.wp.com/www.ediblebackyard.co.nz/wp-content/uploads/2017/11/avocados-2.jpg?resize=699%2C427',
    price: 80,
    farmer: {
      name: 'Maina',
      avatar:
        'https://mobile.nation.co.ke/image/view/-/2261580/medRes/717020/-/7xsj2c/-/GOLD+AVOCADO+2603+II.JPG.jpg',
    },
  },
  {
    name: 'Cocoa',
    image:
      'https://cdn11.bigcommerce.com/s-ham8sjk/images/stencil/1280x1280/products/276/836/Cacao_Chocolate_Chocolate_Liquor__1551729718_104.172.159.225__96045.1551729753.jpg?c=2&imbypass=on',
    price: 80,
    farmer: {
      name: 'Moussa',
      avatar:
        'https://www.fairtrade.org.uk/~/media/FairtradeUK/Media%20Centre/Images/press%20releases/14866.jpg?la=en&mw=1200',
    },
  },
  {
    name: 'Mango',
    image:
      'https://cdn-a.william-reed.com/var/wrbm_gb_food_pharma/storage/images/6/1/6/1/7231616-1-eng-GB/Senegal-is-ready-to-supply-US-mangoes_wrbm_large.jpg',
    price: 30,
    farmer: {
      name: 'Larry',
      avatar:
        'https://cdn.newsapi.com.au/image/v1/b2061724827fe49c6521fea950b514cd?width=1024',
    },
  },
  {
    name: 'Peach',
    image:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/fresh-organic-peaches-in-wooden-crate-viewed-from-royalty-free-image-584718022-1558541036.jpg?crop=0.667xw:1.00xh;0.333xw,0&resize=640:*',
    price: 20,
    farmer: {
      name: 'Joao',
      avatar:
        'http://farmflavor.com/wp-content/uploads/2013/01/1540712jso6331.jpg',
    },
  },
  {
    name: 'Date',
    image:
      'https://cdn2.stylecraze.com/wp-content/uploads/2014/08/8_Serious_Side_Effects_Of_Dates.jpg',
    price: 10,
    farmer: {
      name: 'Wadi',
      avatar:
        'https://c8.alamy.com/comp/C1HA1E/egypt-desert-of-sina-oasis-of-wadi-feiran-farmer-bedouin-and-date-C1HA1E.jpg',
    },
  },
  {
    name: 'Ginger',
    image:
      'http://www.ecorazzi.com/wp-content/uploads/2013/06/ginger.jpg',
    price: 13,
    farmer: {
      name: 'Santu',
      avatar:
        'https://www.mercycorps.org/sites/default/files/styles/slideshow/public/nepal-201406-msamper-0626.JPG',
    },
  },
];

export const latestProducts: ReadonlyArray<Product> = products
  .concat([])
  .sort(() => Math.random() - 0.5)
  .slice(0, 5);
