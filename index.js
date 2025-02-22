import ShoppingMuse from './chat.js'

const urlParams = new URLSearchParams(window.location.search);

   const selectedStrategy = urlParams.get('selectedStrategy')
   const feedIdFromReq = urlParams.get('f') || '91017';
   const sectionIdFromReq = urlParams.get('s')  || window.DYO?.section?.toString();
   const widgetIdFromReq = urlParams.get('w') || '365301';
const init = () => {
    document.addEventListener('DOMContentLoaded', () => {      
      const muse = new ShoppingMuse({
        color: '#ff0000',
        currencySymbol: '$',
        disclaimer: 'To create a box shadow on the top side of an element, adjust the y-offset value to a negative number.',
        disclaimerText1 : 'Terms of Use',
        disclaimerText2 : 'Privacy Policy',
        disclaimerUrl1 : 'www.google.com',
        disclaimerUrl2 : 'https://www.google.com',
        elementsToHide: [],
        feedId: feedIdFromReq,
        selectedStrategy,
        font : 'Inter',
  
        image: 'https://logowik.com/content/uploads/images/t_hm9158.logowik.com.webp',
  
        isQuickViewEnabled: true,
  
        isTestModeEnabled: true,
  
        name: 'Demo site',
  
        placeholderText: 'What are you looking for?',
  
        previousPriceColumn: 'sale_price',
  
        priceField: 'price',
        primaryProductText : 'name',
        quickViewLoaderDuration: 1,
  
        // secondaryColor: 'red',
        sectionId: sectionIdFromReq,
  
        // selectedStrategy: '258333',
        similarItemsResponse: 'Here are some simi items',
        suggestion1: 'Summer wedding style inspiration',
        suggestion2: 'I need a trendy handbag',
        suggestion3: 'Build a minimalist capsule that will last',
        suggestion4: 'Surprise me!',
        suggestion5 : 'Surprise me again',
        suggestion6: '',
        welcomeMessage: 'eresres',
        widgetId: widgetIdFromReq 
      });
      muse.openDyChat();
    });
  };
  //   // window.DYO.smartObject('muse dynamic content', {
  //   //   inline: true,
  //   //   target: 'dy_muse_dynamic_content'
  init();
  