const SHOP_DATA = [
  {
    title: 'Retro Systems',
    items: [
      {
        id: 1,
        name: 'Nintendo 64',
        imageUrl: 'https://i.ebayimg.com/images/g/L5IAAOSwCpxi5rds/s-l1600.jpg',
        price: 150,
      },
      {
        id: 2,
        name: 'NES',
        imageUrl: 'https://i.etsystatic.com/26342898/r/il/5ca37e/3308724983/il_fullxfull.3308724983_67px.jpg',
        price: 160,
      },
      {
        id: 3,
        name: 'Nintendo Gameboy SP',
        imageUrl: 'https://retrovgames.com/wp-content/uploads/2021/08/1_708da3e0-a541-40f8-8d4c-b4fcc3fe5b9b.webp',
        price: 100,
      },
      {
        id: 4,
        name: 'Sega Genesis',
        imageUrl: 'https://m.media-amazon.com/images/I/71mLO86PYTL.jpg',
        price: 225,
      },
      {
        id: 5,
        name: 'Sega Dreamcast',
        imageUrl: 'https://www.lukiegames.com/assets/images/dc/sys/dc_system_orig.jpg',
        price: 228,
      },
      {
        id: 6,
        name: 'Sony PlayStation',
        imageUrl: 'https://www.thoughtco.com/thmb/DDOczh9erggMUiJLh56AJw1jbTM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/OriginalSonyPlayStation-5c2d3715c9e77c000192d75e.jpg',
        price: 214,
      },
      {
        id: 7,
        name: 'Sony PlayStation 2',
        imageUrl: 'https://cdn.vox-cdn.com/thumbor/Uxtae1g5DFVl2ncCJPv7DhJK_jc=/0x0:841x880/1400x1400/filters:focal(420x440:421x441)/cdn.vox-cdn.com/uploads/chorus_asset/file/13904280/http___upload.wikimedia.org_wikipedia_commons_1_11_PS2-Slim-Console-Set.png.1419964510.jpg',
        price: 218,
      },
      {
        id: 8,
        name: 'Microsoft Xbox',
        imageUrl: 'https://m.media-amazon.com/images/I/51tGzWQ46bL._AC_UF1000,1000_QL80_.jpg',
        price: 199,
      },
  
    ],
  },
  {
    title: 'Retro Games',
    items: [
      {
        id: 10,
        name: 'HALO- XBOX',
        imageUrl: 'https://cdn11.bigcommerce.com/s-ymgqt/images/stencil/640w/products/21086/56898/halo-----------------1__00201.1687874519.jpg',
        price: 20,
      },
      {
        id: 11,
        name: 'STAR WARS BATTLEFRONT II - XBOX',
        imageUrl: 'https://cdn11.bigcommerce.com/s-ymgqt/images/stencil/640w/products/28646/19810/Game-Xbox-starwars-2__93055.1688398125.jpg',
        price: 28,
      },
      {
        id: 12,
        name: 'NBA JAM TOURNAMENT EDITION - GENESIS GAME',
        imageUrl: 'https://cdn11.bigcommerce.com/s-ymgqt/images/stencil/1280x1280/products/23429/14712/Game%20Genesis-309-2__48673.1686852336.jpg',
        price: 19,
      },
      {
        id: 13,
        name: 'SONIC CLASSICS - GENESIS GAME',
        imageUrl: 'https://cdn11.bigcommerce.com/s-ymgqt/images/stencil/640w/products/23539/14812/Game%20Genesis-409-2__34658.1679414618.jpg',
        price: 26,
      },
      {
        id: 14,
        name: 'LEGEND OF ZELDA GOLD - NES GAME',
        imageUrl: 'https://cdn11.bigcommerce.com/s-ymgqt/images/stencil/1280x1280/products/24232/33278/zeldagold__37469.1689775904.jpg',
        price: 16,
      },
      {
        id: 15,
        name: 'SUPER MARIO BROS. 3 - NES GAME',
        imageUrl: 'https://cdn11.bigcommerce.com/s-ymgqt/images/stencil/1280x1280/products/24515/15940/Game%20Nintendo%20NES-458-3__08752.1690291365.jpg',
        price: 19,
      },
      {
        id: 16,
        name: 'FINAL FANTASY VII - PS1 GAME',
        imageUrl: 'https://cdn11.bigcommerce.com/s-ymgqt/images/stencil/640w/products/24973/16442/Game%20PS1-191-2__21980.1683575663.jpg',
        price: 19,
      },
      {
        id: 17,
        name: 'CRASH BANDICOOT - PS1 GAME',
        imageUrl: 'https://cdn11.bigcommerce.com/s-ymgqt/images/stencil/1280x1280/products/24894/16409/Game%20PS1-118-2__03606.1684346281.jpg',
        price: 20,
      },
    ],
  },
  {
    title: 'Accessories',
    items: [
      {
        id: 18,
        name: 'ORIGINAL CONTROLLER - NINTENDO NES',
        imageUrl: 'https://cdn11.bigcommerce.com/s-ymgqt/images/stencil/640w/products/16331/25927/Original_Controller__34879.1689100645.jpg',
        price: 25,
      },
      {
        id: 19,
        name: 'SUPER SCOPE - SNES GUN BUNDLE',
        imageUrl: 'https://cdn11.bigcommerce.com/s-ymgqt/images/stencil/1280x1280/products/16368/9171/Acc-SNES-Super-Scope-2__00375.1683737645.jpg',
        price: 90,
      },
      {
        id: 20,
        name: 'ORIGINAL RUMBLE PAK - NINTENDO 64 (N64)',
        imageUrl: 'https://cdn11.bigcommerce.com/s-ymgqt/images/stencil/640w/products/16291/9082/Acc-N64-OrigRumble-2__47194.1683981209.gif',
        price: 90,
      },
      {
        id: 21,
        name: 'ORIGINAL CONTROLLER CLEAR BLUE - DREAMCAST',
        imageUrl: 'https://cdn11.bigcommerce.com/s-ymgqt/images/stencil/1280x1280/products/37620/28302/controller_blue__58831.1683129859.jpg',
        price: 65,
      },
      {
        id: 22,
        name: 'ASCII FISHING ROD CONTROLLER - NINTENDO 64 (N64)',
        imageUrl: 'https://cdn11.bigcommerce.com/s-ymgqt/images/stencil/1280x1280/products/54309/59815/fishing__82583.1686680564.gif',
        price: 135,
      },
    ],
  },
  {
    title: 'Collectibles',
    items: [
      {
        id: 23,
        name: 'MEGA MAN - AMIIBO LOOSE FIGURE',
        imageUrl: 'https://cdn11.bigcommerce.com/s-ymgqt/images/stencil/1280x1280/products/50604/51896/mm----1__19958.1673335374.jpg',
        price: 25,
      },
      {
        id: 24,
        name: 'SPYRO SKYLANDERS LOOSE FIGURE',
        imageUrl: 'https://cdn11.bigcommerce.com/s-ymgqt/images/stencil/1280x1280/products/53559/58243/soptyr------------2__04456.1684585716.gif',
        price: 20,
      },
      {
        id: 25,
        name: 'IKE - AMIIBO LOOSE FIGURE',
        imageUrl: 'https://cdn11.bigcommerce.com/s-ymgqt/images/stencil/640w/products/50597/51881/ike-----1__58616.1673335373.jpg',
        price: 80,
      },
      {
        id: 26,
        name: 'MIKE WAZOWSKI - INFINITY 1.0 LOOSE FIGURE',
        imageUrl: 'https://cdn11.bigcommerce.com/s-ymgqt/images/stencil/1280x1280/products/53525/58193/miek-------------2__70064.1682113734.gif',
        price: 80,
      },
      {
        id: 27,
        name: 'SULLY - INFINITY 1.0 LOOSE FIGURE',
        imageUrl: 'https://cdn11.bigcommerce.com/s-ymgqt/images/stencil/640w/products/53396/57966/sully-1__01097.1683843782.gif',
        price: 45,
      },
    ],
  },
  {
    title: 'Apparel',
    items: [
      {
        id: 30,
        name: 'SUPER MARIO BROS. CHARACTER GUIDE - OFFICIALLY LICENSED T-SHIRT',
        imageUrl: 'https://cdn11.bigcommerce.com/s-ymgqt/images/stencil/640w/products/54332/59906/marioguide-tshirt__18451.1687284123.jpg',
        price: 35,
      },
      {
        id: 31,
        name: 'ZELDA LINK TO THE PAST - OFFICIALLY LICENSED T-SHIRT',
        imageUrl: 'https://cdn11.bigcommerce.com/s-ymgqt/images/stencil/1280x1280/products/45989/40312/Zelda-Green-T__15339.1684262163.jpg',
        price: 20,
      },
      {
        id: 32,
        name: 'DKOLDIES EMBROIDERED LOGO HAT',
        imageUrl: 'https://cdn11.bigcommerce.com/s-ymgqt/images/stencil/640w/products/48694/46567/hat-----1__63597.1668194112.jpg',
        price: 25,
      },
      {
        id: 33,
        name: 'PLAYSTATION BUTTONS BLACK & WHITE - OFFICIALLY LICENSED T-SHIRT',
        imageUrl: 'https://cdn11.bigcommerce.com/s-ymgqt/images/stencil/1280x1280/products/47741/45003/ps1--------1__15242.1608748838.jpg',
        price: 25,
      },
      {
        id: 34,
        name: 'MORTAL KOMBAT - OFFICIALLY LICENSED T-SHIRT',
        imageUrl: 'https://cdn11.bigcommerce.com/s-ymgqt/images/stencil/640w/products/47716/44946/download-1__67289.1607028447.jpg',
        price: 40,
      },
      {
        id: 35,
        name: 'POKEMON PIKACHU - OFFICIALLY LICENSED T-SHIRT',
        imageUrl: 'https://cdn11.bigcommerce.com/s-ymgqt/images/stencil/640w/products/54328/59885/Black-Pikachu-tee__16130.1686847552.gif',
        price: 25,
      },
    ],
  },
];

export default SHOP_DATA;