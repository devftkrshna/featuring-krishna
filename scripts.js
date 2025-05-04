// Sample data for highlights and posts
const blogPosts = [
];

const poems = [
    { id: 1, title: "Thak Chuka Hu", date: "2025-05-01", excerpt: "Thak chuka hoon zindagi ki bhaag-daud se...", url: "Poem1.html" },
     { id: 2, title: "जब... शिव साथ थे", date: "2025-05-04", excerpt: "जब आँखें खुलीं, शिव का प्रकाश था...", url: "Poem2.html" },
];

const stories = [
    ];

// Utility function to create list items for highlights
function createHighlightItem(post) {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = post.url;
    a.textContent = post.title;
    a.title = post.excerpt;
    li.appendChild(a);
    return li;
}

// Utility function to create list items for full post lists
function createPostListItem(post) {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = post.url;
    a.textContent = post.title + " (" + post.date + ")";
    li.appendChild(a);
    return li;
}

// Load highlights on homepage
function loadHighlights() {
    const blogHighlights = document.getElementById('blog-highlights');
    const poemsHighlights = document.getElementById('poems-highlights');
    const storiesHighlights = document.getElementById('stories-highlights');

    if (blogHighlights) {
        blogPosts.slice(0, 3).forEach(post => {
            blogHighlights.appendChild(createHighlightItem(post));
        });
    }
    if (poemsHighlights) {
        poems.slice(0, 3).forEach(post => {
            poemsHighlights.appendChild(createHighlightItem(post));
        });
    }
    if (storiesHighlights) {
        stories.slice(0, 3).forEach(post => {
            storiesHighlights.appendChild(createHighlightItem(post));
        });
    }
}

// Load full post lists on respective pages
function loadPostLists() {
    const blogPostList = document.getElementById('blog-post-list');
    const poemsPostList = document.getElementById('poems-post-list');
    const storiesPostList = document.getElementById('stories-post-list');

    if (blogPostList) {
        blogPosts.forEach(post => {
            blogPostList.appendChild(createPostListItem(post));
        });
    }
    if (poemsPostList) {
        poems.forEach(post => {
            poemsPostList.appendChild(createPostListItem(post));
        });
    }
    if (storiesPostList) {
        stories.forEach(post => {
            storiesPostList.appendChild(createPostListItem(post));
        });
    }
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    loadHighlights();
    loadPostLists();
});
