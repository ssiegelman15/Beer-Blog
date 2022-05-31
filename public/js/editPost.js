const editFormHandler = async (event) => {
  event.preventDefault();

  const postId = document.querySelector("#editContent").getAttribute("dataId");
  const content = document.querySelector("#reviewContent").value.trim();

  if (content) {
    const response = await fetch(`/api/posts/${postId}`, {
      method: "PUT",
      body: JSON.stringify({ content }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      console.log("response ok");
      document.location.replace("/dashboard");
    } else {
      alert("Review could not be posted, please try again.");
    }
  }
};

document
  .querySelector(".editReviewForm")
  .addEventListener("submit", editFormHandler);
