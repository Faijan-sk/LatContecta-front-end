// components/privateRoutes/withPrivateRoute.tsx
"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

const loginRedirect = "/login?redirected=true";

const withPrivateRoute = (WrappedComponent: any) => {
  const PrivateRouteWrapper = (props: any) => {
    const router = useRouter();

    useEffect(() => {
      const checkAuth = async () => {
        const token = localStorage.getItem("accessToken");
        if (!token) {
          router.replace(loginRedirect);
        }
      };

      checkAuth();
    }, [router]);

    return <WrappedComponent {...props} />;
  };

  return PrivateRouteWrapper;
};

export default withPrivateRoute;
