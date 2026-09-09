import type { MetadataRoute } from "next";

import { Bio } from "@/data/constants";
import { site } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${Bio.name} — ${site.jobTitle}`,
    short_name: site.title,
    description: Bio.description,
    start_url: "/",
    display: "standalone",
    background_color: site.themeColor,
    theme_color: site.themeColor,
    icons: [
      {
        src: "/jaganath_profilepic.jpg",
        sizes: "527x612",
        type: "image/jpeg",
      },
    ],
  };
}
