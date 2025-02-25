import LikeButton from "./likebutton"; // Ensure correct file name & import

const PostCard = ({ profileImage, username, content }) => {
  return (
    <div style={styles.card}>
      <img src={profileImage} alt="Profile" style={styles.image} />
      <div>
        <h3>{username}</h3>
        <p>{content}</p>
        <LikeButton />
      </div>
    </div>
  );
};

const styles = {
  card: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    border: "1px solid #ddd",
    padding: "10px",
    borderRadius: "8px",
    marginBottom: "10px",
    backgroundColor: "#fff",
    color: "#000",
  },
  image: {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
  },
};

export default PostCard;
