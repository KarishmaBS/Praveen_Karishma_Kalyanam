export function generateGoogleCalendarUrl(
  title: string,
  startUtc: string, // YYYYMMDDTHHmmssZ
  endUtc: string,
  details: string,
  location: string
): string {
  const base = 'https://calendar.google.com/calendar/render?action=TEMPLATE';
  const params = new URLSearchParams({
    text: title,
    dates: `${startUtc}/${endUtc}`,
    details,
    location,
  });
  return `${base}&${params.toString()}`;
}

export function downloadIcsFile(
  title: string,
  startUtc: string,
  endUtc: string,
  description: string,
  location: string,
  filename: string
) {
  const icsContent = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Praveen Karishma Wedding//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    `SUMMARY:${title}`,
    `DESCRIPTION:${description.replace(/\n/g, '\\n')}`,
    `LOCATION:${location}`,
    `DTSTART:${startUtc}`,
    `DTEND:${endUtc}`,
    `STATUS:CONFIRMED`,
    'END:VEVENT',
    'END:VCALENDAR',
  ].join('\r\n');

  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
  const link = document.createElement('a');
  link.href = window.URL.createObjectURL(blob);
  link.setAttribute('download', `${filename}.ics`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
