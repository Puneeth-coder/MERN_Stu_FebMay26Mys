// Pagination and Caching
// Pagination: Loading data page by page instead of loading everything at once
// Caching: Saving previously loaded data so repeated requests can be avoided

import { useEffect, useState } from "react";

export function PaginationCaching() {
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        loadPosts();
    }, [page]);

    async function loadPosts() {

        const cacheKey = `post_page_${page}`;

        setLoading(true);
        setError("");

        try {

            // Check cache first
            const cacheData = localStorage.getItem(cacheKey);

            if (cacheData) {
                setPosts(JSON.parse(cacheData));
                return;
            }

            // Fetch data from API
            const response = await fetch(
                `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=5`
            );

            if (!response.ok) {
                throw new Error(
                    `Failed to fetch posts. Status: ${response.status}`
                );
            }

            const data = await response.json();

            // Save to cache
            localStorage.setItem(cacheKey, JSON.stringify(data));

            setPosts(data);

        } catch (error) {

            console.log("Error while loading posts:", error);

            setError(error.message || "Failed to load posts.");

        } finally {

            setLoading(false);
        }
    }

    return (
        <section>

            <h2>Pagination & Caching Example</h2>

            <p>Current Page: {page}</p>

            {/* Loading UI */}
            {loading && <p>Loading posts...</p>}

            {/* Error UI */}
            {!loading && error && <p>Error: {error}</p>}

            {/* Empty State UI */}
            {!loading && !error && posts.length === 0 && (
                <p>No posts found.</p>
            )}

            {/* Success UI */}
            {!loading &&
                !error &&
                posts.length > 0 &&
                posts.map((post) => (
                    <article key={post.id}>
                        <h4>{post.title}</h4>
                        <p>{post.body}</p>
                    </article>
                ))}

            {/* Pagination Buttons */}
            <button
                disabled={page === 1 || loading}
                onClick={() => setPage((prevPage) => prevPage - 1)}
            >
                Previous
            </button>

            <button
                disabled={loading}
                onClick={() => setPage((prevPage) => prevPage + 1)}
            >
                Next
            </button>

        </section>
    );
}