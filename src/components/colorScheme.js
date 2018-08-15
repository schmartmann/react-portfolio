export default function setColorScheme( path ) {
  const colorSchemes = {
    '/writing': {
      background: '#ffde8d',
      color: '#064273'
    },
    '/code': {
      background: '#E4939E',
      color: '#40FFE6'
    },
    '/contact': {
      background: 'black',
      color: 'white'
    },
    '/about': {
      color: '#CFE1B2',
      background: '#5771B2'
    },
    '/home': {
      background: '#349884'
    },
    '/': {
      background: '#349884'
    }
  };

  document.body.style.background = colorSchemes[ path ].background;
  document.body.style.color = colorSchemes[ path ].color;
};
