import { getContentForLogoWall } from "../content/queries";
import Clients from "./clients";

export default async function LogoWall() {
  const content = await getContentForLogoWall();

  return <Clients content={content} />;
}
