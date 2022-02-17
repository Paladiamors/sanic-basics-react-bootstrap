export const createPostUrl = "/api/blog/create_post";
export const updatePostUrl = "/api/blog/update_post";
export const getPostUrl = (titleSearch) => `/api/blog/get_post/${titleSearch}`;
export const editPostUrl = (titleSearch) => `/api/blog/edit_post/${titleSearch}`;
export const listPostsUrl = "/api/blog/list_posts"; // list posts for admin activites
export const postSummariesUrl = "/api/blog/post_summaries"; // for browsing the blog
export const deletePostUrl = "/api/blog/delete_post";
