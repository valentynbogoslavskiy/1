import { FC } from 'react';
import IconButton from '@material-ui/core/IconButton';
// import SvgIcon from '@material-ui/core/SvgIcon';
import Badge from '@material-ui/core/Badge';
import SearchIcon from '@material-ui/icons/Search';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

// import { SvgShopCartIcon } from '@components/icons';

import { HeaderIcon } from '@interfaces/header';
import { useMobileView } from './hooks';

interface HeaderIconsProps {
  icons: HeaderIcon[];
}

export const HeaderIcons: FC<HeaderIconsProps> = ({ icons }) => {
  const hideIconsForMobile = useMobileView();
  return (
    <>
      {icons.map((icon) => {
        const iconName = icon.name; // value from mock data - cart and favourites
        const itemCount = icon.count;
        return (
          <IconButton aria-label={`show ${itemCount} items`} color='inherit' key={icon.name}>
            <Badge badgeContent={itemCount} color='secondary'>
              {/* if you want to use your custom svg icons use SvgIcon based approach */}
              {/* <SvgIcon component={SvgShopCartIcon} /> */}
              {/* {iconName === 'cart' && itemCount &&  ? (
                <ShoppingCartOutlinedIcon color='secondary' />
              ) : (
                <ShoppingCartIcon color='primary' />
              )} */}
              {iconName === 'favourites' ? (
                <FavoriteBorderIcon color={itemCount ? 'primary' : 'inherit'} />
              ) : iconName === 'cart' && itemCount ? (
                <ShoppingCartIcon color='primary' />
              ) : (
                <ShoppingCartOutlinedIcon color='inherit' />
              )}
            </Badge>
          </IconButton>
        );
      })}
      {!hideIconsForMobile && (
        <IconButton
          edge='end'
          aria-label='account of current user'
          aria-controls={'icon-1'}
          aria-haspopup='true'
          color='inherit'
        >
          <SearchIcon />
        </IconButton>
      )}
    </>
  );
};
