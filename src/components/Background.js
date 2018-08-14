export default function assignBackground( pathName ) {
  var colors = {
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
    }
  }

  document.body.style.background = colors[ pathName ].background;
  document.body.style.background = colors[ pathName ].background;
};
