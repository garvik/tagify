import { DataSource } from "apollo-datasource";
import { Image } from "./Image";

const images: Image[] = [
  { url: "http://www.artchive.com/artchive/v/van_gogh/l_eglise.jpg" },
  { url: "http://www.artchive.com/artchive/v/van_gogh/gachet.jpg" },
  { url: "http://www.artchive.com/artchive/v/van_gogh/cyp_star.jpg" },
  { url: "http://www.artchive.com/artchive/v/van_gogh/roots_trunks.jpg" },
  { url: "http://www.artchive.com/artchive/v/van_gogh/stairs.jpg" },
  { url: "http://www.artchive.com/artchive/v/van_gogh/villgstr.jpg" },
  { url: "http://www.artchive.com/artchive/v/van_gogh/crows.jpg" },
];

export class ImageAPI extends DataSource {
  constructor() {
    super();
  }

  public getAllImages(): Image[] {
    return images;
  }
}
