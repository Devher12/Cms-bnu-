export function formatOrdinalDatePKT(date: Date = new Date()): string {
  const day = parseInt(
    new Intl.DateTimeFormat("en-GB", {
      timeZone: "Asia/Karachi",
      day: "numeric",
    }).format(date),
    10
  );

  const suffix =
    day % 10 === 1 && day !== 11
      ? "st"
      : day % 10 === 2 && day !== 12
        ? "nd"
        : day % 10 === 3 && day !== 13
          ? "rd"
          : "th";

  const month = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Asia/Karachi",
    month: "long",
  }).format(date);

  const year = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Asia/Karachi",
    year: "numeric",
  }).format(date);

  return `${day}${suffix} ${month}, ${year}`;
}

/** @deprecated Use formatOrdinalDatePKT instead */
export function formatOrdinalDate(date: Date): string {
  return formatOrdinalDatePKT(date);
}
