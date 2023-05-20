import { useTranslations } from "next-intl";
import Link from "next-intl/link";

export default function HomePage() {
  const t = useTranslations();

  return (
    <div>
      <Link href="/" locale="en">
        Switch to english
      </Link>
      <Link href="/" locale="id">
        Switch to id
      </Link>
      <p>{t("static")}</p>
      <p>{t("interpolation", { name: "Jane" })}</p>
      <p>{t("plural", { numMessages: 2 })}</p>
      <p>{t("select", { gender: "male" })}</p>
      <p>{t("selectordinal", { year: 11 })}</p>
      <p>{t("escaped")}</p>
    </div>
  );
}
