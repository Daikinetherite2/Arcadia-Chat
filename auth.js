export function login() {
  signInWithPopup(auth, provider)
    .then((res) => {
      const user = res.user;

      console.log("LOGIN SUCCESS", user);

      document.getElementById("userInfo").innerHTML = `
        <div style="padding:10px;">
          <img src="${user.photoURL}" width="30" style="border-radius:50%">
          ${user.displayName}
        </div>
      `;
    })
    .catch((err) => {
      console.log("LOGIN ERROR:", err);
    });
}
