import { redirect } from "next/navigation";
import { defaultLocale, localePath } from "@/app/lib/i18n";

export default function RedirectPage() {
  redirect(localePath(defaultLocale, "/terms"));
}
