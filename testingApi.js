console.log("hello world");
const postData = document.getElementById("post");

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((res) => res.json())
  .then((data) => {
    let postDetail = "";
    data.map((post) => {
      return (postDetail += `
              <div class="col-md-4 col-6">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">${post.title}</h5>
                  <p class="card-text">
                    ${post.body}
                  </p>
                  <a href="#" class="btn btn-primary">Readmore</a>
                </div>
              </div>
            </div>
              `);
    });

    postData.innerHTML = postDetail;
  })
  .catch((err) => console.log(err.message));
