const posts = JSON.parse(localStorage.getItem("blog-posts")) || [];

export function addPost(newPost) {
    posts.push(newPost);
    localStorage.setItem("blog-posts", JSON.stringify(posts));
}

export function editPost(newPost, index) {
    posts[index] = newPost;
    localStorage.setItem("blog-posts", JSON.stringify(posts));
}

export function deletePost(index) {
    posts.splice(index, 1);
    localStorage.setItem("blog-posts", JSON.stringify(posts));
}

export default posts;