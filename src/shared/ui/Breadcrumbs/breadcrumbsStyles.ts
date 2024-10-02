export const onHoverLine = {
  display: 'inline-block',
  position: 'relative',
  fontWeight: '400',
  '&:after': {
    content: "''",
    position: 'absolute',
    width: '100%',
    transform: 'scaleX(0)',
    height: '2px',
    bottom: '0',
    left: '0',
    backgroundColor: '#f5b950',
    transformOrigin: 'bottom right',
    transition: 'transform 0.25s ease-out',
  },
  '&:hover:after': {
    transform: 'scaleX(1)',
    transformOrigin: 'bottom left',
  },
};
