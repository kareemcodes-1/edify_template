import Library from "@src/components/Library";
import PublicationsWrapper from "@src/components/Layout/Wrapper/PublicationsWrapper";
import { queryClient } from "@src/utils";
import { BasePageProps } from "@src/utils/interface";

const LibraryPage = () => {
  const { cachedData } = queryClient.getQueryData("pageProps") as BasePageProps;
  const { name, logo } = cachedData.centre;
  return (
    <PublicationsWrapper
      title={`${name} | Library Books & Publications`}
      description={`Access, Buy and subscribe to all ${name} books and publications`}
      image={logo}
      showHeader={true}
      showFooter={true}
    >
      <Library />
    </PublicationsWrapper>
  );
};

export default LibraryPage;
