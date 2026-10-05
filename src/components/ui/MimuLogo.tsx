import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';

type MimuLogoProps = {
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  linked?: boolean;
  /** Use `light` on dark backgrounds (e.g. footer). Default is transparent on light backgrounds. */
  variant?: 'default' | 'light';
};

const LOGO_SOURCES = {
  default: '/images/mimu-logo-transparent.png',
  light: '/images/mimu-logo-light.png',
} as const;

export function MimuLogo({
  className,
  imageClassName,
  priority = false,
  linked = true,
  variant = 'default',
}: MimuLogoProps) {
  const logo = (
    <Image
      src={LOGO_SOURCES[variant]}
      alt="MiMU — Confidence. Expression. Growth. Elegance."
      width={1024}
      height={547}
      priority={priority}
      className={clsx('h-auto object-contain', imageClassName ?? 'w-[110px] md:w-[130px]')}
    />
  );

  if (linked) {
    return (
      <Link
        href="/"
        className={clsx('inline-flex items-center', className)}
        aria-label="MiMU home"
      >
        {logo}
      </Link>
    );
  }

  return <span className={clsx('inline-flex items-center', className)}>{logo}</span>;
}
