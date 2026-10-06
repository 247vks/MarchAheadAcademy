import Link from 'next/link';
import { Compass, ClipboardCheck, Users, ArrowRight } from 'lucide-react';
import { coachingServices } from '@/lib/coaching-services';
import { siteUrl } from '@/lib/site';

export function CoachingServices() {
  const icons = [Compass, ClipboardCheck, Users];
  return (
    <section
      className="mt-10 border-t border-[#d8e1dd] pt-7"
      aria-labelledby="service-options"
    >
      <h2 id="service-options" className="scroll-mt-28 font-heading text-3xl">
        Choose the support you need
      </h2>
      <p className="mt-4 leading-7 text-[#536371]">
        All guidance is one-to-one with Commander Sulakshan Kumar Sharma
        (Retd.). Online coaching is available; in-person visits are by prior
        appointment. Start with an individual consultation to agree the scope
        and arrangements.
      </p>
      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        {coachingServices.map((service, index) => {
          const Icon = icons[index];
          return (
            <article
              id={service.id}
              key={service.id}
              className="flex scroll-mt-28 flex-col border-t-2 border-[#397fa8] py-5"
            >
              <h3 className="flex items-start gap-3 font-heading text-2xl">
                <Icon className="shrink-0 text-[#397fa8]" aria-hidden="true" />
                {service.name}
              </h3>
              <dl className="mt-5 space-y-4">
                {[
                  ['Who it is for', service.suitable],
                  ['Areas covered', service.areas],
                  ['How it works', service.process],
                  ['What to expect', service.outcome],
                  ['Before you begin', service.limits],
                ].map(([label, copy]) => (
                  <div key={label}>
                    <dt className="font-semibold text-[#30471f]">{label}</dt>
                    <dd className="mt-1 text-sm leading-7 text-[#536371]">
                      {copy}
                    </dd>
                  </div>
                ))}
              </dl>
              <Link
                href="/consultation/"
                data-maa-service={service.id}
                className="text-link mt-auto inline-flex min-h-11 items-center gap-2 pt-5"
              >
                Discuss this preparation{' '}
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </article>
          );
        })}
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': coachingServices.map((service) => ({
              '@type': 'Service',
              '@id': `${siteUrl}/ssb-coaching/#${service.id}`,
              name: service.name,
              url: `${siteUrl}/ssb-coaching/#${service.id}`,
              provider: { '@id': `${siteUrl}/#organization` },
              description: `${service.suitable} ${service.areas} ${service.process} ${service.limits}`,
              serviceType: 'Personalised SSB preparation guidance',
            })),
          }).replace(/</g, '\\u003c'),
        }}
      />
    </section>
  );
}
