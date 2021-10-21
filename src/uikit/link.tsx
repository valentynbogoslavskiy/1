import * as React from 'react';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';

import MuiLink, { LinkProps as MuiLinkProps } from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'none',
    },
  },
  active: {
    textDecoration: 'none',
    '&>*': {
      color: theme.palette.primary.main,
    },
  },
}));

interface NextLinkComposedProps
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>,
    Omit<NextLinkProps, 'href' | 'as'> {
  to: NextLinkProps['href'];
  linkAs?: NextLinkProps['as'];
  href?: NextLinkProps['href'];
}

export const NextLinkComposed = React.forwardRef<HTMLAnchorElement, NextLinkComposedProps>(function NextLinkComposed(
  props,
  ref,
) {
  /* eslint-disable */
  const { to, linkAs, href, replace, scroll, passHref, shallow, prefetch, locale, ...other } = props;

  return (
    <NextLink
      href={to}
      prefetch={prefetch}
      as={linkAs}
      replace={replace}
      scroll={scroll}
      shallow={shallow}
      passHref={passHref}
      locale={locale}
    >
      <a ref={ref} {...other} />
    </NextLink>
  );
});

export type LinkProps = {
  activeClassName?: string;
  as?: NextLinkProps['as'];
  href: NextLinkProps['href'];
  noLinkStyle?: boolean;
} & Omit<NextLinkComposedProps, 'to' | 'linkAs' | 'href'> &
  Omit<MuiLinkProps, 'href'>;

// A styled version of the Next.js Link component:
// https://nextjs.org/docs/#with-link
const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(function Link(props, ref) {
  const {
    activeClassName = 'active',
    as: linkAs,
    className: classNameProps,
    href,
    noLinkStyle,
    /* eslint-disable */
    role, // Link don't have roles.
    ...other
  } = props;

  const router = useRouter();
  const classes = useStyles();
  const pathname = typeof href === 'string' ? href : href.pathname;
  const className = clsx(classNameProps, {
    [classes.active]: router.pathname === pathname && activeClassName,
    [classes.root]: true,
  });

  const isExternal = typeof href === 'string' && (href.indexOf('http') === 0 || href.indexOf('mailto:') === 0);

  if (isExternal) {
    if (noLinkStyle) {
    /* eslint-disable */
    // @ts-ignore
      return <a className={className} href={href as string} ref={ref as any} {...other} />;
    }

    return <MuiLink className={className} href={href as string} ref={ref} {...other} />;
  }

  if (noLinkStyle) {
    /* eslint-disable */
    // @ts-ignore
    return <NextLinkComposed className={className} ref={ref as any} to={href} {...other} />;
  }

  return <MuiLink component={NextLinkComposed} linkAs={linkAs} className={className} ref={ref} to={href} {...other} />;
});

export default Link;
