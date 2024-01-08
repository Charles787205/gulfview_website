import type { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import firebaseApp from "@/utils/FirebaseConfig";
import { getFirestore } from "firebase-admin/firestore";
import type { UserType } from "@/types";
import { GoogleProfile } from "next-auth/providers/google";
import { cookies } from "next/headers";
const db = getFirestore(firebaseApp);

export const options: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: { strategy: "jwt" },
  callbacks: {
    async session({ session }) {
      //get the user in database and add id in the new session.
      const userDoc = await db
        .collection("users")
        .where("email", "==", session.user?.email)
        .get();

      if (userDoc.size > 0) {
        session.user = {
          ...session.user,
          id: userDoc.docs[0].id,
          position: userDoc.docs[0].data()["position"],
        };
      }
      return session;
    },
    async signIn({ profile }) {
      try {
        //check user if it exist if not create new user in db

        //Convert sa googleProfile para makuha ang first_name, last_name etc -.-
        var gProfile = profile as GoogleProfile;
        let user: FirebaseFirestore.DocumentSnapshot<
          FirebaseFirestore.DocumentData,
          FirebaseFirestore.DocumentData
        >;
        const userRef = db.collection("users");
        let userSnapshot = await userRef
          .where("email", "==", profile!.email)
          .get();
        if (userSnapshot.size == 0) {
          //if user is new
          const userInfo: UserType = {
            id: null,
            firstName: gProfile.given_name,
            email: gProfile.email,
            lastName: gProfile.family_name,
            position: "admin",
            image: gProfile.picture,
          };
          const newUserRef = await userRef.add({ ...userInfo });
          const newUserDoc = await newUserRef.get();
          await newUserRef.update({ id: newUserDoc.id });

          user = newUserDoc;
        }
        return true;
      } catch (error) {
        return false;
      }
    },
  },
};
