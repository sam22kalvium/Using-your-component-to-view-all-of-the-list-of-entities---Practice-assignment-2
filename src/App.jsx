import "./App.css";
import PostCard from "./components/postcard"; // Ensure correct import

function App() {
  const posts = [
    {
      id: 1,
      profileImage: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
      username: "alice",
      content: "This is my first post!",
    },
    {
      id: 2,
      profileImage: "https://writestylesonline.com/wp-content/uploads/2016/08/Follow-These-Steps-for-a-Flawless-Professional-Profile-Picture.jpg",
      username: "bob",
      content: "Loving this social media app.",
    },
    {
      id: 3,
      profileImage: "https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001882.png",
      username: "charlie",
      content: "Just another day...",
    },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>Social Media Feed</h1>
      {posts.map((post) => (
        <PostCard key={post.id} {...post} />
      ))}
    </div>
  );
}

export default App;
