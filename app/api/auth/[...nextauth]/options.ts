import type { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import firebaseApp from "@/utils/FirebaseConfig";
import { getFirestore } from "firebase-admin/firestore";
import { UserType } from "@/types";
import { GoogleProfile } from "next-auth/providers/google";

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
        session.user = { ...session.user, id: userDoc.docs[0].id };
      }
      return session;
    },
    async signIn({ profile }) {
      try {
        //check user if it exist if not create new user in db

        //Convert sa googleProfile para makuha ang first_name, last_name etc -.-
        var gProfile: GoogleProfile = {
          aud: "",
          azp: "",
          email_verified: false,
          exp: 0,
          family_name: "",
          given_name: "",
          hd: "",
          iat: 0,
          iss: "",
          jti: "",
          nbf: 0,
          picture: "",
          email: "",
          name: "",
          sub: "",
        };
        gProfile = { ...gProfile, ...profile };
        console.log("Goooogle Profile", { gProfile });

        const userRef = db.collection("users");
        const user = await userRef.where("email", "==", profile!.email).get();
        if (user.size == 0) {
          const userInfo: UserType = {
            id: null,
            firstName: gProfile.given_name,
            email: gProfile.email,
            lastName: gProfile.family_name,
            position: null,
          };
          userRef.add({ ...userInfo }).then((ref) => {
            // add the user then get it then update ^_^
            ref.get().then((doc) => {
              ref.update({ id: doc.id });
            });
          });
        }
        console.log(userRef);
        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
  },
};
