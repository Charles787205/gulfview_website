import { LiteralUnion, ClientSafeProvider } from "next-auth/react";
import { BuiltInProviderType } from "next-auth/providers/index";
import { Session } from "next-auth";
import { useDisclosure } from "@nextui-org/react";

export type ActivityProps = {
  title: string;
  description: string;
  imagePath: string;
};

export type ServiceCardProps = {
  title: string;
  description: string;
  link: string;
};

export type NavProps = {
  session: Session | null;
  providers: Record<
    LiteralUnion<BuiltInProviderType, string>,
    ClientSafeProvider
  > | null;
  isAdmin: boolean;
};

export type BookingPageProps = {
  session: Session | null;
  providers: Record<
    LiteralUnion<BuiltInProviderType, string>,
    ClientSafeProvider
  > | null;
};

export type UserType = {
  id: String | null | undefined;
  email: String;
  firstName: String | null | undefined;
  lastName: String | null | undefined;
  position: String | null | undefined;
};

export type NewsType = {
  id: number;
  headline: String;
  description: String;
  dateCreated: Date;
  images: [{ url: String }];
};
export type bookingDetailsType = {
  amenity: string;
  name: string;
  description: string;
  date: string;
  time: string;
  hours: number;
  [key: string]: string | number; // Add this line
};

export type maintenanceRequestDetailsType = {
  subject: string;
  description: string;
  user?: string;
  [key: string]: string | undefined;
};
