import gql from "graphql-tag";
import { useMutation } from "@apollo/client";
import { useAuthToken } from "../config/auth";

export const loginMutationGQL = gql`
  mutation Signin($email: String!, $password: String!) {
    signin(input: { email: $email, password: $password }) {
      token
    }
  }
`;

// mutation Signin($input: SigninInput!) {
//   signin(input: $input) {
//     token
//   }
// }

export const useLoginMutation = () => {
  const [_, setAuthToken, removeAuthtoken] = useAuthToken();

  const [mutation, mutationResults] = useMutation(loginMutationGQL, {
    onCompleted: (data) => {
      console.log(data);
      setAuthToken(data.signin.token);
    },
  });

  // full login function
  const login = (email: string, password: string) => {
    removeAuthtoken();
    return mutation({
      variables: {
        email: email,
        password: password,
      },
    });
  };
  return [login, mutationResults];
};
