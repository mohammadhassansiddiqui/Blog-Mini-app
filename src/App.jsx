import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';

// --- DATA: Our "Database" of Pakistani Tech & Lifestyle Blogs ---
const POSTS = [
  { 
    id: 1, 
    title: "The Rise of Tech in Karachi", 
    excerpt: "How the city of lights is becoming a global software hub.", 
    content: "Karachi's tech scene has exploded in 2026. With thousands of developers working for global firms, the city's infrastructure is rapidly evolving to support the digital economy...", 
    author: "Hassan",
    date: "March 15, 2026"
  },
  { 
    id: 2, 
    title: "Modern React Best Practices", 
    excerpt: "Why staying updated with React 19 is vital for your career.", 
    content: "React continues to dominate the web industry. From Server Components to improved Hooks, mastering these tools ensures you stay competitive in the Pakistani job market...", 
    author: "Zainab",
    date: "March 18, 2026"
  },
  { 
    id: 3, 
    title: "Best Places to Code in Lahore", 
    excerpt: "Top coffee shops and co-working spaces for developers.", 
    content: "Lahore offers some of the most vibrant spaces for digital nomads. From Gulberg to DHA, we've mapped out the best spots with high-speed internet and great chai...", 
    author: "Bilal",
    date: "March 20, 2026"
  }
];

// --- COMPONENTS ---

// 1. The Home Page (List of all cards)
const BlogList = () => (
  <div className="max-w-4xl mx-auto p-6">
    <h1 className="text-4xl font-black text-slate-900 mb-10 text-center">Tech Insights PK</h1>
    <div className="grid gap-8">
      {POSTS.map(post => (
        <div key={post.id} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition">
          <p className="text-emerald-600 text-xs font-bold uppercase mb-2">{post.date}</p>
          <h2 className="text-2xl font-bold text-slate-800 mb-3">{post.title}</h2>
          <p className="text-slate-500 mb-6">{post.excerpt}</p>
          <Link 
            to={`/post/${post.id}`} 
            className="text-slate-900 font-bold border-b-2 border-emerald-400 hover:bg-emerald-50 transition-all"
          >
            Read Full Article →
          </Link>
        </div>
      ))}
    </div>
  </div>
);

// 2. The Detail Page (Finding one post by ID)
const PostDetail = () => {
  const { id } = useParams(); // Gets the ID from the URL (e.g., /post/1)
  const post = POSTS.find(p => p.id === parseInt(id));

  if (!post) return <div className="text-center py-20">Post not found!</div>;

  return (
    <div className="max-w-3xl mx-auto p-6 animate-in fade-in duration-500">
      <Link to="/" className="text-emerald-600 font-bold mb-8 block">← Back to Feed</Link>
      <p className="text-slate-400 mb-2">{post.date} • By {post.author}</p>
      <h1 className="text-4xl font-black text-slate-900 mb-6">{post.title}</h1>
      <div className="prose lg:prose-xl text-slate-700 leading-relaxed">
        {post.content}
      </div>
      <div className="mt-12 p-6 bg-slate-50 rounded-xl border border-slate-100">
        <p className="font-bold text-slate-800">About the Author</p>
        <p className="text-slate-500">{post.author} is a lead contributor at Tech Insights PK based in Pakistan.</p>
      </div>
    </div>
  );
};

// --- MAIN APP ---

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
        <nav className="bg-white border-b border-slate-200 p-4 sticky top-0 z-10">
          <div className="max-w-4xl mx-auto flex justify-between items-center">
            <Link to="/" className="font-black text-xl tracking-tighter uppercase">Blog.io</Link>
            <div className="space-x-4 text-sm font-bold text-slate-500 uppercase">
              <Link to="/" className="hover:text-emerald-600">Feed</Link>
              <span className="cursor-not-allowed opacity-30">News</span>
              <span className="cursor-not-allowed opacity-30">About</span>
            </div>
          </div>
        </nav>

        <main className="py-10">
          <Routes>
            <Route path="/" element={<BlogList />} />
            <Route path="/post/:id" element={<PostDetail />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}