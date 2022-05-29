const newFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector("#reviewTitle").value.trim();
  const description = document.querySelector("#reviewDescription").value.trim();
  const content = document.querySelector("#reviewContent").value.trim();

  if (title && description && content) {
    const response = await fetch(`/api/posts`, {
      method: "POST",
      body: JSON.stringify({ title, description, content }),
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
