const newFormHandler = async (event) => {
  event.preventDefault();

  const reviewTitle = document.querySelector("reviewTitle").value.trim();
  const reviewDescription = document
    .querySelector("reviewDescription")
    .value.trim();
  const reviewContent = document.querySelector("reviewContent").value.trim();

  if (reviewTitle && reviewDescription && reviewContent) {
    const response = await fetch(`/api/posts`, {
      method: "POST",
      body: JSON.stringify({ reviewTitle, reviewDescription, reviewContent }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert("Review could not be posted, please try again.");
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute("dataId")) {
    const id = event.target.getAttribute("dataId");

    const response = await fetch(`/api/post/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert("Review could not be deleted, please try again.");
    }
  }
};

document
  .querySelector(".newPostForm")
  .addEventListener("submit", newFormHandler);

document
  .querySelector(".deleteButton")
  .addEventListener("click", delButtonHandler);
