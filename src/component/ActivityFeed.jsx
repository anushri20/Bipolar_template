import React from 'react';
import '../Bootstrap/dist/css/bootstrap.css';
import '../css/main.css';
import '../css/fonts.min.css';
import pic1 from '../img/avatar49-sm.jpg';
import pic2 from '../img/avatar48-sm.jpg';
import pic3 from '../img/avatar47-sm.jpg';
import pic4 from '../img/avatar46-sm.jpg';
import pic5 from '../img/avatar45-sm.jpg';
import pic6 from '../img/avatar44-sm.jpg';
import pic7 from '../img/avatar43-sm.jpg';
import pic8 from '../img/avatar42-sm.jpg';
import pic9 from '../img/avatar41-sm.jpg';

const ActivityFeed = () => {
    return (
        <div>
            {
  /* W-Activity-Feed */
}
<ul className="widget w-activity-feed notification-list">
  <li>
    <div className="author-thumb">
      <img loading="lazy" src={pic1} alt="author" />
    </div>
    <div className="notification-event">
      <a href="#" className="h6 notification-friend">
        Marina Polson
      </a>{" "}
      commented on Jason Mark’s{" "}
      <a href="#" className="notification-link">
        photo.
      </a>
      .
      <span className="notification-date">
        <time className="entry-date updated" dateTime="2004-07-24T18:18">
          2 mins ago
        </time>
      </span>
    </div>
  </li>
  <li>
    <div className="author-thumb">
      <img loading="lazy" src={pic2} alt="author" />
    </div>
    <div className="notification-event">
      <a href="#" className="h6 notification-friend">
        Jake Parker{" "}
      </a>{" "}
      liked Nicholas Grissom’s{" "}
      <a href="#" className="notification-link">
        status update.
      </a>
      .
      <span className="notification-date">
        <time className="entry-date updated" dateTime="2004-07-24T18:18">
          5 mins ago
        </time>
      </span>
    </div>
  </li>
  <li>
    <div className="author-thumb">
      <img loading="lazy" src={pic3} alt="author" />
    </div>
    <div className="notification-event">
      <a href="#" className="h6 notification-friend">
        Mary Jane Stark{" "}
      </a>{" "}
      added 20 new photos to her{" "}
      <a href="#" className="notification-link">
        gallery album.
      </a>
      .
      <span className="notification-date">
        <time className="entry-date updated" dateTime="2004-07-24T18:18">
          12 mins ago
        </time>
      </span>
    </div>
  </li>
  <li>
    <div className="author-thumb">
      <img loading="lazy" src={pic4} alt="author" />
    </div>
    <div className="notification-event">
      <a href="#" className="h6 notification-friend">
        Nicholas Grissom{" "}
      </a>{" "}
      updated his profile{" "}
      <a href="#" className="notification-link">
        photo
      </a>
      .
      <span className="notification-date">
        <time className="entry-date updated" dateTime="2004-07-24T18:18">
          1 hour ago
        </time>
      </span>
    </div>
  </li>
  <li>
    <div className="author-thumb">
      <img loading="lazy" src={pic5} alt="author" />
    </div>
    <div className="notification-event">
      <a href="#" className="h6 notification-friend">
        Marina Valentine{" "}
      </a>{" "}
      commented on Chris Greyson’s{" "}
      <a href="#" className="notification-link">
        status update
      </a>
      .
      <span className="notification-date">
        <time className="entry-date updated" dateTime="2004-07-24T18:18">
          1 hour ago
        </time>
      </span>
    </div>
  </li>
  <li>
    <div className="author-thumb">
      <img loading="lazy" src={pic6} alt="author" />
    </div>
    <div className="notification-event">
      <a href="#" className="h6 notification-friend">
        Green Goo Rock{" "}
      </a>{" "}
      posted a{" "}
      <a href="#" className="notification-link">
        status update
      </a>
      .
      <span className="notification-date">
        <time className="entry-date updated" dateTime="2004-07-24T18:18">
          1 hour ago
        </time>
      </span>
    </div>
  </li>
  <li>
    <div className="author-thumb">
      <img loading="lazy" src={pic7} alt="author" />
    </div>
    <div className="notification-event">
      <a href="#" className="h6 notification-friend">
        Elaine Dreyfuss
      </a>{" "}
      liked your{" "}
      <a href="#" className="notification-link">
        blog post
      </a>
      .
      <span className="notification-date">
        <time className="entry-date updated" dateTime="2004-07-24T18:18">
          2 hours ago
        </time>
      </span>
    </div>
  </li>
  <li>
    <div className="author-thumb">
      <img loading="lazy" src={pic8} alt="author" />
    </div>
    <div className="notification-event">
      <a href="#" className="h6 notification-friend">
        Elaine Dreyfuss
      </a>{" "}
      commented on your{" "}
      <a href="#" className="notification-link">
        blog post
      </a>
      .
      <span className="notification-date">
        <time className="entry-date updated" dateTime="2004-07-24T18:18">
          2 hours ago
        </time>
      </span>
    </div>
  </li>
  <li>
    <div className="author-thumb">
      <img loading="lazy" src={pic9} alt="author" />
    </div>
    <div className="notification-event">
      <a href="#" className="h6 notification-friend">
        Bruce Peterson{" "}
      </a>{" "}
      changed his{" "}
      <a href="#" className="notification-link">
        profile picture
      </a>
      .
      <span className="notification-date">
        <time className="entry-date updated" dateTime="2004-07-24T18:18">
          15 hours ago
        </time>
      </span>
    </div>
  </li>
</ul>;
{
  /* .. end W-Activity-Feed */
}

        </div>
    )
}

export default ActivityFeed
