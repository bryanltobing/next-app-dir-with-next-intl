import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import Link from "next-intl/link";
import { CTAMenu } from "./CTAMenu";

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
      <p>{t("plural", { numMessages: 0 })}</p>
      <p>{t("select", { gender: "female" })}</p>
      <p>{t("selectordinal", { year: 4 })}</p>
      <p>{t("escaped")}</p>

      <Button variant="secondary">Hello World</Button>

      <div className="container py-4">
        <div className="max-w-lg">
          <CTAMenu ctaLabel1={t("Getting Started")} ctaLabel2={t("Deploy")} />
        </div>
      </div>
    </div>
  );
}
