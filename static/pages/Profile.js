const Profile = {
  template: `<div> Welcome {{email}}, having role : {{role}}</div>`,
  data() {
    email: sessionStorage.getItem("email");
    role: sessionStorage.getItem("role");
    id: sessionStorage.getItem("id");
  },
};

export default Profile;
