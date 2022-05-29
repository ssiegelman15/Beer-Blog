const newFormHandler = async (event) => {
  if (event.target.hasAttribute("dataId")) {
    const postId = event.target.getAttribute("dataId");
    const commentContent = document
      .querySelector("#commentContent")
      .value.trim();

    if (commentContent && postId) {
      const response = await fetch(`/api/comments`, {
        method: "POST",
        body: JSON.stringify({ commentContent, postId }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        document.location.replace(`/post/${postId}`);
      } else {
        alert("Comment could not be created, please try again.");
      }
    }
  }
};

document
  .querySelector(".newCommentForm")
  .addEventListener("submit", newFormHandler);
