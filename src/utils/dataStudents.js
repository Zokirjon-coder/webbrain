// url: 'https://randomuser.me/api/',
//https://randomuser.me/api/?results=20
const getUsers = async () => {
  const data = await fetch("https://randomuser.me/api/?results=12").then(
    (data) => data.json()
  );
  let text =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices cras rutrum eu lacus. Amet, eros, neque porta sapien dignissim ut nisi ultricies.";
  return data.results.map((user, index) => {
    return {
      id: index,
      name: user.name.first +' '+ user.name.last,
      img: user.picture.medium,
      status: index%2 === 0 ? "Frontend":"Backend" + " dasturchi",
      text: text,
    };
  });
};

export const dataStudents = getUsers();
