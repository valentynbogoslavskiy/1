export interface ContactCardProps {
  title: string;
  subtitle: string;
  image: string;
  linkedin?: string;
  contacts: {
    region: string;
    phone: string;
    email: string;
  };
}

export interface ProductCardProps {
  title: string;
  subtitle: string;
  image: string;
  details: string;
  description: {
    [key: string]: string;
  };
  isFavourite: boolean;
}

export interface CaseStudyCardProps {
  title: string;
  subtitle: string;
  image: string;
  details: string;
  description: string;
}

export interface SimpleCardGridProps {
  title: string;
  imagePath?: string;
  description: string;
  size?: 'lg' | 'md' | 'sm';
  href?: string;
}

export interface ReviewCardProps {
  message: string;
  image: string;
  author: string;
}

export interface ReversedInlineCardProps {
  title: string;
  imagePath: string;
  description: string;
  reversed?: boolean;
  href?: string;
}
