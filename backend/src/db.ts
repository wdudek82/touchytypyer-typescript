import { Database, Exercise, User, UserType } from "./types";

const users: User[] = [
  {
    id: "1",
    firstName: "Wojtek",
    lastName: "Dudek",
    nickname: "Neevor",
    type: UserType.ADMIN,
  },
  {
    id: "2",
    firstName: "John",
    lastName: "Snow",
    nickname: "Snow",
    type: UserType.USER,
  },
];

const exercises: Exercise[] = [
  {
    id: "121434",
    author: "1",
    title: "Lorem ipsum",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus amet blanditiis dicta distinctio ea id impedit, laboriosam maiores maxime numquam optio perspiciatis quaerat sit temporibus totam, ullam voluptatem? Dolor, perferendis?",
    isPublic: true,
    createdAt: "2019-06-08T21:59:25.497Z",
    updatedAt: "",
  },
  {
    id: "9754453",
    author: "1",
    title: "Accusamus aliquam",
    text:
      "Accusamus aliquam aspernatur at autem blanditiis dolore dolores enim esse est et excepturi facere hic iste\n" +
      "        libero, minima molestiae mollitia nemo officiis omnis possimus rerum saepe temporibus voluptas voluptate\n" +
      "        voluptatum.",
    isPublic: true,
    createdAt: "2019-06-08T21:59:25.497Z",
    updatedAt: "2019-06-08T21:59:25.497Z",
  },
  {
    id: "8723987",
    author: "1",
    title: "Accusantium consequuntur",
    text:
      "Accusantium consequuntur doloremque facilis incidunt sed unde. Alias dolorem fuga ipsum itaque optio quae\n" +
      "        quia ratione sequi, ullam vel! A adipisci delectus dicta eum fuga, fugit impedit neque saepe voluptatum!",
    isPublic: true,
    createdAt: "2019-06-08T21:59:25.497Z",
    updatedAt: "",
  },
];

const db: Database = {
  users,
  exercises,
};

export default db;
