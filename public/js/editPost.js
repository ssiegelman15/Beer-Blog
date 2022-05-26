const editFormHandler = async (event) => {
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

document
  .querySelector(".editReviewForm")
  .addEventListener("submit", editFormHandler);
