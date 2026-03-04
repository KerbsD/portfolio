import WindowControl from "@/components/WindowControl";
import WindowWrapper from "@/components/WindowWrapper";
import { blogPosts } from "@/constants";
import {
  PanelLeft,
  ChevronLeft,
  ChevronRight,
  ShieldHalf,
  Search,
  Share,
  Plus,
  Copy,
  MoveRight,
} from "lucide-react";

function Safari() {
  return (
    <>
      <div id="window-header">
        <WindowControl target="safari" />

        <PanelLeft className="ml-10 icon" />

        <div className="flex items-center gap-1 ml-5">
          <ChevronLeft className="icon" />
          <ChevronRight className="icon" />
        </div>

        <div className="flex-1 flex-center gap-3">
          <ShieldHalf className="icon" />

          <div className="search">
            <Search className="icon" />
            <input
              type="text"
              placeholder="Search or enter website name"
              className="flex-1"
            />
          </div>
        </div>

        <div className="flex items-center gap-5">
          <Share className="icon" />
          <Plus className="icon" />
          <Copy className="icon" />
        </div>
      </div>

      <div className="blog">
        {!blogPosts && <h2>My Developer Blog</h2>}

        <div className="space-y-8">
          {blogPosts.length > 0 ? (
            blogPosts.map(({ id, image, title, date, link }) => (
              <div key={id} className="blog-post">
                <div className="col-span-2">
                  <img src={image} alt={title} />
                </div>

                <div className="content">
                  <p>{date}</p>
                  <h3>{title}</h3>
                  <a href={link} target="_blank" rel="noopener noreferrer">
                    Check out the full post <MoveRight className="icon-hover" />
                  </a>
                </div>
              </div>
            ))
          ) : (
            <div className="empty-blog">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
              <h3>Blog Posts Are Currently Empty</h3>
              <p>
                Kirby is currently thinking of topics to write about. Check back
                soon! <span>:)</span>
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default WindowWrapper(Safari, "safari");
