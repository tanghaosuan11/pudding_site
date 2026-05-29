import { redirect } from "next/navigation";
import { localePath } from "@/app/lib/i18n";
import { getLocaleFromParams } from "@/app/[locale]/layout";

export default async function DownloadPage(props: PageProps<"/[locale]/download">) {
  const { locale } = await props.params;
  const currentLocale = getLocaleFromParams(locale);
  redirect(localePath(currentLocale, "/#download"));
}
