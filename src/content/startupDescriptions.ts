const catalogs = import.meta.glob<Record<string, string>>("./startupDescriptions/*.json", { import: "default" });

/** Load just the URL language's static descriptions on server and client. */
export async function loadStartupDescriptions(locale: string): Promise<Record<string, string>> {
  const load = catalogs[`./startupDescriptions/${locale}.json`];
  if (!load) throw new Error("Startup descriptions are unavailable for this language");
  return load();
}