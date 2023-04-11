import * as React from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import MuiTable from "@src/components/shared/table";
import AddSubscriber from "./addSubscriber";
import Empty from "@src/components/shared/state/Empty";
import Delete from "src/components/shared/delete";
import { useRouter } from "next/router";
import { useToast } from "@src/utils/hooks";
import dynamic from "next/dynamic";

interface SubscriberInt {
  surname: string;
  firstname: string;
  username: string;
  email: string;
  phoneNumber: string;
  id: string;
  userId: string;
}
interface SubscriberListInt {
  users: SubscriberInt[];
}
export default function Managers({
  managers,
  centreId,
}: {
  managers: SubscriberListInt;
  centreId: string;
}) {
  const Toast = dynamic(() => import("@src/components/shared/toast"));
  const { toastMessage, toggleToast } = useToast();
  const router = useRouter();
  const columns = [
    { minWidth: 50, name: "No", key: "index" },
    { minWidth: 120, name: "Surname", key: "surname" },
    { minWidth: 120, name: "First name", key: "firstname" },
    { minWidth: 150, name: "Email", key: "email" },
    { minWidth: 70, name: "Phone Number", key: "phoneNumber" },
    { minWidth: 50, name: "Action", key: "action" },
  ];
  const refresh = () => {
    router.replace({
      query: { ...router.query },
    });
  };
  const result = managers.users.map((user, index: number) => ({
    index: ++index,
    ...user,
    action: (
      <Delete
        toggleToast={toggleToast}
        url={`/centre/${centreId}/centre-manager/${user.userId}`}
        updateData={refresh}
      />
    ),
  }));
  if (!managers) return <h1>....Loading</h1>;
  return (
    <Box
      component="section"
      sx={{ pt: 4, px: { md: 6 }, pb: 8 }}
      className="hero-section"
    >
      <Stack spacing={4} marginTop={4}>
        <Typography
          variant="h5"
          component="p"
          sx={{ textAlign: "center", fontSize: { xs: 25, md: 32 } }}
        >
          Centre Managers
        </Typography>
        <Typography>
          <AddSubscriber
            toggleToast={toggleToast}
            refetch={refresh}
            centreId={centreId as string}
          />
        </Typography>
        {result.length ? (
          <Box>
            <MuiTable data={result} columns={columns} bgColor="#F7F7F7" />
          </Box>
        ) : (
          <Empty />
        )}
      </Stack>
      {toastMessage && (
        <Toast
          message={toastMessage}
          status={Boolean(toggleToast)}
          showToast={toggleToast}
        />
      )}
    </Box>
  );
}
