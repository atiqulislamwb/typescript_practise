// 1. Create an interface representing a document in MongoDB.
interface IUser {
  id: string;
  role: string;
  password: string;
  name: {
    firstName: string;
    middleName: string;
    lastName: string;
  };
  dateOfBirth: string;
  gender: "male" | "female";
  email: string;
  contactNo: string;
  emergencyContactNo: string;
  presentAddress: string;
  permanentAddress: string;
}

export default IUser;
