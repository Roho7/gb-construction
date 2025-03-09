import Image from "next/image";
import Link from "next/link";

const newsItems = [
  {
    id: 1,
    title: "GB Construction constructs new healthcare facility in Houston, Texas, USA, for USD 45M, about SEK 470M",
    date: "FEBRUARY 20, 2024 | 08:00 CET",
    category: "LATEST PRESS RELEASES",
    link: "/news/healthcare-facility-houston",
  },
  {
    id: 2,
    title: "GB Construction builds I-95 ID Project in Rhode Island, USA, for USD 41M, about SEK 4 billion",
    date: "FEBRUARY 15, 2024 | 08:00 CET",
    category: "LATEST PRESS RELEASES",
    link: "/news/i95-project-rhode-island",
  },
  {
    id: 3,
    title: "GB Construction completes retail space in Manhattan, New York, USA, for USD 84M, about SEK 880M",
    date: "FEBRUARY 10, 2024 | 08:00 CET",
    category: "LATEST PRESS RELEASES",
    link: "/news/retail-space-manhattan",
  },
];

const financialReports = [
  {
    id: 1,
    title: "Six-month report 2024",
    date: "JULY 22, 2024 | 08:00 CET",
    link: "/investors/reports/six-month-2024",
  },
  {
    id: 2,
    title: "Three-month report 2024",
    date: "APRIL 26, 2024 | 08:00 CET",
    link: "/investors/reports/three-month-2024",
  },
  {
    id: 3,
    title: "Year-end report 2023",
    date: "FEBRUARY 2, 2024 | 08:00 CET",
    link: "/investors/reports/year-end-2023",
  },
];

const events = [
  {
    id: 1,
    title: "Interim report third quarter 2024",
    date: "NOV 07",
    link: "/investors/events/interim-report-q3-2024",
  },
  {
    id: 2,
    title: "Press- and audio conference: Interim report third quarter 2024",
    date: "OCT 03",
    link: "/investors/events/press-audio-conference-q3-2024",
  },
  {
    id: 3,
    title: "Annual General Meeting",
    date: "APR 25",
    link: "/investors/events/annual-general-meeting-2024",
  },
];

export function Blog() {
  return (
    <section className="py-20">
      <div className="container">
        <h2 className="text-3xl font-bold mb-12">Latest News</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Latest Press Releases */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-6">LATEST PRESS RELEASES</h3>
            <div className="space-y-8">
              {newsItems.map((item) => (
                <div key={item.id} className="border-b border-gray-200 pb-6">
                  <Link href={item.link} className="group">
                    <p className="text-xs text-gray-500 mb-2">{item.date}</p>
                    <h4 className="text-lg font-semibold group-hover:text-primary transition-colors">
                      {item.title}
                    </h4>
                  </Link>
                  <div className="mt-4">
                    <Link 
                      href={item.link} 
                      className="inline-flex items-center text-xs font-medium text-primary hover:text-primary/80"
                    >
                      DOWNLOAD PDF
                      <svg className="ml-1 h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              ))}
              <Link 
                href="/news" 
                className="inline-flex items-center text-xs font-medium text-primary hover:text-primary/80"
              >
                ALL PRESS RELEASES
                <svg className="ml-1 h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Financial Reports and Calendar */}
          <div className="grid grid-cols-1 gap-12">
            {/* Financial Reports */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-6">LATEST FINANCIAL REPORTS</h3>
              <div className="space-y-6">
                {financialReports.map((item) => (
                  <div key={item.id} className="border-b border-gray-200 pb-4">
                    <Link href={item.link} className="group">
                      <p className="text-xs text-gray-500 mb-2">{item.date}</p>
                      <h4 className="text-base font-semibold group-hover:text-primary transition-colors">
                        {item.title}
                      </h4>
                    </Link>
                    <div className="mt-2">
                      <Link 
                        href={item.link} 
                        className="inline-flex items-center text-xs font-medium text-primary hover:text-primary/80"
                      >
                        DOWNLOAD PDF
                        <svg className="ml-1 h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                ))}
                <Link 
                  href="/investors/reports" 
                  className="inline-flex items-center text-xs font-medium text-primary hover:text-primary/80"
                >
                  ALL FINANCIAL REPORTS
                  <svg className="ml-1 h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Calendar */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-6">CALENDAR</h3>
              <div className="space-y-6">
                {events.map((item) => (
                  <div key={item.id} className="flex items-start gap-4 border-b border-gray-200 pb-4">
                    <div className="bg-gray-100 p-2 text-center min-w-16">
                      <span className="block text-xs font-medium text-gray-500">{item.date.split(' ')[0]}</span>
                      <span className="block text-lg font-bold">{item.date.split(' ')[1] || ''}</span>
                    </div>
                    <div>
                      <Link href={item.link} className="group">
                        <h4 className="text-base font-semibold group-hover:text-primary transition-colors">
                          {item.title}
                        </h4>
                      </Link>
                      <div className="mt-2">
                        <Link 
                          href={item.link} 
                          className="inline-flex items-center text-xs font-medium text-primary hover:text-primary/80"
                        >
                          LEARN MORE
                          <svg className="ml-1 h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
                <Link 
                  href="/investors/calendar" 
                  className="inline-flex items-center text-xs font-medium text-primary hover:text-primary/80"
                >
                  ALL CALENDAR EVENTS
                  <svg className="ml-1 h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 