import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

export const options = {
  providers: [
    //Configuration for the GitHub Provider
    GitHubProvider({
      profile(profile) {
        console.log("Profile GitHub: ", profile);

        let userRole = "user";
        if (profile?.email == "danielmathews4002@gmail.com") {
          userRole = "admin";
        }
        console.log("Returning profile...")
        return {
          ...profile,
          role: userRole,
        };
      },
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_Secret,
    }),

    //Configuration for the google provider
    GoogleProvider({
      profile(profile) {
        console.log("Profile Google: ", profile);

        let userRole = "user";
        if (profile?.email == "danielmathews4002@gmail.com") {
          userRole = "admin";
        }

        console.log("Returning profile...")
        return {
          ...profile,
          id: profile.sub,
          role: userRole,
        };
      },
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_Secret,
    }),
    
  ],
  callbacks: {
    async jwt({ token, user }) {
        if (user) token.role = user.role;
        return token;
      },
      async session({ session, token }) {
        if (session?.user) session.user.role = token.role;
        return session;
      },
  }

};