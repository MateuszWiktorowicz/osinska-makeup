"use client";

import { Service, ServiceVariant } from "@/@types/objects/service/service";
import { createContext, useContext, useState, ReactNode, useMemo } from "react";

type ServiceContextType = {
  services: Service[];
  activeService: Service | undefined;
  setActiveService: (service: Service | undefined) => void;

  serviceVariants: ServiceVariant[];
  activeServiceVariant: ServiceVariant | undefined;
  setActiveServiceVariant: (serviceVariant: ServiceVariant | undefined) => void;
};

const ServiceContext = createContext<ServiceContextType | undefined>(undefined);

type ServiceProviderProps = {
  children: ReactNode;
  services: Service[];
  serviceVariants: ServiceVariant[];
};

export const ServiceProvider = ({
  children,
  services,
  serviceVariants,
}: ServiceProviderProps) => {
  const [activeService, setActiveService] = useState<Service | undefined>(
    services?.[0],
  );
  const [activeServiceVariant, setActiveServiceVariant] = useState<
    ServiceVariant | undefined
  >(serviceVariants?.[0]);

  const value = useMemo(
    () => ({
      services,
      activeService,
      setActiveService,
      serviceVariants,
      activeServiceVariant,
      setActiveServiceVariant,
    }),
    [services, activeService, serviceVariants, activeServiceVariant],
  );

  return (
    <ServiceContext.Provider value={value}>{children}</ServiceContext.Provider>
  );
};

export const useService = () => {
  const context = useContext(ServiceContext);
  if (!context) {
    throw new Error("useService must be used within a ServiceProvider");
  }
  return context;
};
