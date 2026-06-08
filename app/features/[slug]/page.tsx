import { redirect, notFound } from "next/navigation";
import { defaultLocale, localePath } from "@/app/lib/i18n";
import { isFeatureSlug } from "@/app/lib/feature-pages-i18n";

export default async function RedirectPage(props: PageProps<"/features/[slug]">) {
  const { slug } = await props.params;
  if (!isFeatureSlug(slug)) {
    notFound();
  }
  redirect(localePath(defaultLocale, `/features/${slug}`));
}
