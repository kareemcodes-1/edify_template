import React from "react";
// next components
import Image from "next/image";
import NextLink from "next/link";
// mui
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { Link as MuiLink } from "@mui/material";
// components and styles
import AppDrawer from "./AppDrawer";
import AcademyMenu from "./AcademyMenu";
import ProfileMenu from "./ProfileMenu";
import HideOnScroll from "./HideOnScroll";
import useGlobalStyle from "@src/styles/index";
// icons
import { queryClient } from "@src/utils";
// interface and config
import { AcademyHeaderFunc } from "./interfaceType";
import { BasePageProps } from "../../utils/interface";

const AcademyHeader: AcademyHeaderFunc = () => {
  const theme = useTheme();
  const globalStyle = useGlobalStyle();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const { cachedData = null } = queryClient.getQueryData(
    "pageProps"
  ) as BasePageProps;
  const user = cachedData?.user;

  return (
    <>
      <HideOnScroll>
        <AppBar
          component="nav"
          elevation={0}
          sx={{
            px: { md: 6 },
            bgcolor: "white",
            zIndex: theme.zIndex.drawer + 2,
          }}
        >
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <NextLink href="/" passHref>
                <MuiLink sx={{ display: "flex", alignItems: "center" }}>
                  <Image
                    src="/images/logo.png"
                    alt="Contentionary logo"
                    width={210}
                    height={40}
                  />
                </MuiLink>
              </NextLink>
              {isMatch ? (
                <AppDrawer>
                  <AcademyMenu />
                </AppDrawer>
              ) : (
                <>
                  <Stack
                    ml={4}
                    flexGrow={1}
                    direction="row"
                    justifyContent="space-between"
                    display={{ xs: "none", md: "flex" }}
                  >
                    <Stack direction="row" spacing={2}>
                      <NextLink href="/" passHref>
                        <Button
                          component={MuiLink}
                          sx={{ color: "secondary.light" }}
                        >
                          Home
                        </Button>
                      </NextLink>
                      <NextLink href="/courses" passHref>
                        <Button
                          component={MuiLink}
                          sx={{ color: "secondary.light" }}
                        >
                          Courses
                        </Button>
                      </NextLink>
                      <NextLink href="/courses/my-courses" passHref>
                        <Button
                          component={MuiLink}
                          sx={{ color: "secondary.light" }}
                        >
                          My Courses
                        </Button>
                      </NextLink>
                    </Stack>
                    {user ? (
                      <ProfileMenu title={user.firstname} />
                    ) : (
                      <Stack direction="row" spacing={2} alignItems="center">
                        <NextLink href="/login" passHref>
                          <MuiLink>Login</MuiLink>
                        </NextLink>
                        <NextLink href="/register" passHref>
                          <Button
                            size="large"
                            disableElevation
                            variant="contained"
                            component={MuiLink}
                            className={globalStyle.bgGradient}
                          >
                            Register
                          </Button>
                        </NextLink>
                      </Stack>
                    )}
                  </Stack>
                </>
              )}
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>
    </>
  );
};
export default AcademyHeader;
