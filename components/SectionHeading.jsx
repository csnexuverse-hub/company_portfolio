import Badge from './Badge';
import FadeInUp from './FadeInUp';

export default function SectionHeading({ id, badge, tone = 'gray', title, description, align = 'left', className = '' }) {
  const centered = align === 'center';
  return (
    <FadeInUp className={`${centered ? 'mx-auto text-center' : ''} max-w-2xl ${className}`}>
      {badge ? <Badge tone={tone}>{badge}</Badge> : null}
      <h2 id={id} className="mt-4 text-2xl font-semibold tracking-tight sm:mt-6 sm:text-3xl md:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description ? <p className="mt-4 text-sm leading-7 text-muted sm:mt-6 sm:text-base">{description}</p> : null}
    </FadeInUp>
  );
}
