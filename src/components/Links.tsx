function Links() {
  return (
    <div className="card">
      <h3 className="card-title">7. Links</h3>
      <div className="demonstration-group light-bg">
        <a href="https://halvamedia.sovcombank.ru/60642/IMG_5330_mem_ochki.jpg">
          <button className="btn btn--secondary">See options!</button>
        </a>
        <a
          className="link"
          href="https://youtu.be/dQw4w9WgXcQ?si=NoeZOfOwGMVmDZfs"
        >
          Simple anchor link
        </a>
        <a
          href="https://media4.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3aGIyaW15OTVoa2JyOHdtZGJvd2RjNzZiNnl1cnA5aGZqcGVmemRpcyZlcD12MV9naWZzX3JlbGF0ZWQmY3Q9Zw/WEK0TBAEtl4bJfALWG/giphy.webp"
          target="_blank"
          className="link"
          rel="noopener noreferrer"
        >
          Open in new tab link
        </a>
      </div>
      <p className="card-text">
        Links can be simple text links, button links, open in a new tab, jump
        to a page section (anchor), link to email or phone, include URL
        parameters, or be used to download files.
      </p>
    </div>
  );
}

export default Links;
